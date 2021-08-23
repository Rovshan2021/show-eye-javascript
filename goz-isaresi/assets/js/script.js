let inp  = document.getElementById("inp");
let pass = document.getElementsByTagName("button")[0];
let sub = document.getElementsByTagName("button")[1];
let icon = document.getElementById("icon");

function Goster (){
    if(inp.type == "password"){
        inp.type = "text";
        // pass.textContent = "Hide";
        // pass.className = "far fa-eye-slash";

    } else{
        inp.type = "password";
        // pass.className = "far fa-eye";
        // pass.textContent = "far fa-eye";
        // pass.getElementsByClassName = "far fa-eye";
    }
    if(icon.className == "far fa-eye"){
        icon.className = "far fa-eye-slash";
    }else{
        icon.className = "far fa-eye";
    }
}