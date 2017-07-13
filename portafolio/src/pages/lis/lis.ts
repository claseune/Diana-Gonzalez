import { Component } from '@angular/core';
import { AlertController, ModalController, IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import * as firebase from 'firebase';


import {EditarPage} from '../editar/editar';
@IonicPage()
@Component({
  selector: 'page-lis',
  templateUrl: 'lis.html',
})
export class LisPage {
  info: any;
  records: FirebaseListObservable<any>;
  private listasFormData: FormGroup;


    constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, db: AngularFireDatabase, public FormBuilder: FormBuilder, public toastCtrl: ToastController, public alertCtrl: AlertController) {
    this.records = db.list('/personas');

     this.listasFormData = this.FormBuilder.group({
        Nombre: ['',Validators.required],
        Apellido: ['',Validators.required],
        Pasatiempo: ['',Validators.required]
      })
  }
  edit(key){
    let info = {
      key: key
    }
    this.modalCtrl.create(EditarPage, info).present();
  }

  delete(key, name){
    let deleteToast = this.toastCtrl.create({
      position: 'top',
      message: name + 'ha sido eliminado',
      duration: 4000
    });
    let deleteAlert = this.alertCtrl.create({
      title: 'Borrar',
      subTitle: 'Eliminaras a: ' + name,
      buttons: [{
          text: 'Cancelar',
          handler: () =>{
          }},{
          text: 'Ok',
          handler: () => {
            this.records.remove(key).then(_ => deleteToast.present())
          }}]})
    deleteAlert.present();
    console.log(key);
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad LisPage');
  }

}
