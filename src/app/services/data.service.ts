import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

	private dataUrl = 'app/data/data.json';  

	constructor(private http: Http) {}

	getData(){
		return this.http.get(this.dataUrl).map((res) => res.json());
	}
}