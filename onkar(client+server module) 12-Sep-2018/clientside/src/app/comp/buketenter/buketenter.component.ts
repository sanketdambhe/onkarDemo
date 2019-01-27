import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgForm } from '@angular/forms';
import { ItemBuket } from '../../modelmain/itembuket.model';

@Component({
  selector: 'app-buketenter',
  templateUrl: './buketenter.component.html',
  styleUrls: ['./buketenter.component.css']
})
export class BuketenterComponent implements OnInit {

   itemtype = ['fruit', 'vegi'];
 
 @ViewChild('buketform') submitform: NgForm;

  constructor(private dataSerive: DataService) { }
  ngOnInit() {}




  onSubmit(buketform: NgForm) {
   const newItem = buketform.value;
   this.dataSerive.addNewItem(newItem).subscribe(
     item => {    console.log(item);  this.handleResponse(item);   alert('your item added successfully'); }
   );
  }

  
  handleResponse(data) {
    console.log(data);
 this.submitform.reset();
  }

}
