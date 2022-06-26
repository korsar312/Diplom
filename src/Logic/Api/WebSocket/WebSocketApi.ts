import { WSS } from './WebSocketApi.interface';
import API from '../API';

export class WebSocketApi {
	private socket: WebSocket;

	constructor() {
		this.socket = new WebSocket('wss://javascript.info/article/websocket/demo/hello');

		this.socket.onopen = function (event) {
			console.log(event);

			console.log('[open] Соединение установлено');
		};

		this.socket.onmessage = (event) => {
			this.switcher(JSON.parse(event.data));
		};

		this.socket.onclose = function (event) {
			if (event.wasClean) {
				console.log(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
			} else {
				console.log('[close] Соединение прервано');
			}
		};

		this.socket.onerror = function (error) {
			console.log(error);
		};
	}

	public send(method: string, param?: any) {
		API.RestApi.logAction({
			action: 'отправка send websocket',
			data: { method, param },
		});
		this.socket.send(`${method}, ${JSON.stringify(param)}`);
	}

	switcher(wsString: WSS.massage) {
		switch (wsString.type) {
			default:
				API.RestApi.logAction({
					action: 'нет функции для switcher',
					data: wsString.data,
				});
				break;
		}
	}
}
