"use strict";
(self["webpackChunkthought_app"] = self["webpackChunkthought_app"] || []).push([["main"],{

/***/ 829:
/*!***********************************************!*\
  !*** ./src/app/app-config-service.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppConfigService": () => (/* binding */ AppConfigService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3765);


class AppConfigService {
  constructor(http) {
    this.http = http;
  }
  loadAppConfig() {
    return this.http.get('/assets/config.json').toPromise().then(data => {
      this.appConfig = data;
    });
  }
  // This is an example property ... you can make it however you want.
  get baseUrl() {
    if (!this.appConfig) {
      throw Error('Config file not loaded!');
    }
    return this.appConfig.baseUrl;
  }
}
AppConfigService.ɵfac = function AppConfigService_Factory(t) {
  return new (t || AppConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
AppConfigService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: AppConfigService,
  factory: AppConfigService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/logout/logout.component */ 430);
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/register/register.component */ 3412);
/* harmony import */ var _components_study_session_entry_study_session_entry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/study-session-entry/study-session-entry.component */ 3544);
/* harmony import */ var _components_all_study_sessions_all_study_sessions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/all-study-sessions/all-study-sessions.component */ 3942);
/* harmony import */ var _components_study_summary_study_summary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/study-summary/study-summary.component */ 560);
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth-guard.service */ 968);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 6839);










const routes = [
// { path: 'home', component: ThoughtHomeComponent },
// { path: 'all', component: AllThoughtsComponent },
// { path: 'add', component: AddThoughtComponent},
{
  path: 'login',
  component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}, {
  path: 'logout',
  component: _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_1__.LogoutComponent
}, {
  path: 'register',
  component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__.RegisterComponent
}, {
  path: 'enter-session',
  component: _components_study_session_entry_study_session_entry_component__WEBPACK_IMPORTED_MODULE_3__.StudySessionEntryComponent,
  canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__.AuthGuardService]
}, {
  path: 'enter-session/:id',
  component: _components_study_session_entry_study_session_entry_component__WEBPACK_IMPORTED_MODULE_3__.StudySessionEntryComponent,
  canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__.AuthGuardService]
}, {
  path: 'study-sessions-all',
  component: _components_all_study_sessions_all_study_sessions_component__WEBPACK_IMPORTED_MODULE_4__.AllStudySessionsComponent,
  canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__.AuthGuardService]
}, {
  path: 'summary',
  component: _components_study_summary_study_summary_component__WEBPACK_IMPORTED_MODULE_5__.StudySummaryComponent,
  canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__.AuthGuardService]
}, {
  path: '**',
  redirectTo: 'summary'
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

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
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ 9168);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6679);




