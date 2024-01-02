const webcam = document.getElementById('webcam');
const photoCanvas = document.getElementById('photoCanvas');
const photoContext = photoCanvas.getContext('2d');
let timer;

// Get user media
navigator.mediaDevices.getUserMedia({ video: true })
.then((stream) => {
    webcam.srcObject = stream;
})
.catch((error) => {
    console.error('Error accessing webcam:', error);
});
document.addEventListener('mousemove', () => {
    webcam.style.display = 'block';
    webcam.style.outlineStyle = "dotted";
    webcam.style.outlineColor = "#cc8400";
    webcam.style.outlineWidth = "5px";

    // Adding timer for mouse and webcamera

    //cleaning previous timer 
    clearTimeout(timer);

    //adding new timer 5 sec.
    timer = setTimeout(() => {
        webcam.style.display = 'none';
        console.log('5 seconds have passed')
    }, 5000);
});



