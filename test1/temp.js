// ==UserScript==
// @name         helloworld
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  new script
// @author       fzqa
// @match        *://*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// @license       AGPL-3.0
// ==/UserScript==

//使用代理
// git config --global http.proxy http://127.0.0.1:7890
// git config --global https.proxy http://127.0.0.1:7890

(function() {
    'use strict';

    // Your code here...
    console.log("hello word2")
})();