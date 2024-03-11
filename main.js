/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/app.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/// <reference types="@types/multer" />
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const cms_admin_services_1 = __webpack_require__("../../libs/cms-admin-services/src/index.ts");
const userJwtAuth_guard_1 = __webpack_require__("./src/user/userJwtAuth.guard.ts");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const express = tslib_1.__importStar(__webpack_require__("express"));
const platform_express_1 = __webpack_require__("@nestjs/platform-express");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
let AppController = class AppController {
    constructor(cmsAdminSchemaService, custom, data) {
        this.cmsAdminSchemaService = cmsAdminSchemaService;
        this.custom = custom;
        this.data = data;
    }
    hi() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return {
                hi: 'cms-admin-api',
            };
        });
    }
    submitPreviewSite(req, dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.custom.submitPreviewSite(req.user, dto);
        });
    }
    getSchema(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const schema = yield this.cmsAdminSchemaService.getSchema(req.user);
            return schema;
        });
    }
    getTemplateDataDef(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.custom.getTemplateDataDef(dto);
        });
    }
    getCustomerDef() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.custom.getCustomerDef();
        });
    }
    generateJobSite(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.custom.generateSiteJob(dto);
        });
    }
    findToDoCustomers(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.custom.findToDoCustomers(dto);
        });
    }
    generateSite(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.custom.generateSite(dto);
        });
    }
    generatePartialSlotData(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.custom.generatePartialSlotData(dto);
        });
    }
    getRandomImages(query) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.custom.getRandomImages(query);
        });
    }
    writeProjectSlugToRedis(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.custom.writeProjectSlugToRedis(dto);
        });
    }
    addContact(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.custom.addContact(dto);
        });
    }
    getSites(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.data.get({}, 'sites', req.query);
        });
    }
    uploadFile(files) {
        return this.custom.parseKanzhun(files);
    }
    updateSlotDataContact(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.custom.updateSlotDataContact();
        });
    }
    batchCreateProjectFromSite(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.custom.batchCreateProjectFromSite();
        });
    }
    batchWriteProjectSlugToRedis(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.custom.batchWriteProjectSlugToRedis();
        });
    }
    getContactNullCustomers(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.custom.getContactNullCustomers();
        });
    }
    updateCustomersContact(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.custom.updateCustomersContact();
        });
    }
    deploySiteToCos(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.custom.deploySiteToCos(dto);
        });
    }
    requestRedeployAllSites() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.custom.requestRedeployAllSites();
        });
    }
};
exports.AppController = AppController;
tslib_1.__decorate([
    (0, common_1.Get)('/__hi'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "hi", null);
tslib_1.__decorate([
    (0, common_1.Post)('/submitPreviewSite'),
    (0, common_1.UseGuards)(userJwtAuth_guard_1.UserJwtAuthGuard),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_d = typeof cms_admin_services_1.SubmitPreviewSiteSchemaDto !== "undefined" && cms_admin_services_1.SubmitPreviewSiteSchemaDto) === "function" ? _d : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "submitPreviewSite", null);
tslib_1.__decorate([
    (0, common_1.Get)('/getSchema'),
    (0, common_1.UseGuards)(userJwtAuth_guard_1.UserJwtAuthGuard),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "getSchema", null);
tslib_1.__decorate([
    (0, common_1.Post)('/getTemplateDataDef'),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseGuards)(userJwtAuth_guard_1.UserJwtAuthGuard),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_e = typeof cms_admin_services_1.GetTemplateDataDefSchemaDto !== "undefined" && cms_admin_services_1.GetTemplateDataDefSchemaDto) === "function" ? _e : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "getTemplateDataDef", null);
tslib_1.__decorate([
    (0, common_1.Get)('/getCustomerDef'),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseGuards)(userJwtAuth_guard_1.UserJwtAuthGuard),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "getCustomerDef", null);
tslib_1.__decorate([
    (0, common_1.Get)('/generateSiteJob'),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseGuards)(userJwtAuth_guard_1.UserJwtAuthGuard),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_f = typeof cms_admin_services_1.GenerateSiteJobSchemaDto !== "undefined" && cms_admin_services_1.GenerateSiteJobSchemaDto) === "function" ? _f : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "generateJobSite", null);
tslib_1.__decorate([
    (0, common_1.Get)('/findToDoCustomers'),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseGuards)(userJwtAuth_guard_1.UserJwtAuthGuard),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_g = typeof cms_admin_services_1.GenerateSiteJobSchemaDto !== "undefined" && cms_admin_services_1.GenerateSiteJobSchemaDto) === "function" ? _g : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "findToDoCustomers", null);
tslib_1.__decorate([
    (0, common_1.Post)('/generateSite'),
    (0, common_1.UseGuards)(userJwtAuth_guard_1.UserJwtAuthGuard),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_h = typeof cms_admin_services_1.GenerateSiteSchemaDto !== "undefined" && cms_admin_services_1.GenerateSiteSchemaDto) === "function" ? _h : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "generateSite", null);
tslib_1.__decorate([
    (0, common_1.Post)('/generatePartialSlotData'),
    (0, common_1.UseGuards)(userJwtAuth_guard_1.UserJwtAuthGuard),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_j = typeof cms_admin_services_1.GeneratePartialSlotDataSchemaDto !== "undefined" && cms_admin_services_1.GeneratePartialSlotDataSchemaDto) === "function" ? _j : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "generatePartialSlotData", null);
tslib_1.__decorate([
    (0, common_1.Get)('/getRandomImages'),
    (0, common_1.UseGuards)(userJwtAuth_guard_1.UserJwtAuthGuard),
    tslib_1.__param(0, (0, common_1.Query)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_k = typeof cms_admin_services_1.GetRandomImagesQuery !== "undefined" && cms_admin_services_1.GetRandomImagesQuery) === "function" ? _k : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "getRandomImages", null);
tslib_1.__decorate([
    (0, common_1.Post)('/writeProjectSlugToRedis'),
    (0, common_1.UseGuards)(userJwtAuth_guard_1.UserJwtAuthGuard),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_l = typeof cms_admin_services_1.writeProjectSlugToRedisSchemaDto !== "undefined" && cms_admin_services_1.writeProjectSlugToRedisSchemaDto) === "function" ? _l : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "writeProjectSlugToRedis", null);
tslib_1.__decorate([
    (0, common_1.Post)('/addContact'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_m = typeof cms_admin_services_1.addContactSchemaDto !== "undefined" && cms_admin_services_1.addContactSchemaDto) === "function" ? _m : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "addContact", null);
tslib_1.__decorate([
    (0, common_1.Get)('/sites'),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_o = typeof express !== "undefined" && express.Request) === "function" ? _o : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "getSites", null);
tslib_1.__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.AnyFilesInterceptor)()),
    (0, common_1.UseGuards)(userJwtAuth_guard_1.UserJwtAuthGuard),
    tslib_1.__param(0, (0, common_1.UploadedFiles)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Array]),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "uploadFile", null);
tslib_1.__decorate([
    (0, common_1.Post)('/updateSlotDataContact'),
    (0, common_1.UseGuards)(userJwtAuth_guard_1.UserJwtAuthGuard),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_p = typeof express !== "undefined" && express.Request) === "function" ? _p : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "updateSlotDataContact", null);
tslib_1.__decorate([
    (0, common_1.Post)('/batchCreateProjectFromSite'),
    (0, common_1.UseGuards)(userJwtAuth_guard_1.UserJwtAuthGuard),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_q = typeof express !== "undefined" && express.Request) === "function" ? _q : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "batchCreateProjectFromSite", null);
tslib_1.__decorate([
    (0, common_1.Post)('/batchWriteProjectSlugToRedis'),
    (0, common_1.UseGuards)(userJwtAuth_guard_1.UserJwtAuthGuard),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_r = typeof express !== "undefined" && express.Request) === "function" ? _r : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "batchWriteProjectSlugToRedis", null);
tslib_1.__decorate([
    (0, common_1.Get)('/getContactNullCustomers'),
    (0, common_1.UseGuards)(userJwtAuth_guard_1.UserJwtAuthGuard),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_s = typeof express !== "undefined" && express.Request) === "function" ? _s : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "getContactNullCustomers", null);
tslib_1.__decorate([
    (0, common_1.Post)('/updateCustomersContact'),
    (0, common_1.UseGuards)(userJwtAuth_guard_1.UserJwtAuthGuard),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_t = typeof express !== "undefined" && express.Request) === "function" ? _t : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "updateCustomersContact", null);
tslib_1.__decorate([
    (0, common_1.Post)('/deploySiteToCos'),
    (0, common_1.UseGuards)(userJwtAuth_guard_1.UserJwtAuthGuard),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_u = typeof flowda_shared_types_1.deploySiteToCosSchemaDto !== "undefined" && flowda_shared_types_1.deploySiteToCosSchemaDto) === "function" ? _u : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "deploySiteToCos", null);
tslib_1.__decorate([
    (0, common_1.Post)('/requestRedeployAllSites'),
    (0, common_1.UseGuards)(userJwtAuth_guard_1.UserJwtAuthGuard),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "requestRedeployAllSites", null);
exports.AppController = AppController = tslib_1.__decorate([
    (0, common_1.Controller)('/apps'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof cms_admin_services_1.CmsAdminSchemaService !== "undefined" && cms_admin_services_1.CmsAdminSchemaService) === "function" ? _a : Object, typeof (_b = typeof cms_admin_services_1.CustomService !== "undefined" && cms_admin_services_1.CustomService) === "function" ? _b : Object, typeof (_c = typeof flowda_shared_1.DataService !== "undefined" && flowda_shared_1.DataService) === "function" ? _c : Object])
], AppController);


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const app_controller_1 = __webpack_require__("./src/app/app.controller.ts");
const services_module_1 = __webpack_require__("./src/services/services.module.ts");
const flowda_shared_node_1 = __webpack_require__("../../libs/flowda-shared-node/src/index.ts");
const user_controller_1 = __webpack_require__("./src/user/user.controller.ts");
const userLocal_strategy_1 = __webpack_require__("./src/user/userLocal.strategy.ts");
const userJwt_strategy_1 = __webpack_require__("./src/user/userJwt.strategy.ts");
const schedule_1 = __webpack_require__("@nestjs/schedule");
const nestjs_zod_1 = __webpack_require__("nestjs-zod");
const data_controller_1 = __webpack_require__("./src/app/data.controller.ts");
const audit_controller_1 = __webpack_require__("./src/app/audit.controller.ts");
const tasks_module_1 = __webpack_require__("./src/app/tasks.module.ts");
const site_preview_controller_1 = __webpack_require__("./src/app/site-preview.controller.ts");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [services_module_1.ServicesModule, schedule_1.ScheduleModule.forRoot(), tasks_module_1.TasksModule],
        controllers: [data_controller_1.DataController, audit_controller_1.AuditController, app_controller_1.AppController, user_controller_1.UserController, site_preview_controller_1.SitePreviewController],
        providers: [
            {
                provide: core_1.APP_FILTER,
                useClass: flowda_shared_node_1.AppExceptionFilter,
            },
            {
                provide: core_1.APP_PIPE,
                useClass: nestjs_zod_1.ZodValidationPipe,
            },
            userLocal_strategy_1.UserLocalStrategy,
            userJwt_strategy_1.UserJwtStrategy,
        ],
    })
], AppModule);


/***/ }),

/***/ "./src/app/audit.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuditController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const flowda_shared_node_1 = __webpack_require__("../../libs/flowda-shared-node/src/index.ts");
let AuditController = class AuditController {
    constructor(audit) {
        this.audit = audit;
    }
    queryTableFilter(dto) {
        return this.audit.queryAudit(dto);
    }
};
exports.AuditController = AuditController;
tslib_1.__decorate([
    (0, common_1.Post)('/query'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof flowda_shared_node_1.QueryAuditSchemaDto !== "undefined" && flowda_shared_node_1.QueryAuditSchemaDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], AuditController.prototype, "queryTableFilter", null);
exports.AuditController = AuditController = tslib_1.__decorate([
    (0, common_1.Controller)('/audit'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof flowda_shared_node_1.AuditService !== "undefined" && flowda_shared_node_1.AuditService) === "function" ? _a : Object])
], AuditController);


/***/ }),

/***/ "./src/app/data.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const express = tslib_1.__importStar(__webpack_require__("express"));
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const userJwtAuth_guard_1 = __webpack_require__("./src/user/userJwtAuth.guard.ts");
let DataController = class DataController {
    constructor(service) {
        this.service = service;
    }
    get(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.service.get(req.user, req.params[0], req.query);
        });
    }
    query(req, body) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.service.get(req.user, req.params[0], body);
        });
    }
    put(req, values) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.service.put(req.user, req.params[0], values);
        });
    }
    post(req, values) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.service.post(req.user, req.params[0], values);
        });
    }
    remove(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.service.remove(req.user, req.params[0]);
        });
    }
};
exports.DataController = DataController;
tslib_1.__decorate([
    (0, common_1.Get)(''),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof express !== "undefined" && express.Request) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DataController.prototype, "get", null);
tslib_1.__decorate([
    (0, common_1.Post)('query'),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof express !== "undefined" && express.Request) === "function" ? _c : Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DataController.prototype, "query", null);
tslib_1.__decorate([
    (0, common_1.Put)(''),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof express !== "undefined" && express.Request) === "function" ? _d : Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DataController.prototype, "put", null);
tslib_1.__decorate([
    (0, common_1.Post)(''),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_e = typeof express !== "undefined" && express.Request) === "function" ? _e : Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DataController.prototype, "post", null);
tslib_1.__decorate([
    (0, common_1.Delete)(''),
    (0, common_1.HttpCode)(200),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_f = typeof express !== "undefined" && express.Request) === "function" ? _f : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DataController.prototype, "remove", null);
exports.DataController = DataController = tslib_1.__decorate([
    (0, common_1.Controller)('data/*'),
    (0, common_1.UseGuards)(userJwtAuth_guard_1.UserJwtAuthGuard),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof flowda_shared_1.DataService !== "undefined" && flowda_shared_1.DataService) === "function" ? _a : Object])
], DataController);


/***/ }),

/***/ "./src/app/site-preview.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SitePreviewController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const cms_admin_services_1 = __webpack_require__("../../libs/cms-admin-services/src/index.ts");
let SitePreviewController = class SitePreviewController {
    constructor(cmsAdminSchemaService, custom) {
        this.cmsAdminSchemaService = cmsAdminSchemaService;
        this.custom = custom;
    }
    sitePreview(siteId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.custom.previewSite(siteId);
        });
    }
};
exports.SitePreviewController = SitePreviewController;
tslib_1.__decorate([
    (0, common_1.Get)('/preview'),
    (0, common_1.Header)('content-type', 'text/html')
    // 在 nginx 配置
    ,
    (0, common_1.Header)('X-Frame-Options', 'ALLOW-FROM https://cms-1306445775.cos-website.ap-shanghai.myqcloud.com'),
    tslib_1.__param(0, (0, common_1.Query)('siteId')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], SitePreviewController.prototype, "sitePreview", null);
exports.SitePreviewController = SitePreviewController = tslib_1.__decorate([
    (0, common_1.Controller)('/site-preview'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof cms_admin_services_1.CmsAdminSchemaService !== "undefined" && cms_admin_services_1.CmsAdminSchemaService) === "function" ? _a : Object, typeof (_b = typeof cms_admin_services_1.CustomService !== "undefined" && cms_admin_services_1.CustomService) === "function" ? _b : Object])
], SitePreviewController);


/***/ }),

/***/ "./src/app/tasks.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TasksModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const tasks_service_1 = __webpack_require__("./src/app/tasks.service.ts");
let TasksModule = class TasksModule {
};
exports.TasksModule = TasksModule;
exports.TasksModule = TasksModule = tslib_1.__decorate([
    (0, common_1.Module)({
        providers: [tasks_service_1.TasksService],
    })
], TasksModule);


/***/ }),

/***/ "./src/app/tasks.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var TasksService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TasksService = void 0;
const tslib_1 = __webpack_require__("tslib");
const cms_admin_services_1 = __webpack_require__("../../libs/cms-admin-services/src/index.ts");
const common_1 = __webpack_require__("@nestjs/common");
const schedule_1 = __webpack_require__("@nestjs/schedule");
let TasksService = TasksService_1 = class TasksService {
    constructor(customService) {
        this.customService = customService;
        this.logger = new common_1.Logger(TasksService_1.name);
    }
    //
    // @Cron(CMS_ADMIN_ENV.GENERATE_SITE_CRON)
    // async generateSiteJob() {
    //   this.logger.debug('Called generateSiteJob')
    //   const ret = await this.customService.generateSiteJob({})
    //   this.logger.log(`generateSiteJob ${JSON.stringify(ret)}`)
    // }
    deployAllSitesToCosJob() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.debug('Called deployAllSitesToCosJob');
            const ret = yield this.customService.deployAllSitesToCosJob();
            this.logger.log(`deployAllSitesToCosJob ${JSON.stringify(ret)}`);
        });
    }
};
exports.TasksService = TasksService;
tslib_1.__decorate([
    (0, schedule_1.Cron)(cms_admin_services_1.CMS_ADMIN_ENV.DEPLOY_ALL_SITES_CRON),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], TasksService.prototype, "deployAllSitesToCosJob", null);
exports.TasksService = TasksService = TasksService_1 = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof cms_admin_services_1.CustomService !== "undefined" && cms_admin_services_1.CustomService) === "function" ? _a : Object])
], TasksService);


/***/ }),

/***/ "./src/loadModule.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/* eslint-disable @typescript-eslint/no-var-requires */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadModule = void 0;
const cms_admin_services_1 = __webpack_require__("../../libs/cms-admin-services/src/index.ts");
const client_cms_admin_1 = __webpack_require__("@prisma/client-cms_admin");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
const flowda_shared_node_1 = __webpack_require__("../../libs/flowda-shared-node/src/index.ts");
const trpc_1 = __webpack_require__("./src/trpc/trpc.ts");
const redis_1 = __webpack_require__("@upstash/redis");
const cms_admin_services_trpc_server_1 = __webpack_require__("../../libs/cms-admin-services-trpc-server/src/index.ts");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
// const { Redis } = require('@upstash/redis')
const COS = __webpack_require__("cos-nodejs-sdk-v5");
console.log('---------- ENV --------------');
console.log('PROXY', cms_admin_services_1.CMS_ADMIN_ENV.PROXY);
console.log('FLOWDA_URL', cms_admin_services_1.CMS_ADMIN_ENV.FLOWDA_URL);
console.log('GENERATE_SITE_CRON', cms_admin_services_1.CMS_ADMIN_ENV.GENERATE_SITE_CRON);
console.log('UPSTASH_REDIS_REST_URL', cms_admin_services_1.CMS_ADMIN_ENV.UPSTASH_REDIS_REST_URL);
console.log('---------- ENV --------------');
function loadModule(container) {
    const prisma = new client_cms_admin_1.PrismaClient({
        log: [
            // 'query',
            'info',
            'warn',
            'error',
        ],
    });
    // todo: 似乎在线上多个 connection 会有问题（错位），就是 Site.update 变成了 Project.update 细节就不写了
    // 总之，这种方法风险高，而且 dub 迁移过来之后不需要考虑了，尽量不做数据同步
    //   .$extends({
    //   name: DubSyncExtname,
    //   query: {
    // site: {
    //   async $allOperations({ model, operation, args, query }) {
    //     if (operation === 'update') {
    //       if (typeof args.data.name === 'string' && args.where.id != null) {
    //         const prevRet = await prisma.site.findUniqueOrThrow({
    //           where: {
    //             id: args.where.id,
    //           },
    //         })
    //         if (prevRet.projectId != null) {
    //           console.log(`[prisma.$extend] ${model}.${operation}(${JSON.stringify(args, null, 2)})`)
    //           return prisma.project.update({
    //             where: {
    //               id: prevRet.projectId,
    //             },
    //             data: {
    //               name: args.data.name,
    //             },
    //           })
    //         }
    //       }
    //     }
    //     return query(args)
    //   },
    // },
    // 已经将 dub 迁移，直接在代码里操作即可
    // project: {
    //   async $allOperations({ model, operation, args, query }) {
    //     if (operation === 'update') {
    //       if (typeof args.where.slug === 'string') {
    //         const projectRet = await this.prisma.project.findUniqueOrThrow({
    //           where: {
    //             slug: args.where.slug,
    //           },
    //         })
    //         console.log(`[prisma.$extend] ${model}.${operation}(${JSON.stringify(args, null, 2)})`)
    //         const ret = await this.prisma.site.update({
    //           where: {
    //             projectId: projectRet.id,
    //           },
    //           data: {
    //             name: args.data.name,
    //           },
    //         })
    //         return ret
    //       }
    //     }
    //     return query(args)
    //   },
    // },
    //   },
    // }) as PrismaClient
    container.bind(flowda_shared_types_1.PrismaClientSymbol).toConstantValue(prisma);
    const redis = new redis_1.Redis({
        url: cms_admin_services_1.CMS_ADMIN_ENV.UPSTASH_REDIS_REST_URL,
        token: cms_admin_services_1.CMS_ADMIN_ENV.UPSTASH_REDIS_REST_TOKEN,
    });
    container.bind(cms_admin_services_1.DubRedisSymbol).toConstantValue(redis);
    container.bind(flowda_shared_types_1.FlowdaTrpcClientSymbol).toConstantValue(trpc_1.trpc);
    container.bind(flowda_shared_types_1.COSSymbol).toDynamicValue(() => {
        return new COS({
            SecretId: cms_admin_services_1.CMS_ADMIN_ENV.COS_ID,
            SecretKey: cms_admin_services_1.CMS_ADMIN_ENV.COS_KEY,
        });
    });
    container.load(flowda_shared_1.flowdaSharedModule);
    container.load(flowda_shared_node_1.flowdaSharedNodeModule);
    container.load(cms_admin_services_1.cmsAdminServiceModule);
    container.load(cms_admin_services_trpc_server_1.cmsAdminServiceTrpcServerModule);
}
exports.loadModule = loadModule;


/***/ }),

/***/ "./src/services/services.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServicesModule = exports.servicesContainer = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const loadModule_1 = __webpack_require__("./src/loadModule.ts");
exports.servicesContainer = new inversify_1.Container();
(0, loadModule_1.loadModule)(exports.servicesContainer);
const services = (0, flowda_shared_1.getServices)(exports.servicesContainer);
let ServicesModule = class ServicesModule {
    constructor() { }
};
exports.ServicesModule = ServicesModule;
exports.ServicesModule = ServicesModule = tslib_1.__decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: services,
        exports: services,
    }),
    tslib_1.__metadata("design:paramtypes", [])
], ServicesModule);


/***/ }),

/***/ "./src/trpc/trpc.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.trpc = void 0;
const client_1 = __webpack_require__("@trpc/client");
const cms_admin_services_1 = __webpack_require__("../../libs/cms-admin-services/src/index.ts");
exports.trpc = (0, client_1.createTRPCProxyClient)({
    links: [
        (0, client_1.httpBatchLink)({
            url: `${cms_admin_services_1.CMS_ADMIN_ENV.FLOWDA_URL}/flowda-api/trpc`,
        }),
    ],
    transformer: {
        input: {
            // on client
            serialize: object => object,
            // on server -> resolver
            deserialize: object => object,
        },
        output: {
            // on server -> client
            serialize: object => object,
            // on client
            deserialize: object => object,
        },
    },
});


/***/ }),

/***/ "./src/user/user.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var UserController_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const userLocalAuth_guard_1 = __webpack_require__("./src/user/userLocalAuth.guard.ts");
const cms_admin_services_1 = __webpack_require__("../../libs/cms-admin-services/src/index.ts");
const userJwtAuth_guard_1 = __webpack_require__("./src/user/userJwtAuth.guard.ts");
let UserController = UserController_1 = class UserController {
    constructor(service) {
        this.service = service;
        this.logger = new common_1.Logger(UserController_1.name);
    }
    login(req) {
        return req.user;
    }
    logout(req) {
        // 客户端清空 token
        // 服务端清空 refresh token
        // 暂时不做 blacklist access_token 失效时间 10min
        return req.user;
    }
};
exports.UserController = UserController;
tslib_1.__decorate([
    (0, common_1.UseGuards)(userLocalAuth_guard_1.UserLocalAuthGuard),
    (0, common_1.Post)('login'),
    (0, common_1.HttpCode)(200),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UserController.prototype, "login", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(userJwtAuth_guard_1.UserJwtAuthGuard),
    (0, common_1.Post)('logout'),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UserController.prototype, "logout", null);
exports.UserController = UserController = UserController_1 = tslib_1.__decorate([
    (0, common_1.Controller)('user'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof cms_admin_services_1.UserService !== "undefined" && cms_admin_services_1.UserService) === "function" ? _a : Object])
], UserController);


/***/ }),

/***/ "./src/user/userJwt.strategy.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var UserJwtStrategy_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserJwtStrategy = void 0;
const tslib_1 = __webpack_require__("tslib");
const passport_1 = __webpack_require__("@nestjs/passport");
const passport_jwt_1 = __webpack_require__("passport-jwt");
const common_1 = __webpack_require__("@nestjs/common");
const cms_admin_services_1 = __webpack_require__("../../libs/cms-admin-services/src/index.ts");
let UserJwtStrategy = UserJwtStrategy_1 = class UserJwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'userJwt') {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: cms_admin_services_1.CMS_ADMIN_ENV.ACCESS_TOKEN_SECRET,
        });
        this.logger = new common_1.Logger(UserJwtStrategy_1.name);
    }
    validate(payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return payload;
        });
    }
};
exports.UserJwtStrategy = UserJwtStrategy;
exports.UserJwtStrategy = UserJwtStrategy = UserJwtStrategy_1 = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [])
], UserJwtStrategy);


/***/ }),

/***/ "./src/user/userJwtAuth.guard.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserJwtAuthGuard = void 0;
const tslib_1 = __webpack_require__("tslib");
const passport_1 = __webpack_require__("@nestjs/passport");
const common_1 = __webpack_require__("@nestjs/common");
let UserJwtAuthGuard = class UserJwtAuthGuard extends (0, passport_1.AuthGuard)('userJwt') {
};
exports.UserJwtAuthGuard = UserJwtAuthGuard;
exports.UserJwtAuthGuard = UserJwtAuthGuard = tslib_1.__decorate([
    (0, common_1.Injectable)()
], UserJwtAuthGuard);


/***/ }),

/***/ "./src/user/userLocal.strategy.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var UserLocalStrategy_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserLocalStrategy = void 0;
const tslib_1 = __webpack_require__("tslib");
const passport_1 = __webpack_require__("@nestjs/passport");
const passport_local_1 = __webpack_require__("passport-local");
const common_1 = __webpack_require__("@nestjs/common");
const cms_admin_services_1 = __webpack_require__("../../libs/cms-admin-services/src/index.ts");
let UserLocalStrategy = UserLocalStrategy_1 = class UserLocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy, 'userLocal') {
    constructor(user) {
        super({
            usernameField: 'username',
            passwordField: 'password',
        });
        this.user = user;
        this.logger = new common_1.Logger(UserLocalStrategy_1.name);
    }
    validate(username, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // eslint-disable-next-line no-useless-catch
            const tokens = yield this.user.validate(username, password);
            return tokens;
        });
    }
};
exports.UserLocalStrategy = UserLocalStrategy;
exports.UserLocalStrategy = UserLocalStrategy = UserLocalStrategy_1 = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof cms_admin_services_1.UserService !== "undefined" && cms_admin_services_1.UserService) === "function" ? _a : Object])
], UserLocalStrategy);


/***/ }),

/***/ "./src/user/userLocalAuth.guard.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserLocalAuthGuard = void 0;
const tslib_1 = __webpack_require__("tslib");
const passport_1 = __webpack_require__("@nestjs/passport");
const common_1 = __webpack_require__("@nestjs/common");
let UserLocalAuthGuard = class UserLocalAuthGuard extends (0, passport_1.AuthGuard)('userLocal') {
};
exports.UserLocalAuthGuard = UserLocalAuthGuard;
exports.UserLocalAuthGuard = UserLocalAuthGuard = tslib_1.__decorate([
    (0, common_1.Injectable)()
], UserLocalAuthGuard);


/***/ }),

/***/ "../../libs/cms-admin-services-trpc-server/src/cmsAdminServiceTrpcServer.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cmsAdminServiceTrpcServerModule = void 0;
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
const trpc_service_1 = __webpack_require__("../../libs/cms-admin-services-trpc-server/src/trpc/trpc.service.ts");
const trpc_router_1 = __webpack_require__("../../libs/cms-admin-services-trpc-server/src/trpc/trpc.router.ts");
const project_router_1 = __webpack_require__("../../libs/cms-admin-services-trpc-server/src/trpc/project.router.ts");
const user_router_1 = __webpack_require__("../../libs/cms-admin-services-trpc-server/src/trpc/user.router.ts");
const schema_router_1 = __webpack_require__("../../libs/cms-admin-services-trpc-server/src/trpc/schema.router.ts");
const data_router_1 = __webpack_require__("../../libs/cms-admin-services-trpc-server/src/trpc/data.router.ts");
exports.cmsAdminServiceTrpcServerModule = new inversify_1.ContainerModule(bind => {
    bind(trpc_service_1.TrpcService).toSelf().inSingletonScope();
    bind(project_router_1.ProjectRouter).toSelf().inSingletonScope();
    bind(user_router_1.UserRouter).toSelf().inSingletonScope();
    bind(schema_router_1.SchemaRouter).toSelf().inSingletonScope();
    bind(data_router_1.DataRouter).toSelf().inSingletonScope();
    (0, flowda_shared_1.bindService)(bind, flowda_shared_types_1.ServiceSymbol, trpc_router_1.TrpcRouter);
});


