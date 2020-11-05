// 事件代理
function eventDelegate(parentSelector, targetSelector, events, foo) {
  const $parentNodes = parentSelector;
  console.log($parentNodes);

  function triFunction(e) {
    const event = e || window.event;
    let target = event.target || event.srcElement;
    const { currentTarget } = event;
    // matches兼容性处理
    if (!Element.prototype.matches) {
      Element.prototype.matches = Element.prototype.matchesSelector
        || Element.prototype.mozMatchesSelector
        || Element.prototype.msMatchesSelector
        || Element.prototype.oMatchesSelector
        || Element.prototype.webkitMatchesSelector
        || function (s) {
          const matches = (this.document || this.ownerDocument).querySelectorAll(s);
          let i = matches.length;
          while (--i >= 0 && matches.item(i) !== this) {
          }
          return i > -1;
        };
    }
    // 优化
    // 当被代理的元素不是目标元素的时候，既选择器 targetSelector 所指向的元素不是 event.target （事件目标阶段指向的元素）的时候
    while (target !== currentTarget) { // 遍历查找父节点
      // 判断是否是目标子元素
      if (target.matches(targetSelector)) {
        // 传递上下文 事件参数
        foo.call(target, Array.prototype.slice.call(arguments));
        return;
      }
      target = target.parentNode;
    }
  }

  events.split(',')
    .forEach((evt) => {
      Array.prototype.slice.call($parentNodes)
        .forEach(($p) => {
          $p.addEventListener(evt, triFunction);
        });
    });
}

export default {
  eventDelegate,
};
