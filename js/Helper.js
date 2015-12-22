var H = {};
  // 取一个int类型的随机数
  H.RandomInt = function () {
    try {
      // 生成 32bit unsigned integer, 伪随机数
      var a = new Uint32Array(1);
      window.crypto.getRandomValues(a);
      return a[0] & 2147483647;
    } catch (err) {
      return Math.round(2147483647 * Math.random())
    }
  };

  /**
   * 获取监听的dom对象，支持 selector， ID； 如果是className，也需要保证className唯一，否则，无法获取dom对象
   * @param selector
   * @returns object
   */
  H.getListenObject = function (selector) {
    var domObj = document.getElementById(selector);
    // 若selector是 className
    if (!domObj && typeof domObj !== 'undefined' && domObj !== 0) {
      // 若客户端是IE9以下
      if (!document.getElementsByClassName) {
        var dom = document.getElementsByTagName("*"), domLen = dom.length;
        for (var i = 0; i < domLen; i++) {
          if (dom[i].className) {
            var cls = dom[i].className.split(" "), clsLen = cls.length;
            for (var c = 0; c < clsLen; c++) {
              if (cls[c] === selector) {
                return dom[i];
              }
            }
          }
        }
        // IE9以上（包括）
      } else {
        return document.getElementsByClassName(selector)[0];
      }
    }
    return domObj;
  };

  /**
   * 添加监听事件，兼容IE6+，其他
   * @param target
   * @param event
   * @param func
   */
  H.attachEventListener = function (target, event, func) {
    if (target.addEventListener) {
      // 监听IE9，谷歌和火狐
      target.addEventListener(event, func, false);
    } else if (target.attachEvent) {
      // 监听IE<9
      target.attachEvent("on" + event, func);
    } else {
      target["on" + event] = func;
    }
  };

  /**
   * 移除监听事件，兼容IE6+，其他
   * @param target
   * @param event
   * @param func
   */
  H.removeEventListener = function (target, event, func) {
    if (target.removeEventListener) {
      // 监听IE9，谷歌和火狐
      target.removeEventListener(event, func, false);
      // 监听IE<9
    } else if (target.detachEvent) {
      target.detachEvent("on" + event, func);
    } else {
      delete target["on" + event];
    }
  };
