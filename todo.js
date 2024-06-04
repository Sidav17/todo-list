let inputs = document.querySelector("#inp");
let text = document.querySelector(".text");


function remo(){
    alert("sure u want to remove")
    text.removeChild();
}

function add(){
    if (inputs.value == "") {
        alert("pls enter tast")
    }else{
        let newEle = document.createElement("ul");
        // let cl = document.createAttribute(".added");
        newEle.innerHTML =`${inputs.value} <button>X</button>`;
        text.appendChild(newEle);
        inputs.value = "";
        newEle.querySelector("button").addEventListener("click",()=>{
            newEle.remove();
        })

    }
}