/***/ }),

/***/ "../../libs/cms-admin-services-trpc-server/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const zod_openapi_1 = __webpack_require__("@anatine/zod-openapi");
const zod_1 = __webpack_require__("zod");
(0, zod_openapi_1.extendZodWithOpenApi)(zod_1.z);
tslib_1.__exportStar(__webpack_require__("../../libs/cms-admin-services-trpc-server/src/cmsAdminServiceTrpcServer.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/cms-admin-services-trpc-server/src/trpc/trpc.router.ts"), exports);


/***/ }),

/***/ "../../libs/cms-admin-services-trpc-server/src/trpc/data.router.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var DataRouter_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataRouter = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const trpc_service_1 = __webpack_require__("../../libs/cms-admin-services-trpc-server/src/trpc/trpc.service.ts");
const zod_1 = __webpack_require__("zod");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
let DataRouter = DataRouter_1 = class DataRouter {
    constructor(trpc, dataService, loggerFactory) {
        this.trpc = trpc;
        this.dataService = dataService;
        this.router = this.trpc.router({
            get: this.trpc.procedure
                .input(zod_1.z.object({
                user: zod_1.z.any(),
                path: zod_1.z.string(),
                query: zod_1.z.any(),
            }))
                .query(({ input, ctx }) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                return this.dataService.get(input.user, input.path, input.query);
            })),
            put: this.trpc.procedure
                .input(zod_1.z.object({
                user: zod_1.z.any(),
                path: zod_1.z.string(),
                values: zod_1.z.any(),
            }))
                .mutation(({ input, ctx }) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                return this.dataService.put(input.user, input.path, input.values);
            })),
        });
        this.logger = loggerFactory(DataRouter_1.name);
    }
};
exports.DataRouter = DataRouter;
exports.DataRouter = DataRouter = DataRouter_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(trpc_service_1.TrpcService)),
    tslib_1.__param(1, (0, inversify_1.inject)(flowda_shared_types_1.DataServiceSymbol)),
    tslib_1.__param(2, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof trpc_service_1.TrpcService !== "undefined" && trpc_service_1.TrpcService) === "function" ? _a : Object, Object, Function])
], DataRouter);


/***/ }),

/***/ "../../libs/cms-admin-services-trpc-server/src/trpc/project.router.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var ProjectRouter_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectRouter = exports.updateProjectSchema = exports.queryProjectUsersSchema = exports.queryLinksSchema = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const trpc_service_1 = __webpack_require__("../../libs/cms-admin-services-trpc-server/src/trpc/trpc.service.ts");
const zod_1 = __webpack_require__("zod");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
const db = tslib_1.__importStar(__webpack_require__("@prisma/client-cms_admin"));
exports.queryLinksSchema = zod_1.z.object({
    projectId: zod_1.z.string(),
});
exports.queryProjectUsersSchema = zod_1.z.object({
    projectId: zod_1.z.string(),
});
exports.updateProjectSchema = zod_1.z.object({
    previousSlug: zod_1.z.string(),
    slug: zod_1.z.string().optional(),
    name: zod_1.z.string().optional(),
});
let ProjectRouter = ProjectRouter_1 = class ProjectRouter {
    constructor(trpc, flowdaTrpc, prisma, loggerFactory) {
        this.trpc = trpc;
        this.flowdaTrpc = flowdaTrpc;
        this.prisma = prisma;
        this.router = this.trpc.router({
            queryLinks: this.trpc.procedure.input(exports.queryLinksSchema).query(({ input }) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const siteRet = yield this.prisma.site.findUniqueOrThrow({
                    where: {
                        projectId: input.projectId,
                    },
                });
                return siteRet;
            })),
            queryProjectUsers: this.trpc.procedure.input(exports.queryProjectUsersSchema).query(({ input }) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const projectUsersRet = yield this.prisma.projectUsers.findMany({
                    where: {
                        projectId: input.projectId,
                    },
                    select: {
                        userId: true,
                    },
                });
                const userIds = projectUsersRet.filter(i => i.userId != null).map(i => Number(i.userId));
                const usersRet = yield this.flowdaTrpc.user.findMany.query({ userIds: userIds });
                return projectUsersRet.map(ret => {
                    return Object.assign(ret, {
                        user: usersRet.find(u => u.id === Number(ret.userId)),
                    });
                });
            })),
            updateProject: this.trpc.procedure.input(exports.updateProjectSchema).mutation(({ input }) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                this.logger.debug(`[updateProject] invoked, ${JSON.stringify(input, null, 2)}`);
                const ret = yield this.prisma.project.update({
                    where: {
                        slug: input.previousSlug,
                    },
                    data: Object.assign(Object.assign({}, (input.name && { name: input.name })), (input.slug && { slug: input.slug })),
                });
                return ret;
            })),
            findProjectOwner: this.trpc.procedure
                .input(zod_1.z.object({
                slug: zod_1.z.string(),
            }))
                .query(({ input }) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const projectUserRet = yield this.prisma.projectUsers.findFirst({
                    where: {
                        role: 'owner',
                        project: {
                            slug: input.slug,
                        },
                    },
                });
                if ((projectUserRet === null || projectUserRet === void 0 ? void 0 : projectUserRet.userId) != null) {
                    const userRet = yield this.flowdaTrpc.user.findUnique.query({ id: Number(projectUserRet.userId) });
                    if (userRet) {
                        return {
                            email: userRet.email,
                        };
                    }
                    else {
                        return null;
                    }
                }
                else {
                    return null;
                }
            })),
        });
        this.logger = loggerFactory(ProjectRouter_1.name);
    }
};
exports.ProjectRouter = ProjectRouter;
exports.ProjectRouter = ProjectRouter = ProjectRouter_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(trpc_service_1.TrpcService)),
    tslib_1.__param(1, (0, inversify_1.inject)(flowda_shared_types_1.FlowdaTrpcClientSymbol)),
    tslib_1.__param(2, (0, inversify_1.inject)(flowda_shared_types_1.PrismaClientSymbol)),
    tslib_1.__param(3, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof trpc_service_1.TrpcService !== "undefined" && trpc_service_1.TrpcService) === "function" ? _a : Object, Object, typeof (_b = typeof db !== "undefined" && db.PrismaClient) === "function" ? _b : Object, Function])
], ProjectRouter);


/***/ }),

/***/ "../../libs/cms-admin-services-trpc-server/src/trpc/schema.router.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var SchemaRouter_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SchemaRouter = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const trpc_service_1 = __webpack_require__("../../libs/cms-admin-services-trpc-server/src/trpc/trpc.service.ts");
const zod_1 = __webpack_require__("zod");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
let SchemaRouter = SchemaRouter_1 = class SchemaRouter {
    constructor(trpc, schemaService, loggerFactory) {
        this.trpc = trpc;
        this.schemaService = schemaService;
        this.schemaRouter = this.trpc.router({
            getSchema: this.trpc.procedure.input(zod_1.z.object({})).query(({ input }) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const zodSchema = this.schemaService.getSchema();
                return zodSchema;
            })),
            getSchemaCache: this.trpc.procedure.input(zod_1.z.object({})).query(({ input }) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                return this.schemaService.getSchemaCache();
            })),
        });
        this.logger = loggerFactory(SchemaRouter_1.name);
    }
};
exports.SchemaRouter = SchemaRouter;
exports.SchemaRouter = SchemaRouter = SchemaRouter_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(trpc_service_1.TrpcService)),
    tslib_1.__param(1, (0, inversify_1.inject)(flowda_shared_types_1.SchemaServiceSymbol)),
    tslib_1.__param(2, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof trpc_service_1.TrpcService !== "undefined" && trpc_service_1.TrpcService) === "function" ? _a : Object, Object, Function])
], SchemaRouter);


/***/ }),

/***/ "../../libs/cms-admin-services-trpc-server/src/trpc/trpc.router.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var TrpcRouter_1;
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TrpcRouter = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const trpc_service_1 = __webpack_require__("../../libs/cms-admin-services-trpc-server/src/trpc/trpc.service.ts");
const express_1 = __webpack_require__("@trpc/server/adapters/express");
const project_router_1 = __webpack_require__("../../libs/cms-admin-services-trpc-server/src/trpc/project.router.ts");
const user_router_1 = __webpack_require__("../../libs/cms-admin-services-trpc-server/src/trpc/user.router.ts");
const schema_router_1 = __webpack_require__("../../libs/cms-admin-services-trpc-server/src/trpc/schema.router.ts");
const data_router_1 = __webpack_require__("../../libs/cms-admin-services-trpc-server/src/trpc/data.router.ts");
let TrpcRouter = TrpcRouter_1 = class TrpcRouter {
    constructor(trpc, projectRouter, userRouter, dataRouter, schemaRouter, loggerFactory) {
        this.trpc = trpc;
        this.projectRouter = projectRouter;
        this.userRouter = userRouter;
        this.dataRouter = dataRouter;
        this.schemaRouter = schemaRouter;
        this.appRouter = this.trpc.router({
            project: this.projectRouter.router,
            user: this.userRouter.router,
            schema: this.schemaRouter.schemaRouter,
            data: this.dataRouter.router,
        });
        this.logger = loggerFactory(TrpcRouter_1.name);
    }
    applyMiddleware(app, globalPrefix) {
        this.logger.log(`applyMiddleware ${globalPrefix}/trpc`);
        app.use(`/${globalPrefix}/trpc`, (0, express_1.createExpressMiddleware)({
            router: this.appRouter,
        }));
    }
};
exports.TrpcRouter = TrpcRouter;
exports.TrpcRouter = TrpcRouter = TrpcRouter_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(trpc_service_1.TrpcService)),
    tslib_1.__param(1, (0, inversify_1.inject)(project_router_1.ProjectRouter)),
    tslib_1.__param(2, (0, inversify_1.inject)(user_router_1.UserRouter)),
    tslib_1.__param(3, (0, inversify_1.inject)(data_router_1.DataRouter)),
    tslib_1.__param(4, (0, inversify_1.inject)(schema_router_1.SchemaRouter)),
    tslib_1.__param(5, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof trpc_service_1.TrpcService !== "undefined" && trpc_service_1.TrpcService) === "function" ? _a : Object, typeof (_b = typeof project_router_1.ProjectRouter !== "undefined" && project_router_1.ProjectRouter) === "function" ? _b : Object, typeof (_c = typeof user_router_1.UserRouter !== "undefined" && user_router_1.UserRouter) === "function" ? _c : Object, typeof (_d = typeof data_router_1.DataRouter !== "undefined" && data_router_1.DataRouter) === "function" ? _d : Object, typeof (_e = typeof schema_router_1.SchemaRouter !== "undefined" && schema_router_1.SchemaRouter) === "function" ? _e : Object, Function])
], TrpcRouter);


/***/ }),

/***/ "../../libs/cms-admin-services-trpc-server/src/trpc/trpc.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TrpcService = void 0;
const tslib_1 = __webpack_require__("tslib");
const server_1 = __webpack_require__("@trpc/server");
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_node_1 = __webpack_require__("../../libs/flowda-shared-node/src/index.ts");
let TrpcService = class TrpcService {
    constructor() {
        this.trpc = server_1.initTRPC.create({
            transformer: flowda_shared_node_1.transformer,
            errorFormatter: flowda_shared_node_1.errorFormatter,
        });
        this.procedure = this.trpc.procedure;
        this.router = this.trpc.router;
        this.mergeRouters = this.trpc.mergeRouters;
    }
};
exports.TrpcService = TrpcService;
exports.TrpcService = TrpcService = tslib_1.__decorate([
    (0, inversify_1.injectable)()
], TrpcService);


/***/ }),

/***/ "../../libs/cms-admin-services-trpc-server/src/trpc/user.router.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var UserRouter_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserRouter = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const trpc_service_1 = __webpack_require__("../../libs/cms-admin-services-trpc-server/src/trpc/trpc.service.ts");
const zod_1 = __webpack_require__("zod");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
const db = tslib_1.__importStar(__webpack_require__("@prisma/client-flowda"));
let UserRouter = UserRouter_1 = class UserRouter {
    constructor(trpc, flowdaTrpc, prisma, loggerFactory) {
        this.trpc = trpc;
        this.flowdaTrpc = flowdaTrpc;
        this.prisma = prisma;
        this.router = this.trpc.router({
            findUnique: this.trpc.procedure
                .input(zod_1.z.object({
                email: zod_1.z.string().optional(),
                id: zod_1.z.number().optional(),
            }))
                .query(({ input }) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                return this.flowdaTrpc.user.findUnique.query(input);
            })),
        });
        this.logger = loggerFactory(UserRouter_1.name);
    }
};
exports.UserRouter = UserRouter;
exports.UserRouter = UserRouter = UserRouter_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(trpc_service_1.TrpcService)),
    tslib_1.__param(1, (0, inversify_1.inject)(flowda_shared_types_1.FlowdaTrpcClientSymbol)),
    tslib_1.__param(2, (0, inversify_1.inject)(flowda_shared_types_1.PrismaClientSymbol)),
    tslib_1.__param(3, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof trpc_service_1.TrpcService !== "undefined" && trpc_service_1.TrpcService) === "function" ? _a : Object, Object, typeof (_b = typeof db !== "undefined" && db.PrismaClient) === "function" ? _b : Object, Function])
], UserRouter);


/***/ }),

/***/ "../../libs/cms-admin-services/src/cmsAdminService.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cmsAdminServiceModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
const prisma_cms_admin_1 = __webpack_require__("../../libs/prisma-cms_admin/src/index.ts");
const schema = tslib_1.__importStar(__webpack_require__("../../libs/cms-admin-services/src/lib/schema.ts"));
const user_service_1 = __webpack_require__("../../libs/cms-admin-services/src/services/user.service.ts");
const custom_service_1 = __webpack_require__("../../libs/cms-admin-services/src/services/custom.service.ts");
const cmsAdminSchema_service_1 = __webpack_require__("../../libs/cms-admin-services/src/services/cmsAdminSchema.service.ts");
const dub_service_1 = __webpack_require__("../../libs/cms-admin-services/src/services/dub.service.ts");
exports.cmsAdminServiceModule = new inversify_1.ContainerModule((bind) => {
    bind(flowda_shared_types_1.PrismaZodSchemaSymbol).toConstantValue(prisma_cms_admin_1.zt);
    bind(flowda_shared_types_1.CustomZodSchemaSymbol).toConstantValue(schema);
    bind(dub_service_1.DubService).toSelf().inSingletonScope();
    (0, flowda_shared_1.bindService)(bind, flowda_shared_types_1.ServiceSymbol, user_service_1.UserService);
    (0, flowda_shared_1.bindService)(bind, flowda_shared_types_1.ServiceSymbol, custom_service_1.CustomService);
    (0, flowda_shared_1.bindService)(bind, flowda_shared_types_1.ServiceSymbol, cmsAdminSchema_service_1.CmsAdminSchemaService);
});


/***/ }),

/***/ "../../libs/cms-admin-services/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const zod_openapi_1 = __webpack_require__("@anatine/zod-openapi");
const zod_1 = __webpack_require__("zod");
(0, zod_openapi_1.extendZodWithOpenApi)(zod_1.z);
tslib_1.__exportStar(__webpack_require__("../../libs/cms-admin-services/src/cmsAdminService.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/cms-admin-services/src/lib/schema.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/cms-admin-services/src/lib/cms-admin-env.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/cms-admin-services/src/services/user.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/cms-admin-services/src/services/cmsAdminSchema.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/cms-admin-services/src/services/custom.dto.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/cms-admin-services/src/services/custom.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/cms-admin-services/src/services/dub.dto.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/cms-admin-services/src/services/dub.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/cms-admin-services/src/symbols.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/cms-admin-services/src/lib/consts.ts"), exports);


/***/ }),

/***/ "../../libs/cms-admin-services/src/lib/cms-admin-env.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CMS_ADMIN_ENV = void 0;
const znv_1 = __webpack_require__("znv");
const zod_1 = __webpack_require__("zod");
exports.CMS_ADMIN_ENV = (0, znv_1.parseEnv)(process.env, {
    TEST_ENV: zod_1.z.string().optional(),
    DATABASE_URL: zod_1.z.string().min(1),
    ACCESS_TOKEN_SECRET: zod_1.z.string().min(1), // 需要和 FLOWDA_ENV.ACCESS_TOKEN_SECRET 一致
    FLOWDA_URL: zod_1.z.string().min(1),
    COS_KEY: zod_1.z.string().optional(),
    COS_ID: zod_1.z.string().optional(),
    PROXY: zod_1.z.string().default('n'),
    UPSTASH_REDIS_REST_URL: zod_1.z.string().default('n'),
    UPSTASH_REDIS_REST_TOKEN: zod_1.z.string().default('n'),
    GENERATE_SITE_CRON: zod_1.z.string().default('*/10 * * * *'),
    DEPLOY_ALL_SITES_CRON: zod_1.z.string().default('*/11 * * * *'),
});


/***/ }),

/***/ "../../libs/cms-admin-services/src/lib/consts.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RedisPrefix = void 0;
exports.RedisPrefix = 'invio:';


/***/ }),

/***/ "../../libs/cms-admin-services/src/lib/dynamic-schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * 一些 json 字段的 zod 定义
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomerDataDef = void 0;
const zod_1 = __webpack_require__("zod");
exports.CustomerDataDef = zod_1.z.object({
    companyName: zod_1.z.string(),
    description: zod_1.z.string(),
    contact: zod_1.z.object({
        address: zod_1.z.string(),
        phone: zod_1.z.string(),
        email: zod_1.z.string(),
    }),
    icp: zod_1.z.string(),
});


/***/ }),

/***/ "../../libs/cms-admin-services/src/lib/schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectUsersSchema = exports.ContactResourceSchema = exports.ImageLibraryResourceSchema = exports.LinkResourceSchema = exports.ProjectResourceSchema = exports.CustomerRawResourceSchema = exports.CustomerResourceSchema = exports.SiteResourceSchema = exports.SiteTemplateDataDefResourceSchema = exports.SiteTemplateResourceSchema = void 0;
const prisma_cms_admin_1 = __webpack_require__("../../libs/prisma-cms_admin/src/index.ts");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const zod_1 = __webpack_require__("zod");
exports.SiteTemplateResourceSchema = prisma_cms_admin_1.SiteTemplateWithRelationsSchema.extend({
    __meta: (0, flowda_shared_1.meta)({
        extends: 'SiteTemplateSchema',
    }),
}).openapi({
    custom: {
        route_prefix: '/resources/site_templates',
    },
});
exports.SiteTemplateDataDefResourceSchema = prisma_cms_admin_1.SiteTemplateDataDefWithRelationsSchema.extend({
    __meta: (0, flowda_shared_1.meta)({
        extends: 'SiteTemplateDataDefSchema',
    }),
}).openapi({
    custom: {
        route_prefix: '/resources/site_templates',
    },
});
exports.SiteResourceSchema = prisma_cms_admin_1.SiteWithRelationsSchema.extend({
    editableUrl: zod_1.z.string().openapi({ title: '可编辑链接', prisma: false }),
    __meta: (0, flowda_shared_1.meta)({
        extends: 'SiteSchema',
    }),
}).openapi({
    custom: {
        route_prefix: '/resources/sites',
    },
});
exports.CustomerResourceSchema = prisma_cms_admin_1.CustomerWithRelationsSchema.extend({
    __meta: (0, flowda_shared_1.meta)({
        extends: 'CustomerSchema',
    }),
}).openapi({
    custom: {
        route_prefix: '/resources/customers',
    },
});
exports.CustomerRawResourceSchema = prisma_cms_admin_1.CustomerRawSchema.extend({
    __meta: (0, flowda_shared_1.meta)({
        extends: 'CustomerRawSchema',
    }),
}).openapi({
    custom: {
        route_prefix: '/resources/customer_raws',
    },
});
exports.ProjectResourceSchema = prisma_cms_admin_1.ProjectWithRelationsSchema.omit({
    invites: true,
    sentEmails: true,
    domains: true,
    tags: true,
    site: true,
})
    .extend({
    __meta: (0, flowda_shared_1.meta)({
        extends: 'ProjectSchema',
    }),
})
    .openapi({
    custom: {
        route_prefix: '/resources/sites',
    },
});
// export const UserResourceSchema = ProjectUsersSchema.extend({
//   __meta: meta({
//     extends: 'ProjectUsersSchema',
//   }),
// }).openapi({
//   custom: {
//     route_prefix: '/resources/sites',
//   },
// })
exports.LinkResourceSchema = prisma_cms_admin_1.LinkSchema.extend({
    __meta: (0, flowda_shared_1.meta)({
        extends: 'LinkSchema',
    }),
}).openapi({
    custom: {
        route_prefix: '/resources/sites',
    },
});
exports.ImageLibraryResourceSchema = prisma_cms_admin_1.ImageLibrarySchema.extend({
    __meta: (0, flowda_shared_1.meta)({
        extends: 'ImageLibrarySchema',
    }),
}).openapi({
    custom: {
        route_prefix: '/resources/site_templates',
    },
});
exports.ContactResourceSchema = prisma_cms_admin_1.ContactWithRelationsSchema.extend({
    __meta: (0, flowda_shared_1.meta)({
        extends: 'ContactSchema',
    }),
}).openapi({
    custom: {
        route_prefix: '/resources/contacts',
    },
});
exports.ProjectUsersSchema = prisma_cms_admin_1.ProjectUsersWithRelationsSchema.extend({
    __meta: (0, flowda_shared_1.meta)({
        extends: 'ProjectUsersSchema',
    }),
}).openapi({
    custom: {
        route_prefix: '/resources/sites',
    },
});


/***/ }),

/***/ "../../libs/cms-admin-services/src/services/cmsAdminSchema.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var CmsAdminSchemaService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CmsAdminSchemaService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
let CmsAdminSchemaService = CmsAdminSchemaService_1 = class CmsAdminSchemaService {
    constructor(schema, flowdaTrpc, loggerFactory) {
        this.schema = schema;
        this.flowdaTrpc = flowdaTrpc;
        this.logger = loggerFactory(CmsAdminSchemaService_1.name);
    }
    getSchema(reqUser) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const tenantInfo = yield this.flowdaTrpc.user.getTenant.query({ tid: reqUser.tid });
            let schema = {};
            // todo: 临时先这么做
            // 目前是暴露一个 getTenant 来判断是否要拿 superadmin schema，因为 cms-admin-frontend 就一个，等于说是充当了网关的作用
            // 这块逻辑放网关倒是没问题
            if (tenantInfo.name === 'superadmin') {
                this.logger.debug(`[getSchema] get superadmin schema`);
                schema = yield this.flowdaTrpc.schema.getSchema.query({});
            }
            // 暴露一个接口，如果是超级管理员，则获取超级管理员的 schema
            const schema2 = this.schema.getSchema();
            const ret = Object.assign({}, schema, schema2);
            return ret;
        });
    }
};
exports.CmsAdminSchemaService = CmsAdminSchemaService;
exports.CmsAdminSchemaService = CmsAdminSchemaService = CmsAdminSchemaService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_types_1.SchemaServiceSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)(flowda_shared_types_1.FlowdaTrpcClientSymbol)),
    tslib_1.__param(2, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Function])
], CmsAdminSchemaService);


/***/ }),

/***/ "../../libs/cms-admin-services/src/services/custom.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.addContactSchemaDto = exports.writeProjectSlugToRedisSchemaDto = exports.GetRandomImagesQuery = exports.DubSyncExtname = exports.GeneratePartialSlotDataSchemaDto = exports.SubmitPreviewSiteSchemaDto = exports.GenerateSiteSchemaDto = exports.GenerateSiteJobSchemaDto = exports.GetTemplateDataDefSchemaDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const zod_1 = __webpack_require__("zod");
const nestjs_zod_1 = __webpack_require__("nestjs-zod");
const class_validator_1 = __webpack_require__("class-validator");
const class_transformer_1 = __webpack_require__("class-transformer");
const GetTemplateDataDefSchema = zod_1.z.object({
    siteId: zod_1.z.number(),
});
class GetTemplateDataDefSchemaDto extends (0, nestjs_zod_1.createZodDto)(GetTemplateDataDefSchema) {
}
exports.GetTemplateDataDefSchemaDto = GetTemplateDataDefSchemaDto;
const generateSiteJobSchema = zod_1.z.object({
    take: zod_1.z.number().optional(),
});
class GenerateSiteJobSchemaDto extends (0, nestjs_zod_1.createZodDto)(generateSiteJobSchema) {
}
exports.GenerateSiteJobSchemaDto = GenerateSiteJobSchemaDto;
const GenerateSiteSchema = zod_1.z.object({
    templateId: zod_1.z.number(),
    customerId: zod_1.z.number(),
});
class GenerateSiteSchemaDto extends (0, nestjs_zod_1.createZodDto)(GenerateSiteSchema) {
}
exports.GenerateSiteSchemaDto = GenerateSiteSchemaDto;
const SubmitPreviewSiteSchema = zod_1.z.object({
    siteId: zod_1.z.number(),
    slotData: zod_1.z.any(),
});
class SubmitPreviewSiteSchemaDto extends (0, nestjs_zod_1.createZodDto)(SubmitPreviewSiteSchema) {
}
exports.SubmitPreviewSiteSchemaDto = SubmitPreviewSiteSchemaDto;
const GeneratePartialSlotDataSchema = zod_1.z.object({
    siteId: zod_1.z.number(),
    path: zod_1.z.string(),
});
class GeneratePartialSlotDataSchemaDto extends (0, nestjs_zod_1.createZodDto)(GeneratePartialSlotDataSchema) {
}
exports.GeneratePartialSlotDataSchemaDto = GeneratePartialSlotDataSchemaDto;
exports.DubSyncExtname = 'dub-sync';
// https://dev.to/avantar/validating-numeric-query-parameters-in-nestjs-gk9
class GetRandomImagesQuery {
}
exports.GetRandomImagesQuery = GetRandomImagesQuery;
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_transformer_1.Type)(() => Number),
    tslib_1.__metadata("design:type", Number)
], GetRandomImagesQuery.prototype, "count", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], GetRandomImagesQuery.prototype, "tag", void 0);
const writeProjectSlugToRedisSchema = zod_1.z.object({
    siteId: zod_1.z.number(),
});
class writeProjectSlugToRedisSchemaDto extends (0, nestjs_zod_1.createZodDto)(writeProjectSlugToRedisSchema) {
}
exports.writeProjectSlugToRedisSchemaDto = writeProjectSlugToRedisSchemaDto;
const addContactSchema = zod_1.z.object({
    siteId: zod_1.z.number().optional(),
    siteName: zod_1.z.string().optional(),
    contact: zod_1.z.string(),
});
class addContactSchemaDto extends (0, nestjs_zod_1.createZodDto)(addContactSchema) {
}
exports.addContactSchemaDto = addContactSchemaDto;


/***/ }),

