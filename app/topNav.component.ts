import {Component} from '@angular/core';
import {AppComponent} from './app.component';
import {DND_PROVIDERS, DND_DIRECTIVES} from 'ng2-dnd/ng2-dnd';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {GridBlock} from './gridBlock.component';
import {gridElem} from './gridElem';
import {textModule} from './textModule';

@Component({
    selector: 'top-navigation',
    templateUrl: 'app/topNav.component.html',
    directives: [DND_DIRECTIVES, GridBlock]
})

export class TopNavComponent {
    gridElements:Array<gridElem> = [new gridElem(4,1,new textModule(1,'text-module','<h1>Text Field 1</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p>')), new gridElem(4,2,new textModule(1,'text-module','<h1>Text Field 2</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p>')), new gridElem(4,3,new textModule(1,'text-module','<h1>Text Field 3</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p>'))];
    id:number= 3;
    addGridElement(dim:number) {
        this.gridElements.push(new gridElem(dim,this.id+1,0));
        this.id = this.id+1;
    }
}
