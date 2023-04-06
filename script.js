// ==UserScript==
// @name         GitLab Draft Highlighter
// @namespace    http://tampermonkey.net/
// @version      0.6
// @description  Highlight draft merge requests in GitLab
// @author       Moondancer83
// @match        https://gitlab.com/*/merge_requests*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gitlab.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let elements = document.querySelectorAll("a.js-prefetch-document");

    elements.forEach(item => {
        if(item.innerText.startsWith("Draft:")) {
            item.classList.add("tm-gitlab-mr-highlighter-draft");
        }
    });

    addGlobalStyle(".tm-gitlab-mr-highlighter-draft {color: orange !important; font-style: italic; filter: grayscale(0.6);}");

    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }
})();
