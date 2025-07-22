import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { User } from './user';
import { UserServices } from '../user-services';


@Component({
  selector: 'app-register',
  imports: [ FlexLayoutModule, MatCardModule, FormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule ],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {
    user: User = User.newUser();

    constructor(private service: UserServices) {}

    saveUser() {
        this.service.Save(this.user);
        console.log('User saved:', this.user);
    }
}
