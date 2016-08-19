import { Component } from '@angular/core';
import {AppComponent} from './app.component';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {GridBlock} from './gridBlock.component';
declare var $: any;

@Component({
  selector: 'text-module',
  templateUrl: 'app/text.module.html',
  inputs: ['gE']

})
export class TextModule {
    deleteTextModule(gE) {
        gE.moduleType = {};
    }
    updateTextModule(gE) {
        $(document).off('click','.editable-text-content').on('click','.editable-text-content',function(){
            $(this).summernote({
                toolbar: [
                    ['all', ['style','fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough','clear', 'paragraph', 'hr', 'ol', 'ul', 'picture', 'video', 'link', 'codeview', 'table', 'undo']]
                ],
                disableDragAndDrop: true,
                callbacks: {
                    onChange: function(contents, $editable) {
                      gE.moduleType.content = contents;
                    }
                }
            });
        });
    }
}
