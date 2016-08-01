# bootinput
Bootstrap input components for vuejs with validation, and form-group cascade

## How to use this package?

--> Install with npm:
`npm install bootinput --save`

Or just download the package and link the javascript file after your vuejs file.

## Components

<p><b>Note: </b> error value should be an array of errors. eg: errors = {name:["Name cannot be empty."]}

1. `boot-input`: <br>
`model,type,value,error,label` <br>
eg: `<boot-input type="text" :model.sync="name" :error="errors.name" label="Name"></boot-input>`

2. `boot-textarea`: </br>
`model,value,error,label`<br>
eg: `<boot-textarea :model.sync="description" :error="errors.description" label="Description"></boot-textarea>`

3. `boot-select`: <br>
`model,value,error,label,options`<br>
eg: `<boot-select :options="{'male':'Male','female':'Female','other':'Other'}" :model.sync="gender" :error="errors.gender" label="Gender"></boot-select>`

4. `boot-checkbox`: <br>
`model,value,error,label`<br>
eg: `<boot-checkbox :model.sync="newsletter" :error="errors.newsletter" label="Newsletter"></boot-input>`


