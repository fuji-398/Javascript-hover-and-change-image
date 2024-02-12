'use strict';


const thumbnails = document.querySelectorAll('.js__thumbnail');
const largeImg = document.getElementById('js__large-img');

thumbnails.forEach(function(thumbnail){
    thumbnail.addEventListener('mouseover', function() {
        const largeImagePath = this.src;

        largeImg.style.opacity = 0 ;

        if(largeImagePath) {
            setTimeout(function(){
                largeImg.src = largeImagePath;
                largeImg.style.opacity = 1;
            }, 500);
        } else {
            console.error('Image source not found');
        }
    });
});