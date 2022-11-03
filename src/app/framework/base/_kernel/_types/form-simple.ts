import { fwFormControl } from "../../fw-services/kernel/forms/form-controls";

export interface ISimpleFrm {
  setInfoPanel(aryFormCntrl: fwFormControl[], stylePnl: StylePanel): void;
  setFieldPanel(aryFormCntrl: fwFormControl[], stylePnl: StylePanel): void;
}
