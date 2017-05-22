<?php
function PayPal_PHP_SDK_autoload($className)
{
  $classPath = explode('\\', $className);
  if ($classPath[0] != 'PayPal') {
    return;
  }
  $classPath = array_slice($classPath, 1, 2);
  $filePath = dirname(__FILE__) . '/' . implode('/', $classPath) . '.php';
  if (file_exists($filePath)) {
    require_once($filePath);
  }
}
spl_autoload_register('PayPal_PHP_SDK_autoload');