export function hasClass(el, className) {
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
    return reg.test(el.className)
}

export function delBlank(value) {
    return String(value).replace(/(^\s*)|(\s*$)/g, "");
}

export function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}

export function addClass(el, className) {
    if (hasClass(el, className)) {
        return
    }
    let newClass = el.className.split(' ')
    newClass.push(className)
    el.className = newClass.join(' ')
}

export function removeClass(el, className) {
    if (!hasClass(el, className)) {
        return
    }
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g')
    el.className = el.className.replace(reg, ' ')
}

export function getData(el, name, val) {
    let prefix = 'data-'
    if (val) {
        return el.setAttribute(prefix + name, val)
    }
    return el.getAttribute(prefix + name)
}

export function getRect(el) {
    if (el instanceof window.SVGElement) {
        let rect = el.getBoundingClientRect()
        return {
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height
        }
    } else {
        return {
            top: el.offsetTop,
            left: el.offsetLeft,
            width: el.offsetWidth,
            height: el.offsetHeight
        }
    }
}

export function imgCompress(file, obj, callback) {
    var ready = new FileReader();
    ready.readAsDataURL(file);
    ready.onload = function() {
        var path = this.result;
        var img = new Image();
        img.src = path;
        img.onload = function() {
            var that = this;
            // 默认按比例压缩
            var w = that.width,
                h = that.height,
                scale = w / h;
            w = obj.width || w;
            h = obj.height || (w / scale);
            var quality = 0.7; // 默认图片质量为0.7
            //生成canvas
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            // 创建属性节点
            var anw = document.createAttribute("width");
            anw.nodeValue = w;
            var anh = document.createAttribute("height");
            anh.nodeValue = h;
            canvas.setAttributeNode(anw);
            canvas.setAttributeNode(anh);
            ctx.drawImage(that, 0, 0, w, h);
            // 图像质量
            if (obj.quality && obj.quality <= 1 && obj.quality > 0) {
                quality = obj.quality;
            }
            // quality值越小，所绘制出的图像越模糊
            var base64 = canvas.toDataURL('image/jpeg', quality);
            // 回调函数返回base64的值
            callback(base64);
        }
    }
}
export function convertBase64UrlToBlob(urlData) {
    var arr = urlData.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {
        type: mime
    });
}

export function qualityFormat(size) {
    if (size > 100 && size <= 500) {
        return 0.5;
    } else if (size > 500 && size < 1000) {
        return 0.4;
    } else if (size > 1000 && size < 1500) {
        return 0.3;
    } else if (size > 1500 && size < 2000) {
        return 0.2;
    } else {
        return 0.1;
    }
}
export function placeholder() {
    var nodes = document.getElementsByTagName('input');
    if (nodes.length && !("placeholder" in document.createElement("input"))) {
        for (i = 0; i < nodes.length; i++) {
            var self = nodes[i], placeholder = self.getAttribute('placeholder') || '';type = self.getAttribute('type');
            self.onfocus = function() {
                if (self.value == placeholder) {
                    self.value = '';self.style.color = "#333";
                }
            }
            self.onblur = function() {
                if (self.value == '') {
                    self.value = placeholder;self.style.color = "#999";
                }
            }
            self.value = placeholder;self.style.color = "#999";
        }
    }
}
// 获取文件类型
export function getFileType(file) {
    var extName = file.substring(file.lastIndexOf(".")).toLowerCase();
    return extName;
}

//获取登录页内容高度 
export function getConHeight(){
    var screenHeight = document.documentElement.clientHeight || document.body.clientHeight;
    if(screenHeight>971){
        return screenHeight-600+'px';
    }else{
        return 'auto';
    }
}

// 获取非登录页内容区域的高度
export function fetchConHeight(){
    var screenHeight = document.documentElement.clientHeight || document.body.clientHeight;
    return screenHeight-150+'px';
}
