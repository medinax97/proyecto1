
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
	// body...
$('#sig1').click(function() {
	// body...
	navigator.notification.beep(1);
	var nombre_usuario = document.getElementByName('nombre')[0].value; //$('#nombre').val();
	localStorage.setItem("nombre", nombre_usuario);
	navigator.notification.alert("hola"+nombre_usuario,null,"bienvenido","ok");
})
}