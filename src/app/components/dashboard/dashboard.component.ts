import {Component, OnInit} from '@angular/core';
import {User} from '../../class/user';
import {UsersService} from '../../services/users.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public user: User;
  public textBtn: string;

  constructor(private userService: UsersService, private router: Router, private route: ActivatedRoute) {
    this.user = new User();
    this.textBtn = 'Añadir Usuario';
  }

  ngOnInit() {}
}
