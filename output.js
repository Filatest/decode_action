//Fri Mar 13 2026 08:42:24 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {
  "use strict";

  const _0x5ee937 = true;
  function _0x4baef2(_0x56c3a1, _0x364fa3) {
    const _0x1939d4 = [];
    function _0x43fd18(_0x462e76) {
      if (_0x462e76 && typeof _0x462e76 === "object") {
        !Array.isArray(_0x462e76) && Object.prototype.hasOwnProperty.call(_0x462e76, _0x364fa3) && _0x1939d4.push(_0x462e76[_0x364fa3]);
        const _0xa8a1a7 = Array.isArray(_0x462e76) ? _0x462e76 : Object.values(_0x462e76);
        for (const _0x1b3256 of _0xa8a1a7) _0x43fd18(_0x1b3256);
      }
    }
    _0x43fd18(_0x56c3a1);
    return _0x1939d4;
  }
  const _0x6eef95 = JSON.parse;
  JSON.parse = function (_0x48fb0a) {
    let _0x599651;
    try {
      _0x599651 = _0x6eef95(_0x48fb0a);
    } catch {
      return _0x6eef95(_0x48fb0a);
    }
    if (!_0x5ee937 || typeof _0x48fb0a !== "string" || !_0x48fb0a.includes("creations")) {
      return _0x599651;
    }
    try {
      const _0x40aabc = _0x4baef2(_0x599651, "creations");
      _0x40aabc.forEach(_0x379791 => {
        _0x379791.forEach(_0xb466f5 => {
          const _0x1d15a2 = _0xb466f5?.["image"]?.["image_ori_raw"]?.["url"];
          _0x1d15a2 && (_0xb466f5.image.image_ori.url = _0x1d15a2, _0xb466f5.image.image_preview.url = _0x1d15a2, _0xb466f5.image.image_thumb.url = _0x1d15a2);
        });
      });
    } catch {}
    return _0x599651;
  };
  function _0x3b5349(_0x333e6f) {
    const _0xc70715 = document.createElement("div");
    _0xc70715.id = "doubao-status-popup";
    _0xc70715.innerHTML = "\n      <div class=\"popup-header\">\n        <strong>豆包去水印插件</strong>\n        <button class=\"close-btn\" title=\"关闭\">×</button>\n      </div>\n      <div class=\"popup-body\">\n        当前状态：<b style=\"color:" + (_0x333e6f ? "#4CAF50" : "#E53935") + "\">\n          " + (_0x333e6f ? "已启用 ✓" : "已禁用 ✗") + "\n        </b>\n      </div>\n      <div class=\"popup-footer\">\n        <a href=\"https://www.zzzwb.com\" target=\"_blank\" style=\"color:#2196F3;text-decoration:none;\">\n          插件由 zzzwb 设计开发<br>访问 www.zzzwb.com 获取支持\n        </a>\n      </div>\n    ";
    Object.assign(_0xc70715.style, {
      position: "fixed",
      top: "50%",
      right: "-320px",
      transform: "translateY(-50%)",
      width: "280px",
      background: "rgba(255,255,255,0.98)",
      color: "#333",
      borderRadius: "12px 0 0 12px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
      fontFamily: "sans-serif",
      zIndex: "999999",
      overflow: "hidden",
      transition: "right 0.5s ease-in-out, opacity 0.5s ease",
      opacity: "1"
    });
    _0xc70715.querySelector(".popup-header").style.cssText = "\n      background: linear-gradient(135deg, " + (_0x333e6f ? "#4CAF50, #2E7D32" : "#E53935, #B71C1C") + ");\n      color: white;\n      padding: 10px 14px;\n      font-size: 15px;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n    ";
    _0xc70715.querySelector(".close-btn").style.cssText = "\n      background: transparent;\n      border: none;\n      color: white;\n      font-size: 18px;\n      cursor: pointer;\n      line-height: 1;\n    ";
    _0xc70715.querySelector(".popup-body").style.cssText = "\n      padding: 14px;\n      font-size: 14px;\n      line-height: 1.6;\n    ";
    _0xc70715.querySelector(".popup-footer").style.cssText = "\n      padding: 10px 14px;\n      font-size: 12px;\n      border-top: 1px solid #ddd;\n      text-align: center;\n      background: #fafafa;\n    ";
    document.body.appendChild(_0xc70715);
    requestAnimationFrame(() => {
      _0xc70715.style.right = "10px";
    });
    _0xc70715.querySelector(".close-btn").addEventListener("click", _0x3fc271);
    setTimeout(() => _0x3fc271(), 6000);
    function _0x3fc271() {
      _0xc70715.style.right = "-320px";
      _0xc70715.style.opacity = "0";
      setTimeout(() => _0xc70715.remove(), 600);
    }
  }
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => _0x3b5349(_0x5ee937)) : _0x3b5349(_0x5ee937);
  console.log("[Doubao去水印] 已加载（状态：" + (_0x5ee937 ? "启用" : "禁用") + "）");
})();