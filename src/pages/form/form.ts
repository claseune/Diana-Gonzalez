import { Component } from '@angular/core';
import { AlertController, ModalController, IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import * as firebase from 'firebase';

import {EditarPage} from '../editar/editar';


@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})

export class FormPage {
 info: any;
  records: FirebaseListObservable<any>;
  private formularioFormData: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, db: AngularFireDatabase, public FormBuilder: FormBuilder, public toastCtrl: ToastController, public alertCtrl: AlertController) {
   this.records = db.list('/personas');

      this.formularioFormData = this.FormBuilder.group({
        Nombre: ['',Validators.required],
        Apellido: ['',Validators.required],
        Pasatiempo: ['',Validators.required]
      })

}
public showToast(text, time) {
    const toast = this.toastCtrl.create({
      message: text,
      duration: time
    });
    toast.present();
  };

save(){
    if(this.formularioFormData.valid){
      this.records.push(this.formularioFormData.value)
    }else{
      this.showToast('Llenar la informacion', 3000);
      console.error('Llenar la informacion')
    }   
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPage');
  }

}
