<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Http\Resources\CourseResource;
use Illuminate\Http\Request;
use App\Http\Resources\CourseCollection;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $courses = Course::all();
        return new CourseCollection($courses);
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
            'description' => 'required|string|max:1024',
            'price' => 'required|numeric|between:0,99.99', 
        ]);
       
       if ($validator->fails()) {
            return response()->json($validator->errors());
        }
    
        $course = Course::create([
            'title' => $request->title,
            'description' => $request->description,
            'price' => $request->price, 
        ]);  
    
        return response()->json(['Course is created successfully', new CourseResource($course)]);

    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $course = Course::find($id);
        if (is_null($course)) {
            return response()->json(['message' => 'Course not found.'], Response::HTTP_NOT_FOUND);
        }
        return new CourseResource($course);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Course $course)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Course $course)
    { 
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255|min:2',
            'description' => 'required|string|max:1024',
            'price' => 'required|numeric|between:0,99.99', 
        ]);
        
       if ($validator->fails()) {
            return response()->json($validator->errors());
        }

            
        $course->title = $request->title;
        $course->description = $request->description;
        $course->price = $request->price;

        $course->save();
        return response()->json(["Course was updated successfully.", new CourseResource($course)]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Course $course)
    {
        $course -> delete();
        return response()->json('Course was deleted successfully');
    }
}
