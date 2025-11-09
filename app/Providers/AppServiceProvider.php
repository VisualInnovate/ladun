<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\URL;
use Spatie\MediaLibrary\MediaCollections\UrlGenerator;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // Force HTTPS in production
        if ($this->app->environment('production')) {
            URL::forceScheme('https');
        }

        // Ensure media URLs are generated with the correct scheme
        $this->app->bind(UrlGenerator::class, function () {
            $urlGenerator = new \Spatie\MediaLibrary\MediaCollections\UrlGenerator\DefaultUrlGenerator(config('filesystems'));
            $urlGenerator->setBaseUrl(config('app.url') . '/storage');
            return $urlGenerator;
        });
    }
}
