import { fwFormControl } from "src/app/frame-work/services/fw-custome/fw-form-control";

export interface ISimpleFrm {
    setInfoPanel(aryFormCntrl: fwFormControl[], stylePnl: StylePanel): void;
    setFieldPanel(aryFormCntrl: fwFormControl[], stylePnl: StylePanel): void;
} 