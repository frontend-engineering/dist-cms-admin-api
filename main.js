/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/app.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const cms_admin_services_1 = __webpack_require__("../../libs/cms-admin-services/src/index.ts");
const userJwtAuth_guard_1 = __webpack_require__("./src/user/userJwtAuth.guard.ts");
let AppController = class AppController {
    constructor(cmsAdminSchemaService, custom) {
        this.cmsAdminSchemaService = cmsAdminSchemaService;
        this.custom = custom;
    }
    hi() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return {
                hi: 'cms-admin-api',
            };
        });
    }
    sitePreview(siteId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.custom.previewSite(parseInt(siteId));
        });
    }
    submitPreviewSite(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.custom.submitPreviewSite(dto);
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
    generateSite(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.custom.generateSite(dto);
        });
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('/__hi'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "hi", null);
tslib_1.__decorate([
    (0, common_1.Get)('/sitePreview'),
    (0, common_1.Header)('content-type', 'text/html'),
    (0, common_1.Header)('X-Frame-Options', 'ALLOW-FROM https://cms-1306445775.cos-website.ap-shanghai.myqcloud.com'),
    tslib_1.__param(0, (0, common_1.Query)('siteId')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "sitePreview", null);
tslib_1.__decorate([
    (0, common_1.Post)('/submitPreviewSite'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof cms_admin_services_1.SubmitPreviewSiteSchemaDto !== "undefined" && cms_admin_services_1.SubmitPreviewSiteSchemaDto) === "function" ? _c : Object]),
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
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof cms_admin_services_1.GetTemplateDataDefSchemaDto !== "undefined" && cms_admin_services_1.GetTemplateDataDefSchemaDto) === "function" ? _d : Object]),
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
    (0, common_1.Post)('/generateSite'),
    (0, common_1.UseGuards)(userJwtAuth_guard_1.UserJwtAuthGuard),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_e = typeof cms_admin_services_1.GenerateSiteSchemaDto !== "undefined" && cms_admin_services_1.GenerateSiteSchemaDto) === "function" ? _e : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "generateSite", null);
AppController = tslib_1.__decorate([
    (0, common_1.Controller)('/apps'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof cms_admin_services_1.CmsAdminSchemaService !== "undefined" && cms_admin_services_1.CmsAdminSchemaService) === "function" ? _a : Object, typeof (_b = typeof cms_admin_services_1.CustomService !== "undefined" && cms_admin_services_1.CustomService) === "function" ? _b : Object])
], AppController);
exports.AppController = AppController;


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
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [services_module_1.ServicesModule, schedule_1.ScheduleModule.forRoot()],
        controllers: [data_controller_1.DataController, audit_controller_1.AuditController, app_controller_1.AppController, user_controller_1.UserController],
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
exports.AppModule = AppModule;


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
tslib_1.__decorate([
    (0, common_1.Post)('/query'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof flowda_shared_node_1.QueryAuditSchemaDto !== "undefined" && flowda_shared_node_1.QueryAuditSchemaDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], AuditController.prototype, "queryTableFilter", null);
AuditController = tslib_1.__decorate([
    (0, common_1.Controller)('/audit'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof flowda_shared_node_1.AuditService !== "undefined" && flowda_shared_node_1.AuditService) === "function" ? _a : Object])
], AuditController);
exports.AuditController = AuditController;


/***/ }),

/***/ "./src/app/data.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e;
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
tslib_1.__decorate([
    (0, common_1.Get)(''),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof express !== "undefined" && express.Request) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DataController.prototype, "get", null);
tslib_1.__decorate([
    (0, common_1.Put)(''),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof express !== "undefined" && express.Request) === "function" ? _c : Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DataController.prototype, "put", null);
tslib_1.__decorate([
    (0, common_1.Post)(''),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof express !== "undefined" && express.Request) === "function" ? _d : Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DataController.prototype, "post", null);
tslib_1.__decorate([
    (0, common_1.Delete)(''),
    (0, common_1.HttpCode)(200),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_e = typeof express !== "undefined" && express.Request) === "function" ? _e : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DataController.prototype, "remove", null);
DataController = tslib_1.__decorate([
    (0, common_1.Controller)('data/*'),
    (0, common_1.UseGuards)(userJwtAuth_guard_1.UserJwtAuthGuard),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof flowda_shared_1.DataService !== "undefined" && flowda_shared_1.DataService) === "function" ? _a : Object])
], DataController);
exports.DataController = DataController;


/***/ }),

/***/ "./src/loadModule.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/* eslint-disable @typescript-eslint/no-var-requires */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadModule = void 0;
const cms_admin_services_1 = __webpack_require__("../../libs/cms-admin-services/src/index.ts");
const client_cms_admin_1 = __webpack_require__("@prisma/client-cms_admin");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const flowda_shared_node_1 = __webpack_require__("../../libs/flowda-shared-node/src/index.ts");
const trpc_1 = __webpack_require__("./src/trpc/trpc.ts");
const COS = __webpack_require__("cos-nodejs-sdk-v5");
const prisma = new client_cms_admin_1.PrismaClient({
    log: [
        // 'query',
        'info',
        'warn',
        'error',
    ],
});
console.log('---------- ENV --------------');
console.log('PROXY', cms_admin_services_1.CMS_ADMIN_ENV.PROXY);
console.log('---------- ENV --------------');
function loadModule(container) {
    container.bind(flowda_shared_1.PrismaClientSymbol).toConstantValue(prisma);
    container.bind(flowda_shared_1.FlowdaTrpcClientSymbol).toConstantValue(trpc_1.trpc);
    container.bind(flowda_shared_1.COSSymbol).toDynamicValue(() => {
        return new COS({
            SecretId: cms_admin_services_1.CMS_ADMIN_ENV.COS_ID,
            SecretKey: cms_admin_services_1.CMS_ADMIN_ENV.COS_KEY,
        });
    });
    container.load(flowda_shared_1.flowdaSharedModule);
    container.load(flowda_shared_node_1.flowdaSharedNodeModule);
    container.load(cms_admin_services_1.cmsAdminServiceModule);
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
ServicesModule = tslib_1.__decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: services,
        exports: services,
    }),
    tslib_1.__metadata("design:paramtypes", [])
], ServicesModule);
exports.ServicesModule = ServicesModule;


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
            url: `${cms_admin_services_1.CMS_ADMIN_ENV.FLOWDA_URL}/flowda-api/trpc`, // you should update this to use env variables
        }),
    ],
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
UserController = UserController_1 = tslib_1.__decorate([
    (0, common_1.Controller)('user'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof cms_admin_services_1.UserService !== "undefined" && cms_admin_services_1.UserService) === "function" ? _a : Object])
], UserController);
exports.UserController = UserController;


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
UserJwtStrategy = UserJwtStrategy_1 = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [])
], UserJwtStrategy);
exports.UserJwtStrategy = UserJwtStrategy;


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
UserJwtAuthGuard = tslib_1.__decorate([
    (0, common_1.Injectable)()
], UserJwtAuthGuard);
exports.UserJwtAuthGuard = UserJwtAuthGuard;


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
UserLocalStrategy = UserLocalStrategy_1 = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof cms_admin_services_1.UserService !== "undefined" && cms_admin_services_1.UserService) === "function" ? _a : Object])
], UserLocalStrategy);
exports.UserLocalStrategy = UserLocalStrategy;


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
UserLocalAuthGuard = tslib_1.__decorate([
    (0, common_1.Injectable)()
], UserLocalAuthGuard);
exports.UserLocalAuthGuard = UserLocalAuthGuard;


