

const names = ["Kien", "Dat", "Lam"];
const nameEl = document.querySelector("#nameEl");

let result = "";
for (let i = 0; i < names.length; i++) {
    result += "<div>" + names[i] + "</div>";
}
nameEl.innerHTML = result;

//vd 2
function sum(a, b) {
    return a + b;
}
console.log("funtion name:", sum(10, 20));

// funtion expresstion
const sum2 = function (a, b) {
    return a + b;
}
console.log("funtion expresstion:", sum2(50, 20));  

// arrow funtion
const  sum3 =(a,b)=> a+b;
console.log("arrow funtion:", sum3(20, 20));  
window.alert("HIHI");