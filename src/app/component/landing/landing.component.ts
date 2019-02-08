import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router,ActivatedRoute } from '@angular/router';
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
  fireRoute: string;
  constructor(private afs: AngularFirestore,private router: Router, private routes: ActivatedRoute) {
  // this.itemsDoc = this.afs.doc<any>('users/weGKw6OIJfbqez10aaC4');
  }
  ngOnInit() {
  this.routes.paramMap.subscribe(params => {
    const id = params.get('id');
    this.itemsDoc = this.afs.doc<any>(`webs/${id}`);
    this.items = this.itemsDoc.valueChanges();
    this.items.subscribe((data) => {
      console.log('data', data);
      if (data === undefined) {
        this.router.navigateByUrl('/404');
      } else {
      this.cta = data.secciones.cta;
      this.download = data.secciones.download;
      this.contact = data.secciones.contact;
      this.features = data.secciones.features;
      this.home = data.secciones.home;
      this.title = data.title;
      this.show = true;
      }
    });
  });
  }

}
