var x = 0;
document.getElementById("c").innerText = x;

function add(val) {
    var itemId = "lii" + x; 
    document.getElementById("item").innerHTML += "<li id='" + itemId + "'>" + val + "<input type='button' value='X' onclick='remove(\"" + itemId + "\")'></li>";
    x = x + 1;
    document.getElementById("c").innerText = x;
}


function remove(itemId) {
    var listItem = document.getElementById(itemId);
    listItem.parentNode.removeChild(listItem);
    x = x - 1;
    document.getElementById("c").innerText = x;
}