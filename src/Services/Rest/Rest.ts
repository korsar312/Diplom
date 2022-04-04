import {RestApi} from "./RestApi/RestApi";
import {WebSocketApi} from "./WebSocket/WebSocketApi";

export class Rest {
  public RestApi: RestApi;
  public WebSocketApi: WebSocketApi;

  constructor() {
    this.RestApi = new RestApi();
    this.WebSocketApi = new WebSocketApi();
  }
}