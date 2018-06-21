// ==UserScript==
// @name         CSDN
// @namespace    https://wu.nerd.moe/
// @version      0.2
// @description  try to take over the world!
// @author       wu.nerd
// @match        http*://blog.csdn.net/*/article/details/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // "查看全文"免点击
    $(".read_more_btn").click();
    $("#btn-readmore").click();

    // 隐藏左边浮动的广告“联系我们”
    $("div#nav_show_top_stop").remove();

    // 宽度变为100%
    $("div#body").css("max-width", $(window).width());

    // 隐藏右侧分享按钮
    $(".left_menu").remove();

    // 去掉底部固定位置的登录提示块
    $(".pulllog-box").remove();
})();
