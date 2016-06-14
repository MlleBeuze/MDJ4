#pragma strict

var platform : GameObject;

var sound : AudioClip;
private var hasPlayed= false;


function OnTriggerEnter2D (other : Collider2D) {

	if(other.tag == "Player"){
		Debug.Log("Detected Collision");
		if(hasPlayed ==false){
			GetComponent.<AudioSource>().PlayOneShot(sound);
			hasPlayed=true;
		}
		platform.GetComponent.<Rigidbody2D>().isKinematic = false;
			
	}

}
