<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use App\Http\Resources\UserCollection;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::all();
        return new UserCollection($users);
    }

    public function indexPagination()
    {
        $users = User::all();
        $users = User::paginate(5);
        return new UserCollection($users);
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
       
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $user = User::find($id);
        if (is_null($user)) {
            return response()->json(['message' => 'User not found.'], Response::HTTP_NOT_FOUND);
        }
        return new UserResource($user);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {

        $validator = Validator::make($request->all(),[
            'name' => 'required|string|max:255|min:2',
            'email' => 'required|string|max:255|email',
            'role_id' => 'required|integer|exists:roles,id',
            'password' => 'nullable|string|min:8',
        ]);

        if($validator->fails())
            return response()->json($validator->errors());
        
        $user->name = $request->name;
        $user->email = $request->email;
        //$user->password = $request->password;
        $user->role_id = $request->role_id;
        $user->save();
        return response()->json(['user' => $user, new UserResource($user)]);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user -> delete();
        return response()->json(['User was deleted successfully']);
    }

    public function blockUser($id)
{
    $user = User::find($id);

    if (!$user) {
        return response()->json(['error' => 'User not found'], 404);
    }

    $user->is_blocked = !$user->is_blocked; 
    $user->save();

    $status = $user->is_blocked ? 'blocked' : 'unblocked';
    return response()->json(['message' => "User has been $status successfully"]);
}

}
