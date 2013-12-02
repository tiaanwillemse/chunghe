<?
	session_start();
	if(!session_is_registered("title")){
		session_register("title");
	//	$_SESSION["user_pages"] = 1;
	}
	$_SESSION["title"] = $_POST["username"];
	echo $_SESSION["title"];
	/*
	else{
		$_SESSION["user_pages"] ++;
	}
	if(!session_is_registered("desc")){
		session_register("desc");
	}*/

//	echo session_id()
//	echo $_SESSION["user_pages"];
?>

