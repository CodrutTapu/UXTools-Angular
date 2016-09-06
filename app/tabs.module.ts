import { Component, Input } from '@angular/core';
import {AppComponent} from './app.component';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {GridBlock} from './gridBlock.component';
import {tabsItem} from './tabsItem';
import {bgColorModule} from './bgColor.module';
declare var $: any;

@Component({
  selector: 'tabs-module',
  templateUrl: 'app/tabs.module.html',
  styleUrls: ['app/tabs.module.css'],
  directives: [bgColorModule],
  inputs: ['gE']

})
export class TabsModule {
    i:number = 4;
    deleteTabsModule(gE) {
        gE.moduleType = {};
    }
    addTabsItem(gE) {
        gE.moduleType.items.push(new tabsItem('item' + this.i,'<p>New Tab</p>','<p>Nulla condimentum finibus massa, sit amet viverra purus luctus ac. Fusce ut erat sapien new.</p>'));
        this.i++;
    }
    deleteTabsItem(gE,item) {
        gE.moduleType.items.splice(gE.moduleType.items.indexOf(item), 1);
    }
    updateTabsItemContent(item) {
        $(document).off('click','.editable-tabs-item-content').on('click','.editable-tabs-item-content',function(){
            $(this).summernote({
                toolbar: [
                    ['all', ['style','fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough','clear', 'paragraph', 'hr', 'ol', 'ul', 'picture', 'video', 'link', 'codeview', 'table', 'undo']]
                ],
                disableDragAndDrop: true,
                callbacks: {
                    onChange: function(contents, $editable) {
                      item.content = contents;
                    }
                }
            });
        });
    }
    updateTabsItemTitle(item) {
        $(document).off('click','.editable-tabs-item-title').on('click','.editable-tabs-item-title',function(){
            $(this).summernote({
                toolbar: [
                    ['all', ['style','fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough','clear', 'paragraph', 'hr', 'ol', 'ul', 'picture', 'video', 'link', 'codeview', 'table', 'undo']]
                ],
                disableDragAndDrop: true,
                callbacks: {
                    onChange: function(contents, $editable) {
                      item.content = contents;
                    }
                }
            });
        });
    }
}
