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
use Illuminate\Support\Str;
use Closure;


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
                    TextInput::make('title')->label(__('title'))->reactive()
                    ->afterStateUpdated(function (Closure $set, $state) {
                        $set('slug', Str::slug($state,'-'));
                    })->required(),

                    TextInput::make('slug')->label(__('slug'))->disabled(),

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
                TextColumn::make('title')->label('Title'),
                TextColumn::make('slug')->label(__('slug'))->limit('50'),
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

    public static function getTranslatableLocales(): array
    {
        return ['en', 'ar'];
    }
    protected static function getNavigationGroup(): ?string
    {
        return __('pages');
    }

    public static function getLabel(): ?string
    {
        return __('page');
    }

    public static function getPluralLabel(): ?string
    {
        return __('pages');
    }

    public static function getNavigationSort(): ?int
    {
        return 0;
    }
}
