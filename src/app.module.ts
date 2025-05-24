import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssetsModule } from './assets/assets.module';
import { WalletsModule } from './wallets/wallets.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'prod' ? '.env.prod' : '.env.dev',
      ignoreEnvFile: process.env.NODE_ENV === 'prod'
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule], // Importa ConfigModule para injetar ConfigService
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
        // Outras opções de conexão Mongoose (opcional, Mongoose 6+ já tem defaults bons)
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
      }),
      inject: [ConfigService], // Garante que ConfigService seja injetado na factory
    }),
    AssetsModule,
    WalletsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
