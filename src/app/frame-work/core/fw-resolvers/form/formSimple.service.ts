import { BForm } from './bForm';
import { IFormSimple } from '../../fw-interfaces/form/iFormSimple';

import { Injectable } from '@angular/core';
import { fwFormGroup } from 'src/app/frame-work/services/fw-custome/fw-form-group';
import { fwFormControl } from 'src/app/frame-work/services/fw-custome/fw-form-control';
import { BaseHttpApiService } from '../../operation-service.ts/base-service/base-http-api.service';
import { HttpFormService } from '../../operation-service.ts/http-form.service';
import { Employee } from 'src/app/frame-work/models/entities/employee';
import { IBaseVm } from 'src/app/frame-work/models/entities/base-entity';

@Injectable({
    providedIn: 'root'
})

export class FormSimpleSevice extends BForm implements IFormSimple {
    private _infoPanel : fwFormGroup;
    private _fieldPanel : fwFormGroup;
    public baseVm!: IBaseVm;

    public get infoPanel() : fwFormGroup {
        return this._infoPanel;        
    }

    public set infoPanel(v : fwFormGroup) {
        this._infoPanel = v;
    }

    public get fieldPanel() : fwFormGroup {
        return this._fieldPanel;
    }

    public set fieldPanel(v : fwFormGroup) {
        this._fieldPanel = v;
    }
    
    constructor(private httpFormService: HttpFormService) {
        super();
        this._infoPanel = new fwFormGroup();
        this._fieldPanel = new fwFormGroup();
    }

    test(): void {
        this.httpFormService.Insert(this.baseVm).subscribe()
    }

    setInfoPanel(aryFormCntrl: fwFormControl[], stylePnl: StylePanel): void {
        this.infoPanel.stylePanel = stylePnl;
        aryFormCntrl.forEach(p => {
            this.infoPanel.setControl('', p );
        });
    }

    setFieldPanel(aryFormCntrl: fwFormControl[], stylePnl: StylePanel): void {
        this.fieldPanel.stylePanel = stylePnl;
        aryFormCntrl.forEach(p => {
            this.fieldPanel.setControl('', p);
        });
    }

    getObjectFormSimple(): fwFormGroup {
        this._fwForm.setControl('', this.infoPanel);
        this._fwForm.setControl('', this.fieldPanel);
        const instanceForm = JSON.parse(JSON.stringify(this._fwForm));
        
        return instanceForm;
    }    

    override setFormProperty(caption: string, displayTyp: DisplayType): void {
        this._fwForm.caption = caption;
        this._fwForm.displayType = displayTyp;
    }

    override setToolbar(aryButtons: ToolbarButtons []): void {
        this._fwForm.toolbarBtn = aryButtons
    }

    override insert(fn: Function, callback: Function): void {
        //
        // فقط اجرا کننده یک تابع آبزرور
        // فقط اجرا کننده یک تابع کال بک
    };     


}