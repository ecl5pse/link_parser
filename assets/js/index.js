'use strict';

const PATTERN_GLOBAL = /<a.*?href\s*?=\s*?"(.*?)".*?>(.*?)<\/a\s*?>/igm;
const PATTERN_LOCAL = new RegExp(PATTERN_GLOBAL.source, "i");

const formElem = document.getElementsByTagName("form")[0];

const tableBodyElem = document.getElementsByTagName("tbody")[0];

formElem.onsubmit = onFormSubmit;




function onFormSubmit(event) {

    const result = this.elements["userHtml"].value.match(PATTERN_GLOBAL);

    if(Array.isArray(result)){

        const result2 = result[0].match(PATTERN_LOCAL);
        console.log(result2);
    }


    return false;


}




