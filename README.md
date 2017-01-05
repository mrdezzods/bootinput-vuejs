# bootinput
Bootstrap input components for vuejs with validation, and form-group cascade
to use with Laravel

### This should be compatible with all versions of laravel and with vue ^1.0

## How to use this package?

**Install with npm:**
```npm install bootinput --save```

or just download the package and link the javascript file after your vuejs file.

##Components

**NOTE***errors should be an array of errors*   
eg: ```errors = {name:["Name cannot be empty."]}```

1. `boot-input`: `model,type,value,error,label`  
eg: `<boot-input type="text" :model.sync="name" :error="errors.name" label="Name"></boot-input>`


2. `boot-textarea`: `model,value,error,label`  
eg: `<boot-textarea :model.sync="description" :error="errors.description" label="Description"></boot-textarea>`



3. `boot-select`: `model,value,error,label,options`  
eg: `<boot-select :options="{'male':'Male','female':'Female','other':'Other'}" :model.sync="gender" :error="errors.gender" label="Gender"></boot-select>`


4. `boot-checkbox`: `model,value,error,label`  
eg: `<boot-checkbox :model.sync="newsletter" :error="errors.newsletter" label="Newsletter"></boot-input>`


