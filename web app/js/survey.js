const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");

function ChangeColorfirst(color) {
    first.style.backgroundColor = color;
    second.style.backgroundColor = "";
    thrid.style.backgroundColor = "";
}

function ChangeColorsecond(color) {
    first.style.backgroundColor = "";
    second.style.backgroundColor = color;
    thrid.style.backgroundColor = "";
}

function ChangeColorthrid(color) {
    first.style.backgroundColor = "";
    second.style.backgroundColor = "";
    thrid.style.backgroundColor = color;
}
one.onclick = function() { ChangeColorfirst("hsl(108, 8%, 77%)") }
two.onclick = function() { ChangeColorsecond("hsl(108, 8%, 77%)") }
three.onclick = function() { ChangeColorthrid("hsl(108, 8%, 77%)") }