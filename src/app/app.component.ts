import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private userService: UsersService,
    private router: Router, private route: ActivatedRoute) {
  }
  title = 'Los Muguiwara TFT';
  userId: string;
  userName: string;

  public navBar = {
    isNavbarCollapsed: true,
    produtos: {
      dropdown: true
    },
    usuarios: {
      dropdown: true
    }
  };
  public logout(){
    this.userService.logOut();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.userId = localStorage.getItem('id');
    if (this.userId) {
      this.userName = localStorage.getItem('name');
    } else {
      this.router.navigate(['/login']);
    }
  }
}
