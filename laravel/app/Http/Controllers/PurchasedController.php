<?php

namespace App\Http\Controllers;

use App\Models\Purchased;
use Illuminate\Http\Request;
use App\Http\Resources\PurchasedResource;
use App\Http\Resources\PurchasedCollection;
use Illuminate\Http\Response;

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
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Purchased $purchased)
    {
        //
    }
}
