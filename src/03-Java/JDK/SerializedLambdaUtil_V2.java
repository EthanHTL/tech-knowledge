
import cn.hutool.core.annotation.AnnotationUtil;
import com.baomidou.mybatisplus.core.toolkit.ClassUtils;
import com.baomidou.mybatisplus.core.toolkit.CollectionUtils;
import com.baomidou.mybatisplus.core.toolkit.LambdaUtils;
import com.baomidou.mybatisplus.core.toolkit.ReflectionKit;
import com.baomidou.mybatisplus.core.toolkit.support.LambdaMeta;
import com.baomidou.mybatisplus.core.toolkit.support.SFunction;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.apache.ibatis.reflection.property.PropertyNamer;

import java.io.Serializable;
import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.function.Function;
import java.util.stream.Collectors;

/**
 * @author h.t.l
 * @since 2024/9/2 17:23
 */
public class SerializedLambdaUtil {

    private static final Map<Class<?>, Map<String, FieldCache>> COLUMN_CACHE_MAP = new ConcurrentHashMap<>();

    public static <T> String getFieldName(SFunction<T, ?> func) {
        // 使用 mybatisplus 的lambda工具类
        LambdaMeta meta = LambdaUtils.extract(func);
        Class<?> instantiatedClass = meta.getInstantiatedClass();
        Map<String, FieldCache> fieldMap = getFieldMap(instantiatedClass);

        String implMethodName = meta.getImplMethodName();
        String fieldName = PropertyNamer.methodToProperty(implMethodName);
        return fieldMap.get(fieldName).getFieldName();
    }
    public static <T> FieldCache getFieldCache(SFunction<T, ?> func) {
        // 使用 mybatisplus 的lambda工具类
        LambdaMeta meta = LambdaUtils.extract(func);
        Class<?> instantiatedClass = meta.getInstantiatedClass();
        Map<String, FieldCache> fieldMap = getFieldMap(instantiatedClass);

        String implMethodName = meta.getImplMethodName();
        String fieldName = PropertyNamer.methodToProperty(implMethodName);
        return fieldMap.get(fieldName);
    }


    public static Map<String, FieldCache> getFieldMap(Class<?> clazz) {
        return CollectionUtils.computeIfAbsent(COLUMN_CACHE_MAP, clazz, key -> {
            Map<String, FieldCache> map = new HashMap<>();
            List<Field> fieldList = getAllFields(key);
            for (int i = 0; i < fieldList.size(); i++) {
                Field field = fieldList.get(i);
                FieldCache fieldCache = new FieldCache(clazz, field, i);
                map.put(fieldCache.getFieldName(), fieldCache);
            }
            return map;
        });
    }

    public static List<Field> getAllFields(Class<?> clazz) {
        List<Field> fieldList = ReflectionKit.getFieldList(ClassUtils.getUserClass(clazz));
        return new ArrayList<>(fieldList);
    }


    @Data
    @AllArgsConstructor
    public static class FieldCache implements Serializable {
        private static final long serialVersionUID = -59220189172227917L;

        private Class<?> clazz;
        private Field field;
        private String fieldName;
        private Integer sort; // 排序，从0开始
        private Map<Class<? extends Annotation>, ? extends Annotation> fieldAnnotations;

        public FieldCache(Class<?> clazz, Field field, Integer sort) {
            this.clazz = clazz;
            this.field = field;
            this.sort = sort;
            this.fieldName = field.getName();
            this.fieldAnnotations = Arrays.stream(AnnotationUtil.getAnnotations(field, false))
                    .collect(Collectors.toMap(Annotation::annotationType, Function.identity()));
        }
    }

}