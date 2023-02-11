const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media steam, press to video elemnt, then play

async function seletMediaStream() {
    try {
        const mediaSteam = await navigator.mediaDevices.getDisplayMedia();

        videoElement.srcObject = mediaSteam;
        videoElement.onloadedmetadata = () => {
            videoElement.onplay()
        }
    } catch (err) {
        console.log(err);
    }
}

button.addEventListener('click', async e => {
    e.preventDefault()
    seletMediaStream()
    button.disabled = true;
    await videoElement.requestPictureInPicture();
})