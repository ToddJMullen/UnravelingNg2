import {Pipe, PipeTransform} from "@angular/core";

import {DiveLogEntry} from "./dive-log-entry";

@Pipe({name: "diveData"})
export class DiveDataPipe
    implements PipeTransform{
    transform( dive:DiveLogEntry, separator:any = " | " ):string{
        if( dive && dive.depth && dive.time ){
            return `${dive.depth}'${separator}${dive.time} m`
        }
        return "(no data / data missing)";
    }
}

