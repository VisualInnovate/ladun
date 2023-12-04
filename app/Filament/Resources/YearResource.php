<?php

namespace App\Filament\Resources;

use App\Filament\Resources\YearResource\Pages;
use App\Filament\Resources\YearResource\RelationManagers;
use App\Models\Year;
use Filament\Forms;
use Filament\Forms\Components\TextInput;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Livewire\TemporaryUploadedFile;
use Filament\Tables\Columns\TextColumn;
use Filament\Forms\Components\Card;
use Filament\Resources\Concerns\Translatable;

class YearResource extends Resource
{
    use Translatable;
    protected static ?string $model = Year::class;

    protected static ?string $navigationIcon = 'heroicon-o-collection';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Card::make()
            ->schema([
                TextInput::make('title')->label(__('title')),
                DatePicker::make('year_date'),
                FileUpload::make('year_file')->acceptedFileTypes(['application/pdf'])
                ->getUploadedFileNameForStorageUsing(function (TemporaryUploadedFile $file): string {
                    return (string) str($file->getClientOriginalName())->prepend('custom-prefix-');
                })
            ])


            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([

                TextColumn::make('year_date')->dateTime(),
                Tables\Columns\TextColumn::make('title')->label(__('title'))->limit('50')->sortable(),
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

    public static function getRelations(): array
    {
        return [
            //
        ];
    }
    public static function getTranslatableLocales(): array
    {
        return ['en', 'ar'];
    }
    public static function getPages(): array
    {
        return [
            'index' => Pages\ListYears::route('/'),
            'create' => Pages\CreateYear::route('/create'),
            'edit' => Pages\EditYear::route('/{record}/edit'),
        ];
    }



    protected static function getNavigationGroup(): ?string
    {
        return __('years');
    }

    public static function getLabel(): ?string
    {
        return __('year');
    }

    public static function getPluralLabel(): ?string
    {
        return __('Annual Reports');
    }

    public static function getNavigationSort(): ?int
    {
        return 0;
    }
}
