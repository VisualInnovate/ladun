<?php

namespace App\Http\Resources;

use App\Models\Project;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        // return parent::toArray($request);
        return [
           'id' => $this->id,
           'title' => [
            'en' => $this->getTranslation('name', 'en'),
            'ar' => $this->getTranslation('name', 'ar'),
           ],
           'phone' => $this->phone,
           'email' => $this->email,
           'address' => [
            'en' => $this->getTranslation('address', 'en'),
            'ar' => $this->getTranslation('address', 'ar'),
           ],
           'text' => [
            'en' => $this->getTranslation('content', 'en'),
            'ar' => $this->getTranslation('content', 'ar'),
           ],
            'type' => [
            'en' => $this->getTranslation('type', 'en'),
            'ar' => $this->getTranslation('type', 'ar'),
           ],
           'land_area' => $this->Land_area,
           'building_area' => $this->building_area,
           'units_number' => $this->units_number,
           'unit_type' => [
               'en' => $this->getTranslation('unit_type', 'en'),
               'ar' => $this->getTranslation('unit_type', 'ar'),
           ],
           'models_number' => $this->models_number,
           'number' => $this->number,
           'project_models' => $this->projectModelsWithUtilities,
           'location' => $this->location,
            'facilities'=>$this->facilities,
            'commercial'=>$this->commercial,
            'investment'=>$this->investment,
            'government'=>$this->government,
            'educational'=>$this->educational,
            'trade'=>$this->trade,
            'gardens'=>$this->gardens,
            'mosque'=>$this->mosque,
            'video'=>$this->mediable,
            'project_video'=>$this->mediable360,
           'utilities' => $this->utilities->map(function($util){
            return [
                'id' => $util->id,
                'title' => $util->title,
                'image' => $util->media()->first(),
            ];
           }),
            'services' => $this->services->map(function($util){
            return [
                'id' => $util->id,
                'title' => [
                    'en' => $util->getTranslation('title', 'en'),
                    'ar' => $util->getTranslation('title', 'ar'),
                ],
                'image' => $util->media()->first(),
            ];
           }),
           'gallery' => $this->getMedia('attachments'),

           'banner' => $this->getMedia('banner'),
           'logo' => $this->getMedia('projects')->first(),
           'download_image' => $this->getMedia('download_image')->first(),
           'partner_image' => $this->getMedia('project_partners'),
           'downloads_text' => [
               'en' => $this->getTranslation('downloads_text', 'en'),
               'ar' => $this->getTranslation('downloads_text', 'ar'),
           ],
           'attachment' => env('APP_URL').'/storage/'.$this->attachment,
           'downloads' => $this->downloads,
           'department' => $this->region->department,
           'phases' => $this->phases,
           'created_at' => $this->created_at,
        ];
    }
}
