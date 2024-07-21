<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\Translatable\HasTranslations;

class AnnualReportsAuditCommittee extends Model
{
    use HasFactory;
    use InteractsWithMedia;
    use HasTranslations;
    public $translatable = ['title'];

    protected $fillable = [
        'title',
        'description',
        'report_date',
        'report_file',
    ];
}

