import {Component} from '@angular/core';
import {AppComponent} from './app.component';
import {DND_PROVIDERS, DND_DIRECTIVES} from 'ng2-dnd/ng2-dnd';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {GridBlock} from './gridBlock.component';
import {gridElem} from './gridElem';
import {user} from './user';
import {persona} from './persona';
import {textModule} from './textModule';
import {HTTTPService} from './http.service';

@Component({
    selector: 'top-navigation',
    templateUrl: 'app/topNav.component.html',
    directives: [DND_DIRECTIVES, GridBlock],
    providers: [HTTTPService],
})

export class TopNavComponent {
    postData:string;
    currentUser:user = new user(99087,'John','Doe','johndoe@gmail.com','pa$$w0rd',[]);
    //gridElements:Array<gridElem> = [new gridElem(4,1,new textModule(1,'text-module','<h1>Text Field 1</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p>')), new gridElem(4,2,new textModule(1,'text-module','<h1>Text Field 2</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p>')), new gridElem(4,3,new textModule(1,'text-module','<h1>Text Field 3</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p>'))];
    gridElements:Array<gridElem> = [];
    id:number= 3;

    addPersona() {
        this.currentUser.documents.push(new persona('default-persona',[new gridElem(4,1,new textModule(1,'text-module','<h1>Text Field 1</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p>')), new gridElem(4,2,new textModule(1,'text-module','<h1>Text Field 2</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p>')), new gridElem(4,3,new textModule(1,'text-module','<h1>Text Field 3</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p>'))]));
        this.gridElements = this.currentUser.documents[0].content;
    }

    addGridElement(dim:number) {
        this.gridElements.push(new gridElem(dim,this.id+1,0));
        this.id = this.id+1;
    }

    constructor (private _httpService: HTTTPService) {}

    httpGet(currentUser) {
        this._httpService.getJSON()
            .subscribe(
                data => this.currentUser = data,
                error => alert(Error),
                    () => this.gridElements = this.currentUser[0].documents[0].content
            );
    }

    httpPost(currentUser) {
        this._httpService.postJSON(currentUser)
            .subscribe(
                data => this.postData = JSON.stringify(data),
                error => alert(Error),
                    () => console.log('Finish!')
            );
    }
}
