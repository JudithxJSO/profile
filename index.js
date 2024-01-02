document.addEventListener('DOMContentLoaded', function() {
    const loadingPage = document.getElementById('loadingPage');
    const mainPage = document.getElementById('mainPage');
    let opacityValue = 1;
    let hasTransitioned = false;

    function transitionToMainPage() {
        if (!hasTransitioned) {
            loadingPage.classList.add('fade-out');
            opacityValue -= 5; // Adjust the decrement value for the opacity transition speed
            mainPage.style.opacity = opacityValue;

            if (opacityValue > 0) {
                requestAnimationFrame(transitionToMainPage);
            } else {
                loadingPage.style.display = 'none';
                mainPage.style.opacity = 1;
                hasTransitioned = true; // Set the flag to true to prevent re-triggering
            }
        }
    }

    setTimeout(() => {
        transitionToMainPage();
    }, 3000); // Replace this with your desired delay (in milliseconds)
});
document.addEventListener('DOMContentLoaded', function() {

const sliderOverlay = document.querySelector('.slider-overlay');
const overlayWidth = sliderOverlay.getBoundingClientRect().width;

sliderOverlay.style.right = '-' + overlayWidth + 'px';

document.addEventListener('mousemove', (e) => {
    const mouseX = e.pageX;
    //const overlayWidth = sliderOverlay.getBoundingClientRect().width;
    const windowWidth = window.innerWidth;

    if (mouseX >= windowWidth - overlayWidth) {
        console.log('I am on right side of the website'); sliderOverlay.style.right = '0px'; // Or your desired width
        sliderOverlay.style.opacity = '1';
    } else {
        console.log('I am on left side of the website');
        sliderOverlay.style.right = '-' + overlayWidth + 'px';
        sliderOverlay.style.opacity = '0';
    }
});
});
