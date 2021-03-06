(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app/app.component.css":
/*!*******************************!*\
  !*** ./app/app.component.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app.component.html":
/*!********************************!*\
  !*** ./app/app.component.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./app/app.component.ts":
/*!******************************!*\
  !*** ./app/app.component.ts ***!
  \******************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'myweb-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root-2',
            template: __webpack_require__(/*! ./app.component.html */ "./app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/*!***************************!*\
  !*** ./app/app.module.ts ***!
  \***************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "../node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./app/app.component.ts");
/* harmony import */ var _loja_listaProduto_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loja/listaProduto.component */ "./app/loja/listaProduto.component.ts");
/* harmony import */ var _servicos_dataServices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servicos/dataServices */ "./app/servicos/dataServices.ts");
/* harmony import */ var _loja_carrinho_carrinho_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loja/carrinho/carrinho.component */ "./app/loja/carrinho/carrinho.component.ts");
/* harmony import */ var _loja_loja_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loja/loja.component */ "./app/loja/loja.component.ts");
/* harmony import */ var _loja_efetivarCompra_efetivarCompra_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loja/efetivarCompra/efetivarCompra.component */ "./app/loja/efetivarCompra/efetivarCompra.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var router = [
    { path: "", component: _loja_loja_component__WEBPACK_IMPORTED_MODULE_8__["Loja"] },
    { path: "efetivarCompra", component: _loja_efetivarCompra_efetivarCompra_component__WEBPACK_IMPORTED_MODULE_9__["EfetivarCompra"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _loja_listaProduto_component__WEBPACK_IMPORTED_MODULE_5__["ListaProduto"],
                _loja_carrinho_carrinho_component__WEBPACK_IMPORTED_MODULE_7__["Carrinho"],
                _loja_loja_component__WEBPACK_IMPORTED_MODULE_8__["Loja"],
                _loja_efetivarCompra_efetivarCompra_component__WEBPACK_IMPORTED_MODULE_9__["EfetivarCompra"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(router, {
                    useHash: true,
                    enableTracing: false
                })
            ],
            providers: [_servicos_dataServices__WEBPACK_IMPORTED_MODULE_6__["DataServices"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/loja/carrinho/carrinho.component.html":
/*!***************************************************!*\
  !*** ./app/loja/carrinho/carrinho.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Carrinho de Compras</h3>\r\n<div>Contagem: {{ data.pedido.ItensPedidos.length }}</div>\r\n<div>Total: {{ data.pedido.total | currency:\"R$\":true }}</div>\r\n<table class=\"table table-condensed table-hover\">\r\n    <thead>\r\n        <tr>\r\n            <td>Nome</td>\r\n            <td>Quantidade</td>\r\n            <td>Preço</td>\r\n            <td>Total</td>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let item of data.pedido.ItensPedidos\">\r\n            <td>{{ item.Produto.nome }}</td>\r\n            <td>{{ item.Quantidade }}</td>\r\n            <td>{{ item.Produto.preco | currency:\"R$\":true }}</td>\r\n            <td>{{ (item.Produto.preco * item.Quantidade) | currency:\"R$\":true }}</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<a routerLink=\"efetivarCompra\" class=\"btn btn-success\" *ngIf=\"data.pedido.ItensPedidos.length > 0\">Efetivar Compra</a>"

/***/ }),

/***/ "./app/loja/carrinho/carrinho.component.ts":
/*!*************************************************!*\
  !*** ./app/loja/carrinho/carrinho.component.ts ***!
  \*************************************************/
/*! exports provided: Carrinho */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Carrinho", function() { return Carrinho; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicos_dataServices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servicos/dataServices */ "./app/servicos/dataServices.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Carrinho = /** @class */ (function () {
    function Carrinho(data) {
        this.data = data;
    }
    Carrinho = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "carrinho",
            template: __webpack_require__(/*! ./carrinho.component.html */ "./app/loja/carrinho/carrinho.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [_servicos_dataServices__WEBPACK_IMPORTED_MODULE_1__["DataServices"]])
    ], Carrinho);
    return Carrinho;
}());



/***/ }),

