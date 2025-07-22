import { Injectable } from '@angular/core';
import { User } from './register/user';

@Injectable({
  providedIn: 'root'
})
export class UserServices {

  static REPO_USERS = '_USERS';

  constructor() { }

  Save(user: User){
    const storage = this.getStorage();
    storage.push(user);

    localStorage.setItem(UserServices.REPO_USERS, JSON.stringify(storage));
  }

  getStorage(): User[] {
    const usersRepository = localStorage.getItem(UserServices.REPO_USERS);
    if (usersRepository) {
      const users: User[] = JSON.parse(usersRepository);
      return users;
    }

    const users: User[] = [];
    localStorage.setItem(UserServices.REPO_USERS, JSON.stringify(users));
    return users;
  }
}
