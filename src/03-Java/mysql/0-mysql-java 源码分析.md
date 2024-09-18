---
title: mysql-java 源码分析
order: 1
category:
  - MySQL
tag: []
author: H·T·L
date: 2024-07-25
permalink: /03-Java/MySQL/oz7s285v/
---




[博客一]: https://www.codetd.com/en/article/13197700	" 分析"

# mysql-connector-java源码解析（一）

## 前言：

mysql作为常用的数据库，笔者一直以来都觉得比较神秘。

在实际应用中，我们可以通过其Navicat、mysql command-line、java-mysql-jar等方式来与其进行进行连接操作。

在笔者接触到越来越多的中间件应用后，mysql的神秘面纱就被慢慢揭开了。故决定将这个过程通过博客的方式记录下来，并且当前篇文章作为Mycat的前序篇，对于需要学习Mycat的同学来说，也是有必要去了解的。

本文主要通过对mysql-connector-java源码的分析来了解client与mysql-server创建连接握手的基本过程。

**1.准备环境**

  \* Windows环境下的mysql服务安装（笔者安装版本为5.7.17）

  \* jdk1.8.0_131

  \* mysql-connector-java-5.1.35.jar

  \* 简单表结构（student）

```java
CREATE TABLE student  (
  id int(11) NOT NULL AUTO_INCREMENT,
  sno varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  sname varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (id) USING BTREE
);
```

## 2.代码准备

  通过最原始的JDBC的方式来创建于mysql-server的连接。

```java
// 创建mysql连接基本类
public class DBConn {
    private static final String jdbcdriver="com.mysql.jdbc.Driver";
    // origin
    private static final String jdbcurl="jdbc:mysql://localhost:3306/db1?useUnicode=true&characterEncoding=utf-8";
    private static final String username="root";
    private static final String password="root";
    private static final String driver = "com.mysql.jdbc.Driver";
    private static final Connection conn = null;

    /**
     * 连接数据库
     * @return
     */
    public static Connection conn() {
        Connection conn = null;
        try {
            Class.forName(driver);
            try {
                conn = DriverManager.getConnection(jdbcurl, username, password);
            } catch (SQLException e) {
                e.printStackTrace();
            }
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        return conn;
    }

    /**
     * 关闭数据库链接
     */
    public static void close() {
        if(conn != null) {
            try {
                conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
```

本文主要就是对DriverManager.getConnection(jdbcurl, username, password)的源码解析



## **3.创建连接过程分析**

### 3.1 Class.forName(driver)

  此时的driver即是com.mysql.jdbc.Driver，Class.forName不需要多介绍，java的一种类加载方式，使用装载当前类的类加载器来装载指定的class类。

  该步骤的意义就是将mysql的Driver加载到JVM中。并且会执行Driver的static方法，源码如下：

```java
// com.mysql.jdbc.Driver
public class Driver extends NonRegisteringDriver implements java.sql.Driver {
    public Driver() throws SQLException {
    }

    static {
        try {
            // 加载后，会默认执行
            DriverManager.registerDriver(new Driver());
        } catch (SQLException var1) {
            throw new RuntimeException("Can't register driver!");
        }
    }
}

// DriverManager.registerDriver
public static synchronized void registerDriver(java.sql.Driver driver,
                                               DriverAction da)
    throws SQLException {

    // CopyOnWriteArrayList<DriverInfo> registeredDrivers = new CopyOnWriteArrayList<>()
    // 直接将Driver包装成DriverInfo添加到DriverManger中
    if(driver != null) {
        registeredDrivers.addIfAbsent(new DriverInfo(driver, da));
    } else {
        // This is for compatibility with the original DriverManager
        throw new NullPointerException();
    }
...
}
```

**总结：执行完Class.forName("com.mysql.jdbc.Driver")后，该Driver对象就被添加到DriverManger中**



### **3.2 getConnection** 

  下面就是最关键的这一句代码，DriverManager.getConnection(jdbcurl, username, password);通用的这句创建Connection的代码，可以创建不同Driver类型的连接，还是蛮神奇的，下面我们就来一起看下吧。

