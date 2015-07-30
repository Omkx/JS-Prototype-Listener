// // Prototype

// function Estudiante(nombre , codigo){
// 	this.nombre = nombre,
// 	this.codigo = codigo,
// 	this.mostrar = function(){
// 		return nombre+''+codigo;	
// 	};	
// };

// var omar = new Estudiante('Omar','2012');
// omar.mostrar();

// // (function Informacion(co){
	
// // })();


function Info(inicio,tasa,cantidad){
	this.inicio = parseFloat(inicio);
	this.tasa = parseFloat(tasa);
	this.cantidad = parseFloat(cantidad);
	this.resultado = document.getElementById("resultado") ;
	this.mostrarInfo = function(){
		for(var i = 1 ;i <= cantidad ; i++){
			this.resultado.innerHTML = this.resultado.innerHTML + "Total a pagar en el mes "+i+" = "+this.inicio*(1+(this.tasa*i))+". Y el interes es "+(this.inicio*this.tasa*i);
			var spac = document.getElementById("resultado");
		 	var br1 = document.createElement("br");
			spac.appendChild(br1);
			this.resultado.className = 'news'; 
		} 
	}
}

window.addEventListener('load', function(){
	document.getElementById('btn1').addEventListener('click', function(){
		var nuevo = new Info(parseFloat(document.getElementById('inicio').value),
			parseFloat(document.getElementById('tasa').value),
			parseFloat(document.getElementById('cantidad').value));
		
			nuevo.mostrarInfo();	
	});
});