/***/ "../../libs/cms-admin-services/src/services/custom.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/// <reference types="@types/multer" />
var CustomService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseKanzhunDetail = exports.CustomService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
const common_1 = __webpack_require__("@nestjs/common");
const db = tslib_1.__importStar(__webpack_require__("@prisma/client-cms_admin"));
const zod_openapi_1 = __webpack_require__("@anatine/zod-openapi");
const dynamic_schema_1 = __webpack_require__("../../libs/cms-admin-services/src/lib/dynamic-schema.ts");
const _ = tslib_1.__importStar(__webpack_require__("radash"));
const Handlebars = tslib_1.__importStar(__webpack_require__("handlebars"));
const node_html_parser_1 = __webpack_require__("node-html-parser");
const py_1 = __webpack_require__("../../libs/cms-admin-services/src/utils/py.ts"); // eslint-disable-next-line @typescript-eslint/no-var-requires
const symbols_1 = __webpack_require__("../../libs/cms-admin-services/src/symbols.ts");
const BUCKET = 'assets-1306445775';
let CustomService = CustomService_1 = class CustomService {
    constructor(prisma, redis, cos, loggerFactory) {
        this.prisma = prisma;
        this.redis = redis;
        this.cos = cos;
        this.logger = loggerFactory(CustomService_1.name);
    }
    generateSite(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.debug(`[generateSite] ${JSON.stringify(dto, null, 2)}`);
            const cusRet = yield this.prisma.customer.findUniqueOrThrow({
                where: {
                    id: dto.customerId,
                },
            });
            const companyInfo = cusRet.extendData;
            this.logger.debug(`[generateSite] start invoke generateData`);
            if (companyInfo.description == null) {
                const msg = `${cusRet.name}'s description is null`;
                this.logger.error(msg);
                throw new Error(msg);
            }
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            const { generateData } = __webpack_require__("ai-gen-utils");
            try {
                const data = yield generateData(companyInfo);
                // todo: 付费逻辑之前 先写我们的联系信息
                // data.contact = {
                //   email: 'info@webinfra.cloud',
                //   phone: '17621832688',
                //   address: data.contact?.address,
                //   contact: 'Contact Us',
                // }
                this.logger.debug(`[generateSite] end invoke generateData`);
                const siteRet = yield this.prisma.site.findFirst({
                    where: {
                        customerId: dto.customerId,
                        siteTemplateId: dto.templateId,
                        isDeleted: false,
                    },
                });
                let ret;
                if (siteRet) {
                    ret = yield this.prisma.site.update({
                        where: {
                            id: siteRet.id,
                        },
                        data: {
                            name: cusRet.name + _.uid(4),
                            siteTemplateId: dto.templateId,
                            customerId: dto.customerId,
                            slotData: data,
                        },
                    });
                    this.logger.debug(`[generateSite] update ${JSON.stringify(ret, null, 2)}`);
                }
                else {
                    ret = yield this.prisma.site.create({
                        data: {
                            name: cusRet.name + _.uid(4),
                            siteTemplateId: dto.templateId,
                            customerId: dto.customerId,
                            slotData: data,
                        },
                    });
                    this.logger.debug(`[generateSite] create ${JSON.stringify(ret, null, 2)}`);
                }
                return ret;
            }
            catch (e) {
                this.logger.error(e);
                return null;
            }
        });
    }
    generatePartialSlotData(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.debug(`[generatePartialSlotData] ${JSON.stringify(dto, null, 2)}`);
            const siteRet = yield this.prisma.site.findUniqueOrThrow({
                where: {
                    id: dto.siteId,
                },
                include: {
                    customer: true,
                },
            });
            this.logger.debug(`[generatePartialSlotData] start invoke generateDataPartial`);
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            const { generateDataPartial } = __webpack_require__("ai-gen-utils");
            try {
                const data = yield generateDataPartial(siteRet.customer.extendData, siteRet.slotData, dto.path);
                this.logger.debug(`[generatePartialSlotData] end invoke generateDataPartial`);
                // const htmlRet = ejs.render(tplRet.template, dto.defData)
                return data;
            }
            catch (e) {
                this.logger.error(e);
                return null;
            }
        });
    }
    previewSite(siteId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (isNaN(parseInt(siteId))) {
                throw new Error(`[previewSite] siteId is illegal, ${siteId}`);
            }
            const siteRet = yield this.prisma.site.findUniqueOrThrow({
                where: {
                    id: parseInt(siteId),
                },
                include: {
                    siteTemplate: true,
                },
            });
            const { prefix, compiledTemplate } = yield this.getTemplate(siteRet.siteTemplate.template);
            const generatedHTML = compiledTemplate(Object.assign(siteRet.slotData, { id: siteRet.id }));
            const root = (0, node_html_parser_1.parse)(generatedHTML);
            this.updateScriptStyle(root, prefix);
            // 添加一些 iframe 通信代码
            root.querySelector('head').insertAdjacentHTML('beforeend', `
    <style>
.blink {
  animation: blink-animation 1s linear 3;
}
@keyframes blink-animation {
  0% { background-color: #f9c6d8; }
  50% { background-color: white; }
  100% { background-color: #f9c6d8; }
}
    </style>
    `);
            root.querySelector('body').insertAdjacentHTML('beforeend', `
    <script>
      window.addEventListener('message', function (e) {
        try {
            const { evt, data } = JSON.parse(e.data)
            if (evt === 'updatePathValue') {
                console.log('updatePathValue', data)
                const { path, value } = data
                const ele = document.querySelectorAll('[data-slot="' + path + '"]')[0]
                ele.innerText = value
                ele.scrollIntoView({ behavior: 'smooth' });
                ele.classList.add('blink');
                setTimeout(() => {
                    ele.classList.remove('blink');
                }, 3000);
            }
        } catch (e) {
            console.error('error', e.message, e.data)
        }
      })
      
      let duplexPromiseMap = new Map()
      
      function duplex(action, params) {
        return async function () {
            const lastEntry =  [...duplexPromiseMap.entries()].pop()
            const lastKey = lastEntry ? lastEntry[0] + 1 : 0
            const promise = new Promise(resolve => {
                duplexPromiseMap.set(lastKey, resolve)
            })
            window.parent.postMessage(JSON.stringify({ evt: 'duplex', action, params, counter: lastKey }), '*');
            const data = await promise
            return data
        }
      }
      
      window.addEventListener('message', function (e) {
        try {
            const { evt, data, counter } = JSON.parse(e.data)
            if (evt === 'duplex') {
                const resolve = duplexPromiseMap.get(counter)
                if (resolve)  {
                    resolve(data)
                    duplexPromiseMap.delete(counter)
                } else {
                    console.error('cannot find resolve ' + counter)
                }
            }
        } catch (e) {
            console.error('error', e.message, e.data)
        }
      })
      
      window.getAccessToken = duplex('getAccessToken', {})
    </script>
    <script src="https://assets-1306445775.cos.ap-shanghai.myqcloud.com/templateA/assets/js/editor.bundle.js"></script>
    `);
            return root.toString();
        });
    }
    updateScriptStyle(root, prefix) {
        const links = root.querySelectorAll('link');
        links.forEach(link => {
            link.setAttribute('href', prefix + link.getAttribute('href'));
        });
        const scripts = root.querySelectorAll('script');
        scripts.forEach(script => {
            script.setAttribute('src', prefix + script.getAttribute('src'));
        });
    }
    getTemplate(template) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const cosRet = yield new Promise((resolve, reject) => {
                this.cos.getObjectUrl({
                    Bucket: BUCKET,
                    Region: 'ap-shanghai',
                    Key: `${template}`,
                    Sign: false,
                }, function (err, data) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(data);
                    }
                });
            });
            this.logger.debug(`url ${cosRet.Url}`);
            const prefix = cosRet.Url.replace('template.hbs', '');
            const hbsTpl = yield fetch(cosRet.Url).then(res => res.text());
            const compiledTemplate = Handlebars.compile(hbsTpl);
            return { prefix, compiledTemplate };
        });
    }
    submitPreviewSite(reqUser, dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // todo: transaction
            const siteRet = yield this.prisma.site.update({
                where: {
                    id: dto.siteId,
                },
                data: {
                    slotData: dto.slotData,
                },
                select: {
                    id: true,
                },
            });
            // 发 cos
            const cosUrl = yield this.deploySiteToCos({ siteId: siteRet.id });
            const siteUpdateRet = yield this.prisma.site.update({
                where: {
                    id: dto.siteId,
                },
                data: {
                    cosUrl: cosUrl,
                    status: 'passed', // 提交网站就认为审核通过
                },
                select: {
                    id: true,
                    name: true,
                    projectId: true,
                    siteTemplateId: true,
                    customer: {
                        select: {
                            name: true,
                        },
                    },
                },
            });
            // 创建 dub project 利用二级域名能力
            if (siteUpdateRet.projectId == null) {
                // todo: template 增加 prefix，用 id 不好看
                const slug = (0, py_1.customerName2Slug)(siteUpdateRet.customer.name) + siteUpdateRet.siteTemplateId;
                const projectRet = yield this.prisma.project.create({
                    data: {
                        name: siteUpdateRet.name,
                        slug: slug,
                        type: 'Site',
                        site: {
                            connect: {
                                id: siteUpdateRet.id,
                            },
                        },
                        users: {
                            create: {
                                role: 'owner',
                                userId: String(reqUser.uid),
                            },
                        },
                    },
                    select: {
                        id: true,
                        password: true,
                    },
                });
                this.logger.debug(`Project created, id: ${projectRet.id}, siteId: ${siteUpdateRet.id}, user: ${reqUser.uid}`);
                yield this.redis.set(`invio:${slug}`, {
                    name: 'site:' + siteUpdateRet.name,
                    password: projectRet.password,
                });
                this.logger.debug(`redis write id: ${projectRet.id}`);
            }
            return {
                success: true,
            };
        });
    }
    writeProjectSlugToRedis(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const siteRet = yield this.prisma.site.findUniqueOrThrow({
                where: {
                    id: dto.siteId,
                },
                select: {
                    name: true,
                    project: {
                        select: {
                            slug: true,
                            password: true,
                        },
                    },
                },
            });
            if (siteRet.project == null) {
                throw new Error(`site ${dto.siteId} has no project`);
            }
            yield this.redis.set(`invio:${siteRet.project.slug}`, {
                name: 'site:' + siteRet.name,
                password: siteRet.project.password,
            });
            return {
                success: siteRet,
            };
        });
    }
    deploySiteToCos(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const siteRet = yield this.prisma.site.findUniqueOrThrow({
                where: {
                    id: dto.siteId,
                },
                include: {
                    siteTemplate: true,
                },
            });
            const { prefix, compiledTemplate } = yield this.getTemplate(siteRet.siteTemplate.template);
            const generatedHTML = compiledTemplate(Object.assign(siteRet.slotData, { id: siteRet.id }));
            const root = (0, node_html_parser_1.parse)(generatedHTML);
            this.updateScriptStyle(root, prefix);
            const cosUrl = yield new Promise((resolve, reject) => {
                this.cos.putObject({
                    Bucket: BUCKET,
                    Region: 'ap-shanghai',
                    Key: `${siteRet.name}/index.html`,
                    StorageClass: 'STANDARD',
                    Body: root.toString(),
                    ContentType: 'text/html',
                    onProgress: progressData => {
                        this.logger.debug(JSON.stringify(progressData));
                    },
                }, (err, data) => {
                    if (err) {
                        this.logger.error(`upload to tencent error: ${JSON.stringify(err || data)}`);
                        reject(err);
                    }
                    else {
                        resolve(data === null || data === void 0 ? void 0 : data.Location);
                    }
                });
            });
            this.logger.debug(`Cos url: ${cosUrl}, siteId: ${dto.siteId}`);
            yield this.prisma.site.update({
                where: {
                    id: siteRet.id,
                },
                data: {
                    cosUrl: cosUrl,
                    status: db.SiteStatus.generated,
                },
            });
            return cosUrl;
        });
    }
    deployAllSitesToCosJob() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ret = {
                fail: [],
                pass: [],
            };
            const siteRet = yield this.prisma.site.findMany({
                where: {
                    isDeleted: false,
                    status: db.SiteStatus.redeploy,
                },
                take: 100,
                orderBy: {
                    id: 'desc',
                },
            });
            for (const siteItem of siteRet) {
                try {
                    this.deploySiteToCos({
                        siteId: siteItem.id,
                    });
                    ret.pass.push(siteItem.id);
                }
                catch (e) {
                    ret.fail.push({ siteId: siteItem.id, reason: e.message });
                }
            }
            return ret;
        });
    }
    getTemplateDataDef(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const siteRet = yield this.prisma.site.findUniqueOrThrow({
                where: {
                    id: dto.siteId,
                },
                include: {
                    siteTemplate: true,
                },
            });
            const defRet = yield this.prisma.siteTemplateDataDef.findUniqueOrThrow({
                where: {
                    siteTemplateId: siteRet.siteTemplateId,
                },
            });
            this.logger.debug(`siteTemplate ${siteRet.siteTemplate.template}`);
            return {
                slotSchema: defRet.defData,
                slotData: siteRet.slotData,
            };
        });
    }
    getCustomerDef() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return (0, zod_openapi_1.generateSchema)(dynamic_schema_1.CustomerDataDef);
        });
    }
    addContact(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (dto.siteId) {
                return this.prisma.contact.create({
                    data: {
                        contact: dto.contact,
                        siteId: dto.siteId,
                    },
                });
            }
            else if (dto.siteName) {
                const siteRet = yield this.prisma.site.findFirstOrThrow({
                    where: {
                        name: dto.siteName,
                    },
                });
                return this.prisma.contact.create({
                    data: {
                        contact: dto.contact,
                        siteId: siteRet.id,
                    },
                });
            }
            else {
                throw new common_1.BadRequestException(`siteId or siteName provide at lease one`);
            }
        });
    }
    generateSiteJob(dto) {
        var _a, e_1, _b, _c;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // https://github.com/prisma/prisma/issues/3888#issuecomment-709868053
            const customerRet = yield this.findToDoCustomers(dto);
            const tplRet = yield this.prisma.siteTemplate.findFirstOrThrow({
                where: {
                    isDeleted: false,
                    name: 'templateA',
                },
                orderBy: {
                    id: 'desc',
                },
            });
            let passCnt = 0;
            let failCnt = 0;
            try {
                for (var _d = true, customerRet_1 = tslib_1.__asyncValues(customerRet), customerRet_1_1; customerRet_1_1 = yield customerRet_1.next(), _a = customerRet_1_1.done, !_a; _d = true) {
                    _c = customerRet_1_1.value;
                    _d = false;
                    const cust = _c;
                    try {
                        const siteRet = yield this.generateSite({
                            customerId: cust.id,
                            templateId: tplRet.id,
                        });
                        if (!siteRet) {
                            throw new Error('[generateSite] failed');
                        }
                        const cosUrl = yield this.deploySiteToCos({ siteId: siteRet.id });
                        yield this.prisma.site.update({
                            where: {
                                id: siteRet.id,
                            },
                            data: {
                                cosUrl,
                            },
                        });
                        this.logger.debug(`[generateSiteJob] success, ${cust.name}, template: ${tplRet.name}`);
                        passCnt++;
                    }
                    catch (e) {
                        this.logger.error(`[generateSiteJob] ${cust.name}, template: ${tplRet.template}`);
                        console.error(e);
                        failCnt++;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (!_d && !_a && (_b = customerRet_1.return)) yield _b.call(customerRet_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return {
                success: passCnt,
                fail: failCnt,
            };
        });
    }
    requestRedeployAllSites() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.prisma.site.updateMany({
                where: {
                    isDeleted: false,
                },
                data: {
                    status: db.SiteStatus.redeploy,
                },
            });
        });
    }
    findToDoCustomers(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const customerRet = yield this.prisma.customer.findMany({
                take: dto.take || 10,
                skip: 0,
                where: {
                    AND: [
                        {
                            extendData: {
                                path: '$.description',
                                not: db.Prisma.DbNull,
                            },
                        },
                        {
                            OR: [
                                {
                                    sites: {
                                        none: {},
                                    },
                                },
                                {
                                    sites: {
                                        some: {
                                            cosUrl: '',
                                        },
                                    },
                                },
                            ],
                        },
                    ],
                },
            });
            return customerRet;
        });
    }
    getRandomImages(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // db.Prisma.join
            // https://github.com/prisma/prisma/issues/13663#issuecomment-1237142453
            return this.prisma
                .$queryRaw `SELECT id,unsplashId,tag,urls,css FROM ImageLibrary WHERE IsDeleted = 0 AND tag in (${db.Prisma.join(dto.tag.split(','))}) ORDER BY RAND() LIMIT ${dto.count}`;
        });
    }
    parseKanzhun(files) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ret = {
                fail: [],
                success: [],
            };
            for (const file of files) {
                if (file.originalname.indexOf('batch') === -1) {
                    ret.fail.push({ fileName: file.originalname, reason: `ignored` });
                    continue;
                }
                try {
                    const fileJson = JSON.parse(file.buffer.toString());
                    const jsonRet = flowda_shared_types_1.kanzhunDataSchema.parse(fileJson);
                    const data = (jsonRet === null || jsonRet === void 0 ? void 0 : jsonRet.data) || [];
                    for (const item of data) {
                        try {
                            if (item.name == null) {
                                ret.fail.push({
                                    fileName: file.originalname,
                                    reason: `name is null, id:${item.id}`,
                                });
                                continue;
                            }
                            const customerRet = yield this.prisma.customer.findFirst({
                                where: {
                                    name: item.name,
                                },
                            });
                            if (customerRet) {
                                const prevExtendData = flowda_shared_types_1.customerExtendDataSchema.parse(customerRet.extendData);
                                const extendData = parseKanzhunDetail(item, prevExtendData);
                                yield this.prisma.customer.update({
                                    where: {
                                        id: customerRet.id,
                                    },
                                    data: {
                                        extendData: extendData,
                                        prevExtendData: customerRet.extendData == null ? undefined : customerRet.extendData,
                                        kanzhunRaw: item,
                                    },
                                });
                                ret.success.push({
                                    fileName: file.originalname,
                                    reason: `update: name:${item.name}, id:${customerRet.id}`,
                                });
                            }
                            else {
                                const extendData = parseKanzhunDetail(item);
                                const createRet = yield this.prisma.customer.create({
                                    data: {
                                        name: item.name,
                                        extendData: extendData,
                                        kanzhunRaw: item,
                                    },
                                    select: {
                                        id: true,
                                    },
                                });
                                ret.success.push({
                                    fileName: file.originalname,
                                    reason: `create: name:${item.name},id:${createRet.id}`,
                                });
                            }
                        }
                        catch (e) {
                            ret.fail.push({ fileName: file.originalname, reason: `error: name:${item.name},${e.message}` });
                        }
                    }
                }
                catch (e) {
                    ret.fail.push({ fileName: file.originalname, reason: `error: ${e.message}` });
                }
            }
            return ret;
        });
    }
    updateSlotDataContact() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const rets = {
                fail: [],
                success: [],
            };
            const siteRets = yield this.prisma.site.findMany({
                where: {
                    isDeleted: false,
                },
                select: {
                    id: true,
                    slotData: true,
                    customer: {
                        select: {
                            id: true,
                            extendData: true,
                        },
                    },
                },
            });
            const toUpdateRets = siteRets.map(item => {
                const slotData = combineSlotData(item);
                return {
                    id: item.id,
                    slotData,
                };
            });
            for (const item of toUpdateRets) {
                try {
                    yield this.prisma.site.update({
                        where: {
                            id: item.id,
                        },
                        data: {
                            slotData: item.slotData,
                        },
                    });
                    rets.success.push(item.id);
                }
                catch (e) {
                    rets.fail.push({ id: item.id, reason: e.message });
                    continue;
                }
            }
            return rets;
        });
    }
    getContactNullCustomers() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const customerSelect = db.Prisma.validator()({
                OR: [
                    {
                        extendData: {
                            path: '$.contact.email',
                            equals: '',
                        },
                    },
                    {
                        extendData: {
                            path: '$.contact.email',
                            equals: db.Prisma.DbNull,
                        },
                    },
                    {
                        extendData: {
                            path: '$.contact.email',
                            equals: 'info@81uav.cn',
                        },
                    },
                    {
                        extendData: {
                            path: '$.contact.phone',
                            equals: '18682042306',
                        },
                    },
                    {
                        extendData: {
                            path: '$.contact.phone',
                            equals: db.Prisma.DbNull,
                        },
                    },
                    {
                        extendData: {
                            path: '$.contact.phone',
                            equals: '',
                        },
                    },
                ],
            });
            const ret = yield this.prisma.$transaction([
                this.prisma.customer.count({
                    where: customerSelect,
                }),
                this.prisma.customer.findMany({
                    where: customerSelect,
                    select: {
                        id: true,
                        extendData: true,
                    },
                }),
            ]);
            return ret;
        });
    }
    updateCustomersContact() {
        var _a, _b;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const rets = {
                fail: [],
                success: [],
            };
            const customerSelect = db.Prisma.validator()({
                OR: [
                    {
                        extendData: {
                            path: '$.contact.email',
                            equals: '',
                        },
                    },
                    {
                        extendData: {
                            path: '$.contact.email',
                            equals: db.Prisma.DbNull,
                        },
                    },
                    {
                        extendData: {
                            path: '$.contact.email',
                            equals: 'info@81uav.cn',
                        },
                    },
                    {
                        extendData: {
                            path: '$.contact.phone',
                            equals: '18682042306',
                        },
                    },
                    {
                        extendData: {
                            path: '$.contact.phone',
                            equals: db.Prisma.DbNull,
                        },
                    },
                    {
                        extendData: {
                            path: '$.contact.phone',
                            equals: '',
                        },
                    },
                ],
            });
            const ret = yield this.prisma.customer.findMany({
                where: customerSelect,
                select: {
                    id: true,
                    extendData: true,
                },
            });
            for (const item of ret) {
                try {
                    const extendData = item.extendData;
                    extendData.contact.email = processEmail((_a = extendData.contact) === null || _a === void 0 ? void 0 : _a.email);
                    extendData.contact.phone = processPhone((_b = extendData.contact) === null || _b === void 0 ? void 0 : _b.phone);
                    yield this.prisma.customer.update({
                        where: {
                            id: item.id,
                        },
                        data: {
                            extendData: extendData,
                        },
                    });
                    rets.success.push({ id: item.id });
                }
                catch (e) {
                    rets.fail.push({ id: item.id, reason: e.message });
                }
            }
            return rets;
        });
    }
    batchCreateProjectFromSite() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const rets = {
                fail: [],
                success: [],
            };
            const siteRets = yield this.prisma.site.findMany({
                where: {
                    isDeleted: false,
                    projectId: null,
                },
                select: {
                    id: true,
                    name: true,
                    siteTemplateId: true,
                    customer: {
                        select: {
                            name: true,
                        },
                    },
                },
            });
            for (const item of siteRets) {
                const slug = (0, py_1.customerName2Slug)(item.customer.name) + item.siteTemplateId;
                try {
                    const createRet = yield this.prisma.project.create({
                        data: {
                            name: item.name,
                            slug,
                            type: 'Site',
                            site: {
                                connect: {
                                    id: item.id,
                                },
                            },
                        },
                    });
                    rets.success.push({ name: item.name });
                }
                catch (e) {
                    rets.fail.push({ name: item.name, reason: `${e.message},slug:${slug}` });
                }
            }
            return rets;
        });
    }
    batchWriteProjectSlugToRedis() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const rets = {
                fail: [],
                success: [],
            };
            const projectRets = yield this.prisma.project.findMany({
                where: {
                    isDeleted: false,
                    type: 'Site',
                },
                select: {
                    slug: true,
                    password: true,
                    site: {
                        select: {
                            name: true,
                        },
                    },
                },
            });
            const msetInput = projectRets.reduce((acc, item) => {
                if (!item.site) {
                    rets.fail.push({ name: item.slug, reason: 'item.site is null' });
                    return acc;
                }
                acc[`invio:${item.slug}`] = {
                    name: 'site:' + item.site.name,
                    password: item.password,
                };
                rets.success.push(item);
                return acc;
            }, {});
            const msetRet = yield this.redis.mset(msetInput);
            return rets;
        });
    }
};
exports.CustomService = CustomService;
exports.CustomService = CustomService = CustomService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_types_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)(symbols_1.DubRedisSymbol)),
    tslib_1.__param(2, (0, inversify_1.inject)(flowda_shared_types_1.COSSymbol)),
    tslib_1.__param(3, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof db !== "undefined" && db.PrismaClient) === "function" ? _a : Object, Object, Object, Function])
], CustomService);
const phoneNumberRegex = /^1[0-9]{10}$/; // 手机
const landlineRegex = /^\d{3,4}-\d{7,8}$/; // 座机
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 邮箱
function parseKanzhunDetail(input, prev) {
    var _a, _b, _c, _d, _e, _f;
    const contact = ((_a = input.detail) === null || _a === void 0 ? void 0 : _a.联系方式) || [];
    const email = [];
    const phone = [];
    contact.forEach(c => {
        if (phoneNumberRegex.test(c) || landlineRegex.test(c)) {
            phone.push(c);
        }
        if (emailRegex.test(c)) {
            email.push(c);
        }
    });
    const prevEmail = processEmail((_b = prev === null || prev === void 0 ? void 0 : prev.contact) === null || _b === void 0 ? void 0 : _b.email);
    const prevPhone = processPhone((_c = prev === null || prev === void 0 ? void 0 : prev.contact) === null || _c === void 0 ? void 0 : _c.phone);
    const ret = {
        biz: prev === null || prev === void 0 ? void 0 : prev.biz,
        icp: prev === null || prev === void 0 ? void 0 : prev.icp,
        contact: {
            email: email.length > 0 ? email.join(',') : prevEmail,
            phone: phone.length > 0 ? phone.join(',') : prevPhone,
            address: ((_d = input.detail) === null || _d === void 0 ? void 0 : _d.地址) || ((_e = prev === null || prev === void 0 ? void 0 : prev.contact) === null || _e === void 0 ? void 0 : _e.address),
        },
        companyName: (prev === null || prev === void 0 ? void 0 : prev.companyName) || (input.name ? input.name.trim() : input.name),
        description: (prev === null || prev === void 0 ? void 0 : prev.description) || ((_f = input.detail) === null || _f === void 0 ? void 0 : _f.简介),
    };
    return ret;
}
exports.parseKanzhunDetail = parseKanzhunDetail;
function combineSlotData(siteRet) {
    const contactRet = Object.assign({}, siteRet.slotData.contact, siteRet.customer.extendData.contact);
    contactRet.email = processEmail(contactRet.email);
    contactRet.phone = processPhone(contactRet.phone);
    const slotData = Object.assign(siteRet.slotData, { id: siteRet.id, contact: contactRet });
    return slotData;
}
function processEmail(email) {
    return email === 'info@81uav.cn' || !email ? '' : email;
}
function processPhone(email) {
    return email === '18682042306' || !email ? '' : email;
}


/***/ }),

/***/ "../../libs/cms-admin-services/src/services/dub.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sendSmsVerifyCodeSchemaDto = exports.sendSmsVerifyCodeSchema = exports.alreadyInTeamSchemaDto = exports.alreadyInTeamSchema = exports.updateUserInfoSchemaDto = exports.updateUserInfoSchema = exports.queryLinksSchemaDto = exports.queryLinksSchema = exports.updateSiteSchemaDto = exports.updateSiteSchema = exports.updateProjectSchemaDto = exports.updateProjectSchema = exports.queryProjectUsersSchemaDto = exports.queryProjectUsersSchema = exports.findProjectOwnerSchemaDto = exports.findProjectOwnerSchema = exports.findUserByIdSchemaDto = exports.findUserByIdSchema = exports.findUserByEmailSchemaDto = exports.findUserByEmailSchema = void 0;
const nestjs_zod_1 = __webpack_require__("nestjs-zod");
const zod_1 = __webpack_require__("zod");
exports.findUserByEmailSchema = zod_1.z.object({
    email: zod_1.z.string(),
});
class findUserByEmailSchemaDto extends (0, nestjs_zod_1.createZodDto)(exports.findUserByEmailSchema) {
}
exports.findUserByEmailSchemaDto = findUserByEmailSchemaDto;
exports.findUserByIdSchema = zod_1.z.object({
    id: zod_1.z.number(),
});
class findUserByIdSchemaDto extends (0, nestjs_zod_1.createZodDto)(exports.findUserByIdSchema) {
}
exports.findUserByIdSchemaDto = findUserByIdSchemaDto;
exports.findProjectOwnerSchema = zod_1.z.object({
    slug: zod_1.z.string(),
});
class findProjectOwnerSchemaDto extends (0, nestjs_zod_1.createZodDto)(exports.findProjectOwnerSchema) {
}
exports.findProjectOwnerSchemaDto = findProjectOwnerSchemaDto;
exports.queryProjectUsersSchema = zod_1.z.object({
    projectId: zod_1.z.string(),
});
class queryProjectUsersSchemaDto extends (0, nestjs_zod_1.createZodDto)(exports.queryProjectUsersSchema) {
}
exports.queryProjectUsersSchemaDto = queryProjectUsersSchemaDto;
exports.updateProjectSchema = zod_1.z.object({
    previousSlug: zod_1.z.string(),
    slug: zod_1.z.string().optional(),
    name: zod_1.z.string().optional(),
});
class updateProjectSchemaDto extends (0, nestjs_zod_1.createZodDto)(exports.updateProjectSchema) {
}
exports.updateProjectSchemaDto = updateProjectSchemaDto;
exports.updateSiteSchema = zod_1.z.object({
    id: zod_1.z.number(),
    slotData: zod_1.z.any(),
});
class updateSiteSchemaDto extends (0, nestjs_zod_1.createZodDto)(exports.updateSiteSchema) {
}
exports.updateSiteSchemaDto = updateSiteSchemaDto;
exports.queryLinksSchema = zod_1.z.object({
    projectId: zod_1.z.string(),
});
class queryLinksSchemaDto extends (0, nestjs_zod_1.createZodDto)(exports.queryLinksSchema) {
}
exports.queryLinksSchemaDto = queryLinksSchemaDto;
exports.updateUserInfoSchema = zod_1.z.object({
    userId: zod_1.z.number(),
    email: zod_1.z.string().optional(),
    name: zod_1.z.string().optional(),
    image: zod_1.z.string().optional(),
});
class updateUserInfoSchemaDto extends (0, nestjs_zod_1.createZodDto)(exports.updateUserInfoSchema) {
}
exports.updateUserInfoSchemaDto = updateUserInfoSchemaDto;
exports.alreadyInTeamSchema = zod_1.z.object({
    projectId: zod_1.z.string(),
    email: zod_1.z.string(),
});
class alreadyInTeamSchemaDto extends (0, nestjs_zod_1.createZodDto)(exports.alreadyInTeamSchema) {
}
exports.alreadyInTeamSchemaDto = alreadyInTeamSchemaDto;
exports.sendSmsVerifyCodeSchema = zod_1.z.object({
    mobile: zod_1.z.string(),
});
class sendSmsVerifyCodeSchemaDto extends (0, nestjs_zod_1.createZodDto)(exports.sendSmsVerifyCodeSchema) {
}
exports.sendSmsVerifyCodeSchemaDto = sendSmsVerifyCodeSchemaDto;


