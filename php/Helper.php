<?php
class Helper {
   static public function strRevFull(string $str) {
       if(!mb_check_encoding($str, 'UTF-8')) {
           exit('Not UTF-8 encoding string'); 
       }
       
       $strLen = mb_strlen($str);
       $strToArr = [];
       for($i = 1; $i <= $strLen; $i++) {
           $strToArr = mb_substr($str, -$i, 1);
       }

       return implode($strToArr);
}
