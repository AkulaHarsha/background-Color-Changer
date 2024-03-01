
let code = document.getElementById("code");
let h2 = document.getElementsByTagName("h2");
function randomBackgroundColor()
{
    let color = "#";
    let letters = '0123456789ABCDEF';
    for (var i = 0; i < 6; i++)
    {
        color+= letters[Math.floor(Math.random() * 16)];

    }
    return color;

}
function backgroundColor()
{
    var newColor = randomBackgroundColor();
    document.body.style.backgroundColor = newColor;
    code.innerText = newColor;
    code.style.color = newColor;
   
}
document.getElementById("changebackground").addEventListener('click', backgroundColor);