/***/ }),

/***/ "../../libs/cms-admin-services/src/services/dub.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var DubService_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DubService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
const db = tslib_1.__importStar(__webpack_require__("@prisma/client-cms_admin"));
const custom_service_1 = __webpack_require__("../../libs/cms-admin-services/src/services/custom.service.ts");
let DubService = DubService_1 = class DubService {
    constructor(prisma, custom, flowdaTrpc, loggerFactory) {
        this.prisma = prisma;
        this.custom = custom;
        this.flowdaTrpc = flowdaTrpc;
        this.logger = loggerFactory(DubService_1.name);
    }
    findUserByEmail(dto) {
        return this.flowdaTrpc.user.findUnique.query({
            email: dto.email,
        });
    }
    updateUserInfo(dto) {
        return this.flowdaTrpc.user.updateUserInfo.mutate({
            userId: dto.userId,
            username: dto.name,
            email: dto.email,
            image: dto.image,
        });
    }
    findUserById(dto) {
        return this.flowdaTrpc.user.findUnique.query({
            id: dto.id,
        });
    }
    findProjectOwner(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const projectUserRet = yield this.prisma.projectUsers.findFirst({
                where: {
                    role: 'owner',
                    project: {
                        slug: dto.slug,
                    },
                },
            });
            if ((projectUserRet === null || projectUserRet === void 0 ? void 0 : projectUserRet.userId) != null) {
                const userRet = yield this.flowdaTrpc.user.findUnique.query({ id: Number(projectUserRet.userId) });
                if (userRet) {
                    return {
                        email: userRet.email,
                    };
                }
                else {
                    return null;
                }
            }
            else {
                return null;
            }
        });
    }
    queryProjectUsers(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const projectUsersRet = yield this.prisma.projectUsers.findMany({
                where: {
                    projectId: dto.projectId,
                },
                select: {
                    userId: true,
                    createdAt: true,
                },
            });
            const userIds = projectUsersRet.filter(i => i.userId != null).map(i => Number(i.userId));
            const usersRet = yield this.flowdaTrpc.user.findMany.query({ userIds: userIds });
            return projectUsersRet
                .filter(ret => {
                return usersRet.findIndex(u => u.id === Number(ret.userId)) > -1;
            })
                .map(ret => {
                return Object.assign(ret, {
                    user: usersRet.find(u => u.id === Number(ret.userId)),
                });
            });
        });
    }
    updateProject(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ret = yield this.prisma.project.update({
                where: {
                    slug: dto.previousSlug,
                },
                data: Object.assign(Object.assign({}, (dto.name && { name: dto.name })), (dto.slug && { slug: dto.slug })),
            });
            return ret;
        });
    }
    updateSite(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ret = yield this.prisma.site.update({
                where: {
                    id: dto.id,
                },
                data: {
                    slotData: dto.slotData,
                },
            });
            yield this.custom.deploySiteToCos({
                siteId: dto.id,
            });
            return ret;
        });
    }
    queryLinks(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const siteRet = yield this.prisma.site.findUniqueOrThrow({
                where: {
                    projectId: dto.projectId,
                },
            });
            return siteRet;
        });
    }
    sendSmsVerifyCode(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.flowdaTrpc.user.sendSmsVerifyCode.mutate(dto);
            return {};
        });
    }
    verifyMobile(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const userRet = yield this.flowdaTrpc.user.verifyMobile.mutate(dto);
            const projectRet = yield this.prisma.project.findFirstOrThrow({
                where: {
                    slug: dto.slug,
                },
            });
            yield this.prisma.projectUsers.create({
                data: {
                    role: 'owner',
                    userId: String(userRet.id),
                    projectId: projectRet.id,
                },
            });
            return {};
        });
    }
    alreadyInTeam(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const projectUsers = yield this.queryProjectUsers({
                projectId: dto.projectId,
            });
            return projectUsers.filter(pu => {
                if (pu.user) {
                    return pu.user.email === dto.email;
                }
                return false;
            })[0];
        });
    }
};
exports.DubService = DubService;
exports.DubService = DubService = DubService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_types_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)(custom_service_1.CustomService)),
    tslib_1.__param(2, (0, inversify_1.inject)(flowda_shared_types_1.FlowdaTrpcClientSymbol)),
    tslib_1.__param(3, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof db !== "undefined" && db.PrismaClient) === "function" ? _a : Object, typeof (_b = typeof custom_service_1.CustomService !== "undefined" && custom_service_1.CustomService) === "function" ? _b : Object, Object, Function])
], DubService);


/***/ }),

/***/ "../../libs/cms-admin-services/src/services/user.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var UserService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
let UserService = UserService_1 = class UserService {
    constructor(flowdaTrpc, loggerFactory) {
        this.flowdaTrpc = flowdaTrpc;
        this.logger = loggerFactory(UserService_1.name);
    }
    validate(username, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.flowdaTrpc.user.validate.mutate({
                username,
                password,
            });
        });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = UserService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_types_1.FlowdaTrpcClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [Object, Function])
], UserService);


/***/ }),

/***/ "../../libs/cms-admin-services/src/symbols.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DubRedisSymbol = void 0;
exports.DubRedisSymbol = Symbol.for('DubRedis');


/***/ }),

/***/ "../../libs/cms-admin-services/src/utils/py.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.customerName2Slug = void 0;
const tslib_1 = __webpack_require__("tslib");
const pinyin_pro_1 = __webpack_require__("pinyin-pro");
const _ = tslib_1.__importStar(__webpack_require__("radash"));
const ignorePrefix = [
    '科技',
    '信息',
    '技术',
    '创新',
    '中国',
    '(',
    ')',
    '（',
    '）',
    '.',
    '有限公司',
    '有限责任公司',
    '株式会社',
    '文化',
    '传媒',
];
function customerName2Slug(hanzi) {
    ignorePrefix.forEach(p => (hanzi = hanzi.replace(p, '')));
    let py = (0, pinyin_pro_1.pinyin)(hanzi, { pattern: 'first', separator: '', toneType: 'none' });
    if (py.length < 6) {
        py = py + '_' + _.uid(6 - py.length).toLowerCase();
    }
    return py;
}
exports.customerName2Slug = customerName2Slug;


/***/ }),

/***/ "../../libs/flowda-shared-node/src/filters/appExceptionFilter.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var AppExceptionFilter_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppExceptionFilter = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
let AppExceptionFilter = AppExceptionFilter_1 = class AppExceptionFilter {
    constructor() {
        this.logger = new common_1.Logger(AppExceptionFilter_1.name);
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        if (exception instanceof flowda_shared_1.CustomError) {
            const rt = JSON.parse(exception.message);
            this.logger.error(`CustomError|${rt.code}|${rt.message}`);
            response.status(common_1.HttpStatus.OK).json({
                code: rt.code,
                message: rt.message,
            });
        }
        else if (exception instanceof common_1.HttpException) {
            const res = exception.getResponse();
            if (typeof res === 'object') {
                const extra = JSON.stringify(res);
                this.logger.error(`HttpException|${exception.getStatus()}|${exception.message}|${extra}`);
            }
            else {
                this.logger.error(`HttpException|${exception.getStatus()}|${exception.message}`);
            }
            response.status(exception.getStatus()).json({
                code: exception.getStatus(),
                message: typeof res === 'object' ? res : exception.message,
            });
        }
        else {
            this.logger.error(exception.stack);
            response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                code: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                message: exception.message,
            });
        }
    }
};
exports.AppExceptionFilter = AppExceptionFilter;
exports.AppExceptionFilter = AppExceptionFilter = AppExceptionFilter_1 = tslib_1.__decorate([
    (0, common_1.Catch)(),
    tslib_1.__metadata("design:paramtypes", [])
], AppExceptionFilter);


/***/ }),

/***/ "../../libs/flowda-shared-node/src/flowdaSharedNode.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.flowdaSharedNodeModule = void 0;
const inversify_1 = __webpack_require__("inversify");
const common_1 = __webpack_require__("@nestjs/common");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
const table_filter_service_1 = __webpack_require__("../../libs/flowda-shared-node/src/services/table-filter.service.ts");
const audit_service_1 = __webpack_require__("../../libs/flowda-shared-node/src/services/audit.service.ts");
exports.flowdaSharedNodeModule = new inversify_1.ContainerModule((bind) => {
    (0, flowda_shared_1.bindService)(bind, flowda_shared_types_1.ServiceSymbol, table_filter_service_1.TableFilterService);
    (0, flowda_shared_1.bindService)(bind, flowda_shared_types_1.ServiceSymbol, audit_service_1.AuditService);
    bind('Factory<Logger>').toFactory(context => {
        return name => {
            return new common_1.Logger(name);
        };
    });
});


/***/ }),

/***/ "../../libs/flowda-shared-node/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared-node/src/flowdaSharedNode.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared-node/src/filters/appExceptionFilter.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared-node/src/services/table-filter.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared-node/src/services/audit.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared-node/src/trpc/trpc-utils.ts"), exports);


/***/ }),

/***/ "../../libs/flowda-shared-node/src/services/audit.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var AuditService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuditService = exports.QueryAuditSchemaDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
// import * as db from '@prisma/client-wms'
const nestjs_zod_1 = __webpack_require__("nestjs-zod");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
const z = tslib_1.__importStar(__webpack_require__("zod"));
const QueryAuditSchema = z.object({
    auditType: z.string(),
    auditId: z.number(),
    pageSize: z.number(),
    current: z.number(),
});
class QueryAuditSchemaDto extends (0, nestjs_zod_1.createZodDto)(QueryAuditSchema) {
}
exports.QueryAuditSchemaDto = QueryAuditSchemaDto;
let AuditService = AuditService_1 = class AuditService {
    constructor(prisma, loggerFactory) {
        this.prisma = prisma;
        this.logger = loggerFactory(AuditService_1.name);
    }
    queryAudit(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const [data, count] = yield this.prisma.$transaction([
                this.prisma.audits.findMany({
                    skip: dto.pageSize * (dto.current - 1),
                    take: dto.pageSize,
                    where: {
                        auditType: dto.auditType,
                        auditId: dto.auditId,
                    },
                    orderBy: {
                        createdAt: 'desc',
                    },
                }),
                this.prisma.audits.count({
                    where: {
                        auditType: dto.auditType,
                        auditId: dto.auditId,
                    },
                }),
            ]);
            return {
                total: count,
                data,
            };
        });
    }
};
exports.AuditService = AuditService;
exports.AuditService = AuditService = AuditService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_types_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [Object, Function])
], AuditService);


/***/ }),

/***/ "../../libs/flowda-shared-node/src/services/table-filter.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var TableFilterService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TableFilterService = exports.RemoveTableFilterSchemaDto = exports.QueryTableFilterSchemaDto = exports.TableFilterSchema = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
// import * as db from '@prisma/client-wms'
const nestjs_zod_1 = __webpack_require__("nestjs-zod");
// import { TableFilterSchema } from '@flowda-projects/prisma-wms'
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
const zod_1 = __webpack_require__("zod");
// todo @flowda-projects/prisma-wms
// 不能有关联关系，先手动 copy 出来
exports.TableFilterSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
    path: zod_1.z.string(),
    name: zod_1.z.string(),
    filterJSON: zod_1.z.string(),
});
const QueryTableFilterSchema = exports.TableFilterSchema.pick({
    path: true,
});
const RemoveTableFilterSchema = exports.TableFilterSchema.pick({
    id: true,
});
class QueryTableFilterSchemaDto extends (0, nestjs_zod_1.createZodDto)(QueryTableFilterSchema) {
}
exports.QueryTableFilterSchemaDto = QueryTableFilterSchemaDto;
class RemoveTableFilterSchemaDto extends (0, nestjs_zod_1.createZodDto)(RemoveTableFilterSchema) {
}
exports.RemoveTableFilterSchemaDto = RemoveTableFilterSchemaDto;
let TableFilterService = TableFilterService_1 = class TableFilterService {
    constructor(prisma, loggerFactory) {
        this.prisma = prisma;
        this.logger = loggerFactory(TableFilterService_1.name);
    }
    save(dto) {
        return this.prisma.tableFilter.create({
            data: dto,
        });
    }
    remove(dto) {
        return this.prisma.tableFilter.delete({
            where: { id: dto.id },
        });
    }
    query(dto) {
        return this.prisma.tableFilter.findMany({
            where: {
                isDeleted: false,
                path: dto.path,
            },
            select: {
                id: true,
                path: true,
                name: true,
                filterJSON: true,
            },
        });
    }
};
exports.TableFilterService = TableFilterService;
exports.TableFilterService = TableFilterService = TableFilterService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_types_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [Object, Function])
], TableFilterService);


/***/ }),

/***/ "../../libs/flowda-shared-node/src/trpc/trpc-utils.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/// <reference types="@types/express-serve-static-core" />
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.diag = exports.createContext = exports.transformer = exports.errorFormatter = exports.transformHttpException = exports.logErrorEnd = exports.logErrorStart = exports.getErrorCodeFromKey = exports.getStatusKeyFromStatus = exports.logContext = exports.logOutputSerialize = exports.logInputSerialize = exports.ERROR_END = exports.REQ_END = void 0;
const tslib_1 = __webpack_require__("tslib");
const consola_1 = tslib_1.__importDefault(__webpack_require__("consola"));
const _ = tslib_1.__importStar(__webpack_require__("radash"));
const common_1 = __webpack_require__("@nestjs/common");
const lodash_1 = __webpack_require__("lodash");
const cuid2_1 = __webpack_require__("@paralleldrive/cuid2");
exports.REQ_END = '================================================ End ================================================\n';
exports.ERROR_END = '***************************************** ERROR END *****************************************';
function logInputSerialize(object) {
    setTimeout(function () {
        consola_1.default.info('request args  :');
        console.log(object);
        console.log();
    }, 0);
}
exports.logInputSerialize = logInputSerialize;
function logOutputSerialize(object) {
    setTimeout(function () {
        console.log();
        if ((object === null || object === void 0 ? void 0 : object.code) < 0) {
            consola_1.default.info('response error:');
            console.log(Object.assign(Object.assign({}, object), { message: '<...>', data: Object.assign(Object.assign({}, object.data), { stack: '<...>' }) }));
        }
        else {
            consola_1.default.info('response data :');
            const resp = JSON.stringify(object);
            if (resp.length > 1000)
                console.log(resp.slice(0, 1000) + '...');
            else
                console.log(object);
        }
        console.log(exports.REQ_END + '\n');
    }, 0);
}
exports.logOutputSerialize = logOutputSerialize;
function logContext(opts) {
    setTimeout(function () {
        const req = opts.req;
        console.log('=============================================== Start ===============================================');
        consola_1.default.info('url           :', req.url.split('?')[0]);
        consola_1.default.info('from          :', req.headers['x-from']);
    }, 0);
}
exports.logContext = logContext;
function getStatusKeyFromStatus(status) {
    var _a;
    return (_a = JSONRPC2_TO_HTTP_STATUS[status]) !== null && _a !== void 0 ? _a : 'INTERNAL_SERVER_ERROR';
}
exports.getStatusKeyFromStatus = getStatusKeyFromStatus;
function getErrorCodeFromKey(key) {
    var _a;
    return (_a = TRPC_ERROR_CODES_BY_KEY[key]) !== null && _a !== void 0 ? _a : -32603;
}
exports.getErrorCodeFromKey = getErrorCodeFromKey;
const JSONRPC2_TO_HTTP_CODE = {
    PARSE_ERROR: 400,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    FORBIDDEN: 403,
    METHOD_NOT_SUPPORTED: 405,
    TIMEOUT: 408,
    CONFLICT: 409,
    PRECONDITION_FAILED: 412,
    PAYLOAD_TOO_LARGE: 413,
    UNPROCESSABLE_CONTENT: 422,
    TOO_MANY_REQUESTS: 429,
    CLIENT_CLOSED_REQUEST: 499,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
};
const JSONRPC2_TO_HTTP_STATUS = _.invert(JSONRPC2_TO_HTTP_CODE);
const TRPC_ERROR_CODES_BY_KEY = {
    /**
     * Invalid JSON was received by the server.
     * An error occurred on the server while parsing the JSON text.
     */
    PARSE_ERROR: -32700,
    /**
     * The JSON sent is not a valid Request object.
     */
    BAD_REQUEST: -32600, // 400
    // Internal JSON-RPC error
    INTERNAL_SERVER_ERROR: -32603,
    NOT_IMPLEMENTED: -32603,
    // Implementation specific errors
    UNAUTHORIZED: -32001, // 401
    FORBIDDEN: -32003, // 403
    NOT_FOUND: -32004, // 404
    METHOD_NOT_SUPPORTED: -32005, // 405
    TIMEOUT: -32008, // 408
    CONFLICT: -32009, // 409
    PRECONDITION_FAILED: -32012, // 412
    PAYLOAD_TOO_LARGE: -32013, // 413
    UNPROCESSABLE_CONTENT: -32022, // 422
    TOO_MANY_REQUESTS: -32029, // 429
    CLIENT_CLOSED_REQUEST: -32099, // 499
};
function logErrorStart(opts) {
    setTimeout(function () {
        consola_1.default.error('**************************************** ERROR START ****************************************');
        consola_1.default.info(`procedure    :`, `${opts.path}.${opts.type}`);
        consola_1.default.info(`input        :`);
        console.log(opts.input);
    }, 0);
}
exports.logErrorStart = logErrorStart;
function logErrorEnd(opts) {
    setTimeout(function () {
        consola_1.default.info(`message      :`, opts.error.message);
        consola_1.default.info(`stack        :`, opts.error.stack);
        consola_1.default.error(exports.ERROR_END);
    }, 0);
}
exports.logErrorEnd = logErrorEnd;
function transformHttpException(opts, json) {
    const shape = opts.shape;
    const key = getStatusKeyFromStatus(json.status);
    const code = getErrorCodeFromKey(key);
    setTimeout(function () {
        consola_1.default.info(`cause`);
        console.log(`    status     :`, json.status);
        console.log(`    message    :`, json.message);
        console.log(`    error      :`, json.error);
        consola_1.default.info(`stack        :`, json.stack);
        consola_1.default.error(exports.ERROR_END);
    }, 0);
    return Object.assign(Object.assign({}, shape), { code, 
        // message // message 无需替代 throw new ConflictException('<message>') 第一个参数已经替代了 https://docs.nestjs.com/exception-filters#built-in-http-exceptions
        data: Object.assign(Object.assign({}, shape.data), {
            code: key, // 替换成 HttpException 对应的 短字符
            httpStatus: json.status, // 替换成 http status code
            description: {
                // 详情
                procedure: `${opts.path}.${opts.type}`,
                input: opts.input,
                error: json.error,
            },
        }) });
}
exports.transformHttpException = transformHttpException;
function errorFormatter(opts, handlers) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    let json = {
        procedure: `${opts.path}.${opts.type}`,
        input: opts.input,
        diagnosis: ((_a = opts.ctx) === null || _a === void 0 ? void 0 : _a._diagnosis) || [],
    };
    const requestId = ((_b = opts.ctx) === null || _b === void 0 ? void 0 : _b.requestId) || '';
    const tenantId = ((_d = (_c = opts.ctx) === null || _c === void 0 ? void 0 : _c.user) === null || _d === void 0 ? void 0 : _d.tenantId) || ((_f = (_e = opts.ctx) === null || _e === void 0 ? void 0 : _e.tenant) === null || _f === void 0 ? void 0 : _f.id);
    const userId = (_h = (_g = opts.ctx) === null || _g === void 0 ? void 0 : _g.user) === null || _h === void 0 ? void 0 : _h.id;
    logErrorStart(opts);
    consola_1.default.info(`tenantId     :`, tenantId);
    consola_1.default.info(`userId       :`, userId);
    if (Array.isArray((_j = opts.ctx) === null || _j === void 0 ? void 0 : _j._diagnosis) && opts.ctx._diagnosis.length > 0) {
        consola_1.default.info(`trace:`);
        const msg = opts.ctx._diagnosis
            .map((m) => {
            const indent = (0, lodash_1.repeat)(' ', 4);
            const msg = m.map(i => (typeof i === 'string' ? i : JSON.stringify(i))).join(', ');
            return indent + msg;
        })
            .join('\n');
        console.log(msg);
        console.log();
    }
    // 如果是 nestjs HttpException
    if (opts.error.cause instanceof common_1.HttpException) {
        const json2 = {
            status: opts.error.cause.getStatus(),
            message: opts.error.cause.getResponse()['message'],
            error: opts.error.cause.getResponse()['error'],
            stack: opts.error.stack,
        };
        json = Object.assign(json, json2);
        const ret = transformHttpException(opts, json2);
        if (typeof (handlers === null || handlers === void 0 ? void 0 : handlers.log) === 'function') {
            handlers.log({
                requestId,
                tenantId,
                userId,
                log: json,
            });
        }
        return ret;
    }
    else {
        logErrorEnd(opts);
        json = Object.assign(json, {
            message: opts.error.message,
            stack: opts.error.stack,
        });
        if (typeof (handlers === null || handlers === void 0 ? void 0 : handlers.log) === 'function') {
            handlers.log({
                requestId,
                tenantId,
                userId,
                log: json,
            });
        }
        return opts.shape;
    }
}
exports.errorFormatter = errorFormatter;
// object => object 是默认值
// https://github.com/trpc/trpc/blob/next/packages/client/src/internals/transformer.ts#L57
exports.transformer = {
    input: {
        // on client
        serialize: (object) => object,
        // on server -> resolver
        deserialize: (object) => {
            logInputSerialize(object);
            return object;
        },
    },
    output: {
        // on server -> client
        serialize: (object) => {
            logOutputSerialize(object);
            return object;
        },
        // on client
        deserialize: (object) => object,
    },
};
function createContext(opts) {
    logContext(opts);
    const requestId = (0, cuid2_1.createId)();
    opts.res.setHeader('x-request-id', requestId);
    consola_1.default.info('x-request-id  :', requestId);
    return {
        req: opts.req,
        res: opts.res,
        requestId,
        _diagnosis: [],
        user: undefined,
        tenant: undefined,
    };
}
exports.createContext = createContext;
/**
 * 一个简单的基于 trpc ctx 的 诊断工具 报错之后会记录手动埋的路径，方便排查错误
 */
function diag(ctx, ...message) {
    (ctx === null || ctx === void 0 ? void 0 : ctx._diagnosis) != null && ctx._diagnosis.push(message);
}
exports.diag = diag;


/***/ }),

/***/ "../../libs/flowda-shared-types/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared-types/src/symbols.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared-types/src/types.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared-types/src/zods.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared-types/src/zod-utils.ts"), exports);


/***/ }),

/***/ "../../libs/flowda-shared-types/src/symbols.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginModelSymbol = exports.GridModelSymbol = exports.WechatpayNodeV3FactorySymbol = exports.WechatpayNodeV3Symbol = exports.MenuServiceSymbol = exports.DynamicTableDefServiceSymbol = exports.DynamicTableDataServiceSymbol = exports.WechatOAuthSymbol = exports.SmsClientSymbol = exports.COSSymbol = exports.K3CloudIdentifyInfoSymbol = exports.CustomZodSchemaSymbol = exports.PrismaZodSchemaSymbol = exports.ENVSymbol = exports.URLSymbol = exports.APISymbol = exports.ServiceSymbol = exports.PrismaClientSymbol = exports.FlowdaGatewayTrpcClientSymbol = exports.FlowdaTrpcClientSymbol = exports.DynamicTableSchemaTransformerSymbol = exports.SchemaServiceSymbol = exports.DataServiceSymbol = exports.PrismaUtilsSymbol = exports.SchemaTransformerSymbol = exports.PrismaSchemaServiceSymbol = void 0;
exports.PrismaSchemaServiceSymbol = Symbol.for('PrismaSchemaService');
exports.SchemaTransformerSymbol = Symbol.for('SchemaTransformer');
exports.PrismaUtilsSymbol = Symbol.for('PrismaUtils');
exports.DataServiceSymbol = Symbol.for('DataService');
exports.SchemaServiceSymbol = Symbol.for('SchemaService');
exports.DynamicTableSchemaTransformerSymbol = Symbol.for('DynamicTableSchemaTransformer');
exports.FlowdaTrpcClientSymbol = Symbol.for('FlowdaTrpcClient');
exports.FlowdaGatewayTrpcClientSymbol = Symbol.for('FlowdaGatewayTrpcClient');
exports.PrismaClientSymbol = Symbol('PrismaClient');
/**
 * getServices 方法会将 inversify module 转换成 nestjs module，这样 nestjs controller 就可以使用了
 * 所以，注意：如果不需要给 controller 使用，则不需要 bind
 */
exports.ServiceSymbol = Symbol('Service');
exports.APISymbol = Symbol('API');
exports.URLSymbol = Symbol.for('URL');
exports.ENVSymbol = Symbol.for('ENV');
exports.PrismaZodSchemaSymbol = Symbol.for('PrismaZodSchema');
exports.CustomZodSchemaSymbol = Symbol.for('CustomZodSchema');
exports.K3CloudIdentifyInfoSymbol = Symbol.for('K3CloudIdentifyInfo');
exports.COSSymbol = Symbol('COS');
exports.SmsClientSymbol = Symbol.for('SmsClient');
exports.WechatOAuthSymbol = Symbol.for('WechatOAuth');
exports.DynamicTableDataServiceSymbol = Symbol.for('DynamicTableDataService');
exports.DynamicTableDefServiceSymbol = Symbol.for('DynamicTableDefService');
exports.MenuServiceSymbol = Symbol.for('MenuService');
exports.WechatpayNodeV3Symbol = Symbol.for('WechatpayNodeV3Symbol');
exports.WechatpayNodeV3FactorySymbol = Symbol.for('WechatpayNodeV3FactorySymbol');
exports.GridModelSymbol = Symbol.for('GridModel');
exports.LoginModelSymbol = Symbol.for('LoginModel');


/***/ }),

/***/ "../../libs/flowda-shared-types/src/types.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Serial_Max = exports.Serial_Min = exports.EPlan = void 0;
var EPlan;
(function (EPlan) {
    EPlan[EPlan["Free"] = 1] = "Free";
    EPlan[EPlan["VIP"] = 2] = "VIP";
})(EPlan || (exports.EPlan = EPlan = {}));
exports.Serial_Min = 10001;
exports.Serial_Max = 99999;


/***/ }),

/***/ "../../libs/flowda-shared-types/src/zod-utils.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createZodDto = void 0;
function createZodDto(schema) {
    class AugmentedZodDto {
        static create(input) {
            return this.schema.parse(input);
        }
    }
    AugmentedZodDto.isZodDto = true;
    AugmentedZodDto.schema = schema;
    return AugmentedZodDto;
}
exports.createZodDto = createZodDto;


/***/ }),

