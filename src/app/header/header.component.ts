import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  status: string
  link: string = ''
  createNewAccount: string = ''
  loginClass = 'login'

  constructor() { }

  ngOnInit(): void {
    let userName = sessionStorage.getItem('userName')
    console.log('userName', userName);

    if (userName !== null) {
      this.status = 'Hi ' + userName
      console.log('status', status);
      this.loginClass = 'login-in'
    } else {
      this.status = 'Login'
      this.link = '/login'
      this.createNewAccount = 'Create New Account'
      console.log('link', this.link);
      console.log('createNewAccount', this.createNewAccount);

    }
  }

}
