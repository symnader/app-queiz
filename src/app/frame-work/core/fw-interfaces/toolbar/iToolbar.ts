import { IQueryOpr } from './iQueryOpr';
import { ICommandOperation } from "./iCommandOpr";
import { IUserOpr } from './iUserOpr';

export interface  IToolbar extends ICommandOperation, IQueryOpr, IUserOpr {
    setToolbar(aryButtons: ToolbarButtons []): void;
    
} 