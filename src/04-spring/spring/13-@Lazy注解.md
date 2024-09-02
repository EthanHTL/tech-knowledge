---
title: 13-@Lazy注解
order: 1
category: []
tag: []
author: H·T·L
date: 2024-08-13
permalink: /04-spring/spring/728uu3pk/
---
# @Lazy注解解析

```Java
@Target({ElementType.TYPE, ElementType.METHOD, ElementType.CONSTRUCTOR, ElementType.PARAMETER, ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface Lazy {

	/**
	 * Whether lazy initialization should occur.
	 */
	boolean value() default true;

}
```



### DefaultListableBeanFactory#preInstantiateSingletons()

```java
	public void preInstantiateSingletons() throws BeansException {
		List<String> beanNames = new ArrayList<>(this.beanDefinitionNames);
......
		for (String beanName : beanNames) {
		
			// 条件判断，非抽象，单例，《非懒加载》
			if (!bd.isAbstract() && bd.isSingleton() && !bd.isLazyInit()) {
......
```



### DefaultListableBeanFactory#resolveDependency()

```java
	public Object resolveDependency(DependencyDescriptor descriptor, @Nullable String requestingBeanName,
			@Nullable Set<String> autowiredBeanNames, @Nullable TypeConverter typeConverter) throws BeansException {

		descriptor.initParameterNameDiscovery(getParameterNameDiscoverer());
    // 对 Optional 类型依赖的处理
		if (Optional.class == descriptor.getDependencyType()) {
			return createOptionalDependency(descriptor, requestingBeanName);
		}
    // 对 ObjectFactory、ObjectProvider 类型依赖的处理
		else if (ObjectFactory.class == descriptor.getDependencyType() ||
				ObjectProvider.class == descriptor.getDependencyType()) {
			return new DependencyObjectProvider(descriptor, requestingBeanName);
		}
    // 对 Optional 类型依赖的处理
		else if (javaxInjectProviderClass == descriptor.getDependencyType()) {
			return new Jsr330Factory().createDependencyProvider(descriptor, requestingBeanName);
		}
		else {
      // 对 @Lazy 懒加载 类型依赖的处理
			Object result = getAutowireCandidateResolver().getLazyResolutionProxyIfNecessary(
					descriptor, requestingBeanName);
			if (result == null) {
        // 对普通依赖类型处理
				result = doResolveDependency(descriptor, requestingBeanName, autowiredBeanNames, typeConverter);
			}
			return result;
		}
	}
```

