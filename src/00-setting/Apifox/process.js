// console.log('response', pm.response);
// console.log('json', pm.response.json());
// console.log('text', pm.response.text());
// console.log('code', pm.response.code, pm.response.code == 200);
// console.log('status', pm.response.status, pm.response.status == "OK");
// if(pm.response.code == 200) return

var type = pm.response.headers.get("Content-Type")
if (type.includes("application/json")) {
    var ret = pm.response.json()
    // console.log(typeof pm.response, pm.response)
    // console.log(typeof ret)
    // console.log("object" == typeof ret)
    // console.log("errorCode" in ret)
    if ("object" == typeof ret && "errorCode" in ret) {
        console.log("执行后置脚本 - TOKEN【后置清理】")
        if (ret.errorCode == 40100) {
            console.log("清理 APP_TOKEN")
            pm.environment.unset('APP_TOKEN');
            pm.environment.unset('APP_TOKEN_EXPIRES');
        }
        if (ret.errorCode == 40101 || ret.errorCode == 40102 || ret.errorCode == 40103) {
            console.log("清理 ACCESS_TOKEN")
            pm.environment.unset("ACCESS_TOKEN");
            pm.environment.unset('ACCESS_TOKEN_EXPIRES');
        }
    }
    return
}

// 其它返参处理
console.log(type)
if (pm.response.code != 200) {
    console.error('接口异常', pm.response)
}