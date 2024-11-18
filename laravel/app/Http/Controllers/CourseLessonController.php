<?php

namespace App\Http\Controllers;
use App\Models\Lesson;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Resources\CourseLessonResource;

class CourseLessonController extends Controller
{
    public function index($course_id){

        $lessons = Lesson::get()->where('course_id', $course_id);
        if(is_null($lessons)){
            return response()->json('data not found', 404);
        } 
            return new CourseLessonResource($lessons);
    }
}
