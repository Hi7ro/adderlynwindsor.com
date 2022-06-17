"use strict";
(self["webpackChunkadderlynwindsor_com"] = self["webpackChunkadderlynwindsor_com"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _imprint_imprint_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imprint/imprint.component */ 951);
/* harmony import */ var _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slideshow/slideshow.component */ 8588);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    { path: '', component: _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_1__.SlideshowComponent },
    { path: 'imprint', component: _imprint_imprint_component__WEBPACK_IMPORTED_MODULE_0__.ImprintComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu/menu.component */ 1105);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class AppComponent {
    constructor() {
        this.currentRoute = '';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 1, consts: [[3, "darkMode"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-menu", 0)(1, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("darkMode", ctx.currentRoute == "/");
    } }, directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slideshow/slideshow.component */ 8588);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu/menu.component */ 1105);
/* harmony import */ var _imprint_imprint_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imprint/imprint.component */ 951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);







class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_2__.SlideshowComponent,
        _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__.MenuComponent,
        _imprint_imprint_component__WEBPACK_IMPORTED_MODULE_4__.ImprintComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] }); })();


/***/ }),

/***/ 951:
/*!**********************************************!*\
  !*** ./src/app/imprint/imprint.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImprintComponent": () => (/* binding */ ImprintComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ImprintComponent {
    constructor() { }
    ngOnInit() {
    }
}
ImprintComponent.ɵfac = function ImprintComponent_Factory(t) { return new (t || ImprintComponent)(); };
ImprintComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImprintComponent, selectors: [["app-imprint"]], decls: 0, vars: 0, template: function ImprintComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbXByaW50LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 1105:
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



