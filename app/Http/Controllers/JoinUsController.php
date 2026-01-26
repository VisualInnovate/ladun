<?php

namespace App\Http\Controllers;

use App\Http\Requests\JoinUsRequest;
use App\Mail\NewJobApplicationCreated;
use App\Models\JoinUs;
use Illuminate\Support\Facades\Mail;

class JoinUsController extends Controller
{
    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function store(JoinUsRequest $request)
    {
        $joinUs = JoinUs::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'gender' => $request->gender,
            'qualification' => $request->qualification,
            'specialization' => $request->specialization,
            'jop' => $request->jop]
        );
        $joinUs->addMedia($request->cv)->toMediaCollection('join');

        // Send email with current locale
        $locale = $request->input('locale', $request->header('Accept-Language', 'ar'));
        // Extract primary language if header contains multiple languages
        $locale = explode(',', $locale)[0];
        $locale = explode('-', $locale)[0]; // Get 'en' from 'en-US'
        $locale = in_array($locale, ['ar', 'en']) ? $locale : 'ar';
        
        Mail::send(new NewJobApplicationCreated($joinUs, $locale));

        return response([
            'message' => 'success',
            'status' => '200',
            'joinUsData' => JoinUs::with('media')->get(),
        ]);
    }

    public function index()
    {
        return response([
            'joinUs' => JoinUs::with('media')->get(),
        ]);
    }
}
