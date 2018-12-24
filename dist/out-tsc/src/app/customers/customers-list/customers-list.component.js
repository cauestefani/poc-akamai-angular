"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sorter_service_1 = require("../../core/sorter.service");
var CustomersListComponent = /** @class */ (function () {
    function CustomersListComponent(sorterService) {
        this.sorterService = sorterService;
        this._customers = [];
        this.filteredCustomers = [];
        this.currencyCode = 'USD';
    }
    Object.defineProperty(CustomersListComponent.prototype, "customers", {
        get: function () {
            return this._customers;
        },
        set: function (value) {
            if (value) {
                this.filteredCustomers = this._customers = value;
                this.calculateOrders();
            }
        },
        enumerable: true,
        configurable: true
    });
    CustomersListComponent.prototype.ngOnInit = function () {
    };
    CustomersListComponent.prototype.calculateOrders = function () {
        var _this = this;
        this.customersOrderTotal = 0;
        this.filteredCustomers.forEach(function (cust) {
            _this.customersOrderTotal += cust.orderTotal;
        });
    };
    CustomersListComponent.prototype.filter = function (data) {
        if (data) {
            this.filteredCustomers = this.customers.filter(function (cust) {
                return cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                    cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                    cust.orderTotal.toString().indexOf(data) > -1;
            });
        }
        else {
            this.filteredCustomers = this.customers;
        }
        this.calculateOrders();
    };
    CustomersListComponent.prototype.sort = function (prop) {
        this.sorterService.sort(this.filteredCustomers, prop);
    };
    CustomersListComponent.prototype.customerTrackBy = function (index, customer) {
        return customer.id;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], CustomersListComponent.prototype, "customers", null);
    CustomersListComponent = __decorate([
        core_1.Component({
            selector: 'app-customers-list',
            templateUrl: './customers-list.component.html'
        }),
        __metadata("design:paramtypes", [sorter_service_1.SorterService])
    ], CustomersListComponent);
    return CustomersListComponent;
}());
exports.CustomersListComponent = CustomersListComponent;
//# sourceMappingURL=customers-list.component.js.map