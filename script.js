//your JS code here. If required.
const div=document.getElementById("browser-info");
const ino=`You are using ${navigator.userAgent}`;

 const para=document.createElement("p");
 para.innerText=ino;
div.appendChild(para);
