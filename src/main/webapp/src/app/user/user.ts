export class User {

  id?: string;

  constructor(obj?: Partial<User>) {
    Object.assign(this, obj);
  }

}
