import { IBaseVm } from "./base-entity";

export class Employee implements IBaseVm {
    constructor(company: string, unit: string, fullName: string, age: number, salary: number) {
        this.company=company;
        this.unit=unit;
        this.fullName=fullName;
        this.age=age;
        this.salary=salary;            
    }

    public company: string;
    public unit: string;
    public fullName: string;
    public age: number;
    public salary: number;
}