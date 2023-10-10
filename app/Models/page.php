<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class page extends Model
{
    use HasFactory ,HasTranslations;

    protected $guarded = array();
    public $timestamps = false;
    public $translatable= [ 'page_name'];

}
