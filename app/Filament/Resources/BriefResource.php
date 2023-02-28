<?php

namespace App\Filament\Resources;

use App\Filament\Resources\BriefResource\Pages;
use App\Filament\Resources\BriefResource\RelationManagers;
use App\Models\Brief;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\Card;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;
use Filament\Tables\Columns\SpatieMediaLibraryImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Resources\Concerns\Translatable;

class BriefResource extends Resource
{
    use Translatable;
    protected static ?string $model = Brief::class;

    protected static ?string $navigationIcon = 'heroicon-o-collection';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Card::make()
            ->schema([
                    TextInput::make('title')->required(),

                    RichEditor::make('content'),

                    SpatieMediaLibraryFileUpload::make('about')->collection('about')
                    ->multiple()
                    ->enableReordering(),
            ])


            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title'),
                TextColumn::make('content')->limit(50)->html(),
                TextColumn::make('created_at')->dateTime(),

            SpatieMediaLibraryImageColumn::make('about')->collection('about'),
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
            'index' => Pages\ListBriefs::route('/'),
            'create' => Pages\CreateBrief::route('/create'),
            'edit' => Pages\EditBrief::route('/{record}/edit'),
        ];
    }


    protected static function getNavigationGroup(): ?string
    {
        return __('About Ladun');
    }

    public static function getLabel(): ?string
    {
        return __('About us');
    }

    public static function getPluralLabel(): ?string
    {
        return __('About us');
    }

    public static function getNavigationSort(): ?int
    {
        return 0;
    }
}
