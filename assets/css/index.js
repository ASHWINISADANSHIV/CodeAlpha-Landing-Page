
function handleButtonClick() {
    alert('Button clicked!');
}


document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.button');

    if (button) {
        button.addEventListener('click', handleButtonClick);
    }
});
