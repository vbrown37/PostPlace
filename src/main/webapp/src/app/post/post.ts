import {UserMinify} from "../user/user.minify";

export class Post {

  id?: string;

  title?: string;

  createdAt?: Date;

  createdBy?: UserMinify;

  content?: string;

  constructor(obj?: Partial<Post>) {
    Object.assign(this, obj);
  }

}
