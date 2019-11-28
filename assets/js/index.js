'use strict';

const LINK_PATTERN = /<a .*?href\s*?=\s*?"(?<linkValue>.*?\byoutube\b.*? )".*?>(?<linkName>.*?)<\/a\s*?>/g;

const LINK_PARSER_PATTARN = new RegExp(LINK_PATTERN.source);

const textareaElem = document.querySelector("textarea[name = 'userHtml']");
const fromElem = document.getElementsByTagName("form")[0];
const tbodyElem = document.getElementsByTagName('tbody')[0];

fromElem.onkeydown = function () {

    const result = textareaElem.value.match(LINK_PATTERN);
    tbodyElem.innerHTML = "";
    result.forEach(
        link =>{
            const matchResult = link.match(LINK_PARSER_PATTARN);
            if(matchResult){
                const {groups : {linkValue , linkName}} = matchResult;
                tbodyElem.appendChild(createTableRow(linkName , linkValue));
            }
        }
    );
    
    return false;

};



function createTableRow(linkName, linkValue) {

    const tableRowElem = document.createElement('tr');
    const tableDataLinkNameElem = document.createElement('tb');
    const tableDataLinkValueElem = document.createElement('td');


    tableDataLinkNameElem.innerText = linkName;
    tableDataLinkValueElem.innerText = linkValue;


    tableRowElem.appendChild(tableDataLinkNameElem);
    tableRowElem.appendChild(tableDataLinkValueElem);


    return tableRowElem;
    
}