/***/ }),

/***/ "../../libs/cms-admin-services/src/cmsAdminService.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cmsAdminServiceModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const prisma_cms_admin_1 = __webpack_require__("../../libs/prisma-cms_admin/src/index.ts");
const schema = tslib_1.__importStar(__webpack_require__("../../libs/cms-admin-services/src/lib/schema.ts"));
const user_service_1 = __webpack_require__("../../libs/cms-admin-services/src/services/user.service.ts");
const custom_service_1 = __webpack_require__("../../libs/cms-admin-services/src/services/custom.service.ts");
const cmsAdminSchema_service_1 = __webpack_require__("../../libs/cms-admin-services/src/services/cmsAdminSchema.service.ts");
exports.cmsAdminServiceModule = new inversify_1.ContainerModule((bind) => {
    bind(flowda_shared_1.PrismaZodSchemaSymbol).toConstantValue(prisma_cms_admin_1.zt);
    bind(flowda_shared_1.CustomZodSchemaSymbol).toConstantValue(schema);
    (0, flowda_shared_1.bindService)(bind, flowda_shared_1.ServiceSymbol, user_service_1.UserService);
    (0, flowda_shared_1.bindService)(bind, flowda_shared_1.ServiceSymbol, custom_service_1.CustomService);
    (0, flowda_shared_1.bindService)(bind, flowda_shared_1.ServiceSymbol, cmsAdminSchema_service_1.CmsAdminSchemaService);
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
tslib_1.__exportStar(__webpack_require__("../../libs/cms-admin-services/src/services/custom.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/cms-admin-services/src/services/cmsAdminSchema.service.ts"), exports);


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
    REFRESH_TOKEN_SECRET: zod_1.z.string().min(1),
    REFRESH_TOKEN_EXPIRE: zod_1.z.number().default(7 * 24 * 60 * 60),
    ACCESS_TOKEN_SECRET: zod_1.z.string().min(1),
    ACCESS_TOKEN_EXPIRE: zod_1.z.number().default(60 * 60),
    FLOWDA_URL: zod_1.z.string().min(1),
    COS_KEY: zod_1.z.string().optional(),
    COS_ID: zod_1.z.string().optional(),
    PROXY: zod_1.z.string().default('n'),
});


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
exports.CustomerResourceSchema = exports.SiteResourceSchema = exports.SiteTemplateDataDefResourceSchema = exports.SiteTemplateResourceSchema = void 0;
const prisma_cms_admin_1 = __webpack_require__("../../libs/prisma-cms_admin/src/index.ts");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
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


/***/ }),

/***/ "../../libs/cms-admin-services/src/services/cmsAdminSchema.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var CmsAdminSchemaService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CmsAdminSchemaService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
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
                schema = yield this.flowdaTrpc.schema.getSchema.query();
            }
            // 暴露一个接口，如果是超级管理员，则获取超级管理员的 schema
            const schema2 = this.schema.getSchema();
            const ret = Object.assign({}, schema, schema2);
            return ret;
        });
    }
};
CmsAdminSchemaService = CmsAdminSchemaService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_1.SchemaServiceSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)(flowda_shared_1.FlowdaTrpcClientSymbol)),
    tslib_1.__param(2, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Function])
], CmsAdminSchemaService);
exports.CmsAdminSchemaService = CmsAdminSchemaService;


/***/ }),

