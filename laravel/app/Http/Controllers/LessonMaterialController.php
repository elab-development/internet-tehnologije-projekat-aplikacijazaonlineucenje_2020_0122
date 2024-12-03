<?php

namespace App\Http\Controllers;
use App\Models\Material;
use App\Models\Lesson;
use Illuminate\Http\Request;
use App\Http\Resources\MaterialResource;
use App\Http\Resources\MaterialCollection;



class LessonMaterialController extends Controller
{
    public function index($lesson_id)
    {
        
        $materials = Material::where('lesson_id', $lesson_id)->get();

        
        if ($materials->isEmpty()) {
            return response()->json(['message' => 'Materijali za ovu lekciju nisu pronađeni.'], 404);
        }

        
        return MaterialResource::collection($materials);
    }
}