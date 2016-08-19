import { Component } from '@angular/core';
import {AppComponent} from './app.component';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {GridBlock} from './gridBlock.component';
import {tagModuleTag} from './tagModuleTag';
declare var $: any;

@Component({
  selector: 'tag-module',
  templateUrl: 'app/tag.module.html',
  inputs: ['gE']

})
export class TagModule {
    deleteTagModule(gE) {
        gE.moduleType = {};
    }
    addTag(gE) {
        gE.moduleType.tags.push(new tagModuleTag('<p>New Tag</p>'));
    }
    deleteTag(gE,tag) {
        gE.moduleType.tags.splice(gE.moduleType.tags.indexOf(tag), 1);
    }
    updateTag(tag) {
        $(document).off('click','.editable-tag').on('click','.editable-tag',function(){
            $(this).summernote({
                toolbar: [
                    ['all', ['style','fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough','clear', 'paragraph', 'hr', 'ol', 'ul', 'picture', 'video', 'link', 'codeview', 'table', 'undo']]
                ],
                disableDragAndDrop: true,
                callbacks: {
                    onChange: function(contents, $editable) {
                      tag.name = contents;
                    }
                }
            });
        });

    }
}
