let colapso;
let colapso1;
let colapso2;
let avatar;
let foto;
let empleos;
let empleos2;
let estudio;
let estudio1;
let complet1;
let complet2;
complet1=0;
complet2=0;
estudio=0;
estudio1=0;
empleos=0;
empleos2=0;
colapso=0;
colapso1=0;
colapso2=0;
let Npersona;
let NNacionalidad;  
let NCompleto;
let NApellido;
let NTDNI;
let NDNI;
let Nemail;
let NdoCompletA;
let NdoCompletB;
let Trabactual;
Trabactual=0;
let Ncargo1;
let NEmpleador1;
let Nlocalidad1;
let NDesde1;
var NHasta1;
let DefHasta;
let NTarea1;

let Ncargo2;
let NEmpleador2;
let Nlocalidad2;
let NDesde2;
let NHasta2;
let NTarea2;

let Ncargo3;
let NEmpleador3;
let Nlocalidad3;
let NDesde3;
let NHasta3;
let NTarea3;

let Ncargo4;
let NEmpleador4;
let Nlocalidad4;
let NDesde4;
let NHasta4;
let NTarea4;

var Ndesdecomplet1;
var NHasta1b;

var NTituloestudio1;
var NLugarestudio1;
var NLocalidadestudio1;
var NHastaestudio1;
var NTituloestudio2;
var NLugarestudio2;
var NLocalidadestudio2;
var NHastaestudio2;
var NTituloestudio3;
var NLugarestudio3;
var NLocalidadestudio3;
var NHastaestudio3;
var NComTitEst1;
var NcomLocHasta1;
var NComTitEst2;
var NcomLocHasta2;
var NComTitEst3;
var NcomLocHasta3;
let NHasta1bestudio;
let DefHastaestudio1;
let adjfoto1;
var Ndesdecomplet2;
var Ndesdecomplet3;
var Ndesdecomplet4;
let fotitonueva;
var DefHasta1;
let Nledicen;



Ncargo1 = 0 ;
NEmpleador1 = 0 ;
Nlocalidad1 = 0 ;
NDesde1 = 0 ;
NHasta1 = 0 ;
DefHasta1 = 0 ;
NTarea1 = 0 ;
Ncargo2 = 0 ;
NEmpleador2 = 0 ;
Nlocalidad2 = 0 ;
NDesde2 = 0 ;
NHasta2 = 0 ;
NTarea2 = 0 ;
Ncargo3 = 0 ;
NEmpleador3 = 0 ;
Nlocalidad3 = 0 ;
NDesde3 = 0 ;
NHasta3 = 0 ;
NTarea3 = 0 ;
Ncargo4 = 0 ;
NEmpleador4 = 0 ;
Nlocalidad4 = 0 ;
NDesde4 = 0 ;
NHasta4 = 0 ;
NTarea4 = 0 ;
adjfoto1 = 0;
DefHastaestudio1 = 0;


/** Funcion: Pasar a armar curriculum*/
document.getElementById('go').addEventListener('click', function(){
    document.getElementById('Bienvenida').innerHTML="Vamos a crear nuestro CV";
    document.getElementById('principal').style.display="none";
    document.getElementById('crearavatar').style.display="block";
})

