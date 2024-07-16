var appToken = pm.environment.get('APP_TOKEN');
var accessToken = pm.environment.get('ACCESS_TOKEN');
pm.request.headers.upsert({ key: "appToken", value: appToken })
pm.request.headers.upsert({ key: "accessToken", value: accessToken })