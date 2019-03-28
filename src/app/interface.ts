export interface WebData{

    titulo:string;
    icon:string;
    tipo:number;
    secciones:{

        home:{
            titulo:string;
            imagen:string;
        }

        descargas:{
            titulo:string;
            subtitulo:string;
            botonplay:string;
            botonaps:string;
        }

        servicios:{
            titulo:string;
            serviciuno:string;
            subtitulouno:string;
            serviciodos:string;
            subtitulodos:string;
            serviciotres:string;
            subtitulotres:string;
            serviciocuatro:string;
            subtitulocuatro:string;
            imagen:string;
        }

        banner:{
            titulo:string;
            
        }

        contacto:{
            titulo:string;
            facebook:string;
            twitter:string;
            google:string;
        }
    }
}