/**Eligiendo avatar - Varios pasos*/
document.getElementById('img1').addEventListener('click', function(){
    document.getElementById('imagenfinal').src="https://cdn-icons-png.flaticon.com/512/4489/4489103.png";
    document.getElementById('imagen1').style.backgroundColor = "#63fd06";
    document.getElementById('fotovalida').style.display = "none";
    document.getElementById('Adjfotografia').innerHTML = "&#129312 Cargar mi foto";
    document.getElementById('imagen1').className = "img-thumbnail";
    document.getElementById('imagen2').className = "rounded-circle";
    document.getElementById('imagen3').className = "rounded-circle";
    document.getElementById('imagen4').className = "rounded-circle";
    document.getElementById('imagen6').className = "rounded-circle";
    document.getElementById('Nuevafoto').style.backgroundColor = "white";
    document.getElementById('Nuevafoto').value = '';
    document.getElementById('imagen2').style.backgroundColor = "black";
    document.getElementById('Vamos').disabled = false;
    document.getElementById('Vamos').innerHTML = "Ya elegiste tu avatar &#128040. Continuemos!"
    foto = 0;
})
document.getElementById('img2').addEventListener('click', function(){
    document.getElementById('imagenfinal').src="https://cdn3.iconfinder.com/data/icons/star-wars-color/175/jango-fett-512.png";
    foto = 0;
    document.getElementById('Vamos').disabled = false;
    document.getElementById('imagen1').className = "rounded-circle";
    document.getElementById('Nuevafoto').value = '';
    document.getElementById('imagen2').className = "img-thumbnail";
    document.getElementById('fotovalida').style.display = "none";
    document.getElementById('Vamos').innerHTML = "Ya elegiste tu avatar &#128040. Continuemos!"
    document.getElementById('imagen3').className = "rounded-circle";
    document.getElementById('imagen4').className = "rounded-circle";
    document.getElementById('Nuevafoto').style.backgroundColor = "white";
    document.getElementById('imagen6').className = "rounded-circle";
document.getElementById('Adjfotografia').innerHTML = "&#129312 Cargar mi foto";
    document.getElementById('imagen2').style.backgroundColor = "#63fd06";
})
document.getElementById('img3').addEventListener('click', function(){
    document.getElementById('imagenfinal').src="https://cdn-icons-png.flaticon.com/512/7642/7642660.png";
    foto = 0;
    document.getElementById('Vamos').disabled = false;
    document.getElementById('imagen1').className = "rounded-circle";
    document.getElementById('imagen3').className = "img-thumbnail";
    document.getElementById('imagen2').className = "rounded-circle";
    document.getElementById('Nuevafoto').value = '';
    document.getElementById('Vamos').innerHTML = "Ya elegiste tu avatar &#128040. Continuemos!"
    document.getElementById('imagen4').className = "rounded-circle";
    document.getElementById('imagen6').className = "rounded-circle";
    document.getElementById('fotovalida').style.display = "none";
    document.getElementById('Nuevafoto').style.backgroundColor = "white";
    document.getElementById('Adjfotografia').innerHTML = "&#129312 Cargar mi foto";
    document.getElementById('imagen2').style.backgroundColor = "black";
    document.getElementById('imagen3').style.backgroundColor = "#63fd06";
})
document.getElementById('img4').addEventListener('click', function(){
    document.getElementById('imagenfinal').src="https://cdn-icons-png.flaticon.com/512/2829/2829660.png";
    foto = 0;
    document.getElementById('Vamos').disabled = false;
    document.getElementById('imagen1').className = "rounded-circle";
    document.getElementById('imagen4').className = "img-thumbnail";
    document.getElementById('imagen3').className = "rounded-circle";
    document.getElementById('Vamos').innerHTML = "Ya elegiste tu avatar &#128040. Continuemos!"
    document.getElementById('imagen2').className = "rounded-circle";
    document.getElementById('imagen6').className = "rounded-circle";
    document.getElementById('Nuevafoto').value = '';
    document.getElementById('Nuevafoto').style.backgroundColor = "white";
    document.getElementById('imagen4').style.backgroundColor = "#63fd06";
    document.getElementById('imagen2').style.backgroundColor = "black";
    document.getElementById('fotovalida').style.display = "none";
    document.getElementById('Adjfotografia').innerHTML = "&#129312 Cargar mi foto";
})
document.getElementById('img6').addEventListener('click', function(){
    document.getElementById('imagenfinal').src="https://www.latercera.com/resizer/FUG8VnY_arO32Nh9xWqNzVK-rng=/768x0/smart/filters:quality(70):format(webp):no_upscale()/cloudfront-us-east-1.images.arcpublishing.com/copesa/DUJCEZ325JBCHK6DKP6OKWYUUY.jpeg";
    foto = 0;
    document.getElementById('Vamos').disabled = false;
    document.getElementById('imagen1').className = "rounded-circle";
    document.getElementById('imagen6').className = "img-thumbnail";
    document.getElementById('imagen3').className = "rounded-circle";
    document.getElementById('Vamos').innerHTML = "Ya elegiste tu avatar &#128040. Continuemos!"
    document.getElementById('imagen4').className = "rounded-circle";
    document.getElementById('imagen2').className = "rounded-circle";
    document.getElementById('Nuevafoto').value = '';
    document.getElementById('Nuevafoto').style.backgroundColor = "white";
    document.getElementById('imagen6').style.backgroundColor = "#63fd06";
    document.getElementById('imagen2').style.backgroundColor = "black";
    document.getElementById('Adjfotografia').innerHTML = "&#129312 Cargar mi foto";
    document.getElementById('fotovalida').style.display = "none";
})



/** Funcion: Ya elegi el Avatar */
document.getElementById('Vamos').addEventListener('click', function(){

    document.getElementById('crearavatar').style.display="none";
    document.getElementById('accordion').style.display="block";
    document.getElementById('barranavegacion').style.display="Block";


})




