import { Component, Input } from '@angular/core';
import {AppComponent} from './app.component';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {aboutItem} from './aboutItem';
import {bgColorModule} from './bgColor.module';
declare var $: any;

@Component({
  selector: 'counting-module',
  templateUrl: 'app/counting.module.html',
  styleUrls: ['app/counting.module.css'],
  directives: [bgColorModule],
  inputs: ['gE']

})
export class CountingModule {
    deleteCountingModule(gE) {
        gE.moduleType = {};
    }
    updatePrefix(gE) {
        $(document).off('click','.editable-prefix').on('click','.editable-prefix',function(){
            $(this).summernote({
                toolbar: [
                    ['all', ['style','fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough','clear', 'paragraph', 'hr', 'ol', 'ul', 'picture', 'video', 'link', 'codeview', 'table', 'undo']]
                ],
                disableDragAndDrop: true,
                callbacks: {
                    onChange: function(contents, $editable) {
                      gE.moduleType.content[0] = contents;
                    }
                }
            });
        });
    }
}
