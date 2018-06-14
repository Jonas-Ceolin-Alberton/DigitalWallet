import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    NoopAnimationsModule,
    FormsModule,
    MatSidenavModule
  ],
  declarations: [
  ],
  exports: [
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    NoopAnimationsModule,
    FormsModule,
    MatSidenavModule
  ]
})
export class MaterialModule { }