/***/ "../../libs/cms-admin-services/src/services/custom.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var CustomService_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomService = exports.SubmitPreviewSiteSchemaDto = exports.GenerateSiteSchemaDto = exports.GetTemplateDataDefSchemaDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const db = tslib_1.__importStar(__webpack_require__("@prisma/client-cms_admin"));
const zod_1 = __webpack_require__("zod");
const nestjs_zod_1 = __webpack_require__("nestjs-zod");
const zod_openapi_1 = __webpack_require__("@anatine/zod-openapi");
const dynamic_schema_1 = __webpack_require__("../../libs/cms-admin-services/src/lib/dynamic-schema.ts");
const _ = tslib_1.__importStar(__webpack_require__("radash"));
const Handlebars = tslib_1.__importStar(__webpack_require__("handlebars"));
const node_html_parser_1 = __webpack_require__("node-html-parser");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { generateData } = __webpack_require__("ai-gen-utils");
const GetTemplateDataDefSchema = zod_1.z.object({
    siteId: zod_1.z.number(),
});
class GetTemplateDataDefSchemaDto extends (0, nestjs_zod_1.createZodDto)(GetTemplateDataDefSchema) {
}
exports.GetTemplateDataDefSchemaDto = GetTemplateDataDefSchemaDto;
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
const BUCKET = 'assets-1306445775';
let CustomService = CustomService_1 = class CustomService {
    constructor(prisma, data, cos, loggerFactory) {
        this.prisma = prisma;
        this.data = data;
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
            const data = yield generateData(companyInfo);
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
            }
            // const htmlRet = ejs.render(tplRet.template, dto.defData)
            return ret;
        });
    }
    previewSite(siteId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const siteRet = yield this.prisma.site.findUniqueOrThrow({
                where: {
                    id: siteId,
                },
                include: {
                    siteTemplate: true,
                },
            });
            const { prefix, compiledTemplate } = yield this.getTemplate(siteRet.siteTemplate.template);
            const generatedHTML = compiledTemplate(siteRet.slotData);
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
      console.log('inject iframe message proxy')
      window.addEventListener('message', function (e) {
        console.log('from parent', e.data)
        try {
            const { path, value } = JSON.parse(e.data)
            const ele = document.querySelectorAll('[data-slot="' + path + '"]')[0]
            ele.innerText = value
            ele.scrollIntoView({ behavior: 'smooth' });
            ele.classList.add('blink');
            setTimeout(() => {
                ele.classList.remove('blink');
            }, 3000);
        } catch (e) {
            console.error('error', e.message, e.data)
        }
      })
    </script>
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
    submitPreviewSite(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const siteRet = yield this.prisma.site.update({
                where: {
                    id: dto.siteId,
                },
                data: {
                    slotData: dto.slotData,
                },
                include: {
                    siteTemplate: true,
                },
            });
            // 发 cos
            const { prefix, compiledTemplate } = yield this.getTemplate(siteRet.siteTemplate.template);
            const generatedHTML = compiledTemplate(siteRet.slotData);
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
                    this.logger.error(`upload to tencent error: ${JSON.stringify(err || data)}`);
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(data === null || data === void 0 ? void 0 : data.Location);
                    }
                });
            });
            this.logger.debug(`Cos url: ${cosUrl}`);
            yield this.prisma.site.update({
                where: {
                    id: dto.siteId,
                },
                data: {
                    cosUrl: cosUrl,
                },
            });
            return {
                success: true,
            };
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
};
CustomService = CustomService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)(flowda_shared_1.DataServiceSymbol)),
    tslib_1.__param(2, (0, inversify_1.inject)(flowda_shared_1.COSSymbol)),
    tslib_1.__param(3, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof db !== "undefined" && db.PrismaClient) === "function" ? _a : Object, typeof (_b = typeof flowda_shared_1.DataService !== "undefined" && flowda_shared_1.DataService) === "function" ? _b : Object, Object, Function])
], CustomService);
exports.CustomService = CustomService;


/***/ }),

/***/ "../../libs/cms-admin-services/src/services/user.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var UserService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const client_1 = __webpack_require__("@trpc/client");
let UserService = UserService_1 = class UserService {
    constructor(flowdaTrpc, loggerFactory) {
        this.flowdaTrpc = flowdaTrpc;
        this.logger = loggerFactory(UserService_1.name);
    }
    validate(username, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.debug(`[validate] invoke flowdaTrpc.user.validate, username: ${username}`);
            return this.flowdaTrpc.user.validate.query({
                username,
                password,
            });
        });
    }
};
UserService = UserService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_1.FlowdaTrpcClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof client_1.CreateTRPCProxyClient !== "undefined" && client_1.CreateTRPCProxyClient) === "function" ? _a : Object, Function])
], UserService);
exports.UserService = UserService;


/***/ }),

/***/ "../../libs/flowda-shared-node/src/assist/audit.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var AuditService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuditService = exports.QueryAuditSchemaDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
// import * as db from '@prisma/client-wms'
const nestjs_zod_1 = __webpack_require__("nestjs-zod");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
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
AuditService = AuditService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [Object, Function])
], AuditService);
exports.AuditService = AuditService;


/***/ }),

/***/ "../../libs/flowda-shared-node/src/assist/table-filter.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var TableFilterService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TableFilterService = exports.RemoveTableFilterSchemaDto = exports.QueryTableFilterSchemaDto = exports.TableFilterSchema = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
// import * as db from '@prisma/client-wms'
const nestjs_zod_1 = __webpack_require__("nestjs-zod");
// import { TableFilterSchema } from '@flowda-projects/prisma-wms'
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
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
    constructor(
    // todo: 暂时先强类型，后续应该做成服务
    prisma, loggerFactory) {
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
TableFilterService = TableFilterService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [Object, Function])
], TableFilterService);
exports.TableFilterService = TableFilterService;


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
AppExceptionFilter = AppExceptionFilter_1 = tslib_1.__decorate([
    (0, common_1.Catch)(),
    tslib_1.__metadata("design:paramtypes", [])
], AppExceptionFilter);
exports.AppExceptionFilter = AppExceptionFilter;


/***/ }),

/***/ "../../libs/flowda-shared-node/src/flowdaSharedNode.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.flowdaSharedNodeModule = void 0;
const inversify_1 = __webpack_require__("inversify");
const common_1 = __webpack_require__("@nestjs/common");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const table_filter_service_1 = __webpack_require__("../../libs/flowda-shared-node/src/assist/table-filter.service.ts");
const audit_service_1 = __webpack_require__("../../libs/flowda-shared-node/src/assist/audit.service.ts");
exports.flowdaSharedNodeModule = new inversify_1.ContainerModule((bind) => {
    (0, flowda_shared_1.bindService)(bind, flowda_shared_1.ServiceSymbol, table_filter_service_1.TableFilterService);
    (0, flowda_shared_1.bindService)(bind, flowda_shared_1.ServiceSymbol, audit_service_1.AuditService);
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
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared-node/src/assist/table-filter.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared-node/src/assist/audit.service.ts"), exports);


/***/ }),

