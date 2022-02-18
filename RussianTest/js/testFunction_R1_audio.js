//宣告變數
var totalWordsInDB = DATA.length;
//產生隨機亂數function
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
//only 4 test
/*function printRandomNum() {
    test.innerHTML = getRandomInt(0, 9);
}*/
//讀寫整個資料庫
function loadAllWord() {
    console.log(DATA); // {"a" : "b", "c" : "d"}
}
//讀測驗題目數
var numQ = 0;

function readNumQuestion() {
    numQ = Math.abs(document.getElementById("numQuestion").value);
    showNumQuestion.innerHTML = "You have selected " + numQ + " questions!";
}
//印出題目
//DATA[indexQ].[1] +
var indexQ = 0;
var indQue = [];
var quesArr = [];
var ansArr = [];
var ansArrC = [];
var rusAudio = [];

function printQuestion(numQ) {
    var outQ = '<table id="questionTable" align="center">';
    for (var i = 0; i < numQ; i++) {
        indexQ = getRandomInt(0, totalWordsInDB);
        orderNo = i;
        outQ += '<tr><td>' + orderNo + '</td><td>' + DATA[indexQ][1] + '</td><td><input type="text" id ="q' + i + '"></td><td><audio controls><source src="' + DATA[indexQ][3] + '" type="audio/mpeg"></audio></td></tr>';
        showQuestion.innerHTML = outQ + '</table>';
        //record the correct answer into array
        indQue.push(indexQ);
        quesArr.push(DATA[indexQ][1]);
        ansArr.push(DATA[indexQ][2]);
        ansArrC.push(DATA[indexQ][2]);
        rusAudio.push(DATA[indexQ][3]);
    }
}
//宣告單元
// create DIV element and append to the table cell
function createCell(cell, text, style) {
    var div = document.createElement('div'), // create DIV element
        txt = document.createTextNode(text); // create text node
    div.appendChild(txt); // append text node to the DIV
    div.setAttribute('style', 'color:red;'); // set text to red color
    div.setAttribute('class', style); // set DIV class attribute
    div.setAttribute('className', style); // set DIV class attribute for IE (?!)
    cell.appendChild(div); // append DIV to the table cell
}

function createCellTW(cell, text, style) {
    var div = document.createElement('div'), // create DIV element
        txt = document.createTextNode(text); // create text node
    div.appendChild(txt); // append text node to the DIV
    div.setAttribute('style', 'color:blue;'); // set text to red color
    div.setAttribute('class', style); // set DIV class attribute
    div.setAttribute('className', style); // set DIV class attribute for IE (?!)
    cell.appendChild(div); // append DIV to the table cell
}

function createCellURL(cell, text, style, url) {
    var div = document.createElement('div'), // create DIV element
        txt = document.createTextNode(text); // create text node
    txt.setAttribute('href', url);
    div.appendChild(txt); // append text node to the DIV
    div.setAttribute('style', 'color:blue;'); // set text to red color
    div.setAttribute('class', style); // set DIV class attribute
    div.setAttribute('className', style); // set DIV class attribute for IE (?!)
    //div.setAttribute('href',url);
    cell.appendChild(div); // append DIV to the table cell
}
//檢驗答案
//if it is wrong answer, then we print correct answer after
var yourAns = [];
var ansQ4each = "";
var outCA = "";

function checkAns(numQ, indQue, ansArr) {
    var tbl = document.getElementById('questionTable'); // table reference
    for (var i = 0; i < numQ; i++) {
        idName = 'q' + i;
        ansQ4each = document.getElementById(idName).value;
        yourAns.push(ansQ4each);
        //ee3.innerHTML = yourAns;
        //window.open('https://translate.google.com.tw/?hl=zh-TW#ru/en/я', '_blank', 'toolbar=0,location=0,menubar=0');
        if (yourAns[i] != ansArr[i] && yourAns[i] != ansArrC[i]) {
            searchLink = '"https://translate.google.com.tw/?hl=zh-TW#ru/en/' + quesArr[i];

            outCA += 'You answer is ' + yourAns[i] + ' ; Correct answer is ' + ansArr[i] + ' ;<br/>';
            //'(' + ansArrC[i] + ')' + ';<br/>';
            createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), ansArr[i], 'col');
            // createCellTW(tbl.rows[i].insertCell(tbl.rows[i].cells.length), ansArrC[i], 'col');
        } else {
            createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), '', 'col');
            // createCellTW(tbl.rows[i].insertCell(tbl.rows[i].cells.length), '', 'col');
        }
    }
    checkAnsCorrected.innerHTML = outCA;
}