document.getElementById('paso1').addEventListener('click', function(){
    if (colapso==0){
        colapso=1;
                document.getElementById('collapseOne').style.display="block";
    } else {
        colapso=0;
        colapso1=1;
        document.getElementById('collapseOne').style.display="none";
    }
})

/**boton adjuntar foto */
document.getElementById('Adjfotografia').addEventListener('click', function(){
    var largofoto = document.getElementById('Nuevafoto').value
    if (largofoto.length == 0) {
        document.getElementById('fotovalida').style.display = "block";
    }
    else {
    document.getElementById('Adjfotografia').innerHTML = "&#128077";
    fotitonueva = document.getElementById('Nuevafoto').value; /**Guardo la URL */
    document.getElementById('imagenfinal').src = fotitonueva; /**Le agrego la URL al Img*/
    document.getElementById('imagen1').className = "rounded-circle";
    document.getElementById('fotovalida').style.display = "none";

    document.getElementById('Nuevafoto').style.backgroundColor = "#b4fed3";
    

    document.getElementById('imagen2').className = "rounded-circle";
    document.getElementById('imagen3').className = "rounded-circle";
    document.getElementById('imagen4').className = "rounded-circle";
    document.getElementById('imagen6').className = "rounded-circle";
    document.getElementById('imagen2').style.backgroundColor = "black";
    document.getElementById('Vamos').disabled = false;
    document.getElementsByName('avatarcito').defaultChecked = true;
    document.getElementById('Vamos').innerHTML = "Ya tenemos tu foto &#128248. Continuemos!"
    }
})



document.getElementById('paso2').addEventListener('click', function(){
    if (colapso1==0){
        colapso1=1;
                document.getElementById('collapseTwo').style.display="block";
    } else {
        colapso1=0;
        document.getElementById('collapseTwo').style.display="none";
    }
})
/**paso 1 a paso 2 */
document.getElementById('Paso1a2').addEventListener('click', function(){
    /**Guardo y valido valores */
        Npersona = document.getElementById('Nombre').value;
        NApellido = document.getElementById('Apellido').value;
        NNacionalidad = document.getElementById('nacionalidad').value;
        Nledicen = document.getElementById('comoledicen').value;
        
            if (Nledicen.length == 0) { /**Compruebo que haya escrito algo */
                document.getElementById('Profesion').style.display = "none";            
            }
            else{
                document.getElementById('Profesion').style.display = "block";
                document.getElementById('Profesion').innerHTML = Nledicen;
            }
        
        NCompleto = Npersona+' '+NApellido;
        document.getElementById('Titulo').innerHTML = NCompleto;
        NTDNI = document.getElementById('TipoDoc').value;
        NDNI = document.getElementById('DNI').value;
        
            /**Compruebo que haya escrito algo en NACIONALIDAD*/
            if (NTDNI.length == 0) { 
                document.getElementById('bloquenacionalidad').style.display = "none";            
            }
            else{
                document.getElementById('bloquenacionalidad').style.display = "block";
                document.getElementById('pnacionalidad').innerHTML = NNacionalidad;
            }

            /**Compruebo que haya escrito tipo y DNI */
            if (NTDNI == 0 || NDNI == 0) {
                document.getElementById('bloquedni').style.display = "none";
            }
            else {
                document.getElementById('bloquedni').style.display = "block";
                document.getElementById('ptipodni').innerHTML = NTDNI;
                document.getElementById('PDNI').innerHTML = NDNI;
            }

        
        Nemail = document.getElementById('mail').value;

            /**Compruebo que haya escrito email */
            if (Nemail.length == 0) {
                document.getElementById('bloqueemail').style.display = "none";
            }
            else {
                document.getElementById('bloqueemail').style.display = "block";
                document.getElementById('pemial').innerHTML=Nemail;
            }

        

            /**El quilombito de la fecha de nacimiento */
            var datazo = document.getElementById('fecnacimiento');
            let fecha = new Date(datazo.value);
            var anio = fecha.getFullYear();
            var mes = fecha.getMonth()+1;
            var dia = fecha.getDate()+1;
                /**Valido la fecha de nacimiento */
                if (Number.isNaN(anio) && Number.isNaN(mes) && Number.isNaN(dia)) {
                    document.getElementById('bloquefechanacimiento').style.display = "none";
                }
                else {
                    document.getElementById('bloquefechanacimiento').style.display = "block";
                    var fecdenaccom = dia + '-' + mes +'-'+anio;
                    document.getElementById('pnacimiento').innerHTML = fecdenaccom;
                }

        /**Datos del celular Codpais Codarea Celular*/
        Ncelular = document.getElementById('Celular').value;
        Ncodpais = document.getElementById('Codpais').value;
        Ncodarea = document.getElementById('Codarea').value;
        NMovil = ' +'+ Ncodpais + ' (' + Ncodarea + ') ' + Ncelular;
            /**Valido el celular */
                if (Ncelular.length == 0 || Ncodpais == 0 || Ncodarea == 0) {
                    document.getElementById('bloquecelular').style.display = "none";
                }
                else {
                    document.getElementById('bloquecelular').style.display = "block";
                    document.getElementById('pnmovil').innerHTML = NMovil;
                }
        

        /**Domicilio _ Calle + ' N° ' + Altura + ' - ' + Ciudad + '(CP: '+CP+' - '+Provincia*/
        NDomicilio = document.getElementById('Calle').value;
        NAltura = document.getElementById('Altura').value;
        NCiudad = document.getElementById('Ciudad').value;
        NCodPod = document.getElementById('CP').value;
        NProv = document.getElementById('Provincia').value;
        NdoCompletA = NDomicilio+' N° '+NAltura
        NdoCompletB = NCiudad+' (CP: '+NCodPod+') - '+NProv
        document.getElementById('pdomicilio').innerHTML = NdoCompletA
        document.getElementById('ploccpprov').innerHTML = NdoCompletB
            /** Valido lo que puso en domicilio*/
                if (NdoCompletA.length == 4 && NdoCompletB.length == 10) {
                    document.getElementById('bloquedomicilio').style.display = "none";
                }
                else if (NdoCompletB.length == 10) { /**No puso datos de ciudad */
                    document.getElementById('bloquedomicilio').style.display = "block"; 
                    document.getElementById('bloquesolociudad').style.display = "none";
                }
                else if (NdoCompletA.length == 4) { /**No puso datos de calle */
                    document.getElementById('bloquedomicilio').style.display = "block";
                    document.getElementById('bloquesolocalle').style.display = "none";
                }
                else { /** Puso todo */
                    document.getElementById('bloquedomicilio').style.display = "block";
                    document.getElementById('bloquesolocalle').style.display = "block";
                    document.getElementById('bloquesolociudad').style.display = "block";
                }



        document.getElementById('collapseOne').style.display="none";
        colapso=0;
        document.getElementById('collapseTwo').style.display="block";
        document.getElementById('1raparte').style.display="none";
        document.getElementById('2daparte').style.display="block";
}) 

