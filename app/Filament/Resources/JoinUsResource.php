<?php

namespace App\Filament\Resources;

use App\Filament\Resources\JoinUsResource\Pages;
use App\Filament\Resources\JoinUsResource\RelationManagers;
use App\Models\JoinUs;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;
use Filament\Tables\Columns\SpatieMediaLibraryImageColumn;
use Filament\Tables\Columns\TextColumn;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class JoinUsResource extends Resource
{
    protected static ?string $model = JoinUs::class;

    protected static ?string $navigationIcon = 'heroicon-o-collection';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                //
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns(
                [
                    TextColumn::make('name')->label(__('name')),
                    TextColumn::make('email')->label(__('email')),
                    TextColumn::make('phone')->label(__('phone')),
                    TextColumn::make('gender')->label(__('gender')),
                    TextColumn::make('qualification')->label(__('qualification')),
                    TextColumn::make('specialization')->label(__('specialization')),
                    TextColumn::make('jop')->label(__('jop')),



                    TextColumn::make('created_at')->label(__('created_at'))->dateTime(),

                    SpatieMediaLibraryImageColumn::make('join')->label(__('attachments'))->collection('join'),

                ]
            )
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\DeleteAction::make(),
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
            'index' => Pages\ListJoinUs::route('/'),

        ];
    }

    protected static function getNavigationGroup(): ?string
    {
        return __('Join Us');
    }

    public static function getLabel(): ?string
    {
        return __('Join Us');
    }

    public static function getPluralLabel(): ?string
    {
        return __('Join Us');
    }
}
