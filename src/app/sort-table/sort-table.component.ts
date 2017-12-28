import {Component} from '@angular/core';
import {DataService} from '../services/data.service';
import {SortPipe} from './sort-pipe';

@Component({
  selector: 'sort-table',
  styleUrls: ['./sort-table.component.css'],
  templateUrl: './sort-table.component.html',
  providers: [DataService]
})

export class SortTableComponent {
	data:Data[];
	isDesc: boolean = false;
  	columnName: string = 'name';
  	sortDirection: number = 1;
  	isDataAvailable:boolean = false;

	constructor(private dataService:DataService){}

	ngOnInit()
	{
		//gets the json data
		this.dataService.getData().subscribe(data=>{
			this.data = data;
			this.isDataAvailable = true;
		},err => {
      		console.log('Error processing the json data');
    	});
	}

	// sets the sort order(asc or desc) and column name
	sortData(columnName){
	    this.isDesc = !this.isDesc; 
	    this.sortDirection = this.isDesc ? -1 : 1;
	    this.columnName = columnName;
  	};

}

interface Data{
	name:string;
	category:string;
	amount:number;
}
