var randstr='',ticket='',secretId='',address='',interval='',vcon='',htmm='',scri='',timeout=555;
var A={
        activityInfoId:'2ad16fe919c94fab9cae81ec1cc9c660',
        payType:'WX_PAY',
        redirectUrl:'https://club.10155.com/shop/orderDetail',
        spuId:'10006741',
        id:'0ed21b9be0e948a791d85cd9dd8781e6'
    };
var AA={
        activityInfoId:'2ad16fe919c94fab9cae81ec1cc9c660',
        payType:'WX_PAY',
        redirectUrl:'https://club.10155.com/shop/orderDetail',
        spuId:'10004504',
        id:'da6d7cbcf45846f98dbbe1fd58841159'
    };
!function () {
     htmm =document.getElementsByTagName("head")[0];
     scri = document.createElement("script");
    scri.async="async";
    scri.src="https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/vConsole/3.12.1/vconsole.min.js";
    scri.onload=function(){console.log("script onloaded");if(!window.VConsole.instance){vcon=new window.VConsole();}};
    htmm.appendChild(scri);
     htmm =document.getElementsByTagName("head")[0];
     scri = document.createElement("script");
    scri.async="async";
    scri.src="https://ssl.captcha.qq.com/TCaptcha.js";
    scri.onload=function(){console.log("script onloaded");};
    htmm.appendChild(scri);
     htmm =document.getElementsByTagName("head")[0];
     scri = document.createElement("script");
    scri.async="async";
    scri.src="https://cdn.staticfile.org/jsrsasign/8.0.12/jsrsasign-all-min.js";
    scri.onload=function(){console.log("script onloaded");};
    htmm.appendChild(scri);
     htmm =document.getElementsByTagName("head")[0];
     scri = document.createElement("script");
    scri.async="async";
    scri.src="https://cdn.bootcdn.net/ajax/libs/crypto-js/4.0.0/crypto-js.min.js";
    scri.onload=function(){console.log("script onloaded");};
    htmm.appendChild(scri);
}()
//test_a
function handleActionSign(e) {
                    var t='-----BEGIN PRIVATE KEY-----MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDXdZFCC6GmRKRCZEnFpJSmgcgoiS4TgIyZU4MHNerOAygL26h0w4F1yCPKa7tmANyklco5rJX6xig9C93prBM1ihNySu1/4aiiYQ1MnJVSDJZLfw76JRrcw9Hpn58z9ovUQ3h19EtsGASoOeqaPIkqOYcbgydNxUDEGuQ40yjtpBGNLEWvBb4JMGhz+RgZx7XBSVuiRGpL9yp5dNzwBxVfCbrqdWO/dAMeqEpZuIKGI7xFIUrSR0RehAp/kuKyIwvhUQF4FTR/LToq8EQIb6+OgVgwP+n3jLt1UECh5a3t7CLbSsptYZeYpjJX+N0jbRvIrUWJtNz2b5obbyARyLpPAgMBAAECggEBALw33SwoAw+/mQrSl0uL6bvHVjZrGBA7VRfAR49t/2/2e+5X9kICZD6jFvkGwc9q41T38ZAOf3pxzsb9bd9qzeEQfMp0QCNd2zX2uGp7w0nI6yaKmWfWMDA49FA1fBslvqMwSbQpNBX6qV7YMWSJi32Sgb98BELBFUH7B/HILVHiTnDkmq2/uqFLVt59LaTrJjkucU6EVwGL8jksyp6WrA4ErQhFNRNSCu7kY5QX8aP5fAgJ2/mqobkg6D7gSbOHF9TE5OGOcRw5wlVOMaRdG2hSikKD5aPJO11HbeTqdOf4pq4pxA2+JlHoGKpdbQXHOKepLek53tgq9gNkjn4qXBkCgYEA8AZDNkjbItu/X1iz2cJXnD9De/et4NmRXD8s/RX/PExXBAy390UZc2ojmaewea1tZEguph5RlEwA9uVtQbtOw+b06GMoDdixkwXCwM1sGyDXMbSSzwjZn1rieyORSrowFEFzMWz2Asf3Fw8nVV/RNJkfKNWWp7SyfjJ9o5ThZUMCgYEA5cy+AEwQcis/BCcf0zm2R6A4gdhAwc5/huI8cjLtkNrIYPIhCygzv0zsvaSR2TmbAA6zSBhWq1H0sljfohnMLViaZaHodRUkB9eJPxc6uUx7SlzLiIf+VE2/4tD3cD5f1m0Eej5/aGdS4zNKxjsGWJkP0ebiZFeHhXRb3DYbQAUCgYEAjdH1dqa3rDIRMkIUCm+VGoIa2q2utHN5OvstFuEfbT5iD8eAD39pmVM2c7ysPkjloOIxhf/WDfyWeUt4MeV9lazqOkEUUpId4hP+TbNS0/ikjf7225OMGmc1+LI8T94ROHavnJ2YAm6qpZpTkFNMJnru+U6ydKcE7CHjMHtwbkcCgYEAwbOFbKaxLis54PxBnUCGX3W0a+6nFzZC1KWaogA/s9xXDzDJnafzhosG+wvfTKV7+95oTJsHYz2f7z1utCreqlKHQqfpU9fQGTQbIi0oeMz5F8OEZL+NJ+6pkjzmdZx+GDaokYpgxtZhTdYMb2+Nd9z9MsdViZMmTt24GLUa3ykCgYAmNYEZz3togkkNawyvNax8BpCP11b6WGd1dhNU4CVtuEgTA2czQumPlc3892CX1Fkc3P3H2QZOnjEOEyvu62WqRA9zT1si3sI0yCZfC7/VNAzJb3kyEowWhycdkLzTX2KzW0zfVwVURG41GorpwAdmKq1lNt9V+PmHafZ6mmiK4g==-----END PRIVATE KEY-----',
                        r = new KJUR.crypto.Signature({
                        alg: "SHA1withRSA",
                        prvkeypem: t
                    });
                    r.updateString(e);
                    var c = r.sign();
                    return hextob64(c)
                }
