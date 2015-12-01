<?php
define('YAFCONF_VER', '3.0');
/**
* @link https://github.com/laruence/yaconf
*/

final class Yaconf
{
  /**
  * Get the config of $name.
  * @params sting $name ini_filename.node.sub_node
  * @params mixed $default return value when $name config is not exists.
  * @return mixed $default or an array from $name
  */
  public static function get(){}
  
  /**
  * Check if the $name exists.
  * @params sting $name
  * @return bool
  */
  public static function has($name){}
}
