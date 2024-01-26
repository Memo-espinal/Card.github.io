const card = document.querySelector('.card');
const yesBtn = document.querySelector('.yes');
const noBtn = document.querySelector('.no');
const textContainer = document.querySelector('.textContainer');
const hidden = document.querySelector('.hidden');
const hidden2 = document.querySelector('.hidden2');

const wrap = document.querySelector('.wrapper');


const noBtnRect = noBtn.getBoundingClientRect();
const cardRect = card.getBoundingClientRect();
const textRect = textContainer.getBoundingClientRect();
const hiddenRect = hidden.getBoundingClientRect();

yesBtn.addEventListener('click', () =>{
    textContainer.innerHTML="";
    wrap.innerHTML="";
    toggleGif(); 
    toggleGif2(); 
})

noBtn.addEventListener('mouseover', () => {
    noBtn.style.position = "absolute";

    const i = Math.floor(Math.random() * (textRect.width
     - noBtnRect.width))+1;
    const j = Math.floor(Math.random() * (textRect.height
     - noBtnRect.height))+1;
        
        
        noBtn.style.left = i + 'px';
        noBtn.style.top = j + 'px';
})


function toggleGif() {
    if (hidden.style.opacity === "0" || hidden.style.opacity === "") {
        hidden.style.opacity = "1";
      } else {
        hidden.style.opacity = "0";
      }


    
      setTimeout(function() {
        if (hidden.style.opacity === "0") {
          hidden.style.display = "none";
        } else {
          hidden.style.display = "block";
        }
      }, 1000);
  }

  function toggleGif2() {
    if (hidden2.style.opacity === "0" || hidden2.style.opacity === "") {
        hidden2.style.opacity = "1";
      } else {
        hidden2.style.opacity = "0";
      }


    
      setTimeout(function() {
        if (hidden2.style.opacity === "0") {
          hidden2.style.display = "none";
        } else {
          hidden2.style.display = "block";
        }
      }, 1000);
  }