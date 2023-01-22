import { Component } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public formData:FormGroup;
  public isFormSubmitted:boolean=false;

  constructor(private fbuild:FormBuilder,private rout:Router,
    private authenticationService: AuthService,) {

    this.formData=this.fbuild.group({
      userName:['',Validators.compose([Validators.required,Validators.minLength(2)])],
      userPass:['',Validators.compose([Validators.required,Validators.maxLength(8)])],

    });
   }

   checkUser(formData:any){
    this.isFormSubmitted=true;
    //console.log(formData);

    if (this.formData.valid) {

      this.authenticationService
        .login(formData.value.userName, formData.value.userPass)
        .pipe(first())
        .subscribe(
          (data) => {
             if(data.id){
              this.rout.navigate(['homepage/recipie']);
             }
           // console.log(data);
          },
          (error) => {
           if(error.status === 401){
           // this.simpleAlert();
           alert('User name or password is wrong');

           } else {
            console.log("Something Wrong Here");
           }
          }
        );
    } else {
     // this.validateAllFormFields(this.login);
    }
   }

}
