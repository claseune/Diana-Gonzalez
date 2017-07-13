import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormPage} from '../form/form';
import {GestosPage} from '../gestos/gestos';
import {LisPage} from '../lis/lis';
import {LoginPage} from '../login/login';
import {RegistroPage} from '../registro/registro';
import {FbPage} from '../fb/fb';
import {GpsPage } from '../gps/gps';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
   goFormulario(){
    this.navCtrl.push(FormPage);
  }
  goGestos(){
    this.navCtrl.push(GestosPage);
  }
  goListas(){
    this.navCtrl.push(LisPage);
  }
  goFacebook(){
    this.navCtrl.push(FbPage);
  }
  goLogin(){
    this.navCtrl.push(LoginPage);
  }
  goRegistro(){
    this.navCtrl.push(RegistroPage);
  }
  goGps(){
    this.navCtrl.push(GpsPage);
  }


}
