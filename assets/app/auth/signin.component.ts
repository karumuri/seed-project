import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "./user.model";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
@Component({
    selector:'app-signin',
    templateUrl:'./signin.component.html'
})

export class SigninComponent{
    myForm: FormGroup;
    constructor(private authService:AuthService, private router:Router){}

    onSubmit(){
        const user =new User(
            this.myForm.value.eemail,this.myForm.value.ppassword
        );
        this.authService.signin(user)
            .subscribe(
                data => {
                        localStorage.setItem('token',data.token);
                        localStorage.setItem('userId',data.userId);
                        this.router.navigateByUrl('/');
                },
                error => console.error(error)
            );
        this.myForm.reset();
    }


    ngOnInit(){
        this.myForm=new FormGroup({

            eemail :  new FormControl(null,[Validators.required,Validators.email]),
            ppassword :  new FormControl(null,Validators.required),

        });
    }
}