<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    function register(Request $request) {
       
        $validator = Validator::make($request->all(),[
            'name' => 'required|string|max:255|min:2',
            'email' => 'required|string|max:255|email|unique:users',
            'password' => 'required|string|min:8',
            'img' => 'nullable|image|mimes:jpeg,png,jpg,gif'
        ]);

        if($validator->fails())
            return response()->json($validator->errors());

        $imagePath = '';
        
            if ($request->hasFile('img')) {
                $imagePath = $request->file('img')->store('uploads', 'public'); // Čuva sliku u 'storage/app/public/uploads'
               
            } else {
                return response()->json(['error' => 'Image upload failed'], 422);
            }

            
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
            'role_id' => $request->role_id,
            'image' => $imagePath
        ]);
        
        $token = $user->createToken('auth_token')->plainTextToken;
        return response()->json(['data'=> $user, 'access_token' => $token, 'token_type'=>'Bearer']);

    }

    function login(Request $request) {
        if(!Auth::attempt($request->only('email','password')))
            return response()->json(['success' => false]);
        $user = User::where('email',$request['email'])->firstOrFail();

        $token = $user -> createToken('auth_token')->plainTextToken;
        $imageUrl = url('storage/' . $user->image);
        return response()->json(['success' => true,'access_token'=>$token,'user' => $user,'token_type'=> 'Bearer', 'image_url' => $imageUrl]); 

    }

    function logout() {
        auth()->user()->tokens()->delete();

        return [
            'message' => 'You have successfully logged out.'
        ];
    }

}
