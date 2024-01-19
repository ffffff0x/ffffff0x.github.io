    // 这是获取gpu型号
    (function () {
    var canvas = document.createElement('canvas'),
        gl = canvas.getContext('experimental-webgl'),
        debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
 
    GPU_info = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
   
})();

// 这里打印型号

var device_type = navigator.userAgent;//获取userAgent信息  
    var md = new MobileDetect(device_type);//实例化mobile-detect  
    var os = md.os();//获取系统  
    var model = "";  
    if (os == "iOS") {//ios系统的处理  
        os = md.os() + md.version("iPhone");  
        model = md.mobile();  
    } else if (os == "AndroidOS") {//Android系统的处理  
        os = md.os() + md.version("Android");  
    }  
    // console.log(os + "---" + model);//打印系统版本和手机型号  
    // console.log(md,"aaaa");
    
    document.write("分辨率：" + window.MobileDevice.getResolution() + "<br>");
    document.write("设备屏幕大小：" + window.screen.width + "x" + window.screen.height + "<br>");
    document.write("可见屏幕大小：" + window.screen.availWidth + 'x' + window.screen.availHeight + "<br>");
    document.write("屏幕颜色深度：" + window.screen.colorDepth + "<br>");
    document.write("设备像素比：" + window.devicePixelRatio + "<br>");
    // document.write("------------分割线------------" + "<br>");
    document.write("CPU核心数：" + navigator.hardwareConcurrency + "<br>");
    document.write("RAM：" + navigator.deviceMemory + "<br>")
    document.write("浏览器硬件：" + navigator.platform + "<br>");
    document.write("GPU:" + GPU_info+ "<br>");;
    // document.write("屏幕方向：" + screen.orientation.type + "<br>");
    // document.write("网络连接状态：" + navigator.connection.effectiveType + "<br>");   // 返回4g什么鬼
    document.write("------------分割线3------------<br>");

    function getiPhoneModel() {
        var canvas = document.createElement('canvas');
        gl = canvas.getContext('experimental-webgl');
        debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        // console.log(renderer);
  // Create a canvas element which can be used to retrieve information about the GPU.
  // var canvas = document.createElement("canvas");
    // Iphone X
   if ((window.screen.height / window.screen.width == 812 / 375) && (window.devicePixelRatio == 3)) {
        return "iPhone X";
    // iPhone 6+/6s+/7+ and 8+
    } else if ((window.screen.height / window.screen.width == 736 / 414) && (window.devicePixelRatio == 3)) {
        switch (renderer) {
            default:
                return "iPhone 6 Plus, 6s Plus, 7 Plus or 8 Plus";
            case "Apple A8 GPU":
                return "iPhone 6 Plus";
            case "Apple A9 GPU":
                return "iPhone 6s Plus";
            case "Apple A10 GPU":
                return "iPhone 7 Plus";
            case "Apple A11 GPU":
                return "iPhone 8 Plus";
        }
    // iPhone 6+/6s+/7+ and 8+ in zoom mode
    } else if ((window.screen.height / window.screen.width == 667 / 375) && (window.devicePixelRatio == 3)) {
        switch(renderer) {
            default:
                return "iPhone 6 Plus, 6s Plus, 7 Plus or 8 Plus (display zoom)";
            case "Apple A8 GPU":
                return "iPhone 6 Plus (display zoom)";
            case "Apple A9 GPU":
                return "iPhone 6s Plus (display zoom)";
            case "Apple A10 GPU":
                return "iPhone 7 Plus (display zoom)";
            case "Apple A11 GPU":
                return "iPhone 8 Plus (display zoom)";
        }
    // iPhone 6/6s/7 and 8
    } else if ((window.screen.height / window.screen.width == 667 / 375) && (window.devicePixelRatio == 2)) {
        switch(renderer) {
            default:
                return "iPhone 6, 6s, 7 or 8";
            case "Apple A8 GPU":
                return "iPhone 6";
            case "Apple A9 GPU":
                return "iPhone 6s";
            case "Apple A10 GPU":
                return "iPhone 7";
            case "Apple A11 GPU":
                return "iPhone 8";
        }
    // iPhone 5/5C/5s/SE or 6/6s/7 and 8 in zoom mode
    } else if ((window.screen.height / window.screen.width == 1.775) && (window.devicePixelRatio == 2)) {
        switch(renderer) {
            default:
                return "iPhone 5, 5C, 5S, SE ";
            case "PowerVR SGX 543":
                return "iPhone 5 or 5c";
            case "Apple A7 GPU":
                return "iPhone 5s";
            case "Apple A8 GPU":
                return "iPhone 6 (display zoom)";
            case "Apple A9 GPU":
                return "iPhone SE or 6s (display zoom)";
            case "Apple A10 GPU":
                return "iPhone 7 (display zoom)";
            case "Apple A11 GPU":
                return "iPhone 8 (display zoom)";
        }
    // iPhone 4/4s
    } else if ((window.screen.height / window.screen.width == 1.5) && (window.devicePixelRatio == 2)){
        switch(renderer) {
            default:
                return "iPhone 4 or 4s";
            case "PowerVR SGX 535":
                return "iPhone 4";
            case "PowerVR SGX 543":
                return "iPhone 4s";
        }
    // iPhone 1/3G/3GS
    } else if ((window.screen.height / window.screen.width == 1.5) && (window.devicePixelRatio == 1)) {
        switch(renderer) {
            default:
                return "iPhone 1, 3G or 3GS";
            case "ALP0298C05":
                return "iPhone 3GS";
            case "S5L8900":
                return "iPhone 1, 3G";
        }
    } else {
        return "判断不出来啊";
    }
}
    // iPhone 6/6s/7 and 8