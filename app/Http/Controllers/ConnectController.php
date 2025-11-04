<?php

namespace App\Http\Controllers;

use App\Models\Connect;
use Illuminate\Http\Request;

class ConnectController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'first_name' => 'required|string|max:100',
            'last_name' => 'required|string|max:100',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'ownership' => 'required|string|max:255',
            'area' => 'required|string|max:255',
            'message' => 'required|string|max:500',
        ]);

        $connect = Connect::create($validated);


        return response()->json(['message' => 'Connect request submitted successfully.', 'data' => $connect], 200);
    }
}
