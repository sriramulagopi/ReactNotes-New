// const h1 = document.createElement("h1");
// h1.innerText="Hello World!";
// // document.body.appendChild(h1);
// const div = document.createElement("div");
// div.innerHTML=`
// <p class="para">Para text</p>
// <b class="bold">bold text</b>
// `;
// div.appendChild(h1);
// document.body.append(div);

import sum, { obj } from "./script2.js";

// types of imports named import and default import 
// we have maintain only default export and named imports are multiple

console.log(React);
console.log(ReactDOM);
const root = ReactDOM.createRoot(document.getElementById("root"));
const h1 = React.createElement("h1",{className:"heading",id:"head"},"Welcome to React!");
const p = React.createElement("p",{className:"para"},"Para text");
const b = React.createElement("b",{className:"bold"},"Bold text");
const div = React.createElement("div",{className:"container"},h1,p,b);
root.render(div);
console.log(sum(10,20))
console.log(obj)
obj.Name="Asif";
console.log(obj)