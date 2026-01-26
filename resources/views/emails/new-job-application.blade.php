<!DOCTYPE html>
@php
    $isRtl = $locale === 'ar';
    $dir = $isRtl ? 'rtl' : 'ltr';
    $lang = $isRtl ? 'ar' : 'en';
    $borderSide = $isRtl ? 'border-right' : 'border-left';
@endphp
<html dir="{{ $dir }}" lang="{{ $lang }}">

<head>
    <meta charset="UTF-8">
    <title>{{ $isRtl ? 'طلب توظيف جديد' : 'New Job Application' }}</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            padding: 20px;
            direction:
                {{ $dir }}
            ;
            text-align:
                {{ $isRtl ? 'right' : 'left' }}
            ;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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
            {{ $isRtl ? 'border-right' : 'border-left' }}
            : 4px solid #c9a961;
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
            <h1>{{ $isRtl ? 'طلب توظيف جديد' : 'New Job Application' }}</h1>
            <span class="badge">{{ $joinUs->created_at->format('Y-m-d H:i') }}</span>
        </div>

        <div class="content">
            <div class="field">
                <div class="field-label">{{ $isRtl ? 'الاسم الكامل' : 'Full Name' }}</div>
                <div class="field-value">{{ $joinUs->name ?? ($isRtl ? 'غير محدد' : 'Not specified') }}</div>
            </div>

            <div class="field">
                <div class="field-label">{{ $isRtl ? 'البريد الإلكتروني' : 'Email' }}</div>
                <div class="field-value">{{ $joinUs->email ?? ($isRtl ? 'غير محدد' : 'Not specified') }}</div>
            </div>

            <div class="field">
                <div class="field-label">{{ $isRtl ? 'رقم الهاتف' : 'Phone' }}</div>
                <div class="field-value">{{ $joinUs->phone ?? ($isRtl ? 'غير محدد' : 'Not specified') }}</div>
            </div>

            <div class="field">
                <div class="field-label">{{ $isRtl ? 'الجنس' : 'Gender' }}</div>
                <div class="field-value">{{ $joinUs->gender ?? ($isRtl ? 'غير محدد' : 'Not specified') }}</div>
            </div>

            <div class="field">
                <div class="field-label">{{ $isRtl ? 'المؤهل العلمي' : 'Qualification' }}</div>
                <div class="field-value">{{ $joinUs->qualification ?? ($isRtl ? 'غير محدد' : 'Not specified') }}</div>
            </div>

            <div class="field">
                <div class="field-label">{{ $isRtl ? 'التخصص' : 'Specialization' }}</div>
                <div class="field-value">{{ $joinUs->specialization ?? ($isRtl ? 'غير محدد' : 'Not specified') }}</div>
            </div>

            <div class="field">
                <div class="field-label">{{ $isRtl ? 'المسمى الوظيفي' : 'Job Title' }}</div>
                <div class="field-value">{{ $joinUs->jop ?? ($isRtl ? 'غير محدد' : 'Not specified') }}</div>
            </div>
        </div>

        <div class="footer">
            <p>{{ $isRtl ? 'تم إرسال هذا البريد تلقائياً من موقع لدن' : 'This email was sent automatically from Ladun website' }}
            </p>
            <p>{{ $isRtl ? 'السيرة الذاتية مرفقة بهذا البريد' : 'The CV is attached to this email' }}</p>
        </div>
    </div>
</body>

</html>