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
           'title' => $this->name,
           'phone' => $this->phone,
           'email' => $this->email,
           'address' => $this->address,
           'text' => $this->content,
           'Land_area' => $this->Land_area,
           'building_area' => $this->building_area,
           'units_number' => $this->units_number,
           'models_number' => $this->models_number,
           'project_models' => $this->project_models,
           'location' => $this->location,
           'utilities' => $this->utilities,
           'gallery' => $this->getMedia('default'),
           'logo' => $this->getMedia('projects')->first(),
           'downloads' => $this->downloads,
        ];
    }
}
