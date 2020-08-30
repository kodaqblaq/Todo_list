let data = document.getElementById('data');
let btn = document.getElementById('btn');
let container = document.getElementById('container');
let date = new Date()
btn.addEventListener('click', function() {
    var paragraph = document.createElement('p');

    //i added a date modified component to your js
    //basically it just adds a date to the side of the current todo
    /*******************/
    var Datemodified = document.createElement('span')
    Datemodified.setAttribute('class', 'dateinfo')
    Datemodified.textContent = `${date.getHours()}:${date.getMinutes()}`

    /************************/

    paragraph.innerText = data.value;
    paragraph.append(Datemodified)
    container.appendChild(paragraph);
    data.value = "";
    paragraph.addEventListener('click', function(e) {
        
        //i also added a toggle here so that you can toggle between done and undone todos
        e.preventDefault()
        paragraph.classList.toggle('info')
           
 
    })
    paragraph.addEventListener('dblclick', function() {
        container.removeChild(paragraph);
    })

})