import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-delete-dialog',
    templateUrl: './delete-dialog.component.html'
})
export class DeleteDialogComponent {

    constructor(private dialogRef: MatDialogRef<DeleteDialogComponent>) { }

    // Called when user clicks DELETE
    confirmDelete() {
        this.dialogRef.close(true);
    }

    // Called when user clicks CANCEL
    cancel() {
        this.dialogRef.close(false);
    }
}