export class UserMinify {

  id?: string;

  username?: string;

  profilePic?: string;

  displayTitles?: string[];

  //TODO

  constructor(obj?: Partial<UserMinify>) {
    Object.assign(this, obj);
  }

}
