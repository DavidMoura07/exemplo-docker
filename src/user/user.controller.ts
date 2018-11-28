import { Get, Controller, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAll() {
    return this.userService.getAll();
  }

  @Get('/make/:qty')
  makeUser(@Param() params) {
    return this.userService.makeUser(params.qty);
  }
}
