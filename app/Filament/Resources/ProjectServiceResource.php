<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProjectServiceResource\Pages;
use App\Filament\Resources\ProjectServiceResource\RelationManagers;
use App\Models\Service;
use Filament\Forms;
use Filament\Forms\Components\Fieldset;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Resources\Concerns\Translatable;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;
use Filament\Tables\Columns\SpatieMediaLibraryImageColumn;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ProjectServiceResource extends Resource
{
    use Translatable;

    protected static ?string $model = Service::class;

    protected static ?string $navigationIcon = 'heroicon-o-collection';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Fieldset::make('add Utilities')
                    ->schema([
                        TextInput::make('title')->label(__('service_title')),
                        SpatieMediaLibraryFileUpload::make('service_image')->label(__('service_image'))
                            ->hint('max image size 35px * 35px')
                            ->collection('project_service'),
                    ])
                    ->columns(1)
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('id')->label(__('id'))->sortable(),
                Tables\Columns\TextColumn::make('title')->label(__('service_title'))->limit('50')->sortable(),
                SpatieMediaLibraryImageColumn::make('project_service')->label(__('service_image'))->collection('project_service'),
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

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProjectServices::route('/'),
            'create' => Pages\CreateProjectService::route('/create'),
            'edit' => Pages\EditProjectService::route('/{record}/edit'),
        ];
    }

    public static function getTranslatableLocales(): array
    {
        return ['en', 'ar'];
    }
    protected static function getNavigationGroup(): ?string
    {
        return __('Projects');
    }
    public static function getLabel(): ?string
    {
        return __('project_service');
    }

    public static function getPluralLabel(): ?string
    {
        return __('project_service');
    }
}
