const inputImg = document.getElementById("upload-file");
const profileImg = document.getElementById("card-img");
const SAVED_IMG_NAME = "SAVED_IMG";

let uploaded_img = "";
uploaded_img = localStorage.getItem(SAVED_IMG_NAME);
if (uploaded_img != null) {
    profileImg.src = uploaded_img;
}

inputImg.addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_img = reader.result;
        profileImg.src = uploaded_img;
        localStorage.setItem(SAVED_IMG_NAME, uploaded_img);
    })
    reader.readAsDataURL(this.files[0]);
})
