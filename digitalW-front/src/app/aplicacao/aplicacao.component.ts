import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-aplicacao',
    templateUrl: './aplicacao.component.html',
    styleUrls: ['./aplicacao.component.css']
})
export class AplicacaoComponent implements OnInit {
    status = true;
    constructor(private router: Router) { }

    ngOnInit() {
    }

    changeClassSidenav() {
      this.status = !this.status;
    }

    logout() {
        this.router.navigate(['/login']);
    }
}
