import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';



@Injectable()
export class HeroService {
	/**
	 * 当前获取英雄的链接
	 */
	private heroesUrl = 'app/heroes';
	private headers = new Headers({'Content-Type': 'application/json'});
	
	constructor(private http: Http){}
	
	
	getHeroes(): Promise<Hero[]> {
		return this.http.get(this.heroesUrl)
				   .toPromise()
				   .then(response => response.json().data as Hero[])
				   .catch(this.handleError);
	};
	
	getHeroesSlowly(): Promise<Hero[]> {
		return new Promise<Hero[]>(resolve =>
			setTimeout(resolve, 2000))
			.then(() => this.getHeroes());
	}
	
	getHero(id: number): Promise<Hero> {
		return this.getHeroes()
				   .then(heroes => heroes.find(hero => hero.id === id));
	}
	
	update(hero: Hero): Promise<Hero> {
		const url = `${this.heroesUrl}/${hero.id}`;
		return this.http.put(url, JSON.stringify(hero), {headers: this.headers})
				   .toPromise()
				   .then(() => hero)
				   .catch(this.handleError);
	}
	
	create(name: string): Promise<Hero> {
		return this.http.post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
				   .toPromise()
				   .then(response => response.json().data)
				   .catch(this.handleError);
	}
	
	delete(id: number): Promise<void> {
		const url = `${this.heroesUrl}/${id}`;
		return this.http.delete(url, {headers: this.headers})
				   .toPromise()
				   .then(() => null)
				   .catch(this.handleError);
	}
	
	private handleError(error: any): Promise<any> {
		console.error("网络异常", error);
		return Promise.reject(error.message || error);
	}
}
