// Keep the Input import for now, we'll remove it later:
import {Component, Input, Output, EventEmitter} from '@angular/core';
 

//import { ActivatedRoute, Params }   from '@angular/router';
//import { Location }                 from '@angular/common';
//import { Hero }                 from './hero';
//import { HeroService } from './hero.service';

@Component({
   moduleId: module.id,
   selector: 'my-home',
   templateUrl: 'home.component.html',
   //styleUrls: [ 'heroes.component.css' ],
   // providers: [HeroService] 
})
export class HomeComponent {
    @Input() mydate: Date= new Date();
      today: number = Date.now();
      date: Date;
    date2: Date = new Date(2016, 5, 10);
    date3: Date;
    date4: Date;
    datepickerOpts: any = {
        startDate: new Date(2016, 5, 10),
        autoclose: true,
        todayBtn: 'linked',
        todayHighlight: true,
        assumeNearbyYear: true,
        format: 'D, d MM yyyy'
    };
    date5: Date = new Date();
    dateFrom: Date;
    dateTo: Date;
    datepickerToOpts: any = {};

    handleDateFromChange(dateFrom) {
        // update the model
        this.dateFrom = dateFrom;

        // do not mutate the object or angular won't detect the changes
        this.datepickerToOpts = {
            startDate: dateFrom
        };
    }

    getDate(dt): number {
        return dt && dt.getTime();
    }
}