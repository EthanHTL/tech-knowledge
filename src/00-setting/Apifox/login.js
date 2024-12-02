var appToken = pm.environment.get("APP_TOKEN")
const appTokenExpires = pm.environment.get("APP_TOKEN_EXPIRES")

if (!appToken || (appTokenExpires && new Date(appTokenExpires) <= new Date())) {
    appToken = generateAppToken()
    console.log("设置环境变量【appToken】，值为\n" + appToken + "\n")
    pm.environment.set('APP_TOKEN', appToken)
    // 过期时间 向后偏移5分钟
    let expireTime = new Date()
    expireTime.setMinutes(expireTime.getMinutes() + 5)
    pm.environment.set("APP_TOKEN_EXPIRES", expireTime)
}

var accessToken = pm.environment.get("ACCESS_TOKEN")
const accessTokenExpires = pm.environment.get("ACCESS_TOKEN_EXPIRES")
if (!accessToken || (accessTokenExpires && new Date(accessTokenExpires) <= new Date())) {
    const request = generateLoginRequest(appToken)
    console.log("登录请求入参：",JSON.parse(request.body.raw))
    pm.sendRequest(request, function (err, res) {
        if (err) {
            console.log(err)
            return
        } 
        const ret = res.json();
        pm.test('登录成功校验', function () {
            pm.expect(res).to.have.property("code", 200)
            pm.expect(res).to.have.property("status", "OK")
            pm.expect(ret).to.have.any.keys('accessToken')
        })
        if ('accessToken' in ret) {
            pm.environment.set("ACCESS_TOKEN", ret.accessToken)
            console.log("设置环境变量【accessToken】，值为\n" + ret.accessToken + "\n")
            // 过期时间 向后偏移2小时
            let expireTime = new Date()
            expireTime.setHours(expireTime.getHours() + 2)
            pm.environment.set("ACCESS_TOKEN_EXPIRES", expireTime)
            // 更新header
            pm.request.headers.upsert({ key: "accessToken", value: ret.accessToken })
        } else {
            console.log("登录失败", ret);
            
        }
    })
}

pm.request.headers.upsert({ key: "appToken", value: appToken })
pm.request.headers.upsert({ key: "accessToken", value: accessToken })