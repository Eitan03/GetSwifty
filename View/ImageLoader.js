
export default class ImageLoader {
    constructor(defaultImagePath, onImageChange) {
        this.image = defaultImagePath;
        this.onImageChange = onImageChange;
        this.reader = new FileReader();
        this.reader.addEventListener("load", ()=>{ 
            this.image = this.reader.result;
            onImageChange(this.image);
        }, false);
    }

    ProccessImage(imageFile) {
        this.reader.readAsDataURL(imageFile);
    }
}