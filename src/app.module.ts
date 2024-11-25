import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeasureBody } from './entities/measureBody.entity';
import { MeasureBodyService } from './services/measureBody.service';
import { UserController } from './controllers/measureBody.controller';
import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'body_and_performance',
      entities: [MeasureBody, User],
      autoLoadEntities: true, // Carregar automaticamente entidades
      synchronize: true, // Usado apenas em desenvolvimento para sincronizar com o banco
     }),
    TypeOrmModule.forFeature([MeasureBody]),
  ],
  controllers: [UserController],
  providers: [MeasureBodyService],
})
export class AppModule {}
