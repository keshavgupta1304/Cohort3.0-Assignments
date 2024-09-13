document.querySelectorAll('.color-btn').forEach(button=>{
  button.addEventListener('click',()=>{
    document.body.style.backgroundColor=button.classList[1];
  });
});
function isValidColor(customColor)
{
  const s=new Option().style
  s.customColor=customColor
  return s.customColor!==''
}
document.getElementById('addColor').addEventListener('click',()=>{
  const customColor = document.getElementById('customColor').value;
  if(isValidColor(customColor))
  {
    const newButton=document.createElement('button');
    newButton.classList.add('color-btn');
    newButton.textContent=customColor.charAt(0).toUpperCase()+customColor.slice(1);
    newButton.style.backgroundColor=customColor
    newButton.style.color='white';

    document.querySelector('.color-panel').appendChild(newButton);

    newButton.addEventListener('click',()=>{
      document.body.style.backgroundColor=customColor
    })
    document.getElementById('customColor').value='';
  }
  else
  {
    alert('Enter a valid color name or hex code');
  }
})