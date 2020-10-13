import $ from "jquery";
//pc, mobile chack script (sample code)
export function checkPlatform(ua: any) {
  if (ua === undefined) {
    ua = window.navigator.userAgent;
  }

  ua = ua.toLowerCase();
  var platform: any = {};
  var matched: any = {};
  var userPlatform = "pc";
  var platform_match =
    /(ipad)/.exec(ua) ||
    /(ipod)/.exec(ua) ||
    /(windows phone)/.exec(ua) ||
    /(iphone)/.exec(ua) ||
    /(kindle)/.exec(ua) ||
    /(silk)/.exec(ua) ||
    /(android)/.exec(ua) ||
    /(win)/.exec(ua) ||
    /(mac)/.exec(ua) ||
    /(linux)/.exec(ua) ||
    /(cros)/.exec(ua) ||
    /(playbook)/.exec(ua) ||
    /(bb)/.exec(ua) ||
    /(blackberry)/.exec(ua) ||
    [];

  matched.platform = platform_match[0] || "";

  if (matched.platform) {
    platform[matched.platform] = true;
  }

  if (
    platform.android ||
    platform.bb ||
    platform.blackberry ||
    platform.ipad ||
    platform.iphone ||
    platform.ipod ||
    platform.kindle ||
    platform.playbook ||
    platform.silk ||
    platform["windows phone"]
  ) {
    userPlatform = "mobile";
  }

  if (platform.cros || platform.mac || platform.linux || platform.win) {
    userPlatform = "pc";
  }

  return userPlatform;
}

function jdPayCallBackSucess() {}
//[PC Only]
export function PCnicepaySubmit() {
  const target = $("form[name=payForm]");
  target.attr("action", target.data("url"));
  target.submit();
}

function jdPayStart() {
  const target = $("form[name=payForm]");
  const isMobile = checkPlatform(window.navigator.userAgent) == "mobile";
  if (isMobile) {
    const mobileAction = "https://web.nicepay.co.kr/v3/v3Payment.jsp";
    target.attr("accept-charset", "euc-kr");
    target.attr("action", mobileAction);
    target.submit();
  } else {
    window.nicepaySubmit = PCnicepaySubmit;
    window.goPay(target.get(0));
  }
}

//[PC Only]payment window close function <<'nicezpayClose()' DO NOT CHANGE>>
function nicepayClose() {
  alert("결제가 취소 되었습니다");
  location.reload();
}

declare global {
  interface Window {
    // add you custom properties and methods
    nicepaySubmit: any;
    jdPayCallBackSucess: () => any;
    checkPlatform: (ua: any) => any;
    jdPayStart: () => any;
    nicepayClose: () => any;
    goPay: (foo: any) => any;
  }
}

window.jdPayCallBackSucess = jdPayCallBackSucess;
window.checkPlatform = checkPlatform;
window.jdPayStart = jdPayStart;
window.nicepayClose = nicepayClose;
