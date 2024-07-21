<?php

namespace App\Filament\Resources\AnnualReportsAuditCommitteeResource\Pages;

use App\Filament\Resources\AnnualReportsAuditCommitteeResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\ListRecords;

class ListAnnualReportsAuditCommittees extends ListRecords
{
    protected static string $resource = AnnualReportsAuditCommitteeResource::class;

    protected function getActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
