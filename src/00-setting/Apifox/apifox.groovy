#configs
#dev=false
#auto.format.url=true
#max.deep=10
#max.elements=512

###set resolveMulti = first
# define var
number_min=-9999
number_max=9999
float_dmin=2
java_integer_types=["java.lang.Integer","int","java.lang.Long","long","java.lang.Short","short","java.math.BigInteger"]
java_float_types=["java.lang.String","java.lang.Float","float","java.lang.Double","double","java.math.BigDecimal"]

# example
field.example[groovy:it.hasAnn("io.swagger.annotations.ApiModelProperty")&&""!=it.ann("io.swagger.annotations.ApiModelProperty","example")]=groovy:it.ann("io.swagger.annotations.ApiModelProperty","example")

# rules for com.custom.framework.domain.validator.constraints
param.required=@com.custom.framework.domain.validator.constraints.hv.NotBlank
param.required=@com.custom.framework.domain.validator.constraints.jv.NotNull
param.required=@com.custom.framework.domain.validator.constraints.hv.NotEmpty

field.required=@com.custom.framework.domain.validator.constraints.hv.NotBlank
field.required=@com.custom.framework.domain.validator.constraints.jv.NotNull
field.required=@com.custom.framework.domain.validator.constraints.hv.NotEmpty

field.schema.permit.null=@com.custom.framework.domain.validator.constraints.hv.NotBlank
field.schema.permit.null=@com.custom.framework.domain.validator.constraints.jv.NotNull
field.schema.permit.null=@com.custom.framework.domain.validator.constraints.hv.NotEmpty
field.schema.permit.null=@io.swagger.annotations.ApiImplicitParam#required
field.schema.permit.null=@io.swagger.annotations.ApiModelProperty#required

# Max+Min
field.mock[groovy:it.hasAnn("com.custom.framework.domain.validator.constraints.jv.Max")&&it.hasAnn("com.custom.framework.domain.validator.constraints.jv.Min")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:"@integer("+it.ann("com.custom.framework.domain.validator.constraints.jv.Min")+","+it.ann("com.custom.framework.domain.validator.constraints.jv.Max")+")"
field.mock[groovy:it.hasAnn("com.custom.framework.domain.validator.constraints.jv.Max")&&it.hasAnn("com.custom.framework.domain.validator.constraints.jv.Min")&&${java_float_types}.contains(it.jsonType().name())]=groovy:"@float("+it.ann("com.custom.framework.domain.validator.constraints.jv.Min")+","+it.ann("com.custom.framework.domain.validator.constraints.jv.Max")+",${float_dmin})"

# Max|Min
field.mock[groovy:it.hasAnn("com.custom.framework.domain.validator.constraints.jv.Max")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:"@integer(0,"+it.ann("com.custom.framework.domain.validator.constraints.jv.Max")+")"
field.mock[groovy:it.hasAnn("com.custom.framework.domain.validator.constraints.jv.Min")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:"@integer("+it.ann("com.custom.framework.domain.validator.constraints.jv.Min")+")"
field.mock[groovy:it.hasAnn("com.custom.framework.domain.validator.constraints.jv.Max")&&${java_float_types}.contains(it.jsonType().name())]=groovy:"@float(0,"+it.ann("com.custom.framework.domain.validator.constraints.jv.Max")+")"
field.mock[groovy:it.hasAnn("com.custom.framework.domain.validator.constraints.jv.Min")&&${java_float_types}.contains(it.jsonType().name())]=groovy:"@float("+it.ann("com.custom.framework.domain.validator.constraints.jv.Min")+",${number_max},${float_dmin})"

# Max、Min  -advanced
field.advanced[@com.custom.framework.domain.validator.constraints.jv.Min]=groovy:```
    return [maximum:it.ann("com.custom.framework.domain.validator.constraints.jv.Min")]
```
field.advanced[@com.custom.framework.domain.validator.constraints.jv.Max]=groovy:```
    return [minimum:it.ann("com.custom.framework.domain.validator.constraints.jv.Max")]
```

# Size
field.mock[groovy:it.hasAnn("com.custom.framework.domain.validator.constraints.jv.Size")&&it.jsonType().name()=="java.lang.String"]=groovy:```
    def ann = it.annMap("com.custom.framework.domain.validator.constraints.jv.Size")
    if(ann.containsKey("min")&&ann.containsKey("max")){
        return "@string("+ann["min"]+","+ann["max"]+")"
    }else if(ann.containsKey("min")){
        return "@string("+ann["min"]+")"
    }else if(ann.containsKey("max")){
        return "@string(0,"+ann["max"]+")"
    }
```
field.advanced[@com.custom.framework.domain.validator.constraints.jv.Size]=groovy:```
    def element = (it.jsonType().name() == "java.lang.String")?"Length":"Items"
    def ann = it.annMap("com.custom.framework.domain.validator.constraints.jv.Size")
    def advanced = [:]
    if(ann.containsKey("min")){
        advanced["min"+element] = ann["min"]
    }
    if(ann.containsKey("max")){
        advanced["max"+element] = ann["max"]
    }
    return advanced
```

# NotEmpty
field.advanced[@com.custom.framework.domain.validator.constraints.hv.NotEmpty]=groovy:```
    def element = (it.jsonType().name() == "java.lang.String")?"Length":"Items"
    def advanced = [:]
    advanced["min"+element] = 1
    return advanced
```


# 枚举
enum.use.custom[groovy:it.isExtend("com.ktna.cloud.base.core.constant.EnumProcessor")]=code

