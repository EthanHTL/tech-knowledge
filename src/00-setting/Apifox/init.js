init = function () {
    if (!pm.globals.has("appId"))
        pm.globals.set("appId", 'ktna-im-plug-web')

    if (!pm.globals.has("secret"))
        pm.globals.set("secret", 'kdjb0fssepvd7lvqlfd51dtzm23ncmti')

    if (!pm.globals.has("key"))
        pm.globals.set("key", '05eir4d0xyq0x1gb')

    if (!pm.environment.has("loginURL"))
        pm.environment.set("loginURL", 'http://127.0.0.1:8080/login')

    if (!pm.environment.has("activeUser"))
        pm.environment.set("activeUser", 'defaultUser')

    if (!pm.environment.has("defaultUser"))
        pm.environment.set("defaultUser", '{"username":"19973504813","password":"123456"}')

    if (!pm.environment.has("APP_TOKEN"))
        pm.environment.set("APP_TOKEN", null)

    if (!pm.environment.has("APP_TOKEN_EXPIRES"))
        pm.environment.set("APP_TOKEN_EXPIRES", null)

    if (!pm.environment.has("ACCESS_TOKEN"))
        pm.environment.set("ACCESS_TOKEN", null)

    if (!pm.environment.has("ACCESS_TOKEN_EXPIRES"))
        pm.environment.set("ACCESS_TOKEN_EXPIRES", null)
}

generateAppToken = function () {
    const appId = pm.globals.get("appId");
    const secret = pm.globals.get("secret");
    const key = pm.globals.get("key");
    console.log("appToken生成:","appId: " + appId + "\n secret: " + secret + "\n key: " + key);

    pm.test('全局变量【appToken配置[appId|secret|key]信息】检查', function () {
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
        return appToken;
    }
    return appToken;
}

generateLoginRequest = function (token) {
    const activeUser = pm.environment.get("activeUser")
    const loginUser = pm.environment.get(activeUser)

    const loginURL = pm.environment.get("loginURL")

    const appToken = token ?? pm.environment.get("APP_TOKEN") ??  generateAppToken();

    pm.test('环境变量 {loginURL:登录地址} 检查', function () {
        pm.expect(loginURL).to.not.be.empty;
    });
    pm.test('环境变量 {activeUser:登录用户}【' + activeUser + '】检查', function () {
        pm.expect(activeUser).to.not.be.empty;
    });

    const echoPostRequest = {
        url: loginURL,
        method: "POST",
        header: {
            "User-Agent": "	Apifox/1.0.0 (https://apifox.com)",
            "Accept": "	*/*",
            "Content-Type": "application/json",
            "appToken": appToken,
        },
        body: {
            mode: 'raw',
            raw: loginUser
        }
    };
    return echoPostRequest
}

init()
