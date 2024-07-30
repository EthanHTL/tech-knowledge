---
title: 14-@Condition 注解
order: 1
category: []
tag: []
author: H·T·L
date: 2024-07-29
permalink: /04-spring/spring/dvu1tfn0/
---
# @Conditional 注解

@Conditional 是 Springframework 的功能  ， 在SpringBoot中有进行增强



查看*SpringFramework*的源码会发现加载使用这些注解的入口在*ConfigurationClassPostProcessor*中，这个实现了*BeanFactoryPostProcessor*接口，前面介绍过，会嵌入到Spring的加载过程。
 这个类主要是从ApplicationContext中取出*Configuration*注解的类并解析其中的注解，包括 *@Conditional*，*@Import*和 *@Bean*等。
 解析 *@Conditional* 逻辑在*ConfigurationClassParser*类中，这里面用到了 *ConditionEvaluator* 这个类。



```java
    protected void processConfigurationClass(ConfigurationClass configClass) throws IOException {
        if (this.conditionEvaluator.shouldSkip(configClass.getMetadata(), ConfigurationPhase.PARSE_CONFIGURATION)) {
            return;
        }
        ......
    }
```

*ConditionEvaluator*中的*shouldSkip*方法则使用了 *@Conditional*中设置的*Condition*类。

```kotlin
    public boolean shouldSkip(AnnotatedTypeMetadata metadata, ConfigurationPhase phase) {
        if (metadata == null || !metadata.isAnnotated(Conditional.class.getName())) {
            return false;
        }
        if (phase == null) {
            if (metadata instanceof AnnotationMetadata &&
                    ConfigurationClassUtils.isConfigurationCandidate((AnnotationMetadata) metadata)) {
                return shouldSkip(metadata, ConfigurationPhase.PARSE_CONFIGURATION);
            }
            return shouldSkip(metadata, ConfigurationPhase.REGISTER_BEAN);
        }
        List<Condition> conditions = new ArrayList<Condition>();
        for (String[] conditionClasses : getConditionClasses(metadata)) {
            for (String conditionClass : conditionClasses) {
                Condition condition = getCondition(conditionClass, this.context.getClassLoader());
                conditions.add(condition);
            }
        }
        AnnotationAwareOrderComparator.sort(conditions);
        for (Condition condition : conditions) {
            ConfigurationPhase requiredPhase = null;
            if (condition instanceof ConfigurationCondition) {
                requiredPhase = ((ConfigurationCondition) condition).getConfigurationPhase();
            }
            if (requiredPhase == null || requiredPhase == phase) {
                if (!condition.matches(this.context, metadata)) {
                    return true;
                }
            }
        }
        return false;
    }
    private List<String[]> getConditionClasses(AnnotatedTypeMetadata metadata) {
            MultiValueMap<String, Object> attributes = metadata.getAllAnnotationAttributes(Conditional.class.getName(), true);
            Object values = (attributes != null ? attributes.get("value") : null);
            return (List<String[]>) (values != null ? values : Collections.emptyList());
    }
```