function MenuComponent_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 5);
} }
function MenuComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 6);
} }
class MenuComponent {
    constructor() {
        this.darkMode = true;
    }
    ngOnInit() {
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], inputs: { darkMode: "darkMode" }, decls: 12, vars: 6, consts: [["routerLink", "/", "src", "../../assets/img/LogoMakr-white.png", "alt", "Logo", 4, "ngIf"], ["routerLink", "/", "src", "../../assets/img/LogoMakr-black.png", "alt", "Logo", 4, "ngIf"], ["routerLink", "/"], ["href", "#"], ["routerLink", "/imprint"], ["routerLink", "/", "src", "../../assets/img/LogoMakr-white.png", "alt", "Logo"], ["routerLink", "/", "src", "../../assets/img/LogoMakr-black.png", "alt", "Logo"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuComponent_img_1_Template, 1, 0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MenuComponent_img_2_Template, 1, 0, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div")(4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Curriculum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Imprint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("headerDark", ctx.darkMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.darkMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.darkMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("darkLinks", ctx.darkMode);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: ["header[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  height: 100px;\n  padding-left: 100px;\n  padding-right: 100px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nheader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 50px;\n  cursor: pointer;\n}\nheader[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n  font-weight: bold;\n  font-size: 20px;\n  margin-left: 40px;\n}\nheader[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: rgba(255, 255, 255, 0.511);\n}\nheader[_ngcontent-%COMP%]   .darkLinks[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n}\nheader[_ngcontent-%COMP%]   .darkLinks[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: rgba(0, 0, 0, 0.8);\n}\n.headerDark[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUdBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBREY7QUFHRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBREo7QUFJRTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRko7QUFJSTtFQUNFLGlDQUFBO0FBRk47QUFRSTtFQUNFLFlBQUE7QUFOTjtBQU9NO0VBQ0UseUJBQUE7QUFMUjtBQVdBO0VBQ0UsdUJBQUE7RUFDQSw0Q0FBQTtBQVJGIiwiZmlsZSI6Im1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDE7XG4gIGhlaWdodDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogMTAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6MTAwcHg7XG5cblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcblxuICAgICY6aG92ZXJ7XG4gICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUxMSk7XG4gICAgfVxuICB9XG5cblxuICAuZGFya0xpbmtze1xuICAgIGF7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAmOmhvdmVye1xuICAgICAgICBjb2xvcjogcmdiYSgwLDAsIDAsIDAuOCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5oZWFkZXJEYXJre1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG5cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 8588:
/*!**************************************************!*\
  !*** ./src/app/slideshow/slideshow.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlideshowComponent": () => (/* binding */ SlideshowComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);


function SlideshowComponent_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.images[ctx_r0.currentImage], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SlideshowComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.headlines[ctx_r1.currentImage]);
} }
class SlideshowComponent {
    constructor() {
        this.images = [
            '../assets/img/code-g8e568109d_1920.jpg',
            '../assets/img/get-me-out-1605906_1280.jpg',
            '../assets/img/office.jpg',
        ];
        this.headlines = [
            'Bring engineering to the next level',
            'Born to code',
            'Graduated at TUM',
        ];
        this.currentImage = 0;
        this.showImage = true;
        this.showHeadline = true;
    }
    ngOnInit() {
        this.updateImage();
    }
    updateImage() {
        setInterval(() => {
            this.currentImage++;
            this.currentImage = this.currentImage % this.images.length;
            this.showImage = false;
            this.showHeadline = false;
            setTimeout(() => {
                this.showImage = true;
                this.showHeadline = true;
            }, 0.8);
        }, 4000);
    }
}
SlideshowComponent.ɵfac = function SlideshowComponent_Factory(t) { return new (t || SlideshowComponent)(); };
SlideshowComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SlideshowComponent, selectors: [["app-slideshow"]], decls: 4, vars: 2, consts: [[1, "slideshow-container"], ["class", "img-slideshow", "alt", "", 3, "src", 4, "ngIf"], [1, "slideshow-container", "slideshow-overlay"], ["class", "fadeIn", 4, "ngIf"], ["alt", "", 1, "img-slideshow", 3, "src"], [1, "fadeIn"]], template: function SlideshowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SlideshowComponent_img_1_Template, 1, 1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SlideshowComponent_p_3_Template, 2, 1, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showHeadline);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: [".slideshow-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n  object-fit: cover;\n  max-width: 100%;\n  overflow: hidden;\n}\n\n.img-slideshow[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n  object-fit: cover;\n  max-width: 100%;\n  animation: zoomIn 4s ease;\n}\n\n@keyframes zoomIn {\n  from {\n    transform: scale(1);\n  }\n  to {\n    transform: scale(1.1);\n  }\n}\n\n.slideshow-overlay[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.4);\n  position: absolute;\n  top: 0;\n  display: flex;\n  align-items: center;\n}\n\n.slideshow-overlay[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 800px;\n  color: white;\n  font-size: 80px;\n  padding-left: 32px;\n  border-left: 8px solid #e54444;\n  margin-left: 120px;\n}\n\n.fadeIn[_ngcontent-%COMP%] {\n  animation: fadeInAnimation 1s ease-in-out;\n}\n\n@keyframes fadeInAnimation {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsaWRlc2hvdy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsbUJBQUE7RUFDRjtFQUNBO0lBQ0UscUJBQUE7RUFDRjtBQUNGOztBQUVBO0VBQ0Usb0NBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFJQTtFQUNFLHlDQUFBO0FBREY7O0FBSUE7RUFDRTtJQUNFLFVBQUE7SUFDQSwyQkFBQTtFQURGO0VBR0E7SUFDRSxVQUFBO0lBQ0Esd0JBQUE7RUFERjtBQUNGIiwiZmlsZSI6InNsaWRlc2hvdy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGlkZXNob3ctY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaW1nLXNsaWRlc2hvdyB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYW5pbWF0aW9uOiB6b29tSW4gNHMgZWFzZTtcbn1cblxuQGtleWZyYW1lcyB6b29tSW4ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIH1cbn1cblxuLnNsaWRlc2hvdy1vdmVybGF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBwIHtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDgwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzMnB4O1xuICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgI2U1NDQ0NDtcbiAgICBtYXJnaW4tbGVmdDogMTIwcHg7XG4gIH1cbn1cblxuLmZhZGVJbiB7XG4gIGFuaW1hdGlvbjogZmFkZUluQW5pbWF0aW9uIDFzIGVhc2UtaW4tb3V0O1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbkFuaW1hdGlvbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8202), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map