<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\Translatable\HasTranslations;

class Project extends  Model implements HasMedia
{
    use HasFactory ;
    use InteractsWithMedia;
    use HasTranslations;
    protected $fillable = ['name','slug','phone','email','address','attachment','content','is_published','Land_area','building_area','units_number','models_number'];
    public $translatable = ['name','slug','address','content','Land_area'];
    protected $casts = [
        'is_published' => 'boolean',
        'attachment' => 'array',
        // 'tags' => 'array',
    ];

    public function utilities()
    {
        return $this->belongsToMany(Utility::class, 'project_utility');
    }

    public function downloads()
    {
        return $this->hasMany(Download::class);
    }
    public function project_models()
    {
        return $this->hasMany(ProjectModel::class);
    }
    public function projectModelsWithUtilities()
    {
        return $this->hasMany(ProjectModel::class)->with('utilities');
    }

    public function location()
    {
        return $this->hasOne(Location::class);
    }
}
