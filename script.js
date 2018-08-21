function isWeixinBrowser() {
  var ua = navigator.userAgent.toLowerCase()
  return /micromessenger/.test(ua) ? true : false
}

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
  }
}
