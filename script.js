function isWeixinBrowser(){
  var ua = navigator.userAgent.toLowerCase();
  return (/micromessenger/.test(ua)) ? true : false ;
}


window.onload= function() {
  var el = document.getElementById("tk")
  if (isWeixinBrowser()) {
    el.innerHTML = "isWx"
  } else {
    el.innerHTML = 'isNotWx'
  }
}