```java
// 1.DriverManager.getConnection(String url,String user, String password)
public static Connection getConnection(String url,
                                       String user, String password) throws SQLException {
    java.util.Properties info = new java.util.Properties();

    // 拼装用户名密码到info中
    if (user != null) {
        info.put("user", user);
    }
    if (password != null) {
        info.put("password", password);
    }

    return (getConnection(url, info, Reflection.getCallerClass()));
}

// 2.DriverManager.getConnection(String url, java.util.Properties info, Class<?> caller)
private static Connection getConnection(
        String url, java.util.Properties info, Class<?> caller) {
    ...
    for(DriverInfo aDriver : registeredDrivers) {
            if(isDriverAllowed(aDriver.driver, callerCL)) {
                try {
                    // 主要就是这一句在创建连接
                    // 本质上还是调用了具体使用的Driver的connect方法
                    // 所以就是调用NonRegisteringDriver.connect(String url, Properties info)实现
                    Connection con = aDriver.driver.connect(url, info);
                    if (con != null) {
                        // Success!
                        println("getConnection returning " + aDriver.driver.getClass().getName());
                        return (con);
                    }
                } catch (SQLException ex) {
                    if (reason == null) {
                        reason = ex;
                    }
                }
...

        }
	...
}
    
// 3.NonRegisteringDriver.connect(String url, Properties info)
public Connection connect(String url, Properties info) throws SQLException {
        ...
        Properties props = null;
        if ((props = this.parseURL(url, info)) == null) {
            return null;
        } else if (!"1".equals(props.getProperty("NUM_HOSTS"))) {
            return this.connectFailover(url, info);
        } else {
            try {
                // 在这里创建Connection
                com.mysql.jdbc.Connection newConn
                    = ConnectionImpl.getInstance(this.host(props), this.port(props), props, this.database(props), url);
                return newConn;
           ...
        }
    }
    
// 4.ConnectionImpl.getInstance
protected static Connection getInstance(String hostToConnectTo, int portToConnectTo, Properties info, String databaseToConnectTo, String url) throws SQLException {
    return (Connection)(!Util.isJdbc4() ? 
        new ConnectionImpl(hostToConnectTo, portToConnectTo, info, databaseToConnectTo, url) : 
        // 看JDBC版本，笔者这里是JDBC4，故使用com.mysql.jdbc.JDBC4Connection来连接
        (Connection)Util.handleNewInstance(JDBC_4_CONNECTION_CTOR, new Object[]{hostToConnectTo, portToConnectTo, info, databaseToConnectTo, url}, (ExceptionInterceptor)null));
}
    
// 5.com.mysql.jdbc.JDBC4Connection实例创建
public class JDBC4Connection extends ConnectionImpl {
// JDBC4Connection中的构造方法直接使用ConnectionImplement的构造方法
}
    
// 6.com.mysql.jdbc.ConnectionImpl构造方法
public ConnectionImpl(String hostToConnectTo, int portToConnectTo, Properties info, String databaseToConnectTo, String url) throws SQLException {
    ...
    this.port = portToConnectTo;
    this.database = databaseToConnectTo;
    this.myURL = url;
    this.user = info.getProperty("user");
    this.password = info.getProperty("password");
    ...
    try {
            this.dbmd = this.getMetaData(false, false);
            this.initializeSafeStatementInterceptors();
            // 在这里创建socket连接
            this.createNewIO(false);
            this.unSafeStatementInterceptors();
        } catch (SQLException var11) {
        ...
        }
}
    
// 7.ConnectionImpl.createNewIO
public void createNewIO(boolean isForReconnect) throws SQLException {
    synchronized(this.getConnectionMutex()) {
        Properties mergedProps = this.exposeAsProperties(this.props);
        // 是否高可用，如果配置了高可用，针对不可用时会重试多次，本文中分析一次连接即可
        if (!this.getHighAvailability()) {
            this.connectOneTryOnly(isForReconnect, mergedProps);
        } else {
            this.connectWithRetries(isForReconnect, mergedProps);
        }
    }
}
    
// 8.ConnectionImpl.connectOneTryOnly(boolean isForReconnect, Properties mergedProps)
private void connectOneTryOnly(boolean isForReconnect, Properties mergedProps) throws SQLException {
        Object var3 = null;

        try {
            // 核心连接方法
            this.coreConnect(mergedProps);
            // 赋值其他参数
            this.connectionId = this.io.getThreadId();
            this.isClosed = false;
            boolean oldAutoCommit = this.getAutoCommit();
            int oldIsolationLevel = this.isolationLevel;
            boolean oldReadOnly = this.isReadOnly(false);
            String oldCatalog = this.getCatalog();
            this.io.setStatementInterceptors(this.statementInterceptors);
            this.initializePropsFromServer();
            if (isForReconnect) {
                this.setAutoCommit(oldAutoCommit);
                if (this.hasIsolationLevels) {
                    this.setTransactionIsolation(oldIsolationLevel);
                }

                this.setCatalog(oldCatalog);
                this.setReadOnly(oldReadOnly);
            }
...
    
// 9.ConnectionImpl.coreConnect(Properties mergedProps)
private void coreConnect(Properties mergedProps) throws SQLException, IOException {
 ...
    this.port = newPort;
    this.host = newHost;
    this.sessionMaxRows = -1;
    // 创建长连接
    this.io = new MysqlIO(newHost, newPort, mergedProps, this.getSocketFactoryClassName(), this.getProxy(), this.getSocketTimeout(), this.largeRowSizeThreshold.getValueAsInt());
    // 三次握手完成后，进行信息交换，完成用户名密码验证
    this.io.doHandshake(this.user, this.password, this.database);
}
```



