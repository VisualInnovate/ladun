<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class NewJobApplicationCreated extends Mailable
{
    use Queueable, SerializesModels;

    public $joinUs;

    public $locale;

    public function __construct($joinUs, $locale = 'ar')
    {
        $this->joinUs = $joinUs;
        $this->locale = $locale;
    }

    public function build()
    {
        $mail = $this->to('career@ladun.sa')
            ->subject('New Job Application - '.$this->joinUs->name)
            ->view('emails.new-job-application')
            ->with(['locale' => $this->locale]);

        $media = $this->joinUs->getFirstMedia('join');
        if ($media) {
            $mail->attach($media->getPath(), [
                'as' => $media->file_name,
                'mime' => $media->mime_type,
            ]);
        }

        return $mail;
    }
}
