<?
    $id = $_GET['id'];
    $str = file_get_contents("http://www.flickr.com/photos/" . $id );
    echo $str;
?>
