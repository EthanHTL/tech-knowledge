---
title: 15-Deferred开头的类
order: 1
category: []
tag: []
author: H·T·L
date: 2024-07-29
permalink: /04-spring/spring/76xw3ktz/
---
在Spring中，一些以Deferred开头的类主要用于在Spring容器初始化过程中，延迟地选择要导入的配置类或Bean，并进行一些后续处理。

以下是一些常见的以Deferred开头的类及其作用：

1. DeferredImportSelector

DeferredImportSelector是一个接口，用于在Spring容器初始化时动态地选择要导入的配置类。它可以返回一个DeferredImportSelectorGroup对象，该对象包含了一组要导入的配置类，DeferredImportSelectorHandler会根据该对象中的信息选择要导入的配置类。

1. DeferredImportSelectorGroup

DeferredImportSelectorGroup是一个接口，用于组织DeferredImportSelector返回的一组要导入的配置类。它可以将这些配置类按照优先级进行分组，以便DeferredImportSelectorHandler选择要导入的配置类时更加灵活。

1. DeferredImportSelectorHandler

DeferredImportSelectorHandler是一个接口，用于处理DeferredImportSelector返回的一组要导入的配置类。它可以根据DeferredImportSelectorGroup中的信息选择要导入的配置类，并将它们加入到Spring容器中。

1. DeferredBeanIntrospectionData

DeferredBeanIntrospectionData是一个类，用于在Spring容器初始化时延迟地创建Bean的元数据，并提供一些元数据的访问方法。它可以通过调用DeferredImportSelectorGroup.getBeans()方法来获取一组要创建的Bean的元数据。

1. DeferredLog

DeferredLog是一个类，用于延迟地记录日志。它可以在Spring容器初始化时创建一个Log对象，并在需要记录日志时才进行初始化。

这些以Deferred开头的类，都是为了优化Spring容器的初始化过程，尽可能地减少不必要的初始化操作，从而提高应用程序的性能和效率。