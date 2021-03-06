import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TestModalComponent } from '../test-modal/test-modal.component';

@Component({
  selector: 'lcu-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {
  public ID: any;

  constructor(public dialog: MatDialog, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(data => {
      this.ID = data.params;
      console.log("ID = " + this.ID);
      if(this.ID == "modal"){
          this.openDialog();
      }

      
    });
   }
   openDialog(): void {
    const dialogRef = this.dialog.open(TestModalComponent, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      this.router.navigate(['../'], { relativeTo: this.activatedRoute });
    });
  }
 
  ngOnInit() {
  }

}
