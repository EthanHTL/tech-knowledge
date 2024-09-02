
import org.apache.commons.lang3.StringUtils;

import java.io.Serializable;
import java.lang.invoke.SerializedLambda;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

/**
 * {@link SerializedLambda}工具类
 *
 * @author h.t.l
 * @since 2024/8/29 17:18
 */
public class SerializedLambdaUtil_V1 {

    public static FieldNameParser defaultFieldNameParser = new FieldNameParser(){};

    /**
     * @see SerializedLambdaUtil_V1#getImplClassLongName(SFunction)
     */
    public static <T> String getImplClassLongName(SFunction<T, ?> sFunction) {
        return getImplClassLongName(getSerializedLambda(sFunction));
    }

    /**
     * @see SerializedLambdaUtil_V1#getFieldName(SFunction)
     */
    public static <T> String getFieldName(SFunction<T, ?> sFunction) {
        return getFieldName(sFunction, defaultFieldNameParser);
    }

    /**
     * 获取字段名称
     */
    public static <T> String getFieldName(SFunction<T, ?> sFunction, FieldNameParser fieldNameParser) {
        return getFieldName(getSerializedLambda(sFunction), fieldNameParser);
    }

    /**
     * 获取lambda表达式字段名称
     * <pre>
     * 假设你的lambda表达式部分是这样写的：<code>Person::getFirstName</code>，
     * 那么，此方法的目的就是获取到getFirstName方法对应的（Person类中的对应字段的）字段名
     * </pre>
     */
    public static String getFieldName(SerializedLambda serializedLambda, FieldNameParser fieldNameParser) {
        String implClassLongName = getImplClassLongName(serializedLambda);
        String implMethodName = getImplMethodName(serializedLambda);
        try {
            return fieldNameParser.parseFieldName(Class.forName(implClassLongName), implMethodName);
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        }
    }

    /**
     * 获取lambda表达式中，实现方法的方法名
     * <p>
     *     说明：
     *     假设你的lambda表达式部分是这样写的：<code>Person::getFirstName</code>，<br/>
     *     那么这里获取到的就是Person.getFirstName()的方法名getFirstName
     * </p>
     *
     * @param serializedLambda
     *            serializedLambda对象
     * @return  实现方法的方法名 <br />
     *          形如：getFirstName
     */
    private static String getImplMethodName(SerializedLambda serializedLambda) {
        return serializedLambda.getImplMethodName();
    }

    /**
     * 获取lambda表达式中，实现方法的类的全类名
     * <p>
     *     说明：
     *     假设你的lambda表达式部分是这样写的：<code>Person::getFirstName</code>，<br/>
     *     那么这里获取到的就是Person的全类名，形如：<code>com.example.lambda.test.Person</code>
     * </p>
     *
     * @param serializedLambda
     *            serializedLambda对象
     * @return  实现方法的类的全类名 <br />
     *          形如：com.example.lambda.test.Person
     */
    private static String getImplClassLongName(SerializedLambda serializedLambda) {
        return serializedLambda.getImplClass().replace("/", ".");
    }

    /**
     * 获取SerializedLambda实例
     *
     * @param potentialLambda
     *            lambda实例
     * @return  SerializedLambda实例
     */
    private static <T extends Serializable> SerializedLambda getSerializedLambda(T potentialLambda) {
        try{
            Class<?> potentialLambdaClass = potentialLambda.getClass();
            // lambda类属于合成类
            if (!potentialLambdaClass.isSynthetic()) {
                throw new IllegalArgumentException("potentialLambda must be lambda-class");
            }
            Method writeReplaceMethod = potentialLambdaClass.getDeclaredMethod("writeReplace");
            boolean isAccessible = writeReplaceMethod.isAccessible();
            writeReplaceMethod.setAccessible(true);
            Object writeReplaceObject = writeReplaceMethod.invoke(potentialLambda);
            writeReplaceMethod.setAccessible(isAccessible);
            if (writeReplaceObject == null || !SerializedLambda.class.isAssignableFrom(writeReplaceObject.getClass())) {
                throw new IllegalArgumentException("potentialLambda must be lambda-class. writeReplaceObject should not be " + writeReplaceObject);
            }
            return (SerializedLambda)writeReplaceObject;
        } catch( NoSuchMethodException | IllegalAccessException | InvocationTargetException e ){
            throw new IllegalArgumentException("potentialLambda must be lambda-class", e);
        }
    }

    /**
     * 字段名解析器
     */
    public interface FieldNameParser {

        /**
         * 解析字段名
         * <pre>
         *     假设你的lambda表达式部分是这样写的：<code>Person::getFirstName</code>，
         *     那么，
         *     clazz就对应Person类
         *     methodName就对应getFirstName
         * </pre>
         *
         * @param clazz
         *            字段所在的类
         * @param methodName
         *            与字段相关的方法（如：该字段的getter方法）
         * @return  解析字段名
         */
        default String parseFieldName(Class<?> clazz, String methodName) {
            return StringUtils.uncapitalize(methodName.substring("get".length()));
        }
    }

}