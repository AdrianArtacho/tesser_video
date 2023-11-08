var img = new Image();
img.src = "EXTERN:/SIXMEMOS - 2023/6MfPaSPP - Live Project/slides/4_visibilita.png"; // Replace with the actual full file path

img.onload = function () {
   bang();
};

function bang() {
   outlet(0, "drawimage", img, 0, 0, this.box.rect[2], this.box.rect[3]);
}
