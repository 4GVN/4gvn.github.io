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
