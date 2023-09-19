<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\Translatable\HasTranslations;

class Service extends Model implements HasMedia
{
    use HasFactory ,InteractsWithMedia;
    use HasTranslations;

    protected $fillable = ['title'];
    public $translatable = ['title'];

    public function projects()
    {
        return $this->belongsToMany(Project::class, 'project_services');
    }
}
