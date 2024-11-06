<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\UserResource;
use App\Http\Resources\CourseResource;


class UserPurchasedResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public static $wrap = 'UserPurchases';
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->resource->id,
            'payment_method' => $this->resource->payment_method,
            'created_at' => $this->resource->created_at,
            'updated_at' => $this->resource->updated_at,
            'user' => new UserResource($this->resource->user),   
            'course' => new CourseResource($this->resource->course),
        ];
    }
}
