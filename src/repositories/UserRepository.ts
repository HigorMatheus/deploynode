import User from 'entities/User';
import { Repository ,  getRepository } from 'typeorm';

interface IcreateUser {
  name: string;
  email: string;
  password: string;
}
export default class UserRepository {
  private ormrepository: Repository<User>
  constructor() {

    this.ormrepository =  getRepository(User)
  }

  public async create({ name, password, email }: IcreateUser): Promise<User> {
   const user =  this.ormrepository.create({email,name,password})

  await this.ormrepository.save(user)

   return user
  }
}
