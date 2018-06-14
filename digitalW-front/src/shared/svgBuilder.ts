import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Inject } from '@angular/core';

export class BuilderSvgIcons {
    constructor(@Inject( MatIconRegistry) iconReg, @Inject(DomSanitizer) sanitizer ) {
        iconReg
        .addSvgIcon('menu', sanitizer.bypassSecurityTrustResourceUrl('assets/icones/menu.svg'))
 
    }
}