const _c0 = ["navBurger"];
const _c1 = ["navMenu"];
function AppComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.username);
  }
}
function AppComponent_a_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 16)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function AppComponent_a_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Log in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AppComponent_a_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Log out ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
const _c2 = function (a0) {
  return {
    "is-active": a0
  };
};
class AppComponent {
  constructor() {
    this.hamburgerMenuActive = false;
  }
  get token() {
    return localStorage.getItem('token');
  }
  get username() {
    var token = localStorage.getItem('token');
    try {
      var decodedToken = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_0__["default"])(token);
      return decodedToken.username;
    } catch (Error) {
      return '';
    }
  }
  toggleHamburgerMenu() {
    this.navBurger?.nativeElement.classList.toggle('is-active');
    this.navMenu?.nativeElement.classList.toggle('is-active');
  }
  onMenuItemSelected() {
    this.navBurger?.nativeElement.classList.remove('is-active');
    this.navMenu?.nativeElement.classList.remove('is-active');
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  viewQuery: function AppComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.navBurger = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.navMenu = _t.first);
    }
  },
  decls: 24,
  vars: 13,
  consts: [["role", "navigation", "aria-label", "main navigation", 1, "navbar"], [1, "navbar-brand"], ["role", "button", "aria-label", "menu", "aria-expanded", "false", "data-target", "navbarBasicExample", 1, "navbar-burger", 3, "ngClass", "click"], ["navBurger", ""], ["aria-hidden", "true"], ["id", "navbarBasicExample", 1, "navbar-menu", 3, "ngClass"], ["navMenu", ""], [1, "navbar-start"], [1, "navbar-item", 3, "routerLink", "click"], [1, "navbar-end"], [1, "navbar-item"], [4, "ngIf"], [1, "buttons"], ["class", "button is-primary", "href", "/register", 4, "ngIf"], ["class", "button is-light", "href", "/login", 4, "ngIf"], ["class", "button is-light", "href", "/logout", 4, "ngIf"], ["href", "/register", 1, "button", "is-primary"], ["href", "/login", 1, "button", "is-light"], ["href", "/logout", 1, "button", "is-light"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_a_click_2_listener() {
        return ctx.toggleHamburgerMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 4)(5, "span", 4)(6, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5, 6)(9, "div", 7)(10, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_a_click_10_listener() {
        return ctx.onMenuItemSelected();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " + Add New Study Session ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_a_click_12_listener() {
        return ctx.onMenuItemSelected();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Study Summary ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_a_click_14_listener() {
        return ctx.onMenuItemSelected();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " All Study Sessions ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9)(17, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AppComponent_div_18_Template, 2, 1, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, AppComponent_a_20_Template, 3, 0, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, AppComponent_a_21_Template, 2, 0, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, AppComponent_a_22_Template, 2, 0, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "router-outlet");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c2, ctx.hamburgerMenuActive));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c2, ctx.hamburgerMenuActive));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "enter-session");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "summary");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "study-sessions-all");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.token);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.token);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.token);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.token);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
  styles: ["@import url(https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css);\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_thought_home_thought_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/thought-home/thought-home.component */ 3941);
/* harmony import */ var _components_all_thoughts_all_thoughts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/all-thoughts/all-thoughts.component */ 2161);
/* harmony import */ var _components_thought_thought_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/thought/thought.component */ 6923);
/* harmony import */ var _components_add_thought_add_thought_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/add-thought/add-thought.component */ 5829);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _app_config_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-config-service.service */ 829);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/logout/logout.component */ 430);
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/register/register.component */ 3412);
/* harmony import */ var _components_study_session_entry_study_session_entry_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/study-session-entry/study-session-entry.component */ 3544);
/* harmony import */ var _components_all_study_sessions_all_study_sessions_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/all-study-sessions/all-study-sessions.component */ 3942);
/* harmony import */ var _components_study_summary_study_summary_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/study-summary/study-summary.component */ 560);
/* harmony import */ var _components_api_error_api_error_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/api-error/api-error.component */ 6596);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @auth0/angular-jwt */ 467);
/* harmony import */ var _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/auth-interceptor.service */ 993);





















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_15__.APP_INITIALIZER,
    multi: true,
    deps: [_app_config_service_service__WEBPACK_IMPORTED_MODULE_6__.AppConfigService],
    useFactory: appConfigService => {
      return () => {
        //Make sure to return a promise!
        return appConfigService.loadAppConfig();
      };
    }
  }, {
    provide: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_16__.JWT_OPTIONS,
    useValue: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_16__.JWT_OPTIONS
  }, _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_16__.JwtHelperService, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HTTP_INTERCEPTORS,
    useClass: _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_14__.AuthInterceptorService,
    multi: true
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_thought_home_thought_home_component__WEBPACK_IMPORTED_MODULE_2__.ThoughtHomeComponent, _components_all_thoughts_all_thoughts_component__WEBPACK_IMPORTED_MODULE_3__.AllThoughtsComponent, _components_thought_thought_component__WEBPACK_IMPORTED_MODULE_4__.ThoughtComponent, _components_add_thought_add_thought_component__WEBPACK_IMPORTED_MODULE_5__.AddThoughtComponent, _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__.LoginComponent, _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_8__.LogoutComponent, _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__.RegisterComponent, _components_study_session_entry_study_session_entry_component__WEBPACK_IMPORTED_MODULE_10__.StudySessionEntryComponent, _components_all_study_sessions_all_study_sessions_component__WEBPACK_IMPORTED_MODULE_11__.AllStudySessionsComponent, _components_study_summary_study_summary_component__WEBPACK_IMPORTED_MODULE_12__.StudySummaryComponent, _components_api_error_api_error_component__WEBPACK_IMPORTED_MODULE_13__.ApiErrorComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 3322:
/*!*******************************************!*\
  !*** ./src/app/classes/errorContainer.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorContainer": () => (/* binding */ ErrorContainer)
/* harmony export */ });
class ErrorContainer {
  clear() {
    this.errorMessage = undefined;
  }
}

/***/ }),

/***/ 1959:
/*!*****************************************!*\
  !*** ./src/app/classes/errorHandler.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleError": () => (/* binding */ handleError)
/* harmony export */ });
function handleError(error, errorContainer) {
  console.error(error);
  errorContainer.httpError = error;
  if (error.status === 400 /* HttpStatusCode.BadRequest */) {
    errorContainer.errorMessage = 'There was a problem submitting your request. Check your entries and try again.';
  } else if (error.status === 401 /* HttpStatusCode.Unauthorized */) {
    errorContainer.errorMessage = "You are unauthorized. Try logging in.";
  } else if (error.status === 500 /* HttpStatusCode.InternalServerError */) {
    errorContainer.errorMessage = "There was an error. The system must be having a bad day. Try again later.";
  }
}

/***/ }),

/***/ 5829:
/*!*****************************************************************!*\
  !*** ./src/app/components/add-thought/add-thought.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddThoughtComponent": () => (/* binding */ AddThoughtComponent)
/* harmony export */ });
/* harmony import */ var src_app_classes_errorContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/errorContainer */ 3322);
/* harmony import */ var src_app_classes_errorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/errorHandler */ 1959);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var src_app_services_thought_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/thought.service */ 3678);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 9542);







function AddThoughtComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11)(1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddThoughtComponent_div_12_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.showRequiredMessage = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Please enter a thought before submitting. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AddThoughtComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11)(1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddThoughtComponent_div_13_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.errorContainer.clear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.errorContainer.errorMessage, " ");
  }
}
class AddThoughtComponent {
  constructor(thoughtService, router) {
    this.thoughtService = thoughtService;
    this.router = router;
    this.thoughtText = "";
    this.showRequiredMessage = false;
    this.errorContainer = new src_app_classes_errorContainer__WEBPACK_IMPORTED_MODULE_0__.ErrorContainer();
  }
  submit() {
    this.showRequiredMessage = !this.thoughtText;
    if (this.showRequiredMessage) {
      return;
    }
    const newThought = {
      text: this.thoughtText
    };
    this.thoughtService.saveThought(newThought).subscribe({
      next: res => {
        console.log('Thought saved.');
        this.router.navigate(['home']);
      },
      error: error => (0,src_app_classes_errorHandler__WEBPACK_IMPORTED_MODULE_1__.handleError)(error, this.errorContainer)
    });
  }
}
AddThoughtComponent.ɵfac = function AddThoughtComponent_Factory(t) {
  return new (t || AddThoughtComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_thought_service__WEBPACK_IMPORTED_MODULE_2__.ThoughtService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
AddThoughtComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AddThoughtComponent,
  selectors: [["app-add-thought"]],
  decls: 14,
  vars: 3,
  consts: [[1, "m-4"], [1, "container", "is-max-desktop"], [1, "field"], [1, "control"], ["placeholder", "Enter your thought", "required", "", 1, "textarea", 3, "ngModel", "ngModelChange"], [1, "level"], [1, "level-left"], [1, "level-right"], [1, "field", "is-grouped"], [1, "button", "is-link", 3, "click"], ["class", "notification is-danger", 4, "ngIf"], [1, "notification", "is-danger"], [1, "delete", 3, "click"]],
  template: function AddThoughtComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "textarea", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddThoughtComponent_Template_textarea_ngModelChange_4_listener($event) {
        return ctx.thoughtText = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "nav", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7)(8, "div", 8)(9, "div", 3)(10, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddThoughtComponent_Template_button_click_10_listener() {
        return ctx.submit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, AddThoughtComponent_div_12_Template, 3, 0, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, AddThoughtComponent_div_13_Template, 3, 1, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.thoughtText);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showRequiredMessage);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.errorContainer.errorMessage);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel],
  encapsulation: 2
});


/***/ }),

/***/ 3942:
/*!*******************************************************************************!*\
  !*** ./src/app/components/all-study-sessions/all-study-sessions.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllStudySessionsComponent": () => (/* binding */ AllStudySessionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 591);
/* harmony import */ var src_app_classes_errorContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/errorContainer */ 3322);
/* harmony import */ var src_app_classes_errorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/errorHandler */ 1959);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var src_app_services_study_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/study-session.service */ 345);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _api_error_api_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api-error/api-error.component */ 6596);









const _c0 = function (a1) {
  return ["/enter-session/", a1];
};
function AllStudySessionsComponent_div_1_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td")(2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const session_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](7, _c0, session_r3.studySessionId));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](6, 4, session_r3.dateStudied, "longDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](session_r3.topic);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](session_r3.minutesStudied);
  }
}
function AllStudySessionsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3)(1, "table", 4)(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Topic");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Minutes Studied");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, AllStudySessionsComponent_div_1_tr_13_Template, 11, 9, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const studySessions_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", studySessions_r1);
  }
}
class AllStudySessionsComponent {
  constructor(sessionService) {
    this.sessionService = sessionService;
    this.errorContainer = new src_app_classes_errorContainer__WEBPACK_IMPORTED_MODULE_0__.ErrorContainer();
  }
  ngOnInit() {
    this.studySessions$ = this.sessionService.getAllSessions().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
      if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpErrorResponse) {
        (0,src_app_classes_errorHandler__WEBPACK_IMPORTED_MODULE_1__.handleError)(err, this.errorContainer);
      }
      return rxjs__WEBPACK_IMPORTED_MODULE_7__.EMPTY;
    }));
  }
}
AllStudySessionsComponent.ɵfac = function AllStudySessionsComponent_Factory(t) {
  return new (t || AllStudySessionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_study_session_service__WEBPACK_IMPORTED_MODULE_2__.StudySessionService));
};
AllStudySessionsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AllStudySessionsComponent,
  selectors: [["app-study-session-summary"]],
  decls: 4,
  vars: 4,
  consts: [[1, "container", "is-max-desktop"], ["class", "m-4", 4, "ngIf"], [3, "errorContainer"], [1, "m-4"], [1, "table", "mx-auto"], [4, "ngFor", "ngForOf"], [1, "button", 3, "routerLink"]],
  template: function AllStudySessionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AllStudySessionsComponent_div_1_Template, 14, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "api-error", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, ctx.studySessions$));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("errorContainer", ctx.errorContainer);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _api_error_api_error_component__WEBPACK_IMPORTED_MODULE_3__.ApiErrorComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
  encapsulation: 2
});


