<?php

namespace App\Http\Controllers;

use App\Models\Connect;
use Illuminate\Http\Request;
use App\Mail\NewContactCreated;
use Illuminate\Support\Facades\Mail;

class ConnectController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'first_name' => 'required|string|max:100',
            'last_name' => 'required|string|max:100',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'ownership' => 'nullable|string|max:255',
            'area' => 'nullable|string|max:255',
            'message' => 'required|string|max:500',
        ]);

        $connect = Connect::create($validated);

        Mail::send(new NewContactCreated($connect));


        return response()->json(['message' => 'Connect request submitted successfully.', 'data' => $connect], 200);
    }
}
