import { UsersStore } from './Users.store';
import { UsersService } from './Users.service';

export class UsersModule {
	public store: UsersStore;
	public service: UsersService;

	constructor() {
		this.store = new UsersStore();
		this.service = new UsersService();
	}
}
