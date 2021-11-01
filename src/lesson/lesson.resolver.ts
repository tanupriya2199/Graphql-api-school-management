import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { LessonType } from "./lesson.type";

@Resolver()
export class LessonResolver {

    @Query(() => LessonType)
    lesson() : LessonType {
        return {
            id : "1",   
            name : "Maths",
            startDate : (new Date()).toISOString(),
            endDate : (new Date()).toISOString(),
        };
    }

    @Mutation()
    createLesson(){
        return ''
    }
}