import {Component} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'group-table',
  styleUrls: ['./group-table.component.css'],
  templateUrl: './group-table.component.html',
  providers: [DataService]
})

export class GroupTableComponent {
	data:Array<any>;
	groupedData:Array<any>;
	isDataAvailable:boolean = false;
	
	constructor(private dataService:DataService){}

	ngOnInit()
	{
		//gets the json data 
		this.dataService.getData().subscribe(data=>{
			this.data = data
			this.sortGroupedData();
			this.isDataAvailable = true;
		},err => {
      		console.log('Error processing the json data');
    	});	
	}

	// groups data based on key("name") and the corresponding array of values
	groupData(data, key) {
		return data.reduce(function(x, y) {
			(x[y[key]] = x[y[key]] || []).push(y);
				return x;
			}, {});
	};

	//creates a new object array with key and corresponding category:amount pair.
	sortGroupedData(){
		let output= [];
		let objArray= this.groupData(this.data,'name');
		let keys = Object.keys(objArray);
		let sortedKeys=keys.sort();
		let categoryArray=['C1','C2','C3'];

		sortedKeys.forEach(function(element) {
		    let item={};
		    let array = objArray[element];
			array.forEach(function(values) {
			  	item["name"] = element;
				    if(values["category"]) {
				      	item[values["category"]] = values["amount"] ;
				    }		    
		  		})

		  		for(let i=0;i<categoryArray.length;i++){
		  			if(!item.hasOwnProperty(categoryArray[i])){
		  				item[categoryArray[i]]=' -';
		  			}
		  		}
		  	output.push(item);
		})
		this.groupedData=output;
	}		
}
