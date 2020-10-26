
// Creating function for social icons to popup once share button is clicked //

let btn = document.getElementById('button');
let div = document.getElementById('social');

btn.onclick = function() {
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'flex';
    }
}

















