// ==UserScript==
// @name         CSDN
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http*://blog.csdn.net/*/article/details/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // "查看全文"免点击
    $(".read_more_btn").click();

    // 隐藏左边浮动的广告“联系我们”
    $("div#nav_show_top_stop").remove();

    // 宽度变为100%
    $("div#body").css("max-width", $(window).width());

    // 隐藏右侧分享按钮
    $(".left_menu").remove();

    // 去掉底部固定位置的登录提示块
    $(".pulllog-box").remove();
})();