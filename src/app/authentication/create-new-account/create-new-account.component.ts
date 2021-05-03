import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CinemasService } from 'src/app/cinemas.service';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-create-new-account',
  templateUrl: './create-new-account.component.html',
  styleUrls: ['../style.css', './create-new-account.component.css']
})
export class CreateNewAccountComponent implements OnInit {

  constructor(private fb: FormBuilder, private userService: UserService) { }

  form: FormGroup
  name
  email
  password
  passwordConfirm

  ngOnInit(): void {
    this.form = this.fb.group({
      name: new FormControl('', Validators.compose([Validators.minLength(3), Validators.required])),
      email: new FormControl('', Validators.compose([Validators.email, Validators.required])),
      password: new FormControl('', Validators.compose([Validators.minLength(4), Validators.required])),
      passwordConfirm: new FormControl('', Validators.compose([Validators.minLength(4), Validators.required]))
    })

    this.name = this.form.get('name')
    this.email = this.form.get('email')
    this.password = this.form.get('password')
    this.passwordConfirm = this.form.get('passwordConfirm')
  }

  onSubmit(clientDetails) {
    console.log(clientDetails);

    if (clientDetails.password === clientDetails.passwordConfirm) {
      this.userService.createNewUser({
        name: clientDetails.name,
        email: clientDetails.email,
        password: clientDetails.password
      })
        .pipe(take(1))
        .subscribe(resData => {
          console.log('resData', resData);
        }, error => {
          console.log('error', error.message);
        })
    }
  }

}
