import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  dockBasicItems: MenuItem[];
  newBillDialog: boolean = false;
  disabled: boolean = true;
  public newBill : any = FormGroup
  billNumber : any ;
  balance : any ;
  constructor(private fb : FormBuilder,private commonservice : CommonService) {}

  ngOnInit(): void {
    this.buildForm()
    // this.getBillNumber()
    this.dockBasicItems = [
      {
        label: 'Finder',
        icon: 'assets/dock/finder.svg',
        command: () => {
          this.newBillDialog = true;
          this.getBillNumber();
          // this.patchValue()
        },
      },
      {
        label: 'App Store',
        icon: 'assets/dock/appstore.svg',
      },
      {
        label: 'Photos',
        icon: 'assets/dock/photos.svg',
      },
      {
        label: 'Trash',
        icon: 'assets/dock/trash.png',
      },
    ];
  }

  buildForm(){
    this.newBill = this.fb.group({
      billNumber : ['',Validators.required],
      firstName : ['',Validators.required],
      lastName : ['',Validators.required],
      test : ['',Validators.required],
      total : [0,Validators.required],
      paid : [0,Validators.required],
      balance : [0,Validators.required]
    })
  }

  getBillNumber(){
    let temp = new Date()
    this.commonservice.getBillNumber().subscribe((res:any)=>{
      this.billNumber = res.billNumber.$numberInt +":"+temp.getMonth()+"/"+temp.getFullYear()
      this.newBill.patchValue({
        'billNumber' : this.billNumber
      })
    })
  }

  // patchValue(){
  //   this.newBill.patchValue({
  //     'billNumber' : this.billNumber
  //   })

  //   console.log(this.newBill)
  // }

  save(){
    let data = this.newBill.value
    data.collName = this.commonservice.calculateCollectionName(new Date())
    // console.log(data)
    this.commonservice.addNewBill(data).subscribe(res=>{
      console.log(res)
      if(res){
        let updatedDate = {
          billNumber : parseInt(data.billNumber.split(":")[0]) + 1
        }
        this.commonservice.updateBillNumber(updatedDate).subscribe(res1=>{
          console.log(res1)
          this.newBill.reset()
          this.balance = 0;
        })
      }
    })
  }

  calculateBalance(){
     this.balance  =  this.newBill.value.total - this.newBill.value.paid
     this.newBill.patchValue({
      'balance' : this.balance
    })
  } 
}
