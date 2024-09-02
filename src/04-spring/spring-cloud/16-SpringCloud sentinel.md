---
title: 16-SpringCloud sentinel
order: 1
category: []
tag: []
author: H·T·L
date: 2024-07-26
permalink: /04-spring/spring-cloud/ub8wqug1/
---
# Sentinel



https://github.com/alibaba/Sentinel

https://github.com/alibaba/Sentinel/wiki/%E4%BB%8B%E7%BB%8D

https://spring-cloud-alibaba-group.github.io/github-pages/greenwich/spring-cloud-alibaba.html#_spring_cloud_alibaba_sentinel

下载jar 包

java -jar sentinel-dashboard-1.7.2.jar  运行

http://localhost:8080  访问

![image-20210411161735566](img/image-20210411161735566.png)

### 流控规则

![image-20210411163158274](img/image-20210411163158274.png)

![image-20210411163332703](img/image-20210411163332703.png)

![image-20210411163346748](img/image-20210411163346748.png)

![image-20210411163654279](img/image-20210411163654279.png)

![image-20210411170644785](img/image-20210411170644785.png)

##### 预热

![image-20210411171107186](img/image-20210411171107186.png)

![image-20210411171118351](img/image-20210411171118351.png)

##### 排队等待

![image-20210411171632983](img/image-20210411171632983.png)

![image-20210411171657947](img/image-20210411171657947.png)

### 熔断降级

https://github.com/alibaba/Sentinel/wiki/%E7%86%94%E6%96%AD%E9%99%8D%E7%BA%A7

![image-20210411172306654](img/image-20210411172306654.png)![image-20210411172528957](img/image-20210411172528957.png)

##### 降级

![image-20210411172949843](img/image-20210411172949843.png)

- RT

- 异常比例

- 异常数

### 热点参数限流

![image-20210411175045090](img/image-20210411175045090.png)

![image-20210411175349082](img/image-20210411175349082.png)

![image-20210411183501110](img/image-20210411183501110.png)

 ![image-20210411183523287](img/image-20210411183523287.png)

![image-20210411183602109](img/image-20210411183602109.png)

![image-20210411202103576](img/image-20210411202103576.png)

### 系统规则

Sentinel  <u>系统自适应限流</u> 从`整体维度`对应用入口流量进行控制，结合应用的 Load、CPU 使用率、总体平均 RT、入口 QPS 和并发线程数等几个维度的监控指标，通过自适应的流控策略，让系统的入口流量和系统的负载达到一个平衡，让系统尽可能跑在最大吞吐量的同时保证系统整体的稳定性。

![image-20210411202348299](img/image-20210411202348299.png)

系统规则支持以下的模式：

- **Load 自适应**（仅对 Linux/Unix-like 机器生效）：系统的 load1 作为启发指标，进行自适应系统保护。当系统 load1 超过设定的启发值，且系统当前的并发线程数超过估算的系统容量时才会触发系统保护（BBR 阶段）。系统容量由系统的 `maxQps * minRt` 估算得出。设定参考值一般是 `CPU cores * 2.5`。
- **CPU usage**（1.5.0+ 版本）：当系统 CPU 使用率超过阈值即触发系统保护（取值范围 0.0-1.0），比较灵敏。
- **平均 RT**：当单台机器上所有入口流量的平均 RT 达到阈值即触发系统保护，单位是毫秒。
- **并发线程数**：当单台机器上所有入口流量的并发线程数达到阈值即触发系统保护。
- **入口 QPS**：当单台机器上所有入口流量的 QPS 达到阈值即触发系统保护。





@SentinelResource

![image-20210411203257076](img/image-20210411203257076.png)

#### 熔断

Sentinel 提供以下几种熔断策略：

- 慢调用比例 (`SLOW_REQUEST_RATIO`)：选择以慢调用比例作为阈值，需要设置允许的慢调用 RT（即最大的响应时间），请求的响应时间大于该值则统计为慢调用。当单位统计时长（`statIntervalMs`）内请求数目大于设置的最小请求数目，并且慢调用的比例大于阈值，则接下来的熔断时长内请求会自动被熔断。经过熔断时长后熔断器会进入探测恢复状态（HALF-OPEN 状态），若接下来的一个请求响应时间小于设置的慢调用 RT 则结束熔断，若大于设置的慢调用 RT 则会再次被熔断。
- 异常比例 (`ERROR_RATIO`)：当单位统计时长（`statIntervalMs`）内请求数目大于设置的最小请求数目，并且异常的比例大于阈值，则接下来的熔断时长内请求会自动被熔断。经过熔断时长后熔断器会进入探测恢复状态（HALF-OPEN 状态），若接下来的一个请求成功完成（没有错误）则结束熔断，否则会再次被熔断。异常比率的阈值范围是 `[0.0, 1.0]`，代表 0% - 100%。
- 异常数 (`ERROR_COUNT`)：当单位统计时长内的异常数目超过阈值之后会自动进行熔断。经过熔断时长后熔断器会进入探测恢复状态（HALF-OPEN 状态），若接下来的一个请求成功完成（没有错误）则结束熔断，否则会再次被熔断。



![image-20210411223454939](img/image-20210411223454939.png)

###### exceptionsToIgnore 参数



#### OpenFeign





### 持久化

![image-20210411231400597](img/image-20210411231400597.png)

![image-20210411231411635](img/image-20210411231411635.png)

![image-20210411231439858](img/image-20210411231439858.png)







