var hiddenWeb = true;


function showPred()
{
    if(hiddenWeb == true)
    {
        document.getElementById("predSelect").innerText = "Hide Predation";
        document.getElementById("web2").style.display = "block";
        hiddenWeb = false;
    }
    else
    {
        document.getElementById("predSelect").innerText = "Show Predation";
        document.getElementById("web2").style.display = "none";
        hiddenWeb = true;
    }
}

function onMouse()
{
    document.getElementById("predSelect").style.backgroundColor = "rgb(17, 44, 102)";
}

function offMouse()
{
    document.getElementById("predSelect").style.backgroundColor = "rgb(59, 88, 151)";
    
}

function overMouse(element)
{
    element.style.opacity = '30%';
}

function leaveMouse(element)
{
    element.style.opacity = '1%';
}


function setDesc(element)
{
    document.getElementById("descriptionBox").innerText = element.innerText;
}