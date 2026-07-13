/*==========================================================
 SISTEMA INTEGRAL DE PERICIAS CONTABLES - SIPC
 Autor: CPC Jesús Ángel Cárdenas Simon
 Versión: 1.0
==========================================================*/

"use strict";

/*==========================================================
 CONFIGURACIÓN GENERAL
==========================================================*/

const SIPC = {

    nombre: "Sistema Integral de Pericias Contables",

    version: "1.0",

    autor: "CPC Jesús Ángel Cárdenas Simon"

};

/*==========================================================
 INICIALIZACIÓN
==========================================================*/

document.addEventListener("DOMContentLoaded", iniciarSistema);

function iniciarSistema(){

    console.log(SIPC.nombre);

    console.log("Versión:", SIPC.version);

    cargarDashboard();

}

/*==========================================================
 DASHBOARD
==========================================================*/

function cargarDashboard(){

    mostrarFecha();

}

/*==========================================================
 FECHA
==========================================================*/

function mostrarFecha(){

    const hoy = new Date();

    console.log("Fecha:", hoy.toLocaleDateString());

}

/*==========================================================
 UTILIDADES
==========================================================*/

function mensaje(texto){

    alert(texto);

}
