/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () { // load xml file using jquery ajax
    $.ajax({
        type: "GET",
        url: "XML/fixtures.xml",
        dataType: "xml",
        success: function (xml) {
            var table = '<table>';
            table += '<tr><th>Match</th><th>Location</th><th>Date</th><th>Result</th></tr>';

            $(table).addClass('borderClass');
            $(xml).find('fixtures').each(function () {
                var match = $(this).find('match').text();
                var id = $(this).attr('id');
                var location = $(this).find('location').text();
                var date = $(this).find('date').text();
                var result = $(this).find('result').text();

                table += '<tr><td>' + match + '</td><td>' + location + '</td><td>' + date + '</td><td contenteditable=true>' + result + '</td></tr>';

            });
            table += '</table>';
            $('#update').html(table);
        }
    });
});



function LoadFixtures(order) {
    xml = loadXMLDoc("cd_catalog.xml");
    if (order == "desc") {
        xsl = loadXMLDoc("fixtures.xsl");
    } else {
        xsl = loadXMLDoc("fixtures.xsl");

    }
    xsltProcessor = new XSLTProcessor();
    xsltProcessor.importStylesheet(xsl);
    resultDocument = xsltProcessor.transformToFragment(xml, document);
    document.getElementById("matchlist").innerHTML = "";
    document.getElementById("matchlist").appendChild(resultDocument);
}

function loadXMLDoc(filename)
{
    xhttp = new XMLHttpRequest();
    xhttp.open("GET", filename, false);
    xhttp.send("");
    return xhttp.responseXML;
}



function loadWorldCupXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };
    /** xmlhttp.open("GET", "XML/cd_catalog.xml", true); **/
    xmlhttp.open("GET", "XML/fixtures.xml", true);

    xmlhttp.send();
}
function updateFile() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myUpdateFunction(this);
        }
    };
    xmlhttp.open("GET", "XML/fixtures", true);
    xmlhttp.send();
}

function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table = "<table><thead><tr><th> Match </th><th>Location</th><th>Date</th><th>Result</th></tr></thead></table>";

    var x = xmlDoc.getElementsByTagName("fixtures");
    for (i = 0; i < x.length; i++) {
        table += "<tbody><tr><td>" +
                x[i].getElementsByTagName("match")[0].childNodes[0].nodeValue +
                " </td><td>" +
                x[i].getElementsByTagName("location")[0].childNodes[0].nodeValue +
                "</td><td>" +
                x[i].getElementsByTagName("date")[0].childNodes[0].nodeValue +
                "</td><td contenteditable='true' class='edtiable'>" +
                x[i].getElementsByTagName("result")[0].childNodes[0].nodeValue +
                "<!--button  class='button' type='button'>UPDATE</button--></td></tr></tbody>";
    }
    document.getElementById("demo").innerHTML = table;
}
function myUpdateFunction(xml) {
    var ty = 100;
    var i;
    var xmlDoc = xml.responseXML;
    /** var table = "<table id='sort-table'><thead><tr><th>Sort: <a href='#' class='link-sort-table asc'>Asc</a> <a href='#' class='link-sort-table desc'>Desc</a></th><th> NAME </th><th> MP </th><th> WINS </th><th> DRAWS </th><th> LOSSES </th></tr></thead></table>"; **/
    var table = "<table><thead><tr><th>Country Flag</th><th> Match </th><th>Country Flag</th><th> Location </th><th> Date </th><th> Result </th><!--th>Submit </th--></tr></thead></table>";

    var x = xmlDoc.getElementsByTagName("FIXTURE");
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
 var xmlDoc = xml.responseXML;
 
 var x = xmlDoc.getElementsByTagName("CD");
 for (i = 0; i < x.length; i++) {
 updateNode = "<tbody><tr><td></td><td contenteditable='true' id='edtiable'>" +
 x[i].getElementsByTagName("RESULT")[0].childNodes[0].nodeValue + 
 "</td><td>" +
 "</td></tr></tbody>";
 }
 document.getElementById("demo").innerHTML = table;
 **/
/**} 
 
 
 /**
 var $submit = document.getElementById("submit");
 
 $submit.onclick("click",updateFile);
 
 
 function updateFile(){
 
 alert("Testing @22:19");
 }
 **/

$(function () {
    /**  $("button").on("mouseover", makeButtonVisible); **/
    $("#submit").on("click", updateFile);



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
    function sortFixtures() {
        $.get('cd_catalogue.xml', function (grade) {
            var officer = $(grade).find('officer');

            officer.sort(function (a, b) {
                return (parseInt($(a).attr('id')) - parseInt($(b).attr('rank')));
            });

            officer.each(function (i, v) {
                alert($(v).attr('rank'));
            });
        });
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
