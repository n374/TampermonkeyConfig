// ==UserScript==
// @name         Baidu
// @namespace    https://wu.nerd.moe/
// @version      0.2
// @description  try to take over the world!
// @author       wu.nerd
//               百度云文档
// @include      /^https?://cloud\.baidu\.com/doc/*
//               百度AI开放平台
// @include      /^https?://ai\.baidu\.com/docs*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 贴吧
    // 登你*的录
    // http://tieba.baidu.com/p/4721436758
    var islogin = document.createElement('script');
    islogin.innerHTML = "PageData.user.is_login = true;";
    document.head.appendChild(islogin);


    // 百度AI开放平台
    // 去除页面下放的提交反馈区域
    // http://ai.baidu.com/docs#/Begin/top
    $(".doc-feedback").remove()


    // 加载完成后执行
    window.addEventListener('load', function() {

        // 百度云文档
        // 去除百度云文档页面下方的打分区域
        // https://cloud.baidu.com/doc/BML/ProductDescription.html
        $(".grade-box").remove();

    }, false);
})();
