import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';
import { AccountService } from 'src/app/services/account.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string
  password: string


  constructor(private authService: AccountService) { }
  
  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.username || !this.password) {
      alert('Preencha todos os campos do formulário para continuar')
      return
    }

    const userInformation: User = {
      username: this.username,
      password: this.password
    }

    this.authService.loginUser(userInformation).subscribe(response => {
        alert(response.message)
    },
    (error) => {
      if (error.status === 400) {
        alert(error.error.message)
      } else {
        alert("erro interno do servidor")
      }
    })
  }
}
