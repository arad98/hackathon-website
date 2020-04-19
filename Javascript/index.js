
function formChanged() {
var Name = document.getElementsByName("name")[0].value;
var DOB = document.getElementsByName("DOB")[0].value;
var Year = document.getElementsByName("Year")[0].value;
var GPA = document.getElementByName("GPA")[0].value;
var Major = document.getElementByName("Major")[0].value;
var Club = document.getElementByName("Club")[0].value;
}

function sendData() {
var data = new FormData();
data.append("data" ,Name +","+DOB+","+Year+","+GPA+","+Major+","+Club +",");
var xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new activeXObject("Microsoft.XMLHTTP");
xhr.open( 'post', '/path/to/php', true );
xhr.send(data);
}
