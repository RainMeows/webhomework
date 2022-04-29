function onAlert() {
    var element = document.getElementById("list");
    var item = element.getElementsByTagName('li');
    for (let i = 0, len = item.length; i < len; ++i) {
        item[i].onclick = function() {
            alert(i + 1);
        }
    }
}

function changeColor() {
    document.getElementById('p1').style.color = "red";
}

function changeDate() {
    var today = new Date();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    if (month >= 1 && month <= 9)
        month = "0" + month;
    if (day >= 1 && day <= 9)
        day = "0" + day;
    var current = today.getFullYear() + "-" + month + "-" + day;
    document.getElementById('p2').innerHTML = current;
}

function addClass() {
    document.getElementById('p3').classList.add("fn-active");
}

function deleteItem() {
    //  console.log('yes');
    var child = document.getElementById('p8');
    child.parentNode.removeChild(child);
}

function newWindow() {
    window.open("https://www.taobao.com/");
}

function newPoint() {
    // console.log('yes');
    var para = document.createElement("li");
    var node = document.createTextNode("p9");
    para.appendChild(node);
    var element = document.getElementById("list");
    element.appendChild(para);
}

function changeWidth() {
    var div = document.querySelector(".m-box");
    var width = screen.availWidth;
    div.style.width = width;
    // console.log(width);
}