/**Volver a Cambiar foto*/
document.getElementById('volveralavatar').addEventListener('click', function(){
    document.getElementById('cambiamos').style.display="none"
    document.getElementById('Bienvenida').innerHTML="Hagamos los cambios que necesites";
    document.getElementById('crearavatar').style.display="block";
    document.getElementById('Resultado').style.display="none";
    document.getElementById('accordion').style.display="none";
    document.getElementById('barranavegacion').style.display="none";
    document.getElementById('principal').style.display="none";

})


/**Boton volver al paso 1 */
document.getElementById('volver1').addEventListener('click', function(){
    document.getElementById('1raparte').style.display="Block";
    document.getElementById('2daparte').style.display="none";
    document.getElementById('collapseOne').style.display="block";
    colapso=1;
})

/**Boton volver al paso 2 */
document.getElementById('volver2').addEventListener('click', function(){
    document.getElementById('2daparte').style.display="block";
    document.getElementById('3raparte').style.display="none";
    document.getElementById('collapseTwo').style.display="block";
    colapso1=1;
})



/**Click en trabajando Actualmente */
document.getElementById('Actualtrabajo').addEventListener('click', function(){
    var disabled = document.getElementById("Hasta1").disabled;
    if (disabled) {
        document.getElementById("Hasta1").disabled = false;
        DefHasta1=2
    }
    else {
        document.getElementById("Hasta1").disabled = true;
        DefHasta1=1;
    }
})

/**Click en estudiando Actualmente */
document.getElementById('Actualestudio').addEventListener('click', function(){
    var disabled = document.getElementById("HasAcade1").disabled;
    if (disabled) {
        document.getElementById("HasAcade1").disabled = false;
        DefHastaestudio1=2
    }
    else {
        document.getElementById("HasAcade1").disabled = true;
        DefHastaestudio1=1;
    }
})


