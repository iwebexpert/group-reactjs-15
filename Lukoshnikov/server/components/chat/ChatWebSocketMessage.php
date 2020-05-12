<?php

namespace app\components\chat;

use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface;

class ChatWebSocketMessage implements MessageComponentInterface{
	/** @var SplObjectStorage*/
	protected $clients;
	
	public function __construct(){
		$this->clients = new \SplObjectStorage();
	}
	
	function onOpen(ConnectionInterface $conn){
		echo 'open connection'. ' ' . $conn->resourceId.PHP_EOL;
		$this->clients->attach($conn);
	}
	function onClose(ConnectionInterface $conn){
		echo 'close connection'.PHP_EOL;
		$this->clients->detach($conn);
	}
	function onError(ConnectionInterface $conn, \Exception $e){
		echo 'error'.$e->getMessage().PHP_EOL;
		
	}
	function onMessage(ConnectionInterface $from, $msg){
		echo 'Полученно сообщение от клиента '. $from->resourceId . ' ' . $msg;
		foreach($this->clients as $client){
			if($from !== $client){
				$client->send(date('H:i:s').': '.$msg);
			}
		}
	}
}