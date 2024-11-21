<?php

namespace App\Http\Controllers;
use App\Http\Resources\UserPurchasedResource;
use App\Http\Resources\UserCollection;
use Illuminate\Http\Request;
use App\Models\Purchased;

class UserPurchesedController extends Controller
{
    function index($user_id) {
        $purchased = Purchased::get()->where('user_id',$user_id);
        if(is_null($purchased))
            return response()->json('Purchased courses not found', 404);
        return UserPurchasedResource::collection($purchased);

    }
}
