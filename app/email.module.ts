import { Component } from '@angular/core';
import {AppComponent} from './app.component';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {GridBlock} from './gridBlock.component';
import {bgColorModule} from './bgColor.module';
declare var $: any;

@Component({
  selector: 'email-module',
  templateUrl: 'app/email.module.html',
  styleUrls: ['app/email.module.css'],
  directives: [bgColorModule],
  inputs: ['gE']

})

export class EmailModule {
    email;
    deleteEmailModule(gE) {
        gE.moduleType = {};
    }
    updateEmail(gE) {
        gE.moduleType.email = this.email;
    }
    updateEmailContent(gE) {
        $(document).off('click','.editable-email-content').on('click','.editable-email-content',function(){
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
