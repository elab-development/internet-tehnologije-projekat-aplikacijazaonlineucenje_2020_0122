<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class StaticFilesCors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);

        if ($request->is('storage/*')) { // Ciljaj statičke fajlove
            $response->headers->set('Access-Control-Allow-Origin', '*'); 
            $response->headers->set('Access-Control-Allow-Methods', 'GET, OPTIONS'); 
            $response->headers->set('Access-Control-Allow-Headers', '*');
        }

        return $response;
    }
}