/***/ }),

/***/ 2161:
/*!*******************************************************************!*\
  !*** ./src/app/components/all-thoughts/all-thoughts.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllThoughtsComponent": () => (/* binding */ AllThoughtsComponent)
/* harmony export */ });
/* harmony import */ var src_app_classes_errorHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/errorHandler */ 1959);
/* harmony import */ var src_app_classes_errorContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/errorContainer */ 3322);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _services_thought_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/thought.service */ 3678);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _thought_thought_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../thought/thought.component */ 6923);
/* harmony import */ var _api_error_api_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-error/api-error.component */ 6596);







function AllThoughtsComponent_div_1_thought_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "thought", 5);
  }
  if (rf & 2) {
    const thought_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("thought", thought_r2);
  }
}
function AllThoughtsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AllThoughtsComponent_div_1_thought_1_Template, 1, 1, "thought", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.thoughts);
  }
}
class AllThoughtsComponent {
  constructor(thoughtService) {
    this.thoughtService = thoughtService;
    this.thoughts = [];
    this.errorMessage = "";
    this.errorContainer = new src_app_classes_errorContainer__WEBPACK_IMPORTED_MODULE_1__.ErrorContainer();
  }
  ngOnInit() {
    this.thoughtService.getAllThoughts().subscribe({
      next: res => {
        this.thoughts = res;
      },
      error: error => (0,src_app_classes_errorHandler__WEBPACK_IMPORTED_MODULE_0__.handleError)(error, this.errorContainer)
    });
  }
}
AllThoughtsComponent.ɵfac = function AllThoughtsComponent_Factory(t) {
  return new (t || AllThoughtsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_thought_service__WEBPACK_IMPORTED_MODULE_2__.ThoughtService));
};
AllThoughtsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AllThoughtsComponent,
  selectors: [["app-all-thoughts"]],
  decls: 3,
  vars: 2,
  consts: [[1, "container", "is-max-desktop"], ["class", "content m-4", 4, "ngIf"], [3, "errorContainer"], [1, "content", "m-4"], [3, "thought", 4, "ngFor", "ngForOf"], [3, "thought"]],
  template: function AllThoughtsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AllThoughtsComponent_div_1_Template, 2, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "api-error", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.thoughts);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("errorContainer", ctx.errorContainer);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _thought_thought_component__WEBPACK_IMPORTED_MODULE_3__.ThoughtComponent, _api_error_api_error_component__WEBPACK_IMPORTED_MODULE_4__.ApiErrorComponent],
  encapsulation: 2
});


/***/ }),

/***/ 6596:
/*!*************************************************************!*\
  !*** ./src/app/components/api-error/api-error.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiErrorComponent": () => (/* binding */ ApiErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6477);


function ApiErrorComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApiErrorComponent_div_0_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.errorContainer.clear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errorContainer.errorMessage, "\n");
  }
}
class ApiErrorComponent {}
ApiErrorComponent.ɵfac = function ApiErrorComponent_Factory(t) {
  return new (t || ApiErrorComponent)();
};
ApiErrorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ApiErrorComponent,
  selectors: [["api-error"]],
  inputs: {
    errorContainer: "errorContainer"
  },
  decls: 1,
  vars: 1,
  consts: [["class", "notification is-danger mt-4", 4, "ngIf"], [1, "notification", "is-danger", "mt-4"], [1, "delete", 3, "click"]],
  template: function ApiErrorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ApiErrorComponent_div_0_Template, 3, 1, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorContainer.errorMessage);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
  encapsulation: 2
});


/***/ }),

/***/ 7143:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/login.service */ 4120);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6477);





function LoginComponent_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_p_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_div_20_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.errorMessage = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.errorMessage, " ");
  }
}
class LoginComponent {
  constructor(loginService, formBuilder, router) {
    this.loginService = loginService;
    this.formBuilder = formBuilder;
    this.router = router;
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [null],
      password: [null],
      rememberMe: [false],
      returnUrl: [null]
    });
  }
  login() {
    if (this.loginForm.invalid) {
      return;
    }
    this.loginService.createToken(this.loginForm.value).subscribe({
      next: res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/summary']);
      },
      error: error => {
        console.error(error);
        if (error.status === 500 /* HttpStatusCode.InternalServerError */) {
          this.errorMessage = "There was an error. The system must be having a bad day. Try again later.";
        } else if (error.status === 400 /* HttpStatusCode.BadRequest */) {
          this.errorMessage = error.error;
        } else {
          this.errorMessage = "There was an error.";
        }
      }
    });
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 21,
  vars: 4,
  consts: [[1, "container", "is-max-desktop", "p-6"], [1, "title"], [3, "formGroup"], [1, "field"], [1, "label"], [1, "control"], ["formControlName", "username", "type", "email", "placeholder", "Email input", "value", "hello@", "required", "", 1, "input"], ["class", "help is-danger", 4, "ngIf"], ["formControlName", "password", "type", "password", "placeholder", "Password", "required", "", 1, "input"], [1, "field", "is-grouped"], [1, "button", "is-link", 3, "click"], ["class", "notification is-danger mt-4", 4, "ngIf"], [1, "help", "is-danger"], [1, "notification", "is-danger", "mt-4"], [1, "delete", 3, "click"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2)(4, "div", 3)(5, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LoginComponent_p_9_Template, 2, 0, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3)(11, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, LoginComponent_p_15_Template, 2, 0, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9)(17, "div", 5)(18, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_18_listener() {
        return ctx.login();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, LoginComponent_div_20_Template, 3, 1, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginForm.controls["username"].touched && ctx.loginForm.controls["username"].hasError("required"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginForm.controls["password"].touched && ctx.loginForm.controls["password"].hasError("required"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
  encapsulation: 2
});


/***/ }),

/***/ 430:
/*!*******************************************************!*\
  !*** ./src/app/components/logout/logout.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoutComponent": () => (/* binding */ LogoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);

