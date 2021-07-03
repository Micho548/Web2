import { TableMock } from './table-mock';
import { Users } from './../../@Models/Users';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/@Services/users.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  headers = ["Id", "Name", "LastName", "email", "created by"];
  rows:Users[] = TableMock;

  constructor(private userService: UsersService ) {
    // this.fill();
  }

  ngOnInit(): void {
  }


  fill(): void{
    // this.userService.getUsers().subscribe(
    //   data => {
    //     this.rows.push(data);
    //     // console.log(data);
    //     console.log(this.rows);
    //   }
    // );
  }

}