/***/ "../../libs/flowda-shared-types/src/zods.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdkProductCreateManyItemDto = exports.productCreateManyItemSchema = exports.ResetPasswordDto = exports.resetPasswordWithRecoveryCodeTenantJwtSchemaDto = exports.resetPasswordWithRecoveryCodeSchemaDto = exports.resetPasswordWithRecoveryCodeSchema = exports.GenerateRecoveryCodeDto = exports.generateRecoveryCodeTenantJwtSchemaDto = exports.generateRecoveryCodeSchemaDto = exports.generateRecoveryCodeSchema = exports.wxValidateUserTenantJwtPayloadSchemaDto = exports.wxValidateUserSchema = exports.wxGetUserRes = exports.wxGetAccessTokenRes = exports.customerSignupTenantJwtPayloadSchemaDto = exports.customerSignupSchemaDto = exports.customerSignupSchema = exports.customerPreSignupTenantJwtPayloadSchemaDto = exports.customerPreSignupSchemaDto = exports.customerPreSignupSchema = exports.userJwtPayloadSchemaDto = exports.userJwtPayloadSchema = exports.tenantJwtPayloadSchema = exports.verifyMobileSchemaDto = exports.verifyMobileSchema = exports.resetPasswordSchemaDto = exports.resetPasswordSchema = exports.RegisterByUnionIdSchemaDto = exports.registerByUnionIdSchema = exports.FindByUnionIdAndTenantIdSchemaDto = exports.findByUnionIdAndTenantIdSchema = exports.GetTenantByNameSchemaDto = exports.getTenantByNameSchema = exports.validateSchemaDto = exports.validateSchema = exports.AccountExistsSchemaDto = exports.accountExistsSchema = exports.RegisterDto = exports.registerSchema = exports.prismaFilterSchema = exports.agSortSchema = exports.agFilterSchema = exports.agFilter2Schema = exports.agFilter1Schema = exports.agFilterInner2Schema = exports.agFilterInnerSchema = exports.resourceSchema = exports.resourceColumnSchema = exports.resourceAssociationSchema = exports.selectOptionSchema = void 0;
exports.wmsCustomerSchema = exports.gatewayTenantNameSchema = exports.menuItemSchemaDto = exports.menuItemSchema = exports.baseMenuItemSchema = exports.getMenuSchemaDto = exports.getMenuSchema = exports.loginSchemaDto = exports.loginSchema = exports.ctxUserSchemaDto = exports.ctxUserSchema = exports.ctxTenantSchemaDto = exports.ctxTenantSchema = exports.refreshTokenSchemaDto = exports.refreshTokenSchema = exports.sendSmsVerifyCodeSchemaDto = exports.sendSmsVerifyCodeSchema = exports.kanzhunDataSchema = exports.kanzhunItemSchemaDto = exports.kanzhunItemSchema = exports.kanzhunDetailSchemaDto = exports.kanzhunDetailSchema = exports.customerExtendDataSchemaDto = exports.customerExtendDataSchema = exports._resetTenantPasswordSchemaDto = exports._resetTenantPasswordSchema = exports.validateByEmailSchemaDto = exports.validateByEmailSchema = exports.validateTenantSchemaDto = exports.validateTenantSchema = exports.appCreateV4SchemaDto = exports.appCreateV4Schema = exports.createQuickOrderTenantJWTPayloadSchemaDto = exports.SdkCreateQuickOrderDto = exports.createQuickOrderSchema = exports.SdkCreateOrderInJSAPIDto = exports.createOrderJSAPISchema = exports.transactionsNativeSchemaDto = exports.transactionsNativeSchema = exports.createOrderUserJwtPayloadSchemaDto = exports.SdkCreateOrderDto = exports.createOrderSchema = exports.amountUpdateUserJwtPayloadSchemaDto = exports.amountUpdateSchemaDto = exports.amountUpdateSchema = exports.fwhLoginTenantJwtPayloadSchemaDto = exports.fwhLoginSchema = exports.wxPayQuerySchema = exports.updateFreeProfileSchema = exports.updatePaidProfileSchema = void 0;
exports.deploySiteToCosSchemaDto = exports.deploySiteToCosSchema = exports.wmsSaleOutWarehouseSchema = exports.wmsPurchaseReturnOutWarehouseSchema = exports.wmsProduceOutWarehouseSchema = exports.wmsOtherOutWarehouseSchema = exports.wmsOEMOutWarehouseSchema = exports.wmsOEMAddOutWarehouseSchema = exports.wmsUpdateWarehousingAuditToErpSchema = exports.wmsPRDFeedMtrlSchema = exports.wmsSubReturnWarehousingSchema = exports.wmsPurchaseWarehousingSchema = exports.wmsProduceWarehousingSchema = exports.wmsProduceReturnWarehousingSchema = exports.wmsOtherWarehousingSchema = exports.wmsOEMWarehousingSchema = exports.wmsOEMReturnSchema = exports.wmsWarehousingItemSchema = exports.wmsGoodsTypeSchema = exports.wmsSupplierSchema = exports.wmsStockSchema = exports.wmsGoodsUtilSchema = exports.wmsGoodsMslSchema = exports.wmsGoodsSchema = void 0;
const zod_1 = __webpack_require__("zod");
const zod_utils_1 = __webpack_require__("../../libs/flowda-shared-types/src/zod-utils.ts");
const zod_openapi_1 = __webpack_require__("@anatine/zod-openapi");
// import { extendZodWithOpenApi } from 'zod-openapi'
(0, zod_openapi_1.extendZodWithOpenApi)(zod_1.z);
exports.selectOptionSchema = zod_1.z.object({
    value: zod_1.z.union([zod_1.z.string(), zod_1.z.number()]),
    label: zod_1.z.string(),
});
exports.resourceAssociationSchema = zod_1.z.object({
    foreign_key: zod_1.z.string(),
    model_name: zod_1.z.string(),
    primary_key: zod_1.z.string(),
    name: zod_1.z.string(),
    slug: zod_1.z.string(),
    display_name: zod_1.z.string(),
    schema_name: zod_1.z.string(),
});
exports.resourceColumnSchema = zod_1.z.object({
    name: zod_1.z.string(),
    access_type: zod_1.z.enum(['read_only']).optional(),
    column_type: zod_1.z.enum(['reference', 'string', 'tag', 'integer', 'datetime', 'textarea', 'boolean']),
    prisma: zod_1.z.boolean().optional(),
    format: zod_1.z
        .object({
        select_options: exports.selectOptionSchema.array(),
    })
        .optional(),
    reference: zod_1.z.object({
        model_name: zod_1.z.string(),
        primary_key: zod_1.z.string(),
        display_name: zod_1.z.string(),
        display_column: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string()), zod_1.z.undefined()]),
        'x-relationField': zod_1.z.string(),
        'x-onSoftDelete': zod_1.z.string(),
        'x-unique': zod_1.z.boolean().optional(),
    }),
    display_name: zod_1.z.string().optional(),
    validators: zod_1.z.array(zod_1.z.union([
        zod_1.z.object({
            required: zod_1.z.boolean(),
        }),
        zod_1.z.object({
            format: zod_1.z.string(),
            message: zod_1.z.string(),
        }),
    ])),
});
exports.resourceSchema = zod_1.z.object({
    namespace: zod_1.z.string().optional(),
    prisma: zod_1.z.boolean().optional(),
    is_dynamic: zod_1.z.boolean().optional(),
    schema_name: zod_1.z.string(),
    name: zod_1.z.string(),
    slug: zod_1.z.string(),
    primary_key: zod_1.z.string(),
    custom: zod_1.z.any(),
    display_column: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string()), zod_1.z.undefined()]),
    display_name: zod_1.z.string().nullable(),
    display_primary_key: zod_1.z.boolean(),
    searchable_columns: zod_1.z.array(zod_1.z.string()).optional(),
    columns: exports.resourceColumnSchema.array(),
    associations: exports.resourceAssociationSchema.array(),
    __jsonschema: zod_1.z.any(),
});
exports.agFilterInnerSchema = zod_1.z.object({
    filterType: zod_1.z.enum(['text', 'number']),
    // filterType: z.string(),
    type: zod_1.z.enum(['contains', 'equals']),
    // type: z.string(),
    filter: zod_1.z.union([zod_1.z.string(), zod_1.z.number()]),
});
exports.agFilterInner2Schema = zod_1.z.object({
    filterType: zod_1.z.enum(['text']),
    // filterType: z.string(),
    operator: zod_1.z.enum(['OR', 'AND']),
    // operator: z.string(),
    conditions: zod_1.z.array(exports.agFilterInnerSchema),
});
exports.agFilter1Schema = zod_1.z.record(exports.agFilterInnerSchema);
exports.agFilter2Schema = zod_1.z.record(exports.agFilterInner2Schema);
exports.agFilterSchema = zod_1.z
    .record(exports.agFilterInnerSchema.or(exports.agFilterInner2Schema))
    .or(zod_1.z.object({ _ref: zod_1.z.string().optional() }));
exports.agSortSchema = zod_1.z.array(zod_1.z.object({
    colId: zod_1.z.string(),
    sort: zod_1.z.enum(['asc', 'desc']),
}));
exports.prismaFilterSchema = zod_1.z.object({
    OR: zod_1.z.array(zod_1.z.record(zod_1.z.record(zod_1.z.enum(['contains']), zod_1.z.string()))),
});
exports.registerSchema = zod_1.z.object({
    username: zod_1.z.string(),
    password: zod_1.z.string(),
    tenantId: zod_1.z.number(),
});
class RegisterDto extends (0, zod_utils_1.createZodDto)(exports.registerSchema) {
}
exports.RegisterDto = RegisterDto;
exports.accountExistsSchema = zod_1.z.object({
    username: zod_1.z.string(),
    tenantName: zod_1.z.string(),
});
class AccountExistsSchemaDto extends (0, zod_utils_1.createZodDto)(exports.accountExistsSchema) {
}
exports.AccountExistsSchemaDto = AccountExistsSchemaDto;
exports.validateSchema = zod_1.z.object({
    tenantId: zod_1.z.number().optional(),
    username: zod_1.z.string(),
    password: zod_1.z.string(),
});
class validateSchemaDto extends (0, zod_utils_1.createZodDto)(exports.validateSchema) {
}
exports.validateSchemaDto = validateSchemaDto;
exports.getTenantByNameSchema = zod_1.z.object({
    tenantName: zod_1.z.string(),
});
class GetTenantByNameSchemaDto extends (0, zod_utils_1.createZodDto)(exports.getTenantByNameSchema) {
}
exports.GetTenantByNameSchemaDto = GetTenantByNameSchemaDto;
exports.findByUnionIdAndTenantIdSchema = zod_1.z.object({
    unionid: zod_1.z.string(),
    tenantId: zod_1.z.number(),
});
class FindByUnionIdAndTenantIdSchemaDto extends (0, zod_utils_1.createZodDto)(exports.findByUnionIdAndTenantIdSchema) {
}
exports.FindByUnionIdAndTenantIdSchemaDto = FindByUnionIdAndTenantIdSchemaDto;
exports.registerByUnionIdSchema = zod_1.z.object({
    unionid: zod_1.z.string(),
    tenantId: zod_1.z.number(),
});
class RegisterByUnionIdSchemaDto extends (0, zod_utils_1.createZodDto)(exports.registerByUnionIdSchema) {
}
exports.RegisterByUnionIdSchemaDto = RegisterByUnionIdSchemaDto;
exports.resetPasswordSchema = zod_1.z.object({
    userId: zod_1.z.number(),
    tenantId: zod_1.z.number(),
    password: zod_1.z.string(),
});
class resetPasswordSchemaDto extends (0, zod_utils_1.createZodDto)(exports.resetPasswordSchema) {
}
exports.resetPasswordSchemaDto = resetPasswordSchemaDto;
exports.verifyMobileSchema = zod_1.z.object({
    uid: zod_1.z.number(),
    tid: zod_1.z.number(),
    mobile: zod_1.z.string(),
    code: zod_1.z.string(),
    slug: zod_1.z.string(),
});
class verifyMobileSchemaDto extends (0, zod_utils_1.createZodDto)(exports.verifyMobileSchema) {
}
exports.verifyMobileSchemaDto = verifyMobileSchemaDto;
exports.tenantJwtPayloadSchema = zod_1.z.object({
    tid: zod_1.z.number(),
});
exports.userJwtPayloadSchema = zod_1.z.object({
    uid: zod_1.z.number(),
    tid: zod_1.z.number(),
});
class userJwtPayloadSchemaDto extends (0, zod_utils_1.createZodDto)(exports.userJwtPayloadSchema) {
}
exports.userJwtPayloadSchemaDto = userJwtPayloadSchemaDto;
exports.customerPreSignupSchema = zod_1.z.object({
    email: zod_1.z.string(),
});
class customerPreSignupSchemaDto extends (0, zod_utils_1.createZodDto)(exports.customerPreSignupSchema) {
}
exports.customerPreSignupSchemaDto = customerPreSignupSchemaDto;
class customerPreSignupTenantJwtPayloadSchemaDto extends (0, zod_utils_1.createZodDto)(exports.customerPreSignupSchema.merge(exports.tenantJwtPayloadSchema)) {
}
exports.customerPreSignupTenantJwtPayloadSchemaDto = customerPreSignupTenantJwtPayloadSchemaDto;
exports.customerSignupSchema = zod_1.z.object({
    email: zod_1.z.string(),
    verifyCode: zod_1.z.string(),
    password: zod_1.z.string(),
});
class customerSignupSchemaDto extends (0, zod_utils_1.createZodDto)(exports.customerSignupSchema) {
}
exports.customerSignupSchemaDto = customerSignupSchemaDto;
class customerSignupTenantJwtPayloadSchemaDto extends (0, zod_utils_1.createZodDto)(exports.customerSignupSchema.merge(exports.tenantJwtPayloadSchema)) {
}
exports.customerSignupTenantJwtPayloadSchemaDto = customerSignupTenantJwtPayloadSchemaDto;
exports.wxGetAccessTokenRes = zod_1.z.object({
    access_token: zod_1.z.string(),
    expires_in: zod_1.z.string(),
    refresh_token: zod_1.z.string(),
    openid: zod_1.z.string(),
    scope: zod_1.z.string(),
    unionid: zod_1.z.string(),
    create_at: zod_1.z.string(),
});
exports.wxGetUserRes = zod_1.z.object({
    openid: zod_1.z.string(),
    nickname: zod_1.z.string(),
    sex: zod_1.z.number(),
    headimgurl: zod_1.z.string(),
    unionid: zod_1.z.string(),
    language: zod_1.z.string(),
    city: zod_1.z.string(),
    province: zod_1.z.string(),
    country: zod_1.z.string(),
    privilege: zod_1.z.array(zod_1.z.string()),
});
exports.wxValidateUserSchema = zod_1.z.object({
    code: zod_1.z.string(),
});
class wxValidateUserTenantJwtPayloadSchemaDto extends (0, zod_utils_1.createZodDto)(exports.wxValidateUserSchema.merge(exports.tenantJwtPayloadSchema)) {
}
exports.wxValidateUserTenantJwtPayloadSchemaDto = wxValidateUserTenantJwtPayloadSchemaDto;
exports.generateRecoveryCodeSchema = zod_1.z.object({
    email: zod_1.z.string(),
});
class generateRecoveryCodeSchemaDto extends (0, zod_utils_1.createZodDto)(exports.generateRecoveryCodeSchema) {
}
exports.generateRecoveryCodeSchemaDto = generateRecoveryCodeSchemaDto;
class generateRecoveryCodeTenantJwtSchemaDto extends (0, zod_utils_1.createZodDto)(exports.generateRecoveryCodeSchema.merge(exports.tenantJwtPayloadSchema)) {
}
exports.generateRecoveryCodeTenantJwtSchemaDto = generateRecoveryCodeTenantJwtSchemaDto;
class GenerateRecoveryCodeDto extends (0, zod_utils_1.createZodDto)(exports.generateRecoveryCodeSchema.merge(zod_1.z.object({
    appId: zod_1.z.string(),
}))) {
}
exports.GenerateRecoveryCodeDto = GenerateRecoveryCodeDto;
exports.resetPasswordWithRecoveryCodeSchema = zod_1.z.object({
    recoveryCode: zod_1.z.string(),
    password: zod_1.z.string(),
});
class resetPasswordWithRecoveryCodeSchemaDto extends (0, zod_utils_1.createZodDto)(exports.resetPasswordWithRecoveryCodeSchema) {
}
exports.resetPasswordWithRecoveryCodeSchemaDto = resetPasswordWithRecoveryCodeSchemaDto;
class resetPasswordWithRecoveryCodeTenantJwtSchemaDto extends (0, zod_utils_1.createZodDto)(exports.resetPasswordWithRecoveryCodeSchema.merge(exports.tenantJwtPayloadSchema)) {
}
exports.resetPasswordWithRecoveryCodeTenantJwtSchemaDto = resetPasswordWithRecoveryCodeTenantJwtSchemaDto;
class ResetPasswordDto extends (0, zod_utils_1.createZodDto)(exports.resetPasswordWithRecoveryCodeSchema.merge(zod_1.z.object({
    appId: zod_1.z.string(),
}))) {
}
exports.ResetPasswordDto = ResetPasswordDto;
exports.productCreateManyItemSchema = zod_1.z.object({
    name: zod_1.z.string(),
    price: zod_1.z.number(),
    productType: zod_1.z.string(),
    amount: zod_1.z.number().optional(),
    plan: zod_1.z.number().nullable().optional(),
    extendedDescriptionData: zod_1.z.any().optional(),
    restricted: zod_1.z.number().nullable().optional(),
    fileSize: zod_1.z.string().nullable().optional(),
    storeDuration: zod_1.z.number().nullable().optional(),
    hasAds: zod_1.z.string().nullable().optional(),
    tecSupport: zod_1.z.string().nullable().optional(),
});
class SdkProductCreateManyItemDto extends (0, zod_utils_1.createZodDto)(exports.productCreateManyItemSchema) {
}
exports.SdkProductCreateManyItemDto = SdkProductCreateManyItemDto;
exports.updatePaidProfileSchema = zod_1.z.object({
    product: zod_1.z.object({
        productType: zod_1.z.any(),
        plan: zod_1.z.number().nullable(),
        amount: zod_1.z.number().nullable(),
        validityPeriod: zod_1.z.number().nullable(),
    }),
});
exports.updateFreeProfileSchema = zod_1.z.object({
    product: zod_1.z.object({
        productType: zod_1.z.any(),
        plan: zod_1.z.number().nullable(),
        amount: zod_1.z.number().nullable(),
        validityPeriod: zod_1.z.number().nullable(),
    }),
});
exports.wxPayQuerySchema = zod_1.z.object({
    status: zod_1.z.number(),
    trade_state: zod_1.z.string(),
    transaction_id: zod_1.z.string(),
    payer: zod_1.z.object({
        openid: zod_1.z.string(),
    }),
});
exports.fwhLoginSchema = zod_1.z.object({
    code: zod_1.z.string(),
});
class fwhLoginTenantJwtPayloadSchemaDto extends (0, zod_utils_1.createZodDto)(exports.fwhLoginSchema.merge(exports.tenantJwtPayloadSchema)) {
}
exports.fwhLoginTenantJwtPayloadSchemaDto = fwhLoginTenantJwtPayloadSchemaDto;
exports.amountUpdateSchema = zod_1.z.object({
    action: zod_1.z.enum(['decrement']).optional(),
    count: zod_1.z.number().optional(),
});
class amountUpdateSchemaDto extends (0, zod_utils_1.createZodDto)(exports.amountUpdateSchema) {
}
exports.amountUpdateSchemaDto = amountUpdateSchemaDto;
class amountUpdateUserJwtPayloadSchemaDto extends (0, zod_utils_1.createZodDto)(exports.amountUpdateSchema.merge(exports.userJwtPayloadSchema)) {
}
exports.amountUpdateUserJwtPayloadSchemaDto = amountUpdateUserJwtPayloadSchemaDto;
exports.createOrderSchema = zod_1.z.object({
    productId: zod_1.z.string(),
    openid: zod_1.z.string().optional(),
});
class SdkCreateOrderDto extends (0, zod_utils_1.createZodDto)(exports.createOrderSchema) {
}
exports.SdkCreateOrderDto = SdkCreateOrderDto;
class createOrderUserJwtPayloadSchemaDto extends (0, zod_utils_1.createZodDto)(exports.createOrderSchema.merge(exports.userJwtPayloadSchema)) {
}
exports.createOrderUserJwtPayloadSchemaDto = createOrderUserJwtPayloadSchemaDto;
exports.transactionsNativeSchema = zod_1.z.object({
    orderId: zod_1.z.string(),
    desc: zod_1.z.string(),
    total: zod_1.z.number(),
    openid: zod_1.z.string().optional(),
});
class transactionsNativeSchemaDto extends (0, zod_utils_1.createZodDto)(exports.transactionsNativeSchema) {
}
exports.transactionsNativeSchemaDto = transactionsNativeSchemaDto;
exports.createOrderJSAPISchema = exports.createOrderSchema.extend({ openid: zod_1.z.string() });
class SdkCreateOrderInJSAPIDto extends (0, zod_utils_1.createZodDto)(exports.createOrderJSAPISchema) {
}
exports.SdkCreateOrderInJSAPIDto = SdkCreateOrderInJSAPIDto;
exports.createQuickOrderSchema = exports.createOrderSchema.extend({
    // 快捷创建需要客户端提供一个匿名 Token
    anonymousCustomerToken: zod_1.z.string(),
});
class SdkCreateQuickOrderDto extends (0, zod_utils_1.createZodDto)(exports.createQuickOrderSchema) {
}
exports.SdkCreateQuickOrderDto = SdkCreateQuickOrderDto;
class createQuickOrderTenantJWTPayloadSchemaDto extends (0, zod_utils_1.createZodDto)(exports.createQuickOrderSchema.merge(exports.tenantJwtPayloadSchema)) {
}
exports.createQuickOrderTenantJWTPayloadSchemaDto = createQuickOrderTenantJWTPayloadSchemaDto;
exports.appCreateV4Schema = zod_1.z.object({
    displayName: zod_1.z.string(),
});
class appCreateV4SchemaDto extends (0, zod_utils_1.createZodDto)(exports.appCreateV4Schema) {
}
exports.appCreateV4SchemaDto = appCreateV4SchemaDto;
exports.validateTenantSchema = zod_1.z.object({
    name: zod_1.z.string(),
    password: zod_1.z.string(),
});
class validateTenantSchemaDto extends (0, zod_utils_1.createZodDto)(exports.validateTenantSchema) {
}
exports.validateTenantSchemaDto = validateTenantSchemaDto;
exports.validateByEmailSchema = zod_1.z.object({
    email: zod_1.z.string(),
    tenantId: zod_1.z.number(),
    password: zod_1.z.string(),
});
class validateByEmailSchemaDto extends (0, zod_utils_1.createZodDto)(exports.validateByEmailSchema) {
}
exports.validateByEmailSchemaDto = validateByEmailSchemaDto;
exports._resetTenantPasswordSchema = zod_1.z.object({
    id: zod_1.z.number(),
});
class _resetTenantPasswordSchemaDto extends (0, zod_utils_1.createZodDto)(exports._resetTenantPasswordSchema) {
}
exports._resetTenantPasswordSchemaDto = _resetTenantPasswordSchemaDto;
exports.customerExtendDataSchema = zod_1.z
    .object({
    biz: zod_1.z.string(),
    icp: zod_1.z.string().nullable(),
    contact: zod_1.z
        .object({
        email: zod_1.z.string(),
        phone: zod_1.z.string(),
        address: zod_1.z.string(),
    })
        .partial(),
    companyName: zod_1.z.string(),
    description: zod_1.z.string(),
})
    .partial();
class customerExtendDataSchemaDto extends (0, zod_utils_1.createZodDto)(exports.customerExtendDataSchema) {
}
exports.customerExtendDataSchemaDto = customerExtendDataSchemaDto;
exports.kanzhunDetailSchema = zod_1.z
    .object({
    公司全称: zod_1.z.string(),
    联系方式: zod_1.z.array(zod_1.z.string()),
    地址: zod_1.z.string(),
    简介: zod_1.z.string(),
})
    .partial();
class kanzhunDetailSchemaDto extends (0, zod_utils_1.createZodDto)(exports.kanzhunDetailSchema) {
}
exports.kanzhunDetailSchemaDto = kanzhunDetailSchemaDto;
exports.kanzhunItemSchema = zod_1.z
    .object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    detail: exports.kanzhunDetailSchema,
})
    .partial();
class kanzhunItemSchemaDto extends (0, zod_utils_1.createZodDto)(exports.kanzhunItemSchema) {
}
exports.kanzhunItemSchemaDto = kanzhunItemSchemaDto;
exports.kanzhunDataSchema = zod_1.z
    .object({
    date: zod_1.z.string(),
    data: zod_1.z.array(exports.kanzhunItemSchema),
})
    .partial();
