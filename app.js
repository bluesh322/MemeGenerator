document.addEventListener('DOMContentLoaded', function() {
    const img = document.querySelector('#url');
    const topText = document.querySelector('#topText');
    const bottomText = document.querySelector('#bottomText');
    const form = document.querySelector('#memeForm');
    const div = document.querySelector('.genMeme'); 

    div.addEventListener('click', function (e) {
        if(e.target.tagName === "IMG") {
            e.target.parentElement.remove();
        }
    });


    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const parent = document.createElement('div');
        const newMeme = document.createElement("img");
        const newTopText = document.createElement("h2");
        const newBottomText = document.createElement("h2");
        const divTop = document.createElement("div");
        const divBottom = document.createElement("div");

        parent.classList.add('parentMeme');
        div.appendChild(parent);
        newMeme.src = img.value;
        newTopText.innerText = topText.value;
        divTop.classList.add('top-Text');
        newBottomText.innerText = bottomText.value;
        divBottom.classList.add('bottom-Text');

        //remove values in text
        img.value = "";
        topText.value = "";
        bottomText.value = "";

        divTop.appendChild(newTopText);
        divBottom.appendChild(newBottomText);

        parent.appendChild(divTop);
        parent.appendChild(divBottom);
        parent.appendChild(newMeme);

    });  
        
});