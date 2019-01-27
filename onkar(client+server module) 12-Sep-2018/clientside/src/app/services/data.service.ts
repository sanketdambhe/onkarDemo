import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService  {
  constructor( private http: Http) { }


  //get method ******************************************
  getBuketItems() {
 return   this.http.get('http://localhost:3000/api/items').pipe(
     map( res => res.json())
    );
  }

 //post method ******************************************
  addNewItem(newItem) {
    const header = new Headers();
 header.append('content-Type', 'application/json');
  return this.http.post('http://localhost:3000/api/item', newItem,
 {headers: header} ).pipe(
   map( res => res.json() )
   );
  }

  //put method *******************************************
  updateItem(newItem) {
    const header = new Headers();
 header.append('content-Type', 'application/json');
  return this.http.put('http://localhost:3000/api/item/'+newItem._id  , newItem, 
  {headers: header} ).pipe(
   map( res => res.json() )
   );
  }

  //delete method *****************************************
  deleteItem(id) {
    const  headers = new Headers();
    headers.append('content-Type', 'application/json');
    return   this.http.delete('http://localhost:3000/api/item/' + id, {headers: headers}).pipe(
        map( res => res.json())
       );
     }

}
