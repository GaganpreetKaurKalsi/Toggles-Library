function changeTheme(code, left, right){
    console.log("clr"+code);
    var color = getComputedStyle(document.getElementById("clr"+code)).backgroundColor;
    console.log(color === "rgb(56, 189, 248)");
    console.log(color);
    if(color === "rgb(56, 189, 248)"){
        document.getElementById("clr"+code).style.backgroundColor = "rgb(209, 213, 219)";
        // document.querySelector("#card"+code).style.backgroundColor = " rgb(56, 189, 248)";
        var btn = document.getElementById("btn"+code);
        btn.setAttribute("style",left);
    }
    else{
        document.getElementById("clr"+code).style.backgroundColor = "rgb(56, 189, 248)";
        // document.querySelector("#card"+code).style.backgroundColor = "rgb(209, 213, 219)";
        var btn = document.getElementById("btn"+code);
        btn.setAttribute("style",right);
    }
}

var currentColor = "rgb(56, 189, 248)";
var currentCode = 1;

function trialToggle(code, left, right){
    var innerTextbtn = document.getElementById("btn"+code).innerText;
    var innerTextspan = document.getElementById(`clr${code}`).innerText;
    var inject = `<div class = "div${code} toggle samplediv" id="sampleDiv" style = "background-color: rgba(0, 0, 0, 0);">
    <span class = "span samplespan" onclick = "changeSampleTheme(${code}, '${left}', '${right}')" id = "clr${code}">
    ${innerTextspan}
        <button class = "button samplebtn" id = "btn${code}">${innerTextbtn}</button>
    </span>
    </div>`
    document.getElementById("trial-toggle").innerHTML = "";
    document.getElementById("trial-toggle").innerHTML = inject;
    currentColor = "rgb(56, 189, 248)";
    currentCode = code;
} 
function changeColor(color){
    currentColor = color;
    document.getElementById("sampleDiv").querySelector(`.samplespan`).style.backgroundColor = color;
    if(currentCode === 8){
        document.getElementById("sampleDiv").querySelector("#btn"+currentCode).style.backgroundColor = color;
    }
}
function changeSampleTheme(code, left, right){
    var color = getComputedStyle(document.getElementById("sampleDiv").querySelector("#clr"+code)).backgroundColor;
    console.log(color === currentColor);
    console.log(code);
    if(color === currentColor){
        document.getElementById("sampleDiv").querySelector("#clr"+code).style.backgroundColor = "rgb(209, 213, 219)";
        var btn = document.getElementById("sampleDiv").querySelector("#btn"+code);
        btn.setAttribute("style",left);
        if(code === 8){
            btn.setAttribute("style", `${left};background-color : ${currentColor}`);
        }
    }
    else{
        document.getElementById("sampleDiv").querySelector("#clr"+code).style.backgroundColor = currentColor;
        // document.querySelector("#card"+code).style.backgroundColor = "rgb(209, 213, 219)";
        var btn = document.getElementById("sampleDiv").querySelector("#btn"+code);
        btn.setAttribute("style",right);
        if(code === 8){
            btn.setAttribute("style", `${right};background-color : ${currentColor}`);
        }
    }
    
}