/***/ "../../libs/flowda-shared/src/flowdaShared.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.flowdaSharedModule = void 0;
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const prismaSchema_service_1 = __webpack_require__("../../libs/flowda-shared/src/services/schema/prismaSchema.service.ts");
const data_service_1 = __webpack_require__("../../libs/flowda-shared/src/services/data/data.service.ts");
const schema_service_1 = __webpack_require__("../../libs/flowda-shared/src/services/schema/schema.service.ts");
const schemaTransformer_1 = __webpack_require__("../../libs/flowda-shared/src/services/schema/schemaTransformer.ts");
const prismaUtils_1 = __webpack_require__("../../libs/flowda-shared/src/services/schema/prismaUtils.ts");
const symbols_1 = __webpack_require__("../../libs/flowda-shared/src/symbols.ts");
exports.flowdaSharedModule = new inversify_1.ContainerModule((bind) => {
    (0, flowda_shared_1.bindServiceSymbol)(bind, flowda_shared_1.ServiceSymbol, flowda_shared_1.DataServiceSymbol, data_service_1.DataService);
    (0, flowda_shared_1.bindServiceSymbol)(bind, flowda_shared_1.ServiceSymbol, flowda_shared_1.SchemaServiceSymbol, schema_service_1.SchemaService);
    bind(symbols_1.PrismaSchemaServiceSymbol).to(prismaSchema_service_1.PrismaSchemaService).inSingletonScope();
    bind(flowda_shared_1.PrismaUtilsSymbol).to(prismaUtils_1.PrismaUtils).inSingletonScope();
    bind(symbols_1.SchemaTransformerSymbol).to(schemaTransformer_1.SchemaTransformer).inTransientScope();
    bind('Factory<SchemaTransformer>').toFactory(context => {
        return (z) => {
            const transformer = context.container.get(symbols_1.SchemaTransformerSymbol);
            transformer.setZodType(z);
            return transformer;
        };
    });
    bind(flowda_shared_1.DynamicTableSchemaTransformerSymbol)
        .to(flowda_shared_1.DynamicTableSchemaTransformer)
        .inTransientScope();
});


/***/ }),

/***/ "../../libs/flowda-shared/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/symbols.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/flowdaShared.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/utils/bindService.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/utils/matchPath.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/utils/getServices.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/utils/browser-log-utils.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/interfaces/types.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/interfaces/schema.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/services/schema/meta.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/services/schema/schemaTransformer.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/services/schema/dynamicTableSchemaTransformer.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/services/schema/schema.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/services/data/data.service.ts"), exports);


/***/ }),

/***/ "../../libs/flowda-shared/src/interfaces/schema.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/flowda-shared/src/interfaces/types.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.COSSymbol = exports.CustomError = exports.K3CloudIdentifyInfoSymbol = exports.CustomZodSchemaSymbol = exports.PrismaZodSchemaSymbol = exports.ENVSymbol = exports.URLSymbol = exports.APISymbol = exports.ServiceSymbol = exports.PrismaClientSymbol = void 0;
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
class CustomError extends Error {
    constructor(code, message, extra) {
        super(JSON.stringify({ code: code, message }));
        this.message = JSON.stringify({ code, message, extra });
    }
}
exports.CustomError = CustomError;
exports.COSSymbol = Symbol('COS');


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
const types_1 = __webpack_require__("../../libs/flowda-shared/src/interfaces/types.ts");
const symbols_1 = __webpack_require__("../../libs/flowda-shared/src/symbols.ts");
// import * as db from '@prisma/client-wms'
/*
todo: 增加 reference_type 区分是如何做 nest
e.g. Customer#weixinProfile 和 Order#customerId 的 nest 查询有区别
 */
