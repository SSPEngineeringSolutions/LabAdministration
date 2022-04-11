import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public url = "https://ap-south-1.aws.data.mongodb-api.com/app/labadministration_income-kbazv/endpoint/"
  constructor(private http : HttpClient) { }

  getBillNumber(){
    return this.http.get(this.url + "getBillNumber")
  }

  addNewBill(data : any){
    return this.http.post(this.url + "insertNewBill",data)
  }

  updateBillNumber(data:any){
    return this.http.post(this.url + "updateBillNumber",data)
  }

  addDailyTotal(data:any){
    return this.http.post(this.url + "addDailyTotal",data)
  }

  getBill(data : any ){
    return this.http.get(this.url + "getByBillNumber"+"?colName="+data.colName+"&billNumber="+data.billNumber)
  }

  updateBill(data:any){
    return this.http.post(this.url + "updateBill",data)
  }

  calculateCollectionName(date : Date){
    return (date.getMonth()+1)+"/"+date.getFullYear()
  }

  calculateDate(date : Date){
    return date.getDate()+"/"+ (date.getMonth()+1)+"/"+date.getFullYear()
  }

}
