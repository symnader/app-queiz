import { BForm } from './bForm';
import { IFormReport } from '../../fw-interfaces/form/iFormReport';

import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})

export class FormReportService extends BForm implements IFormReport {
    setSummeryPanel(): any {};
    setFilterPanel(): any {};
    setResultPanel(): any {}; 

    override setFormProperty(caption: string, displayTyp: DisplayType): void {};
    override setToolbar(): any {};

}

