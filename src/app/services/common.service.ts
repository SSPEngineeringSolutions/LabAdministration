import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private http : HttpClient) { }

  getBillNumber(){
    return this.http.get("https://ap-south-1.aws.data.mongodb-api.com/app/labadministration-jgxkm/endpoint/getBillNumber")
  }

  addNewBill(data : any){
    return this.http.post("https://ap-south-1.aws.data.mongodb-api.com/app/labadministration-jgxkm/endpoint/insertNewBill",data)
  }

  updateBillNumber(data:any){
    return this.http.post("https://ap-south-1.aws.data.mongodb-api.com/app/labadministration-jgxkm/endpoint/updateBillNumber",data)
  }

  addDailyTotal(data:any){
    return this.http.post("https://ap-south-1.aws.data.mongodb-api.com/app/labadministration-jgxkm/endpoint/addDailyTotal",data)
  }

  getBill(data : any ){
    return this.http.get("https://ap-south-1.aws.data.mongodb-api.com/app/labadministration-jgxkm/endpoint/getByBillNumber"+"?colName="+data.colName+"&billNumber="+data.billNumber)
  }

  updateBill(data:any){
    return this.http.post("https://ap-south-1.aws.data.mongodb-api.com/app/labadministration-jgxkm/endpoint/updateBill",data)
  }

  calculateCollectionName(date : Date){
    return date.getMonth()+"/"+date.getFullYear()
  }

  calculateDate(date : Date){
    return date.getDate()+"/"+ date.getMonth()+"/"+date.getFullYear()
  }

}
