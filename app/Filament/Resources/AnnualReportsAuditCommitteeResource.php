<?php

namespace App\Filament\Resources;

use App\Filament\Resources\AnnualReportsAuditCommitteeResource\Pages;
use App\Models\AnnualReportsAuditCommittee;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;

class AnnualReportsAuditCommitteeResource extends Resource
{
    protected static ?string $model = AnnualReportsAuditCommittee::class;

    protected static ?string $navigationIcon = 'heroicon-o-document-report';

    protected static ?string $navigationLabel = 'Annual Reports Audit Committee';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('title')
                    ->required()
                    ->maxLength(255),
                Forms\Components\Textarea::make('description'),
                Forms\Components\DatePicker::make('report_date')
                    ->required(),
                Forms\Components\FileUpload::make('report_file')
                    ->label('Upload Report'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title'),
                Tables\Columns\TextColumn::make('report_date')
                    ->date(),
//                Tables\Columns\TextColumn::make('report_file')
//                    ->label('Report File')
//                    ->url(fn ($record) => \Storage::url($record->report_file))
//                    ->openUrlInNewTab(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListAnnualReportsAuditCommittees::route('/'),
            'create' => Pages\CreateAnnualReportsAuditCommittee::route('/create'),
            'edit' => Pages\EditAnnualReportsAuditCommittee::route('/{record}/edit'),
        ];
    }
}

