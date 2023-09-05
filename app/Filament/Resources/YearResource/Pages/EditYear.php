<?php

namespace App\Filament\Resources\YearResource\Pages;

use App\Filament\Resources\YearResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\EditRecord;

class EditYear extends EditRecord
{
    use EditRecord\Concerns\Translatable;
    protected static string $resource = YearResource::class;

    protected function getActions(): array
    {
        return [
            Actions\DeleteAction::make(),
            Actions\LocaleSwitcher::make(),
        ];
    }
}
