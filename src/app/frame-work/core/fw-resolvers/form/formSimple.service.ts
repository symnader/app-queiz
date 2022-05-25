import { BForm } from './bForm';
import { IFormSimple } from '../../fw-interfaces/form/iFormSimple';

import { Injectable } from '@angular/core';
import { fwFormGroup } from 'src/app/frame-work/services/fw-custome/fw-form-group';
import { fwFormControl } from 'src/app/frame-work/services/fw-custome/fw-form-control';
import { HttpFormService } from '../../operation-service.ts/http-form.service';
import { IBaseVm } from 'src/app/frame-work/models/entities/base-entity';


@Injectable({
    providedIn: 'root'
})

export class FormSimpleSevice extends BForm implements IFormSimple {

    private _infoPanel : fwFormGroup;
    private _fieldPanel : fwFormGroup;
    
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
        this._fwForm.toolbarBtn = aryButtons;
    }

    override insert(entity: IBaseVm, callback: Function): void {        
        this.httpFormService.Insert(entity).subscribe(p => {
            if (p) {
                callback();
            }
        });
    };

    override update(entity: IBaseVm, callback: Function): void {
        this.httpFormService.update(entity).subscribe(p => {
            if(p) {
                callback();
            }
        })
    }

    override delete(entity: IBaseVm, callback: Function): void {
        this.httpFormService.Delete(entity.id).subscribe(p => {
            if(p) {
                callback();
            }
        })
    }

    override getList(): any {
        this.httpFormService.getList().subscribe((p) => {
            return p;
        });
    }

    override getById(id: number): any {
        this.httpFormService.getById(id).subscribe(p => {
            return p;
        })
    }

    override getByFilters(entity: IBaseVm): any {
        this.httpFormService.getByFilters(entity).subscribe(p => {
            return p;
        })
    }

}