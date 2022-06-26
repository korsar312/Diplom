import { Hooks } from './Hooks/Hooks';
import { Utils } from './Utils/Utils';

class Libs {
	public hooks: Hooks;
	public utils: Utils;

	constructor() {
		this.hooks = new Hooks();
		this.utils = new Utils();
	}
}

export default new Libs();
