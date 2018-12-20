import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BlogSharedModule } from 'app/shared';
import {
    ProfessorComponent,
    ProfessorDetailComponent,
    ProfessorUpdateComponent,
    ProfessorDeletePopupComponent,
    ProfessorDeleteDialogComponent,
    professorRoute,
    professorPopupRoute
} from './';

const ENTITY_STATES = [...professorRoute, ...professorPopupRoute];

@NgModule({
    imports: [BlogSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        ProfessorComponent,
        ProfessorDetailComponent,
        ProfessorUpdateComponent,
        ProfessorDeleteDialogComponent,
        ProfessorDeletePopupComponent
    ],
    entryComponents: [ProfessorComponent, ProfessorUpdateComponent, ProfessorDeleteDialogComponent, ProfessorDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlogProfessorModule {}
