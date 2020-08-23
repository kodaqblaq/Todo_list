let data = document.getElementById('data');
let btn = document.getElementById('btn');
let container = document.getElementById('container');
btn.addEventListener('click', function() {
    var paragraph = document.createElement('p');
    paragraph.innerText = data.value;
    container.appendChild(paragraph);
    data.value = "";
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('dblclick', function() {
        container.removeChild(paragraph);
    })

})