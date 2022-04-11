import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { commonArray, newBill } from 'src/app/common/models/models';
import { CommonService } from 'src/app/services/common.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers : [commonArray]
})
export class MainComponent implements OnInit {
  dockBasicItems: MenuItem[];
  newBillDialog: boolean = false;
  updateBillDialog: boolean = false;
  disabled: boolean = true;
  public newBill: any = FormGroup;
  billNumber: any;
  balance: any;
  updateBillNumber : any;
  myBill : any
  displayMyBill : boolean = false
  updateAmount : any 
  salutationArray : any
  genderArray : any 
  constructor(private fb: FormBuilder, private commonservice: CommonService , private ca : commonArray) {}

  ngOnInit(): void {
    this.salutationArray = this.ca.salutation
    this.genderArray = this.ca.gender
    this.buildForm();
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
        command : ()=>{
          this.updateBillDialog = true
        }
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

  buildForm() {
    this.newBill = this.fb.group({
      billNumber: ['', Validators.required],
      salutation : ['',Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['',Validators.required],
      age : ['',Validators.required],
      phoneNumber : ['',Validators.required],
      test: ['', Validators.required],
      total: [0, Validators.required],
      paid: [0, Validators.required],
      balance: [0, Validators.required],
    });
  }

  getBillNumber() {
    let temp = new Date();
    this.commonservice.getBillNumber().subscribe((res: any) => {
      this.billNumber =
        res.billNumber.$numberInt +
        ':' +
        (temp.getMonth()+1) +
        '/' +
        temp.getFullYear();
      this.newBill.patchValue({
        billNumber: this.billNumber,
      });
    });
  }

  // patchValue(){
  //   this.newBill.patchValue({
  //     'billNumber' : this.billNumber
  //   })

  //   console.log(this.newBill)
  // }

  save() {
    let data : newBill = this.newBill.value;
    data.collName = this.commonservice.calculateCollectionName(new Date());
    data.date = this.commonservice.calculateDate(new Date());
    data.salutation = data.salutation.sal
    data.gender = data.gender.value
    data.age = data.age.toString()
    this.commonservice.addNewBill(data).subscribe((res) => {
      if (res) {
        let updatedDate = {
          billNumber: parseInt(data.billNumber.split(':')[0]) + 1,
        };
        this.commonservice.updateBillNumber(updatedDate).subscribe((res1) => {
          if (res1) {
            this.commonservice.addDailyTotal(data).subscribe((res2) => {
              if (res2) {
                this.newBill.reset();
                this.balance = 0;
              }
            });
          }
        });
      }
    });
  }

  calculateBalance() {
    this.balance = this.newBill.value.total - this.newBill.value.paid;
    this.newBill.patchValue({
      balance: this.balance,
    });
  }

  getBill(){
    let data = {
      colName : this.updateBillNumber.split(":")[this.updateBillNumber.split(":").length -1],
      billNumber : this.updateBillNumber
    }
    this.commonservice.getBill(data).subscribe((res:any)=>{
      if(res.length > 0){
        this.displayMyBill = true
        this.myBill = res[0]
        this.myBill.total = this.myBill.total.$numberInt ? this.myBill.total.$numberInt : this.myBill.total
        // this.myBill
        // console.log(this.myBill.total)
      }
      
    })
  }
  
  updateFormCalculateBalance(){
    this.myBill.balance.$numberInt =  parseInt( this.myBill.balance.$numberInt) - this.updateAmount
    this.myBill.paid.$numberInt =  parseInt( this.myBill.paid.$numberInt) + this.updateAmount
  }

  updateSave(){
    let data : newBill = this.myBill
    data.balance = this.myBill.balance.$numberInt
    data.paid = this.myBill.paid.$numberInt
    data.total = parseInt(this.myBill.total)
    this.commonservice.updateBill(data).subscribe(res=>{
      if (res) {
        this.myBill.paid = this.updateAmount
        this.myBill.date = this.commonservice.calculateDate(new Date())
        this.commonservice.addDailyTotal(this.myBill).subscribe((res2) => {
          if (res2) {
            this.resetMyBill()
          }
        });
      }
    })
  }

  resetMyBill(){
    this.myBill = null;
    this.updateBillNumber = null
    this.updateAmount = null
    this.displayMyBill = false
    this.updateBillDialog=false;
  }
}
