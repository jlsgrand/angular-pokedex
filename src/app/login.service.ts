import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Trainer} from './model/trainer.model';
import {tap} from 'rxjs/operators';
import {TrainerToken} from './model/trainer.token.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public static readonly TRAINER_TOKEN = 'trainer_token';
  private trainerId: number;

  constructor(private httpClient: HttpClient) {
  }

  isTrainerLogged(): boolean {
    return !!sessionStorage.getItem(LoginService.TRAINER_TOKEN);
  }

  /**
   * Logs in a user with its user name and password.
   * Taps into the result to save user token in session storage.
   *
   * @param trainer the trainer to log in.
   */
  logIn(trainer: Trainer): Observable<TrainerToken> {
    return this.httpClient.post<TrainerToken>('http://localhost:8080/api/login', trainer)
      .pipe(
        tap(trainerToken => sessionStorage.setItem(LoginService.TRAINER_TOKEN, JSON.stringify(trainerToken)))
      );
  }

  /**
   * Gets the currently logged in user id from session storage.
   */
  getLoggedInTrainerId(): number {
    if (sessionStorage.getItem(LoginService.TRAINER_TOKEN)) {
      return JSON.parse(sessionStorage.getItem(LoginService.TRAINER_TOKEN)).trainerId;
    } else {
      return 0;
    }
  }
}
