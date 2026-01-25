<!DOCTYPE html>
<html dir="rtl" lang="ar">
<head>
    <meta charset="UTF-8">
    <title>New Job Application</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            padding: 20px;
            direction: rtl;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #4a4a4a 0%, #2d2d2d 100%);
            color: #c9a961;
            padding: 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .content {
            padding: 30px;
        }
        .field {
            margin-bottom: 15px;
            padding: 15px;
            background-color: #f9f9f9;
            border-radius: 8px;
            border-right: 4px solid #c9a961;
        }
        .field-label {
            font-weight: bold;
            color: #4a4a4a;
            margin-bottom: 5px;
            font-size: 14px;
        }
        .field-value {
            color: #333;
            font-size: 16px;
        }
        .footer {
            background-color: #f5f5f5;
            padding: 20px;
            text-align: center;
            color: #888;
            font-size: 12px;
        }
        .badge {
            display: inline-block;
            padding: 5px 15px;
            background-color: #c9a961;
            color: #fff;
            border-radius: 20px;
            font-size: 12px;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Job Application</h1>
            <span class="badge">{{ $joinUs->created_at->format('Y-m-d H:i') }}</span>
        </div>
        
        <div class="content">
            <div class="field">
                <div class="field-label">Full Name</div>
                <div class="field-value">{{ $joinUs->name ?? 'Not specified' }}</div>
            </div>
            
            <div class="field">
                <div class="field-label">Email</div>
                <div class="field-value">{{ $joinUs->email ?? 'Not specified' }}</div>
            </div>
            
            <div class="field">
                <div class="field-label">Phone</div>
                <div class="field-value">{{ $joinUs->phone ?? 'Not specified' }}</div>
            </div>
            
            <div class="field">
                <div class="field-label">Gender</div>
                <div class="field-value">{{ $joinUs->gender ?? 'Not specified' }}</div>
            </div>
            
            <div class="field">
                <div class="field-label">Qualification</div>
                <div class="field-value">{{ $joinUs->qualification ?? 'Not specified' }}</div>
            </div>
            
            <div class="field">
                <div class="field-label">Specialization</div>
                <div class="field-value">{{ $joinUs->specialization ?? 'Not specified' }}</div>
            </div>
            
            <div class="field">
                <div class="field-label">Job Title</div>
                <div class="field-value">{{ $joinUs->jop ?? 'Not specified' }}</div>
            </div>
        </div>
        
        <div class="footer">
            <p>This email was sent automatically from Ladun website</p>
            <p>The CV is attached to this email</p>
        </div>
    </div>
</body>
</html>
