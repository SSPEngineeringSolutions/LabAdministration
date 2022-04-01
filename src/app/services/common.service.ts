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
  calculateCollectionName(date : Date){
    return date.getMonth()+"/"+date.getFullYear()
  }

}