### **3.3 MySQLIO**

  从3.2的代码流程来看，最终创建长连接的代码在于MysqlIO的构造方法中。下面我们来详细看下

```java
// MysqlIO.java
public MysqlIO(String host, int port, Properties props, String socketFactoryClassName, MySQLConnection conn, int socketTimeout, int useBufferRowSizeThreshold) throws IOException, SQLException {
        this.connection = conn;
 
    ...
        this.reusablePacket = new Buffer(1024);
        this.sendPacket = new Buffer(1024);
        // 基本参数全部赋予MysqlIO
        this.port = port;
        this.host = host;
        this.socketFactoryClassName = socketFactoryClassName;
        this.socketFactory = this.createSocketFactory();
    
    ...
        try {
            // 通过socketFactory.connect来创建长连接
            this.mysqlConnection = this.socketFactory.connect(this.host, this.port, props);
        
            ...
            // 创建输入输出流
            if (this.connection.getUseReadAheadInput()) {
                this.mysqlInput = new ReadAheadInputStream(this.mysqlConnection.getInputStream(), 16384, this.connection.getTraceProtocol(), this.connection.getLog());
            } else if (this.connection.useUnbufferedInput()) {
                this.mysqlInput = this.mysqlConnection.getInputStream();
            } else {
                this.mysqlInput = new BufferedInputStream(this.mysqlConnection.getInputStream(), 16384);
            }

            this.mysqlOutput = new BufferedOutputStream(this.mysqlConnection.getOutputStream(), 16384);
        }
    ...
}

// StandardSocketFactory.connect
public Socket connect(String hostname, int portNumber, Properties props) throws SocketException, IOException {
        if (props != null) {
            this.host = hostname;
            this.port = portNumber;
            ...
            if (this.host != null) {
                while(i < possibleAddresses.length) {
                    try {
                        // new Socket();创建原生的Socket
                        this.rawSocket = this.createSocket(props);
                        this.configureSocket(this.rawSocket, props);
                        InetSocketAddress sockAddr = new InetSocketAddress(possibleAddresses[i], this.port);
                        if (localSockAddr != null) {
                            this.rawSocket.bind(localSockAddr);
                        }

                        // 原生的socket连接到mysql-server
                        this.rawSocket.connect(sockAddr, this.getRealTimeout(connectTimeout));
                        break;
                    }
                    ...
            }
        }
    
}
```

**总结：最终我们可以看到，客户端与mysql-server的连接，还是通过原生的Socket来创建的。并且通过创建Socket的inputStream和outputStream来发送和接收消息。**



### **3.4 MysqlIO.doHandshark()**

  相比较常规的client-server连接而言，mysql的连接创建，在三次握手之后，还需要执行一个doHandshark()方法，该方法本质上是来验证客户端输入的对应库的用户名密码等信息。

  具体协议内容参考dev.mysql.com/doc/internals/en/connection-phase-packets.html#Protocol::HandsharkV10



**整个过程可以分为三个阶段：**

\* mysql-server发送handshark信息，里面包括mysql的基本信息，加密seed等

