import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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

  @ViewChild('home_li') homeLi: ElementRef;
  @ViewChild('descargar_li') descargarLi: ElementRef;
  @ViewChild('servicios_li') serviciosLi: ElementRef;
  @ViewChild('contact_li') contactLi: ElementRef;
  @ViewChild('navbar_li') buttonmenu: ElementRef;


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

  scrollToElement($element, activeElement: string): void {
    this.buttonmenu.nativeElement.click();
    $element.scrollIntoView({behavior: 'smooth', block: 'start'});
    this.activesToogle(activeElement);
    }

    activesToogle( el: string) {
      switch (el) {
        case 'home':
          this.homeLi.nativeElement.classList.add('active');
          this.serviciosLi.nativeElement.classList.remove('active');
          this.descargarLi.nativeElement.classList.remove('active');
          this.contactLi.nativeElement.classList.remove('active');
          break;
        case 'servicios':
          this.homeLi.nativeElement.classList.remove('active');
          this.serviciosLi.nativeElement.classList.add('active');
          this.descargarLi.nativeElement.classList.remove('active');
          this.contactLi.nativeElement.classList.remove('active');
          break;
        case 'descargar':
          this.homeLi.nativeElement.classList.remove('active');
          this.serviciosLi.nativeElement.classList.remove('active');
          this.descargarLi.nativeElement.classList.add('active');
          this.contactLi.nativeElement.classList.remove('active');
          break;
        case 'contact':
          this.homeLi.nativeElement.classList.remove('active');
          this.serviciosLi.nativeElement.classList.remove('active');
          this.descargarLi.nativeElement.classList.remove('active');
          this.contactLi.nativeElement.classList.add('active');
          break;
        default:
          this.homeLi.nativeElement.classList.add('active');
          this.serviciosLi.nativeElement.classList.remove('active');
          this.descargarLi.nativeElement.classList.remove('active');
          this.contactLi.nativeElement.classList.remove('active');
          break;
      }
    }

}
