<?php

use App\Http\Resources\ProjectResource;
use App\Models\Project;
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
        'financials'=>\App\Models\Financial::with('media')->get()
    ]);
});


Route::get('/investors',function (){
    return response ([
        'investors'=>\App\Models\Investor::with('media')->get()
    ]);
});


// projects
Route::group(['prefix' => 'projects'], function () {
    // projects list
    Route::get('/',function (){
        $projects = Project::with(['downloads', 'project_models', 'location'])->orderBy('id')->get();
        return ProjectResource::collection($projects);

    });
    // project details
    Route::get('/{id}', function(string $id){
        $project = Project::where('id', $id)->first();
        return (new ProjectResource($project));
    });
});

