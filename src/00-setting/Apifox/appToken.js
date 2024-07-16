function generateAppToken() {
    if (!pm.globals.has("appId")) {
        pm.globals.set("appId", '')
    }
    if (!pm.globals.has("secret")) {
        pm.globals.set("secret", '')
    }
    if (!pm.globals.has("key")) {
        pm.globals.set("key", '')
    }

    const appId = pm.globals.get("appId");
    const secret = pm.globals.get("secret");
    const key = pm.globals.get("key");
    console.log("appToken配置:\n appId: " + appId + "\n secret: " + secret + "\n key: " + key);

    pm.test('全局变量【appToken配置[appId|secret|key]信息】校验', function () {
        pm.expect(appId).to.not.be.empty;
        pm.expect(secret).to.not.be.empty;
        pm.expect(key).to.not.be.empty;
    });

    const jetLag = 0 // 服务器与本机时间差 
    let timestamp = new Date().getTime()
    timestamp += Number(jetLag)
    var cryptoJs = require("crypto-js");
    var h256 = cryptoJs.HmacSHA256(secret + '.' + timestamp, key)
    var btoa = require("btoa");
    var bs6 = btoa(' {"appId":"' + appId + '","timestamp":' + timestamp + '}')
    var appToken = bs6 + "." + h256;
    if ('' != appId && '' != secret && '' != key) {
        pm.environment.set('APP_TOKEN', appToken);
        // 过期时间 向后偏移5分钟
        let expireTime = new Date();
        expireTime.setMinutes(expireTime.getMinutes() + 5);
        pm.environment.set("APP_TOKEN_EXPIRES", expireTime);
        console.log("设置环境变量【appToken】，值为【" + appToken + "】")
    }
    return appToken;
}

const env_appToken = pm.environment.get("APP_TOKEN");
const env_appTokenExpires = pm.environment.get("APP_TOKEN_EXPIRES");

if (!env_appToken || (env_appTokenExpires && new Date(env_appTokenExpires) <= new Date())) {
    generateAppToken();
}

