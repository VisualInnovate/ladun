<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAnnualReportsAuditCommitteesTable extends Migration
{
    public function up()
    {
        Schema::create('annual_reports_audit_committees', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description')->nullable();
            $table->date('report_date');
            $table->string('report_file')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('annual_reports_audit_committees');
    }
}

