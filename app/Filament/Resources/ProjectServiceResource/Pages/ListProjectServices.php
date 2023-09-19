<?php

namespace App\Filament\Resources\ProjectServiceResource\Pages;

use App\Filament\Resources\ProjectServiceResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\ListRecords;

class ListProjectServices extends ListRecords
{
    use ListRecords\Concerns\Translatable;

    protected static string $resource = ProjectServiceResource::class;

    protected function getActions(): array
    {
        return [
            Actions\CreateAction::make(),
            Actions\LocaleSwitcher::make(),

        ];
    }
}
