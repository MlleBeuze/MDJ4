#pragma strict

var levelName : String = "Entrez le nom du niveau ";


function OnTriggerEnter2D (other : Collider2D) {

	if(other.tag == "Player"){
		Application.LoadLevel(levelName);
	}
}
