
import { FormGroup } from "@angular/forms";

export class fwFormGroup extends FormGroup {
    constructor() {
        super({});
    }

    private _caption : string = '';
    private _stylePanel : StylePanel = stylePnl.material;
    private _displayType : DisplayType = displayTyp.route;
    private _toolbarBtn : ToolbarButtons [] = [];

    public get caption() : string {
        return this._caption;
    }

    public set caption(v : string) {
        this._caption = v;
    }

    public get displayType(): DisplayType {
        return this._displayType;
    }

    public set displayType(v: DisplayType) {
        this._displayType = v;
    }

    public get stylePanel(): StylePanel {
        return this._stylePanel;
    }

    public set stylePanel(v: StylePanel) {
        this._stylePanel = v;
    }

    public get toolbarBtn(): ToolbarButtons [] {
        return this._toolbarBtn;
    }

    public set toolbarBtn(v: ToolbarButtons[]) {
        this._toolbarBtn = v;
    }


}
