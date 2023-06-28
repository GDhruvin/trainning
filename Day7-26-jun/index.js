function demoenternalAlert() {
    alert("external Alert.");
}


function demoenternalConfirm() {
    if (confirm("Are you sure..?? from external")) {
        alert("you choose OK");
    }
    else {
        alert("you choose CANCEL");
    }
}

function demoenternalPrompt() {
    var fName = prompt("Enter Firstname from external..");
    var lName = prompt("Enter Lastname from external..");
    alert(fName + " " + lName);
}

function bodyBgGreen() {
    document.body.style.backgroundColor = "Green";
}
function divBgGray() {
    document.getElementById('D1').style.backgroundColor = "Gray";
}
function bodyBgDynamic() {
    document.body.style.backgroundColor = prompt('Enter Color Name : ');
}
function divBgDynamic() {
    document.getElementById('D1').style.backgroundColor = prompt('Enter Color Name : ');
}
function bodyBgCP1() {
    document.body.style.backgroundColor = document.getElementById("CP1").value;
}
function divBgCP2() {
    document.getElementById('D1').style.backgroundColor = document.getElementById('CP2').value;
}
function demo1(){
    var one = prompt("Enter first number = ");
    var two = prompt("Enter second number = ");
    if(one>two){
        alert(one + " Is greater than " +two);
    }
    else{
        alert(two + " Is greater than " +one);
    }
}
function demo2(){
    var r = prompt("Enter Radius : ");
    alert("Area of circle is : " + (3.14*r*r));
}
