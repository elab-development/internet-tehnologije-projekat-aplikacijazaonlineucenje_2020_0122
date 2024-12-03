<?php

namespace App\Http\Controllers;
use App\Models\Material;
use App\Models\Lesson;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;


class MaterialController extends Controller
{
    
    public function store(Request $request){
        

        $validator = Validator::make($request->all(), [
            
            'lesson_id' => 'required|exists:lessons,id',
            'file' => 'required|file|mimes:mp4,mov,avi,wmv,txt,pdf,doc,jpg,docx', // Dozvoljeni fajlovi
            'type' => 'required|string', // Tip fajla (npr. video, tekst, itd.)

        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $filePath = $file->store('materials', 'public'); // Snimanje u storage/app/public/materials
            $fileName = $file->getClientOriginalName(); // Originalno ime fajla
        }

        $material = Material::create([
            'lesson_id' => $request->lesson_id,
            'file_name' => $fileName,
            'file_path' => $filePath,
            'type' => $request->type,
        ]);

        return response()->json(['message' => 'Materijal dodat!', 'material' => $material], 201);

       
    }

    public function download($fileName)
{
    $filePath = 'materials/' . $fileName; 

    if (Storage::exists($filePath)) {
        return Storage::download($filePath);
    }

    return response()->json(['error' => 'File not found'], 404);
}

    

}