let DataService = DataService_1 = class DataService {
    constructor(
    // todo: prisma 要不要强类型
    // @inject(PrismaClientSymbol) private prisma: db.PrismaClient,
    prisma, prismaSchemaService, loggerFactory) {
        this.prisma = prisma;
        this.prismaSchemaService = prismaSchemaService;
        this.logger = loggerFactory(DataService_1.name);
    }
    get(reqUser, pathname, query) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.debug(`[get] reqUser ${JSON.stringify(reqUser, null, 2)}`);
            this.logger.debug(`get ${pathname}, query: ${JSON.stringify(query, null, 2)}`);
            const findParamRet = yield this.prismaSchemaService.toFindParam(pathname, query);
            if (_.isEmpty(findParamRet)) {
                return {};
            }
            const { resource, action, param } = findParamRet;
            if (action === 'findUnique') {
                const ret = yield this.prisma[resource][action](param);
                if (ret.isDeleted)
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
            this.logger.debug(`[put] reqUser ${JSON.stringify(reqUser, null, 2)}`);
            const updateParamRet = yield this.prismaSchemaService.toUpdateParam(path, values);
            const { resource, param } = updateParamRet;
            const prevRet = yield this.prisma[resource].findUnique({
                where: {
                    id: param.where.id,
                },
                select: _.mapValues(param.data, item => true),
            });
            this.logger.debug(`prevRet ${JSON.stringify(prevRet, null, 2)}`);
            const auditChanges = Object.keys(param.data).reduce((acc, k) => {
                acc[k] = [prevRet[k], param.data[k]];
                return acc;
            }, {});
            const ret = yield this.prisma[resource].update(param);
            const auditInfo = {
                auditId: param.where.id,
                auditType: resource,
                userId: JSON.stringify(reqUser['user_id'] || reqUser['uid']),
                username: reqUser['user_name'],
                action: 'update',
                auditChanges: JSON.stringify(auditChanges),
                version: 0,
            };
            this.logger.log(`audit ${JSON.stringify(auditInfo, null, 2)}`);
            yield this.prisma.audits.create({
                data: auditInfo,
            });
            return ret;
        });
    }
    post(reqUser, path, values) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.debug(`[post] reqUser ${JSON.stringify(reqUser, null, 2)}`);
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
                    userId: JSON.stringify(reqUser['user_id'] || reqUser['uid']),
                    username: reqUser['user_name'],
                    action: 'soft_delete_revert',
                    auditChanges: JSON.stringify(param.data),
                    version: 0,
                };
                this.logger.log(`audit ${JSON.stringify(auditInfo, null, 2)}`);
                yield this.prisma.audits.create({
                    data: auditInfo,
                });
                return ret;
            }
            else {
                const ret = yield this.prisma[resource].create(param);
                const auditInfo = {
                    auditId: ret.id,
                    auditType: resource,
                    userId: JSON.stringify(reqUser['user_id'] || reqUser['uid']),
                    username: reqUser['user_name'],
                    action: 'create',
                    auditChanges: JSON.stringify(param.data),
                    version: 0,
                };
                this.logger.log(`audit ${JSON.stringify(auditInfo, null, 2)}`);
                yield this.prisma.audits.create({
                    data: auditInfo,
                });
                return ret;
            }
        });
    }
    remove(reqUser, pathname) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.debug(`[remove] reqUser ${JSON.stringify(reqUser, null, 2)}`);
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
                userId: JSON.stringify(reqUser['user_id'] || reqUser['uid']),
                username: reqUser['user_name'],
                action: 'soft_delete',
                auditChanges: JSON.stringify(prevRet),
                version: 0,
            };
            this.logger.log(`audit ${JSON.stringify(auditInfo, null, 2)}`);
            yield this.prisma.audits.create({
                data: auditInfo,
            });
            return ret;
        });
    }
};
DataService = DataService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(types_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)(symbols_1.PrismaSchemaServiceSymbol)),
    tslib_1.__param(2, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Function])
], DataService);
exports.DataService = DataService;


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
DynamicTableSchemaTransformer = DynamicTableSchemaTransformer_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [Function])
], DynamicTableSchemaTransformer);
exports.DynamicTableSchemaTransformer = DynamicTableSchemaTransformer;


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
const _ = tslib_1.__importStar(__webpack_require__("lodash"));
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
let PrismaSchemaService = PrismaSchemaService_1 = class PrismaSchemaService {
    constructor(prismaUtils, schemaService, loggerFactory) {
        this.prismaUtils = prismaUtils;
        this.schemaService = schemaService;
        this.logger = loggerFactory(PrismaSchemaService_1.name);
    }
    toPrismaSelect(fields) {
        return fields.split(',').reduce((acc, cur) => {
            acc[cur] = true;
            return acc;
        }, {});
    }
    toFindParam(pathname, query) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!query.fields) {
                throw new Error('No query fields');
            }
            this.logger.debug(`pathname: ${pathname}, query: ${JSON.stringify(query, null, 2)}`);
            const parsedPath = (0, matchPath_1.matchPath)(pathname);
            if (parsedPath.length === 0)
                return Promise.resolve({});
            const { resource, id, resourceSchema } = parsedPath[parsedPath.length - 1];
            const schemaCache = yield this.schemaService.getSchemaCache();
            const theResourceSchema = schemaCache[resourceSchema];
            let action;
            let param = {};
            const queryFields = query.fields;
            const fields = this.toPrismaSelect(queryFields[resource]);
            const include = {};
            if (typeof query.include === 'string' && query.include !== '') {
                query.include.split(',').forEach((inc) => {
                    // this.logger.log(`[toFindParam] parse include ${inc}`)
                    const refSelect = this.getRefSelect(schemaCache, theResourceSchema, inc);
                    const selectRet = this.toPrismaSelect(queryFields[inc]);
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
                const skip = query.current ? (_.toNumber(query.current) - 1) * _.toNumber(query.pageSize) : undefined;
                const take = query.pageSize ? _.toNumber(query.pageSize) : undefined;
                if (parsedPath.length > 1) {
                    // 情况1：根据前一个 resource id 搜索 list
                    const pResource = parsedPath[parsedPath.length - 2];
                    // this.logger.log(`${resource}.findMany`)
                    param = _.omitBy({
                        where: Object.assign({
                            [`${pResource.resource}Id`]: pResource.id,
                            isDeleted: false,
                        }, filter),
                        orderBy,
                        skip,
                        take,
                        select: Object.assign(Object.assign({}, fields), include),
                    }, _.isUndefined);
                }
                else {
                    param = _.omitBy({
                        where: Object.assign({
                            isDeleted: false,
                        }, filter),
                        orderBy,
                        skip,
                        take,
                        select: Object.assign(Object.assign({}, fields), include),
                    }, _.isUndefined);
                }
            }
            const ret = {
                action,
                param,
                resource,
            };
            this.logger.debug(JSON.stringify(ret));
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
        if (query.filter && Array.isArray(query.filter) && query.filter.length > 0) {
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
        item[k] = _.mapKeys(item[k], (v, k) => {
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
                return _.toNumber(v);
            }
            else {
                return v;
            }
        });
        // 再将 . 改成嵌套（chatGPT 给出的方式）
        const ret = {};
        _.forEach(item, (value, key) => {
            _.set(ret, key.replace(/\./g, '.'), value);
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
        // console.log(relationFields)
        relationFields.forEach(k => {
            delete values[k];
        });
    }
};
PrismaSchemaService = PrismaSchemaService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_1.PrismaUtilsSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)(flowda_shared_1.SchemaServiceSymbol)),
    tslib_1.__param(2, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Function])
], PrismaSchemaService);
exports.PrismaSchemaService = PrismaSchemaService;


/***/ }),

/***/ "../../libs/flowda-shared/src/services/schema/prismaUtils.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var PrismaUtils_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaUtils = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const matchPath_1 = __webpack_require__("../../libs/flowda-shared/src/utils/matchPath.ts");
const types_1 = __webpack_require__("../../libs/flowda-shared/src/interfaces/types.ts");
let PrismaUtils = PrismaUtils_1 = class PrismaUtils {
    constructor(
    // todo: prisma 要不要强类型
    // @inject(PrismaClientSymbol) private prisma: db.PrismaClient,
    prisma, loggerFactory) {
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
PrismaUtils = PrismaUtils_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(types_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [Object, Function])
], PrismaUtils);
exports.PrismaUtils = PrismaUtils;


/***/ }),

