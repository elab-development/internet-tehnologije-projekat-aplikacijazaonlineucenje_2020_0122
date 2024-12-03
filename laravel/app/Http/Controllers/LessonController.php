<?php

namespace App\Http\Controllers;

use App\Models\Lesson;
use Illuminate\Http\Request;
use App\Http\Resources\LessonResource;
use App\Http\Resources\LessonCollection;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class LessonController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $lessons = Lesson::all();
       
        return new LessonCollection($lessons);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255|min:2',
            'course_id' => 'required|exists:courses,id',
            'content' => 'required|string|max:255'
        ]);
    
       if ($validator->fails()) {
            return response()->json($validator->errors());
        }
    
        $lesson = Lesson::create([
            'course_id' =>$request->course_id,
            'title' =>$request->title,
            'content' =>$request->content
        ]);  
    
        return response()->json(['Lesson is created successfully', 'lesson'=>new LessonResource($lesson)]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $lesson = Lesson::find($id);
        if (is_null($lesson)) {
            return response()->json(['message' => 'Lesson not found.'], Response::HTTP_NOT_FOUND);
        }
        return new LessonResource($lesson);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Lesson $lesson)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Lesson $lesson)
    {
        if (is_null($lesson)) {
            return response()->json(['message' => 'Lesson not found.'], Response::HTTP_NOT_FOUND);
        }
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255|min:2',
            'course_id' => 'required|exists:courses,id',
            'content' => 'required|string|max:255'
        ]);
    
       if ($validator->fails()) {
            return response()->json($validator->errors());
        }
    
        $lesson->title = $request->title;
        $lesson->course_id = $request->course_id;
        $lesson->content = $request->content;

        $lesson->save();
    
        return response()->json(['Lesson is updated successfully', new LessonResource($lesson)]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Lesson $lesson)
    {
        $lesson -> delete();
        return response()->json('Lesson was deleted successfully');
    }
}
