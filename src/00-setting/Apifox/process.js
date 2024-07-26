// console.log("ret:"+Object.prototype.toString.call(ret))
if ("[object Object]" != Object.prototype.toString.call(ret)) {
    return;
}

var ret = pm.response.json()
if (!ret) {
    return;
}

var header = pm.response.headers.get("Content-Type")
if (!header.includes("application/json")) {
    console.log("Content-Type:" + header)
    return;
}

if ("errorCode" in ret) {
    if (ret.errorCode == 40100 || ret.errorCode == 40101 || ret.errorCode == 40102 || ret.errorCode == 40103) {
        console.log("清理 APP_TOKEN & ACCESS_TOKEN")
        pm.environment.set("ACCESS_TOKEN", '');
        pm.environment.set('APP_TOKEN', '');
        pm.environment.set('ACCESS_TOKEN_EXPIRES', '');
        pm.environment.set('APP_TOKEN_EXPIRES', '');
    }
}
