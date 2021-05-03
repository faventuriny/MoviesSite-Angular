import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../style.css', './login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  form: FormGroup
  email
  password

  ngOnInit(): void {
    this.form = this.fb.group({
      email: new FormControl('', Validators.compose([Validators.email, Validators.required])),
      password: new FormControl('', Validators.compose([Validators.minLength(4), Validators.required])),
    })

    this.email = this.form.get('email')
    this.password = this.form.get('password')
  }

  onSubmit(userDetails) {
    console.log(userDetails);
    this.userService.login(userDetails)
      .pipe(take(1))
      .subscribe(resData => {
        console.log('resData', resData);
        let res: any = resData
        console.log('res.body.token', res.body.token);
        sessionStorage.setItem('token', res.body.token);
        this.router.navigateByUrl('/movies-panel')
      }, error => {
        console.log('error', error.message);
      })

  }

}