exports.sendSmsVerifyCodeSchema = zod_1.z.object({ mobile: zod_1.z.string() });
class sendSmsVerifyCodeSchemaDto extends (0, zod_utils_1.createZodDto)(exports.sendSmsVerifyCodeSchema) {
}
exports.sendSmsVerifyCodeSchemaDto = sendSmsVerifyCodeSchemaDto;
exports.refreshTokenSchema = zod_1.z.object({ rt: zod_1.z.string() });
class refreshTokenSchemaDto extends (0, zod_utils_1.createZodDto)(exports.refreshTokenSchema) {
}
exports.refreshTokenSchemaDto = refreshTokenSchemaDto;
exports.ctxTenantSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
});
class ctxTenantSchemaDto extends (0, zod_utils_1.createZodDto)(exports.ctxTenantSchema) {
}
exports.ctxTenantSchemaDto = ctxTenantSchemaDto;
exports.ctxUserSchema = zod_1.z.object({
    id: zod_1.z.number(),
    tenantId: zod_1.z.number(),
    username: zod_1.z.string(),
});
class ctxUserSchemaDto extends (0, zod_utils_1.createZodDto)(exports.ctxUserSchema) {
}
exports.ctxUserSchemaDto = ctxUserSchemaDto;
exports.loginSchema = zod_1.z.object({
    username: zod_1.z.string(),
    password: zod_1.z.string().min(4),
});
class loginSchemaDto extends (0, zod_utils_1.createZodDto)(exports.loginSchema) {
}
exports.loginSchemaDto = loginSchemaDto;
exports.getMenuSchema = zod_1.z.object({
    tenantId: zod_1.z.number(),
});
class getMenuSchemaDto extends (0, zod_utils_1.createZodDto)(exports.getMenuSchema) {
}
exports.getMenuSchemaDto = getMenuSchemaDto;
// https://github.com/colinhacks/zod/discussions/2245
exports.baseMenuItemSchema = zod_1.z.object({
    name: zod_1.z.string(),
    slug: zod_1.z.string(),
    id: zod_1.z.string(),
});
exports.menuItemSchema = exports.baseMenuItemSchema.extend({
    children: zod_1.z.lazy(() => exports.menuItemSchema.array().optional()),
});
class menuItemSchemaDto extends (0, zod_utils_1.createZodDto)(exports.menuItemSchema) {
}
exports.menuItemSchemaDto = menuItemSchemaDto;
exports.gatewayTenantNameSchema = zod_1.z.enum(['flowda', 'cmsAdmin']);
exports.wmsCustomerSchema = zod_1.z.object({
    customerCode: zod_1.z.string().openapi({
        description: '客户编号',
    }),
    customerName: zod_1.z.string().openapi({
        description: '客户名称',
    }),
    masterId: zod_1.z.string().openapi({
        description: '货主id',
    }),
    contact: zod_1.z.string().openapi({
        description: '联系人',
    }),
    contactInfo: zod_1.z.string().openapi({
        description: '联系方式',
    }),
    status: zod_1.z.union([zod_1.z.literal(1), zod_1.z.literal(9)]).openapi({
        description: '状态1、启用 0、禁用',
    }),
    organizationId: zod_1.z.string().openapi({
        description: '组织Id',
    }),
});
exports.wmsGoodsSchema = zod_1.z.object({
    goodsCode: zod_1.z.string().openapi({
        description: '货物编号',
    }),
    goodsName: zod_1.z.string().openapi({
        description: '货物名称',
    }),
    goodsTypeId: zod_1.z.string().openapi({
        description: '货物类型id',
    }),
    goodsAttribute: zod_1.z.string().openapi({
        description: '货物属性',
    }),
    masterId: zod_1.z.string().openapi({
        description: '货主信息',
    }),
    specification: zod_1.z.string().openapi({
        description: '规格型号',
    }),
    measurementUnit: zod_1.z.string().openapi({
        description: '计量单位',
    }),
    goodsPackageId: zod_1.z.string().openapi({
        description: '包装规格id',
    }),
    batchId: zod_1.z.string().openapi({
        description: '批次id',
    }),
    goodsInspectMode: zod_1.z.number().openapi({
        description: '货物检验方式1、全检2、抽检3、免检',
    }),
    length: zod_1.z.number().openapi({
        description: '长',
    }),
    width: zod_1.z.number().openapi({
        description: '宽',
    }),
    high: zod_1.z.number().openapi({
        description: '高',
    }),
    volume: zod_1.z.number().openapi({
        description: '体积',
    }),
    grossWeight: zod_1.z.number().openapi({
        description: '毛重',
    }),
    netWeight: zod_1.z.number().openapi({
        description: '净重',
    }),
    minStock: zod_1.z.number().openapi({
        description: '最低库存',
    }),
    maxStock: zod_1.z.number().openapi({
        description: '最高库存',
    }),
    maxStorageTime: zod_1.z.number().openapi({
        description: '最长储存时间',
    }),
    isAuto: zod_1.z.number().openapi({
        description: '是否自动化1、是 0、否',
    }),
    choppedQuantity: zod_1.z.number().openapi({
        description: '剁型每层数量',
    }),
    choppedLayer: zod_1.z.number().openapi({
        description: '剁型层数',
    }),
    goodsPicture: zod_1.z.string().openapi({
        description: '货物图片',
    }),
    fSeitBrand: zod_1.z.string().openapi({
        description: '品牌',
    }),
    fSeitCasePackage: zod_1.z.string().openapi({
        description: '封装',
    }),
    fSeitMsl: zod_1.z.string().openapi({
        description: 'MSL',
    }),
    fRefCost: zod_1.z.string().openapi({
        description: '单位成本',
    }),
    fSeitMpn: zod_1.z.string().openapi({
        description: 'MPN',
    }),
    status: zod_1.z.number().openapi({
        description: '状态1、启用 0、禁用',
    }),
    organizationId: zod_1.z.number().openapi({
        description: '组织id',
    }),
});
exports.wmsGoodsMslSchema = zod_1.z.object({
    mslCode: zod_1.z.string().openapi({ description: 'MSL' }),
});
exports.wmsGoodsUtilSchema = zod_1.z.object({
    unitId: zod_1.z.string().openapi({ description: '计量单位id' }),
    name: zod_1.z.string().openapi({ description: '计量单位名称' }),
    code: zod_1.z.string().openapi({ description: '计量单位code' }),
});
exports.wmsStockSchema = zod_1.z.object({
    id: zod_1.z.string().openapi({ description: 'erp仓库id' }),
    code: zod_1.z.string().openapi({ description: 'erp仓库编码' }),
});
exports.wmsSupplierSchema = zod_1.z.object({
    supplierCode: zod_1.z.string().openapi({ description: '供应商编号' }),
    supplierName: zod_1.z.string().openapi({ description: '供应商名称' }),
    masterId: zod_1.z.string().openapi({ description: '货主id' }),
    contact: zod_1.z.string().openapi({ description: '联系人' }),
    contactInfo: zod_1.z.string().openapi({ description: '联系方式' }),
    remark: zod_1.z.string().openapi({ description: '备注' }),
    status: zod_1.z.number().openapi({ description: '状态1、启用 0、禁用' }),
    organizationId: zod_1.z.string().openapi({ description: '组织Id' }),
});
exports.wmsGoodsTypeSchema = zod_1.z.object({
    goodsTypeCode: zod_1.z.string().openapi({ description: '货物类型编号' }),
    goodsTypeName: zod_1.z.string().openapi({ description: '货物类型名称' }),
    status: zod_1.z.number().openapi({ description: '状态1、启用 0、禁用' }),
    organizationId: zod_1.z.string().openapi({ description: '组织Id' }),
});
exports.wmsWarehousingItemSchema = zod_1.z.object({
    FBillNo: zod_1.z.string().openapi({ description: '单据号' }),
    FDate: zod_1.z.string().openapi({ description: '入库日期' }),
    FDocumentStatus: zod_1.z.string().openapi({ description: '单据状态 Z：暂存，A：创建，B：审核，C：已审核，D：重新审核' }),
    FMaterialId: zod_1.z.string().openapi({ description: '物料编码' }),
    FQty: zod_1.z.string().openapi({ description: '数量' }),
    FLot: zod_1.z.string().openapi({ description: '批次号' }),
    FStockId: zod_1.z.string().openapi({ description: '仓库编码' }),
});
exports.wmsOEMReturnSchema = zod_1.z.array(exports.wmsWarehousingItemSchema);
exports.wmsOEMWarehousingSchema = zod_1.z.array(exports.wmsWarehousingItemSchema);
exports.wmsOtherWarehousingSchema = zod_1.z.array(exports.wmsWarehousingItemSchema.extend({
    FSupplierId: zod_1.z.string().openapi({ description: '供应商编码' }),
}));
exports.wmsProduceReturnWarehousingSchema = zod_1.z.array(exports.wmsWarehousingItemSchema.extend({
    FAPPQty: zod_1.z.string().openapi({ description: '申请数量' }),
    FQty: zod_1.z.string().openapi({ description: '实退数量' }),
}));
exports.wmsProduceWarehousingSchema = zod_1.z.array(exports.wmsWarehousingItemSchema
    .omit({
    FQty: true,
})
    .extend({
    FMustQty: zod_1.z.string().openapi({ description: '应收数量' }),
    FRealQty: zod_1.z.string().openapi({ description: '实收数量' }),
}));
exports.wmsPurchaseWarehousingSchema = zod_1.z.array(exports.wmsWarehousingItemSchema
    .omit({
    FQty: true,
})
    .extend({
    FMustQty: zod_1.z.string().openapi({ description: '应收数量' }),
    FRealQty: zod_1.z.string().openapi({ description: '实收数量' }),
    FSupplierId: zod_1.z.string().openapi({ description: '供应商编码' }),
}));
exports.wmsSubReturnWarehousingSchema = zod_1.z.array(exports.wmsWarehousingItemSchema.extend({
    FAPPQty: zod_1.z.string().openapi({ description: '申请数量' }),
    FQty: zod_1.z.string().openapi({ description: '实退数量' }),
}));
exports.wmsPRDFeedMtrlSchema = zod_1.z.array(exports.wmsWarehousingItemSchema.extend({
    FActualQty: zod_1.z.string().openapi({ description: '实发数量' }),
}));
exports.wmsUpdateWarehousingAuditToErpSchema = zod_1.z.object({
    orderType: zod_1.z.number().openapi({ description: '单据类型' }),
    sourceOrderCode: zod_1.z.string().openapi({ description: '来源单据' }),
});
exports.wmsOEMAddOutWarehouseSchema = zod_1.z.array(exports.wmsWarehousingItemSchema
    .omit({
    FQty: true,
})
    .extend({
    FActualQty: zod_1.z.string().openapi({ description: '实发数量' }),
}));
exports.wmsOEMOutWarehouseSchema = zod_1.z.array(exports.wmsWarehousingItemSchema
    .omit({
    FQty: true,
})
    .extend({
    FActualQty: zod_1.z.string().openapi({ description: '实发数量' }),
}));
exports.wmsOtherOutWarehouseSchema = zod_1.z.array(exports.wmsWarehousingItemSchema);
exports.wmsProduceOutWarehouseSchema = zod_1.z.array(exports.wmsWarehousingItemSchema
    .omit({
    FQty: true,
})
    .extend({
    FActualQty: zod_1.z.string().openapi({ description: '实发数量' }),
}));
exports.wmsPurchaseReturnOutWarehouseSchema = zod_1.z.array(exports.wmsWarehousingItemSchema
    .omit({
    FQty: true,
})
    .extend({
    FRMREALQTY: zod_1.z.string().openapi({ description: '实退数量' }),
}));
exports.wmsSaleOutWarehouseSchema = zod_1.z.array(exports.wmsWarehousingItemSchema
    .omit({
    FQty: true,
})
    .extend({
    FCustomerID: zod_1.z.string().openapi({ description: '客户编码' }),
    FRealQty: zod_1.z.string().openapi({ description: '实发数量' }),
}));
exports.deploySiteToCosSchema = zod_1.z.object({
    siteId: zod_1.z.number(),
});
class deploySiteToCosSchemaDto extends (0, zod_utils_1.createZodDto)(exports.deploySiteToCosSchema) {
}
exports.deploySiteToCosSchemaDto = deploySiteToCosSchemaDto;


/***/ }),

/***/ "../../libs/flowda-shared/src/flowdaShared.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.flowdaSharedModule = void 0;
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
const prismaSchema_service_1 = __webpack_require__("../../libs/flowda-shared/src/services/schema/prismaSchema.service.ts");
const data_service_1 = __webpack_require__("../../libs/flowda-shared/src/services/data/data.service.ts");
const schema_service_1 = __webpack_require__("../../libs/flowda-shared/src/services/schema/schema.service.ts");
const schemaTransformer_1 = __webpack_require__("../../libs/flowda-shared/src/services/schema/schemaTransformer.ts");
const prismaUtils_1 = __webpack_require__("../../libs/flowda-shared/src/services/schema/prismaUtils.ts");
const bindService_1 = __webpack_require__("../../libs/flowda-shared/src/utils/bindService.ts");
const dynamicTableSchemaTransformer_1 = __webpack_require__("../../libs/flowda-shared/src/services/schema/dynamicTableSchemaTransformer.ts");
exports.flowdaSharedModule = new inversify_1.ContainerModule((bind) => {
    (0, bindService_1.bindServiceSymbol)(bind, flowda_shared_types_1.ServiceSymbol, flowda_shared_types_1.DataServiceSymbol, data_service_1.DataService);
    (0, bindService_1.bindServiceSymbol)(bind, flowda_shared_types_1.ServiceSymbol, flowda_shared_types_1.SchemaServiceSymbol, schema_service_1.SchemaService);
    bind(flowda_shared_types_1.PrismaSchemaServiceSymbol).to(prismaSchema_service_1.PrismaSchemaService).inSingletonScope();
    bind(flowda_shared_types_1.PrismaUtilsSymbol).to(prismaUtils_1.PrismaUtils).inSingletonScope();
    bind(flowda_shared_types_1.SchemaTransformerSymbol).to(schemaTransformer_1.SchemaTransformer).inTransientScope();
    bind('Factory<SchemaTransformer>').toFactory(context => {
        return (z) => {
            const transformer = context.container.get(flowda_shared_types_1.SchemaTransformerSymbol);
            transformer.setZodType(z);
            return transformer;
        };
    });
    bind(flowda_shared_types_1.DynamicTableSchemaTransformerSymbol)
        .to(dynamicTableSchemaTransformer_1.DynamicTableSchemaTransformer)
        .inTransientScope();
});


/***/ }),

/***/ "../../libs/flowda-shared/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/flowdaShared.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/utils/bindService.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/utils/matchPath.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/utils/getServices.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/utils/browser-log-utils.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/utils/ag-grid-utils.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/utils/schema-utils.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/utils/custom-error.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/utils/dayjs-utils.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/services/schema/meta.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/services/schema/schemaTransformer.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/services/schema/dynamicTableSchemaTransformer.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/services/schema/schema.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/services/data/data.service.ts"), exports);


/***/ }),

/***/ "../../libs/flowda-shared/src/services/data/data.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var DataService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const _ = tslib_1.__importStar(__webpack_require__("radash"));
const lodash_1 = __webpack_require__("lodash");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
// import * as db from '@prisma/client-cms_admin'
/*
todo: 增加 reference_type 区分是如何做 nest
e.g. Customer#weixinProfile 和 Order#customerId 的 nest 查询有区别
 */
let DataService = DataService_1 = class DataService {
    constructor(prisma, prismaSchemaService, loggerFactory) {
        this.prisma = prisma;
        this.prismaSchemaService = prismaSchemaService;
        this.logger = loggerFactory(DataService_1.name);
    }
    get(reqUser, pathname, query) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.log(`get(reqUser ${JSON.stringify(reqUser)}, path: ${pathname}, query: ${JSON.stringify(query)})`);
            const findParamRet = yield this.prismaSchemaService.toFindParam(pathname, query);
            if (_.isEmpty(findParamRet)) {
                return {};
            }
            const { resource, action, param } = findParamRet;
            if (action === 'findUnique') {
                const ret = yield this.prisma[resource][action](param);
                if (!ret || ret.isDeleted)
                    return {};
                return _.omit(ret, ['isDeleted']);
            }
            if (action === 'findMany') {
                const [data, count] = yield this.prisma.$transaction([
                    this.prisma[resource][action](param),
                    this.prisma[resource].count({ where: param.where }),
                ]);
                return {
                    pagination: {
                        total: count,
                    },
                    data,
                };
            }
        });
    }
    put(reqUser, path, values) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.log(`put(reqUser ${JSON.stringify(reqUser)}), path: ${path}, values: ${JSON.stringify(values)}`);
            const updateParamRet = yield this.prismaSchemaService.toUpdateParam(path, values);
            const { resource, param } = updateParamRet;
            const prevRet = yield this.prisma[resource].findUnique({
                where: {
                    id: param.where.id,
                },
                select: _.mapValues(param.data, item => true),
            });
            const auditChanges = Object.keys(param.data).reduce((acc, k) => {
                acc[k] = [prevRet[k], param.data[k]];
                return acc;
            }, {});
            const ret = yield this.prisma[resource].update(param);
            const auditInfo = {
                auditId: param.where.id,
                auditType: resource,
                userId: JSON.stringify(reqUser['user_id'] || reqUser['uid']), // todo: 暂时兼容 java 和 node
                username: reqUser['user_name'],
                action: 'update',
                auditChanges: JSON.stringify(auditChanges),
                version: 0,
            };
            this.logger.debug(`audit ${JSON.stringify(auditInfo)}`);
            try {
                yield this.prisma.audits.create({
                    data: auditInfo,
                });
            }
            catch (e) {
                this.logger.warn(`audit create failed, ${JSON.stringify(auditInfo)}`);
            }
            return ret;
        });
    }
    post(reqUser, path, values) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.log(`[post] reqUser ${JSON.stringify(reqUser)}, path: ${path}, query: ${JSON.stringify(values)})`);
            const createParamRet = yield this.prismaSchemaService.toCreateParam(path, values);
            const { resource, param } = createParamRet;
            if (createParamRet['x-unique']) {
                const ref = createParamRet['x-unique'];
                const refId = values[ref.name];
                const refModelName = ref.reference.model_name;
                const refData = yield this.prisma[(0, lodash_1.lowerFirst)(refModelName)].findUnique({
                    where: {
                        id: refId,
                    },
                    include: {
                        [resource]: true,
                    },
                });
                const id = refData[resource].id;
                const ret = yield this.prisma[resource].update({
                    where: {
                        id: id,
                    },
                    data: Object.assign(Object.assign({}, param.data), {
                        isDeleted: false,
                    }),
                });
                const auditInfo = {
                    auditId: id,
                    auditType: resource,
                    userId: JSON.stringify(reqUser['user_id'] || reqUser['uid']), // todo: 暂时兼容 java 和 node
                    username: reqUser['user_name'],
                    action: 'soft_delete_revert',
                    auditChanges: JSON.stringify(param.data),
                    version: 0,
                };
                this.logger.debug(`audit ${JSON.stringify(auditInfo)}`);
                try {
                    yield this.prisma.audits.create({
                        data: auditInfo,
                    });
                }
                catch (e) {
                    this.logger.warn(`audit create failed, ${JSON.stringify(auditInfo)}`);
                }
                return ret;
            }
            else {
                const ret = yield this.prisma[resource].create(param);
                const auditInfo = {
                    auditId: ret.id,
                    auditType: resource,
                    userId: JSON.stringify(reqUser['user_id'] || reqUser['uid']), // todo: 暂时兼容 java 和 node
                    username: reqUser['user_name'],
                    action: 'create',
                    auditChanges: JSON.stringify(param.data),
                    version: 0,
                };
                this.logger.debug(`audit ${JSON.stringify(auditInfo)}`);
                try {
                    yield this.prisma.audits.create({
                        data: auditInfo,
                    });
                }
                catch (e) {
                    this.logger.warn(`audit create failed, ${JSON.stringify(auditInfo)}`);
                }
                return ret;
            }
        });
    }
    remove(reqUser, pathname) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.log(`[remove] reqUser ${JSON.stringify(reqUser)}, path: ${pathname}`);
            const assDelStrategy = yield this.prismaSchemaService.getAssociationDeleteStrategy(pathname);
            const { resource, param } = yield this.prismaSchemaService.toRemoveParam(pathname);
            for (const k of Object.keys(assDelStrategy)) {
                const ass = assDelStrategy[k];
                if (ass['x-onSoftDelete'] === 'Restrict') {
                    const ret = yield this.prisma[(0, lodash_1.lowerFirst)(k)].findMany({
                        where: {
                            isDeleted: false,
                            [ass.name]: param.where.id,
                        },
                    });
                    if (ret.length > 0) {
                        throw new Error(`删除失败, 关联的<${ass.relatedDisplayName}>不为空`);
                    }
                }
            }
            const prevRet = yield this.prisma[resource].findUnique({
                where: {
                    id: param.where.id,
                },
            });
            const ret = yield this.prisma[resource].update(param);
            const auditInfo = {
                auditId: param.where.id,
                auditType: resource,
                userId: JSON.stringify(reqUser['user_id'] || reqUser['uid']), // todo: 暂时兼容 java 和 node
                username: reqUser['user_name'],
                action: 'soft_delete',
                auditChanges: JSON.stringify(prevRet),
                version: 0,
            };
            this.logger.debug(`audit ${JSON.stringify(auditInfo)}`);
            try {
                yield this.prisma.audits.create({
                    data: auditInfo,
                });
            }
            catch (e) {
                this.logger.warn(`audit create failed, ${JSON.stringify(auditInfo)}`);
            }
            return ret;
        });
    }
};
exports.DataService = DataService;
exports.DataService = DataService = DataService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_types_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)(flowda_shared_types_1.PrismaSchemaServiceSymbol)),
    tslib_1.__param(2, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Function])
], DataService);


/***/ }),

/***/ "../../libs/flowda-shared/src/services/schema/dynamicTableSchemaTransformer.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var DynamicTableSchemaTransformer_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DynamicTableSchemaTransformer = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const matchPath_1 = __webpack_require__("../../libs/flowda-shared/src/utils/matchPath.ts");
let DynamicTableSchemaTransformer = DynamicTableSchemaTransformer_1 = class DynamicTableSchemaTransformer {
    constructor(loggerFactory) {
        this.logger = loggerFactory(DynamicTableSchemaTransformer_1.name);
    }
    transform(input) {
        const cols = input.dynamicTableDefColumns.map((c) => {
            return Object.assign({
                name: c.name,
                column_type: c.type,
            }, c.extendedSchema);
        });
        return Object.assign({
            name: (0, matchPath_1.toModelName)(input.name),
            slug: (0, matchPath_1.toPath)(input.name),
            schema_name: (0, matchPath_1.toSchemaName)(input.name),
            primary_key: 'id',
            columns: cols,
            prisma: false,
            is_dynamic: true,
        }, input.extendedSchema);
    }
};
exports.DynamicTableSchemaTransformer = DynamicTableSchemaTransformer;
exports.DynamicTableSchemaTransformer = DynamicTableSchemaTransformer = DynamicTableSchemaTransformer_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [Function])
], DynamicTableSchemaTransformer);


/***/ }),

/***/ "../../libs/flowda-shared/src/services/schema/meta.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.meta = void 0;
const zod_1 = __webpack_require__("zod");
// motor-admin JSON.parse(document.getElementById('app').dataset.schema)
// todo: 目前尽量在后端定义，后续可以再开辟一条链路来储存 schema，并进行 merge
// 当然如果后端定义链路保留，应该做成 decorator
function meta(values) {
    return zod_1.z.unknown().optional().describe(JSON.stringify(values));
}
exports.meta = meta;


/***/ }),

/***/ "../../libs/flowda-shared/src/services/schema/prismaSchema.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var PrismaSchemaService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaSchemaService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const matchPath_1 = __webpack_require__("../../libs/flowda-shared/src/utils/matchPath.ts");
const lodash_1 = __webpack_require__("lodash");
const _ = tslib_1.__importStar(__webpack_require__("radash"));
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
let PrismaSchemaService = PrismaSchemaService_1 = class PrismaSchemaService {
    constructor(prismaUtils, schemaService, loggerFactory) {
        this.prismaUtils = prismaUtils;
        this.schemaService = schemaService;
        this.logger = loggerFactory(PrismaSchemaService_1.name);
    }
    toPrismaSelect(fields, theResourceSchema) {
        let fieldsArr = [];
        if (fields == null) {
            fieldsArr = theResourceSchema.columns.filter(c => c.prisma !== false).map(c => c.name);
        }
        else {
            fieldsArr = fields.split(',');
        }
        return fieldsArr.reduce((acc, cur) => {
            acc[cur] = true;
            return acc;
        }, {});
    }
    toFindParam(pathname, query) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // if (!query['fields']) {
            //   throw new Error('No query fields')
            // }
            this.logger.debug(`[toFindParam] pathname: ${pathname}, query: ${JSON.stringify(query)}`);
            const parsedPath = (0, matchPath_1.matchPath)(pathname);
            if (parsedPath.length === 0)
                return Promise.resolve({});
            const { resource, id, resourceSchema } = parsedPath[parsedPath.length - 1];
            const schemaCache = yield this.schemaService.getSchemaCache();
            const theResourceSchema = schemaCache[resourceSchema];
            let action;
            let param = {};
            const queryFields = query['fields'];
            const fields = this.toPrismaSelect(queryFields && queryFields[resource], theResourceSchema);
            const include = {};
            if (typeof query['include'] === 'string' && query['include'] !== '') {
                query['include'].split(',').forEach((inc) => {
                    // this.logger.log(`[toFindParam] parse include ${inc}`)
                    const refSelect = this.getRefSelect(schemaCache, theResourceSchema, inc);
                    const selectRet = this.toPrismaSelect(queryFields[inc], theResourceSchema);
                    include[inc] = {
                        // todo: 似乎 prisma nest select 不支持 order by 只有 include 支持，但是 include 不支持 nest select fields
                        // orderBy: [{ createdAt: 'desc' }],
                        select: Object.assign(Object.assign({}, selectRet), refSelect),
                    };
                });
            }
            if (id != null) {
                action = 'findUnique';
                const id2 = yield this.prismaUtils.parseId(resource, id);
                param = {
                    where: {
                        id: id2,
                    },
                    select: Object.assign(Object.assign(Object.assign({}, fields), include), { isDeleted: true }),
                };
            }
            else {
                const filter = this.convertQueryToPrismaFilter(schemaCache, theResourceSchema, query);
                const orderBy = this.convertToOrderBy(query);
                action = 'findMany';
                const skip = query['current'] ? (Number(query['current']) - 1) * Number(query['pageSize']) : undefined;
                const take = query['pageSize'] ? Number(query['pageSize']) : undefined;
                if (parsedPath.length > 1) {
                    // 情况1：根据前一个 resource id 搜索 list
                    const pResource = parsedPath[parsedPath.length - 2];
                    // this.logger.log(`${resource}.findMany`)
                    param = (0, lodash_1.omitBy)({
                        where: Object.assign({
                            [`${pResource.resource}Id`]: pResource.id,
                            isDeleted: false,
                        }, filter),
                        orderBy,
                        skip,
                        take,
                        select: Object.assign(Object.assign({}, fields), include),
                    }, lodash_1.isUndefined);
                }
                else {
                    param = (0, lodash_1.omitBy)({
                        where: Object.assign({
                            isDeleted: false,
                        }, filter),
                        orderBy,
                        skip,
                        take,
                        select: Object.assign(Object.assign({}, fields), include),
                    }, lodash_1.isUndefined);
                }
            }
            const ret = {
                action,
                param,
                resource,
            };
            this.logger.debug(`[toFindParam] ret ${JSON.stringify(ret)}`);
            return ret;
        });
    }
    convertToOrderBy(query) {
        let sort;
        if (query.sort != null) {
            sort = query.sort;
        }
        else {
            return [{ createdAt: 'desc' }];
        }
        if (sort[0] === '-') {
            return [{ [sort.slice(1)]: 'desc' }];
        }
        else {
            return [{ [sort]: 'asc' }];
        }
    }
    /**
     * 根据 resource 的 schema 中 columns 是 ref， e.g. resource(Receipt) 收货单关联的 ref(partVersion)
     * 找到对应 refSchema 的 display_column 中的又 include e.g. display_column(partId)，得到 nest select
     * { [include: partVersion]: { select { partId: true, [partId x-relationField: part]: { select: { id: true, [display_column*]: true} }}} }
     *
     * todo: 现在是根据 display_column 里如果有 ref 来计算的，后续可以改成所有 ref 都默认向下搜索一层
     */
    getRefSelect(schemaCache, resourceSchema, includeRef) {
        const refSelect = {};
        if (resourceSchema && resourceSchema.columns) {
            // e.g. inc partVersion
            const refColumn = resourceSchema.columns.find(col => col.column_type === 'reference' && col.reference['x-relationField'] === includeRef);
            if (refColumn) {
                // e.g. model_name PartVersion
                // e.g. display_column partId,version
                const { model_name, display_column } = refColumn.reference;
                // e.g. PartVersionResourceSchema
                const refSchema = schemaCache[model_name + 'ResourceSchema'];
                let displayCols = [];
                if (typeof display_column === 'string') {
                    displayCols = [display_column];
                }
                else {
                    displayCols = display_column || [];
                }
                displayCols.forEach(item => {
                    // e.g. item partId
                    const disCol = refSchema.columns.find(col => col.name === item);
                    if (disCol == null) {
                        throw new Error(`schema '${model_name}', wrong display column '${item}'`);
                    }
                    else if (disCol.column_type === 'reference') {
                        // e.g. name
                        const display_column = disCol.reference.display_column;
                        const relationField = disCol.reference['x-relationField'];
                        let display_column2;
                        if (Array.isArray(display_column)) {
                            display_column2 = display_column;
                        }
                        else {
                            display_column2 = [display_column];
                        }
                        const select = display_column2.reduce((acc, cur) => {
                            acc[cur] = true;
                            return acc;
                        }, {});
                        refSelect[relationField] = {
                            select: Object.assign({
                                id: true,
                            }, select),
                        };
                    }
                });
            }
        }
        return refSelect;
    }
    /*
      [
        {
          type: { eq: 'UNSCHEDULE' },
          status: { eq: 'DONE' },
        },
      ]
     */
    convertQueryToPrismaFilter(schemaCache, resourceSchema, query) {
        if (query.filterModel) {
            return this.convertAgFilterModelToPrismaFilter(query.filterModel);
        }
        else if (query.filter && Array.isArray(query.filter) && query.filter.length > 0) {
            // console.log(query.filter)
            const filter = query.filter;
            const andIdx = filter.findIndex(item => typeof item === 'string' && item === 'AND');
            const orIdx = filter.findIndex(item => typeof item === 'string' && item === 'OR');
            const ret = {};
            if (andIdx === 0) {
                ret['AND'] = [];
                if (orIdx === -1) {
                    const andFilter = filter.slice(1);
                    andFilter.forEach(item => ret['AND'].push(this.mapItemToPrismaFilter(schemaCache, resourceSchema, item)));
                }
                else {
                    const andFilter = filter.slice(1, orIdx);
                    andFilter.forEach(item => ret['AND'].push(this.mapItemToPrismaFilter(schemaCache, resourceSchema, item)));
                    ret['OR'] = [];
                    const orFilter = filter.slice(orIdx + 1);
                    orFilter.forEach(item => ret['OR'].push(this.mapItemToPrismaFilter(schemaCache, resourceSchema, item)));
                }
            }
            else if (orIdx === 0) {
                ret['OR'] = [];
                if (andIdx === -1) {
                    const orFilter = filter.slice(1);
                    orFilter.forEach(item => ret['OR'].push(this.mapItemToPrismaFilter(schemaCache, resourceSchema, item)));
                }
                else {
                    const orFilter = filter.slice(1, andIdx);
                    orFilter.forEach(item => ret['OR'].push(this.mapItemToPrismaFilter(schemaCache, resourceSchema, item)));
                    ret['AND'] = [];
                    const andFilter = filter.slice(andIdx + 1);
                    andFilter.forEach(item => ret['AND'].push(this.mapItemToPrismaFilter(schemaCache, resourceSchema, item)));
                }
            }
            else {
                throw new Error('Wrong filter');
            }
            return ret;
        }
        else if (query.q != null &&
            Array.isArray(resourceSchema.searchable_columns) &&
            resourceSchema.searchable_columns.length > 0) {
            return {
                OR: resourceSchema.searchable_columns.reduce((acc, cur) => {
                    acc.push({ [cur]: { contains: query.q } });
                    return acc;
                }, []),
            };
        }
        else {
            return {};
        }
    }
    convertAgFilterModelToPrismaFilter(agFilter) {
        const parsedRet = flowda_shared_types_1.agFilter1Schema.safeParse(agFilter);
        if (parsedRet.success) {
            return _.mapValues(parsedRet.data, (v, k) => {
                return {
                    [v.type]: v.filter,
                };
            });
        }
        else {
            const parsedRet = flowda_shared_types_1.agFilter2Schema.safeParse(agFilter);
            if (parsedRet.success) {
                const ret = {};
                for (const k of Object.keys(parsedRet.data)) {
                    const item = parsedRet.data[k];
                    if (item.operator === 'OR') {
                        if (ret.OR == null) {
                            ret.OR = [];
                        }
                        for (const cond of item.conditions) {
                            ret.OR.push({
                                [k]: {
                                    [cond.type]: cond.filter,
                                },
                            });
                        }
                    }
                }
                return ret;
            }
            else {
                return {};
            }
        }
    }
    toUpdateParam(pathname, values) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.debug(`pathname: ${pathname}, body: ${JSON.stringify(values)}`);
            const matchRet = (0, matchPath_1.matchPath)(pathname);
            const { resource, id, resourceSchema } = matchRet[matchRet.length - 1];
            const schemaCache = yield this.schemaService.getSchemaCache();
            this.removeRelationFields(schemaCache, resourceSchema, values);
            const ret = {
                resource,
                param: {
                    where: { id: id },
                    data: values,
                },
            };
            this.logger.debug(JSON.stringify(ret));
            return ret;
        });
    }
    // todo: 需要增加 relation name
    getAssociationDeleteStrategy(pathname) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const matchRet = (0, matchPath_1.matchPath)(pathname);
            const { origin, resourceSchema } = matchRet[matchRet.length - 1];
            const schemaCache = yield this.schemaService.getSchemaCache();
            const theResourceSchema = schemaCache[resourceSchema];
            if (theResourceSchema.associations == null) {
                return {};
            }
            const ret = theResourceSchema.associations.reduce((acc, cur) => {
                const assSchema = schemaCache[cur.model_name + 'ResourceSchema'];
                if (assSchema == null) {
                    throw new Error(`${resourceSchema} associated schema ${cur.model_name} is null`);
                }
                const relCol = assSchema.columns.find(ac => ac.column_type === 'reference' && ac.reference.model_name === (0, matchPath_1.toModelName)(origin));
                if (relCol == null) {
                    throw new Error('Cannot found related column');
                }
                if (relCol.reference['x-onSoftDelete'] === 'Restrict') {
                    acc[cur.model_name] = {
                        'x-onSoftDelete': relCol.reference['x-onSoftDelete'],
                        name: relCol.name,
                        relatedDisplayName: assSchema.display_name,
                    };
                    return acc;
                }
                return acc;
            }, {});
            return ret;
        });
    }
    toRemoveParam(pathname) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const matchRet = (0, matchPath_1.matchPath)(pathname);
            const { resource, origin, id, resourceSchema } = matchRet[matchRet.length - 1];
            const schemaCache = yield this.schemaService.getSchemaCache();
            const theResourceSchema = schemaCache[resourceSchema];
            let assDisconnect = {};
            let include;
            if (theResourceSchema.associations != null) {
                assDisconnect = theResourceSchema.associations.reduce((acc, cur) => {
                    const assSchema = schemaCache[cur.model_name + 'ResourceSchema'];
                    const relCol = assSchema.columns.find(ac => ac.column_type === 'reference' && ac.reference.model_name === (0, matchPath_1.toModelName)(origin));
                    if (relCol == null) {
                        throw new Error('Cannot found related column');
                    }
                    if (relCol.reference['x-onSoftDelete'] !== 'Restrict' /* Restrict 已经确保 is_deleted 不需要解除关联 */) {
                        acc[cur.name] = {
                            set: [] /* disconnectAll 模拟 setNull */,
                        };
                        if (include == null)
                            include = {};
                        include[cur.name] = true;
                    }
                    return acc;
                }, {});
            }
            let id2;
            if (id == null) {
                throw new Error(`remove ${resource}, id null`);
            }
            else {
                id2 = yield this.prismaUtils.parseId(resource, id);
            }
            const ret = {
                resource,
                param: {
                    where: {
                        id: id2,
                    },
                    data: Object.assign({
                        isDeleted: true,
                    }, assDisconnect),
                    include,
                },
            };
            this.logger.debug(JSON.stringify(ret));
            return ret;
        });
    }
    mapItemToPrismaFilter(schemaCache, resourceSchema, item) {
        // 先初步转换
        const k = Object.keys(item)[0];
        // https://javascript.plainenglish.io/how-to-rename-object-keys-in-react-javascript-using-lodash-b73fb92ea24d
        item[k] = _.mapKeys(item[k], (k, v) => {
            switch (k) {
                case 'eq':
                    return 'equals';
                case 'neq':
                    return 'not';
                default:
                    return k;
            }
        });
        item[k] = _.mapValues(item[k], v => {
            // 得用 schema 判断下，主要就是 string 的 LIKE
            const kk = k.split('.');
            let col;
            if (kk.length === 2) {
                const refCol = resourceSchema.columns.find(col => {
                    return col.column_type === 'reference' && col.reference['x-relationField'] === kk[0];
                });
                const refSchema = schemaCache[refCol.reference.model_name + 'ResourceSchema'];
                col = refSchema.columns.find(item => item.name === kk[1]);
            }
            else {
                col = resourceSchema.columns.find(item => item.name === k);
            }
            if (col && ['string', 'textarea'].indexOf(col.column_type) > -1) {
                return v;
            }
            else if ((0, matchPath_1.isLikeNumber)(v)) {
                return Number(v);
            }
            else {
                return v;
            }
        });
        // 再将 . 改成嵌套（chatGPT 给出的方式）
        const ret = {};
        (0, lodash_1.forEach)(item, (value, key) => {
            (0, lodash_1.set)(ret, key.replace(/\./g, '.'), value);
        });
        return ret;
    }
    toCreateParam(pathname, values) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const matchRet = (0, matchPath_1.matchPath)(pathname);
            // console.log(matchRet)
            const { resource, resourceSchema } = matchRet[matchRet.length - 1];
            const schemaCache = yield this.schemaService.getSchemaCache();
            this.removeRelationFields(schemaCache, resourceSchema, values);
            const theResourceSchema = schemaCache[resourceSchema];
            // console.log(theResourceSchema)
            const uniqueCols = theResourceSchema.columns.filter(col => {
                return col.column_type === 'reference' && col.reference['x-unique'];
            });
            if (uniqueCols.length === 0) {
                return {
                    action: 'create',
                    resource: resource,
                    param: {
                        data: values,
                    },
                };
            }
            else if (uniqueCols.length > 1) {
                throw new Error('Not support multiple unique key');
            }
            else {
                const uniqueCol = uniqueCols[0];
                // console.log(uniqueCol)
                return {
                    action: 'update',
                    resource: resource,
                    param: {
                        data: values,
                    },
                    'x-unique': uniqueCol,
                };
            }
        });
    }
    removeRelationFields(schemaCache, resourceSchema, values) {
        // todo: 目前是通过显式声明 x-relationField 来删除 put 时候的 reference 值
        const relationFields = [];
        const theResourceSchema = schemaCache[resourceSchema];
        // console.log(theResourceSchema)
        if (theResourceSchema) {
            Object.keys(values).forEach((k) => {
                var _a;
                const kProp = theResourceSchema.columns && theResourceSchema.columns.find(col => col.name === k);
                if (kProp && kProp.column_type === 'reference') {
                    const relationField = (_a = kProp.reference) === null || _a === void 0 ? void 0 : _a['x-relationField'];
                    if (relationField) {
                        relationFields.push(relationField);
                    }
                }
            });
        }
        relationFields.forEach(k => {
            delete values[k];
        });
    }
};
exports.PrismaSchemaService = PrismaSchemaService;
exports.PrismaSchemaService = PrismaSchemaService = PrismaSchemaService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_types_1.PrismaUtilsSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)(flowda_shared_types_1.SchemaServiceSymbol)),
    tslib_1.__param(2, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Function])
], PrismaSchemaService);


