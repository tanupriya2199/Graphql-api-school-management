import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson/lesson.entity';
import { LessonModule } from './lesson/lesson.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type : 'mongodb',
      url : 'mongodb://localhost/newSchool',
      synchronize : true,
      useUnifiedTopology : true,
      entities : [Lesson]
    }),
    GraphQLModule.forRoot({
      autoSchemaFile : true
    }),
    LessonModule
  ],
  providers: [],
})
export class AppModule {}
