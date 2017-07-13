import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Geolocation, GeolocationOptions} from '@ionic-native/geolocation';
import {GoogleMaps, GoogleMap, GoogleMapsEvent, Marker, MarkerOptions} from '@ionic-native/Google-maps';

/**
 * Generated class for the GpsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-gps',
  templateUrl: 'gps.html',
})
export class GpsPage {
  longData: number;
  latData: number;
  geolocation: any;
  GoogleMaps: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  loadMap(){

 let element: HTMLElement = document.getElementById('map');
 let map: GoogleMap = this.GoogleMaps.create(element);

 map.one(GoogleMapsEvent.MAP_READY).then(
   () => {
     console.log('Map is ready!');

     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
       console.log('data', data)
       this.longData = data.coords.longitude;
       this.latData = data.coords.latitude;

    /*let ionic: lating = new lating(this.latData, this.longData);

       let position: CamaraPosition =(
         target: ionic,
         zoom: 18;
         tilt: 30;
       );

       map.moveCamera(position); 

       let MarkerOption = MarkerOptions = (
         
       )
       */
    
     
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GpsPage');
  }

   
