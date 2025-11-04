<?php

namespace App\Filament\Resources\ConnectResource\Pages;

use App\Filament\Resources\ConnectResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\ListRecords;

class ListConnects extends ListRecords
{
    protected static string $resource = ConnectResource::class;

    protected function getActions(): array
    {
        return [
            // Actions\CreateAction::make(),
        ];
    }
}
