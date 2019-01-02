let video = document.getElementById('video');
let button = document.getElementById('btn');

// if PIP is not supported
if (!'pictureInPictureEnabled' in document) {
    alert('PIP is not supported in your browser');
    button.disabled = true;

}

// function to toggle PIP mode for the video element
function toggle(){
    if(document.pictureInPictureElement){
        // video is already in pip mode, now exit pip mode
        document.exitPictureInPicture();
    }else{
        //video is not in pip mode, request pip mode
        video.requestPictureInPicture();
    }
}



// code to listen for when the video is in PIP mode
video.addEventListener('enterpictureinpicture', function(event){
    console.log('video entered PIP Mode');
})

// code to listen for when the video exits PIP mode
video.addEventListener('leavepictureinpicture', function(event){
    console.log('video has left PIP Mode');
})