/**Botenes de agregar empleo */
document.getElementById('AgregarEmpleo1').addEventListener('click', function(){
    if(empleos==0){
        empleos=1;
        empleos2=0;
        document.getElementById('Empleo2').style.display="block";
        document.getElementById('trab2').style.display="block";
        document.getElementById('QuitarEmpleo1').style.display="block";
    }
    else if(empleos==1){
        empleos=2;
        empleos2=1;
        document.getElementById('Empleo3').style.display="block";
        document.getElementById('trab3').style.display="block";
    }
    else {
        empleos=0;
        empleos2=2;
        document.getElementById('Empleo4').style.display="block";
        document.getElementById('trab4').style.display="block";
        document.getElementById('AgregarEmpleo1').style.display="none";
    }
})



/**botonesa de quitar empleao */
document.getElementById('QuitarEmpleo1').addEventListener('click', function(){
    if(empleos2==0){
        empleos=0
        document.getElementById('QuitarEmpleo1').style.display="none"
        document.getElementById('Empleo2').style.display="none";
        document.getElementById('trab2').style.display="none";
    }
    else if(empleos2==1){
        empleos2=0;
        empleos=1
        document.getElementById('Empleo3').style.display="none";
        document.getElementById('trab3').style.display="none";
    }
    else if(empleos2==2){
        empleos2=1;
        empleos=2;
        document.getElementById('Empleo4').style.display="none";
        document.getElementById('trab4').style.display="none";
        document.getElementById('AgregarEmpleo1').style.display="block";
    }
})

