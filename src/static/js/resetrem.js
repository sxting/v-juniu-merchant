var ResetRem = {};
ResetRem.install = function (Vue, options) {
    Vue.resetrem = function (){
		(function (doc, win) {
			var docEl = doc.documentElement,
				resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
				recalc = function () {
		
					var clientWidth = docEl.clientWidth;
					if (!clientWidth) return;
					if (clientWidth >= 750) {
						docEl.style.fontSize = '100px';
					} else {
						docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
					}
				};
		
			if (!doc.addEventListener) return;
			win.addEventListener(resizeEvt, recalc, false);
			recalc()
			doc.addEventListener('DOMContentLoaded', recalc, false);
			/*DOMContentLoaded文档加载完成不包含图片资源 onload包含图片资源*/
		})(document, window);
		// console.log('已经转变了默认字体大小1rem为100px');
    };
};
module.exports = ResetRem;