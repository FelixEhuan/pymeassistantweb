import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  private itemsDoc: AngularFirestoreDocument<any>;
  items: Observable<any>;
  home: any;
  features: any;
  contact: any;
  download: any;
  title: any;
  page: any;
  cta: any;
  show = false;
  constructor(private afs: AngularFirestore) {
  this.itemsDoc = afs.doc<any>('users/weGKw6OIJfbqez10aaC4');
  this.items = this.itemsDoc.valueChanges();
  this.items.subscribe((data: any) => {
    console.log(data);
    this.cta = data.web.secciones.cta;
    this.download = data.web.secciones.download;
    this.contact = data.web.secciones.contact;
    this.features = data.web.secciones.features;
    this.home = data.web.secciones.home;
    this.title = data.web.title;
    this.show = true;
  });

  }
  ngOnInit() {
  }

}
