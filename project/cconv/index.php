<?php
header("Content-Type:text/html ; charset=utf-8");
$str = $_GET['q'];
echo cconv("utf-8", "utf8-tw", $str);
?>
