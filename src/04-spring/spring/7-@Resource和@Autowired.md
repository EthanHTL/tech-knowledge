---
title: 7-@Resource和@Autowired
order: 1
category: []
tag: []
author: H·T·L
date: 2024-08-07
permalink: /04-spring/spring/485hxo30/
---
## 注解

### [Spring注解@Resource和@Autowired区别对比](https://www.cnblogs.com/think-in-java/p/5474740.html)

@Resource和@Autowired都是做bean的注入时使用，其实@Resource并不是Spring的注解，它的包是javax.annotation.Resource，需要导入，但是Spring支持该注解的注入。

#### 1. 共同点

两者都可以写在字段和setter方法上。两者如果都写在字段上，那么就不需要再写setter方法。

#### 2.不同点

（1）@Autowired

@Autowired为Spring提供的注解，需要导入包org.springframework.beans.factory.annotation.Autowired;只按照byType注入。

```java
public class TestServiceImpl {
    // 下面两种@Autowired只要使用一种即可
    @Autowired
    private UserDao userDao; // 用于字段上
    
    @Autowired
    public void setUserDao(UserDao userDao) { // 用于属性的方法上
        this.userDao = userDao;
    }
}
```

**@Autowired**注解是按照类型（byType）装配依赖对象，默认情况下它要求依赖对象必须存在，如果允许null值，可以设置它的required属性为false。如果我们想使用按照名称（byName）来装配，可以结合@Qualifier注解一起使用。(通过类型匹配找到多个candidate,在没有@Qualifier、@Primary注解的情况下，会使用对象名作为最后的fallback匹配)如下：

```java
public class TestServiceImpl {
    @Autowired
    @Qualifier("userDao")
    private UserDao userDao;
}
```

（2）@Resource

**@Resource**默认按照ByName自动注入，由J2EE提供，需要导入包javax.annotation.Resource。@Resource有两个重要的属性：name和type，而Spring将@Resource注解的name属性解析为bean的名字，而type属性则解析为bean的类型。所以，如果使用name属性，则使用byName的自动注入策略，而使用type属性时则使用byType自动注入策略。如果既不制定name也不制定type属性，这时将通过反射机制使用byName自动注入策略。

```java
public class TestServiceImpl {
    // 下面两种@Resource只要使用一种即可
    @Resource(name="userDao")
    private UserDao userDao; // 用于字段上
    
    @Resource(name="userDao")
    public void setUserDao(UserDao userDao) { // 用于属性的setter方法上
        this.userDao = userDao;
    }
}
```

注：最好是将@Resource放在setter方法上，因为这样更符合面向对象的思想，通过set、get去操作属性，而不是直接去操作属性。

**@Resource**装配顺序：

①如果同时指定了name和type，则从Spring上下文中找到唯一匹配的bean进行装配，找不到则抛出异常。

②如果指定了name，则从上下文中查找名称（id）匹配的bean进行装配，找不到则抛出异常。

③如果指定了type，则从上下文中找到类似匹配的唯一bean进行装配，找不到或是找到多个，都会抛出异常。

④如果既没有指定name，又没有指定type，则自动按照byName方式进行装配；如果没有匹配，则回退为一个原始类型进行匹配，如果匹配则自动装配。

@Resource的作用相当于@Autowired，只不过@Autowired按照byType自动注入。



## 2. 文件上传

pom

```xml-dtd
<dependency>
    <groupId>commons-fileupload</groupId>
    <artifactId>commons-fileupload</artifactId>
    <version>1.3.3</version>
</dependency>
```

controller :

> 文件上传

```java
@RequestMapping("upload")
public int uploadFile(@RequestParam("filename") MultipartFile filename, @RequestParam(value = "test", required = false) int id) throws IOException {
        System.out.println("id"+id);
        // 获取文件原始名称
        String oldFileName = filename.getOriginalFilename();
        String description = oldFileName.substring(0, oldFileName.indexOf('.'));
        // 获取文件后缀
        String extension = "." + FilenameUtils.getExtension(filename.getOriginalFilename());
        // 生成新的文件名称
        String newFileName = new SimpleDateFormat("yyyyMMddHHmmss").format(new Date()) +  
                              UUID.randomUUID().toString().replace("-", "").substring(6) + extension;
        // 文件的大小
        long size = filename.getSize();
        // 文件类型
        String type = filename.getContentType();
        // 处理根据日期生成目录
        String realPath = ResourceUtils.getURL("classpath:").getPath() + "/static/files";
        String dateFormat = new SimpleDateFormat("yyy-MM-dd").format(new Date());
        String dataDirPath = realPath + "/" + dateFormat;
        File dateDir = new File(dataDirPath);
        if (!dateDir.exists()) {
            dateDir.mkdirs();
        }
        // 处理文件上传
        filename.transferTo(new File(dateDir, newFileName));
        // 将文件信息放入到数据库保存
        Courseware courseware = new Courseware();
        courseware.setOldfilename(oldFileName).setNewfilename(newFileName).setExt(extension)
                .setSize(String.valueOf(size)).setType(type)
                .setPath("/files/" + dateFormat).setCoursewareDescription(description)
                .setUser(new User().setUserId(1)).setCurriculumId(id);
        int res = serviceervice.save(courseware);
        return res;
    }
```

> 文件下载

```java
@RequestMapping(path = "dowload/{id}",method = RequestMethod.GET)
    public void dowloadById(@PathVariable(name = "id") String id, HttpServletResponse response) throws IOException {
        // 获取文件信息
        Courseware courseware = serviceervice.queryById(id);
        // 更新下载次数
        courseware.setDowncounts(courseware.getDowncounts()+1);
        //serviceervice.updateCourseware(courseware);

        // 根据文件信息中文件名 和 文件存储路径获取文件输入流
        String realpath = ResourceUtils.getURL("classpath:").getPath() + "/static" + courseware.getPath();
        // 获取文件输入流
        FileInputStream is = new FileInputStream(new File(realpath, courseware.getNewfilename()));
        // 附件下载
        response.setHeader("content-disposition","attachment;fileName="+ URLEncoder.encode(courseware.getOldfilename(), "UTF-8"));
        //获取响应输出流
        ServletOutputStream os = response.getOutputStream();
        //文件拷贝
        IOUtils.copy(is, os);
        IOUtils.closeQuietly(is);
        IOUtils.closeQuietly(os);

    }
```

> 展示 ：

```java
@RequestMapping("show")
    public Map<String,Object> show(String id, HttpServletResponse response, HttpServletRequest req) throws IOException {
        // 获取文件信息
        Courseware courseware = serviceervice.queryById(id);

        // 根据文件信息中文件名 和 文件存储路径获取文件输入流
        String realpath = ResourceUtils.getURL("classpath:").getPath() + "/static" + courseware.getPath();
        //获取文件输入流
        String url = req.getScheme() + "://" + req.getServerName() + ":" + req.getServerPort() +courseware.getPath()+"/"+ courseware.getNewfilename();
        Map<String, Object> result = new HashMap<>();
        result.put("status","success");
        result.put("url",url);
        return result;
    }
```





