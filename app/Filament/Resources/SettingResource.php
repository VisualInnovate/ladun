<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SettingResource\Pages;
use App\Models\setting;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;

class SettingResource extends Resource
{
    protected static ?string $model = setting::class;

    protected static ?string $navigationIcon = 'heroicon-o-collection';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('phone')->required(),
                TextInput::make('fax')->required(),
                TextInput::make('email')->required(),
                TextInput::make('convert')->label(__('convert')),

                TextInput::make('experience')->label(__('experience')),

                SpatieMediaLibraryFileUpload::make('experience_image')
                    ->hint('max image dimension 150px * 150px')
                    ->label(__('experience'))->collection('experience'),

                TextInput::make('project')->label(__('projects number')),

                SpatieMediaLibraryFileUpload::make('project_image')
                    ->hint('max image dimension 150px * 150px')
                    ->label(__('projects number'))->collection('project'),

                TextInput::make('companies')->label(__('companies number')),

                SpatieMediaLibraryFileUpload::make('companies_image')
                    ->hint('max image dimension 150px * 150px')
                    ->label(__('companies number'))->collection('companies'),

                TextInput::make('developed_buildings')->label(__('developed buildings')),

                SpatieMediaLibraryFileUpload::make('developed_buildings_image')
                    ->hint('max image dimension 150px * 150px')
                    ->label(__('developed buildings'))->collection('developed_buildings'),

                TextInput::make('developing_buildings')->label(__('developing buildings')),

                SpatieMediaLibraryFileUpload::make('developing_buildings_image')
                    ->hint('max image dimension 150px * 150px')
                    ->label(__('developing buildings'))->collection('developing_buildings'),

                TextInput::make('investments')->label(__('investments'))
                    ->numeric(),

                SpatieMediaLibraryFileUpload::make('investments_image')
                    ->hint('max image dimension 150px * 150px')
                    ->label(__('investments'))->collection('investments'),

                TextInput::make('gtm_id')
                    ->label('Google Tag Manager ID')
                    ->placeholder('GTM-XXXXXXX')
                    ->maxLength(50),

                TextInput::make('whatsapp_number')
                    ->label('WhatsApp Number')
                    ->tel()
                    ->placeholder('9665xxxxxxxx')
                    ->maxLength(20),

            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([

                TextColumn::make('phone')->label(__('phone')),
                TextColumn::make('fax')->label(__('fax')),
                TextColumn::make('email')->label(__('email')),
                TextColumn::make('convert')->label(__('convert')),
                TextColumn::make('experience')->label(__('experience')),
                TextColumn::make('project')->label(__('projects number')),
                TextColumn::make('companies')->label(__('companies number')),
                TextColumn::make('developed_buildings')->label(__('developed buildings')),
                TextColumn::make('developing_buildings')->label(__('developing buildings')),
                TextColumn::make('gtm_id')->label(__('Google Tag Manager ID')),
                TextColumn::make('whatsapp_number')->label(__('WhatsApp Number')),

            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                //                Tables\Actions\DeleteBulkAction::make(),
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
            'index' => Pages\ListSettings::route('/'),
            //            'create' => Pages\CreateSetting::route('/create'),
            'edit' => Pages\EditSetting::route('/{record}/edit'),
        ];
    }

    public static function getTranslatableLocales(): array
    {
        return ['en', 'ar'];
    }

    protected static function getNavigationGroup(): ?string
    {
        return __('Settings');
    }

    public static function getLabel(): ?string
    {
        return __('Settings');
    }

    public static function getPluralLabel(): ?string
    {
        return __('Settings');
    }

    public static function canCreate(): bool
    {
        return false;
    }

    protected static function getNavigationBadge(): ?string
    {
        return self::getModel()::count();
    }
}
