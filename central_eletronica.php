<?php 
	$file = "./data.json";
	
	$json = file_get_contents($file,0,null,null);
	header("Content-Type: application/json");
	echo $json;


?>