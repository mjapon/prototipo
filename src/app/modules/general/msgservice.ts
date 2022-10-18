import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class MyMsgService {

    private bsource = new BehaviorSubject('empty');
    public source = this.bsource.asObservable();

    publishMessage(message:string){
        this.bsource.next(message);
    }

 }