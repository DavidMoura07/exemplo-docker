import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as Casual from 'casual';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getAll() {
    return await this.userRepository.find();
  }

  async makeUser(qty) {
    for (let index = 0; index < qty; index++) {
      const user = new User();
      user.firstName = Casual.first_name;
      user.lastName = Casual.last_name;
      await this.userRepository.save(user);
    }
    return await this.getAll();
  }
}
