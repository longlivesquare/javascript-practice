const colorInput = document.querySelector('input[type=color]');
document.body.style.backgroundColor = localStorage.getItem("theme");

colorInput.addEventListener('input', function(){
    console.log('colorInput had input event fire', colorInput.value);
});
colorInput.addEventListener('change', function() {
    console.log('colorInput had change event fire', colorInput.value);
    document.body.style.backgroundColor = colorInput.value;
    localStorage.setItem("theme", colorInput.value);
})