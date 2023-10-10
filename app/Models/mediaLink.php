<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class mediaLink extends Model
{
    use HasFactory;
protected $guarded= array();
public $timestamps = false;
    public function mediable()
    {
        return $this->morphTo();

    }
}
