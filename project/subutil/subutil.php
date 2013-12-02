#!/usr/bin/php -q

<?php

  function convToUtf8($str) 
  { 
    if( mb_detect_encoding($str,"UTF-8, ISO-8859-1, GBK")!="UTF-8" ) 
    { 
      return  iconv("gbk","utf-8",$str); 
    } 
    else 
    { 
      return $str; 
    } 
  }
  $input_file = $argv[1];
  $str = file_get_contents($input_file);
  $encoding = mb_detect_encoding($str, "utf8, GBK, BIG5");
  echo 'encoding of file' . $input_file . ': ';
  var_dump( $encoding );

  $utf8str = mb_convert_encoding($str, "utf-8");
  $outputfile = $input_file . '.utf8';
  #echo $outputfile;
  #file_put_contents($outputfile, $utf8str);
?>
