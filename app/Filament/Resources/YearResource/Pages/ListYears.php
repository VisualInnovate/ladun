<?php

namespace App\Filament\Resources\YearResource\Pages;

use App\Filament\Resources\YearResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\ListRecords;

class ListYears extends ListRecords
{
    use ListRecords\Concerns\Translatable;
    protected static string $resource = YearResource::class;

    protected function getActions(): array
    {
        return [
            Actions\CreateAction::make(),
            Actions\LocaleSwitcher::make(),
        ];
    }
}
