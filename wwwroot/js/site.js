// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(function() {
    Vue.component('icon-object', {
        props: ['title', 'icon', 'body'],
        template: '' +
            '<div class="media-container col-xs-12 col-sm-6">' +
            '    <div class="media">' +
            '        <i :class="icon" class="fa-4x mr-3"></i>' +
            '        <div class="media-body"> ' +
            '            <h3 class="mt-0">{{ title }}</h3>' +
            '            <p>{{ body }}</p>' +
            '        </div>' +
            '    </div>' +
            '</div>'
    });
    new Vue({
        el: '#icon-container'
    });
});
