document.getElementById("disc").addEventListener("click", function(event) {
    navigator.clipboard.writeText(this.innerText).then(function() {
        console.log('Copying to clipboard was successful!');
        const tooltip = document.getElementById("tooltip");

        tooltip.style.left = event.pageX + 15 + 'px'; 
        tooltip.style.top = event.pageY + 'px'; 

        tooltip.style.display = 'block';
        tooltip.style.opacity = 1; 
 
        setTimeout(function() {
            tooltip.style.opacity = 0; 
        }, 2500);

        setTimeout(function() {
            tooltip.style.display = 'none';
        }, 3000);
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
});

const carouselText = [
    {text: "4GVN", color: "purple"},
  ]
  
  $( document ).ready(async function() {
    carousel(carouselText, "#feature-text")
  });
  
  async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      $(eleRef).append(letters[i]);
      i++
    }
    return;
  }
  
  async function deleteSentence(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split("");
    let i = 0;
    while(letters.length > 0) {
      await waitForMs(100);
      letters.pop();
      $(eleRef).html(letters.join(""));
    }
  }
  
  async function carousel(carouselList, eleRef) {
      var i = 0;
      while(true) {
        updateFontColor(eleRef, carouselList[i].color)
        await typeSentence(carouselList[i].text, eleRef);
        await waitForMs(1500);
        await deleteSentence(eleRef);
        await waitForMs(500);
        i++
        if(i >= carouselList.length) {i = 0;}
      }
  }
  
  function updateFontColor(eleRef, color) {
    $(eleRef).css('color', color);
  }
  
  function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