class LogoutComponent {
  ngOnInit() {
    localStorage.removeItem('token');
  }
}
LogoutComponent.ɵfac = function LogoutComponent_Factory(t) {
  return new (t || LogoutComponent)();
};
LogoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LogoutComponent,
  selectors: [["app-logout"]],
  decls: 3,
  vars: 0,
  consts: [[1, "content", "container", "p-6"]],
  template: function LogoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You have logged out.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  encapsulation: 2
});


/***/ }),

/***/ 3412:
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/login.service */ 4120);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6477);





function RegisterComponent_div_0_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_0_p_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_0_p_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Confirm password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_0_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.errorMessage, " ");
  }
}
function RegisterComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "form", 2)(2, "div", 3)(3, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, RegisterComponent_div_0_p_7_Template, 2, 0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3)(9, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, RegisterComponent_div_0_p_13_Template, 2, 0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 3)(15, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Confirm Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, RegisterComponent_div_0_p_19_Template, 2, 0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 10)(21, "div", 5)(22, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_div_0_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.register());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, RegisterComponent_div_0_div_24_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.registerForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.registerForm.controls["email"].touched && ctx_r0.registerForm.controls["email"].hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.registerForm.controls["password"].touched && ctx_r0.registerForm.controls["password"].hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.registerForm.controls["confirmPassword"].touched && ctx_r0.registerForm.controls["confirmPassword"].hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.errorMessage);
  }
}
class RegisterComponent {
  constructor(loginService, formBuilder, router) {
    this.loginService = loginService;
    this.formBuilder = formBuilder;
    this.router = router;
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: [null],
      password: [null],
      confirmPassword: [null],
      returnUrl: [null]
    });
  }
  register() {
    if (this.registerForm.invalid) {
      return;
    }
    this.loginService.register(this.registerForm.value).subscribe({
      next: res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/home']);
      },
      error: error => {
        console.error(error);
        if (error.status === 500 /* HttpStatusCode.InternalServerError */) {
          this.errorMessage = "There was an error. The system must be having a bad day. Try again later.";
        } else if (error.status === 400 /* HttpStatusCode.BadRequest */) {
          this.errorMessage = error.error;
        } else {
          this.errorMessage = "There was an error.";
        }
      }
    });
  }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
  return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
RegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: RegisterComponent,
  selectors: [["app-register"]],
  decls: 1,
  vars: 1,
  consts: [["class", "container is-max-desktop", 4, "ngIf"], [1, "container", "is-max-desktop"], [3, "formGroup"], [1, "field"], [1, "label"], [1, "control"], ["formControlName", "email", "type", "email", "placeholder", "Email", "required", "", 1, "input"], ["class", "help is-danger", 4, "ngIf"], ["formControlName", "password", "type", "password", "required", "", 1, "input"], ["formControlName", "confirmPassword", "type", "password", "required", "", 1, "input"], [1, "field", "is-grouped"], [1, "button", "is-link", 3, "click"], [4, "ngIf"], [1, "help", "is-danger"]],
  template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, RegisterComponent_div_0_Template, 25, 5, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.registerForm);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
  encapsulation: 2
});


/***/ }),

/***/ 3544:
/*!*********************************************************************************!*\
  !*** ./src/app/components/study-session-entry/study-session-entry.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudySessionEntryComponent": () => (/* binding */ StudySessionEntryComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var src_app_classes_errorContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/errorContainer */ 3322);
/* harmony import */ var src_app_classes_errorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/errorHandler */ 1959);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var src_app_services_study_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/study-session.service */ 345);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _api_error_api_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api-error/api-error.component */ 6596);









