import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/serice/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  validatorsUser =this.fb.group( {
    email: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[^@]+@[^@]+\.[a-zA-Z]{2,}')])),

    password: new FormControl('',Validators.compose([Validators.required, Validators.minLength(5),])),
  });
  constructor(private auth:AuthService , private fb:FormBuilder, private router:Router, private toastController: ToastController){}
  async login() {
    if (this.validatorsUser.valid) {
      try {
        await this.auth.login(this.validatorsUser.value).then((rep) => {
          console.log(rep.user._delegate.email);
        });
        this.showSuccessToast(); // Hiển thị toast khi đăng nhập thành công
        this.router.navigate(['/tabs']);
      } catch (error) {
        console.log(error);
        this.showErrorToast('Login failed. Please check your credentials.'); // Hiển thị toast khi đăng nhập không thành công
      }
    } else {
      this.showErrorToast('Invalid form input. Please check your inputs.'); // Hiển thị toast khi form không hợp lệ
    }
  }

  hideMenu: boolean = false;

  async showSuccessToast() {
    const toast = await this.toastController.create({
      message: 'Login successful',
      duration: 2000,
      position: 'top',
      color: 'success'
    });
    toast.present();
  }

  async showErrorToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top',
      color: 'danger'
    });
    toast.present();
  }
}
