windows.onLoad = () =>{
	const navigationsLeiste = document.getElementById("hauptnavigation");
	const unteresEnde = navigationsLeiste.offsetTop + navigationsLeiste.offsetHeight;
	
	document.getElementById("hauptbehaelter").style.marginTop = unteresEnde + 10 + "px";
	
}

function navigationUmschalten(){
const navigationsLeiste = document.getElementById("hauptnavigation");
navigationsLeiste.classList.toggle("navigation-geoeffnet");
}