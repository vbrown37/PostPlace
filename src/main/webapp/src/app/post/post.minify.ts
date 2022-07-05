import {UserMinify} from "../user/user.minify";

export class PostMinify {

  id?: string;

  title?: string;

  createdAt?: Date;

  createdBy?: UserMinify;

  constructor(obj?: Partial<PostMinify>) {
    Object.assign(this, obj);
  }

}
