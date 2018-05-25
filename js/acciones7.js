// JavaScript Document
$(document).ready(function(e) {
    document.addEventListener("deviceready",function(){ //Escuchador De Eventos
		$('#izquierda').on("swipeleft",function(){ //Deslizar A La Izquierda
		    navigator.notification.alert("Dezlizó hacia la Izquierda", function(){"aplicación 7" , "OK" }); //aparece mensaje alert
		}); //Cierre Izquierda
		$('#derecha').on("swiperight",function(){ //deslizar Deecha
			navigator.notification.confirm("¿Que Quieres Hacer?",function(op){ //aparece mensaje confirmar
				switch (op) //variable op para las opciones
				{
					case 1 :
					navigator.notification.beep(1); //suena el dispositivo
					break;
					
					case 2 :
					navigator.notification.vibrate(3000); //vibra el Dispositvo
					break;					
				}
			},"aplicacion 7","Beepear,Vibrar,Cancelar");
			});//Cierre De Derecha
		},false); // Cierre Diviceready
}); //Cierre Del Ready