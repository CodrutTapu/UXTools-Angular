import { Component, Input } from '@angular/core';
import {AppComponent} from './app.component';
import {bootstrap} from '@angular/platform-browser-dynamic';
declare var $: any;

@Component({
  selector: 'devices-platforms-module',
  templateUrl: 'app/devices-platforms.module.html',
  styleUrls: ['app/devices-platforms.module.css'],
  inputs: ['gE']

})
export class DevicesPlatformsModule {
    ngOnInit() {
        setTimeout(function(){
            $('[data-toggle="tooltip"]').tooltip()
        }, 500);

    }
    deleteDevicesPlatformsModule(option) {
        option.status = {};
    }
    switchDevicePlatformItemStatus(dp) {
        dp.status = !dp.status;
        setTimeout(function(){
            $('[data-toggle="tooltip"]').tooltip()
        }, 500);
    }
}
