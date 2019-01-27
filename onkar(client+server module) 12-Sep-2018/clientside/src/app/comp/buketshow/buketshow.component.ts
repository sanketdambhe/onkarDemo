import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgForm } from '@angular/forms';
import { ItemBuket } from '../../modelmain/itembuket.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';



@Component({
  selector: 'app-buketshow',
  templateUrl: './buketshow.component.html',
  styleUrls: ['./buketshow.component.css']
})


export class BuketshowComponent implements OnInit {
 buketList: ItemBuket[] = [];
 
  


  @ViewChild('buketform') subfor: NgForm;

  constructor(private dataService: DataService,
    public dialog: MatDialog) { }

//get function
  getAllItem() {
    this.dataService.getBuketItems().subscribe(
        items => {this.buketList = items;
                console.log(this.buketList); }
    );
  }

//onInit function
  ngOnInit() {this.getAllItem(); }


//edit function
  editItem(newItem) {
    const dialogRef = this.dialog.open(UpdateBuketDialog, {
      width: '550px',
      data: {name: newItem.itemName, id: newItem._id }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getAllItem();
    });
  }



  //delete function
  deletitem(id) {
this.dataService.deleteItem(id).subscribe(
  res => { alert('your item deleted successfully'); 
 this.getAllItem();
  });
 }
}









// .ts section of bucketshow.component.html
// second deiloag componenet
@Component({
  selector: 'updateBuketDilog',
  templateUrl: 'updateBuketDilog.html',
})
export class UpdateBuketDialog  {
  itemtype = ['fruit', 'vegi'];

  constructor(private dataService: DataService,
    public dialogRef: MatDialogRef<UpdateBuketDialog>,
    @Inject(MAT_DIALOG_DATA) public data: ItemBuket) {}


 

   
       onUpdate(buketform: NgForm) {
        const newItem = buketform.value;
        this.dataService.updateItem(newItem).subscribe(
         
          item => {    console.log(item);  
        });
       }

       
        onSubClick(): void {
          this.dialogRef.close();
          alert('your item Updated successfully');
        }
        onNoClick():void {
          this.dialogRef.close();
        }
}


