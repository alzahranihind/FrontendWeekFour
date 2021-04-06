function calculator(){
var add,sub,mul,div;

var input1=document.getElementById("addnum1").value;
var input2=document.getElementById("addnum2").value;

var input3=document.getElementById("subnum1").value;
var input4=document.getElementById("subnum2").value;

var input5=document.getElementById("mulnum1").value;
var input6=document.getElementById("mulnum2").value;

var input7=document.getElementById("divnum1").value;
var input8=document.getElementById("divnum2").value;

if (input1=="" || input2=="")
    {
        document.getElementById("addnum1").value=0;
        document.getElementById("addnum2").value=0;
    }
if(input3=="" || input4=="")
    {
        document.getElementById("subnum1").value=0;
        document.getElementById("subnum2").value=0;
    }
if(input5=="" || input6=="")
    {
        document.getElementById("mulnum1").value=0;
        document.getElementById("mulnum2").value=0;
    }
if (input7=="" || input8=="" || input7==0 || input8==0)
    {
        document.getElementById("divnum1").value=0;
        document.getElementById("divnum2").value=1;
    }

add=parseInt(document.getElementById("addnum1").value) + parseInt(document.getElementById("addnum2").value);
document.getElementById("add").innerHTML=add;

sub=parseInt(document.getElementById("subnum1").value) - parseInt(document.getElementById("subnum2").value);
document.getElementById("sub").innerHTML=sub;

mul=parseInt(document.getElementById("mulnum1").value) * parseInt(document.getElementById("mulnum2").value);
document.getElementById("mul").innerHTML=mul;

div=parseInt(document.getElementById("divnum1").value) / parseInt(document.getElementById("divnum2").value);
document.getElementById("div").innerHTML=div;
}

function clearAll(){
    console.log("hi");
    document.getElementById("addnum1").value=0;
    document.getElementById("addnum2").value=0;
    document.getElementById("add").innerHTML=0;

    document.getElementById("subnum1").value=0;
    document.getElementById("subnum2").value=0;
    document.getElementById("sub").innerHTML=0;

    document.getElementById("mulnum1").value=0;
    document.getElementById("mulnum2").value=0;
    document.getElementById("mul").innerHTML=0;

    document.getElementById("divnum1").value=0;
    document.getElementById("divnum2").value=0;
    document.getElementById("div").innerHTML=0;
}