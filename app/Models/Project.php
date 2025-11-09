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
    protected $fillable =
    [
        'name',
        'slug',
        'phone',
        'email',
        'address',
        'attachment',
        'video_url',
        'video_img',
        'content',
        'is_published',
        'Land_area',
        'building_area',
        'units_number',
        'models_number',
        'region_id',
        'downloads_text',
        'crm_id',
        'facilities',
        'commercial',
        'investment',
        'government',
        'educational',
        'trade',
        'gardens',
        'mosque',
        'project_video',
        'video',
        'type',
        'number',
        'unit_type'


    ];
    public $translatable = ['name','slug','address','content', 'downloads_text','type','unit_type'];
    protected $casts = [
        'is_published' => 'boolean',
        'attachment' => 'array',
        // 'tags' => 'array',
        // 'departments' => 'array',
        // 'regions' => 'array'
    ];

    public function utilities()
    {
        return $this->belongsToMany(Utility::class, 'project_utility');
    }
    public function services()
    {
        return $this->belongsToMany(Service::class, 'project_services');
    }

    public function mediable()
    {
        return $this->morphMany(mediaLink::class,'mediable');
    }

    public function mediable360()
    {
        return $this->morphMany(mediableVideo360::class,'mediable');
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
        return $this->hasMany(ProjectModel::class)->with('utilities','media');
    }

    public function location()
    {
        return $this->hasOne(Location::class);
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('projects')
             ->singleFile()
             ->useDisk('public')
             ->withResponsiveImages();
             
        $this->addMediaCollection('project_partners')
             ->useDisk('public');
             
        $this->addMediaCollection('banner')
             ->singleFile()
             ->useDisk('public');
             
        $this->addMediaCollection('attachments')
             ->useDisk('public');
             
        $this->addMediaCollection('download_image')
             ->singleFile()
             ->useDisk('public');
    }
    
    public function registerMediaConversions(\Spatie\MediaLibrary\MediaCollections\Models\Media $media = null): void
    {
        $this->addMediaConversion('thumb')
            ->width(150)
            ->height(150)
            ->sharpen(10)
            ->nonQueued();
            
        $this->addMediaConversion('preview')
            ->width(300)
            ->height(300)
            ->sharpen(10)
            ->nonQueued();
    }

    // public function department()
    // {
    //     return $this->belongsTo(Department::class, 'department_id');
    // }
    public function region()
    {
        return $this->belongsTo(Region::class);
    }
    public function phases()
    {
        return $this->hasMany(Phase::class);
    }
    public function units()
    {
        return $this->hasMany(Unit::class);
    }
}
