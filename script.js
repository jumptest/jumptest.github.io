function isWeixinBrowser() {
  var ua = navigator.userAgent.toLowerCase()
  return /micromessenger/.test(ua) ? true : false
}


function copyToClipboard(str, callback) {
  var el = document.createElement('textarea');
  el.value = str;                                 // Set its value to the string that you want copied
  el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
  el.style.position = 'absolute';                 
  el.style.left = '-9999px';                      // Move outside the screen to make it invisible
  document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
  const selected =            
    document.getSelection().rangeCount > 0        // Check if there is any content selected previously
      ? document.getSelection().getRangeAt(0)     // Store selection if found
      : false;                                    // Mark as false to know no selection existed before
  el.select();                                    // Select the <textarea> content
  document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
  document.body.removeChild(el);                  // Remove the <textarea> element
  if (selected) {                                 // If a selection existed before copying
    document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
    document.getSelection().addRange(selected);   // Restore the original selection
  }
  callback ? callback() : ''
}




var tkl = "【CCplanet 可爱卡通纸质大贴纸旅行箱装饰贴纸行李箱贴画】http://m.tb.cn/h.3VnXmom 点击链接，再选择浏览器咑閞；或復·制这段描述€wquPbXvnktQ€后到👉淘♂寳♀👈"


window.onload = function() {
  var el = document.getElementById('tk')

  console.log('window loaded ')
  console.log(navigator.userAgent.toLowerCase())
  let go = isWeixinBrowser()
  console.log(go)

  if (go) {
    el.innerHTML = 'isWx'
  } else {
    el.innerHTML = 'isNotWx'
    // window.location.href="taobao://"
    function jump() {
      window.location.href="taobao://"
    }
    copyToClipboard(tkl , jump)
  }
}
