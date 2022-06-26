import { RestApi } from './RestApi/RestApi';
import { WebSocketApi } from './WebSocket/WebSocketApi';
import { RepositoryController } from './Repository/Repository.controller';

class API {
	public RestApi: RestApi;
	public WebSocketApi: WebSocketApi;
	public repository: RepositoryController;

	constructor() {
		this.RestApi = new RestApi();
		this.WebSocketApi = new WebSocketApi();
		this.repository = new RepositoryController();
	}
}

export default new API();
