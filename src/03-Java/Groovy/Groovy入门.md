---
title: Groovy入门
order: 1
category: []
tag: []
author: H·T·L
date: 2024-08-27
permalink: /03-Java/Groovy/db9apk8j/
---





## Java集成Groovy

### gmavenplus 插件

```xml
<build>
    <finalName>${project.artifactId}</finalName>
    <plugins>
        <!-- groovy 和 java 混合编程 -->
        <!-- 参考： https://github.com/groovy/GMavenPlus/wiki/Examples#additional-sources -->
        <plugin>
            <groupId>org.codehaus.gmavenplus</groupId>
            <artifactId>gmavenplus-plugin</artifactId>
            <version>3.0.2</version>
            <executions>
                <execution>
                    <goals>
              		<goal>addSources</goal>
              		<goal>addTestSources</goal>
              		<goal>generateStubs</goal>
              		<goal>compile</goal>
          		    <goal>generateTestStubs</goal>
          		    <goal>compileTests</goal>
         			  <goal>removeStubs</goal>
        		      <goal>removeTestStubs</goal>
                    </goals>
                </execution>
            </executions>
            <configuration>
                <sources>
                    <source>
                        <directory>${project.basedir}/src/main/java</directory>
                        <includes>
                            <include>**/*.groovy</include>
                        </includes>
                    </source>
                </sources>
            </configuration>
        </plugin>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <!-- <version>3.8.1</version> -->
        </plugin>
        <plugin>
            <!-- if including source jars, use the no-fork goals
                 otherwise both the Groovy sources and Java stub sources
                 will get included in your jar -->
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-source-plugin</artifactId>
            <!-- source plugin \> = 2.1 is required to use the no-fork goals -->
            <!-- <version>3.2.1</version> -->
            <executions>
                <execution>
                    <id>attach-sources</id>
                    <goals>
                        <goal>jar-no-fork</goal>
                        <goal>test-jar-no-fork</goal>
                    </goals>
                </execution>
            </executions>
        </plugin>
    </plugins>
</build>
```

### 参考文章

[[1] Java 和 Groovy 混合编程](https://yoncise.com/logs/2022/03/16/69601114/)

[[2] Groovy Eclipse Maven plugin](https://github.com/groovy/groovy-eclipse/wiki/Groovy-Eclipse-Maven-plugin)

[[3] Groovy compiler](https://groovy-lang.org/groovyc.html#_gmaven_and_gmavenplus)

[[4] GMavenPlus](https://github.com/groovy/GMavenPlus/wiki/Choosing-Your-Build-Tool)