/***/ }),

/***/ "../../libs/flowda-shared/src/services/schema/prismaUtils.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var PrismaUtils_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaUtils = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const matchPath_1 = __webpack_require__("../../libs/flowda-shared/src/utils/matchPath.ts");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
let PrismaUtils = PrismaUtils_1 = class PrismaUtils {
    constructor(prisma, loggerFactory) {
        this.prisma = prisma;
        this.logger = loggerFactory(PrismaUtils_1.name);
    }
    parseId(resource, id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modelName = (0, matchPath_1.toModelName)(resource);
            const dmmf = yield this.prisma._getDmmf();
            const idField = dmmf.modelMap[modelName].fields.find((item) => item.name === 'id');
            // this.logger.log(`id: ${id}, type: ${idField.type}`)
            return idField.type === 'Int' && typeof id !== 'number' ? parseInt(id) : id;
        });
    }
};
exports.PrismaUtils = PrismaUtils;
exports.PrismaUtils = PrismaUtils = PrismaUtils_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_types_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [Object, Function])
], PrismaUtils);


/***/ }),

/***/ "../../libs/flowda-shared/src/services/schema/schema.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var SchemaService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SchemaService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
let SchemaService = SchemaService_1 = class SchemaService {
    constructor(loggerFactory, modelSchemaFactory, zt, czt) {
        this.modelSchemaFactory = modelSchemaFactory;
        this.zt = zt;
        this.czt = czt;
        this.logger = loggerFactory(SchemaService_1.name);
    }
    getSchema() {
        console.time('generate schema');
        const schema = Object.keys(this.czt).reduce((acc, k) => {
            const e = this.czt[k];
            if (['ZodObject'].indexOf(e.constructor.name) > -1) {
                const transformer = this.modelSchemaFactory(e);
                acc[k] = transformer.buildSchema(k).toSchema();
            }
            else {
                this.logger.error('Wrong type', k);
            }
            return acc;
        }, {});
        this.schemaCache = schema;
        console.timeEnd('generate schema');
        return schema;
    }
    getSchemaCache() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this.schemaCache) {
                // 重启的话内存里就没有了，可以手动重新获取下
                this.logger.log(`schemaCache is empty, getSchema again.`);
                return this.getSchema();
            }
            else {
                return this.schemaCache;
            }
        });
    }
};
exports.SchemaService = SchemaService;
exports.SchemaService = SchemaService = SchemaService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__param(1, (0, inversify_1.inject)('Factory<SchemaTransformer>')),
    tslib_1.__param(2, (0, inversify_1.inject)(flowda_shared_types_1.PrismaZodSchemaSymbol)),
    tslib_1.__param(3, (0, inversify_1.inject)(flowda_shared_types_1.CustomZodSchemaSymbol)),
    tslib_1.__metadata("design:paramtypes", [Function, Function, Object, Object])
], SchemaService);


/***/ }),

/***/ "../../libs/flowda-shared/src/services/schema/schemaTransformer.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var SchemaTransformer_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SchemaTransformer = exports.SUFFIX = void 0;
const tslib_1 = __webpack_require__("tslib");
const zod_1 = __webpack_require__("zod");
const inversify_1 = __webpack_require__("inversify");
const zod_openapi_1 = __webpack_require__("@anatine/zod-openapi");
const _ = tslib_1.__importStar(__webpack_require__("radash"));
const lodash_1 = __webpack_require__("lodash");
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
const matchPath_1 = __webpack_require__("../../libs/flowda-shared/src/utils/matchPath.ts");
exports.SUFFIX = 'ResourceSchema';
let SchemaTransformer = SchemaTransformer_1 = class SchemaTransformer {
    constructor(loggerFactory, prismaZod) {
        this.prismaZod = prismaZod;
        this.modelLevelSchema = {};
        this.associations = [];
        this.columns = [];
        this.logger = loggerFactory(SchemaTransformer_1.name);
    }
    setZodType(z) {
        this.zodType = z;
    }
    buildSchema(schemaName) {
        if (!this.zodType) {
            const errMsg = 'zodType is not initialized';
            this.logger.error(errMsg);
            throw new Error(errMsg);
        }
        this.schemaName = schemaName;
        this.jsonSchema = (0, zod_openapi_1.generateSchema)(this.zodType);
        this.modelLevelSchema = this.getModelSchema();
        const props = this.getProperties();
        this.columns = props.reduce((acc, k) => {
            const jsProp = this.jsonSchema.properties[k];
            if (jsProp.virtual === 'true') {
                return acc; // 不处理 virtual，目前只有 1..1 用到
            }
            if (jsProp.type === 'array') {
                if (!jsProp.model_name) {
                    throw new Error(`${this.schemaName} 1..n model_name is not set`);
                }
                this.associations.push({
                    foreign_key: this.getForeignKey(jsProp.foreign_key),
                    model_name: jsProp.model_name,
                    primary_key: jsProp.primary_key || 'id',
                    name: k,
                    slug: (0, matchPath_1.toPath)(k),
                    display_name: jsProp.title,
                    schema_name: jsProp.model_name + exports.SUFFIX,
                });
                return acc; // 不处理 array
            }
            const c = _.assign({ name: k }, {
                name: k,
                column_type: this.doColumnType(k),
                format: this.doFormat(k),
                display_name: this.doDisplayName(k),
                access_type: this.doAccessType(k),
                reference: jsProp.reference ? this.doRef(k) : undefined,
                validators: this.doValidators(k),
                prisma: jsProp.prisma,
            });
            acc.push((0, lodash_1.omitBy)(c, lodash_1.isUndefined));
            return acc;
        }, []);
        if (Array.isArray(this.extendSchema.columns)) {
            // 合并 __meta.columns 和 cols
            this.columns.forEach((c) => {
                const f = this.extendSchema.columns.find((c1) => c1.name === c.name);
                Object.assign(c, f || {});
            });
        }
        return this;
    }
    toSchema() {
        const name = this.schemaName.split(exports.SUFFIX)[0];
        const ret = {
            name: name,
            slug: (0, matchPath_1.toPath)(name),
            prisma: this.modelLevelSchema.prisma != null ? this.modelLevelSchema.prisma : undefined,
            schema_name: this.schemaName,
            primary_key: this.modelLevelSchema.primary_key || 'id',
            custom: this.jsonSchema.custom,
            display_column: this.doDisplayColumn(this.modelLevelSchema.display_column),
            display_name: this.modelLevelSchema.display_name,
            display_primary_key: this.modelLevelSchema.display_primary_key == null ? true : this.modelLevelSchema.display_primary_key === 'true',
            searchable_columns: this.modelLevelSchema.searchable_columns
                ? this.modelLevelSchema.searchable_columns.split(',')
                : undefined,
            columns: this.columns,
            associations: this.associations,
            // __jsonschema: this.jsonSchema,
        };
        return (0, lodash_1.omitBy)(ret, lodash_1.isUndefined);
    }
    doDisplayColumn(display_column) {
        if (!display_column)
            return undefined; // 默认 id
        const cols = display_column.split(',');
        if (cols.length > 1)
            return cols;
        else
            return display_column;
    }
    doRef(k) {
        const jsProp = this.jsonSchema.properties[k];
        // console.log(jsProp)
        const t = jsProp.reference + 'Schema';
        const ref = (0, zod_openapi_1.generateSchema)(this.prismaZod[t]);
        const { primary_key, display_name, display_column } = ref;
        const ret = {
            model_name: jsProp.reference,
            'x-relationField': jsProp['x-relationField'] || k.replace('Id', ''),
            'x-onSoftDelete': !jsProp.nullable && this.jsonSchema.required.indexOf(k) > -1 ? 'Restrict' : 'SetNull',
            primary_key,
            display_name: jsProp.display_name || display_name,
            display_column: this.doDisplayColumn(display_column),
            // foreign_key: jsProp.foreign_key,
        };
        if (jsProp['x-unique']) {
            return Object.assign(Object.assign({}, ret), { 'x-unique': true });
        }
        else {
            return ret;
        }
    }
    getProperties() {
        // 拿到最大的 columns
        const keys = Object.keys(this.zodType.shape);
        const properties = keys.filter(key => {
            const item = this.zodType.shape[key];
            return (key !== '__meta' &&
                !(item instanceof zod_1.z.ZodDefault || item._def.typeName === 'ZodDefault') &&
                !(item instanceof zod_1.z.ZodNever || item._def.typeName === 'ZodDefault') &&
                keys.indexOf(key + 'Id') === -1 && // 忽略 product (product + 'Id' === productId)
                key !== 'isDeleted');
        });
        return properties;
    }
    getModelSchema() {
        this.checkValid();
        const _extends = this.extendSchema.extends;
        const { prisma } = this.extendSchema;
        if (prisma !== false && !this.prismaZod[_extends]) {
            throw new Error('no _extends');
        }
        else {
            if (prisma !== false) {
                return (0, zod_openapi_1.generateSchema)(this.prismaZod[_extends]);
            }
            else {
                const ret = Object.assign({ prisma: false }, _.omit(this.jsonSchema, ['type', 'properties', 'required']));
                // this.logger.debug!(ret)
                return ret;
            }
        }
    }
    checkValid() {
        // 暂时认为必须有 __meta，简化下逻辑
        // 现在 __meta 里必须定义 extends
        // todo: support no prisma schema
        if (!this.jsonSchema.properties.__meta) {
            throw new Error('no __meta');
        }
        this.extendSchema = JSON.parse(this.jsonSchema.properties.__meta.description);
    }
    doDisplayName(k) {
        const jsProp = this.jsonSchema.properties[k];
        if (typeof jsProp.title === 'string') {
            return jsProp.title;
        }
        else {
            if (k === 'createdAt') {
                return '创建时间';
            }
            if (k === 'updatedAt') {
                return '更新时间';
            }
            return;
        }
    }
    doAccessType(k) {
        const jsProp = this.jsonSchema.properties[k];
        if (typeof jsProp.access_type === 'string') {
            return jsProp.access_type;
        }
        else {
            if (k === 'createdAt' || k === 'updatedAt' || k === this.modelLevelSchema.primary_key) {
                return 'read_only';
            }
            else {
                return;
            }
        }
    }
    doColumnType(k) {
        const jsProp = this.jsonSchema.properties[k];
        if (Array.isArray(jsProp.enum)) {
            return 'tag';
        }
        else if (jsProp.override_type) {
            jsProp.type = jsProp.override_type;
        }
        else if (jsProp.format === 'date-time') {
            return 'datetime';
        }
        if (jsProp.column_type) {
            return jsProp.column_type;
        }
        return jsProp.reference ? 'reference' : jsProp.type;
    }
    doValidators(k) {
        const jsProp = this.jsonSchema.properties[k];
        if (!jsProp) {
            this.logger.warn('undef key: ' + k);
            return;
        }
        const validators = [];
        if (['createdAt', 'updatedAt'].indexOf(k) === -1 && !jsProp.nullable && this.jsonSchema.required.indexOf(k) > -1) {
            validators.push({ required: true });
        }
        return validators.length === 0 ? undefined : validators;
    }
    doFormat(k) {
        const jsProp = this.jsonSchema.properties[k];
        if (Array.isArray(jsProp.enum)) {
            if (jsProp['x-enumNames']) {
                const enumNames = jsProp['x-enumNames'].split(',');
                return {
                    select_options: jsProp.enum.map((opt, idx) => ({
                        value: opt,
                        label: enumNames[idx],
                    })),
                };
            }
            return {
                select_options: jsProp.enum.map((opt) => ({
                    value: opt,
                    label: opt,
                })),
            };
        }
        else {
            return;
        }
    }
    getForeignKey(fk) {
        if (fk)
            return fk;
        const schema = this.extendSchema.extends;
        return (0, lodash_1.lowerFirst)(schema.split('Schema')[0]) + 'Id';
    }
};
exports.SchemaTransformer = SchemaTransformer;
exports.SchemaTransformer = SchemaTransformer = SchemaTransformer_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__param(1, (0, inversify_1.inject)(flowda_shared_types_1.PrismaZodSchemaSymbol)),
    tslib_1.__metadata("design:paramtypes", [Function, Object])
], SchemaTransformer);


/***/ }),

/***/ "../../libs/flowda-shared/src/utils/ag-grid-utils.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.convertSortAgToMotor = void 0;
function convertSortAgToMotor(sort) {
    return sort[0] != null ? (sort[0].sort === 'asc' ? sort[0].colId : '-' + sort[0].colId) : undefined;
}
exports.convertSortAgToMotor = convertSortAgToMotor;


/***/ }),

/***/ "../../libs/flowda-shared/src/utils/bindService.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.bindServiceSymbol = exports.bindService = void 0;
function bindService(bind, serviceIdentifier, constructor) {
    bind(constructor).toSelf().inSingletonScope();
    bind(serviceIdentifier).toFactory((context) => {
        return context.container.get(constructor);
    });
}
exports.bindService = bindService;
function bindServiceSymbol(bind, serviceIdentifier, implementIdentifier, constructor) {
    bind(implementIdentifier).to(constructor).inSingletonScope();
    bind(serviceIdentifier).toFactory((context) => {
        return context.container.get(implementIdentifier);
    });
}
exports.bindServiceSymbol = bindServiceSymbol;


/***/ }),

/***/ "../../libs/flowda-shared/src/utils/browser-log-utils.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.error = exports.warn = exports.info = exports.debug = void 0;
const levelColorMap = {
    0: '#c0392b', // Red
    1: '#f39c12', // Yellow
    3: '#00BCD4', // Cyan
    4: '#ccc',
};
function style(level) {
    return `
  background: ${levelColorMap[level]};
  border-radius: 0.5em;
  color: white;
  font-weight: bold;
  padding: 2px 0.5em;
`;
}
function debug(msg) {
    return [`%c debug `, style(4), '', msg];
}
exports.debug = debug;
function info(msg) {
    return [`%c info `, style(3), '', msg];
}
exports.info = info;
function warn(msg) {
    return [`%c warn `, style(1), '', msg];
}
exports.warn = warn;
function error(msg) {
    return [`%c error `, style(0), '', msg];
}
exports.error = error;


/***/ }),

/***/ "../../libs/flowda-shared/src/utils/custom-error.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomError = void 0;
class CustomError extends Error {
    constructor(code, message, extra) {
        super(JSON.stringify({ code: code, message }));
        this.message = JSON.stringify({ code, message, extra });
    }
}
exports.CustomError = CustomError;


/***/ }),

/***/ "../../libs/flowda-shared/src/utils/dayjs-utils.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getTimeByDay = exports.getTimeExpire = void 0;
const tslib_1 = __webpack_require__("tslib");
const utc_1 = tslib_1.__importDefault(__webpack_require__("dayjs/plugin/utc"));
const timezone_1 = tslib_1.__importDefault(__webpack_require__("dayjs/plugin/timezone"));
const advancedFormat_1 = tslib_1.__importDefault(__webpack_require__("dayjs/plugin/advancedFormat"));
const dayjs_1 = tslib_1.__importDefault(__webpack_require__("dayjs"));
dayjs_1.default.extend(utc_1.default);
dayjs_1.default.extend(timezone_1.default);
dayjs_1.default.extend(advancedFormat_1.default);
function getTimeExpire(min) {
    const fmt = (0, dayjs_1.default)().tz('Asia/Shanghai').add(min, 'minute').format('YYYY-MM-DDTHH:mm:ss+z');
    const ret = fmt.match(/.*(GMT\+(\d))/);
    if (ret == null) {
        return '';
    }
    else {
        return ret[0].replace(ret[1], ret[2].padStart(2, '0') + ':00');
    }
}
exports.getTimeExpire = getTimeExpire;
function getTimeByDay(day) {
    return (0, dayjs_1.default)().tz('Asia/Shanghai').add(day, 'day').toDate();
}
exports.getTimeByDay = getTimeByDay;


/***/ }),

/***/ "../../libs/flowda-shared/src/utils/getServices.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getServices = void 0;
const flowda_shared_types_1 = __webpack_require__("../../libs/flowda-shared-types/src/index.ts");
function getServices(servicesContainer) {
    return servicesContainer.getAll(flowda_shared_types_1.ServiceSymbol).map((service) => {
        return {
            provide: service.constructor,
            useValue: service,
        };
    });
}
exports.getServices = getServices;


/***/ }),

/***/ "../../libs/flowda-shared/src/utils/matchPath.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.matchPath = exports.toSchemaName = exports.toPath = exports.toModelName = exports.isLikeNumber = void 0;
const tslib_1 = __webpack_require__("tslib");
const plur = tslib_1.__importStar(__webpack_require__("pluralize"));
const _ = tslib_1.__importStar(__webpack_require__("lodash"));
plur.addSingularRule(/data$/i, 'data');
plur.addPluralRule(/data$/i, 'data');
plur.addSingularRule(/def$/i, 'def');
plur.addPluralRule(/def$/i, 'def');
plur.addSingularRule(/sms$/i, 'sms');
plur.addPluralRule(/sms$/i, 'sms');
// s* equipment 不可数
const REG = /(([a-z_]+s*)\/?([A-Za-z0-9-_:]+)?)+/g;
const NUM_REG = /^-?\d+(\.\d+)?$/;
// todo: 暂时没想到更精确的方法，这个应该能覆盖 100%
function isLikeNumber(value) {
    return NUM_REG.test(value);
}
exports.isLikeNumber = isLikeNumber;
function toModelName(slug) {
    return _.startCase(_.camelCase(plur.singular(slug))).replace(/ /g, '');
}
exports.toModelName = toModelName;
function toPath(modelName) {
    return plur.plural(_.snakeCase(modelName));
}
exports.toPath = toPath;
function toSchemaName(slug) {
    const p = plur.singular(slug);
    return toModelName(p) + 'ResourceSchema';
}
exports.toSchemaName = toSchemaName;
function matchPath(path) {
    const ret1 = path.match(REG);
    // console.log(ret1)
    if (ret1 != null) {
        const ret2 = ret1.map(item => {
            const [resource, id] = item.split('/');
            const p = plur.singular(resource);
            return {
                resource: _.camelCase(p),
                resourceSchema: toSchemaName(resource),
                origin: resource,
                id: isLikeNumber(id) ? _.toNumber(id) : id,
            };
        });
        return ret2;
    }
    else {
        return [];
    }
}
exports.matchPath = matchPath;


/***/ }),

/***/ "../../libs/flowda-shared/src/utils/schema-utils.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getSchemaByDisplayName = void 0;
function getSchemaByDisplayName(schemaCache, displayName) {
    const k = Object.keys(schemaCache).find(k => {
        return schemaCache[k].display_name === displayName;
    });
    if (k) {
        return schemaCache[k];
    }
    else {
        return null;
    }
}
exports.getSchemaByDisplayName = getSchemaByDisplayName;


/***/ }),

/***/ "../../libs/prisma-cms_admin/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.zt = void 0;
const tslib_1 = __webpack_require__("tslib");
const zod_openapi_1 = __webpack_require__("@anatine/zod-openapi");
const zod_1 = __webpack_require__("zod");
(0, zod_openapi_1.extendZodWithOpenApi)(zod_1.z);
tslib_1.__exportStar(__webpack_require__("../../libs/prisma-cms_admin/src/zod/index.ts"), exports);
exports.zt = tslib_1.__importStar(__webpack_require__("../../libs/prisma-cms_admin/src/zod/index.ts"));


/***/ }),

/***/ "../../libs/prisma-cms_admin/src/zod/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmailTypeSchema = exports.RoleSchema = exports.SiteStatusSchema = exports.ContactOrderByRelevanceFieldEnumSchema = exports.ImageLibraryOrderByRelevanceFieldEnumSchema = exports.TagOrderByRelevanceFieldEnumSchema = exports.LinkOrderByRelevanceFieldEnumSchema = exports.DomainOrderByRelevanceFieldEnumSchema = exports.SentEmailOrderByRelevanceFieldEnumSchema = exports.ProjectUsersOrderByRelevanceFieldEnumSchema = exports.ProjectInviteOrderByRelevanceFieldEnumSchema = exports.ProjectOrderByRelevanceFieldEnumSchema = exports.VerificationTokenOrderByRelevanceFieldEnumSchema = exports.SessionOrderByRelevanceFieldEnumSchema = exports.AccountOrderByRelevanceFieldEnumSchema = exports.UserOrderByRelevanceFieldEnumSchema = exports.SiteOrderByRelevanceFieldEnumSchema = exports.CustomerRawOrderByRelevanceFieldEnumSchema = exports.CustomerOrderByRelevanceFieldEnumSchema = exports.JsonNullValueFilterSchema = exports.SiteTemplateOrderByRelevanceFieldEnumSchema = exports.AuditsOrderByRelevanceFieldEnumSchema = exports.NullsOrderSchema = exports.NullableJsonNullValueInputSchema = exports.JsonNullValueInputSchema = exports.SortOrderSchema = exports.ContactScalarFieldEnumSchema = exports.ImageLibraryScalarFieldEnumSchema = exports.TagScalarFieldEnumSchema = exports.LinkScalarFieldEnumSchema = exports.DomainScalarFieldEnumSchema = exports.SentEmailScalarFieldEnumSchema = exports.ProjectUsersScalarFieldEnumSchema = exports.ProjectInviteScalarFieldEnumSchema = exports.ProjectScalarFieldEnumSchema = exports.VerificationTokenScalarFieldEnumSchema = exports.SessionScalarFieldEnumSchema = exports.AccountScalarFieldEnumSchema = exports.UserScalarFieldEnumSchema = exports.SiteScalarFieldEnumSchema = exports.CustomerRawScalarFieldEnumSchema = exports.CustomerScalarFieldEnumSchema = exports.SiteTemplateDataDefScalarFieldEnumSchema = exports.SiteTemplateScalarFieldEnumSchema = exports.AuditsScalarFieldEnumSchema = exports.TransactionIsolationLevelSchema = exports.InputJsonValue = exports.NullableJsonValue = exports.JsonValue = exports.transformJsonNull = void 0;
exports.ContactWithRelationsSchema = exports.ContactSchema = exports.ImageLibrarySchema = exports.TagWithRelationsSchema = exports.TagSchema = exports.LinkWithRelationsSchema = exports.LinkSchema = exports.DomainWithRelationsSchema = exports.DomainSchema = exports.SentEmailWithRelationsSchema = exports.SentEmailSchema = exports.ProjectUsersWithRelationsSchema = exports.ProjectUsersSchema = exports.ProjectInviteWithRelationsSchema = exports.ProjectInviteSchema = exports.ProjectWithRelationsSchema = exports.ProjectSchema = exports.VerificationTokenSchema = exports.SessionWithRelationsSchema = exports.SessionSchema = exports.AccountWithRelationsSchema = exports.AccountSchema = exports.UserWithRelationsSchema = exports.UserSchema = exports.SiteWithRelationsSchema = exports.SiteSchema = exports.CustomerRawSchema = exports.CustomerWithRelationsSchema = exports.CustomerSchema = exports.SiteTemplateDataDefWithRelationsSchema = exports.SiteTemplateDataDefSchema = exports.SiteTemplateWithRelationsSchema = exports.SiteTemplateSchema = exports.AuditsSchema = void 0;
const zod_1 = __webpack_require__("zod");
const client_cms_admin_1 = __webpack_require__("@prisma/client-cms_admin");
const zod_openapi_1 = __webpack_require__("@anatine/zod-openapi");
(0, zod_openapi_1.extendZodWithOpenApi)(zod_1.z);
const transformJsonNull = (v) => {
    if (!v || v === 'DbNull')
        return client_cms_admin_1.Prisma.DbNull;
    if (v === 'JsonNull')
        return client_cms_admin_1.Prisma.JsonNull;
    return v;
};
exports.transformJsonNull = transformJsonNull;
exports.JsonValue = zod_1.z.union([
    zod_1.z.string(),
    zod_1.z.number(),
    zod_1.z.boolean(),
    zod_1.z.lazy(() => zod_1.z.array(exports.JsonValue)),
    zod_1.z.lazy(() => zod_1.z.record(exports.JsonValue)),
]);
exports.NullableJsonValue = zod_1.z
    .union([exports.JsonValue, zod_1.z.literal('DbNull'), zod_1.z.literal('JsonNull')])
    .nullable()
    .transform((v) => (0, exports.transformJsonNull)(v));
