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
    if (sessionStorage.getItem('userName') !== null) {
      this.router.navigateByUrl('/movies-panel')
    }

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
        sessionStorage.setItem('token', res.body.token);
        sessionStorage.setItem('userName', res.body.user.name)
        sessionStorage.setItem('isAdmin', res.body.user.admin)
        window.location.reload()
      }, error => {
        console.log('error', error.message);
      })

  }

}
