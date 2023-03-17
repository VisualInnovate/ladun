<?php

use App\Http\Resources\ProjectResource;
use App\Models\Brief;
use App\Models\Project;
use App\Models\Structure;
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


Route::get('/investors',function (){
    return response ([
        'investors'=>\App\Models\Investor::with('media')->get()
    ]);
});

Route::get('/media-center',function (){
    $media=\App\Models\MediaCenter::with('media')->get();
    $media->parsed_date=Carbon::parse($media->craeted_at)->format('d/m/Y');
    return response ([
        'mediaCenter'=>$media
    ]);
});

Route::post('/media-center/{id}',function ($id){
    return response ([
        'mediaCenter'=>\App\Models\MediaCenter::find($id)->with('media')->get()
    ]);
});

Route::get('/about',function (){
    $briefs = Brief::with('media')->get();
    return response ($briefs);
});

Route::post('/contact',[\App\Http\Controllers\SendEmailController::class,'contact']);


// projects
Route::group(['prefix' => 'projects'], function () {
    // projects list
    Route::get('/',function (){
        $projects = Project::with(['downloads', 'projectModelsWithUtilities', 'location', 'utilities'])->where('is_published','=',1)->orderBy('id')->get();
        return ProjectResource::collection($projects);

    });
    // latest 4 projects
    Route::get('/latest',function (){
        $latest = Project::orderBy('created_at', 'DESC')
        ->take(4)
        ->get();
        return ProjectResource::collection($latest);
    });
    // project details
    Route::get('/{id}', function(string $id){
        $project = Project::where('id', $id)->first();
        return (new ProjectResource($project));
    });

});

// board of directors

Route::get('/structure',function (){
    $structure = Structure::all();
    return response([
        'structure' => $structure,
    ]);

});

