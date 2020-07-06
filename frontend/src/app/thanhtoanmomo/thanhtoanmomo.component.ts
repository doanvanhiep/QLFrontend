import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({
    selector: 'app-thanhtoanmomo',
    templateUrl: './thanhtoanmomo.component.html',
    styleUrls: ['./thanhtoanmomo.component.css']
})
export class ThanhtoanmomoComponent implements OnInit {
    thanhcong:boolean=false;
    thatbai:boolean=false;
    constructor(private activatedRoute: ActivatedRoute) {
        this.activatedRoute.queryParams.subscribe(params => {
            let status = params['message'];
            if(status==="Success")
            {
                this.thanhcong=true;
                this.thatbai=false;
            }
            else
            {
                this.thanhcong=false;
                this.thatbai=true;
            }
        });
    }

    ngOnInit() {

    }

}
