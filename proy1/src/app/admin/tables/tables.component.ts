import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/@Services/users.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  headers = ["Id", "Name", "Age", "Gender", "Country"];
  rows:any = [];
  // userService: any;

  table: any = [
    {
      "ID" : "1",
      "Name" : "Rahul",
      "Age" : "21",
      "Gender" : "Male",
      "Country" : "India"
    },
    {
      "ID" : "2",
      "Name" : "Juan",
      "Age" : "32",
      "Gender" : "Male",
      "Country" : "Bolivia"
    },
    {
      "ID" : "3",
      "Name" : "Maria",
      "Age" : "39",
      "Gender" : "Female",
      "Country" : "Chile"
    },
    {
      "ID" : "4",
      "Name" : "Alberto",
      "Age" : "37",
      "Gender" : "Male",
      "Country" : "Argentina"
    },
  ];

  constructor(private userService: UsersService ) {
    this.fill();
  }

  ngOnInit(): void {
  }


  fill(): void{
    // this.rows = this.userService.getUsers().subscribe();
    this.userService.getUsers().subscribe(
      data => {
        this.rows = data;
        console.log(data);

      }
    );
  }

}
