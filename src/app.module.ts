import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'pellefant.db.elephantsql.com',
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      username: process.env.DB_USER || 'eiewrabz',
      password: process.env.DB_PASSWORD || 'EI86uwr-57Sg5gdxZL6xQu2pqNDXtwg-',
      database: process.env.DB_SCHEMA || 'eiewrabz',
      entities: ['src/**/**.entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
