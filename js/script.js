//Timer para el Slider de imagenes
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 5) {
        counter = 1;    
    }
}, 5000);
