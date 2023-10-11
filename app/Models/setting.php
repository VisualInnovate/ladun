<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class setting extends Model implements HasMedia
{
    use HasFactory ,InteractsWithMedia;


    public $timestamps = false;


    protected $guarded=array();
    protected $appends=[
      'experience_image',
      'project_image',
      'companies_image',
      'developed_buildings_image',
      'developing_buildings_image',
      'investments_image'
    ];


    public function getExperienceImageAttribute()
    {
        $file = $this->getMedia('experience')->last();

        if ($file) {
            $file->url       = $file->getUrl();
        }

        return $file;
    }

    public function getProjectImageAttribute()
    {
        $file = $this->getMedia('project')->last();

        if ($file) {
            $file->url       = $file->getUrl();
        }

        return $file;
    }

        public function getCompaniesImageAttribute()
    {
        $file = $this->getMedia('companies')->last();

        if ($file) {
            $file->url       = $file->getUrl();
        }

        return $file;
    }

        public function getDevelopedBuildingsImageAttribute()
    {
        $file = $this->getMedia('developed_buildings')->last();

        if ($file) {
            $file->url       = $file->getUrl();
        }

        return $file;
    }

        public function getDevelopingBuildingsImageAttribute()
    {
        $file = $this->getMedia('developing_buildings')->last();

        if ($file) {
            $file->url       = $file->getUrl();
        }

        return $file;
    }

        public function getInvestmentsImageAttribute()
    {
        $file = $this->getMedia('investments')->last();

        if ($file) {
            $file->url       = $file->getUrl();
        }

        return $file;
    }





}
