<?php

namespace App\Filament\Resources;

use Filament\Forms;
use Filament\Tables;
use App\Models\Connect;
use Filament\Resources\Form;
use Filament\Resources\Table;
use Filament\Resources\Resource;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Textarea;
use Filament\Tables\Columns\TextColumn;
use Filament\Forms\Components\TextInput;
use Illuminate\Database\Eloquent\Builder;
use App\Filament\Resources\ConnectResource\Pages;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use App\Filament\Resources\ConnectResource\RelationManagers;

class ConnectResource extends Resource
{
    protected static ?string $model = Connect::class;

    protected static ?string $navigationIcon = 'heroicon-o-collection';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make('بيانات الاتصال')
                    ->description('أدخل تفاصيل الاتصال الخاصة بالعميل.')
                    ->schema([
                        TextInput::make('first_name')
                            ->label(__('First name'))
                            ->required()
                            ->maxLength(100),

                        TextInput::make('last_name')
                            ->label(__('Last name'))
                            ->required()
                            ->maxLength(100),

                        TextInput::make('email')
                            ->label(__('email'))
                            ->email()
                            ->required(),

                        TextInput::make('phone')
                            ->label(__('phone'))
                            ->tel()
                            ->required(),

                        TextInput::make('ownership')
                            ->label(__('Ownership'))
                            ->maxLength(255)
                            ->required(),

                        TextInput::make('area')
                            ->label(__('Region'))
                            ->maxLength(255),

                        TextInput::make('message')
                            ->label(__('Project name'))
                            ->maxLength(255),
                    ])
                    ->columns(2),
            ]);
    }


    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('id')->label(__('id'))->sortable(),
                TextColumn::make('first_name')->label(__('First name'))->searchable(),
                TextColumn::make('last_name')->label(__('Last name'))->searchable(),
                TextColumn::make('email')->label(__('email')),
                TextColumn::make('phone')->label(__('phone')),
                TextColumn::make('ownership')->label(__('Ownership')),
                TextColumn::make('area')->label(__('Region')),
                TextColumn::make('created_at')->label(__('created_at'))->dateTime()->sortable(),
            ])
            ->filters([]);
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
            'index' => Pages\ListConnects::route('/'),
            'create' => Pages\CreateConnect::route('/create'),
            'edit' => Pages\EditConnect::route('/{record}/edit'),
        ];
    }
}