/**Paso 2 a 3 */
document.getElementById('Paso2a3').addEventListener('click', function(){
    document.getElementById('collapseTwo').style.display="none";
    document.getElementById('2daparte').style.display="none";
    document.getElementById('3raparte').style.display="Block";
    document.getElementById('collapseThree').style.display="block";

    /**Carga de empleos */
    Ncargo1 = document.getElementById('Cargo1').value;
    NEmpleador1 = '&#128313' + document.getElementById('Empleador1').value;
    Nlocalidad1 = document.getElementById('localidad1').value;

        /**Quilombito de la fecha */
            /**Para el desde */
            var datazo1 = document.getElementById('Desde1');
            let fecha1 = new Date(datazo1.value);
            var anio1 = fecha1.getFullYear();
            var mes1 = fecha1.getMonth()+1;
            var dia1 = fecha1.getDate()+1;
            /** Quilombo para sacar que la fecha no sea Nan */
            if (Number.isNaN(dia1) && Number.isNaN(mes1) && Number.isNaN(anio1)) {
                document.getElementById('desdetrabajo1').style.display = "none";
            }
            else {
                document.getElementById('desdetrabajo1').style.display = "block";
                var fdesde1 = dia1 + '-' + mes1 +'-'+anio1;
            }            
    
    if (DefHasta1 == 1) {
        NHasta1 = "Actualmente";
    }
    else {
            var datazo2 = document.getElementById('Hasta1');
            let fecha2 = new Date(datazo2.value);
            var anio2 = fecha2.getFullYear();
            var mes2 = fecha2.getMonth()+1;
            var dia2 = fecha2.getDate()+1;
            var fhasta1 = dia2 + '-' + mes2 +'-'+anio2;
            NHasta1 = 'Hasta: '+ fhasta1;
    }

        if (Number.isNaN(dia2) && Number.isNaN(mes2) && Number.isNaN(anio2)) {
            document.getElementById('hastatrabajo1').style.display = "none";
        }
        else {
            document.getElementById('hastatrabajo1').style.display = "block";
        } 


    NTarea1 = document.getElementById('Tarea1').value;
        /**Reflejar valores */
        Ndesdecomplet1 = 'Desde: '+ fdesde1;
        
        document.getElementById('tareaempleo1').innerHTML = NTarea1;
        document.getElementById('puestotrabajo1').innerHTML = Ncargo1;
        document.getElementById('Empleadortrabajo1').innerHTML = NEmpleador1;
        document.getElementById('localidadtrabajo1').innerHTML = Nlocalidad1;
        document.getElementById('desdetrabajo1').innerHTML = Ndesdecomplet1;
        document.getElementById('hastatrabajo1').innerHTML = NHasta1;

            /** varlidar que haya cargador trabajo 1 */
            if (Ncargo1.length == 0) {
                document.getElementById('bloquetrabajos').style.display = "none";
            }
            else {
                document.getElementById('bloquetrabajos').style.display = "block";
            }

    /**Carga de los demas empleos */
    Ncargo2 =  document.getElementById('Cargo2').value;
    NEmpleador2 = '&#128313' + document.getElementById('Empleador2').value;
    Nlocalidad2 = document.getElementById('localidad2').value;
    NDesde2 = document.getElementById('Desde2').value;
    NHasta2 = document.getElementById('Hasta2').value;
    NTarea2 = document.getElementById('Tarea2').value;

            /**Quilombo para la fecha del 2do trabajo*/
            var datazo3 = document.getElementById('Desde2');
            let fecha3 = new Date(datazo3.value);
            var anio3 = fecha3.getFullYear();
            var mes3 = fecha3.getMonth()+1;
            var dia3 = fecha3.getDate()+1;
            var fdesde2 = dia3 + '-' + mes3 +'-'+anio3;
            var datazo4 = document.getElementById('Hasta2');
            let fecha4 = new Date(datazo4.value);
            var anio4 = fecha4.getFullYear();
            var mes4 = fecha4.getMonth()+1;
            var dia4 = fecha4.getDate()+1;
            var fhasta2 = dia4 + '-' + mes4 +'-'+anio4;
            

    Ndesdecomplet2 = 'Desde: '+ fdesde2;
    Nhastacomplet2 = 'Hasta: '+ fhasta2;
        /**Reflejar valores */
        document.getElementById('tareaempleo2').innerHTML = NTarea2;
        document.getElementById('puestotrabajo2').innerHTML = Ncargo2;
        document.getElementById('Empleadortrabajo2').innerHTML = NEmpleador2;
        document.getElementById('localidadtrabajo2').innerHTML = Nlocalidad2;
        document.getElementById('desdetrabajo2').innerHTML = Ndesdecomplet2;
        document.getElementById('hastatrabajo2').innerHTML = Nhastacomplet2;

    /**cargo el 3er empleo */
    Ncargo3 = document.getElementById('Cargo3').value;
    NEmpleador3 =  '&#128313' + document.getElementById('Empleador3').value;
    Nlocalidad3 = document.getElementById('localidad3').value;
    NDesde3 = document.getElementById('Desde3').value;
    NHasta3 = document.getElementById('Hasta3').value;
    NTarea3 = document.getElementById('Tarea3').value;

            /**Quilombo para la fecha del 3do trabajo*/
            var datazo5 = document.getElementById('Desde3');
            let fecha5 = new Date(datazo5.value);
            var anio5 = fecha5.getFullYear();
            var mes5 = fecha5.getMonth()+1;
            var dia5 = fecha5.getDate()+1;
            var fdesde3 = dia5 + '-' + mes5 +'-'+anio5;
            var datazo6 = document.getElementById('Hasta3');
            let fecha6 = new Date(datazo6.value);
            var anio6 = fecha6.getFullYear();
            var mes6 = fecha6.getMonth()+1;
            var dia6 = fecha6.getDate()+1;
            var fhasta3 = dia6 + '-' + mes6 +'-'+anio6;


    Nhastacomplet3 = 'Hasta: '+ fhasta3;
        /**Reflejar valores */
        Ndesdecomplet3 = 'Desde:'+ fdesde3;
        document.getElementById('tareaempleo3').innerHTML = NTarea3;
        document.getElementById('puestotrabajo3').innerHTML = Ncargo3;
        document.getElementById('Empleadortrabajo3').innerHTML = NEmpleador3;
        document.getElementById('localidadtrabajo3').innerHTML = Nlocalidad3;
        document.getElementById('desdetrabajo3').innerHTML = Ndesdecomplet3;
        document.getElementById('hastatrabajo3').innerHTML = Nhastacomplet3;


    /**Cargo el 4to empleo */
    Ncargo4 = document.getElementById('Cargo4').value;
    NEmpleador4 =  '&#128313' + document.getElementById('Empleador4').value;
    Nlocalidad4 = document.getElementById('localidad4').value;
    NDesde4 = document.getElementById('Desde4').value;
    NHasta4 = document.getElementById('Hasta4').value;
    NTarea4 = document.getElementById('Tarea4').value;

            /**Quilombo para la fecha del 4do trabajo*/
            var datazo7 = document.getElementById('Desde4');
            let fecha7 = new Date(datazo7.value);
            var anio7 = fecha7.getFullYear();
            var mes7 = fecha7.getMonth()+1;
            var dia7 = fecha7.getDate()+1;
            var fdesde4 = dia7 + '-' + mes7 +'-'+anio7;
            var datazo8 = document.getElementById('Hasta4');
            let fecha8 = new Date(datazo8.value);
            var anio8 = fecha8.getFullYear();
            var mes8 = fecha8.getMonth()+1;
            var dia8 = fecha8.getDate()+1;
            var fhasta4 = dia8 + '-' + mes8 +'-'+anio8;


    /**Reflejar valores */
    Nhastacomplet4 = 'Hasta: '+ fhasta4;
    Ndesdecomplet4 = 'Desde: '+ fdesde4;
    document.getElementById('tareaempleo4').innerHTML = NTarea4;
    document.getElementById('puestotrabajo4').innerHTML = Ncargo4;
    document.getElementById('Empleadortrabajo4').innerHTML = NEmpleador4;
    document.getElementById('localidadtrabajo4').innerHTML = Nlocalidad4;
    document.getElementById('desdetrabajo4').innerHTML = Ndesdecomplet4;
    document.getElementById('hastatrabajo4').innerHTML = Nhastacomplet4;

})



