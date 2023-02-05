let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');

function myAnimation() {
    let pos = 0;
    
    let id = setInterval(frame, 3);
    function frame() {
        if (pos <= 99) {
            pos++;
            elem.style.top = pos + 'px';  
        } else if (pos >= 100 && pos <= 199){
            pos++;
            elem.style.left = (pos - 100) + 'px';
        } else if (pos >= 200 && pos <= 299){
            pos++;
            elem.style.top = 100 - (pos - 200) + 'px';
        } else if (pos >= 300 && pos <= 399){
            pos++;
            elem.style.left = 100 - (pos - 300) + 'px';
        } else {
            clearInterval(id);
            
        }
    }
    
}

btn.addEventListener('click', myAnimation);

btn.addEventListener('touchstart', myAnimation);

