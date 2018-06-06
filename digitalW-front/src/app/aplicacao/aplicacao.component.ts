import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-aplicacao',
    templateUrl: './aplicacao.component.html',
    styleUrls: ['./aplicacao.component.css']
})
export class AplicacaoComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    changeClassSidenav() {
        document.getElementById("sidenav").classList.remove("sidenav-close");
        document.getElementById("sidenav").classList.add("sidenav-open");
    }

}