function StudySessionEntryComponent_p_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Topic is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
class StudySessionEntryComponent {
  constructor(sessionService, router, route, formBuilder) {
    this.sessionService = sessionService;
    this.router = router;
    this.route = route;
    this.formBuilder = formBuilder;
    this.errorContainer = new src_app_classes_errorContainer__WEBPACK_IMPORTED_MODULE_0__.ErrorContainer();
  }
  ngOnInit() {
    this.sessionForm = this.formBuilder.group({
      studySessionId: [0],
      topic: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      links: this.formBuilder.array([]),
      tags: this.formBuilder.array([]),
      minutesStudied: [0],
      notes: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      dateStudied: [new Date().toISOString().slice(0, -14)]
    });
    const studySessionId = this.route.snapshot.paramMap.get('id');
    if (studySessionId) {
      this.sessionService.getByIdForUser(studySessionId).subscribe(res => {
        res.dateStudied = new Date(res.dateStudied).toISOString().slice(0, -14);
        this.sessionForm.patchValue(res);
      });
    }
  }
  submit() {
    if (this.sessionForm?.invalid) {
      this.errorContainer.errorMessage = 'The form is invalid. Check your entries and try again.';
      this.sessionForm.markAllAsTouched();
      return;
    }
    const sessionRequest = this.sessionForm?.value;
    if (sessionRequest.studySessionId) {
      this.sessionService.updateSession(sessionRequest).subscribe({
        next: res => {
          this.router.navigate(["summary"]);
        },
        error: error => (0,src_app_classes_errorHandler__WEBPACK_IMPORTED_MODULE_1__.handleError)(error, this.errorContainer)
      });
    } else {
      this.sessionService.saveSession(sessionRequest).subscribe({
        next: res => {
          this.router.navigate(["summary"]);
        },
        error: error => (0,src_app_classes_errorHandler__WEBPACK_IMPORTED_MODULE_1__.handleError)(error, this.errorContainer)
      });
    }
  }
  requiredAndTouched(control) {
    return control.hasError("required") && control.touched;
  }
}
StudySessionEntryComponent.ɵfac = function StudySessionEntryComponent_Factory(t) {
  return new (t || StudySessionEntryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_study_session_service__WEBPACK_IMPORTED_MODULE_2__.StudySessionService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder));
};
StudySessionEntryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: StudySessionEntryComponent,
  selectors: [["app-study-session-entry"]],
  decls: 38,
  vars: 5,
  consts: [[1, "container", "is-max-desktop", "p-6"], [1, "title"], [3, "formGroup"], [1, "columns", "is-multiline"], [1, "column", "is-one-third"], [1, "field"], [1, "control"], [1, "label"], ["formControlName", "dateStudied", "type", "date", 1, "input", "is-narrow-field"], [1, "column", "is-one-quarter"], ["formControlName", "topic", "type", "text", "required", "", 1, "input"], ["class", "help is-danger", 4, "ngIf"], ["formControlName", "minutesStudied", "type", "number", 1, "input"], [1, "column", "is-full"], ["rows", "8", "formControlName", "notes", "placeholder", "Enter your notes about your study session.", "required", "", 1, "textarea"], [1, "level"], [1, "level-left"], [1, "level-right"], [1, "field", "is-grouped"], [1, "button", "is-link", 3, "click"], [3, "errorContainer"], [1, "help", "is-danger"]],
  template: function StudySessionEntryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Save New Session");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "form", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Date Studied");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 9)(12, "div", 5)(13, "div", 6)(14, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Topic");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, StudySessionEntryComponent_p_17_Template, 2, 0, "p", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 9)(19, "div", 5)(20, "div", 6)(21, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Minutes Studied");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 13)(25, "div", 5)(26, "div", 6)(27, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Notes");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "textarea", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "nav", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 17)(33, "div", 18)(34, "div", 6)(35, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StudySessionEntryComponent_Template_button_click_35_listener() {
        return ctx.submit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "api-error", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.sessionForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-danger", ctx.requiredAndTouched(ctx.sessionForm.controls["topic"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.requiredAndTouched(ctx.sessionForm.controls["topic"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("errorContainer", ctx.errorContainer);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _api_error_api_error_component__WEBPACK_IMPORTED_MODULE_3__.ApiErrorComponent],
  encapsulation: 2
});


/***/ }),

/***/ 560:
/*!*********************************************************************!*\
  !*** ./src/app/components/study-summary/study-summary.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudySummaryComponent": () => (/* binding */ StudySummaryComponent)
/* harmony export */ });
/* harmony import */ var src_app_classes_errorContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/errorContainer */ 3322);
/* harmony import */ var src_app_classes_errorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/errorHandler */ 1959);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var src_app_services_study_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/study-session.service */ 345);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _api_error_api_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api-error/api-error.component */ 6596);







