function generateAccessToken() {

    if (!pm.environment.has("ACCESS_TOKEN")) {
        pm.environment.set("ACCESS_TOKEN", null)
    }
    if (!pm.environment.has("ACCESS_TOKEN_EXPIRES")) {
        pm.environment.set("ACCESS_TOKEN_EXPIRES", null)
    }

    if (!pm.environment.has("loginURL")) {
        pm.environment.set("loginURL", 'http://127.0.0.1:8080/login')
    }
    pm.test('环境变量 {loginURL:登录地址}配置校验', function () {
        pm.expect(pm.environment.get("loginURL")).to.not.be.empty;
    });

    if (!pm.environment.has("activeUser")) {
        pm.environment.set("activeUser", 'defaultUser')
    }

    if (!pm.environment.has("defaultUser")) {
        pm.environment.set("defaultUser", '{"username":"19973504813","password":"123456"}')
    }

    const loginUserStr = pm.environment.get("activeUser");
    const loginUser = pm.environment.get(loginUserStr)
    console.log("登录入参：" + loginUser);
    pm.test('环境变量 {activeUser:当前登录用户}【' + loginUserStr + '】', function () {
        pm.expect(loginUser).to.not.be.empty;
    });

    const loginInfo = '' != loginUser ? loginUser : '{"example": "example"}';
    const loginURL = '' != pm.environment.get("loginURL") ? pm.environment.get("loginURL") : 'http://127.0.0.1:8080/example';

    const appToken = pm.environment.get("APP_TOKEN") ?? '';

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
            raw: loginInfo
        }
    };
    console.log("登录请求：" + JSON.stringify(echoPostRequest));

    pm.sendRequest(echoPostRequest, function (err, res) {
        if (err) {
            console.log(err);
        } else {
            const ret = res.json();
            pm.test('登录成功校验', function () {
                pm.expect(res).to.have.property("code", 200);
                pm.expect(ret).to.have.any.keys('accessToken');
            });
            pm.environment.set("ACCESS_TOKEN", ret.accessToken);
            // 过期时间 向后偏移2小时
            let expireTime = new Date();
            expireTime.setHours(expireTime.getHours() + 2);
            pm.environment.set("ACCESS_TOKEN_EXPIRES", expireTime);
            console.log("设置环境变量【accessToken】，值为【" + ret.accessToken + "】")
        }
    });
}

const accessToken = pm.environment.get("ACCESS_TOKEN");
const accessTokenExpires = pm.environment.get("ACCESS_TOKEN_EXPIRES");

// 过期处理
if (!accessToken || (accessTokenExpires && new Date(accessTokenExpires) <= new Date())) {
    generateAccessToken();
}