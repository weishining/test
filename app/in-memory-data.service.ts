import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
	createDb(){
		let heroes = [
			{id: 10001, name: 'Mr. Nice'},
			{id: 10002, name: 'Narco'},
			{id: 10003, name: 'Bombasto'},
			{id: 10004, name: 'Celeritas'},
			{id: 10005, name: 'Magneta'},
			{id: 10006, name: 'RubberMan'}
		];
		
		return {heroes};
	}
}