/***/ "./app/loja/efetivarCompra/efetivarCompra.component.html":
/*!***************************************************************!*\
  !*** ./app/loja/efetivarCompra/efetivarCompra.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div *ngIf=\"mensagem\" class=\"alert alert-warning\">{{mensagem}}</div>\r\n    <h3>Efetivar Compra</h3>\r\n    <table class=\"table table-bordered table-hover\">\r\n        <thead>\r\n            <tr *ngFor=\"let item of data.pedido.ItensPedidos\">\r\n                <td><img src=\"img/747626_1.jpg\" width=\"200\" height=\"200\" /></td>\r\n                <td>{{item.Produto.nome}}</td>\r\n                <td>{{item.Quantidade}}</td>\r\n                <td>{{item.Produto.preco | currency:\"R$\":true}}</td>\r\n                <td>{{item.Produto.preco * item.Quantidade | currency:\"R$\":true}}</td>\r\n            </tr>\r\n        </thead>\r\n    </table>\r\n    <div class=\"col-xs-4 col-xs-offset-8 text-right\">\r\n        <table class=\"table table-condensed\">\r\n                <tr>\r\n                    <td>total</td>\r\n                    <td>{{data.pedido.total | currency:\"R$\":true }}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Frete</td>\r\n                    <td>R$ 0.00</td>\r\n                </tr>\r\n        </table>\r\n        <button class=\"btn btn-success\" (click)=\"onEfetivarCompra()\">Comprar</button>\r\n        <a routerLink=\"\" class=\"btn btn-info\">Cancelar</a>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./app/loja/efetivarCompra/efetivarCompra.component.ts":
/*!*************************************************************!*\
  !*** ./app/loja/efetivarCompra/efetivarCompra.component.ts ***!
  \*************************************************************/
/*! exports provided: EfetivarCompra */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EfetivarCompra", function() { return EfetivarCompra; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicos_dataServices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servicos/dataServices */ "./app/servicos/dataServices.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EfetivarCompra = /** @class */ (function () {
    function EfetivarCompra(data, router) {
        this.data = data;
        this.router = router;
    }
    EfetivarCompra.prototype.onEfetivarCompra = function () {
        var _this = this;
        this.data.efetivarCompra()
            .subscribe(function (sucesso) {
            if (sucesso) {
                _this.router.navigate([""]);
            }
        }, function (erro) { return _this.mensagem = "Falha ao salvar pedido"; });
    };
    EfetivarCompra = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "efetivar",
            template: __webpack_require__(/*! ./efetivarCompra.component.html */ "./app/loja/efetivarCompra/efetivarCompra.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [_servicos_dataServices__WEBPACK_IMPORTED_MODULE_1__["DataServices"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EfetivarCompra);
    return EfetivarCompra;
}());



/***/ }),

/***/ "./app/loja/listaProduto.component.css":
/*!*********************************************!*\
  !*** ./app/loja/listaProduto.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".produto-info img {\r\n    margin: 0 2px;\r\n}\r\n"

/***/ }),

/***/ "./app/loja/listaProduto.component.html":
/*!**********************************************!*\
  !*** ./app/loja/listaProduto.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"produto-info col-xs-4 well\" *ngFor=\"let p of produtos\">\r\n        <img src=\"img/747626_1.jpg\" width=\"200\" height=\"200\" />\r\n        <h4>{{p.nome}}</h4>\r\n        <h3><strong>{{p.preco | currency:\"R$\":true}}</strong></h3>\r\n        <button id=\"meu-button\" \r\n                class=\"btn btn-success btn-sm\"\r\n                (click)=\"adicionarProduto(p)\">Comprar\r\n        </button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./app/loja/listaProduto.component.ts":
/*!********************************************!*\
  !*** ./app/loja/listaProduto.component.ts ***!
  \********************************************/
/*! exports provided: ListaProduto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaProduto", function() { return ListaProduto; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicos_dataServices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servicos/dataServices */ "./app/servicos/dataServices.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListaProduto = /** @class */ (function () {
    function ListaProduto(data) {
        this.data = data;
        this.produtos = data.produtos;
    }
    ListaProduto.prototype.ngOnInit = function () {
        var _this = this;
        this.data.carregarProdutos()
            .subscribe(function () { return _this.produtos = _this.data.produtos; });
    };
    ListaProduto.prototype.adicionarProduto = function (produto) {
        this.data.adicionarProduto(produto);
    };
    ListaProduto = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "lista-produto",
            template: __webpack_require__(/*! ./listaProduto.component.html */ "./app/loja/listaProduto.component.html"),
            styles: [__webpack_require__(/*! ./listaProduto.component.css */ "./app/loja/listaProduto.component.css")]
        }),
        __metadata("design:paramtypes", [_servicos_dataServices__WEBPACK_IMPORTED_MODULE_1__["DataServices"]])
    ], ListaProduto);
    return ListaProduto;
}());



