var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// cannot create object of Department now
var Departments = /** @class */ (function () {
    // fields that should not change after initialization
    function Departments(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Departments.prototype.addEmployee = function (emp) {
        this.employees.push(emp);
    };
    Departments.prototype.printEmployeeInfo = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Departments;
}());
// can only inherit from one class and not multiple classes
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = 
        // super should be first statement in the constructor
        _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.describe = function () {
        console.log("In IT Department with ID: " + this.id);
    };
    return ITDepartment;
}(Departments));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, 'Accounts') || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    AccountingDepartment.getInstance = function () {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('A001', ['Singleton']);
        return this.instance;
    };
    AccountingDepartment.prototype.describe = function () {
        console.log("In Accounting Department with ID: " + this.id);
    };
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    AccountingDepartment.prototype.printReport = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(Departments));
// const ac1 = new AccountingDepartment('AC001', ['Private Const']);
// Constructor of class 'AccountingDepartment' is private and only accessible within the class declaration.ts
var i1 = AccountingDepartment.getInstance();
console.log(i1);
var i2 = AccountingDepartment.getInstance();
console.log(i2);