/**Paso #3 */
document.getElementById('paso3').addEventListener('click', function(){
    
    if (colapso2==0){
        colapso2=1;
                document.getElementById('collapseThree').style.display="block";
    } else {
        colapso2=0;

        document.getElementById('collapseThree').style.display="none";
    }
})

/**Boton agregar estudio */
document.getElementById('AgregarEstudio1').addEventListener('click', function(){
    if(estudio==0){
        estudio=1;
        estudio1=1;
        document.getElementById('Secundaria2').style.display="block";
        document.getElementById('QuitarEstudio1').style.display="block";
        document.getElementById('2doestudio').style.display="block";
    }
    else if(estudio==1){
        estudio=2;
        estudio1=2;
        document.getElementById('Secundaria3').style.display="block";
        document.getElementById('AgregarEstudio1').style.display="none";
        document.getElementById('3erestudio').style.display="block";
    }
})

/** boton quitar estudio */
document.getElementById('QuitarEstudio1').addEventListener('click', function(){
    if(estudio1==2){
        estudio=1;
        estudio1=1;
        document.getElementById('Secundaria3').style.display="none";
        document.getElementById('AgregarEstudio1').style.display="block";
        document.getElementById('3erestudio').style.display="none";
    }
    else if (estudio1==1){
        estudio=0;
        estudio1=0;
        document.getElementById('Secundaria2').style.display="none";
        document.getElementById('QuitarEstudio1').style.display="none";
        document.getElementById('2doestudio').style.display="none";
    }
    else{

    }
})