/***/ }),

/***/ "./app/loja/loja.component.html":
/*!**************************************!*\
  !*** ./app/loja/loja.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xs-7\">\r\n        <lista-produto></lista-produto>\r\n    </div>\r\n    <div class=\"col-xs-5\">\r\n        <div class=\"well well-sm\">\r\n            <carrinho></carrinho>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./app/loja/loja.component.ts":
/*!************************************!*\
  !*** ./app/loja/loja.component.ts ***!
  \************************************/
/*! exports provided: Loja */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loja", function() { return Loja; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Loja = /** @class */ (function () {
    function Loja() {
    }
    Loja = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "loja",
            template: __webpack_require__(/*! ./loja.component.html */ "./app/loja/loja.component.html"),
            styleUrls: []
        })
    ], Loja);
    return Loja;
}());



/***/ }),

/***/ "./app/modelos/pedidos.ts":
/*!********************************!*\
  !*** ./app/modelos/pedidos.ts ***!
  \********************************/
/*! exports provided: Pedido, ItemPedido */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pedido", function() { return Pedido; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemPedido", function() { return ItemPedido; });
/* harmony import */ var _produto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./produto */ "./app/modelos/produto.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


var Pedido = /** @class */ (function () {
    function Pedido() {
        this.ItensPedidos = new Array();
    }
    Object.defineProperty(Pedido.prototype, "total", {
        get: function () {
            return lodash__WEBPACK_IMPORTED_MODULE_1__["sum"](lodash__WEBPACK_IMPORTED_MODULE_1__["map"](this.ItensPedidos, function (i) { return i.Produto.preco * i.Quantidade; }));
        },
        enumerable: true,
        configurable: true
    });
    return Pedido;
}());

var ItemPedido = /** @class */ (function () {
    function ItemPedido() {
        this.Produto = new _produto__WEBPACK_IMPORTED_MODULE_0__["Produto"]();
    }
    return ItemPedido;
}());



/***/ }),

/***/ "./app/modelos/produto.ts":
/*!********************************!*\
  !*** ./app/modelos/produto.ts ***!
  \********************************/
/*! exports provided: Produto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Produto", function() { return Produto; });
var Produto = /** @class */ (function () {
    function Produto() {
    }
    return Produto;
}());



/***/ }),

/***/ "./app/servicos/dataServices.ts":
/*!**************************************!*\
  !*** ./app/servicos/dataServices.ts ***!
  \**************************************/
/*! exports provided: DataServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataServices", function() { return DataServices; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "../node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "../node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _modelos_pedidos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modelos/pedidos */ "./app/modelos/pedidos.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataServices = /** @class */ (function () {
    function DataServices(http) {
        this.http = http;
        this.pedido = new _modelos_pedidos__WEBPACK_IMPORTED_MODULE_3__["Pedido"]();
    }
    DataServices.prototype.carregarProdutos = function () {
        var _this = this;
        return this.http.get("/api/produto")
            .map(function (result) { return _this.produtos = result.json(); });
    };
    DataServices.prototype.adicionarProduto = function (produto) {
        var itemSelecionado = this.pedido.ItensPedidos.find(function (i) { return i.Produto.id == produto.id; });
        if (itemSelecionado) {
            itemSelecionado.Quantidade++;
        }
        else {
            var item = void 0;
            item = new _modelos_pedidos__WEBPACK_IMPORTED_MODULE_3__["ItemPedido"]();
            item.Produto.id = produto.id;
            item.Produto.nome = produto.nome;
            item.Produto.descricao = produto.descricao;
            item.Produto.preco = produto.preco;
            item.Quantidade = 1;
            this.pedido.ItensPedidos.push(item);
        }
    };
    DataServices.prototype.efetivarCompra = function () {
        var _this = this;
        return this.http.post("/api/pedido", this.pedido)
            .map(function (resposta) {
            _this.pedido = new _modelos_pedidos__WEBPACK_IMPORTED_MODULE_3__["Pedido"]();
            return true;
        });
    };
    DataServices = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"]])
    ], DataServices);
    return DataServices;
}());



/***/ }),

/***/ "./environments/environment.ts":
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\victorhigaki\source\repos\ASPNETCore2Angular6\MyWebApp\ClienteApp\main.ts */"./main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map