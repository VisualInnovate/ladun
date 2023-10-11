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
      'experience',
      'project',
      'companies',
      'developed_buildings',
      'developing_buildings',
      'investments'
    ];


    public function getExperienceAttribute()
    {
        $file = $this->getMedia('experience')->last();

        if ($file) {
            $file->url       = $file->getUrl();
        }

        return $file;
    }

    public function getProjectAttribute()
    {
        $file = $this->getMedia('project')->last();

        if ($file) {
            $file->url       = $file->getUrl();
        }

        return $file;
    }

        public function getCompaniesAttribute()
    {
        $file = $this->getMedia('companies')->last();

        if ($file) {
            $file->url       = $file->getUrl();
        }

        return $file;
    }

        public function getDevelopedBuildingsAttribute()
    {
        $file = $this->getMedia('developed_buildings')->last();

        if ($file) {
            $file->url       = $file->getUrl();
        }

        return $file;
    }

        public function getDevelopingBuildingsAttribute()
    {
        $file = $this->getMedia('developing_buildings')->last();

        if ($file) {
            $file->url       = $file->getUrl();
        }

        return $file;
    }

        public function getInvestmentsAttribute()
    {
        $file = $this->getMedia('investments')->last();

        if ($file) {
            $file->url       = $file->getUrl();
        }

        return $file;
    }





}
