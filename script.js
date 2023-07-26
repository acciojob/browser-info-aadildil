const div=document.getElementById("browser-info");
const str=navigator.userAgent;
let ele=str.split(" ");
let ans2=ele.slice(1);

let browser=ele[0].split("/")[0];
let version=ele[0].split("/")[1];


 const para=document.createElement("p");
 para.innerText=`You are using ${browser} version ${version} ${ans2}`;
div.appendChild(para);