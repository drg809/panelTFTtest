import {Component, OnInit} from '@angular/core';
import {User} from '../../class/user';
import {UsersService} from '../../services/users.service';
import {ActivatedRoute, Router} from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public user: User;
  public textBtn: string;

  constructor(private userService: UsersService, private router: Router, private route: ActivatedRoute) {
    this.user = new User();
    this.textBtn = 'Añadir Usuario';
  }

  ngOnInit() {}

  onSubmit(user: User) {
    console.log(user);
    const peticion = this.userService.login(user);
    const suscripcion = peticion.subscribe(
      (data: any) => {
        // Aquí ya tenemos los datos del login. Revisar si hay token o error
        if (data._id) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('name', data.name);
          localStorage.setItem('puuid', data.puuid);
          localStorage.setItem('id', data._id);
          //window.location.reload();

        } else {
          console.log(data.error.message);
          alert('Parece que ha habido un problema');
        }
        // Ya hemos recibido los datos, no nos va a devolver más. liberamos la memoria
        suscripcion.unsubscribe();
      },
      (error: HttpErrorResponse) => {
        if (error.status === 401) {
          alert('Revisa tu usuario y contraseña');
        } else {
          alert('Parece que ha habido un problema');
        }
      }
    );
  }
}
