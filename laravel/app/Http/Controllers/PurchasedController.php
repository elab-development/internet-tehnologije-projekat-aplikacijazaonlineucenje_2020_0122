<?php

namespace App\Http\Controllers;

use App\Models\Purchased;
use Illuminate\Http\Request;
use App\Http\Resources\PurchasedResource;
use App\Http\Resources\PurchasedCollection;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use App\Models\Course; 

class PurchasedController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $purchases = Purchased::all();
        return new PurchasedCollection($purchases);
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
            
            'course_id' => 'required|exists:courses,id',
            'user_id' => 'required|exists:users,id',
            'payment_method' => 'required|in:bank transfer,credit card,pay pal'

        ]);
    
       if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $purchased = Purchased::create([
            'course_id' => $request->course_id,
            'user_id' =>$request->user_id,
            'payment_method' => $request->payment_method

        ]);

        $course = Course::find($request->course_id);

        return response()->json($course, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $purchased = Purchased::find($id);
        if (is_null($purchased)) {
            return response()->json(['message' => 'Purchase not found.'], Response::HTTP_NOT_FOUND);
        }
        return new PurchasedResource($purchased);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Purchased $purchased)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Purchased $purchased)
    {
        $validator = Validator::make($request->all(), [
            
            'course_id' => 'required|exists:courses,id',
            'user_id' => 'required|exists:users,id',
            'payment_method' => 'required|in:bank transfer,credit card,pay pal'

        ]);
    
       if ($validator->fails()) {
            return response()->json($validator->errors());
        }
        $purchased->course_id =$request->course_id;
        $purchased->user_id =$request->user_id;
        $purchased->payment_method =$request->payment_method;

        $purchased->save();

        return response()->json(['Purchase is updated successfully', new PurchasedResource($purchased)]);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Purchased $purchased)
    {
        $purchased -> delete();
        return response()->json(['Purchase was deleted successfully']);
    }
}
