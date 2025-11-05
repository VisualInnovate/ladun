<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>New connection</title>
</head>
<body>
    <h2>A new connection has been created</h2>
    <p><strong>First name:</strong> {{ $contact->first_name ?? '' }}</p>
    <p><strong>Last name:</strong> {{ $contact->last_name ?? '' }}</p>
    <p><strong>Mail:</strong> {{ $contact->email ?? '' }}</p>
    <p><strong>Phone:</strong> {{ $contact->phone ?? '' }}</p>
    <p><strong>Project name:</strong> {{ $contact->message ?? '' }}</p>
    <p><strong>Ownership:</strong> {{ $contact->ownership ?? '' }}</p>
    <p><strong>Area:</strong> {{ $contact->area ?? '' }}</p>
</body>
</html>