console.log('Loaded!');
    
    var element = document.getElementById('text');
    element.innerHTML = "New Value";

var img = document.getElementById('madi');

var marginLeft = 0;
function moveRight()
{
    do
    {
        marginLeft = marginLeft - 10;
        img.style.marginRight = marginRight - 'px';
    }while(marginLeft>1000);
    
    
}
img.onclick = function()
{
    var interval = setInterval(moveRight, 100);
};