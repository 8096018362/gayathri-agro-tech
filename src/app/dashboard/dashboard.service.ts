import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DashboardService {

    initialData = [
        {
            "aadharNo": "3016 4016 5016",
            "advance": 960,
            "amount": 11600,
            "bags": 116,
            "balance": 10700,
            "date": "2026-05-01",
            "dueDate": "2026-06-26",
            "farmerName": "Raghu",
            "moisture": 1,
            "netWt": 116,
            "paddy": "Broken Rice",
            "rate": 100,
            "rstNo": "3839",
            "sNo": "16",
            "totalAmount": 11550,
            "totalDeductions": 50,
            "totalWt": 115,
            "unloading": 20,
            "vehicleNo": "AP22Z1249",
            "weighment": 30
        },
        {
            "aadharNo": "3017 4017 5017",
            "advance": 970,
            "amount": 11700,
            "bags": 117,
            "balance": 10800,
            "date": "2026-05-02",
            "dueDate": "2026-06-27",
            "farmerName": "Harish",
            "moisture": 2,
            "netWt": 117,
            "paddy": "Raw Rice",
            "rate": 100,
            "rstNo": "3840",
            "sNo": "17",
            "totalAmount": 11650,
            "totalDeductions": 50,
            "totalWt": 116,
            "unloading": 25,
            "vehicleNo": "AP22Z1250",
            "weighment": 25
        },
        {
            "aadharNo": "3018 4018 5018",
            "advance": 980,
            "amount": 11800,
            "bags": 118,
            "balance": 10900,
            "date": "2026-05-03",
            "dueDate": "2026-06-28",
            "farmerName": "Lokesh",
            "moisture": 0,
            "netWt": 118,
            "paddy": "Boiled Rice",
            "rate": 100,
            "rstNo": "3841",
            "sNo": "18",
            "totalAmount": 11750,
            "totalDeductions": 50,
            "totalWt": 117,
            "unloading": 30,
            "vehicleNo": "AP22Z1251",
            "weighment": 20
        },

        {
            "aadharNo": "3019 4019 5019",
            "advance": 990,
            "amount": 11900,
            "bags": 119,
            "balance": 11000,
            "date": "2026-05-04",
            "dueDate": "2026-06-29",
            "farmerName": "Teja",
            "moisture": 1,
            "netWt": 119,
            "paddy": "Broken Rice",
            "rate": 100,
            "rstNo": "3842",
            "sNo": "19",
            "totalAmount": 11850,
            "totalDeductions": 50,
            "totalWt": 118,
            "unloading": 20,
            "vehicleNo": "AP22Z1252",
            "weighment": 30
        },

        {
            "aadharNo": "3020 4020 5020",
            "advance": 1000,
            "amount": 12000,
            "bags": 120,
            "balance": 11100,
            "date": "2026-05-05",
            "dueDate": "2026-06-30",
            "farmerName": "Manoj",
            "moisture": 2,
            "netWt": 120,
            "paddy": "Raw Rice",
            "rate": 100,
            "rstNo": "3843",
            "sNo": "20",
            "totalAmount": 11950,
            "totalDeductions": 50,
            "totalWt": 119,
            "unloading": 25,
            "vehicleNo": "AP22Z1253",
            "weighment": 25
        },

        {
            "aadharNo": "3021 4021 5021",
            "advance": 1010,
            "amount": 12100,
            "bags": 121,
            "balance": 11200,
            "date": "2026-05-06",
            "dueDate": "2026-07-01",
            "farmerName": "Sathish",
            "moisture": 0,
            "netWt": 121,
            "paddy": "Boiled Rice",
            "rate": 100,
            "rstNo": "3844",
            "sNo": "21",
            "totalAmount": 12050,
            "totalDeductions": 50,
            "totalWt": 120,
            "unloading": 30,
            "vehicleNo": "AP22Z1254",
            "weighment": 20
        },

        {
            "aadharNo": "3022 4022 5022",
            "advance": 1020,
            "amount": 12200,
            "bags": 122,
            "balance": 11300,
            "date": "2026-05-07",
            "dueDate": "2026-07-02",
            "farmerName": "Naveen",
            "moisture": 1,
            "netWt": 122,
            "paddy": "Broken Rice",
            "rate": 100,
            "rstNo": "3845",
            "sNo": "22",
            "totalAmount": 12150,
            "totalDeductions": 50,
            "totalWt": 121,
            "unloading": 20,
            "vehicleNo": "AP22Z1255",
            "weighment": 30
        },

        {
            "aadharNo": "3023 4023 5023",
            "advance": 1030,
            "amount": 12300,
            "bags": 123,
            "balance": 11400,
            "date": "2026-05-08",
            "dueDate": "2026-07-03",
            "farmerName": "Pavan",
            "moisture": 2,
            "netWt": 123,
            "paddy": "Raw Rice",
            "rate": 100,
            "rstNo": "3846",
            "sNo": "23",
            "totalAmount": 12250,
            "totalDeductions": 50,
            "totalWt": 122,
            "unloading": 25,
            "vehicleNo": "AP22Z1256",
            "weighment": 25
        },

        {
            "aadharNo": "3024 4024 5024",
            "advance": 1040,
            "amount": 12400,
            "bags": 124,
            "balance": 11500,
            "date": "2026-05-09",
            "dueDate": "2026-07-04",
            "farmerName": "Charan",
            "moisture": 0,
            "netWt": 124,
            "paddy": "Boiled Rice",
            "rate": 100,
            "rstNo": "3847",
            "sNo": "24",
            "totalAmount": 12350,
            "totalDeductions": 50,
            "totalWt": 123,
            "unloading": 30,
            "vehicleNo": "AP22Z1257",
            "weighment": 20
        },

        {
            "aadharNo": "3025 4025 5025",
            "advance": 1050,
            "amount": 12500,
            "bags": 125,
            "balance": 11600,
            "date": "2026-05-10",
            "dueDate": "2026-07-05",
            "farmerName": "Arjun",
            "moisture": 1,
            "netWt": 125,
            "paddy": "Broken Rice",
            "rate": 100,
            "rstNo": "3848",
            "sNo": "25",
            "totalAmount": 12450,
            "totalDeductions": 50,
            "totalWt": 124,
            "unloading": 20,
            "vehicleNo": "AP22Z1258",
            "weighment": 30
        }

    ]

    // ✅ BehaviorSubject (State)
    private dataSubject = new BehaviorSubject<any[]>(this.initialData);

    // ✅ Observable for components
    data$ = this.dataSubject.asObservable();

    constructor() { }

    // ✅ Get current value
    getData(): any[] {
        return this.dataSubject.getValue();
    }

    // ✅ Add Record
    addRecord(record: any) {
        const current = this.getData();
        this.dataSubject.next([record, ...current]);
    }

    // ✅ Update Record
    updateRecord(index: number, updated: any) {
        const current = this.getData();
        current[index] = updated;
        this.dataSubject.next([...current]);
    }

    // ✅ Delete Record
    deleteRecord(index: number) {
        const current = this.getData();
        current.splice(index, 1);
        this.dataSubject.next([...current]);
    }

    // ✅ Clear All (optional)
    clearAll() {
        this.dataSubject.next([]);
    }


    //   private data = [
    //     { farmerName: 'Ramu', netWt: 100, rate: 20 },
    //     { farmerName: 'Suresh', netWt: 200, rate: 18 }
    //   ];

    //   getData() {
    //     return this.data;
    //   }

    //   getById(index: number) {
    //     return this.data[index];
    //   }

    //   add(record: any) {
    //     this.data.push(record);
    //   }

    //   update(index: number, record: any) {
    //     this.data[index] = record;
    //   }

    //   delete(index: number) {
    //     this.data.splice(index, 1);
    //   }
}