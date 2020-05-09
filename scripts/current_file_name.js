let path = window.location.pathname;
let page = path.split("/").pop();
console.log( page );

document.getElementById("insert").innerHTML=page + " file loaded";
document.getElementById("insert-title").innerHTML=" Micov works - " + page;
console.log("html_page: " + page)
if(page=="index0.html"){
    console.log("You are in template page")
    let msg = document.createElement("h1");
    msg.innerHTML = "Template Page ";
    document.getElementById("insert").append(msg)
    $("body").css({"text-align":"center"}).append(msg)
} else {
    console.log("You are in design page")
}


