import {Component, OnInit} from '@angular/core';
import {Trainer} from '../model/trainer.model';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  trainer: Trainer = new Trainer();
  error: string;

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
  }

  onLogin() {
    this.error = '';

    // Try to login. If successful, go to trainer view, otherwise just print message in component.
    this.loginService.logIn(this.trainer).subscribe(
      () => this.router.navigate(['/trainer']),
      error => this.error = 'Mauvaise combinaison Name / Password'
    );
  }

}
