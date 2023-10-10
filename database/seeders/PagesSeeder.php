<?php

namespace Database\Seeders;

use Filament\Resources\Pages\Page;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PagesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\page::create([
            'page_name' => [
                'en' => 'companies',
                'ar' => 'الشركات التباعة'
            ],
            'img_url' => ''
        ]);
        \App\Models\page::create([
            'page_name' => [
                'en' => 'financial',
                'ar' => 'البيانات الماليه'
            ],
            'img_url' => ''
        ]);
        \App\Models\page::create([
            'page_name' => [
                'en' => 'announcement',
                'ar' => 'اعلانات الشركة'
            ],
            'img_url' => ''
        ]);
        \App\Models\page::create([
            'page_name' => [
                'en' => 'investors',
                'ar' => 'علاقات المستثمرين'
            ],
            'img_url' => ''
        ]);


    }
}
