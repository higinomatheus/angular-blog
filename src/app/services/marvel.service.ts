import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
	providedIn: 'root',
})
export class MarvelService {
	private publicKey: string = environment.marvel.publicKey;
	private privateKey: string = environment.marvel.privateKey;
	private baseUrl: string = 'https://gateway.marvel.com/v1/public';

	constructor(private http: HttpClient) { }

	getCharacters(limit: number = 10, offset: number = 0) {
		const ts = new Date().getTime().toString();
		const hash = CryptoJS.MD5(ts + this.privateKey + this.publicKey).toString();

		const params = new HttpParams()
			.set('ts', ts)
			.set('apikey', this.publicKey)
			.set('hash', hash)
			.set('limit', limit.toString())
			.set('offset', offset.toString());

		return this.http.get(`${this.baseUrl}/characters`, { params });
	}

	getCharacter(id: number = 1011334) {
		const ts = new Date().getTime().toString();
		const hash = CryptoJS.MD5(ts + this.privateKey + this.publicKey).toString();

		const params = new HttpParams()
      .set('ts', ts)
			.set('apikey', this.publicKey)
			.set('hash', hash)

		return this.http.get(`${this.baseUrl}/characters/${id}`,{ params });
	}
}
