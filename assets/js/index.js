'use strict';

const PATTERN_GLOBAL = /<a.*?href\s*?=\s*?"(.*?)".*?>(.*?)<\/a\s*?>/igm;
const PATTERN_LOCAL = new RegExp(PATTERN_GLOBAL.source, "i");

const formElem = document.getElementsByTagName("form")[0];

const tableBodyElem = document.getElementsByTagName("tbody")[0];

formElem.onsubmit = onFormSubmit;


function onFormSubmit(event) {

    const result = this.elements["userHtml"].value.match(PATTERN_GLOBAL);
    tableBodyElem.innerHTML = "";
    if (Array.isArray(result)) {

        result.forEach(
            link => {
                 const matchResult = link.match(PATTERN_LOCAL);
                 if(matchResult){
                     const [,linkValue, linkName] = matchResult;
                     tableBodyElem.appendChild(createTableRow(linkName,linkValue ))
                 }

            }
        )


    }


    return false;


}


function createTableRow(linkName, linkValue) {
    const trElem = document.createElement("tr");

    const tdName = document.createElement("td");
    tdName.innerText = linkName;

    trElem.appendChild(
        tdName
    );

    const tdValue = document.createElement("td");
    tdValue.innerText = linkValue;
    trElem.appendChild(
        tdValue
    );
    return trElem;

}


