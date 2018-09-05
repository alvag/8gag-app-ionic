import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { UploadPage } from "../upload/upload";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(private modalCtrl: ModalController) {
    }

    showModal() {
        let modal = this.modalCtrl.create(UploadPage);
        modal.present();
    }

}
