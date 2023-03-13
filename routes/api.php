<?php

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



Route::get('/companies',function (){
    return response ([
        'companies'=>\App\Models\Company::with('media')->get()
    ]);
});


Route::get('/financials',function (){
    return response ([
        'financials'=>\App\Models\Financial::get() ->groupBy(function($val) {
            return Carbon::parse($val->financial_date)->format('Y');
        })
    ]);
});
