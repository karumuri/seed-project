import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {AuthService} from "./auth.service";
import {User} from "./user.model";

@Component({
    selector:'app-signup',
    templateUrl:'./signup.component.html'
})
export class SignupComponent implements OnInit{

    myForm: FormGroup;

    constructor (private authService: AuthService){}

    onSubmit(form: NgForm){

        const user = new User(
            form.value.email,
            form.value.password,
            form.value.firstName,
            form.value.lastName,

        );
        this.authService.signup(user).subscribe(
            data=> console.log(data),
            error=> console.log(error)
        );
        this.myForm.reset();
    }


    ngOnInit(){
        this.myForm=new FormGroup({
           firstName :  new FormControl(null,Validators.required),
           lastName :  new FormControl(null,Validators.required),
           email :  new FormControl(null,[Validators.required,Validators.email]),
           password :  new FormControl(null,Validators.required),

        });
    }
}