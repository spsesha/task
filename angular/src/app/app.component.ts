import { Component, ViewChild } from '@angular/core';
import { ApiService } from './services/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  dataSource: any[] = [];
  isLoading: boolean = true;
  page: number = 1;
  total: number = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['position', 'title', 'num_favs', 'cast', 'year', 'rating'];

  constructor(private api: ApiService) {
    this.api.getRemoteData(this.page)
      .subscribe((data: any[]) => {
        this.total = Math.ceil(data[0].metadata[0].total/10);
        this.dataSource = (data[0].data);
        this.isLoading = false;
      })
  }

  moveBack(isFirst: boolean = false) {
    this.isLoading = true;
    this.page = isFirst ? 1 : (this.page - 1);
    if(this.page < 1)
      this.page = 1
    else this.callRemoteMethod();
  }

  moveForward(isLast: boolean = false) {
    this.isLoading = true;
    this.page = isLast ? this.total : (this.page + 1);
    if(this.page > this.total)
      this.page = this.total;
    else this.callRemoteMethod();
  }

  callRemoteMethod() {
    this.api.getRemoteData(this.page)
      .subscribe((data: any[]) => {
        this.total = Math.ceil(data[0].metadata[0].total/10);
        this.dataSource = (data[0].data);
        this.isLoading = false
      }, err => {
        alert(err)
      })
  }

}
