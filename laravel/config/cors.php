<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your settings for cross-origin resource sharing
    | or "CORS". This determines what cross-origin operations may execute
    | in web browsers. You are free to adjust these settings as needed.
    |
    | To learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    |
    */

    'paths' => ['*','api/*', 'storage/*'], // Dodaj 'storage/*' da omogućiš pristup fajlovima
    'allowed_methods' => ['*'], // Dozvoljeni HTTP metodi
    'allowed_origins' => ['http://localhost:3000'], // Dozvoljena domena sa koje dolaze zahtevi
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'], // Dozvoljeni HTTP zaglavlja
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => true,

];
