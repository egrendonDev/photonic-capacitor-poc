import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CameraResultType, CameraSource, Plugins } from '@capacitor/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  photo: SafeResourceUrl;

  constructor(public navCtrl: NavController, private sanitizer: DomSanitizer) {

  }


  async takePicture() {
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });

    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
  }

}
