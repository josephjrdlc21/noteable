<?php

namespace App\Http\Requests\Admin;

use App\Http\Requests\RequestManager;

class UserRequest extends RequestManager
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $id = $this->id ?? 0;

        $rules = [
            'name' => "required",
            'email' => "required|email:rfc,dns|unique_email:{$id},admin",
        ];

        return $rules;
    }

    public function messages(): array
    {
        return [
            'required' => "Field is required.",
            'email.email' => "Invalid email address.",
            'email.unique_email' => "Email address is already used.",
        ];
    }
}
