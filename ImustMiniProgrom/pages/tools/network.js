//Pre  && Production
const Network_Environment = "Pre";

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

export function test() {
  console.log('333')
}