exports.InputJsonValue = zod_1.z.union([
    zod_1.z.string(),
    zod_1.z.number(),
    zod_1.z.boolean(),
    zod_1.z.lazy(() => zod_1.z.array(exports.InputJsonValue.nullable())),
    zod_1.z.lazy(() => zod_1.z.record(exports.InputJsonValue.nullable())),
]);
/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////
exports.TransactionIsolationLevelSchema = zod_1.z.enum(['ReadUncommitted', 'ReadCommitted', 'RepeatableRead', 'Serializable']);
exports.AuditsScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'auditId', 'auditType', 'userId', 'username', 'action', 'auditChanges', 'version']);
exports.SiteTemplateScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'name', 'template']);
exports.SiteTemplateDataDefScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'siteTemplateId', 'defData']);
exports.CustomerScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'name', 'extendData', 'kanzhunRaw', 'prevExtendData']);
exports.CustomerRawScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'ref', 'target', 'name', 'address', 'region', 'phone', 'email', 'websites', 'contact', 'mobile', 'qq', 'desc', 'scope', 'biz', 'logo']);
exports.SiteScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'name', 'status', 'cosUrl', 'siteTemplateId', 'customerId', 'slotData', 'projectId']);
exports.UserScalarFieldEnumSchema = zod_1.z.enum(['id', 'name', 'email', 'emailVerified', 'image', 'createdAt']);
exports.AccountScalarFieldEnumSchema = zod_1.z.enum(['id', 'userId', 'type', 'provider', 'providerAccountId', 'refresh_token', 'refresh_token_expires_in', 'access_token', 'expires_at', 'token_type', 'scope', 'id_token', 'session_state']);
exports.SessionScalarFieldEnumSchema = zod_1.z.enum(['id', 'sessionToken', 'userId', 'expires']);
exports.VerificationTokenScalarFieldEnumSchema = zod_1.z.enum(['identifier', 'token', 'expires']);
exports.ProjectScalarFieldEnumSchema = zod_1.z.enum(['id', 'name', 'slug', 'logo', 'password', 'type', 'usage', 'usageLimit', 'plan', 'stripeId', 'billingCycleStart', 'region', 'endpoint', 'bucket', 'useHost', 'createdAt', 'updatedAt', 'isDeleted']);
exports.ProjectInviteScalarFieldEnumSchema = zod_1.z.enum(['email', 'expires', 'projectId', 'createdAt']);
exports.ProjectUsersScalarFieldEnumSchema = zod_1.z.enum(['id', 'role', 'createdAt', 'updatedAt', 'userId', 'projectId', 'isDeleted']);
exports.SentEmailScalarFieldEnumSchema = zod_1.z.enum(['id', 'type', 'createdAt', 'projectId']);
exports.DomainScalarFieldEnumSchema = zod_1.z.enum(['id', 'slug', 'verified', 'target', 'type', 'description', 'projectId', 'primary', 'lastChecked', 'createdAt', 'updatedAt']);
exports.LinkScalarFieldEnumSchema = zod_1.z.enum(['id', 'domain', 'key', 'url', 'archived', 'expiresAt', 'password', 'proxy', 'title', 'description', 'image', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'rewrite', 'ios', 'android', 'userId', 'projectId', 'clicks', 'publicStats', 'createdAt', 'updatedAt', 'tagId', 'isDeleted']);
exports.TagScalarFieldEnumSchema = zod_1.z.enum(['id', 'name', 'color', 'createdAt', 'updatedAt', 'projectId']);
exports.ImageLibraryScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'unsplashId', 'tag', 'urls', 'css']);
exports.ContactScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'siteId', 'contact']);
exports.SortOrderSchema = zod_1.z.enum(['asc', 'desc']);
exports.JsonNullValueInputSchema = zod_1.z.enum(['JsonNull',]);
exports.NullableJsonNullValueInputSchema = zod_1.z.enum(['DbNull', 'JsonNull',]).transform((v) => (0, exports.transformJsonNull)(v));
exports.NullsOrderSchema = zod_1.z.enum(['first', 'last']);
exports.AuditsOrderByRelevanceFieldEnumSchema = zod_1.z.enum(['auditType', 'userId', 'username', 'action', 'auditChanges']);
exports.SiteTemplateOrderByRelevanceFieldEnumSchema = zod_1.z.enum(['name', 'template']);
exports.JsonNullValueFilterSchema = zod_1.z.enum(['DbNull', 'JsonNull', 'AnyNull',]);
exports.CustomerOrderByRelevanceFieldEnumSchema = zod_1.z.enum(['name']);
exports.CustomerRawOrderByRelevanceFieldEnumSchema = zod_1.z.enum(['ref', 'target', 'name', 'address', 'region', 'phone', 'email', 'contact', 'mobile', 'qq', 'desc', 'scope', 'biz', 'logo']);
exports.SiteOrderByRelevanceFieldEnumSchema = zod_1.z.enum(['name', 'cosUrl', 'projectId']);
exports.UserOrderByRelevanceFieldEnumSchema = zod_1.z.enum(['id', 'name', 'email', 'image']);
exports.AccountOrderByRelevanceFieldEnumSchema = zod_1.z.enum(['id', 'userId', 'type', 'provider', 'providerAccountId', 'refresh_token', 'access_token', 'token_type', 'scope', 'id_token', 'session_state']);
exports.SessionOrderByRelevanceFieldEnumSchema = zod_1.z.enum(['id', 'sessionToken', 'userId']);
exports.VerificationTokenOrderByRelevanceFieldEnumSchema = zod_1.z.enum(['identifier', 'token']);
exports.ProjectOrderByRelevanceFieldEnumSchema = zod_1.z.enum(['id', 'name', 'slug', 'logo', 'password', 'type', 'plan', 'stripeId', 'region', 'endpoint', 'bucket', 'useHost']);
exports.ProjectInviteOrderByRelevanceFieldEnumSchema = zod_1.z.enum(['email', 'projectId']);
exports.ProjectUsersOrderByRelevanceFieldEnumSchema = zod_1.z.enum(['id', 'userId', 'projectId']);
exports.SentEmailOrderByRelevanceFieldEnumSchema = zod_1.z.enum(['id', 'projectId']);
exports.DomainOrderByRelevanceFieldEnumSchema = zod_1.z.enum(['id', 'slug', 'target', 'type', 'description', 'projectId']);
exports.LinkOrderByRelevanceFieldEnumSchema = zod_1.z.enum(['id', 'domain', 'key', 'url', 'password', 'title', 'description', 'image', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'ios', 'android', 'userId', 'projectId', 'tagId']);
exports.TagOrderByRelevanceFieldEnumSchema = zod_1.z.enum(['id', 'name', 'color', 'projectId']);
exports.ImageLibraryOrderByRelevanceFieldEnumSchema = zod_1.z.enum(['unsplashId', 'tag', 'css']);
exports.ContactOrderByRelevanceFieldEnumSchema = zod_1.z.enum(['contact']);
exports.SiteStatusSchema = zod_1.z.enum(['redeploy', 'generated', 'passed', 'failed']).openapi({ "x-enumNames": "待重新部署COS,已生成,审核通过,审核不通过" });
exports.RoleSchema = zod_1.z.enum(['owner', 'member']);
exports.EmailTypeSchema = zod_1.z.enum(['firstDomainInvalidEmail', 'secondDomainInvalidEmail', 'firstUsageLimitEmail', 'secondUsageLimitEmail']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////
/////////////////////////////////////////
// AUDITS SCHEMA
/////////////////////////////////////////
exports.AuditsSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    auditId: zod_1.z.number().int().openapi({ "title": "关联" }),
    auditType: zod_1.z.string().openapi({ "title": "审计类型(关联" }),
    userId: zod_1.z.string().openapi({ "title": "用户" }),
    username: zod_1.z.string().nullable().openapi({ "title": "用户名" }),
    action: zod_1.z.string().openapi({ "title": "动作(e.g." }),
    auditChanges: zod_1.z.string().openapi({ "title": "变化" }),
    version: zod_1.z.number().int().openapi({ "title": "版本" }),
}).openapi({ "display_name": "审计日志" });
/////////////////////////////////////////
// SITE TEMPLATE SCHEMA
/////////////////////////////////////////
exports.SiteTemplateSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
    name: zod_1.z.string().openapi({ "title": "模板名称" }),
    template: zod_1.z.string().openapi({ "title": "模板内容", "column_type": "textarea" }),
}).openapi({ "display_name": "网站模板", "display_column": "name" });
exports.SiteTemplateWithRelationsSchema = exports.SiteTemplateSchema.merge(zod_1.z.object({
    sites: zod_1.z.lazy(() => exports.SiteWithRelationsSchema).array().openapi({ "model_name": "Site" }),
    siteTemplateDataDef: zod_1.z.lazy(() => exports.SiteTemplateDataDefWithRelationsSchema).nullable().openapi({ "model_name": "SiteTemplateDataDef" }),
}));
/////////////////////////////////////////
// SITE TEMPLATE DATA DEF SCHEMA
/////////////////////////////////////////
exports.SiteTemplateDataDefSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
    /**
     * @schema.x-unique true
     */
    siteTemplateId: zod_1.z.number().int().openapi({ "reference": "SiteTemplate", "x-unique": "true" }),
    defData: exports.InputJsonValue,
}).openapi({ "display_name": "模板数据定义", "display_column": "siteTemplateId" });
exports.SiteTemplateDataDefWithRelationsSchema = exports.SiteTemplateDataDefSchema.merge(zod_1.z.object({
    siteTemplate: zod_1.z.lazy(() => exports.SiteTemplateWithRelationsSchema),
}));
/////////////////////////////////////////
// CUSTOMER SCHEMA
/////////////////////////////////////////
exports.CustomerSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
    name: zod_1.z.string().openapi({ "title": "客户名称" }),
    extendData: exports.NullableJsonValue.optional(),
    kanzhunRaw: exports.NullableJsonValue.optional(),
    prevExtendData: exports.NullableJsonValue.optional(),
}).openapi({ "primary_key": "id", "display_name": "客户信息", "display_column": "name", "display_primary_key": "false", "searchable_columns": "name" });
exports.CustomerWithRelationsSchema = exports.CustomerSchema.merge(zod_1.z.object({
    sites: zod_1.z.lazy(() => exports.SiteWithRelationsSchema).array().openapi({ "model_name": "Site" }),
}));
/////////////////////////////////////////
// CUSTOMER RAW SCHEMA
/////////////////////////////////////////
exports.CustomerRawSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
    ref: zod_1.z.string().nullable(),
    target: zod_1.z.string().nullable(),
    name: zod_1.z.string(),
    address: zod_1.z.string().nullable(),
    region: zod_1.z.string().nullable(),
    phone: zod_1.z.string().nullable(),
    email: zod_1.z.string().nullable(),
    websites: exports.NullableJsonValue.optional(),
    contact: zod_1.z.string().nullable(),
    mobile: zod_1.z.string().nullable(),
    qq: zod_1.z.string().nullable(),
    desc: zod_1.z.string().nullable(),
    scope: zod_1.z.string().nullable(),
    biz: zod_1.z.string().nullable(),
    logo: zod_1.z.string().nullable(),
});
/////////////////////////////////////////
// SITE SCHEMA
/////////////////////////////////////////
exports.SiteSchema = zod_1.z.object({
    status: exports.SiteStatusSchema.openapi({ "title": "状态" }),
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
    name: zod_1.z.string().openapi({ "title": "网站名称" }),
    cosUrl: zod_1.z.string().openapi({ "title": "COS" }),
    siteTemplateId: zod_1.z.number().int().openapi({ "reference": "SiteTemplate" }),
    customerId: zod_1.z.number().int().openapi({ "reference": "Customer" }),
    slotData: exports.InputJsonValue,
    projectId: zod_1.z.string().nullable().openapi({ "title": "关联项目", "reference": "Project" }),
}).openapi({ "primary_key": "id", "display_name": "网站", "display_column": "name", "searchable_columns": "name" });
exports.SiteWithRelationsSchema = exports.SiteSchema.merge(zod_1.z.object({
    siteTemplate: zod_1.z.lazy(() => exports.SiteTemplateWithRelationsSchema),
    customer: zod_1.z.lazy(() => exports.CustomerWithRelationsSchema),
    project: zod_1.z.lazy(() => exports.ProjectWithRelationsSchema).nullable(),
    contacts: zod_1.z.lazy(() => exports.ContactWithRelationsSchema).array().openapi({ "model_name": "Contact" }),
}));
/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////
exports.UserSchema = zod_1.z.object({
    id: zod_1.z.string().cuid(),
    name: zod_1.z.string().nullable(),
    email: zod_1.z.string().nullable(),
    emailVerified: zod_1.z.date().nullable(),
    image: zod_1.z.string().nullable(),
    createdAt: zod_1.z.date(),
});
exports.UserWithRelationsSchema = exports.UserSchema.merge(zod_1.z.object({
    accounts: zod_1.z.lazy(() => exports.AccountWithRelationsSchema).array(),
    sessions: zod_1.z.lazy(() => exports.SessionWithRelationsSchema).array(),
}));
/////////////////////////////////////////
// ACCOUNT SCHEMA
/////////////////////////////////////////
exports.AccountSchema = zod_1.z.object({
    id: zod_1.z.string().cuid(),
    userId: zod_1.z.string(),
    type: zod_1.z.string(),
    provider: zod_1.z.string(),
    providerAccountId: zod_1.z.string(),
    refresh_token: zod_1.z.string().nullable(),
    refresh_token_expires_in: zod_1.z.number().int().nullable(),
    access_token: zod_1.z.string().nullable(),
    expires_at: zod_1.z.number().int().nullable(),
    token_type: zod_1.z.string().nullable(),
    scope: zod_1.z.string().nullable(),
    id_token: zod_1.z.string().nullable(),
    session_state: zod_1.z.string().nullable(),
});
exports.AccountWithRelationsSchema = exports.AccountSchema.merge(zod_1.z.object({
    user: zod_1.z.lazy(() => exports.UserWithRelationsSchema),
}));
/////////////////////////////////////////
// SESSION SCHEMA
/////////////////////////////////////////
exports.SessionSchema = zod_1.z.object({
    id: zod_1.z.string().cuid(),
    sessionToken: zod_1.z.string(),
    userId: zod_1.z.string(),
    expires: zod_1.z.date(),
});
exports.SessionWithRelationsSchema = exports.SessionSchema.merge(zod_1.z.object({
    user: zod_1.z.lazy(() => exports.UserWithRelationsSchema),
}));
/////////////////////////////////////////
// VERIFICATION TOKEN SCHEMA
/////////////////////////////////////////
exports.VerificationTokenSchema = zod_1.z.object({
    identifier: zod_1.z.string(),
    token: zod_1.z.string(),
    expires: zod_1.z.date(),
});
/////////////////////////////////////////
// PROJECT SCHEMA
/////////////////////////////////////////
exports.ProjectSchema = zod_1.z.object({
    id: zod_1.z.string().cuid(),
    name: zod_1.z.string(),
    slug: zod_1.z.string(),
    logo: zod_1.z.string().nullable(),
    password: zod_1.z.string().nullable(),
    type: zod_1.z.string(),
    usage: zod_1.z.number().int(),
    usageLimit: zod_1.z.number().int(),
    plan: zod_1.z.string(),
    stripeId: zod_1.z.string().nullable(),
    billingCycleStart: zod_1.z.number().int().nullable(),
    region: zod_1.z.string().nullable(),
    endpoint: zod_1.z.string().nullable(),
    bucket: zod_1.z.string().nullable(),
    useHost: zod_1.z.string().nullable(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
}).openapi({ "display_column": "name" });
exports.ProjectWithRelationsSchema = exports.ProjectSchema.merge(zod_1.z.object({
    users: zod_1.z.lazy(() => exports.ProjectUsersWithRelationsSchema).array().openapi({ "model_name": "ProjectUsers" }),
    invites: zod_1.z.lazy(() => exports.ProjectInviteWithRelationsSchema).array().openapi({ "model_name": "ProjectInvite" }),
    sentEmails: zod_1.z.lazy(() => exports.SentEmailWithRelationsSchema).array().openapi({ "model_name": "SentEmail" }),
    domains: zod_1.z.lazy(() => exports.DomainWithRelationsSchema).array().openapi({ "model_name": "Domain" }),
    links: zod_1.z.lazy(() => exports.LinkWithRelationsSchema).array().openapi({ "model_name": "Link" }),
    tags: zod_1.z.lazy(() => exports.TagWithRelationsSchema).array().openapi({ "model_name": "Tag" }),
    site: zod_1.z.lazy(() => exports.SiteWithRelationsSchema).nullable(),
}));
/////////////////////////////////////////
// PROJECT INVITE SCHEMA
/////////////////////////////////////////
exports.ProjectInviteSchema = zod_1.z.object({
    email: zod_1.z.string(),
    expires: zod_1.z.date(),
    projectId: zod_1.z.string(),
    createdAt: zod_1.z.date(),
});
exports.ProjectInviteWithRelationsSchema = exports.ProjectInviteSchema.merge(zod_1.z.object({
    project: zod_1.z.lazy(() => exports.ProjectWithRelationsSchema),
}));
/////////////////////////////////////////
// PROJECT USERS SCHEMA
/////////////////////////////////////////
exports.ProjectUsersSchema = zod_1.z.object({
    role: exports.RoleSchema,
    id: zod_1.z.string().cuid(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    userId: zod_1.z.string().nullable(),
    projectId: zod_1.z.string().openapi({ "reference": "Project" }),
    isDeleted: zod_1.z.boolean(),
});
exports.ProjectUsersWithRelationsSchema = exports.ProjectUsersSchema.merge(zod_1.z.object({
    project: zod_1.z.lazy(() => exports.ProjectWithRelationsSchema),
}));
/////////////////////////////////////////
// SENT EMAIL SCHEMA
/////////////////////////////////////////
exports.SentEmailSchema = zod_1.z.object({
    type: exports.EmailTypeSchema,
    id: zod_1.z.string().cuid(),
    createdAt: zod_1.z.date(),
    projectId: zod_1.z.string().nullable(),
});
exports.SentEmailWithRelationsSchema = exports.SentEmailSchema.merge(zod_1.z.object({
    project: zod_1.z.lazy(() => exports.ProjectWithRelationsSchema).nullable(),
}));
/////////////////////////////////////////
// DOMAIN SCHEMA
/////////////////////////////////////////
exports.DomainSchema = zod_1.z.object({
    id: zod_1.z.string().cuid(),
    slug: zod_1.z.string(),
    verified: zod_1.z.boolean(),
    target: zod_1.z.string().nullable(),
    type: zod_1.z.string(),
    description: zod_1.z.string().nullable(),
    projectId: zod_1.z.string().nullable(),
    primary: zod_1.z.boolean(),
    lastChecked: zod_1.z.date(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
});
exports.DomainWithRelationsSchema = exports.DomainSchema.merge(zod_1.z.object({
    project: zod_1.z.lazy(() => exports.ProjectWithRelationsSchema).nullable(),
    links: zod_1.z.lazy(() => exports.LinkWithRelationsSchema).array(),
}));
/////////////////////////////////////////
// LINK SCHEMA
/////////////////////////////////////////
exports.LinkSchema = zod_1.z.object({
    id: zod_1.z.string().cuid(),
    domain: zod_1.z.string(),
    key: zod_1.z.string(),
    url: zod_1.z.string(),
    archived: zod_1.z.boolean(),
    expiresAt: zod_1.z.date().nullable(),
    password: zod_1.z.string().nullable(),
    proxy: zod_1.z.boolean(),
    title: zod_1.z.string().nullable(),
    description: zod_1.z.string().nullable(),
    image: zod_1.z.string().nullable(),
    utm_source: zod_1.z.string().nullable(),
    utm_medium: zod_1.z.string().nullable(),
    utm_campaign: zod_1.z.string().nullable(),
    utm_term: zod_1.z.string().nullable(),
    utm_content: zod_1.z.string().nullable(),
    rewrite: zod_1.z.boolean(),
    ios: zod_1.z.string().nullable(),
    android: zod_1.z.string().nullable(),
    userId: zod_1.z.string().nullable(),
    projectId: zod_1.z.string().nullable().openapi({ "reference": "Project" }),
    clicks: zod_1.z.number().int(),
    publicStats: zod_1.z.boolean(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    tagId: zod_1.z.string().nullable(),
    isDeleted: zod_1.z.boolean(),
});
exports.LinkWithRelationsSchema = exports.LinkSchema.merge(zod_1.z.object({
    project: zod_1.z.lazy(() => exports.ProjectWithRelationsSchema).nullable(),
    projectDomain: zod_1.z.lazy(() => exports.DomainWithRelationsSchema).nullable(),
    tag: zod_1.z.lazy(() => exports.TagWithRelationsSchema).nullable(),
}));
/////////////////////////////////////////
// TAG SCHEMA
/////////////////////////////////////////
exports.TagSchema = zod_1.z.object({
    id: zod_1.z.string().cuid(),
    name: zod_1.z.string(),
    color: zod_1.z.string(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    projectId: zod_1.z.string(),
});
exports.TagWithRelationsSchema = exports.TagSchema.merge(zod_1.z.object({
    project: zod_1.z.lazy(() => exports.ProjectWithRelationsSchema),
    links: zod_1.z.lazy(() => exports.LinkWithRelationsSchema).array(),
}));
/////////////////////////////////////////
// IMAGE LIBRARY SCHEMA
/////////////////////////////////////////
exports.ImageLibrarySchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
    unsplashId: zod_1.z.string(),
    tag: zod_1.z.string(),
    urls: exports.InputJsonValue,
    css: zod_1.z.string(),
});
/////////////////////////////////////////
// CONTACT SCHEMA
/////////////////////////////////////////
exports.ContactSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
    siteId: zod_1.z.number().int().openapi({ "reference": "Site" }),
    contact: zod_1.z.string().openapi({ "title": "Slot" }),
}).openapi({ "primary_key": "id", "display_name": "产品咨询联系人", "display_column": "contact", "display_primary_key": "false" });
exports.ContactWithRelationsSchema = exports.ContactSchema.merge(zod_1.z.object({
    site: zod_1.z.lazy(() => exports.SiteWithRelationsSchema),
}));


/***/ }),

/***/ "@anatine/zod-openapi":
/***/ ((module) => {

module.exports = require("@anatine/zod-openapi");

/***/ }),

/***/ "@nestjs/common":
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/passport":
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/platform-express":
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");

/***/ }),

/***/ "@nestjs/schedule":
/***/ ((module) => {

module.exports = require("@nestjs/schedule");

/***/ }),

/***/ "@paralleldrive/cuid2":
/***/ ((module) => {

module.exports = require("@paralleldrive/cuid2");

/***/ }),

/***/ "@prisma/client-cms_admin":
/***/ ((module) => {

module.exports = require("@prisma/client-cms_admin");

/***/ }),

/***/ "@prisma/client-flowda":
/***/ ((module) => {

module.exports = require("@prisma/client-flowda");

/***/ }),

/***/ "@trpc/client":
/***/ ((module) => {

module.exports = require("@trpc/client");

/***/ }),

/***/ "@trpc/server":
/***/ ((module) => {

module.exports = require("@trpc/server");

/***/ }),

/***/ "@trpc/server/adapters/express":
/***/ ((module) => {

module.exports = require("@trpc/server/adapters/express");

/***/ }),

/***/ "@upstash/redis":
/***/ ((module) => {

module.exports = require("@upstash/redis");

/***/ }),

/***/ "ai-gen-utils":
/***/ ((module) => {

module.exports = require("ai-gen-utils");

/***/ }),

/***/ "class-transformer":
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),

/***/ "class-validator":
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "consola":
/***/ ((module) => {

module.exports = require("consola");

/***/ }),

/***/ "cos-nodejs-sdk-v5":
/***/ ((module) => {

module.exports = require("cos-nodejs-sdk-v5");

/***/ }),

/***/ "dayjs":
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ "dayjs/plugin/advancedFormat":
/***/ ((module) => {

module.exports = require("dayjs/plugin/advancedFormat");

/***/ }),

/***/ "dayjs/plugin/timezone":
/***/ ((module) => {

module.exports = require("dayjs/plugin/timezone");

/***/ }),

/***/ "dayjs/plugin/utc":
/***/ ((module) => {

module.exports = require("dayjs/plugin/utc");

/***/ }),

/***/ "express":
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "handlebars":
/***/ ((module) => {

module.exports = require("handlebars");

/***/ }),

/***/ "http-proxy-middleware":
/***/ ((module) => {

module.exports = require("http-proxy-middleware");

/***/ }),

/***/ "inversify":
/***/ ((module) => {

module.exports = require("inversify");

/***/ }),

/***/ "lodash":
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ "nestjs-zod":
/***/ ((module) => {

module.exports = require("nestjs-zod");

/***/ }),

/***/ "node-html-parser":
/***/ ((module) => {

module.exports = require("node-html-parser");

/***/ }),

/***/ "passport-jwt":
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "passport-local":
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),

/***/ "pinyin-pro":
/***/ ((module) => {

module.exports = require("pinyin-pro");

/***/ }),

/***/ "pluralize":
/***/ ((module) => {

module.exports = require("pluralize");

/***/ }),

/***/ "radash":
/***/ ((module) => {

module.exports = require("radash");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),

/***/ "znv":
/***/ ((module) => {

module.exports = require("znv");

/***/ }),

/***/ "zod":
/***/ ((module) => {

module.exports = require("zod");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const http_proxy_middleware_1 = __webpack_require__("http-proxy-middleware");
const app_module_1 = __webpack_require__("./src/app/app.module.ts");
const cms_admin_services_1 = __webpack_require__("../../libs/cms-admin-services/src/index.ts");
const cms_admin_services_trpc_server_1 = __webpack_require__("../../libs/cms-admin-services-trpc-server/src/index.ts");
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        app.enableCors();
        const globalPrefix = 'cms-admin-api';
        app.setGlobalPrefix(globalPrefix);
        const trpc = app.get(cms_admin_services_trpc_server_1.TrpcRouter);
        trpc.applyMiddleware(app, globalPrefix);
        app.use((req, res, next) => {
            if (req.originalUrl.includes('favicon.ico')) {
                res.status(204).end();
            }
            else {
                next();
            }
        });
        // PROXY
        common_1.Logger.debug(`FLOWDA_URL ${cms_admin_services_1.CMS_ADMIN_ENV.FLOWDA_URL}`);
        // todo: 增加权限
        app.use(`/${globalPrefix}`, (0, http_proxy_middleware_1.createProxyMiddleware)([
            `/${globalPrefix}/data/tenants`,
            `/${globalPrefix}/data/users`,
            `/${globalPrefix}/data/dynamic_table_defs`,
            `/${globalPrefix}/data/dynamic_table_def_columns`,
            `/${globalPrefix}/data/dynamic_table_data`,
            `/${globalPrefix}/data/menus`,
            `/${globalPrefix}/data/request_error_logs`,
            `/${globalPrefix}/data/products`,
            `/${globalPrefix}/data/orders`,
            `/${globalPrefix}/data/pays`,
            `/${globalPrefix}/data/sent_sms`,
            `/${globalPrefix}/user/register`,
            `/${globalPrefix}/user/getUserInfo`,
            `/${globalPrefix}/user/resetPassword`,
            `/${globalPrefix}/dynamic-table-data`,
            `/${globalPrefix}/menu/getMenu`,
            `/${globalPrefix}/table-filter`,
            `/${globalPrefix}/camunda/engine-rest`,
        ], {
            target: cms_admin_services_1.CMS_ADMIN_ENV.FLOWDA_URL,
            changeOrigin: true,
            pathRewrite: {
                [`^/cms-admin-api`]: '/flowda-api',
            },
        }));
        const port = process.env.PORT || 3345;
        yield app.listen(port);
        common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
    });
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map