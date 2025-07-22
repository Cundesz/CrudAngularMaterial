import { v4 as uuidv4 } from 'uuid';

export class User {
    public name?: string;
    public email?: string;
    public cpf?: string;
    public birthDate?: string;
    public id?: string;

  public static newUser(){
    const user = new User();
    user.id = uuidv4();
    return user;
  }
}