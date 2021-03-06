import { Component, Input } from '@angular/core';
import {AppComponent} from '../app.component';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {bgColorModule} from '../bgColor_component/bgColor.module';
declare var $: any;

@Component({
  selector: 'counting-module',
  templateUrl: 'app/counting_module/counting.module.html',
  styleUrls: ['app/counting_module/counting.module.css'],
  directives: [bgColorModule],
  inputs: ['gE']

})
export class CountingModule {
    deleteCountingModule(gE) {
        gE.moduleType = {};
    }
    updateCountingValue(gE) {
        $(document).off('click','.editable-counting-value').on('click','.editable-counting-value',function(){
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
            $(this).parent().find('.note-editable').css('background',gE.bgColor);
        });
    }
    updateCountingDescription(gE) {
        $(document).off('click','.editable-counting-description').on('click','.editable-counting-description',function(){
            $(this).summernote({
                toolbar: [
                    ['all', ['style','fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough','clear', 'paragraph', 'hr', 'ol', 'ul', 'picture', 'video', 'link', 'codeview', 'table', 'undo']]
                ],
                disableDragAndDrop: true,
                callbacks: {
                    onChange: function(contents, $editable) {
                      gE.moduleType.content[1] = contents;
                    }
                }
            });
            $(this).parent().find('.note-editable').css('background',gE.bgColor);
        });
    }
}
