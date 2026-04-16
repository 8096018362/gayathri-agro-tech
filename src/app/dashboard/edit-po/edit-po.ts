

import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
    selector: 'edit-po-dialog',
    templateUrl: './edit-po.html',
    styleUrls: ['./edit-po.css']
})
export class editPOComponentDialog {
    form!: FormGroup;
    showReceipt = false;

    constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef) { }

    ngOnInit() {
        this.form = this.fb.group({
            farmerName: ['', Validators.required],
            sNo: [''],
            date: [''],
            rstNo: [''],
            vehicleNo: ['', Validators.required],
            aadharNo: ['', Validators.required],

            paddy: [''],
            dueDate: [''],

            netWt: [0],
            moisture: [0],
            bags: [0],

            totalWt: [{ value: 0, disabled: true }],
            rate: [0],
            amount: [{ value: 0, disabled: true }],

            advance: [0],
            balance: [{ value: 0, disabled: true }],

            unloading: [0],
            weighment: [0],
            totalDeductions: [{ value: 0, disabled: true }],
            totalAmount: [{ value: 0, disabled: true }]
        });

        this.form.valueChanges.subscribe(() => {
            this.calculate();
        });
    }

    toNumber(val: any): number {
        return Number(val) || 0;
    }

    calculate() {
        const f = this.form.getRawValue();

        const totalWt = this.toNumber(f.netWt) - this.toNumber(f.moisture);
        const amount = totalWt * this.toNumber(f.rate);
        const totalDeductions = this.toNumber(f.unloading) + this.toNumber(f.weighment);
        const totalAmount = amount - totalDeductions;
        const balance = totalAmount - this.toNumber(f.advance);

        this.form.patchValue({
            totalWt: totalWt.toFixed(2),
            amount: amount.toFixed(2),
            totalDeductions: totalDeductions.toFixed(2),
            totalAmount: totalAmount.toFixed(2),
            balance: balance.toFixed(2)
        }, { emitEvent: false });

        this.cdr.detectChanges();
    }
    receipt: any = {
        //"farmerName": "RAMU",
        //  "sNo": "2", "date": "2026-04-06T18:30:00.000Z",
        //  "rstNo": "333",
        //  "vehicleNo": "2665",
        //  "aadharNo": "", 
        // "paddy": "SONA", 
        // "dueDate": "2026-04-15T18:30:00.000Z", 
        // "netWt": 200, 
        // "moisture": 1, 
        // "bags": "234", 
        // "rate": 200,
        //  "advance": 500, 
        // "unloading": 20,
        //  "weighment": 15
    };
    receiptPreview() {
        if (this.form.valid) {
            const data = this.form.getRawValue();

            const totalWt = (data.netWt || 0) - (data.moisture || 0);
            const amount = totalWt * (data.rate || 0);
            const totalDeductions = (data.unloading || 0) + (data.weighment || 0);
            const totalAmount = amount - totalDeductions;
            const balance = totalAmount - (data.advance || 0);

            this.receipt = { ...data, totalWt, amount, totalAmount, balance };
            this.showReceipt = true;

        } else {
            this.form.markAllAsTouched();
        }
    }

    onFocus(field: string, event: any) {
        const control = this.form.get(field);

        if (control && control.value === 0) {
            control.setValue('');
        }

        setTimeout(() => {
            event.target.select();
        }, 0);
    }

    onBlur(field: string) {
        const control = this.form.get(field);

        if (!control) return;

        let value = control.value;

        if (value === '' || value === null) {
            control.setValue(0);
            return;
        }

        value = parseFloat(value).toFixed(2);
        control.setValue(Number(value));
    }

    preventNegative(field: string) {
        const control = this.form.get(field);

        if (!control) return;

        let value = control.value;

        if (value < 0) {
            control.setValue(0);
        }
    }



    downloadPDF() {
        const data = document.getElementById('receipt-container');

        if (!data) return;

        html2canvas(data, { scale: 2 }).then(canvas => {
            const imgWidth = 208; // A4 width
            const pageHeight = 295;
            const imgHeight = canvas.height * imgWidth / canvas.width;

            const contentDataURL = canvas.toDataURL('image/png');

            const pdf = new jsPDF('p', 'mm', 'a4');
            let position = 0;

            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
            let fileName = `${this.receipt?.farmerName}_receipt.pdf`;
            pdf.save(fileName);
        });

        setTimeout(() => {
            this.showReceipt = false;
        }, 5000);
    }

}