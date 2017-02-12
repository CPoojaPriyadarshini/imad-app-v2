console.log('Loaded!');
    
    var element = document.getElementById('text');
    element.innerHTML = "New Value";

var img = document.getElementById('madi');

var marginLeft = 0;
function moveRight()
{
    do
    {
        marginLeft = marginLeft + 10;
        img.style.marginLeft = marginLeft + 'px';
    }while(marginLeft>200);
    
}
img.onclick = function()
{
    var interval = setInterval(moveRight, 100);
};