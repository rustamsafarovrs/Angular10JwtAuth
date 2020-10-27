import {Component, OnInit} from '@angular/core';
import {UserService} from '../_services/user.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {

  content: string;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUserBoard().subscribe(
      data => {
        this.content = data;
        console.log(data);
      },
      err => {
        this.content = err.status + ' ' + JSON.parse(err.error).error;
      }
    );
  }


}
