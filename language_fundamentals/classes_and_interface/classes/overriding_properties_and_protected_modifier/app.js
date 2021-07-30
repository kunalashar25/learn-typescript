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
        return _this;
    }
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
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
// create object
var itDept = new ITDepartment('D01', ['Root', 'Sudo']);
console.log(itDept); // ITDepartment {id: "D01", name: "IT", employees: Array(0), admins: Array(2)}
itDept.addEmployee('Ravi');
itDept.name = 'Updated Name';
console.log(itDept); // ITDepartment {id: "D01", name: "Updated Name", employees: Array(1), admins: Array(2)}
itDept.printEmployeeInfo(); // ["Ravi"]
var acc = new AccountingDepartment('A01', ['R1']);
console.log(acc); // AccountingDepartment {id: "A01", name: "Accounts", employees: Array(0), reports: Array(1)}
acc.printReport(); // ["R1"]
acc.addEmployee('Max');
acc.addEmployee('Random');
acc.printEmployeeInfo(); // ["R1"]
