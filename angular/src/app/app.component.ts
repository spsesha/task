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
  
  dataSource: MatTableDataSource<any> = new MatTableDataSource([]);
  isLoading: boolean = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['position', 'title', 'num_favs', 'cast', 'year', 'rating'];

  constructor(private api: ApiService) {
    this.api.getRemoteData()
      .subscribe((data: any[]) => {
        this.dataSource = new MatTableDataSource(data);
        console.log(this.paginator);
        this.dataSource.paginator = this.paginator; 
        this.isLoading = false;
      })
  }
}