\* client根据seed信息对password进行加密，将用户名密码等信息发送给mysql-server

\* mysql-server对接收到的加密密码进行密码比对，匹配后则返回okay包



下面通过代码来分析下handshark过程：

**1）mysql-server发送handshark信息**

  这里可以直接参考mycat的代码，下面就是mycat中HandsharkPacket.java

  可以直接看到server发送的消息体信息

```java
// HandsharkPacket.write()
public void write(FrontendConnection c) {
    ByteBuffer buffer = c.allocate();
    BufferUtil.writeUB3(buffer, calcPacketSize());
    buffer.put(packetId);
    buffer.put(protocolVersion);
    BufferUtil.writeWithNull(buffer, serverVersion);
    BufferUtil.writeUB4(buffer, threadId);
    BufferUtil.writeWithNull(buffer, seed);
    BufferUtil.writeUB2(buffer, serverCapabilities);
    buffer.put(serverCharsetIndex);
    BufferUtil.writeUB2(buffer, serverStatus);
    buffer.put(FILLER_13);
    //        buffer.position(buffer.position() + 13);
    BufferUtil.writeWithNull(buffer, restOfScrambleBuff);
    c.write(buffer);
}
```

**2）client解析handshark信息**

  就是解析上面mysql-server发送的HandsharkPacket包信息

```java
// MysqlIO.doHandshake
void doHandshake(String user, String password, String database) throws SQLException {
    this.checkPacketSequence = false;
    this.readPacketSequence = 0;
    // 在这里获取server发送来的hardshark包信息
    Buffer buf = this.readPacket();
    this.protocolVersion = buf.readByte();

    ...
    // 读取包字段 serverVersion threadId  seed ... 
    this.serverVersion = buf.readString("ASCII", this.getExceptionInterceptor());
    this.threadId = buf.readLong();
    this.seed = buf.readString("ASCII", this.getExceptionInterceptor());
    ...
}

// MysqlIO.readPacket
protected final Buffer readPacket() throws SQLException {
    try {
        ...
        // 获取包长度（占用3byte）
        int packetLength = (this.packetHeaderBuf[0] & 255) + ((this.packetHeaderBuf[1] & 255) << 8) + ((this.packetHeaderBuf[2] & 255) << 16);
		...
        // 获取sequenceId信息（占用1byte）
        byte multiPacketSeq = this.packetHeaderBuf[3];
        ...
        // 包体信息读取到buffer中
        byte[] buffer = new byte[packetLength + 1];
        int numBytesRead = this.readFully(this.mysqlInput, buffer, 0, packetLength);

        ...
}  
```

**3）client根据seed信息加密password后，发送包信息给server**

```java
// MysqlIO.proceedHandshakeWithPluggableAuthentication
private void proceedHandshakeWithPluggableAuthentication(String user, String password, String database, Buffer challenge) throws SQLException {
    if (this.authenticationPlugins == null) {
        this.loadAuthenticationPlugins();
    }

    int passwordLength = 16;
    int userLength = user != null ? user.length() : 0;
    int databaseLength = database != null ? database.length() : 0;

    ...
    while(0 < counter--) {
            String enc;
            // client发送验证包信息时，done为null
            if (done == null) {
                if (challenge != null) {
                    ...
                    plugin = this.getAuthenticationPlugin(enc);
                    if (plugin == null) {
                        plugin = this.getAuthenticationPlugin(this.defaultAuthenticationPluginProtocolName);
                    }

                    // 拼装参数
                    this.checkConfidentiality(plugin);
                    fromServer = new Buffer(StringUtils.getBytes(this.seed));
                }
            }else {
             ...   
            }
        ...
            
    try {
        // 进行password加密操作，默认使用MysqlNativePasswordPlugin执行
        // Security.scramble411(pwd, fromServer.readString(), this.connection.getPasswordCharacterEncoding())
        plugin.setAuthenticationParameters(user, password);
        done = plugin.nextAuthenticationStep(fromServer, toServer);
    } catch (SQLException var19) {
        throw SQLError.createSQLException(var19.getMessage(), var19.getSQLState(), var19, this.getExceptionInterceptor());
    }
        
    if (toServer.size() > 0) {
         if (challenge == null) {
             ...
         } else if (challenge.isAuthMethodSwitchRequestPacket()) {
             ...
         } else if (!challenge.isRawPacket() && !old_raw_challenge) {
             enc = this.getEncodingForHandshake();
             last_sent = new Buffer(packLength);
             last_sent.writeLong(this.clientParam);
             last_sent.writeLong((long)this.maxThreeBytes);
             this.appendCharsetByteForHandshake(last_sent, enc);
             last_sent.writeBytesNoNull(new byte[23]);
             last_sent.writeString(user, enc, this.connection);
             ...
             // client发送用户名密码等相关信息到server端
             this.send(last_sent, last_sent.getPosition());
         }
    
```

