import {Hooks} from "./Hooks/Hooks";
import {Utils} from "./Utils/Utils";


class lib {
  public hooks: Hooks;
  public utils: Utils;

  constructor() {
    this.hooks = new Hooks();
    this.utils = new Utils();
  }
}

const libs = new lib();
export default libs;