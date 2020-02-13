import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { WebData } from 'src/app/interface';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  
  data:WebData={
    titulo:"pyme",
    icon: "icono",
    tipo: 6,
    secciones: {
      home: {
        navbar:"inicio",
        imagen: "https://firebasestorage.googleapis.com/v0/b/pyme-assistant.appspot.com/o/web%2Fuserid%2Fpymeappimagen1?alt=media&token=a8c2361e-2279-4384-9d5a-370e6472a4a9",
        titulo: "pymeassistant",
            },
      descargas: {
        titulo: "Descarga nuestra app",
        subtitulo:"Que esperas",
        botonplay:"playstore.com",
        botonaps:"appstore.com"
      },
      servicios: {
        titulo: "sericios",
        serviciuno:"pantalla",
        subtitulouno:"pantalla tactil",
        serviciodos:"camara",
        subtitulodos:"genial camara",
        serviciotres:"Regalos",
        subtitulotres:"Geniales regalos",
        serviciocuatro:"Seguridad",
        subtitulocuatro:"Con una seguridad",
        imagen:"https://firebasestorage.googleapis.com/v0/b/pyme-assistant.appspot.com/o/web%2Fuserid%2Fpymeappimagen1?alt=media&token=a8c2361e-2279-4384-9d5a-370e6472a4a9"
      },
      banner: {
          titulo: "Podemos hacerlo"  
        },
      contacto: {
        
        titulo: "Contactanos",
        facebook: "facebook.com",
        twitter: "twitter.com",
        google: "google.com"
      }
      
    }
  };
  data2: WebData;
  show=false;
  id:string;

  private itemsDoc: AngularFirestoreDocument<WebData>;
  item: Observable<any>;

  
  @ViewChild('home_li') homeLi: ElementRef;
  @ViewChild('descargar_li') descargarLi: ElementRef;
  @ViewChild('servicios_li') serviciosLi: ElementRef;
  @ViewChild('contact_li') contactLi: ElementRef;
  @ViewChild('navbar_li') buttonmenu: ElementRef;


  constructor(private afs: AngularFirestore,private router: Router, private routes: ActivatedRoute) {
    this.itemsDoc=afs.doc<WebData>('webs/pymeapp');
    this.item=this.itemsDoc.valueChanges();

    

  }

  cargardatos(item:WebData){
     this.itemsDoc.set(item)
     this.itemsDoc.set(this.data2);
  }
  ngOnInit() {
    this.routes.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.itemsDoc = this.afs.doc<any>(`webs/${this.id}`);
      this.item = this.itemsDoc.valueChanges();
      this.item.subscribe((data) => {
        if (data === undefined || data.tipo != 6) {
          this.router.navigateByUrl('/404');
        } else {
         this.data = data;
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
        case 'homee':
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
