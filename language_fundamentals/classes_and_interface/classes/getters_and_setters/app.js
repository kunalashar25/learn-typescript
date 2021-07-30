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
var Departments = /** @class */ (function () {
    // fields that should not change after initialization
    function Departments(id, name) {
        this.id = id;
        this.name = name;
        // protected is also available in child class
        this.employees = [];
    }
    Departments.prototype.describe = function () {
        console.log("Department: " + this.name);
    };
    Departments.prototype.addEmployee = function (emp) {
        // this.id = 'D02'; Cannot assign to 'id' because it is a read-only property
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
    Object.defineProperty(AccountingDepartment.prototype, "recentReport", {
        // use get keyword to keyword a getter and function name can be anything
        get: function () {
            if (this.lastReport)
                return this.lastReport;
            else
                throw new Error('No Report Found!');
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    AccountingDepartment.prototype.printReport = function () {
        console.log(this.reports);
    };
    // overriding parent class method
    AccountingDepartment.prototype.addEmployee = function (name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    };
    return AccountingDepartment;
}(Departments));
var acc = new AccountingDepartment('Acc001', ['Day0', 'Day1']);
console.log(acc.recentReport);
