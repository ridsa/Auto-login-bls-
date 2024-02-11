// ==UserScript==
// @name         BLS AUTO LOGIN ACCES AUTOMATIQUE A VOTRE COMPTE
// @namespace    https://algeria.blsspainglobal.com/DZA/home/index
// @version      3.2
// @description  BLS AUTO LOGIN/ ACCES AUTOMATIQUE A VOTRE COMPTE
// @author       RedhaNapS
// @match        https://algeria.blsspainglobal.com/DZA/Account/LogIn*
// @match        https://algeria.blsspainglobal.com/DZA/account/login*
// @match        *://www.blsspainmorocco.net/*
// @icon         https://algeria.blsspainglobal.com/assets/images/logo.png
// @grant        none
// ==/UserScript==

/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/
//*
'                                        ارجو منكم الدعاء للوالده بالشفاء '
'                       اللهم اشفِ أُمي شفاءً ليس بعدهُ سقما أبدًا، اللهم خذ بيدِها، اللهمَّ احرسها بعينيك التي لا تنام'
'                                       اللهم إنك أعلم بحالها فالطف بها'
'                                      اللهم إنك أعلم بحالها فالطف بها'
'                               وأخبَرُ بمرضها فاشفها وأدرى بعلاجها فعجّل بشفائها'
'              يا كاشف الهَمّ يا مُفرج الكَرب يا مُجيب دعوة المُضطرين، اللهمّ ألبسها ثوب الصحةِ والعافيّة عاجلًا غير أجلً'

 /*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/


let j = "";
        if (btoa("yunus") === window[btoa("USER")]) {
          j = `
              <button id="btnVerified" class="btn btn-primary" >
                  <i class="fas fa-upload"></i>
              </button>

              <button id="btnVerified" class="btn btn-primary" >
                  <i class="fas fa-download"></i>
              </button>
              `;
        }
        const k = `
              <div class="text-center" style="width: 100%; padding: 10px; background-color: #f0f0f0">
            <div class="row mb-2">
              <div class="col">

                  ` + j + `

                <button id="btnVerified" class="btn btn-info">
                    <a style="color:white" target="_blank" href="https://t.me/RedhaNapS"> telegram <i class="fab fa-telegram"></i></a></button>
                </div>
              </div>
            </div> </div>`;

(function () {
  var Names = ['Teste1', 'Teste2', 'Teste3', 'Teste4', 'Teste5', ];

  var data = [
                                    

                                           { mail: 'اكتب الايميل ', password: 'اكتب كلمه السر' },

                                           { mail: 'اكتب الايميل ', password: 'اكتب كلمه السر' },

                                           { mail: 'اكتب الايميل ', password: 'اكتب كلمه السر' },

                                           { mail: 'اكتب الايميل ', password: 'اكتب كلمه السر' },

  ];

  function _0x32f8() {var _0x4e1ff4 = ['style','12hGFIeX','resize','mail','26361OfUqSy','552685yiNIul','getElementById','createElement','querySelector','1177Ywxnoo','64914fBhLxO','#btnSubmit','parentNode','1znwcfm','3713101CEsTzV','transform','width','input','insertBefore','#3498db','form','scale(0.9)','UserId','value','border-color:\x20white;font-weight:\x20bold;background-image:\x20linear-gradient(-225deg,#5143d9\x200%,\x20#1984c8\x2015%,\x20#5143d9\x2050%,\x20rgb(219\x2091\x20153)\x20100%);cursor:\x20pointer;\x20width:\x20100px;\x20line-height:\x2022px;color:white;\x20margin:\x200.7px;border-radius:\x207px','readOnly','auto','Password','1280cUwjBo','mouseout','click','backgroundColor','1506573FKKvkm','getElementsByTagName','80690fHYIKn','893594wuLcTo','addEventListener',];
    _0x32f8 = function () {
      return _0x4e1ff4;
    };
    return _0x32f8();
  }
  var _0xf844f6 = _0x4b3d;
  function _0x4b3d(_0x58b413, _0x4239d8) {
    var _0x32f83f = _0x32f8();
    return (
      (_0x4b3d = function (_0x4b3d53, _0x37afa4) {
        _0x4b3d53 = _0x4b3d53 - 0x94;
        var _0x57b339 = _0x32f83f[_0x4b3d53];
        return _0x57b339;
      }),
      _0x4b3d(_0x58b413, _0x4239d8)
    );
  }
  (function (_0x4e1e4f, _0x561e8b) {
    var _0x54e85c = _0x4b3d,
      _0x3b1b7e = _0x4e1e4f();
    while (!![]) {
      try {
        var _0x220eff =
          (parseInt(_0x54e85c(0xb6)) / 0x1) *
            (-parseInt(_0x54e85c(0xa7)) / 0x2) +
          parseInt(_0x54e85c(0xa4)) / 0x3 +
          (-parseInt(_0x54e85c(0xaa)) / 0x4) *
            (parseInt(_0x54e85c(0xae)) / 0x5) +
          parseInt(_0x54e85c(0xb3)) / 0x6 +
          parseInt(_0x54e85c(0xb7)) / 0x7 +
          (parseInt(_0x54e85c(0xa0)) / 0x8) *
            (-parseInt(_0x54e85c(0xad)) / 0x9) +
          (parseInt(_0x54e85c(0xa6)) / 0xa) * (parseInt(_0x54e85c(0xb2)) / 0xb);
        if (_0x220eff === _0x561e8b) break;
        else _0x3b1b7e['push'](_0x3b1b7e['shift']());
      } catch (_0x4b104f) {
        _0x3b1b7e['push'](_0x3b1b7e['shift']());
      }
    }
  })(_0x32f8, 0xa114c);
  var o = 0x0;
  for (var x = 0x0; x <= 0x5; x++) {
    var b = document[_0xf844f6(0xb0)](_0xf844f6(0x95));
    (b[_0xf844f6(0x9b)] = '\x20' + Names[x]),
      (b['id'] = 'f' + o),
      (b[_0xf844f6(0x9d)] = !![]),
      (b[_0xf844f6(0xa9)]['cssText'] = _0xf844f6(0x9c)),
      b[_0xf844f6(0xa8)]('mouseover', function () {
        var _0x38ab42 = _0xf844f6;
        (this[_0x38ab42(0xa9)][_0x38ab42(0xa3)] = '#2980b9'),
          (this['style']['transform'] = _0x38ab42(0x99));
      }),
      b['addEventListener'](_0xf844f6(0xa1), function () {
        var _0x53306e = _0xf844f6;
        (this[_0x53306e(0xa9)][_0x53306e(0xa3)] = _0x53306e(0x97)),
          (this[_0x53306e(0xa9)][_0x53306e(0xb8)] = 'scale(1)');
      }),
      document['getElementsByTagName'](_0xf844f6(0x98))[0x0][_0xf844f6(0xb5)][
        _0xf844f6(0x96)
      ](b, document[_0xf844f6(0xa5)](_0xf844f6(0x98))[0x0]),
      b[_0xf844f6(0xa8)](
        _0xf844f6(0xa2),
        (function (_0x590bb7) {
          return function () {
            var _0x3503fc = _0x4b3d,
              _0x32ac22 = data[_0x590bb7][_0x3503fc(0xac)],
              _0x4defbe = data[_0x590bb7]['password'];
            s(_0x32ac22, _0x4defbe);
            var _0x52643d = document[_0x3503fc(0xb1)](_0x3503fc(0xb4));
            _0x52643d && _0x52643d[_0x3503fc(0xa2)]();
          };
        })(x)
      ),
      o++;
  }
  function s(_0x5bd6b2, _0x30b33b) {
    var _0x566a46 = _0xf844f6;
    for (var _0x31b0c9 = 0x1; _0x31b0c9 <= 0xa; _0x31b0c9++) {
      (document['getElementById'](_0x566a46(0x9a) + _0x31b0c9)['value'] =
        _0x5bd6b2),
        (document['getElementById'](_0x566a46(0x9f) + _0x31b0c9)[
          _0x566a46(0x9b)
        ] = _0x30b33b);
    }
  }
  window['addEventListener'](_0xf844f6(0xab), function () {
    var _0x543c2d = _0xf844f6;
    for (var _0x298c4a = 0x0; _0x298c4a <= 0x5; _0x298c4a++) {
      var _0x23aa68 = document[_0x543c2d(0xaf)]('f' + _0x298c4a);
      _0x23aa68 &&
        (_0x23aa68[_0x543c2d(0xa9)][_0x543c2d(0x94)] = _0x543c2d(0x9e));
    }
  });
})();

function _0x23ec(_0x54eb5b, _0x1eee0a) {
  var _0x151539 = _0x1515();
  return (
    (_0x23ec = function (_0x23ecc0, _0xccf7a4) {
      _0x23ecc0 = _0x23ecc0 - 0x1e1;
      var _0x55b3ad = _0x151539[_0x23ecc0];
      return _0x55b3ad;
    }),
    _0x23ec(_0x54eb5b, _0x1eee0a)
  );
}
function _0x1515() {
  var _0x33d666 = ['removeProperty','761112gwqeSF','btnSubmit','644892JGSbxQ','display','none','676250UBioGm','style','62374gvtSik','textContent','1860dfUhHL','getElementById','1SPRgbu','btnVerified','btnVerify','2236066hQMOpB','255664rXgPQO',];
  _0x1515 = function () {
    return _0x33d666;
  };
  return _0x1515();
}
(function (_0x2ef4bbe, _0x501128) {
  var _0x36749b = _0x23ec,
    _0x14d278 = _0x2ef4bb();
  while (!![]) {
    try {
      var _0x3541de =
        (-parseInt(_0x36749b(0x1e8)) / 0x1) *
          (-parseInt(_0x36749b(0x1e4)) / 0x2) +
        parseInt(_0x36749b(0x1e6)) / 0x3 +
        -parseInt(_0x36749b(0x1f0)) / 0x4 +
        parseInt(_0x36749b(0x1e2)) / 0x5 +
        -parseInt(_0x36749b(0x1ee)) / 0x6 +
        parseInt(_0x36749b(0x1eb)) / 0x7 +
        -parseInt(_0x36749b(0x1ec)) / 0x8;
      if (_0x3541de === _0x501128) break;
      else _0x14d278['push'](_0x14d278['shift']());
    } catch (_0x3fa460) {
      _0x14d278['push'](_0x14d278['shift']());
    }
  }
})(_0x1515, 0x28a3e),
  (function () { 'use strict';
    var _0x4cd0b9 = _0x23ec;
    var _0x2ec704 = document[_0x4cd0b9(0x1e7)](_0x4cd0b9(0x1ea));
    _0x2ec704 &&
      (_0x2ec704[_0x4cd0b9(0x1e3)][_0x4cd0b9(0x1f1)] = _0x4cd0b9(0x1e1));
    var _0x4325cc = document[_0x4cd0b9(0x1e7)]('');
    _0x4325cc && _0x4325cc[_0x4cd0b9(0x1e3)][_0x4cd0b9(0x1ed)]('display');
    var _0x251610 = document['getElementById'](_0x4cd0b9(0x1ef)); _0x251610 &&_0x251610[_0x4cd0b9(0x1e3)][_0x4cd0b9(0x1ed)](_0x4cd0b9(0x1f1));
                var _0x5d0560d = document[_0x4cd0b9(0x1e7)](_0x4cd0b9(0x1e9));_0x5d0560 && (_0x5d0560[_0x4cd0b9(0x1e5)] = 'btnVerified');})();

function _0x9549(_0x4449e0, _0x633e98) {
  var _0x4c57fb = _0x4c57();
  return (
    (_0x9549 = function (_0x9549ce, _0xee3dfe) {
      _0x9549ce = _0x9549ce - 0x1c8;
      var _0x2f2c85 = _0x4c57fb[_0x9549ce];
      return _0x2f2c85;
    }),
    _0x9549(_0x4449e0, _0x633e98)
  );
}
(function (_0x13fc5b, _0x1ace70) {
  var _0x33825f = _0x9549,
    _0x2d19cb = _0x13fc5b();
  while (!![]) {
    try {
      var _0x4722d2 =
        (-parseInt(_0x33825f(0x1d5)) / 0x1) *
          (parseInt(_0x33825f(0x1dc)) / 0x2) +
        parseInt(_0x33825f(0x1d4)) / 0x3 +
        (parseInt(_0x33825f(0x1dd)) / 0x4) *
          (-parseInt(_0x33825f(0x1de)) / 0x5) +
        (-parseInt(_0x33825f(0x1cf)) / 0x6) *
          (-parseInt(_0x33825f(0x1cb)) / 0x7) +
        parseInt(_0x33825f(0x1df)) / 0x8 +
        (parseInt(_0x33825f(0x1c8)) / 0x9) *
          (parseInt(_0x33825f(0x1d8)) / 0xa) +
        (parseInt(_0x33825f(0x1d7)) / 0xb) * (parseInt(_0x33825f(0x1da)) / 0xc);
      if (_0x4722d2 === _0x1ace70) break;
      else _0x2d19cb['push'](_0x2d19cb['shift']());
    } catch (_0x2dade6) {
      _0x2d19cb['push'](_0x2d19cb['shift']());
    }
  }
})(_0x4c57, 0xbea73),
  (function () {
    'use strict';
    var _0xb6ca34 = _0x9549;
    $['ajax']({
      type: 'GET',
      url: _0xb6ca34(0x1d1),
      success: function (_0x142a17) {
        var _0x24c7c2 = _0xb6ca34;
        console['log'](_0x142a17);
        var _0xbf9b61 = {
          SelectedImages: _0x24c7c2(0x1cc),
          Id: _0x24c7c2(0x1cd),
          Captcha: _0x24c7c2(0x1d0),
          _RequestVerificationToken: $(
            'input:hidden[name=\x22_RequestVerificationToken\x22]'
          )[_0x24c7c2(0x1db)](),
          'X-Requested-With': _0x24c7c2(0x1d3),
        };
        $[_0x24c7c2(0x1ca)]({
          type: _0x24c7c2(0x1d9),
          data: _0xbf9b61,
          url: '/DZA/CaptchaPublic/SubmitCaptcha',
          dataType: 'json',
          success: function (_0x28dc21) {
            var _0x22a662 = _0x24c7c2;
            $(_0x22a662(0x1d6))['val'](_0x28dc21[_0x22a662(0x1ce)]),
              $(_0x22a662(0x1c9))[_0x22a662(0x1db)](_0x22a662(0x1cd)),
              console[_0x22a662(0x1d2)](_0x28dc21);}, });},});})();
function _0x4c57() {var _0x192b2a = ['POST','17076YkKRDd','val','5506quZAwh','1305844VIVdRN','15pZICEv','803128cHWkKQ','30339voPLQg','#CaptchaId','ajax','308147BgUQTh','mevyvylb,uoqyc,vklzfabcj,xjmznq','89f96f36-4d48-4931-8920-4de11f74adaf','captcha','6ctDmsD','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','/DZA/CaptchaPublic/GenerateCaptcha?data=rOWSx8qdEc4sGubBMWIWh3ipe9oScWNO9wlIbFCNlOzy%2bDO989HaHHXl0JLVXdYeb%2b36zo80bOA3QzgdyQIlkKnrwCWcUuZvMf0e4GU4UPY%3d','log','XMLHttpRequest','4149303ihwafy','502gQCmlK','#CaptchaData','2398bDyZEi','3870rRtlju',];_0x4c57 = function () {return _0x192b2a;};return _0x4c57();}
/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/
//*
'                                        ارجو منكم الدعاء للوالده بالشفاء '
'                       اللهم اشفِ أُمي شفاءً ليس بعدهُ سقما أبدًا، اللهم خذ بيدِها، اللهمَّ احرسها بعينيك التي لا تنام'
'                                       اللهم إنك أعلم بحالها فالطف بها'
'                                      اللهم إنك أعلم بحالها فالطف بها'
'                               وأخبَرُ بمرضها فاشفها وأدرى بعلاجها فعجّل بشفائها'
'              يا كاشف الهَمّ يا مُفرج الكَرب يا مُجيب دعوة المُضطرين، اللهمّ ألبسها ثوب الصحةِ والعافيّة عاجلًا غير أجلً'

 /*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/
