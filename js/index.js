var counter = 1;
setInterval(function(){
    document.getElementById('btn' + counter).checked=true;
    counter ++;
    if(counter > 3){
        counter = 1;
    }
}, 4000);