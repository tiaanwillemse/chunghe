<?
// add error hanlde,
// if the provided src is wrong, if fetch fail, ...

/*
http://localhost/google.code/trunk/project/flickr.viewer/getimage.php?src=http://farm4.static.flickr.com/3039/2443040177_0382a7113a.jpg
*/

$src = $_GET["src"];
$filename = basename($src);

if(!file_exists($filename)){
    // read the image file
    $handle = fopen($src, "rb");
    //print $handle . "<br>";
    $contents = stream_get_contents($handle);
    fclose($handle);

    // write the image file
    $fp = fopen($filename, 'w');
    fwrite($fp, $contents);
    fclose($fp);
}

echo "asciify({stat:'success', src:'$filename'})";

?>
