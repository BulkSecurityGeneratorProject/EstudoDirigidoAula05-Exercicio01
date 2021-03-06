import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BlogSharedModule } from 'app/shared';
import {
    DisciplinaComponent,
    DisciplinaDetailComponent,
    DisciplinaUpdateComponent,
    DisciplinaDeletePopupComponent,
    DisciplinaDeleteDialogComponent,
    disciplinaRoute,
    disciplinaPopupRoute
} from './';

const ENTITY_STATES = [...disciplinaRoute, ...disciplinaPopupRoute];

@NgModule({
    imports: [BlogSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        DisciplinaComponent,
        DisciplinaDetailComponent,
        DisciplinaUpdateComponent,
        DisciplinaDeleteDialogComponent,
        DisciplinaDeletePopupComponent
    ],
    entryComponents: [DisciplinaComponent, DisciplinaUpdateComponent, DisciplinaDeleteDialogComponent, DisciplinaDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlogDisciplinaModule {}
