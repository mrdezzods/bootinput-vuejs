Vue.component('boot-input', {
    template: '<div v-bind:class="{\'has-error\':error.length>0}" class="form-group"><label v-if="label" class="control-label">{{ label }}</label><input :type="type" class="form-control" v-model="model" :value="value" :placeholder="placeholder"/><p class="help-block">{{ error[0] }}</p></div>',
    props: ['model', 'type', 'value', 'error', 'label','placeholder'],
    ready: function () {
        this.error = [];
    }
});


Vue.component('boot-textarea', {
    template: '<div v-bind:class="{\'has-error\':error.length>0}" class="form-group"><label v-if="label" class="control-label">{{ label }}</label><textarea class="form-control" rows="3" cols="30" v-model="model" :value="value" :placeholder="placeholder"/><p class="help-block">{{ error[0] }}</p></div>',
    props: ['model', 'value', 'error', 'label','placeholder'],
    ready: function () {
        this.error = [];
    }
});

Vue.component('boot-select', {
    template: '<div v-bind:class="{\'has-error\':error.length>0}" class="form-group"><label  v-if="label" class="control-label">{{ label }}</label><select class="form-control" v-model="model"><option v-if="placeholder" value=''>{{ placeholder }}</option><option v-for="(key,option) in options" value="{{key}}">{{option}}</option></select><p class="help-block">{{ error[0] }}</p></div>',
    props: ['model', 'value', 'error', 'label','options','placeholder'],
    ready: function () {
        this.error = [];
    }
});



Vue.component('boot-checkbox', {
    template: '<div v-bind:class="{\'has-error\':error.length>0}" class="form-group"><label><input type="checkbox" v-model="model" :value="value" /> {{ label }}</label><p class="help-block">{{ error[0] }}</p></div>',
    props: ['model', 'value', 'error', 'label'],
    ready: function () {
        this.error = [];
    }
});