/***/ "../../libs/flowda-shared/src/services/schema/schema.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var SchemaService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SchemaService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const types_1 = __webpack_require__("../../libs/flowda-shared/src/interfaces/types.ts");
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
SchemaService = SchemaService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__param(1, (0, inversify_1.inject)('Factory<SchemaTransformer>')),
    tslib_1.__param(2, (0, inversify_1.inject)(types_1.PrismaZodSchemaSymbol)),
    tslib_1.__param(3, (0, inversify_1.inject)(types_1.CustomZodSchemaSymbol)),
    tslib_1.__metadata("design:paramtypes", [Function, Function, Object, Object])
], SchemaService);
exports.SchemaService = SchemaService;


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
const _ = tslib_1.__importStar(__webpack_require__("lodash"));
const types_1 = __webpack_require__("../../libs/flowda-shared/src/interfaces/types.ts");
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
            const c = _.omitBy(_.assign({ name: k }, {
                name: k,
                column_type: this.doColumnType(k),
                format: this.doFormat(k),
                display_name: this.doDisplayName(k),
                access_type: this.doAccessType(k),
                reference: jsProp.reference ? this.doRef(k) : undefined,
                validators: this.doValidators(k),
                prisma: jsProp.prisma,
            }), _.isUndefined);
            acc.push(c);
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
        return _.omitBy({
            name: name,
            slug: (0, matchPath_1.toPath)(name),
            prisma: this.modelLevelSchema.prisma != null ? this.modelLevelSchema.prisma : undefined,
            schema_name: this.schemaName,
            primary_key: this.modelLevelSchema.primary_key || 'id',
            custom: this.jsonSchema.custom,
            display_column: this.doDisplayColumn(this.modelLevelSchema.display_column),
            display_name: this.modelLevelSchema.display_name,
            display_primary_key: this.modelLevelSchema.display_primary_key == null
                ? true
                : this.modelLevelSchema.display_primary_key === 'true',
            searchable_columns: this.modelLevelSchema.searchable_columns
                ? this.modelLevelSchema.searchable_columns.split(',')
                : undefined,
            columns: this.columns,
            associations: this.associations,
            // __jsonschema: this.jsonSchema,
        }, _.isUndefined);
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
        return _.lowerFirst(schema.split('Schema')[0]) + 'Id';
    }
};
SchemaTransformer = SchemaTransformer_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__param(1, (0, inversify_1.inject)(types_1.PrismaZodSchemaSymbol)),
    tslib_1.__metadata("design:paramtypes", [Function, Object])
], SchemaTransformer);
exports.SchemaTransformer = SchemaTransformer;


/***/ }),

/***/ "../../libs/flowda-shared/src/symbols.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FlowdaTrpcClientSymbol = exports.DynamicTableSchemaTransformerSymbol = exports.SchemaServiceSymbol = exports.DataServiceSymbol = exports.PrismaUtilsSymbol = exports.SchemaTransformerSymbol = exports.PrismaSchemaServiceSymbol = void 0;
exports.PrismaSchemaServiceSymbol = Symbol.for('PrismaSchemaService');
exports.SchemaTransformerSymbol = Symbol.for('SchemaTransformer');
exports.PrismaUtilsSymbol = Symbol.for('PrismaUtils');
exports.DataServiceSymbol = Symbol.for('DataService');
exports.SchemaServiceSymbol = Symbol.for('SchemaService');
exports.DynamicTableSchemaTransformerSymbol = Symbol.for('DynamicTableSchemaTransformer');
exports.FlowdaTrpcClientSymbol = Symbol.for('FlowdaTrpcClient');


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
    0: '#c0392b',
    1: '#f39c12',
    3: '#00BCD4',
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

