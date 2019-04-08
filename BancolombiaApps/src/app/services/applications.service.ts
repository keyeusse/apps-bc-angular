import { Injectable } from '@angular/core';

@Injectable()
export class ApplicationsService {

    private applications: Application[] = [
        {
            id: 0,
            nombre: 'Ahorro a la mano',
            des: 'Ahorro a la mano es una aplicación móvil que te permite manejar tu cuenta de ahorros Bancolombia desde tu celular sin necesidad de desplazarte hacia una sucursal.',
            img: 'assets/img/ahorro.jpg'
        },
        {
            id: 1,
            nombre: 'Personas',
            des: 'Con esta aplicación podrás realizar transacciones, identificar los puntos de atención de Bancolombia, solicitar productos y documentos, simular créditos y estar informado sobre el mercado financiero.',
            img: 'assets/img/app.png'
        },
        {
            id: 2,
            nombre: 'Billetera Móvil',
            des: 'Billetera Móvil es una aplicación de Bancolombia que te permite pagar en cualquier establecimiento con tu celular sin necesidad de tarjetas físicas ni datos.',
            img: 'assets/img/billetera.jpg'
        },
        {
            id: 3,
            nombre: 'COnectados',
            des: 'COnectados Bancolombia es una aplicación móvil que te permite para empleados del banco que mejora la calidad de vida y facilitar el trabajo. Se consultan servicios, información y mucho más',
            img: 'assets/img/conectados.jpg'
        },
        {
            id: 4,
            nombre: 'Empresas',
            des: 'Empresas Bancolombia es una aplicación móvil que te permite hacer transferencias a cuentas Bancolombia y fondos de inversión colectiva, pagos de créditos y tarjetas propias y de terceros autorizados, pagos manual de nómina y proveedores.',
            img: 'assets/img/empresas.png'
        },
        {
            id: 5,
            nombre: 'Filiales del Exterior',
            des: 'Filiales del Exterior es una aplicación de Bancolombia que permite unificar las cuentas de los bancos que el banco tiene por fuera de Colombia.',
            img: 'assets/img/filiales.jpg'
        },
        {
            id: 6,
            nombre: 'Nequi',
            des: 'Con Nequi abres una cuenta de ahorros en 8 minutos que te va a servir para todo. Puedes usarla para ahorrar, para pagar, para que te paguen el sueldo, para pedirle plata a tus amigos, sacar efectivo en cajeros, etc.',
            img: 'assets/img/nequi.jpg'
        },
        {
            id: 7,
            nombre: 'Pyme',
            des: 'Pyme es una aplicación creada y pensada con nuestros clientes Pyme y a partir de las necesidades transaccionales que ellos tienen en sus negocios. Su diseño y experiencia se enfoca en la facilidad de uso para la realización de las transacciones financieras, además, cuenta con información de valor y algunas herramientas que podrían facilitar el día a día.',
            img: 'assets/img/pyme.png'
        },
        {
            id: 8,
            nombre: 'Somos',
            des: 'Somos es una aplicación que nos permite resolver dudas, asesorías, reclamos y sugerencias.',
            img: 'assets/img/somos.png'
        }
    ];

    private images: Application[] = [
        {
            id: 0,
            nombre: 'Pyme',
            des: 'Conoce la manera más fácil de pagar sin tarjeta y llena de estilo.',
            img: 'assets/img/appPyme.jpg'
        },
        {
            id: 1,
            nombre: 'Billetera Móvil',
            des: '¿Tienes tarjeta de crédito para hacer compras por internet? Puedes tener una virtual y cargarla desde tu cuenta de ahorros. .',
            img: 'assets/img/billetera2.png'
        },
        {
            id: 2,
            nombre: 'Empresas',
            des: 'La nueva aplicación Bancolombia que te permite un fácil manejo de las cuentas de tu Pyme, programar cuenta por pagar y demás.',
            img: 'assets/img/empresas.jpg'
        },
        {
            id: 3,
            nombre: 'Nequi',
            des: 'Desde tu celular puedes abrir una cuenta de ahorros y mover tu dinero de la forma que prefieras.',
            img: 'assets/img/nequi3.png'
        }
    ];
    constructor() {
        console.log( 'Servicio listo para ser consumido' );
    }

    getApplications() {
        return this.applications;
    }

    getMoreInfo(i: string) {
        return this.applications[i];
    }

    getImages() {
        return this.images;
    }

    buscarApp( termino: string): Application[] {
        const appArr: Application[] = [];
        termino = termino.toLowerCase();
        for ( const app of this.applications) {

            const nombre = app.nombre.toLowerCase();

            if (nombre.indexOf( termino ) >= 0) {
                appArr.push(app);
            }
        }

        return appArr;
    }
}

export interface Application {
    id: number;
    nombre: string;
    des: string;
    img: string;
}
