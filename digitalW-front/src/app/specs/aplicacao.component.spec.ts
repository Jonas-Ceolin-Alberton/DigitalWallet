import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AplicacaoComponent } from '../aplicacao/aplicacao.component';
import { MaterialModule } from '../material-module/material.module';


describe('AplicacaoComponent', () => {
    let component: AplicacaoComponent;
    let fixture: ComponentFixture<AplicacaoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AplicacaoComponent,
            ],
            imports: [
                MaterialModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AplicacaoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    fit('should create', () => {
        expect(component).toBeTruthy();
    });
});
