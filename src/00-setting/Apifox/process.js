// console.log('response', pm.response);
// console.log('json', pm.response.json());
// console.log('text', pm.response.text());
// console.log('code', pm.response.code, pm.response.code == 200);
// console.log('status', pm.response.status, pm.response.status == "OK");
// if(pm.response.code == 200) return

var header = pm.response.headers.get("Content-Type")
if (header.includes("application/json")) {
    // console.log("Content-Type:" + header)
    var ret = pm.response.json()
    // console.log('errorCode',"errorCode" in ret,ret.errorCode,ret)
    if ("errorCode" in ret) {
        if (ret.errorCode == 40100 || ret.errorCode == 40101 || ret.errorCode == 40102 || ret.errorCode == 40103) {
            console.log("清理 APP_TOKEN & ACCESS_TOKEN")
            pm.environment.unset("ACCESS_TOKEN");
            pm.environment.unset('APP_TOKEN');
            pm.environment.unset('ACCESS_TOKEN_EXPIRES');
            pm.environment.unset('APP_TOKEN_EXPIRES');
        }
    }
    return
}

if (pm.response.code == 200) {
    console.error('接口异常', pm.response)
}
