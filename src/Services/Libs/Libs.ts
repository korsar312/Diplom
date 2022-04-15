import { Hooks } from './Hooks/Hooks';
import { Utils } from './Utils/Utils';

export class lib {
	public hooks: Hooks;
	public utils: Utils;

	constructor() {
		this.hooks = new Hooks();
		this.utils = new Utils();
	}
}
