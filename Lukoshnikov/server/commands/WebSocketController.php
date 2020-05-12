<?php

namespace app\commands;

use yii\console\Controller;
use Ratchet\Server\IoServer;
use Ratchet\WebSocket\WsServer;
use Ratchet\Http\HttpServer;
use app\components\chat\ChatWebSocketMessage;

class WebSocketController extends Controller{
	public function actionIndex(){
		$server = IoServer::factory(
			new HttpServer(
				new WsServer(
					new ChatWebSocketMessage()
				)
			),
			8123
		);
		echo 'websocket server listner'.PHP_EOL;
		$server->run();
	}
}