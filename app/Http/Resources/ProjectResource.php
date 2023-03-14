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
           'Land_area' => $this->Land_area,
           'building_area' => $this->building_area,
           'units_number' => $this->units_number,
           'models_number' => $this->models_number,
           'project_models' => $this->projectModelsWithUtilities,
           'location' => $this->location,
           'utilities' => $this->utilities,
           'gallery' => $this->getMedia('default'),
           'logo' => $this->getMedia('projects')->first(),
           'downloads' => $this->downloads,
        ];
    }
}
