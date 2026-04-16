

import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'print-dialog',
    templateUrl: './print.html',
    styleUrls: ['./print.css']
})
export class printPOComponentDialog {
    form!: FormGroup;
    showReceipt = false;

    constructor(
        public dialogRef: MatDialogRef<printPOComponentDialog>,

        @Inject(MAT_DIALOG_DATA) private data: any, private fb: FormBuilder, private cdr: ChangeDetectorRef) {

        this.receipt = data;
    }

    ngOnInit() {

    }


    receipt: any = {
    };





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
            this.dialogRef.close();
        }, 2000);
    }

    closeDialog() {
        this.dialogRef.close();
    }

}