<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\Translatable\HasTranslations;

class Unit extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;
    use HasTranslations;

    protected $guarded = [];

    protected $fillable = 
    [
        'type',
        'price',
        'area',
        'beds',
        'long',
        'lat',
        'location_in_project',
        'state',
        'delivery_date',
        'construction_code',
        'parking_code',
        'tenant_id',
        'phase_id',
        'is_published' => 'boolean',
    ];

    public $translatable = [
        // 'name'
    ];

    protected $casts = [
        'is_published' => 'boolean',
    ];

    public function project(){
        return $this->belongsTo(Project::class);
    }

    public function phase(){
        return $this->belongsTo(Phase::class);
    }
}