/**Paso Final */
document.getElementById('Listo').addEventListener('click', function(){
    /**Lo que se muestra */

    document.getElementById('cambiamos').style.display="Block"
    document.getElementById('Bienvenida').innerHTML="&#127881 Felicitaciones, creaste tu CV!";
    document.getElementById('principal').style.display="none";
    document.getElementById('accordion').style.display="none";
    document.getElementById('Resultado').style.display="block";
    document.getElementById('barranavegacion').style.display="none";
    var objpersonales = document.getElementById('objetivos').value;
    /**Validar si puso algo en "sobre mi" */
        if (objpersonales.length == 0) {
            document.getElementById('bloquesobremi').style.display = "none";
        }
        else {
            document.getElementById('bloquesobremi').style.display = "block";
        }

    document.getElementById('sobremi').innerHTML = document.getElementById('objetivos').value;
    /**Carga de datos */
    NTituloestudio1 = '&#127891' + document.getElementById('Estudio1').value;
    NLugarestudio1 = document.getElementById('Instituto').value;
    NLocalidadestudio1 = document.getElementById('locAcade1').value;
    /**Juego para obtener el año */
    if (DefHastaestudio1 == 1) {
        NHastaestudio1 = "En curso";
    }
    else {
        /**
         *     
         var datazo = document.getElementById('fecnacimiento');
         let fecha = new Date(datazo.value);
         var anio = fecha.getFullYear();
         var mes = fecha.getMonth()+1;
         var dia = fecha.getDate()+1;
         var fecdenaccom = dia + '-' + mes +'-'+anio;
         document.getElementById('pnacimiento').innerHTML = fecdenaccom;

         */
        var prevdatanio1 = document.getElementById('HasAcade1');
        let prevfecha1 = new Date(prevdatanio1.value);
        var anioestudio1 = prevfecha1.getFullYear();


        NHastaestudio1 = anioestudio1;
    }   
        /** Valido fecha del 1er estudio */
        if (Number.isNaN(NHastaestudio1)) {
            NcomLocHasta1 = NLocalidadestudio1
        }
        else {
            NcomLocHasta1 = NLocalidadestudio1+' - '+NHastaestudio1;
        }

            /**Termino de validar fecha y lugar */
            if (NLocalidadestudio1.length == 0) {
                document.getElementById('1erestudio').style.display = "none";
            }
            else {
                document.getElementById('1erestudio').style.display = "block";
            }


    NComTitEst1 = NTituloestudio1+' - '+NLugarestudio1;
    
    document.getElementById('pestudio1').innerHTML = NComTitEst1;
    document.getElementById('pdatosest1').innerHTML = NcomLocHasta1;
        /**Valido el Estudio 1*/
            if (NTituloestudio1.length == 8) {
                document.getElementById('bloqueestudio').style.display = "none";
            }
            else {
                document.getElementById('bloqueestudio').style.display = "block";
            }


    NTituloestudio2 =  '&#127891' + document.getElementById('Estudio2').value;
    NLugarestudio2 = document.getElementById('Instituto2').value;
    NLocalidadestudio2 = document.getElementById('locAcade2').value;
    NComTitEst2 = NTituloestudio2+' - '+NLugarestudio2;
    document.getElementById('pestudio2').innerHTML = NComTitEst2;
            var prevdatanio2 = document.getElementById('HasAcade2');
            let prevfecha2 = new Date(prevdatanio2.value);
            var anioestudio2 = prevfecha2.getFullYear();
            NHastaestudio2 = anioestudio2;

            /**Validar fecha del estudio */
            if (Number.isNaN(NHastaestudio2)) {
                NcomLocHasta2 = NLocalidadestudio2
            }
            else {
                NcomLocHasta2 = NLocalidadestudio2+' - '+NHastaestudio2;
            }

                /**Termino de validar fecha y lugar */
                if (NLocalidadestudio2.length == 0) {
                    document.getElementById('2doestudio').style.display = "none";
                }
                else {
                    document.getElementById('2doestudio').style.display = "block";
                }
            document.getElementById('pdatosest2').innerHTML = NcomLocHasta2;


    NTituloestudio3 =  '&#127891' + document.getElementById('Estudio3').value;
    NLugarestudio3 = document.getElementById('Instituto3').value;
    NLocalidadestudio3 = document.getElementById('locAcade3').value;
    NComTitEst3 = NTituloestudio3+' - '+NLugarestudio3;
    document.getElementById('pestudio3').innerHTML = NComTitEst3;
            var prevdatanio3 = document.getElementById('HasAcade3');
            let prevfecha3 = new Date(prevdatanio3.value)
            var anioestudio3 = prevfecha3.getFullYear();
            NHastaestudio3 = anioestudio3;

        /**Validar fecha del estudio */
        if (Number.isNaN(NHastaestudio3)) {
            NcomLocHasta3 = NLocalidadestudio3
        }
        else {
            NcomLocHasta3 = NLocalidadestudio3+' - '+NHastaestudio3;
        }

            /**Termino de validar fecha y lugar */
            if (NLocalidadestudio3.length == 0) {
                document.getElementById('3erestudio').style.display = "none";
            }
            else {
                document.getElementById('3erestudio').style.display = "block";
            }
        document.getElementById('pdatosest3').innerHTML = NcomLocHasta3;
  
})

/** Paso Cambiamos */
document.getElementById('cambiamos').addEventListener('click', function(){
    document.getElementById('cambiamos').style.display="none"
    document.getElementById('Bienvenida').innerHTML="Hagamos los cambios que necesites";
    document.getElementById('crearavatar').style.display="block";
    document.getElementById('barranavegacion').style.display="none";
    document.getElementById('Resultado').style.display="none";
    document.getElementById('1raparte').style.display="block";
    document.getElementById('collapseOne').style.display="block";
    document.getElementById('2daparte').style.display="none";
    document.getElementById('collapseTwo').style.display="none";
    document.getElementById('3raparte').style.display="none";
    document.getElementById('collapseThree').style.display="none";
    document.getElementById('barranavegacion').style.display="none";
})


/**Barra de menu - Pasos */
document.getElementById('menua1').addEventListener('click', function(){
    document.getElementById('1raparte').style.display="Block";
    document.getElementById('collapseOne').style.display="Block";
    document.getElementById('2daparte').style.display="none";
    document.getElementById('3raparte').style.display="none";
})
document.getElementById('menua2').addEventListener('click', function(){
    document.getElementById('1raparte').style.display="none";
    document.getElementById('collapseTwo').style.display="Block";
    document.getElementById('2daparte').style.display="block";
    document.getElementById('3raparte').style.display="none";
})
document.getElementById('menua3').addEventListener('click', function(){
    document.getElementById('1raparte').style.display="none";
    document.getElementById('collapseThree').style.display="Block";
    document.getElementById('2daparte').style.display="none";
    document.getElementById('3raparte').style.display="Block";
})