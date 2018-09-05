import { Component } from '@angular/core';
import { ViewController } from "ionic-angular";

@Component({
    selector: 'page-upload',
    templateUrl: 'upload.html',
})
export class UploadPage {

    constructor(private viewCtrl: ViewController) {
    }

    closeModal() {
        this.viewCtrl.dismiss();
    }
}
