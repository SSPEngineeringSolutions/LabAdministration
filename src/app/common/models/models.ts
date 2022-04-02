export class newBill {
    billNumber: string;
    salutation : any;
    firstName: string;
    lastName: string;
    gender: any;
    age : string;
    phoneNumber : string;
    test: string;
    total: number;
    paid: string;
    balance: string;
    collName : string;
    date : string;
}

export class commonArray {
    salutation : any = [
        { "sal" : "Master"},
        { "sal" : "Ms"},
        { "sal" : "Mr"},
        { "sal" : "Mrs"},
    ]
    gender : any = [
        { "value" : "Male" },
        { "value" : "Female" }
    ]
//   static salutation: any;
}