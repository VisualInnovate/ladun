<?php

namespace App\Filament\Resources\RegionResource\Pages;

use App\Filament\Resources\RegionResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\EditRecord;

class EditRegion extends EditRecord
{
    use EditRecord\Concerns\Translatable;
    protected static string $resource = RegionResource::class;

    protected function getActions(): array
    {
        return [
            Actions\LocaleSwitcher::make(),
            Actions\DeleteAction::make(),
        ];
    }
}
