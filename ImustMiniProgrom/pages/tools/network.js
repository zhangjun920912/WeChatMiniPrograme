//Pre  && Production
const Network_Environment = "Pre";
const Network_Header_Tokens = "Network_Header_Tokens"

export function currentHost(){
  var host,cdn_host;
  if (Network_Environment == "Pre") {
    host = "https://pre.dealglobe.com";
    cdn_host = "https://cdnpre.dealglobe.com";
  } else {
    host = "https://dealglobe.com";
    cdn_host = "https://assets.dealglobe.com";
  }
  return { host: host, cdnHost: cdn_host}
}

export function fetchData(url, isUseCDN, params, method = "GET", header = {}, success, fail) {
  //handle url
  var requestUrl = isUseCDN ? currentHost().cdnHost + url : currentHost().host + url; 
  if (url.includes("http://") || url.includes("https://")) {
    requestUrl = url;
  }
  //handle header
  var requestHeader = {};
  requestHeader['content-type'] = 'application/json';
  if (header){
    for (var i in header){
      requestHeader[i] = header[i]
    }
  }
  //get user token
  try {
    var value = wx.getStorageSync(Network_Header_Tokens)
    if (value) {
      
    }
  } catch (e) {
    
  }
  console.log('send request: ' + requestUrl)
  wx.request({
    url: requestUrl,
    data: params,
    header: requestHeader,
    method: method,
    success: function (res) {
      if(success){
        success(res)
      }else{

      }
    },
    fail: function (err) {
      if(fail){
        fail(err)
      }else{

      }
    }
  })

}