**4）mysql-server验证用户名密码成功后，返回OK包至client，client解析响应包**

```java
// MysqlIO.proceedHandshakeWithPluggableAuthentication
private void proceedHandshakeWithPluggableAuthentication(String user, String password, String database, Buffer challenge) throws SQLException {
    if (this.authenticationPlugins == null) {
        this.loadAuthenticationPlugins();
    }

    ...
    while(0 < counter--) {
        String enc;
            // 此时done=true，执行else逻辑
            if (done == null) {
                ...
            }else {
                // 解析回执包之后，
                challenge = this.checkErrorPacket();
                old_raw_challenge = false;
                ++this.packetSequence;
                ++this.compressedPacketSequence;
                // 验证是否OK包，正确的话，client与mysql-server的连接完成
                if (challenge.isOKPacket()) {
                    if (!done) {
                        throw SQLError.createSQLException(Messages.getString("Connection.UnexpectedAuthenticationApproval", new Object[]{plugin.getProtocolPluginName()}), this.getExceptionInterceptor());
                    }

                    plugin.destroy();
                    break;
                }
            }
    }
    
// MysqlIO.checkErrorPacket
    private Buffer checkErrorPacket(int command) throws SQLException {
        Buffer resultPacket = null;
        this.serverStatus = 0;

        try {
            // 解析回执包
            resultPacket = this.reuseAndReadPacket(this.reusablePacket);
        } catch (SQLException var4) {
            throw var4;
        } catch (Exception var5) {
            throw SQLError.createCommunicationsException(this.connection, this.lastPacketSentTimeMs, this.lastPacketReceivedTimeMs, var5, this.getExceptionInterceptor());
        }

        this.checkErrorPacket(resultPacket);
        return resultPacket;
    }
```

**总结：client与mysql-server的连接，除了常规的Socket连接三次握手之外，还多了一步，验证client的用户名密码正确性，只有输入正确的用户名密码，当前连接才算建立完成。**

**最后用一张图，来总结下整个过程。**

