import {Component} from '@angular/core';
import {AppComponent} from './app.component';
import {DND_PROVIDERS, DND_DIRECTIVES} from 'ng2-dnd/ng2-dnd';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {GridBlock} from './gridBlock.component';
import {gridElem} from './gridElem';
import {textModule} from './textModule';
import {HTTTPService} from './http.service';

@Component({
    selector: 'top-navigation',
    templateUrl: 'app/topNav.component.html',
    directives: [DND_DIRECTIVES, GridBlock],
    providers: [HTTTPService]
})

export class TopNavComponent {
    gridElements:Array<gridElem> = [new gridElem(4,1,new textModule(1,'text-module','<h1>Text Field 1</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p>')), new gridElem(4,2,new textModule(1,'text-module','<h1>Text Field 2</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p>')), new gridElem(4,3,new textModule(1,'text-module','<h1>Text Field 3</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p>'))];
    id:number= 3;
    addGridElement(dim:number) {
        this.gridElements.push(new gridElem(dim,this.id+1,0));
        this.id = this.id+1;
    }
    getData: string;
    postData: string;

    constructor (private _httpService: HTTTPService) {}

    httpGet(gridElements) {
        this._httpService.getJSON()
            .subscribe(
                data => this.gridElements = data,
                error => alert(Error),
                    () => console.log('Finish!')
            );
    }
    httpPost(gridElements) {
        this._httpService.postJSON(gridElements)
            .subscribe(
                data => this.postData = data,
                error => alert(Error),
                    () => console.log('Finish!')
            );
    }
}