function gettimestamp(){
    return Date.now();
    // return '1652148063000';
}
function gettime(){
            return(t = new Date,
            n = t.getFullYear(),
            r = t.getMonth() + 1,
            o = t.getDate(),
            c = t.getHours(),
            l = t.getMinutes(),
            f = t.getSeconds(),
            r < 10 && (r = "0" + r),
            o < 10 && (o = "0" + o),
            c < 10 && (c = "0" + c),
            l < 10 && (l = "0" + l),
            f < 10 && (f = "0" + f),
            "".concat(n).concat(r).concat(o).concat(c).concat(l).concat(f))
                }
function getNonce(){
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                        var p = 16 * Math.random() | 0;
                        return ("x" == e ? p : 3 & p | 8).toString(16)
                    }
                    ));

}
function getSecretIdT(){
      var t='m',o='exySAcE0rJPn1UOy',n = gettimestamp();
    var l = {
        activityInfoId: A.activityInfoId,
        nonce: getNonce(),
        signValue: o,
        timestamp: n,
        spuId: A.spuId,
        id:A.id,
        t:""
    };
      var SequenceString=
          'activityInfoId='+l.activityInfoId+
          '&nonce='+ l.nonce+
          '&signValue='+ l.signValue+
          '&spuId='+ l.spuId+
          '&timestamp='+l.timestamp;
      //console.log("PRI__=="+SequenceString)
      l.t=handleActionSign(SequenceString)+t;
      //console.log("RES__secret=="+l.t)
      return l;
}
function getSecretIdAuth(A_id){
    var l = {
                        activityInfoId: A_id.activityInfoId,
                        nonce: getNonce(),
                        // signValue: o,
                        timestamp: gettime(),
                        spuId: A_id.spuId,
                        // id:A_id.id,
                        auth:""
                    };

    var d3=
        'activityInfoId='+l.activityInfoId+
        '&spuId='+l.spuId+
        '&timestamp='+l.timestamp+
            '&appSecret=xsw21qaz'+
            '&nonce='+l.nonce;
        //console.log("PRI__auth=="+d3);
        l.auth="woclub:"+CryptoJS.MD5(d3).toString().toUpperCase();
        //console.log("RES__auth=="+l.auth);
        return l;
}
function getSecrerId() {
    if (!secretId) {
        var auth = getSecretIdAuth(A);
        var secret = getSecretIdT(A);
        var headers = new Headers({
            "Accept": "application/json, text/plain, */*",
            "user-agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 MicroMessenger/7.0.9.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat",
            "t": secret.t,
            "timestamp": auth.timestamp,
            "m": secret.timestamp,
            "nonce": auth.nonce,
            "x": secret.nonce,
            "auth": auth.auth,
            "Cookie":document.cookie,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            // "Referer": "https://club.10155.com/shop/seckill",
            "Referer": 'https://club.10155.com/detail/shopKill?id=711efa06f6424210864b9b83f941caaa&activityId=d875fbedf1c7424da0f86a96e1e6b933',
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty"
        });
        // activityInfoId=d8ee1c7380c744c2819a14b8c6587c10&spuId=10006317&O=nwovip
        var bodys = "activityInfoId=" + A.activityInfoId + "&spuId=" + A.spuId + "&O=nwovip";
        var url = "https://club.10155.com/credit-member/seckillAct" +
            "ivityInfo/getSeckillActivityInfoSecret";
        fetch(url, {
            body: bodys,
            headers: headers,
            method: 'POST',
        }).then(response => response.json()).then(res => console.log(0 == res.code && (secretId = res.data.secret)))
    }
}
function getAddress() {
    if(!address) {
        var A_address = {
            timestamp: gettime(),
            appSecret: 'xsw21qaz',
            nonce: getNonce()
        };
        var d = 'timestamp=' + A_address.timestamp +
            '&appSecret=xsw21qaz' +
            '&nonce=' + A_address.nonce;
        var auth = "woclub:" + CryptoJS.MD5(d).toString().toUpperCase();
        var headers = new Headers({
            "Accept": "application/json, text/plain, */*",
            "user-agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 MicroMessenger/7.0.9.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat",
            "timestamp": A_address.timestamp,
            "nonce": A_address.nonce,
            "auth": auth,
            "Cookie":document.cookie,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            // "Referer": "https://club.10155.com/shop/seckill",
            "Referer": 'https://club.10155.com/detail/shopKill?id=711efa06f6424210864b9b83f941caaa&activityId=d875fbedf1c7424da0f86a96e1e6b933',
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty"
        });
        var url = "https://club.10155.com/credit-member/leTingDigital/getUserAddressALL";
        fetch(url, {
            headers: headers,
            method: 'POST',
        }).then(response => response.json()).then(function (res) {
            //console.log(res.data[0].id);
            address = res.data[0].id;
        })
    }
}
function getTicket() {
    var captcha=new TencentCaptcha("2051192164",function(res){randstr=res.randstr;ticket=res.ticket;interval=setInterval(createOrder,timeout);},{needFeedBack: !1});
        captcha.show();
}
function getOrderT(A) {
    var A_order_t={
    nonce:getNonce(),
    timestamp:gettimestamp(),
    t:''
    };
    var d=
    "account="+
    "&activityInfoId="+A.activityInfoId+
    "&nonce="+A_order_t.nonce+
    "&payType=WX_PAY"+
    "&randstr="+randstr+
    "&redirectUrl="+A.redirectUrl+
    "&secret="+secretId+
    "&signValue=exySAcE0rJPn1UOy"+
    "&spuId="+A.spuId+
    "&ticket="+ticket+
    "&timestamp="+A_order_t.timestamp+
    "&userAddressId="+address;
    A_order_t.t=handleActionSign(d)+'m';
    //console.log("orderT==="+A_order_t);
    return A_order_t;
}
function getOrderAuth(A) {
    var A_order_auth={
    nonce:getNonce(),
    timestamp:gettime(),
    auth:''
    };
    var orderauth="activityInfoId="+A.activityInfoId+"&payType=WX_PAY&redirectUrl="+A.redirectUrl+"&secret="+secretId+"&spuId="+A.spuId+"&timestamp="+A_order_auth.timestamp+"&appSecret=xsw21qaz&nonce="+A_order_auth.nonce;
    A_order_auth.auth="woclub:"+CryptoJS.MD5(orderauth).toString().toUpperCase();
    return A_order_auth;

}
function createOrder(){
    if(secretId) {
        clearInterval(interval);
        var order_auth = getOrderAuth(A);
        var order_t = getOrderT(A);
        var headers = new Headers({
            "Accept": "application/json, text/plain, */*",
            "user-agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 MicroMessenger/7.0.9.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat",
            "t": order_t.t,
            "x": order_t.nonce,
            "m": order_t.timestamp,
            "timestamp": order_auth.timestamp,
            "nonce": order_auth.nonce,
            "auth": order_auth.auth,
            "Cookie":document.cookie,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            "Referer": 'https://club.10155.com/detail/shopKill?id=711efa06f6424210864b9b83f941caaa&activityId=d875fbedf1c7424da0f86a96e1e6b933',
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty"
        });
        var bodys = "spuId=" + A.spuId +
            "&payType=WX_PAY" +
            "&secret=" + secretId +
            "&activityInfoId=" + A.activityInfoId +
            "&redirectUrl=https%3A%2F%2Fclub.10155.com%2Fshop%2ForderDetail" +
            "&ticket=" + encodeURIComponent(ticket) +
            "&randstr=" + encodeURIComponent(randstr) +
            "&account=&" +
            "userAddressId=" + address +
            "&O=mwovip";
        var url = 'https://club.10155.com/credit-member/seckillActivityInfo/createOrder';
        fetch(url, {
            body: bodys,
            headers: headers,
            method: 'POST',
        }).then(response => response.json()).then(res => console.log(res))
    }
    else{
        getAddress();
        getSecrerId();
    }


}
