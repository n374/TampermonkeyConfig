// ==UserScript==
// @name         Tieba
// @namespace    https://wu.nerd.moe/
// @version      0.1
// @description  try to take over the world!
// @author       wu.nerd
// @match        https://tieba.baidu.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 登你*的录
    var islogin = document.createElement('script');
    islogin.innerHTML = "PageData.user.is_login = true;";
    document.head.appendChild(islogin);
})();