function StudySummaryComponent_div_4_table_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 7)(1, "tbody")(2, "tr")(3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Study Sessions The Past Month");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "tr")(8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Minutes Studied The Past Month");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "tr")(13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Most Studied Topics");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td")(16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.summary.numberOfStudySessionsThePastMonth);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.summary.numberOfMinutesStudiedThePastMonth);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.summary.mostStudiedTopics.join(", "));
  }
}
function StudySummaryComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, StudySummaryComponent_div_4_table_1_Template, 18, 3, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.summary.numberOfStudySessionsThePastMonth);
  }
}
function StudySummaryComponent_article_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "article", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " You do not have any recent study sessions. Please enter one to see your study summary. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
class StudySummaryComponent {
  constructor(studySessionService) {
    this.studySessionService = studySessionService;
    this.errorContainer = new src_app_classes_errorContainer__WEBPACK_IMPORTED_MODULE_0__.ErrorContainer();
  }
  ngOnInit() {
    this.studySessionService.getSummary().subscribe({
      next: res => {
        this.summary = res;
      },
      error: error => (0,src_app_classes_errorHandler__WEBPACK_IMPORTED_MODULE_1__.handleError)(error, this.errorContainer)
    });
  }
}
StudySummaryComponent.ɵfac = function StudySummaryComponent_Factory(t) {
  return new (t || StudySummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_study_session_service__WEBPACK_IMPORTED_MODULE_2__.StudySessionService));
};
StudySummaryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: StudySummaryComponent,
  selectors: [["app-study-summary"]],
  decls: 8,
  vars: 4,
  consts: [[1, "container", "is-max-desktop", "p-6"], [1, "title"], [3, "errorContainer"], [4, "ngIf"], ["class", "message is-info", 4, "ngIf"], [1, "button", "is-primary", "mt-4", 3, "routerLink"], ["class", "table is-bordered", 4, "ngIf"], [1, "table", "is-bordered"], [1, "message", "is-info"], [1, "message-body"]],
  template: function StudySummaryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Study Summary");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "api-error", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, StudySummaryComponent_div_4_Template, 2, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, StudySummaryComponent_article_5_Template, 3, 0, "article", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " + Add New Study Session ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("errorContainer", ctx.errorContainer);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.summary);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !(ctx.summary == null ? null : ctx.summary.numberOfStudySessionsThePastMonth) && !ctx.errorContainer.errorMessage);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "/enter-session");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _api_error_api_error_component__WEBPACK_IMPORTED_MODULE_3__.ApiErrorComponent],
  encapsulation: 2
});


/***/ }),

/***/ 3941:
/*!*******************************************************************!*\
  !*** ./src/app/components/thought-home/thought-home.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThoughtHomeComponent": () => (/* binding */ ThoughtHomeComponent)
/* harmony export */ });
/* harmony import */ var src_app_classes_errorContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/errorContainer */ 3322);
/* harmony import */ var src_app_classes_errorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/errorHandler */ 1959);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _services_thought_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/thought.service */ 3678);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _thought_thought_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../thought/thought.component */ 6923);






function ThoughtHomeComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.errorContainer.errorMessage, " ");
  }
}
function ThoughtHomeComponent_div_8_thought_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "thought", 9);
  }
  if (rf & 2) {
    const thought_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("thought", thought_r3);
  }
}
function ThoughtHomeComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ThoughtHomeComponent_div_8_thought_1_Template, 1, 1, "thought", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.thoughts);
  }
}
class ThoughtHomeComponent {
  constructor(thoughtService) {
    this.thoughtService = thoughtService;
    this.thoughts = [];
    this.errorContainer = new src_app_classes_errorContainer__WEBPACK_IMPORTED_MODULE_0__.ErrorContainer();
  }
  ngOnInit() {
    this.thoughtService.getRecentThoughts().subscribe({
      next: res => {
        this.thoughts = res;
      },
      error: error => (0,src_app_classes_errorHandler__WEBPACK_IMPORTED_MODULE_1__.handleError)(error, this.errorContainer)
    });
  }
}
ThoughtHomeComponent.ɵfac = function ThoughtHomeComponent_Factory(t) {
  return new (t || ThoughtHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_thought_service__WEBPACK_IMPORTED_MODULE_2__.ThoughtService));
};
ThoughtHomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ThoughtHomeComponent,
  selectors: [["app-thought-home"]],
  decls: 9,
  vars: 2,
  consts: [[1, "container", "is-max-desktop"], [1, "hero"], [1, "hero-body"], [1, "title"], [1, "subtitle"], [4, "ngIf"], ["class", "content m-4", 4, "ngIf"], [1, "content", "m-4"], [3, "thought", 4, "ngFor", "ngForOf"], [3, "thought"]],
  template: function ThoughtHomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " My Thoughts! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " It's a scary place!!!!!!!! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ThoughtHomeComponent_div_7_Template, 2, 1, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ThoughtHomeComponent_div_8_Template, 2, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.errorContainer.errorMessage);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.thoughts);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _thought_thought_component__WEBPACK_IMPORTED_MODULE_3__.ThoughtComponent],
  encapsulation: 2
});


/***/ }),

/***/ 6923:
/*!*********************************************************!*\
  !*** ./src/app/components/thought/thought.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThoughtComponent": () => (/* binding */ ThoughtComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6477);


function ThoughtComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div")(5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, ctx_r0.thought.dateCreated, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.thought.text);
  }
}
class ThoughtComponent {}
ThoughtComponent.ɵfac = function ThoughtComponent_Factory(t) {
  return new (t || ThoughtComponent)();
};
ThoughtComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ThoughtComponent,
  selectors: [["thought"]],
  inputs: {
    thought: "thought"
  },
  decls: 1,
  vars: 1,
  consts: [["class", "mb-4", 4, "ngIf"], [1, "mb-4"]],
  template: function ThoughtComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ThoughtComponent_div_0_Template, 7, 5, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.thought);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe],
  encapsulation: 2
});


/***/ }),

/***/ 968:
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuardService": () => (/* binding */ AuthGuardService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);



class AuthGuardService {
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
  }
  canActivate() {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) {
  return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
AuthGuardService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AuthGuardService,
  factory: AuthGuardService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 993:
/*!******************************************************!*\
  !*** ./src/app/services/auth-interceptor.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptorService": () => (/* binding */ AuthInterceptorService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);

class AuthInterceptorService {
  intercept(req, next) {
    const token = localStorage.getItem("token");
    if (token) {
      const cloned = req.clone({
        headers: req.headers.set("Authorization", "Bearer " + token)
      });
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
AuthInterceptorService.ɵfac = function AuthInterceptorService_Factory(t) {
  return new (t || AuthInterceptorService)();
};
AuthInterceptorService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: AuthInterceptorService,
  factory: AuthInterceptorService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ 467);


class AuthService {
  constructor(jwtHelper) {
    this.jwtHelper = jwtHelper;
  }
  // ...
  isAuthenticated() {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }
}
AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__.JwtHelperService));
};
AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 4120:
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var _app_config_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-config-service.service */ 829);



class LoginService {
  constructor(httpClient, appConfigService) {
    this.httpClient = httpClient;
    this.appConfigService = appConfigService;
    this.controller = "Account";
  }
  createToken(request) {
    return this.httpClient.post(`${this.appConfigService.baseUrl}${this.controller}/CreateToken`, request);
  }
  register(request) {
    return this.httpClient.post(`${this.appConfigService.baseUrl}${this.controller}/Register`, request);
  }
}
LoginService.ɵfac = function LoginService_Factory(t) {
  return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_app_config_service_service__WEBPACK_IMPORTED_MODULE_0__.AppConfigService));
};
LoginService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: LoginService,
  factory: LoginService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 345:
/*!***************************************************!*\
  !*** ./src/app/services/study-session.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudySessionService": () => (/* binding */ StudySessionService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var _app_config_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-config-service.service */ 829);



class StudySessionService {
  constructor(httpClient, appConfigService) {
    this.httpClient = httpClient;
    this.appConfigService = appConfigService;
    this.controller = "StudySession";
  }
  getAllSessions() {
    return this.httpClient.get(`${this.appConfigService.baseUrl}${this.controller}`);
  }
  getRecentSessions() {
    return this.httpClient.get(`${this.appConfigService.baseUrl}${this.controller}/Recent`);
  }
  getByIdForUser(studySessionId) {
    return this.httpClient.get(`${this.appConfigService.baseUrl}${this.controller}/${studySessionId}`);
  }
  saveSession(sessionToSave) {
    return this.httpClient.post(`${this.appConfigService.baseUrl}${this.controller}`, sessionToSave);
  }
  updateSession(sessionToSave) {
    return this.httpClient.put(`${this.appConfigService.baseUrl}${this.controller}`, sessionToSave);
  }
  getSummary() {
    return this.httpClient.get(`${this.appConfigService.baseUrl}${this.controller}/Summary`);
  }
}
StudySessionService.ɵfac = function StudySessionService_Factory(t) {
  return new (t || StudySessionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_app_config_service_service__WEBPACK_IMPORTED_MODULE_0__.AppConfigService));
};
StudySessionService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: StudySessionService,
  factory: StudySessionService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 3678:
/*!*********************************************!*\
  !*** ./src/app/services/thought.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThoughtService": () => (/* binding */ ThoughtService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _app_config_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-config-service.service */ 829);




class ThoughtService {
  get token() {
    return localStorage.getItem('token');
  }
  constructor(httpClient, appConfigService) {
    this.httpClient = httpClient;
    this.appConfigService = appConfigService;
    this.controller = "Thought";
    this.requestOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    };
  }
  getAllThoughts() {
    return this.httpClient.get(`${this.appConfigService.baseUrl}${this.controller}`, this.requestOptions);
  }
  getRecentThoughts() {
    return this.httpClient.get(`${this.appConfigService.baseUrl}${this.controller}/Recent`, this.requestOptions);
  }
  saveThought(thoughtToSave) {
    return this.httpClient.post(`${this.appConfigService.baseUrl}${this.controller}`, thoughtToSave, this.requestOptions);
  }
}
ThoughtService.ɵfac = function ThoughtService_Factory(t) {
  return new (t || ThoughtService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_app_config_service_service__WEBPACK_IMPORTED_MODULE_0__.AppConfigService));
};
ThoughtService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ThoughtService,
  factory: ThoughtService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map