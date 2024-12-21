var req =null; 
function submitForm(){
    if(window.XMLHttpRequest){
        req = new XMLHttpRequest();
    }
    else if(window.ActiveXObject){
        req = new ActiveXObject("Microsoft.XMLHTTP");
    }
    req.onreadystatechange = handleReq;
    req.open("POST","simpleResponse.txt?t="+ new Date().getTime(),true);
    req.send(null);
}
function handleReq(){
    if(req.readyState == 4){
        if(req.status == 200){
            document.getElementById("result").innerHTML = req.responseText;
        }
        else{
            document.getElementById("result").innerHTML = "Error";
        }
    }
}