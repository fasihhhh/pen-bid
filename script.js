let firstbtn = document.querySelector('button');
firstbtn.addEventListener('click' , inputmsg);


function inputmsg(){
    let ask = prompt("How mcuh dollars can you pay?");
    if(ask >= 10){
        alert("Your bid is registered.");
    }
    else if(ask>=8){
        alert("Increase your bid a little more");
    }
    else if(ask<8){
        alert("Your bid is too less too register!");
    }
    else { 
        alert("Invalid!");
    }
}
console.dir(document.body.childNodes[1]);
// onclick=document.getElementById("h1").style.color = "blue";
// onclick=this.document.getElementById("cont").style.color = "orange";