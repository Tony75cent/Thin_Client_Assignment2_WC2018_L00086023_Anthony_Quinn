/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function loadWorldCupXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };
    xmlhttp.open("GET", "XML/cd_catalog.xml", true);
    xmlhttp.send();
}
function updateFile() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myUpdateFunction(this);
        }
    };
    xmlhttp.open("POST", "XML/cd_catalog.xml", true);
    xmlhttp.send();
}

function myUpdateFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    /** var table = "<table id='sort-table'><thead><tr><th>Sort: <a href='#' class='link-sort-table asc'>Asc</a> <a href='#' class='link-sort-table desc'>Desc</a></th><th> NAME </th><th> MP </th><th> WINS </th><th> DRAWS </th><th> LOSSES </th></tr></thead></table>"; **/
    var table = "<table><thead><tr><th>Country Flag</th><th> Match </th><th>Country Flag</th><th> Location </th><th> Date </th><th> Result </th><!--th>Submit </th--></tr></thead></table>";

    var x = xmlDoc.getElementsByTagName("CD");
    for (i = 0; i < x.length; i++) {
        table += "<tbody><tr><td>" +
                /** x[i].getElementsByTagName("IMAGE1")[0].childNodes[0].nodeValue  + **/
                x[i].getElementsByTagName("MATCH")[0].childNodes[0].nodeValue +
                " </td><td>" +
                x[i].getElementsByTagName("MATCH")[0].childNodes[0].nodeValue +
                "</td><td>" +
                /** x[i].getElementsByTagName("IMAGE2")[0].childNodes[0].nodeValue + **/
                x[i].getElementsByTagName("LOCATION")[0].childNodes[0].nodeValue +
                "</td><td>" +
                x[i].getElementsByTagName("LOCATION")[0].childNodes[0].nodeValue +
                "</td><td>" +
                x[i].getElementsByTagName("DATE")[0].childNodes[0].nodeValue +
                "</td><td contenteditable='true' class='edtiable'>" +
                x[i].getElementsByTagName("RESULT")[0].childNodes[0].nodeValue +
                "</td><td>" +
                "<!--button  class='button' type='button'>submit</button--></td></tr></tbody>";
    }
    document.getElementById("demo").innerHTML = table;
}


/**
 var $submit = document.getElementById("submit");
 
 $submit.onclick("click",updateFile);
 
 
 function updateFile(){
 
 alert("Testing @22:19");
 }
 **/

$(function () {
    $("button").on("mouseover", makeButtonVisible);



    function updateWorldCupXMLFile() {
        {
            alert("Testing @22:37");

        }
    }

    function makeButtonVisible() {
        alert("Testing @21:07");
        /** document.getElementsByTagName("button").visibility= "block"; **/
      /**  document.getElementsByClassName("button").visibility = "visible"; **/
        document.getElementsByClassName("button").style.visibility = "visible";




    }
    /**
     function doubleClickAlert(){
     $( ".WIN" ).click(function() {
     $( this ).dblclick(alert("Double click called"));
     });
     }
     **/
    /**
     $('.link-sort-table').click(function(e) 
     var $sort = this;
     var $table = $('#sort-table');
     var $rows = $('tbody > tr',$table);
     $rows.sort(function(a, b){
     var keyA = $.trim($('td:eq(0)',a).text());
     var keyB = $.trim($('td:eq(0)',b).text());
     console.log(keyA, keyB);
     if($($sort).hasClass('asc')){
     return (keyA > keyB) ? 1 : -1;
     } else {
     return (keyA < keyB) ? 1 : -1;
     }
     });
     $.each($rows, function(index, row){
     $table.append(row);
     });
     e.preventDefault();
     });
     **/
}

);
