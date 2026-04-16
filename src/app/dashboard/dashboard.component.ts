import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { editPOComponentDialog } from './edit-po/edit-po';
import { Router } from '@angular/router';
import { DashboardService } from './dashboard.service';
import { printPOComponentDialog } from './print/print';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  displayedColumns: string[] = ['sNo', 'farmerName', 'paddy', 'totalWt', 'rate', 'balance', 'dueDate', 'actions'];

  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dialog: MatDialog, private router: Router, private dataService: DashboardService) {
    this.dataService.data$.subscribe(data => {
      this.dummyData = data;
    });
    this.dataSource = new MatTableDataSource(this.dummyData);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addPO(): void {
    this.router.navigate(['/add-po']);
  }

  editPO(): void {
    const dialogRef = this.dialog.open(editPOComponentDialog, {
      width: '100%',
      height: '450px',
    });

    dialogRef.afterClosed().subscribe((data) => {

      if (data.clicked === 'submit') {
        console.log('Sumbit button clicked');
      }
    });
  }


  printPO(record, index): void {

    const dialogRef = this.dialog.open(printPOComponentDialog, {
      width: '100%',
      height: '700px',
      data: record
    });

    dialogRef.afterClosed().subscribe((data) => {

      if (data.clicked === 'submit') {
        console.log('Sumbit button clicked');
      }
    });
  }


  dummyData = []


}
