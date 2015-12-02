<?php

/**
* Using Yar, if Yar_Server do not deal with EXCEPTION, 
* you will get original error info. So, do something
* like below will helpful.
*/

public function handleYarServerException()
{
  $yarClient = new Yar_Client($yarRpcHost);
  try {
    $ret = $yarClient->rpcFun();
  } catch (Yar_Server_Exception $e) {
    if($e) $ret = 'rpc_error';
  } finally {
    return $ret;
  }
}
