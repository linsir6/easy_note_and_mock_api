# easy_note_and_mock_api
> 致力打造一个前后端，共同定制的接口API文档，同时在后端接口未完成时，可以提供mock的功能。



## 录入规则


> 这里在输入的时候，先制定一个简单的规则，两个属性之间用","分隔开，当遇到list的时候，两个item用";"隔开。

参数:

1. 地址    eg:app/login/getCode.do
2. 入参    eg:mobile,1,Long,手机号,null;...;  描述:参数,是否必填(必填1,否则0),类型,描述,备注;
3. 出参    json,{"errCode": 0,"errMessage": "success"}
4. 访问方式 http/https/.../,json/form-data;
5. 描述    用来获取验证码的接口






