![mysql 建立连接过程](http://images.hicoding.top/i/2024/07/25/z2t7tr-2.webp)



# mysql-connector-java源码解析（二）

## **前言：**

  在上一篇文章中，我们分析了client与mysql-server连接的过程。在连接建立完成后，后续就要在连接上执行CRUD操作了。本篇文章我们来分析下最复杂的查询操作。



## **1.代码准备**

  环境与上一篇文章一样，下面是使用JDBC进行查询的示例

```java
public static void query() {
    // 使用DBConn中提供的创建连接的方法
    conn = DBConn.conn();
    String sql = "select * from student";

    ResultSet res = null;
    try {
        // 执行查询
        res = conn.createStatement().executeQuery(sql);
        ResultSetMetaData meta = res.getMetaData();
        String str = "";
        for (int i = 1; i <= meta.getColumnCount(); i++) {
            str += meta.getColumnName(i) + "   ";
        }
        System.out.println("\t" + str);
        str = "";
        // 遍及结果集
        while (res.next()) {
            for (int i = 1; i <= meta.getColumnCount(); i++) {
                str += res.getString(i) + "   ";
            }
            System.out.println("\t" + str);
            str = "";
        }
    } catch (SQLException e) {
        e.printStackTrace();
    }
}
```

## **2.查询过程分析**

### **2.1 client发送查询请求**

```java
// 1.StatementImpl.executeQuery()
public ResultSet executeQuery(String sql) throws SQLException {
        synchronized(this.checkClosed().getConnectionMutex()) {
            MySQLConnection locallyScopedConn = this.connection;
            ...
            locallyScopedConn.setSessionMaxRows(this.maxRows);
            this.statementBegins();
            // 执行SQL
            this.results = locallyScopedConn.execSQL(this, sql, this.maxRows, (Buffer)null, this.resultSetType, this.resultSetConcurrency, doStreaming, this.currentCatalog, cachedFields);
            ...
        }
}

// 2.ConnectionImpl.execSQL()
public ResultSetInternalMethods execSQL(StatementImpl callingStatement, String sql, int maxRows, Buffer packet, int resultSetType, int resultSetConcurrency, boolean streamResults, String catalog, Field[] cachedMetadata, boolean isBatch) throws SQLException {
        synchronized(this.getConnectionMutex()) {
            long queryStartTime = 0L;
            ...
            if (packet == null) {
                    String encoding = null;
                    if (this.getUseUnicode()) {
                        encoding = this.getEncoding();
                    }

                    // 交由MysqlIO来执行
                    ResultSetInternalMethods var36 = this.io.sqlQueryDirect(callingStatement, sql, encoding, (Buffer)null, maxRows, resultSetType, resultSetConcurrency, streamResults, catalog, cachedMetadata);
                    return var36;
                }
        }
}

// 3.MysqlIO.sqlQueryDirect()
final ResultSetInternalMethods sqlQueryDirect(StatementImpl callingStatement, String query, String characterEncoding, Buffer queryPacket, int maxRows, int resultSetType, int resultSetConcurrency, boolean streamResults, String catalog, Field[] cachedMetadata) throws Exception {
        ++this.statementExecutionDepth;
		if (characterEncoding != null) {
            if (this.platformDbCharsetMatches) {
                this.sendPacket.writeStringNoNull(query, characterEncoding, this.connection.getServerCharset(), this.connection.parserKnowsUnicode(), this.connection);
            } else if (StringUtils.startsWithIgnoreCaseAndWs(query, "LOAD DATA")) {
                this.sendPacket.writeBytesNoNull(StringUtils.getBytes(query));
            } else {
                // 拼装发送包信息
                this.sendPacket.writeStringNoNull(query, characterEncoding, this.connection.getServerCharset(), this.connection.parserKnowsUnicode(), this.connection);
            }
        } else {
            this.sendPacket.writeStringNoNull(query);
        }
        ...
        // 执行发送
        Buffer resultPacket = this.sendCommand(3, (String)null, queryPacket, false, (String)null, 0);
		...
    }
}

// 4.MysqlIO.sendCommand()
final Buffer sendCommand(int command, String extraData, Buffer queryPacket, boolean skipCheck, String extraDataCharEncoding, int timeoutMillis) throws SQLException {
    ...
    this.packetSequence = -1;
    this.compressedPacketSequence = -1;
    // 调用send方法进行最终发送
    this.send(queryPacket, queryPacket.getPosition());
}

// 5.MysqlIO.send()
private final void send(Buffer packet, int packetLen) throws SQLException {
    ...
    Buffer packetToSend = packet;
    packet.setPosition(0);
    packet.writeLongInt(packetLen - 4);
    packet.writeByte(this.packetSequence);
    ...
    // 最终使用outputStream进行write操作，将包发送出去
    this.mysqlOutput.write(packetToSend.getByteBuffer(), 0, packetLen);
    this.mysqlOutput.flush();
}
```

客户端发送请求协议可以参考：dev.mysql.com/doc/internals/en/com-query.html



### **2.2 客户端解析服务端返回结果集**

  在client发送完请求协议之后，服务端处理完成之后，将结果集返回给client。client的处理过程如下：

```java
// MysqlIO.sendCommand()
final Buffer sendCommand(int command, String extraData, Buffer queryPacket, boolean skipCheck, String extraDataCharEncoding, int timeoutMillis) throws SQLException {
	...
    // 2.1中分析的发送请求代码
    this.send(queryPacket, queryPacket.getPosition()); 
    
    // 接收响应结果集
    Buffer returnPacket = null;
    if (!skipCheck) {
        if (command == 23 || command == 26) {
            this.readPacketSequence = 0;
            this.packetSequenceReset = true;
        }

        // 在这里解析
        returnPacket = this.checkErrorPacket(command);
    }
}

// 2.MysqlIO.checkErrorPacket()
private Buffer checkErrorPacket(int command) throws SQLException {
 	// 读取结果
    resultPacket = this.reuseAndReadPacket(this.reusablePacket);
    
    // 检查包异常信息
    this.checkErrorPacket(resultPacket);
}

// 3.MysqlIO.reuseAndReadPacket
private final Buffer reuseAndReadPacket(Buffer reuse, int existingPacketLength) throws SQLException {
 	// 先读取包头信息，
    int lengthRead = this.readFully(this.mysqlInput, this.packetHeaderBuf, 0, 4);
    if (lengthRead < 4) {
        this.forceClose();
        throw new IOException(Messages.getString("MysqlIO.43"));
    }

    // 获取整包的长度
    packetLength = (this.packetHeaderBuf[0] & 255) + ((this.packetHeaderBuf[1] & 255) << 8) + ((this.packetHeaderBuf[2] & 255) << 16);
	...
    // 根据获取到的包长度，读取对应长度的字节，并读入到Buffer中
    int numBytesRead = this.readFully(this.mysqlInput, reuse.getByteBuffer(), 0, packetLength);
    ...        
}

// sendCommand()整个方法主要返回的就是Buffer，里面是响应集字节，下面继续回到sendComand的上层方法
// 4.MysqlIO.sqlQueryDirect
final ResultSetInternalMethods sqlQueryDirect(StatementImpl callingStatement, String query, String characterEncoding, Buffer queryPacket, int maxRows, int resultSetType, int resultSetConcurrency, boolean streamResults, String catalog, Field[] cachedMetadata) throws Exception {
 	...
    Buffer resultPacket = this.sendCommand(3, (String)null, queryPacket, false, (String)null, 0);
    ...        
    // 在这里将结果集解析成result
    ResultSetInternalMethods rs = this.readAllResults(callingStatement, maxRows, resultSetType, resultSetConcurrency, streamResults, catalog, resultPacket, false, -1L, cachedMetadata);
            
}

// 5.MysqlIO.readAllResults
protected final ResultSetImpl readResultsForQueryOrUpdate(StatementImpl callingStatement, int maxRows, int resultSetType, int resultSetConcurrency, boolean streamResults, String catalog, Buffer resultPacket, boolean isBinaryEncoded, long preSentColumnCount, Field[] metadataFromCache) throws SQLException {
    // 获取返回的column数    
    long columnCount = resultPacket.readFieldLength();
 
    // 解析结果
    ResultSetImpl results = this.getResultSet(callingStatement, columnCount, maxRows, resultSetType, resultSetConcurrency, streamResults, catalog, isBinaryEncoded, metadataFromCache);  
}

// 6.MysqlIO.getResultSet
protected ResultSetImpl getResultSet(StatementImpl callingStatement, long columnCount, int maxRows, int resultSetType, int resultSetConcurrency, boolean streamResults, String catalog, boolean isBinaryEncoded, Field[] metadataFromCache) throws SQLException {
    Field[] fields = null;
    // 先解析field包信息
    for(i = 0; (long)i < columnCount; ++i) {
        Buffer fieldPacket = null;
        fieldPacket = this.readPacket();
        fields[i] = this.unpackField(fieldPacket, false);
    }
    
    // 解析具体内容包
    Buffer packet = this.reuseAndReadPacket(this.reusablePacket);
    this.readServerStatusForResultSets(packet);
    ...
        
    prepStmt = null;
    Object rowData;
    if (!streamResults) {
        rowData = this.readSingleRowSet(columnCount, maxRows, resultSetConcurrency, isBinaryEncoded, metadataFromCache == null ? fields : metadataFromCache);
    } else {
        rowData = new RowDataDynamic(this, (int)columnCount, metadataFromCache == null ? fields : metadataFromCache, isBinaryEncoded);
        this.streamingData = (RowData)rowData;
    }
    // 将解析到的内容包信息封装到JDBC4ResultSet.rowData中
    ResultSetImpl rs = this.buildResultSetWithRows(callingStatement, catalog, metadataFromCache == null ? fields : metadataFromCache, (RowData)rowData, resultSetType, resultSetConcurrency, isBinaryEncoded);
    return rs;
}
```

## 总结：

针对ResultSet结果集，我们先将column的信息解析出来，然后再解析column的明细信息，为什么会这样做呢？

具体可以参考：dev.mysql.com/doc/internals/en/binary-protocol-resultset.html