/***/ "../../libs/flowda-shared/src/utils/getServices.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getServices = void 0;
const types_1 = __webpack_require__("../../libs/flowda-shared/src/interfaces/types.ts");
function getServices(servicesContainer) {
    return servicesContainer.getAll(types_1.ServiceSymbol).map((service) => {
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
plur.addSingularRule(/data/i, 'data');
plur.addSingularRule(/defs/i, 'def');
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
exports.SiteTemplateSchema = exports.AuditsSchema = exports.EmailTypeSchema = exports.RoleSchema = exports.jackson_ttlOrderByRelevanceFieldEnumSchema = exports.jackson_storeOrderByRelevanceFieldEnumSchema = exports.jackson_indexOrderByRelevanceFieldEnumSchema = exports.VerificationTokenScalarFieldEnumSchema = exports.VerificationTokenOrderByRelevanceFieldEnumSchema = exports.UserScalarFieldEnumSchema = exports.UserOrderByRelevanceFieldEnumSchema = exports.TransactionIsolationLevelSchema = exports.TagScalarFieldEnumSchema = exports.TagOrderByRelevanceFieldEnumSchema = exports.SortOrderSchema = exports.SiteTemplateScalarFieldEnumSchema = exports.SiteTemplateOrderByRelevanceFieldEnumSchema = exports.SiteTemplateDataDefScalarFieldEnumSchema = exports.SiteScalarFieldEnumSchema = exports.SiteOrderByRelevanceFieldEnumSchema = exports.SessionScalarFieldEnumSchema = exports.SessionOrderByRelevanceFieldEnumSchema = exports.SentEmailScalarFieldEnumSchema = exports.SentEmailOrderByRelevanceFieldEnumSchema = exports.ProjectUsersScalarFieldEnumSchema = exports.ProjectUsersOrderByRelevanceFieldEnumSchema = exports.ProjectScalarFieldEnumSchema = exports.ProjectOrderByRelevanceFieldEnumSchema = exports.ProjectInviteScalarFieldEnumSchema = exports.ProjectInviteOrderByRelevanceFieldEnumSchema = exports.NullableJsonNullValueInputSchema = exports.LinkScalarFieldEnumSchema = exports.LinkOrderByRelevanceFieldEnumSchema = exports.JsonNullValueInputSchema = exports.JsonNullValueFilterSchema = exports.Jackson_ttlScalarFieldEnumSchema = exports.Jackson_storeScalarFieldEnumSchema = exports.Jackson_indexScalarFieldEnumSchema = exports.DomainScalarFieldEnumSchema = exports.DomainOrderByRelevanceFieldEnumSchema = exports.CustomerScalarFieldEnumSchema = exports.CustomerOrderByRelevanceFieldEnumSchema = exports.AuditsScalarFieldEnumSchema = exports.AuditsOrderByRelevanceFieldEnumSchema = exports.AccountScalarFieldEnumSchema = exports.AccountOrderByRelevanceFieldEnumSchema = exports.InputJsonValue = exports.NullableJsonValue = exports.JsonValue = exports.transformJsonNull = void 0;
exports.jackson_ttlSchema = exports.jackson_storeSchema = exports.jackson_indexSchema = exports.TagWithRelationsSchema = exports.TagSchema = exports.LinkWithRelationsSchema = exports.LinkSchema = exports.DomainWithRelationsSchema = exports.DomainSchema = exports.SentEmailWithRelationsSchema = exports.SentEmailSchema = exports.ProjectUsersWithRelationsSchema = exports.ProjectUsersSchema = exports.ProjectInviteWithRelationsSchema = exports.ProjectInviteSchema = exports.ProjectWithRelationsSchema = exports.ProjectSchema = exports.VerificationTokenSchema = exports.SessionWithRelationsSchema = exports.SessionSchema = exports.AccountWithRelationsSchema = exports.AccountSchema = exports.UserWithRelationsSchema = exports.UserSchema = exports.SiteWithRelationsSchema = exports.SiteSchema = exports.CustomerWithRelationsSchema = exports.CustomerSchema = exports.SiteTemplateDataDefWithRelationsSchema = exports.SiteTemplateDataDefSchema = exports.SiteTemplateWithRelationsSchema = void 0;
const zod_1 = __webpack_require__("zod");
const client_cms_admin_1 = __webpack_require__("@prisma/client-cms_admin");
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
exports.AccountOrderByRelevanceFieldEnumSchema = zod_1.z.enum(['id', 'userId', 'type', 'provider', 'providerAccountId', 'refresh_token', 'access_token', 'token_type', 'scope', 'id_token', 'session_state']);
exports.AccountScalarFieldEnumSchema = zod_1.z.enum(['id', 'userId', 'type', 'provider', 'providerAccountId', 'refresh_token', 'refresh_token_expires_in', 'access_token', 'expires_at', 'token_type', 'scope', 'id_token', 'session_state']);
exports.AuditsOrderByRelevanceFieldEnumSchema = zod_1.z.enum(['auditType', 'userId', 'username', 'action', 'auditChanges']);
exports.AuditsScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'auditId', 'auditType', 'userId', 'username', 'action', 'auditChanges', 'version']);
exports.CustomerOrderByRelevanceFieldEnumSchema = zod_1.z.enum(['name']);
exports.CustomerScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'name', 'extendData']);
exports.DomainOrderByRelevanceFieldEnumSchema = zod_1.z.enum(['id', 'slug', 'target', 'type', 'description', 'projectId']);
exports.DomainScalarFieldEnumSchema = zod_1.z.enum(['id', 'slug', 'verified', 'target', 'type', 'description', 'projectId', 'primary', 'lastChecked', 'createdAt', 'updatedAt']);
exports.Jackson_indexScalarFieldEnumSchema = zod_1.z.enum(['id', 'key', 'storeKey']);
exports.Jackson_storeScalarFieldEnumSchema = zod_1.z.enum(['key', 'value', 'iv', 'tag', 'createdAt', 'modifiedAt']);
exports.Jackson_ttlScalarFieldEnumSchema = zod_1.z.enum(['key', 'expiresAt']);
exports.JsonNullValueFilterSchema = zod_1.z.enum(['DbNull', 'JsonNull', 'AnyNull',]);
exports.JsonNullValueInputSchema = zod_1.z.enum(['JsonNull',]);
exports.LinkOrderByRelevanceFieldEnumSchema = zod_1.z.enum(['id', 'domain', 'key', 'url', 'password', 'title', 'description', 'image', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'ios', 'android', 'userId', 'projectId', 'tagId']);
exports.LinkScalarFieldEnumSchema = zod_1.z.enum(['id', 'domain', 'key', 'url', 'archived', 'expiresAt', 'password', 'proxy', 'title', 'description', 'image', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'rewrite', 'ios', 'android', 'userId', 'projectId', 'clicks', 'publicStats', 'createdAt', 'updatedAt', 'tagId']);
exports.NullableJsonNullValueInputSchema = zod_1.z.enum(['DbNull', 'JsonNull',]).transform((v) => (0, exports.transformJsonNull)(v));
exports.ProjectInviteOrderByRelevanceFieldEnumSchema = zod_1.z.enum(['email', 'projectId']);
exports.ProjectInviteScalarFieldEnumSchema = zod_1.z.enum(['email', 'expires', 'projectId', 'createdAt']);
exports.ProjectOrderByRelevanceFieldEnumSchema = zod_1.z.enum(['id', 'name', 'slug', 'logo', 'password', 'type', 'plan', 'stripeId', 'region', 'endpoint', 'bucket', 'useHost']);
exports.ProjectScalarFieldEnumSchema = zod_1.z.enum(['id', 'name', 'slug', 'logo', 'password', 'type', 'usage', 'usageLimit', 'plan', 'stripeId', 'billingCycleStart', 'region', 'endpoint', 'bucket', 'useHost', 'createdAt', 'updatedAt']);
exports.ProjectUsersOrderByRelevanceFieldEnumSchema = zod_1.z.enum(['id', 'userId', 'projectId']);
exports.ProjectUsersScalarFieldEnumSchema = zod_1.z.enum(['id', 'role', 'createdAt', 'updatedAt', 'userId', 'projectId']);
exports.SentEmailOrderByRelevanceFieldEnumSchema = zod_1.z.enum(['id', 'projectId']);
exports.SentEmailScalarFieldEnumSchema = zod_1.z.enum(['id', 'type', 'createdAt', 'projectId']);
exports.SessionOrderByRelevanceFieldEnumSchema = zod_1.z.enum(['id', 'sessionToken', 'userId']);
exports.SessionScalarFieldEnumSchema = zod_1.z.enum(['id', 'sessionToken', 'userId', 'expires']);
exports.SiteOrderByRelevanceFieldEnumSchema = zod_1.z.enum(['name', 'cosUrl']);
exports.SiteScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'name', 'cosUrl', 'siteTemplateId', 'customerId', 'slotData']);
exports.SiteTemplateDataDefScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'siteTemplateId', 'defData']);
exports.SiteTemplateOrderByRelevanceFieldEnumSchema = zod_1.z.enum(['name', 'template']);
exports.SiteTemplateScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'name', 'template']);
exports.SortOrderSchema = zod_1.z.enum(['asc', 'desc']);
exports.TagOrderByRelevanceFieldEnumSchema = zod_1.z.enum(['id', 'name', 'color', 'projectId']);
exports.TagScalarFieldEnumSchema = zod_1.z.enum(['id', 'name', 'color', 'createdAt', 'updatedAt', 'projectId']);
exports.TransactionIsolationLevelSchema = zod_1.z.enum(['ReadUncommitted', 'ReadCommitted', 'RepeatableRead', 'Serializable']);
exports.UserOrderByRelevanceFieldEnumSchema = zod_1.z.enum(['id', 'name', 'email', 'image']);
exports.UserScalarFieldEnumSchema = zod_1.z.enum(['id', 'name', 'email', 'emailVerified', 'image', 'createdAt']);
exports.VerificationTokenOrderByRelevanceFieldEnumSchema = zod_1.z.enum(['identifier', 'token']);
exports.VerificationTokenScalarFieldEnumSchema = zod_1.z.enum(['identifier', 'token', 'expires']);
exports.jackson_indexOrderByRelevanceFieldEnumSchema = zod_1.z.enum(['key', 'storeKey']);
exports.jackson_storeOrderByRelevanceFieldEnumSchema = zod_1.z.enum(['key', 'value', 'iv', 'tag']);
exports.jackson_ttlOrderByRelevanceFieldEnumSchema = zod_1.z.enum(['key']);
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
    site: zod_1.z.lazy(() => exports.SiteWithRelationsSchema).array().openapi({ "model_name": "Site" }),
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
}).openapi({ "primary_key": "id", "display_name": "客户信息", "display_column": "name", "display_primary_key": "false", "searchable_columns": "name" });
exports.CustomerWithRelationsSchema = exports.CustomerSchema.merge(zod_1.z.object({
    site: zod_1.z.lazy(() => exports.SiteWithRelationsSchema).array().openapi({ "model_name": "Site" }),
}));
/////////////////////////////////////////
// SITE SCHEMA
/////////////////////////////////////////
exports.SiteSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
    name: zod_1.z.string().openapi({ "title": "网站名称" }),
    cosUrl: zod_1.z.string().openapi({ "title": "COS" }),
    siteTemplateId: zod_1.z.number().int().openapi({ "reference": "SiteTemplate" }),
    customerId: zod_1.z.number().int().openapi({ "reference": "Customer" }),
    slotData: exports.InputJsonValue,
}).openapi({ "primary_key": "id", "display_name": "网站", "display_column": "name", "display_primary_key": "false", "searchable_columns": "name" });
exports.SiteWithRelationsSchema = exports.SiteSchema.merge(zod_1.z.object({
    siteTemplate: zod_1.z.lazy(() => exports.SiteTemplateWithRelationsSchema),
    customer: zod_1.z.lazy(() => exports.CustomerWithRelationsSchema),
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
    projects: zod_1.z.lazy(() => exports.ProjectUsersWithRelationsSchema).array(),
    links: zod_1.z.lazy(() => exports.LinkWithRelationsSchema).array(),
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
});
exports.ProjectWithRelationsSchema = exports.ProjectSchema.merge(zod_1.z.object({
    users: zod_1.z.lazy(() => exports.ProjectUsersWithRelationsSchema).array(),
    invites: zod_1.z.lazy(() => exports.ProjectInviteWithRelationsSchema).array(),
    sentEmails: zod_1.z.lazy(() => exports.SentEmailWithRelationsSchema).array(),
    domains: zod_1.z.lazy(() => exports.DomainWithRelationsSchema).array(),
    links: zod_1.z.lazy(() => exports.LinkWithRelationsSchema).array(),
    tags: zod_1.z.lazy(() => exports.TagWithRelationsSchema).array(),
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
    userId: zod_1.z.string(),
    projectId: zod_1.z.string(),
});
exports.ProjectUsersWithRelationsSchema = exports.ProjectUsersSchema.merge(zod_1.z.object({
    user: zod_1.z.lazy(() => exports.UserWithRelationsSchema),
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
    projectId: zod_1.z.string().nullable(),
    clicks: zod_1.z.number().int(),
    publicStats: zod_1.z.boolean(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    tagId: zod_1.z.string().nullable(),
});
exports.LinkWithRelationsSchema = exports.LinkSchema.merge(zod_1.z.object({
    user: zod_1.z.lazy(() => exports.UserWithRelationsSchema).nullable(),
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
// JACKSON INDEX SCHEMA
/////////////////////////////////////////
exports.jackson_indexSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    key: zod_1.z.string(),
    storeKey: zod_1.z.string(),
});
/////////////////////////////////////////
// JACKSON STORE SCHEMA
/////////////////////////////////////////
exports.jackson_storeSchema = zod_1.z.object({
    key: zod_1.z.string(),
    value: zod_1.z.string(),
    iv: zod_1.z.string().nullable(),
    tag: zod_1.z.string().nullable(),
    createdAt: zod_1.z.date(),
    modifiedAt: zod_1.z.date().nullable(),
});
/////////////////////////////////////////
// JACKSON TTL SCHEMA
/////////////////////////////////////////
exports.jackson_ttlSchema = zod_1.z.object({
    key: zod_1.z.string(),
    expiresAt: zod_1.z.bigint(),
});


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

/***/ "@nestjs/schedule":
/***/ ((module) => {

module.exports = require("@nestjs/schedule");

/***/ }),

/***/ "@prisma/client-cms_admin":
/***/ ((module) => {

module.exports = require("@prisma/client-cms_admin");

/***/ }),

/***/ "@trpc/client":
/***/ ((module) => {

module.exports = require("@trpc/client");

/***/ }),

/***/ "ai-gen-utils":
/***/ ((module) => {

module.exports = require("ai-gen-utils");

/***/ }),

/***/ "cos-nodejs-sdk-v5":
/***/ ((module) => {

module.exports = require("cos-nodejs-sdk-v5");

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
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        app.enableCors();
        const globalPrefix = 'cms-admin-api';
        app.setGlobalPrefix(globalPrefix);
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
            `/${globalPrefix}/user/register`,
            `/${globalPrefix}/user/getUserInfo`,
            `/${globalPrefix}/data/menus`,
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