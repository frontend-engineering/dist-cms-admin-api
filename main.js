/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/app.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f;
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
    generatePartialSlotData(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.custom.generatePartialSlotData(dto);
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
tslib_1.__decorate([
    (0, common_1.Post)('/generatePartialSlotData'),
    (0, common_1.UseGuards)(userJwtAuth_guard_1.UserJwtAuthGuard),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_f = typeof cms_admin_services_1.GeneratePartialSlotDataSchemaDto !== "undefined" && cms_admin_services_1.GeneratePartialSlotDataSchemaDto) === "function" ? _f : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "generatePartialSlotData", null);
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
const tslib_1 = __webpack_require__("tslib");
const cms_admin_services_1 = __webpack_require__("../../libs/cms-admin-services/src/index.ts");
const client_cms_admin_1 = __webpack_require__("@prisma/client-cms_admin");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const flowda_shared_node_1 = __webpack_require__("../../libs/flowda-shared-node/src/index.ts");
const trpc_1 = __webpack_require__("./src/trpc/trpc.ts");
const cms_admin_services_trpc_server_1 = __webpack_require__("../../libs/cms-admin-services-trpc-server/src/index.ts");
const COS = __webpack_require__("cos-nodejs-sdk-v5");
console.log('---------- ENV --------------');
console.log('PROXY', cms_admin_services_1.CMS_ADMIN_ENV.PROXY);
console.log('---------- ENV --------------');
function loadModule(container) {
    const prisma = new client_cms_admin_1.PrismaClient({
        log: [
            // 'query',
            'info',
            'warn',
            'error',
        ],
    }).$extends({
        name: cms_admin_services_1.DubSyncExtname,
        query: {
            site: {
                $allOperations({ model, operation, args, query }) {
                    return tslib_1.__awaiter(this, void 0, void 0, function* () {
                        if (operation === 'update') {
                            if (typeof args.data.name === 'string' && args.where.id != null) {
                                const prevRet = yield prisma.site.findUniqueOrThrow({
                                    where: {
                                        id: args.where.id,
                                    },
                                });
                                if (prevRet.projectId != null) {
                                    console.log(`[prisma.$extend] ${model}.${operation}(${JSON.stringify(args, null, 2)})`);
                                    return prisma.project.update({
                                        where: {
                                            id: prevRet.projectId,
                                        },
                                        data: {
                                            name: args.data.name,
                                        },
                                    });
                                }
                            }
                        }
                        return query(args);
                    });
                },
            },
            project: {
                $allOperations({ model, operation, args, query }) {
                    return tslib_1.__awaiter(this, void 0, void 0, function* () {
                        if (operation === 'update') {
                            if (typeof args.where.slug === 'string') {
                                const projectRet = yield this.prisma.project.findUniqueOrThrow({
                                    where: {
                                        slug: args.where.slug,
                                    },
                                });
                                console.log(`[prisma.$extend] ${model}.${operation}(${JSON.stringify(args, null, 2)})`);
                                const ret = yield this.prisma.site.update({
                                    where: {
                                        projectId: projectRet.id,
                                    },
                                    data: {
                                        name: args.data.name,
                                    },
                                });
                                return ret;
                            }
                        }
                        return query(args);
                    });
                },
            },
        },
    });
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

/***/ "../../libs/cms-admin-services-trpc-server/src/cmsAdminServiceTrpcServer.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cmsAdminServiceTrpcServerModule = void 0;
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const trpc_service_1 = __webpack_require__("../../libs/cms-admin-services-trpc-server/src/trpc/trpc.service.ts");
const trpc_router_1 = __webpack_require__("../../libs/cms-admin-services-trpc-server/src/trpc/trpc.router.ts");
const project_router_1 = __webpack_require__("../../libs/cms-admin-services-trpc-server/src/trpc/project.router.ts");
const link_router_1 = __webpack_require__("../../libs/cms-admin-services-trpc-server/src/trpc/link.router.ts");
exports.cmsAdminServiceTrpcServerModule = new inversify_1.ContainerModule(bind => {
    bind(trpc_service_1.TrpcService).toSelf().inSingletonScope();
    bind(project_router_1.ProjectRouter).toSelf().inSingletonScope();
    bind(link_router_1.LinkRouter).toSelf().inSingletonScope();
    (0, flowda_shared_1.bindService)(bind, flowda_shared_1.ServiceSymbol, trpc_router_1.TrpcRouter);
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

/***/ "../../libs/cms-admin-services-trpc-server/src/trpc/link.router.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var LinkRouter_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LinkRouter = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const trpc_service_1 = __webpack_require__("../../libs/cms-admin-services-trpc-server/src/trpc/trpc.service.ts");
const zod_1 = __webpack_require__("zod");
const prisma_cms_admin_1 = __webpack_require__("../../libs/prisma-cms_admin/src/index.ts");
const db = tslib_1.__importStar(__webpack_require__("@prisma/client-cms_admin"));
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
let LinkRouter = LinkRouter_1 = class LinkRouter {
    constructor(trpc, prisma, loggerFactory) {
        this.trpc = trpc;
        this.prisma = prisma;
        this.router = this.trpc.router({
            findMany: this.trpc.procedure
                .input(prisma_cms_admin_1.LinkFindManyArgsSchema)
                .output(zod_1.z.array(prisma_cms_admin_1.LinkSchema.merge(zod_1.z.object({
                project: prisma_cms_admin_1.ProjectSchema.nullish(),
            }))))
                .query(({ input }) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                return this.prisma.link.findMany(input);
            })),
        });
        this.logger = loggerFactory(LinkRouter_1.name);
    }
};
LinkRouter = LinkRouter_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(trpc_service_1.TrpcService)),
    tslib_1.__param(1, (0, inversify_1.inject)(flowda_shared_1.PrismaClientSymbol)),
    tslib_1.__param(2, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof trpc_service_1.TrpcService !== "undefined" && trpc_service_1.TrpcService) === "function" ? _a : Object, typeof (_b = typeof db !== "undefined" && db.PrismaClient) === "function" ? _b : Object, Function])
], LinkRouter);
exports.LinkRouter = LinkRouter;


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
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
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
    constructor(trpc, prisma, loggerFactory) {
        this.trpc = trpc;
        this.prisma = prisma;
        this.router = this.trpc.router({
            queryLinks: this.trpc.procedure
                .input(exports.queryLinksSchema)
                .output(zod_1.z.any())
                .query(({ input }) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const siteRet = yield this.prisma.site.findUniqueOrThrow({
                    where: {
                        projectId: input.projectId,
                    },
                });
                return siteRet;
            })),
            queryProjectUsers: this.trpc.procedure
                .input(exports.queryProjectUsersSchema)
                .output(zod_1.z.any())
                .query(({ input }) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const projectUsersRet = yield this.prisma.projectUsers.findMany({
                    where: {
                        projectId: input.projectId,
                    },
                    select: {
                        userId: true,
                    },
                });
                return [];
            })),
            updateProject: this.trpc.procedure
                .input(exports.updateProjectSchema)
                .output(zod_1.z.any())
                .mutation(({ input }) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                this.logger.debug(`[updateProject] invoked, ${JSON.stringify(input, null, 2)}`);
                const ret = yield this.prisma.project.update({
                    where: {
                        slug: input.previousSlug,
                    },
                    data: Object.assign(Object.assign({}, (input.name && { name: input.name })), (input.slug && { slug: input.slug })),
                });
                return ret;
            })),
        });
        this.logger = loggerFactory(ProjectRouter_1.name);
    }
};
ProjectRouter = ProjectRouter_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(trpc_service_1.TrpcService)),
    tslib_1.__param(1, (0, inversify_1.inject)(flowda_shared_1.PrismaClientSymbol)),
    tslib_1.__param(2, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof trpc_service_1.TrpcService !== "undefined" && trpc_service_1.TrpcService) === "function" ? _a : Object, typeof (_b = typeof db !== "undefined" && db.PrismaClient) === "function" ? _b : Object, Function])
], ProjectRouter);
exports.ProjectRouter = ProjectRouter;


/***/ }),

/***/ "../../libs/cms-admin-services-trpc-server/src/trpc/trpc.router.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var TrpcRouter_1;
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TrpcRouter = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const trpc_service_1 = __webpack_require__("../../libs/cms-admin-services-trpc-server/src/trpc/trpc.service.ts");
const express_1 = __webpack_require__("@trpc/server/adapters/express");
const project_router_1 = __webpack_require__("../../libs/cms-admin-services-trpc-server/src/trpc/project.router.ts");
const link_router_1 = __webpack_require__("../../libs/cms-admin-services-trpc-server/src/trpc/link.router.ts");
let TrpcRouter = TrpcRouter_1 = class TrpcRouter {
    constructor(trpc, projectRouter, linkRouter, loggerFactory) {
        this.trpc = trpc;
        this.projectRouter = projectRouter;
        this.linkRouter = linkRouter;
        this.appRouter = this.trpc.router({
            project: this.projectRouter.router,
            link: this.linkRouter.router,
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
TrpcRouter = TrpcRouter_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(trpc_service_1.TrpcService)),
    tslib_1.__param(1, (0, inversify_1.inject)(project_router_1.ProjectRouter)),
    tslib_1.__param(2, (0, inversify_1.inject)(project_router_1.ProjectRouter)),
    tslib_1.__param(3, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof trpc_service_1.TrpcService !== "undefined" && trpc_service_1.TrpcService) === "function" ? _a : Object, typeof (_b = typeof project_router_1.ProjectRouter !== "undefined" && project_router_1.ProjectRouter) === "function" ? _b : Object, typeof (_c = typeof link_router_1.LinkRouter !== "undefined" && link_router_1.LinkRouter) === "function" ? _c : Object, Function])
], TrpcRouter);
exports.TrpcRouter = TrpcRouter;


/***/ }),

/***/ "../../libs/cms-admin-services-trpc-server/src/trpc/trpc.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TrpcService = void 0;
const tslib_1 = __webpack_require__("tslib");
const server_1 = __webpack_require__("@trpc/server");
const inversify_1 = __webpack_require__("inversify");
let TrpcService = class TrpcService {
    constructor() {
        this.trpc = server_1.initTRPC.create();
        this.procedure = this.trpc.procedure;
        this.router = this.trpc.router;
        this.mergeRouters = this.trpc.mergeRouters;
    }
};
TrpcService = tslib_1.__decorate([
    (0, inversify_1.injectable)()
], TrpcService);
exports.TrpcService = TrpcService;


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
tslib_1.__exportStar(__webpack_require__("../../libs/cms-admin-services/src/services/custom.dto.ts"), exports);
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
exports.ProjectResourceSchema = exports.CustomerResourceSchema = exports.SiteResourceSchema = exports.SiteTemplateDataDefResourceSchema = exports.SiteTemplateResourceSchema = void 0;
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
exports.ProjectResourceSchema = prisma_cms_admin_1.ProjectSchema.extend({
    __meta: (0, flowda_shared_1.meta)({
        extends: 'ProjectSchema',
    }),
}).openapi({
    custom: {
        route_prefix: '/resources/dub',
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

/***/ "../../libs/cms-admin-services/src/services/custom.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DubSyncExtname = exports.GeneratePartialSlotDataSchemaDto = exports.SubmitPreviewSiteSchemaDto = exports.GenerateSiteSchemaDto = exports.GetTemplateDataDefSchemaDto = void 0;
const zod_1 = __webpack_require__("zod");
const nestjs_zod_1 = __webpack_require__("nestjs-zod");
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
const GeneratePartialSlotDataSchema = zod_1.z.object({
    siteId: zod_1.z.number(),
    path: zod_1.z.string(),
});
class GeneratePartialSlotDataSchemaDto extends (0, nestjs_zod_1.createZodDto)(GeneratePartialSlotDataSchema) {
}
exports.GeneratePartialSlotDataSchemaDto = GeneratePartialSlotDataSchemaDto;
exports.DubSyncExtname = 'dub-sync';


/***/ }),

/***/ "../../libs/cms-admin-services/src/services/custom.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var CustomService_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const db = tslib_1.__importStar(__webpack_require__("@prisma/client-cms_admin"));
const zod_openapi_1 = __webpack_require__("@anatine/zod-openapi");
const dynamic_schema_1 = __webpack_require__("../../libs/cms-admin-services/src/lib/dynamic-schema.ts");
const _ = tslib_1.__importStar(__webpack_require__("radash"));
const Handlebars = tslib_1.__importStar(__webpack_require__("handlebars"));
const node_html_parser_1 = __webpack_require__("node-html-parser");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { generateData, generateDataPartial } = __webpack_require__("ai-gen-utils");
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
            const data = yield generateDataPartial(siteRet.customer.extendData, siteRet.slotData, dto.path);
            this.logger.debug(`[generatePartialSlotData] end invoke generateDataPartial`);
            // const htmlRet = ejs.render(tplRet.template, dto.defData)
            return data;
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
            if (!query['fields']) {
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
            const queryFields = query['fields'];
            const fields = this.toPrismaSelect(queryFields[resource]);
            const include = {};
            if (typeof query['include'] === 'string' && query['include'] !== '') {
                query['include'].split(',').forEach((inc) => {
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
                const skip = query['current'] ? (_.toNumber(query['current']) - 1) * _.toNumber(query['pageSize']) : undefined;
                const take = query['pageSize'] ? _.toNumber(query['pageSize']) : undefined;
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
exports.CustomerWithRelationsSchema = exports.CustomerSchema = exports.SiteTemplateDataDefWithRelationsSchema = exports.SiteTemplateDataDefSchema = exports.SiteTemplateWithRelationsSchema = exports.SiteTemplateSchema = exports.AuditsSchema = exports.EmailTypeSchema = exports.RoleSchema = exports.TagOrderByRelevanceFieldEnumSchema = exports.LinkOrderByRelevanceFieldEnumSchema = exports.DomainOrderByRelevanceFieldEnumSchema = exports.SentEmailOrderByRelevanceFieldEnumSchema = exports.ProjectUsersOrderByRelevanceFieldEnumSchema = exports.ProjectInviteOrderByRelevanceFieldEnumSchema = exports.ProjectOrderByRelevanceFieldEnumSchema = exports.VerificationTokenOrderByRelevanceFieldEnumSchema = exports.SessionOrderByRelevanceFieldEnumSchema = exports.AccountOrderByRelevanceFieldEnumSchema = exports.UserOrderByRelevanceFieldEnumSchema = exports.SiteOrderByRelevanceFieldEnumSchema = exports.CustomerOrderByRelevanceFieldEnumSchema = exports.JsonNullValueFilterSchema = exports.SiteTemplateOrderByRelevanceFieldEnumSchema = exports.AuditsOrderByRelevanceFieldEnumSchema = exports.NullsOrderSchema = exports.NullableJsonNullValueInputSchema = exports.JsonNullValueInputSchema = exports.SortOrderSchema = exports.TagScalarFieldEnumSchema = exports.LinkScalarFieldEnumSchema = exports.DomainScalarFieldEnumSchema = exports.SentEmailScalarFieldEnumSchema = exports.ProjectUsersScalarFieldEnumSchema = exports.ProjectInviteScalarFieldEnumSchema = exports.ProjectScalarFieldEnumSchema = exports.VerificationTokenScalarFieldEnumSchema = exports.SessionScalarFieldEnumSchema = exports.AccountScalarFieldEnumSchema = exports.UserScalarFieldEnumSchema = exports.SiteScalarFieldEnumSchema = exports.CustomerScalarFieldEnumSchema = exports.SiteTemplateDataDefScalarFieldEnumSchema = exports.SiteTemplateScalarFieldEnumSchema = exports.AuditsScalarFieldEnumSchema = exports.TransactionIsolationLevelSchema = exports.InputJsonValue = exports.NullableJsonValue = exports.JsonValue = exports.transformJsonNull = void 0;
exports.SessionArgsSchema = exports.SessionIncludeSchema = exports.AccountSelectSchema = exports.AccountArgsSchema = exports.AccountIncludeSchema = exports.UserSelectSchema = exports.UserCountOutputTypeSelectSchema = exports.UserCountOutputTypeArgsSchema = exports.UserArgsSchema = exports.UserIncludeSchema = exports.SiteSelectSchema = exports.SiteArgsSchema = exports.SiteIncludeSchema = exports.CustomerSelectSchema = exports.CustomerCountOutputTypeSelectSchema = exports.CustomerCountOutputTypeArgsSchema = exports.CustomerArgsSchema = exports.CustomerIncludeSchema = exports.SiteTemplateDataDefSelectSchema = exports.SiteTemplateDataDefArgsSchema = exports.SiteTemplateDataDefIncludeSchema = exports.SiteTemplateSelectSchema = exports.SiteTemplateCountOutputTypeSelectSchema = exports.SiteTemplateCountOutputTypeArgsSchema = exports.SiteTemplateArgsSchema = exports.SiteTemplateIncludeSchema = exports.AuditsSelectSchema = exports.TagWithRelationsSchema = exports.TagSchema = exports.LinkWithRelationsSchema = exports.LinkSchema = exports.DomainWithRelationsSchema = exports.DomainSchema = exports.SentEmailWithRelationsSchema = exports.SentEmailSchema = exports.ProjectUsersWithRelationsSchema = exports.ProjectUsersSchema = exports.ProjectInviteWithRelationsSchema = exports.ProjectInviteSchema = exports.ProjectWithRelationsSchema = exports.ProjectSchema = exports.VerificationTokenSchema = exports.SessionWithRelationsSchema = exports.SessionSchema = exports.AccountWithRelationsSchema = exports.AccountSchema = exports.UserWithRelationsSchema = exports.UserSchema = exports.SiteWithRelationsSchema = exports.SiteSchema = void 0;
exports.SiteWhereInputSchema = exports.CustomerScalarWhereWithAggregatesInputSchema = exports.CustomerOrderByWithAggregationInputSchema = exports.CustomerWhereUniqueInputSchema = exports.CustomerOrderByWithRelationAndSearchRelevanceInputSchema = exports.CustomerWhereInputSchema = exports.SiteTemplateDataDefScalarWhereWithAggregatesInputSchema = exports.SiteTemplateDataDefOrderByWithAggregationInputSchema = exports.SiteTemplateDataDefWhereUniqueInputSchema = exports.SiteTemplateDataDefOrderByWithRelationAndSearchRelevanceInputSchema = exports.SiteTemplateDataDefWhereInputSchema = exports.SiteTemplateScalarWhereWithAggregatesInputSchema = exports.SiteTemplateOrderByWithAggregationInputSchema = exports.SiteTemplateWhereUniqueInputSchema = exports.SiteTemplateOrderByWithRelationAndSearchRelevanceInputSchema = exports.SiteTemplateWhereInputSchema = exports.AuditsScalarWhereWithAggregatesInputSchema = exports.AuditsOrderByWithAggregationInputSchema = exports.AuditsWhereUniqueInputSchema = exports.AuditsOrderByWithRelationAndSearchRelevanceInputSchema = exports.AuditsWhereInputSchema = exports.TagSelectSchema = exports.TagCountOutputTypeSelectSchema = exports.TagCountOutputTypeArgsSchema = exports.TagArgsSchema = exports.TagIncludeSchema = exports.LinkSelectSchema = exports.LinkArgsSchema = exports.LinkIncludeSchema = exports.DomainSelectSchema = exports.DomainCountOutputTypeSelectSchema = exports.DomainCountOutputTypeArgsSchema = exports.DomainArgsSchema = exports.DomainIncludeSchema = exports.SentEmailSelectSchema = exports.SentEmailArgsSchema = exports.SentEmailIncludeSchema = exports.ProjectUsersSelectSchema = exports.ProjectUsersArgsSchema = exports.ProjectUsersIncludeSchema = exports.ProjectInviteSelectSchema = exports.ProjectInviteArgsSchema = exports.ProjectInviteIncludeSchema = exports.ProjectSelectSchema = exports.ProjectCountOutputTypeSelectSchema = exports.ProjectCountOutputTypeArgsSchema = exports.ProjectArgsSchema = exports.ProjectIncludeSchema = exports.VerificationTokenSelectSchema = exports.SessionSelectSchema = void 0;
exports.LinkWhereInputSchema = exports.DomainScalarWhereWithAggregatesInputSchema = exports.DomainOrderByWithAggregationInputSchema = exports.DomainWhereUniqueInputSchema = exports.DomainOrderByWithRelationAndSearchRelevanceInputSchema = exports.DomainWhereInputSchema = exports.SentEmailScalarWhereWithAggregatesInputSchema = exports.SentEmailOrderByWithAggregationInputSchema = exports.SentEmailWhereUniqueInputSchema = exports.SentEmailOrderByWithRelationAndSearchRelevanceInputSchema = exports.SentEmailWhereInputSchema = exports.ProjectUsersScalarWhereWithAggregatesInputSchema = exports.ProjectUsersOrderByWithAggregationInputSchema = exports.ProjectUsersWhereUniqueInputSchema = exports.ProjectUsersOrderByWithRelationAndSearchRelevanceInputSchema = exports.ProjectUsersWhereInputSchema = exports.ProjectInviteScalarWhereWithAggregatesInputSchema = exports.ProjectInviteOrderByWithAggregationInputSchema = exports.ProjectInviteWhereUniqueInputSchema = exports.ProjectInviteOrderByWithRelationAndSearchRelevanceInputSchema = exports.ProjectInviteWhereInputSchema = exports.ProjectScalarWhereWithAggregatesInputSchema = exports.ProjectOrderByWithAggregationInputSchema = exports.ProjectWhereUniqueInputSchema = exports.ProjectOrderByWithRelationAndSearchRelevanceInputSchema = exports.ProjectWhereInputSchema = exports.VerificationTokenScalarWhereWithAggregatesInputSchema = exports.VerificationTokenOrderByWithAggregationInputSchema = exports.VerificationTokenWhereUniqueInputSchema = exports.VerificationTokenOrderByWithRelationAndSearchRelevanceInputSchema = exports.VerificationTokenWhereInputSchema = exports.SessionScalarWhereWithAggregatesInputSchema = exports.SessionOrderByWithAggregationInputSchema = exports.SessionWhereUniqueInputSchema = exports.SessionOrderByWithRelationAndSearchRelevanceInputSchema = exports.SessionWhereInputSchema = exports.AccountScalarWhereWithAggregatesInputSchema = exports.AccountOrderByWithAggregationInputSchema = exports.AccountWhereUniqueInputSchema = exports.AccountOrderByWithRelationAndSearchRelevanceInputSchema = exports.AccountWhereInputSchema = exports.UserScalarWhereWithAggregatesInputSchema = exports.UserOrderByWithAggregationInputSchema = exports.UserWhereUniqueInputSchema = exports.UserOrderByWithRelationAndSearchRelevanceInputSchema = exports.UserWhereInputSchema = exports.SiteScalarWhereWithAggregatesInputSchema = exports.SiteOrderByWithAggregationInputSchema = exports.SiteWhereUniqueInputSchema = exports.SiteOrderByWithRelationAndSearchRelevanceInputSchema = void 0;
exports.UserUpdateManyMutationInputSchema = exports.UserCreateManyInputSchema = exports.UserUncheckedUpdateInputSchema = exports.UserUpdateInputSchema = exports.UserUncheckedCreateInputSchema = exports.UserCreateInputSchema = exports.SiteUncheckedUpdateManyInputSchema = exports.SiteUpdateManyMutationInputSchema = exports.SiteCreateManyInputSchema = exports.SiteUncheckedUpdateInputSchema = exports.SiteUpdateInputSchema = exports.SiteUncheckedCreateInputSchema = exports.SiteCreateInputSchema = exports.CustomerUncheckedUpdateManyInputSchema = exports.CustomerUpdateManyMutationInputSchema = exports.CustomerCreateManyInputSchema = exports.CustomerUncheckedUpdateInputSchema = exports.CustomerUpdateInputSchema = exports.CustomerUncheckedCreateInputSchema = exports.CustomerCreateInputSchema = exports.SiteTemplateDataDefUncheckedUpdateManyInputSchema = exports.SiteTemplateDataDefUpdateManyMutationInputSchema = exports.SiteTemplateDataDefCreateManyInputSchema = exports.SiteTemplateDataDefUncheckedUpdateInputSchema = exports.SiteTemplateDataDefUpdateInputSchema = exports.SiteTemplateDataDefUncheckedCreateInputSchema = exports.SiteTemplateDataDefCreateInputSchema = exports.SiteTemplateUncheckedUpdateManyInputSchema = exports.SiteTemplateUpdateManyMutationInputSchema = exports.SiteTemplateCreateManyInputSchema = exports.SiteTemplateUncheckedUpdateInputSchema = exports.SiteTemplateUpdateInputSchema = exports.SiteTemplateUncheckedCreateInputSchema = exports.SiteTemplateCreateInputSchema = exports.AuditsUncheckedUpdateManyInputSchema = exports.AuditsUpdateManyMutationInputSchema = exports.AuditsCreateManyInputSchema = exports.AuditsUncheckedUpdateInputSchema = exports.AuditsUpdateInputSchema = exports.AuditsUncheckedCreateInputSchema = exports.AuditsCreateInputSchema = exports.TagScalarWhereWithAggregatesInputSchema = exports.TagOrderByWithAggregationInputSchema = exports.TagWhereUniqueInputSchema = exports.TagOrderByWithRelationAndSearchRelevanceInputSchema = exports.TagWhereInputSchema = exports.LinkScalarWhereWithAggregatesInputSchema = exports.LinkOrderByWithAggregationInputSchema = exports.LinkWhereUniqueInputSchema = exports.LinkOrderByWithRelationAndSearchRelevanceInputSchema = void 0;
exports.SentEmailUncheckedUpdateManyInputSchema = exports.SentEmailUpdateManyMutationInputSchema = exports.SentEmailCreateManyInputSchema = exports.SentEmailUncheckedUpdateInputSchema = exports.SentEmailUpdateInputSchema = exports.SentEmailUncheckedCreateInputSchema = exports.SentEmailCreateInputSchema = exports.ProjectUsersUncheckedUpdateManyInputSchema = exports.ProjectUsersUpdateManyMutationInputSchema = exports.ProjectUsersCreateManyInputSchema = exports.ProjectUsersUncheckedUpdateInputSchema = exports.ProjectUsersUpdateInputSchema = exports.ProjectUsersUncheckedCreateInputSchema = exports.ProjectUsersCreateInputSchema = exports.ProjectInviteUncheckedUpdateManyInputSchema = exports.ProjectInviteUpdateManyMutationInputSchema = exports.ProjectInviteCreateManyInputSchema = exports.ProjectInviteUncheckedUpdateInputSchema = exports.ProjectInviteUpdateInputSchema = exports.ProjectInviteUncheckedCreateInputSchema = exports.ProjectInviteCreateInputSchema = exports.ProjectUncheckedUpdateManyInputSchema = exports.ProjectUpdateManyMutationInputSchema = exports.ProjectCreateManyInputSchema = exports.ProjectUncheckedUpdateInputSchema = exports.ProjectUpdateInputSchema = exports.ProjectUncheckedCreateInputSchema = exports.ProjectCreateInputSchema = exports.VerificationTokenUncheckedUpdateManyInputSchema = exports.VerificationTokenUpdateManyMutationInputSchema = exports.VerificationTokenCreateManyInputSchema = exports.VerificationTokenUncheckedUpdateInputSchema = exports.VerificationTokenUpdateInputSchema = exports.VerificationTokenUncheckedCreateInputSchema = exports.VerificationTokenCreateInputSchema = exports.SessionUncheckedUpdateManyInputSchema = exports.SessionUpdateManyMutationInputSchema = exports.SessionCreateManyInputSchema = exports.SessionUncheckedUpdateInputSchema = exports.SessionUpdateInputSchema = exports.SessionUncheckedCreateInputSchema = exports.SessionCreateInputSchema = exports.AccountUncheckedUpdateManyInputSchema = exports.AccountUpdateManyMutationInputSchema = exports.AccountCreateManyInputSchema = exports.AccountUncheckedUpdateInputSchema = exports.AccountUpdateInputSchema = exports.AccountUncheckedCreateInputSchema = exports.AccountCreateInputSchema = exports.UserUncheckedUpdateManyInputSchema = void 0;
exports.SiteTemplateDataDefCountOrderByAggregateInputSchema = exports.SiteTemplateRelationFilterSchema = exports.JsonFilterSchema = exports.BoolWithAggregatesFilterSchema = exports.SiteTemplateSumOrderByAggregateInputSchema = exports.SiteTemplateMinOrderByAggregateInputSchema = exports.SiteTemplateMaxOrderByAggregateInputSchema = exports.SiteTemplateAvgOrderByAggregateInputSchema = exports.SiteTemplateCountOrderByAggregateInputSchema = exports.SiteTemplateOrderByRelevanceInputSchema = exports.SiteOrderByRelationAggregateInputSchema = exports.SiteTemplateDataDefRelationFilterSchema = exports.SiteListRelationFilterSchema = exports.BoolFilterSchema = exports.StringNullableWithAggregatesFilterSchema = exports.StringWithAggregatesFilterSchema = exports.DateTimeWithAggregatesFilterSchema = exports.IntWithAggregatesFilterSchema = exports.AuditsSumOrderByAggregateInputSchema = exports.AuditsMinOrderByAggregateInputSchema = exports.AuditsMaxOrderByAggregateInputSchema = exports.AuditsAvgOrderByAggregateInputSchema = exports.AuditsCountOrderByAggregateInputSchema = exports.AuditsOrderByRelevanceInputSchema = exports.SortOrderInputSchema = exports.StringNullableFilterSchema = exports.StringFilterSchema = exports.DateTimeFilterSchema = exports.IntFilterSchema = exports.TagUncheckedUpdateManyInputSchema = exports.TagUpdateManyMutationInputSchema = exports.TagCreateManyInputSchema = exports.TagUncheckedUpdateInputSchema = exports.TagUpdateInputSchema = exports.TagUncheckedCreateInputSchema = exports.TagCreateInputSchema = exports.LinkUncheckedUpdateManyInputSchema = exports.LinkUpdateManyMutationInputSchema = exports.LinkCreateManyInputSchema = exports.LinkUncheckedUpdateInputSchema = exports.LinkUpdateInputSchema = exports.LinkUncheckedCreateInputSchema = exports.LinkCreateInputSchema = exports.DomainUncheckedUpdateManyInputSchema = exports.DomainUpdateManyMutationInputSchema = exports.DomainCreateManyInputSchema = exports.DomainUncheckedUpdateInputSchema = exports.DomainUpdateInputSchema = exports.DomainUncheckedCreateInputSchema = exports.DomainCreateInputSchema = void 0;
exports.VerificationTokenMinOrderByAggregateInputSchema = exports.VerificationTokenMaxOrderByAggregateInputSchema = exports.VerificationTokenCountOrderByAggregateInputSchema = exports.VerificationTokenIdentifierTokenCompoundUniqueInputSchema = exports.VerificationTokenOrderByRelevanceInputSchema = exports.SessionMinOrderByAggregateInputSchema = exports.SessionMaxOrderByAggregateInputSchema = exports.SessionCountOrderByAggregateInputSchema = exports.SessionOrderByRelevanceInputSchema = exports.IntNullableWithAggregatesFilterSchema = exports.AccountSumOrderByAggregateInputSchema = exports.AccountMinOrderByAggregateInputSchema = exports.AccountMaxOrderByAggregateInputSchema = exports.AccountAvgOrderByAggregateInputSchema = exports.AccountCountOrderByAggregateInputSchema = exports.AccountProviderProviderAccountIdCompoundUniqueInputSchema = exports.AccountOrderByRelevanceInputSchema = exports.UserRelationFilterSchema = exports.IntNullableFilterSchema = exports.DateTimeNullableWithAggregatesFilterSchema = exports.UserMinOrderByAggregateInputSchema = exports.UserMaxOrderByAggregateInputSchema = exports.UserCountOrderByAggregateInputSchema = exports.UserOrderByRelevanceInputSchema = exports.SessionOrderByRelationAggregateInputSchema = exports.AccountOrderByRelationAggregateInputSchema = exports.SessionListRelationFilterSchema = exports.AccountListRelationFilterSchema = exports.DateTimeNullableFilterSchema = exports.SiteSumOrderByAggregateInputSchema = exports.SiteMinOrderByAggregateInputSchema = exports.SiteMaxOrderByAggregateInputSchema = exports.SiteAvgOrderByAggregateInputSchema = exports.SiteCountOrderByAggregateInputSchema = exports.SiteOrderByRelevanceInputSchema = exports.ProjectRelationFilterSchema = exports.CustomerRelationFilterSchema = exports.JsonNullableWithAggregatesFilterSchema = exports.CustomerSumOrderByAggregateInputSchema = exports.CustomerMinOrderByAggregateInputSchema = exports.CustomerMaxOrderByAggregateInputSchema = exports.CustomerAvgOrderByAggregateInputSchema = exports.CustomerCountOrderByAggregateInputSchema = exports.CustomerOrderByRelevanceInputSchema = exports.JsonNullableFilterSchema = exports.JsonWithAggregatesFilterSchema = exports.SiteTemplateDataDefSumOrderByAggregateInputSchema = exports.SiteTemplateDataDefMinOrderByAggregateInputSchema = exports.SiteTemplateDataDefMaxOrderByAggregateInputSchema = exports.SiteTemplateDataDefAvgOrderByAggregateInputSchema = void 0;
exports.LinkSumOrderByAggregateInputSchema = exports.LinkMinOrderByAggregateInputSchema = exports.LinkMaxOrderByAggregateInputSchema = exports.LinkAvgOrderByAggregateInputSchema = exports.LinkCountOrderByAggregateInputSchema = exports.LinkDomainKeyCompoundUniqueInputSchema = exports.LinkOrderByRelevanceInputSchema = exports.TagRelationFilterSchema = exports.DomainRelationFilterSchema = exports.DomainMinOrderByAggregateInputSchema = exports.DomainMaxOrderByAggregateInputSchema = exports.DomainCountOrderByAggregateInputSchema = exports.DomainOrderByRelevanceInputSchema = exports.EnumEmailTypeWithAggregatesFilterSchema = exports.SentEmailMinOrderByAggregateInputSchema = exports.SentEmailMaxOrderByAggregateInputSchema = exports.SentEmailCountOrderByAggregateInputSchema = exports.SentEmailOrderByRelevanceInputSchema = exports.EnumEmailTypeFilterSchema = exports.EnumRoleWithAggregatesFilterSchema = exports.ProjectUsersMinOrderByAggregateInputSchema = exports.ProjectUsersMaxOrderByAggregateInputSchema = exports.ProjectUsersCountOrderByAggregateInputSchema = exports.ProjectUsersUserIdProjectIdCompoundUniqueInputSchema = exports.ProjectUsersOrderByRelevanceInputSchema = exports.EnumRoleFilterSchema = exports.ProjectInviteMinOrderByAggregateInputSchema = exports.ProjectInviteMaxOrderByAggregateInputSchema = exports.ProjectInviteCountOrderByAggregateInputSchema = exports.ProjectInviteEmailProjectIdCompoundUniqueInputSchema = exports.ProjectInviteOrderByRelevanceInputSchema = exports.ProjectSumOrderByAggregateInputSchema = exports.ProjectMinOrderByAggregateInputSchema = exports.ProjectMaxOrderByAggregateInputSchema = exports.ProjectAvgOrderByAggregateInputSchema = exports.ProjectCountOrderByAggregateInputSchema = exports.ProjectOrderByRelevanceInputSchema = exports.TagOrderByRelationAggregateInputSchema = exports.LinkOrderByRelationAggregateInputSchema = exports.DomainOrderByRelationAggregateInputSchema = exports.SentEmailOrderByRelationAggregateInputSchema = exports.ProjectInviteOrderByRelationAggregateInputSchema = exports.ProjectUsersOrderByRelationAggregateInputSchema = exports.SiteRelationFilterSchema = exports.TagListRelationFilterSchema = exports.LinkListRelationFilterSchema = exports.DomainListRelationFilterSchema = exports.SentEmailListRelationFilterSchema = exports.ProjectInviteListRelationFilterSchema = exports.ProjectUsersListRelationFilterSchema = void 0;
exports.TagCreateNestedManyWithoutProjectInputSchema = exports.LinkCreateNestedManyWithoutProjectInputSchema = exports.DomainCreateNestedManyWithoutProjectInputSchema = exports.SentEmailCreateNestedManyWithoutProjectInputSchema = exports.ProjectInviteCreateNestedManyWithoutProjectInputSchema = exports.ProjectUsersCreateNestedManyWithoutProjectInputSchema = exports.UserUpdateOneRequiredWithoutSessionsNestedInputSchema = exports.UserCreateNestedOneWithoutSessionsInputSchema = exports.UserUpdateOneRequiredWithoutAccountsNestedInputSchema = exports.NullableIntFieldUpdateOperationsInputSchema = exports.UserCreateNestedOneWithoutAccountsInputSchema = exports.SessionUncheckedUpdateManyWithoutUserNestedInputSchema = exports.AccountUncheckedUpdateManyWithoutUserNestedInputSchema = exports.SessionUpdateManyWithoutUserNestedInputSchema = exports.AccountUpdateManyWithoutUserNestedInputSchema = exports.NullableDateTimeFieldUpdateOperationsInputSchema = exports.SessionUncheckedCreateNestedManyWithoutUserInputSchema = exports.AccountUncheckedCreateNestedManyWithoutUserInputSchema = exports.SessionCreateNestedManyWithoutUserInputSchema = exports.AccountCreateNestedManyWithoutUserInputSchema = exports.ProjectUpdateOneWithoutSiteNestedInputSchema = exports.CustomerUpdateOneRequiredWithoutSiteNestedInputSchema = exports.SiteTemplateUpdateOneRequiredWithoutSiteNestedInputSchema = exports.ProjectCreateNestedOneWithoutSiteInputSchema = exports.CustomerCreateNestedOneWithoutSiteInputSchema = exports.SiteTemplateCreateNestedOneWithoutSiteInputSchema = exports.SiteUncheckedUpdateManyWithoutCustomerNestedInputSchema = exports.SiteUpdateManyWithoutCustomerNestedInputSchema = exports.SiteUncheckedCreateNestedManyWithoutCustomerInputSchema = exports.SiteCreateNestedManyWithoutCustomerInputSchema = exports.SiteTemplateUpdateOneRequiredWithoutSiteTemplateDataDefNestedInputSchema = exports.SiteTemplateCreateNestedOneWithoutSiteTemplateDataDefInputSchema = exports.SiteTemplateDataDefUncheckedUpdateOneWithoutSiteTemplateNestedInputSchema = exports.SiteUncheckedUpdateManyWithoutSiteTemplateNestedInputSchema = exports.SiteTemplateDataDefUpdateOneWithoutSiteTemplateNestedInputSchema = exports.SiteUpdateManyWithoutSiteTemplateNestedInputSchema = exports.BoolFieldUpdateOperationsInputSchema = exports.SiteTemplateDataDefUncheckedCreateNestedOneWithoutSiteTemplateInputSchema = exports.SiteUncheckedCreateNestedManyWithoutSiteTemplateInputSchema = exports.SiteTemplateDataDefCreateNestedOneWithoutSiteTemplateInputSchema = exports.SiteCreateNestedManyWithoutSiteTemplateInputSchema = exports.NullableStringFieldUpdateOperationsInputSchema = exports.StringFieldUpdateOperationsInputSchema = exports.IntFieldUpdateOperationsInputSchema = exports.DateTimeFieldUpdateOperationsInputSchema = exports.TagMinOrderByAggregateInputSchema = exports.TagMaxOrderByAggregateInputSchema = exports.TagCountOrderByAggregateInputSchema = exports.TagNameProjectIdCompoundUniqueInputSchema = exports.TagOrderByRelevanceInputSchema = void 0;
exports.NestedDateTimeFilterSchema = exports.NestedIntFilterSchema = exports.LinkUncheckedUpdateManyWithoutTagNestedInputSchema = exports.LinkUpdateManyWithoutTagNestedInputSchema = exports.ProjectUpdateOneRequiredWithoutTagsNestedInputSchema = exports.LinkUncheckedCreateNestedManyWithoutTagInputSchema = exports.LinkCreateNestedManyWithoutTagInputSchema = exports.ProjectCreateNestedOneWithoutTagsInputSchema = exports.TagUpdateOneWithoutLinksNestedInputSchema = exports.DomainUpdateOneWithoutLinksNestedInputSchema = exports.ProjectUpdateOneWithoutLinksNestedInputSchema = exports.TagCreateNestedOneWithoutLinksInputSchema = exports.DomainCreateNestedOneWithoutLinksInputSchema = exports.ProjectCreateNestedOneWithoutLinksInputSchema = exports.LinkUncheckedUpdateManyWithoutProjectDomainNestedInputSchema = exports.LinkUpdateManyWithoutProjectDomainNestedInputSchema = exports.ProjectUpdateOneWithoutDomainsNestedInputSchema = exports.LinkUncheckedCreateNestedManyWithoutProjectDomainInputSchema = exports.LinkCreateNestedManyWithoutProjectDomainInputSchema = exports.ProjectCreateNestedOneWithoutDomainsInputSchema = exports.ProjectUpdateOneWithoutSentEmailsNestedInputSchema = exports.EnumEmailTypeFieldUpdateOperationsInputSchema = exports.ProjectCreateNestedOneWithoutSentEmailsInputSchema = exports.ProjectUpdateOneRequiredWithoutUsersNestedInputSchema = exports.EnumRoleFieldUpdateOperationsInputSchema = exports.ProjectCreateNestedOneWithoutUsersInputSchema = exports.ProjectUpdateOneRequiredWithoutInvitesNestedInputSchema = exports.ProjectCreateNestedOneWithoutInvitesInputSchema = exports.SiteUncheckedUpdateOneWithoutProjectNestedInputSchema = exports.TagUncheckedUpdateManyWithoutProjectNestedInputSchema = exports.LinkUncheckedUpdateManyWithoutProjectNestedInputSchema = exports.DomainUncheckedUpdateManyWithoutProjectNestedInputSchema = exports.SentEmailUncheckedUpdateManyWithoutProjectNestedInputSchema = exports.ProjectInviteUncheckedUpdateManyWithoutProjectNestedInputSchema = exports.ProjectUsersUncheckedUpdateManyWithoutProjectNestedInputSchema = exports.SiteUpdateOneWithoutProjectNestedInputSchema = exports.TagUpdateManyWithoutProjectNestedInputSchema = exports.LinkUpdateManyWithoutProjectNestedInputSchema = exports.DomainUpdateManyWithoutProjectNestedInputSchema = exports.SentEmailUpdateManyWithoutProjectNestedInputSchema = exports.ProjectInviteUpdateManyWithoutProjectNestedInputSchema = exports.ProjectUsersUpdateManyWithoutProjectNestedInputSchema = exports.SiteUncheckedCreateNestedOneWithoutProjectInputSchema = exports.TagUncheckedCreateNestedManyWithoutProjectInputSchema = exports.LinkUncheckedCreateNestedManyWithoutProjectInputSchema = exports.DomainUncheckedCreateNestedManyWithoutProjectInputSchema = exports.SentEmailUncheckedCreateNestedManyWithoutProjectInputSchema = exports.ProjectInviteUncheckedCreateNestedManyWithoutProjectInputSchema = exports.ProjectUsersUncheckedCreateNestedManyWithoutProjectInputSchema = exports.SiteCreateNestedOneWithoutProjectInputSchema = void 0;
exports.SiteTemplateCreateOrConnectWithoutSiteInputSchema = exports.SiteTemplateUncheckedCreateWithoutSiteInputSchema = exports.SiteTemplateCreateWithoutSiteInputSchema = exports.SiteUpdateManyWithWhereWithoutCustomerInputSchema = exports.SiteUpdateWithWhereUniqueWithoutCustomerInputSchema = exports.SiteUpsertWithWhereUniqueWithoutCustomerInputSchema = exports.SiteCreateManyCustomerInputEnvelopeSchema = exports.SiteCreateOrConnectWithoutCustomerInputSchema = exports.SiteUncheckedCreateWithoutCustomerInputSchema = exports.SiteCreateWithoutCustomerInputSchema = exports.SiteTemplateUncheckedUpdateWithoutSiteTemplateDataDefInputSchema = exports.SiteTemplateUpdateWithoutSiteTemplateDataDefInputSchema = exports.SiteTemplateUpsertWithoutSiteTemplateDataDefInputSchema = exports.SiteTemplateCreateOrConnectWithoutSiteTemplateDataDefInputSchema = exports.SiteTemplateUncheckedCreateWithoutSiteTemplateDataDefInputSchema = exports.SiteTemplateCreateWithoutSiteTemplateDataDefInputSchema = exports.SiteTemplateDataDefUncheckedUpdateWithoutSiteTemplateInputSchema = exports.SiteTemplateDataDefUpdateWithoutSiteTemplateInputSchema = exports.SiteTemplateDataDefUpsertWithoutSiteTemplateInputSchema = exports.SiteScalarWhereInputSchema = exports.SiteUpdateManyWithWhereWithoutSiteTemplateInputSchema = exports.SiteUpdateWithWhereUniqueWithoutSiteTemplateInputSchema = exports.SiteUpsertWithWhereUniqueWithoutSiteTemplateInputSchema = exports.SiteTemplateDataDefCreateOrConnectWithoutSiteTemplateInputSchema = exports.SiteTemplateDataDefUncheckedCreateWithoutSiteTemplateInputSchema = exports.SiteTemplateDataDefCreateWithoutSiteTemplateInputSchema = exports.SiteCreateManySiteTemplateInputEnvelopeSchema = exports.SiteCreateOrConnectWithoutSiteTemplateInputSchema = exports.SiteUncheckedCreateWithoutSiteTemplateInputSchema = exports.SiteCreateWithoutSiteTemplateInputSchema = exports.NestedEnumEmailTypeWithAggregatesFilterSchema = exports.NestedEnumEmailTypeFilterSchema = exports.NestedEnumRoleWithAggregatesFilterSchema = exports.NestedEnumRoleFilterSchema = exports.NestedFloatNullableFilterSchema = exports.NestedIntNullableWithAggregatesFilterSchema = exports.NestedDateTimeNullableWithAggregatesFilterSchema = exports.NestedDateTimeNullableFilterSchema = exports.NestedJsonNullableFilterSchema = exports.NestedJsonFilterSchema = exports.NestedBoolWithAggregatesFilterSchema = exports.NestedBoolFilterSchema = exports.NestedIntNullableFilterSchema = exports.NestedStringNullableWithAggregatesFilterSchema = exports.NestedStringWithAggregatesFilterSchema = exports.NestedDateTimeWithAggregatesFilterSchema = exports.NestedFloatFilterSchema = exports.NestedIntWithAggregatesFilterSchema = exports.NestedStringNullableFilterSchema = exports.NestedStringFilterSchema = void 0;
exports.ProjectInviteCreateOrConnectWithoutProjectInputSchema = exports.ProjectInviteUncheckedCreateWithoutProjectInputSchema = exports.ProjectInviteCreateWithoutProjectInputSchema = exports.ProjectUsersCreateManyProjectInputEnvelopeSchema = exports.ProjectUsersCreateOrConnectWithoutProjectInputSchema = exports.ProjectUsersUncheckedCreateWithoutProjectInputSchema = exports.ProjectUsersCreateWithoutProjectInputSchema = exports.UserUncheckedUpdateWithoutSessionsInputSchema = exports.UserUpdateWithoutSessionsInputSchema = exports.UserUpsertWithoutSessionsInputSchema = exports.UserCreateOrConnectWithoutSessionsInputSchema = exports.UserUncheckedCreateWithoutSessionsInputSchema = exports.UserCreateWithoutSessionsInputSchema = exports.UserUncheckedUpdateWithoutAccountsInputSchema = exports.UserUpdateWithoutAccountsInputSchema = exports.UserUpsertWithoutAccountsInputSchema = exports.UserCreateOrConnectWithoutAccountsInputSchema = exports.UserUncheckedCreateWithoutAccountsInputSchema = exports.UserCreateWithoutAccountsInputSchema = exports.SessionScalarWhereInputSchema = exports.SessionUpdateManyWithWhereWithoutUserInputSchema = exports.SessionUpdateWithWhereUniqueWithoutUserInputSchema = exports.SessionUpsertWithWhereUniqueWithoutUserInputSchema = exports.AccountScalarWhereInputSchema = exports.AccountUpdateManyWithWhereWithoutUserInputSchema = exports.AccountUpdateWithWhereUniqueWithoutUserInputSchema = exports.AccountUpsertWithWhereUniqueWithoutUserInputSchema = exports.SessionCreateManyUserInputEnvelopeSchema = exports.SessionCreateOrConnectWithoutUserInputSchema = exports.SessionUncheckedCreateWithoutUserInputSchema = exports.SessionCreateWithoutUserInputSchema = exports.AccountCreateManyUserInputEnvelopeSchema = exports.AccountCreateOrConnectWithoutUserInputSchema = exports.AccountUncheckedCreateWithoutUserInputSchema = exports.AccountCreateWithoutUserInputSchema = exports.ProjectUncheckedUpdateWithoutSiteInputSchema = exports.ProjectUpdateWithoutSiteInputSchema = exports.ProjectUpsertWithoutSiteInputSchema = exports.CustomerUncheckedUpdateWithoutSiteInputSchema = exports.CustomerUpdateWithoutSiteInputSchema = exports.CustomerUpsertWithoutSiteInputSchema = exports.SiteTemplateUncheckedUpdateWithoutSiteInputSchema = exports.SiteTemplateUpdateWithoutSiteInputSchema = exports.SiteTemplateUpsertWithoutSiteInputSchema = exports.ProjectCreateOrConnectWithoutSiteInputSchema = exports.ProjectUncheckedCreateWithoutSiteInputSchema = exports.ProjectCreateWithoutSiteInputSchema = exports.CustomerCreateOrConnectWithoutSiteInputSchema = exports.CustomerUncheckedCreateWithoutSiteInputSchema = exports.CustomerCreateWithoutSiteInputSchema = void 0;
exports.ProjectCreateOrConnectWithoutInvitesInputSchema = exports.ProjectUncheckedCreateWithoutInvitesInputSchema = exports.ProjectCreateWithoutInvitesInputSchema = exports.SiteUncheckedUpdateWithoutProjectInputSchema = exports.SiteUpdateWithoutProjectInputSchema = exports.SiteUpsertWithoutProjectInputSchema = exports.TagScalarWhereInputSchema = exports.TagUpdateManyWithWhereWithoutProjectInputSchema = exports.TagUpdateWithWhereUniqueWithoutProjectInputSchema = exports.TagUpsertWithWhereUniqueWithoutProjectInputSchema = exports.LinkScalarWhereInputSchema = exports.LinkUpdateManyWithWhereWithoutProjectInputSchema = exports.LinkUpdateWithWhereUniqueWithoutProjectInputSchema = exports.LinkUpsertWithWhereUniqueWithoutProjectInputSchema = exports.DomainScalarWhereInputSchema = exports.DomainUpdateManyWithWhereWithoutProjectInputSchema = exports.DomainUpdateWithWhereUniqueWithoutProjectInputSchema = exports.DomainUpsertWithWhereUniqueWithoutProjectInputSchema = exports.SentEmailScalarWhereInputSchema = exports.SentEmailUpdateManyWithWhereWithoutProjectInputSchema = exports.SentEmailUpdateWithWhereUniqueWithoutProjectInputSchema = exports.SentEmailUpsertWithWhereUniqueWithoutProjectInputSchema = exports.ProjectInviteScalarWhereInputSchema = exports.ProjectInviteUpdateManyWithWhereWithoutProjectInputSchema = exports.ProjectInviteUpdateWithWhereUniqueWithoutProjectInputSchema = exports.ProjectInviteUpsertWithWhereUniqueWithoutProjectInputSchema = exports.ProjectUsersScalarWhereInputSchema = exports.ProjectUsersUpdateManyWithWhereWithoutProjectInputSchema = exports.ProjectUsersUpdateWithWhereUniqueWithoutProjectInputSchema = exports.ProjectUsersUpsertWithWhereUniqueWithoutProjectInputSchema = exports.SiteCreateOrConnectWithoutProjectInputSchema = exports.SiteUncheckedCreateWithoutProjectInputSchema = exports.SiteCreateWithoutProjectInputSchema = exports.TagCreateManyProjectInputEnvelopeSchema = exports.TagCreateOrConnectWithoutProjectInputSchema = exports.TagUncheckedCreateWithoutProjectInputSchema = exports.TagCreateWithoutProjectInputSchema = exports.LinkCreateManyProjectInputEnvelopeSchema = exports.LinkCreateOrConnectWithoutProjectInputSchema = exports.LinkUncheckedCreateWithoutProjectInputSchema = exports.LinkCreateWithoutProjectInputSchema = exports.DomainCreateManyProjectInputEnvelopeSchema = exports.DomainCreateOrConnectWithoutProjectInputSchema = exports.DomainUncheckedCreateWithoutProjectInputSchema = exports.DomainCreateWithoutProjectInputSchema = exports.SentEmailCreateManyProjectInputEnvelopeSchema = exports.SentEmailCreateOrConnectWithoutProjectInputSchema = exports.SentEmailUncheckedCreateWithoutProjectInputSchema = exports.SentEmailCreateWithoutProjectInputSchema = exports.ProjectInviteCreateManyProjectInputEnvelopeSchema = void 0;
exports.LinkCreateWithoutTagInputSchema = exports.ProjectCreateOrConnectWithoutTagsInputSchema = exports.ProjectUncheckedCreateWithoutTagsInputSchema = exports.ProjectCreateWithoutTagsInputSchema = exports.TagUncheckedUpdateWithoutLinksInputSchema = exports.TagUpdateWithoutLinksInputSchema = exports.TagUpsertWithoutLinksInputSchema = exports.DomainUncheckedUpdateWithoutLinksInputSchema = exports.DomainUpdateWithoutLinksInputSchema = exports.DomainUpsertWithoutLinksInputSchema = exports.ProjectUncheckedUpdateWithoutLinksInputSchema = exports.ProjectUpdateWithoutLinksInputSchema = exports.ProjectUpsertWithoutLinksInputSchema = exports.TagCreateOrConnectWithoutLinksInputSchema = exports.TagUncheckedCreateWithoutLinksInputSchema = exports.TagCreateWithoutLinksInputSchema = exports.DomainCreateOrConnectWithoutLinksInputSchema = exports.DomainUncheckedCreateWithoutLinksInputSchema = exports.DomainCreateWithoutLinksInputSchema = exports.ProjectCreateOrConnectWithoutLinksInputSchema = exports.ProjectUncheckedCreateWithoutLinksInputSchema = exports.ProjectCreateWithoutLinksInputSchema = exports.LinkUpdateManyWithWhereWithoutProjectDomainInputSchema = exports.LinkUpdateWithWhereUniqueWithoutProjectDomainInputSchema = exports.LinkUpsertWithWhereUniqueWithoutProjectDomainInputSchema = exports.ProjectUncheckedUpdateWithoutDomainsInputSchema = exports.ProjectUpdateWithoutDomainsInputSchema = exports.ProjectUpsertWithoutDomainsInputSchema = exports.LinkCreateManyProjectDomainInputEnvelopeSchema = exports.LinkCreateOrConnectWithoutProjectDomainInputSchema = exports.LinkUncheckedCreateWithoutProjectDomainInputSchema = exports.LinkCreateWithoutProjectDomainInputSchema = exports.ProjectCreateOrConnectWithoutDomainsInputSchema = exports.ProjectUncheckedCreateWithoutDomainsInputSchema = exports.ProjectCreateWithoutDomainsInputSchema = exports.ProjectUncheckedUpdateWithoutSentEmailsInputSchema = exports.ProjectUpdateWithoutSentEmailsInputSchema = exports.ProjectUpsertWithoutSentEmailsInputSchema = exports.ProjectCreateOrConnectWithoutSentEmailsInputSchema = exports.ProjectUncheckedCreateWithoutSentEmailsInputSchema = exports.ProjectCreateWithoutSentEmailsInputSchema = exports.ProjectUncheckedUpdateWithoutUsersInputSchema = exports.ProjectUpdateWithoutUsersInputSchema = exports.ProjectUpsertWithoutUsersInputSchema = exports.ProjectCreateOrConnectWithoutUsersInputSchema = exports.ProjectUncheckedCreateWithoutUsersInputSchema = exports.ProjectCreateWithoutUsersInputSchema = exports.ProjectUncheckedUpdateWithoutInvitesInputSchema = exports.ProjectUpdateWithoutInvitesInputSchema = exports.ProjectUpsertWithoutInvitesInputSchema = void 0;
exports.LinkUpdateWithoutProjectDomainInputSchema = exports.LinkCreateManyProjectDomainInputSchema = exports.TagUncheckedUpdateManyWithoutTagsInputSchema = exports.TagUncheckedUpdateWithoutProjectInputSchema = exports.TagUpdateWithoutProjectInputSchema = exports.LinkUncheckedUpdateManyWithoutLinksInputSchema = exports.LinkUncheckedUpdateWithoutProjectInputSchema = exports.LinkUpdateWithoutProjectInputSchema = exports.DomainUncheckedUpdateManyWithoutDomainsInputSchema = exports.DomainUncheckedUpdateWithoutProjectInputSchema = exports.DomainUpdateWithoutProjectInputSchema = exports.SentEmailUncheckedUpdateManyWithoutSentEmailsInputSchema = exports.SentEmailUncheckedUpdateWithoutProjectInputSchema = exports.SentEmailUpdateWithoutProjectInputSchema = exports.ProjectInviteUncheckedUpdateManyWithoutInvitesInputSchema = exports.ProjectInviteUncheckedUpdateWithoutProjectInputSchema = exports.ProjectInviteUpdateWithoutProjectInputSchema = exports.ProjectUsersUncheckedUpdateManyWithoutUsersInputSchema = exports.ProjectUsersUncheckedUpdateWithoutProjectInputSchema = exports.ProjectUsersUpdateWithoutProjectInputSchema = exports.TagCreateManyProjectInputSchema = exports.LinkCreateManyProjectInputSchema = exports.DomainCreateManyProjectInputSchema = exports.SentEmailCreateManyProjectInputSchema = exports.ProjectInviteCreateManyProjectInputSchema = exports.ProjectUsersCreateManyProjectInputSchema = exports.SessionUncheckedUpdateManyWithoutSessionsInputSchema = exports.SessionUncheckedUpdateWithoutUserInputSchema = exports.SessionUpdateWithoutUserInputSchema = exports.AccountUncheckedUpdateManyWithoutAccountsInputSchema = exports.AccountUncheckedUpdateWithoutUserInputSchema = exports.AccountUpdateWithoutUserInputSchema = exports.SessionCreateManyUserInputSchema = exports.AccountCreateManyUserInputSchema = exports.SiteUncheckedUpdateWithoutCustomerInputSchema = exports.SiteUpdateWithoutCustomerInputSchema = exports.SiteCreateManyCustomerInputSchema = exports.SiteUncheckedUpdateManyWithoutSiteInputSchema = exports.SiteUncheckedUpdateWithoutSiteTemplateInputSchema = exports.SiteUpdateWithoutSiteTemplateInputSchema = exports.SiteCreateManySiteTemplateInputSchema = exports.LinkUpdateManyWithWhereWithoutTagInputSchema = exports.LinkUpdateWithWhereUniqueWithoutTagInputSchema = exports.LinkUpsertWithWhereUniqueWithoutTagInputSchema = exports.ProjectUncheckedUpdateWithoutTagsInputSchema = exports.ProjectUpdateWithoutTagsInputSchema = exports.ProjectUpsertWithoutTagsInputSchema = exports.LinkCreateManyTagInputEnvelopeSchema = exports.LinkCreateOrConnectWithoutTagInputSchema = exports.LinkUncheckedCreateWithoutTagInputSchema = void 0;
exports.AccountAggregateArgsSchema = exports.AccountFindManyArgsSchema = exports.AccountFindFirstOrThrowArgsSchema = exports.AccountFindFirstArgsSchema = exports.UserFindUniqueOrThrowArgsSchema = exports.UserFindUniqueArgsSchema = exports.UserGroupByArgsSchema = exports.UserAggregateArgsSchema = exports.UserFindManyArgsSchema = exports.UserFindFirstOrThrowArgsSchema = exports.UserFindFirstArgsSchema = exports.SiteFindUniqueOrThrowArgsSchema = exports.SiteFindUniqueArgsSchema = exports.SiteGroupByArgsSchema = exports.SiteAggregateArgsSchema = exports.SiteFindManyArgsSchema = exports.SiteFindFirstOrThrowArgsSchema = exports.SiteFindFirstArgsSchema = exports.CustomerFindUniqueOrThrowArgsSchema = exports.CustomerFindUniqueArgsSchema = exports.CustomerGroupByArgsSchema = exports.CustomerAggregateArgsSchema = exports.CustomerFindManyArgsSchema = exports.CustomerFindFirstOrThrowArgsSchema = exports.CustomerFindFirstArgsSchema = exports.SiteTemplateDataDefFindUniqueOrThrowArgsSchema = exports.SiteTemplateDataDefFindUniqueArgsSchema = exports.SiteTemplateDataDefGroupByArgsSchema = exports.SiteTemplateDataDefAggregateArgsSchema = exports.SiteTemplateDataDefFindManyArgsSchema = exports.SiteTemplateDataDefFindFirstOrThrowArgsSchema = exports.SiteTemplateDataDefFindFirstArgsSchema = exports.SiteTemplateFindUniqueOrThrowArgsSchema = exports.SiteTemplateFindUniqueArgsSchema = exports.SiteTemplateGroupByArgsSchema = exports.SiteTemplateAggregateArgsSchema = exports.SiteTemplateFindManyArgsSchema = exports.SiteTemplateFindFirstOrThrowArgsSchema = exports.SiteTemplateFindFirstArgsSchema = exports.AuditsFindUniqueOrThrowArgsSchema = exports.AuditsFindUniqueArgsSchema = exports.AuditsGroupByArgsSchema = exports.AuditsAggregateArgsSchema = exports.AuditsFindManyArgsSchema = exports.AuditsFindFirstOrThrowArgsSchema = exports.AuditsFindFirstArgsSchema = exports.LinkUncheckedUpdateWithoutTagInputSchema = exports.LinkUpdateWithoutTagInputSchema = exports.LinkCreateManyTagInputSchema = exports.LinkUncheckedUpdateWithoutProjectDomainInputSchema = void 0;
exports.DomainGroupByArgsSchema = exports.DomainAggregateArgsSchema = exports.DomainFindManyArgsSchema = exports.DomainFindFirstOrThrowArgsSchema = exports.DomainFindFirstArgsSchema = exports.SentEmailFindUniqueOrThrowArgsSchema = exports.SentEmailFindUniqueArgsSchema = exports.SentEmailGroupByArgsSchema = exports.SentEmailAggregateArgsSchema = exports.SentEmailFindManyArgsSchema = exports.SentEmailFindFirstOrThrowArgsSchema = exports.SentEmailFindFirstArgsSchema = exports.ProjectUsersFindUniqueOrThrowArgsSchema = exports.ProjectUsersFindUniqueArgsSchema = exports.ProjectUsersGroupByArgsSchema = exports.ProjectUsersAggregateArgsSchema = exports.ProjectUsersFindManyArgsSchema = exports.ProjectUsersFindFirstOrThrowArgsSchema = exports.ProjectUsersFindFirstArgsSchema = exports.ProjectInviteFindUniqueOrThrowArgsSchema = exports.ProjectInviteFindUniqueArgsSchema = exports.ProjectInviteGroupByArgsSchema = exports.ProjectInviteAggregateArgsSchema = exports.ProjectInviteFindManyArgsSchema = exports.ProjectInviteFindFirstOrThrowArgsSchema = exports.ProjectInviteFindFirstArgsSchema = exports.ProjectFindUniqueOrThrowArgsSchema = exports.ProjectFindUniqueArgsSchema = exports.ProjectGroupByArgsSchema = exports.ProjectAggregateArgsSchema = exports.ProjectFindManyArgsSchema = exports.ProjectFindFirstOrThrowArgsSchema = exports.ProjectFindFirstArgsSchema = exports.VerificationTokenFindUniqueOrThrowArgsSchema = exports.VerificationTokenFindUniqueArgsSchema = exports.VerificationTokenGroupByArgsSchema = exports.VerificationTokenAggregateArgsSchema = exports.VerificationTokenFindManyArgsSchema = exports.VerificationTokenFindFirstOrThrowArgsSchema = exports.VerificationTokenFindFirstArgsSchema = exports.SessionFindUniqueOrThrowArgsSchema = exports.SessionFindUniqueArgsSchema = exports.SessionGroupByArgsSchema = exports.SessionAggregateArgsSchema = exports.SessionFindManyArgsSchema = exports.SessionFindFirstOrThrowArgsSchema = exports.SessionFindFirstArgsSchema = exports.AccountFindUniqueOrThrowArgsSchema = exports.AccountFindUniqueArgsSchema = exports.AccountGroupByArgsSchema = void 0;
exports.SiteUpdateManyArgsSchema = exports.SiteUpdateArgsSchema = exports.SiteDeleteArgsSchema = exports.SiteCreateManyArgsSchema = exports.SiteUpsertArgsSchema = exports.SiteCreateArgsSchema = exports.CustomerDeleteManyArgsSchema = exports.CustomerUpdateManyArgsSchema = exports.CustomerUpdateArgsSchema = exports.CustomerDeleteArgsSchema = exports.CustomerCreateManyArgsSchema = exports.CustomerUpsertArgsSchema = exports.CustomerCreateArgsSchema = exports.SiteTemplateDataDefDeleteManyArgsSchema = exports.SiteTemplateDataDefUpdateManyArgsSchema = exports.SiteTemplateDataDefUpdateArgsSchema = exports.SiteTemplateDataDefDeleteArgsSchema = exports.SiteTemplateDataDefCreateManyArgsSchema = exports.SiteTemplateDataDefUpsertArgsSchema = exports.SiteTemplateDataDefCreateArgsSchema = exports.SiteTemplateDeleteManyArgsSchema = exports.SiteTemplateUpdateManyArgsSchema = exports.SiteTemplateUpdateArgsSchema = exports.SiteTemplateDeleteArgsSchema = exports.SiteTemplateCreateManyArgsSchema = exports.SiteTemplateUpsertArgsSchema = exports.SiteTemplateCreateArgsSchema = exports.AuditsDeleteManyArgsSchema = exports.AuditsUpdateManyArgsSchema = exports.AuditsUpdateArgsSchema = exports.AuditsDeleteArgsSchema = exports.AuditsCreateManyArgsSchema = exports.AuditsUpsertArgsSchema = exports.AuditsCreateArgsSchema = exports.TagFindUniqueOrThrowArgsSchema = exports.TagFindUniqueArgsSchema = exports.TagGroupByArgsSchema = exports.TagAggregateArgsSchema = exports.TagFindManyArgsSchema = exports.TagFindFirstOrThrowArgsSchema = exports.TagFindFirstArgsSchema = exports.LinkFindUniqueOrThrowArgsSchema = exports.LinkFindUniqueArgsSchema = exports.LinkGroupByArgsSchema = exports.LinkAggregateArgsSchema = exports.LinkFindManyArgsSchema = exports.LinkFindFirstOrThrowArgsSchema = exports.LinkFindFirstArgsSchema = exports.DomainFindUniqueOrThrowArgsSchema = exports.DomainFindUniqueArgsSchema = void 0;
exports.ProjectUsersDeleteManyArgsSchema = exports.ProjectUsersUpdateManyArgsSchema = exports.ProjectUsersUpdateArgsSchema = exports.ProjectUsersDeleteArgsSchema = exports.ProjectUsersCreateManyArgsSchema = exports.ProjectUsersUpsertArgsSchema = exports.ProjectUsersCreateArgsSchema = exports.ProjectInviteDeleteManyArgsSchema = exports.ProjectInviteUpdateManyArgsSchema = exports.ProjectInviteUpdateArgsSchema = exports.ProjectInviteDeleteArgsSchema = exports.ProjectInviteCreateManyArgsSchema = exports.ProjectInviteUpsertArgsSchema = exports.ProjectInviteCreateArgsSchema = exports.ProjectDeleteManyArgsSchema = exports.ProjectUpdateManyArgsSchema = exports.ProjectUpdateArgsSchema = exports.ProjectDeleteArgsSchema = exports.ProjectCreateManyArgsSchema = exports.ProjectUpsertArgsSchema = exports.ProjectCreateArgsSchema = exports.VerificationTokenDeleteManyArgsSchema = exports.VerificationTokenUpdateManyArgsSchema = exports.VerificationTokenUpdateArgsSchema = exports.VerificationTokenDeleteArgsSchema = exports.VerificationTokenCreateManyArgsSchema = exports.VerificationTokenUpsertArgsSchema = exports.VerificationTokenCreateArgsSchema = exports.SessionDeleteManyArgsSchema = exports.SessionUpdateManyArgsSchema = exports.SessionUpdateArgsSchema = exports.SessionDeleteArgsSchema = exports.SessionCreateManyArgsSchema = exports.SessionUpsertArgsSchema = exports.SessionCreateArgsSchema = exports.AccountDeleteManyArgsSchema = exports.AccountUpdateManyArgsSchema = exports.AccountUpdateArgsSchema = exports.AccountDeleteArgsSchema = exports.AccountCreateManyArgsSchema = exports.AccountUpsertArgsSchema = exports.AccountCreateArgsSchema = exports.UserDeleteManyArgsSchema = exports.UserUpdateManyArgsSchema = exports.UserUpdateArgsSchema = exports.UserDeleteArgsSchema = exports.UserCreateManyArgsSchema = exports.UserUpsertArgsSchema = exports.UserCreateArgsSchema = exports.SiteDeleteManyArgsSchema = void 0;
exports.TagDeleteManyArgsSchema = exports.TagUpdateManyArgsSchema = exports.TagUpdateArgsSchema = exports.TagDeleteArgsSchema = exports.TagCreateManyArgsSchema = exports.TagUpsertArgsSchema = exports.TagCreateArgsSchema = exports.LinkDeleteManyArgsSchema = exports.LinkUpdateManyArgsSchema = exports.LinkUpdateArgsSchema = exports.LinkDeleteArgsSchema = exports.LinkCreateManyArgsSchema = exports.LinkUpsertArgsSchema = exports.LinkCreateArgsSchema = exports.DomainDeleteManyArgsSchema = exports.DomainUpdateManyArgsSchema = exports.DomainUpdateArgsSchema = exports.DomainDeleteArgsSchema = exports.DomainCreateManyArgsSchema = exports.DomainUpsertArgsSchema = exports.DomainCreateArgsSchema = exports.SentEmailDeleteManyArgsSchema = exports.SentEmailUpdateManyArgsSchema = exports.SentEmailUpdateArgsSchema = exports.SentEmailDeleteArgsSchema = exports.SentEmailCreateManyArgsSchema = exports.SentEmailUpsertArgsSchema = exports.SentEmailCreateArgsSchema = void 0;
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
exports.TransactionIsolationLevelSchema = zod_1.z.enum(['ReadUncommitted', 'ReadCommitted', 'RepeatableRead', 'Serializable']);
exports.AuditsScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'auditId', 'auditType', 'userId', 'username', 'action', 'auditChanges', 'version']);
exports.SiteTemplateScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'name', 'template']);
exports.SiteTemplateDataDefScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'siteTemplateId', 'defData']);
exports.CustomerScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'name', 'extendData']);
exports.SiteScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'name', 'cosUrl', 'siteTemplateId', 'customerId', 'slotData', 'projectId']);
exports.UserScalarFieldEnumSchema = zod_1.z.enum(['id', 'name', 'email', 'emailVerified', 'image', 'createdAt']);
exports.AccountScalarFieldEnumSchema = zod_1.z.enum(['id', 'userId', 'type', 'provider', 'providerAccountId', 'refresh_token', 'refresh_token_expires_in', 'access_token', 'expires_at', 'token_type', 'scope', 'id_token', 'session_state']);
exports.SessionScalarFieldEnumSchema = zod_1.z.enum(['id', 'sessionToken', 'userId', 'expires']);
exports.VerificationTokenScalarFieldEnumSchema = zod_1.z.enum(['identifier', 'token', 'expires']);
exports.ProjectScalarFieldEnumSchema = zod_1.z.enum(['id', 'name', 'slug', 'logo', 'password', 'type', 'usage', 'usageLimit', 'plan', 'stripeId', 'billingCycleStart', 'region', 'endpoint', 'bucket', 'useHost', 'createdAt', 'updatedAt', 'isDeleted']);
exports.ProjectInviteScalarFieldEnumSchema = zod_1.z.enum(['email', 'expires', 'projectId', 'createdAt']);
exports.ProjectUsersScalarFieldEnumSchema = zod_1.z.enum(['id', 'role', 'createdAt', 'updatedAt', 'userId', 'projectId']);
exports.SentEmailScalarFieldEnumSchema = zod_1.z.enum(['id', 'type', 'createdAt', 'projectId']);
exports.DomainScalarFieldEnumSchema = zod_1.z.enum(['id', 'slug', 'verified', 'target', 'type', 'description', 'projectId', 'primary', 'lastChecked', 'createdAt', 'updatedAt']);
exports.LinkScalarFieldEnumSchema = zod_1.z.enum(['id', 'domain', 'key', 'url', 'archived', 'expiresAt', 'password', 'proxy', 'title', 'description', 'image', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'rewrite', 'ios', 'android', 'userId', 'projectId', 'clicks', 'publicStats', 'createdAt', 'updatedAt', 'tagId']);
exports.TagScalarFieldEnumSchema = zod_1.z.enum(['id', 'name', 'color', 'createdAt', 'updatedAt', 'projectId']);
exports.SortOrderSchema = zod_1.z.enum(['asc', 'desc']);
exports.JsonNullValueInputSchema = zod_1.z.enum(['JsonNull',]);
exports.NullableJsonNullValueInputSchema = zod_1.z.enum(['DbNull', 'JsonNull',]).transform((v) => (0, exports.transformJsonNull)(v));
exports.NullsOrderSchema = zod_1.z.enum(['first', 'last']);
exports.AuditsOrderByRelevanceFieldEnumSchema = zod_1.z.enum(['auditType', 'userId', 'username', 'action', 'auditChanges']);
exports.SiteTemplateOrderByRelevanceFieldEnumSchema = zod_1.z.enum(['name', 'template']);
exports.JsonNullValueFilterSchema = zod_1.z.enum(['DbNull', 'JsonNull', 'AnyNull',]);
exports.CustomerOrderByRelevanceFieldEnumSchema = zod_1.z.enum(['name']);
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
    projectId: zod_1.z.string().nullable().openapi({ "title": "关联项目" }),
}).openapi({ "primary_key": "id", "display_name": "网站", "display_column": "name", "display_primary_key": "false", "searchable_columns": "name" });
exports.SiteWithRelationsSchema = exports.SiteSchema.merge(zod_1.z.object({
    siteTemplate: zod_1.z.lazy(() => exports.SiteTemplateWithRelationsSchema),
    customer: zod_1.z.lazy(() => exports.CustomerWithRelationsSchema),
    project: zod_1.z.lazy(() => exports.ProjectWithRelationsSchema).nullable(),
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
    users: zod_1.z.lazy(() => exports.ProjectUsersWithRelationsSchema).array(),
    invites: zod_1.z.lazy(() => exports.ProjectInviteWithRelationsSchema).array(),
    sentEmails: zod_1.z.lazy(() => exports.SentEmailWithRelationsSchema).array(),
    domains: zod_1.z.lazy(() => exports.DomainWithRelationsSchema).array(),
    links: zod_1.z.lazy(() => exports.LinkWithRelationsSchema).array(),
    tags: zod_1.z.lazy(() => exports.TagWithRelationsSchema).array(),
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
    projectId: zod_1.z.string(),
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
    projectId: zod_1.z.string().nullable(),
    clicks: zod_1.z.number().int(),
    publicStats: zod_1.z.boolean(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    tagId: zod_1.z.string().nullable(),
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
// SELECT & INCLUDE
/////////////////////////////////////////
// AUDITS
//------------------------------------------------------
exports.AuditsSelectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(),
    createdAt: zod_1.z.boolean().optional(),
    auditId: zod_1.z.boolean().optional(),
    auditType: zod_1.z.boolean().optional(),
    userId: zod_1.z.boolean().optional(),
    username: zod_1.z.boolean().optional(),
    action: zod_1.z.boolean().optional(),
    auditChanges: zod_1.z.boolean().optional(),
    version: zod_1.z.boolean().optional(),
}).strict();
// SITE TEMPLATE
//------------------------------------------------------
exports.SiteTemplateIncludeSchema = zod_1.z.object({
    site: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.SiteFindManyArgsSchema)]).optional(),
    siteTemplateDataDef: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.SiteTemplateDataDefArgsSchema)]).optional(),
    _count: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.SiteTemplateCountOutputTypeArgsSchema)]).optional(),
}).strict();
exports.SiteTemplateArgsSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => exports.SiteTemplateSelectSchema).optional(),
    include: zod_1.z.lazy(() => exports.SiteTemplateIncludeSchema).optional(),
}).strict();
exports.SiteTemplateCountOutputTypeArgsSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => exports.SiteTemplateCountOutputTypeSelectSchema).nullish(),
}).strict();
exports.SiteTemplateCountOutputTypeSelectSchema = zod_1.z.object({
    site: zod_1.z.boolean().optional(),
}).strict();
exports.SiteTemplateSelectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(),
    createdAt: zod_1.z.boolean().optional(),
    updatedAt: zod_1.z.boolean().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    name: zod_1.z.boolean().optional(),
    template: zod_1.z.boolean().optional(),
    site: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.SiteFindManyArgsSchema)]).optional(),
    siteTemplateDataDef: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.SiteTemplateDataDefArgsSchema)]).optional(),
    _count: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.SiteTemplateCountOutputTypeArgsSchema)]).optional(),
}).strict();
// SITE TEMPLATE DATA DEF
//------------------------------------------------------
exports.SiteTemplateDataDefIncludeSchema = zod_1.z.object({
    siteTemplate: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.SiteTemplateArgsSchema)]).optional(),
}).strict();
exports.SiteTemplateDataDefArgsSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => exports.SiteTemplateDataDefSelectSchema).optional(),
    include: zod_1.z.lazy(() => exports.SiteTemplateDataDefIncludeSchema).optional(),
}).strict();
exports.SiteTemplateDataDefSelectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(),
    createdAt: zod_1.z.boolean().optional(),
    updatedAt: zod_1.z.boolean().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    siteTemplateId: zod_1.z.boolean().optional(),
    defData: zod_1.z.boolean().optional(),
    siteTemplate: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.SiteTemplateArgsSchema)]).optional(),
}).strict();
// CUSTOMER
//------------------------------------------------------
exports.CustomerIncludeSchema = zod_1.z.object({
    site: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.SiteFindManyArgsSchema)]).optional(),
    _count: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.CustomerCountOutputTypeArgsSchema)]).optional(),
}).strict();
exports.CustomerArgsSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => exports.CustomerSelectSchema).optional(),
    include: zod_1.z.lazy(() => exports.CustomerIncludeSchema).optional(),
}).strict();
exports.CustomerCountOutputTypeArgsSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => exports.CustomerCountOutputTypeSelectSchema).nullish(),
}).strict();
exports.CustomerCountOutputTypeSelectSchema = zod_1.z.object({
    site: zod_1.z.boolean().optional(),
}).strict();
exports.CustomerSelectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(),
    createdAt: zod_1.z.boolean().optional(),
    updatedAt: zod_1.z.boolean().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    name: zod_1.z.boolean().optional(),
    extendData: zod_1.z.boolean().optional(),
    site: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.SiteFindManyArgsSchema)]).optional(),
    _count: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.CustomerCountOutputTypeArgsSchema)]).optional(),
}).strict();
// SITE
//------------------------------------------------------
exports.SiteIncludeSchema = zod_1.z.object({
    siteTemplate: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.SiteTemplateArgsSchema)]).optional(),
    customer: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.CustomerArgsSchema)]).optional(),
    project: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.ProjectArgsSchema)]).optional(),
}).strict();
exports.SiteArgsSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => exports.SiteSelectSchema).optional(),
    include: zod_1.z.lazy(() => exports.SiteIncludeSchema).optional(),
}).strict();
exports.SiteSelectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(),
    createdAt: zod_1.z.boolean().optional(),
    updatedAt: zod_1.z.boolean().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    name: zod_1.z.boolean().optional(),
    cosUrl: zod_1.z.boolean().optional(),
    siteTemplateId: zod_1.z.boolean().optional(),
    customerId: zod_1.z.boolean().optional(),
    slotData: zod_1.z.boolean().optional(),
    projectId: zod_1.z.boolean().optional(),
    siteTemplate: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.SiteTemplateArgsSchema)]).optional(),
    customer: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.CustomerArgsSchema)]).optional(),
    project: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.ProjectArgsSchema)]).optional(),
}).strict();
// USER
//------------------------------------------------------
exports.UserIncludeSchema = zod_1.z.object({
    accounts: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.AccountFindManyArgsSchema)]).optional(),
    sessions: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.SessionFindManyArgsSchema)]).optional(),
    _count: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.UserCountOutputTypeArgsSchema)]).optional(),
}).strict();
exports.UserArgsSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => exports.UserSelectSchema).optional(),
    include: zod_1.z.lazy(() => exports.UserIncludeSchema).optional(),
}).strict();
exports.UserCountOutputTypeArgsSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => exports.UserCountOutputTypeSelectSchema).nullish(),
}).strict();
exports.UserCountOutputTypeSelectSchema = zod_1.z.object({
    accounts: zod_1.z.boolean().optional(),
    sessions: zod_1.z.boolean().optional(),
}).strict();
exports.UserSelectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(),
    name: zod_1.z.boolean().optional(),
    email: zod_1.z.boolean().optional(),
    emailVerified: zod_1.z.boolean().optional(),
    image: zod_1.z.boolean().optional(),
    createdAt: zod_1.z.boolean().optional(),
    accounts: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.AccountFindManyArgsSchema)]).optional(),
    sessions: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.SessionFindManyArgsSchema)]).optional(),
    _count: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.UserCountOutputTypeArgsSchema)]).optional(),
}).strict();
// ACCOUNT
//------------------------------------------------------
exports.AccountIncludeSchema = zod_1.z.object({
    user: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.UserArgsSchema)]).optional(),
}).strict();
exports.AccountArgsSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => exports.AccountSelectSchema).optional(),
    include: zod_1.z.lazy(() => exports.AccountIncludeSchema).optional(),
}).strict();
exports.AccountSelectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(),
    userId: zod_1.z.boolean().optional(),
    type: zod_1.z.boolean().optional(),
    provider: zod_1.z.boolean().optional(),
    providerAccountId: zod_1.z.boolean().optional(),
    refresh_token: zod_1.z.boolean().optional(),
    refresh_token_expires_in: zod_1.z.boolean().optional(),
    access_token: zod_1.z.boolean().optional(),
    expires_at: zod_1.z.boolean().optional(),
    token_type: zod_1.z.boolean().optional(),
    scope: zod_1.z.boolean().optional(),
    id_token: zod_1.z.boolean().optional(),
    session_state: zod_1.z.boolean().optional(),
    user: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.UserArgsSchema)]).optional(),
}).strict();
// SESSION
//------------------------------------------------------
exports.SessionIncludeSchema = zod_1.z.object({
    user: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.UserArgsSchema)]).optional(),
}).strict();
exports.SessionArgsSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => exports.SessionSelectSchema).optional(),
    include: zod_1.z.lazy(() => exports.SessionIncludeSchema).optional(),
}).strict();
exports.SessionSelectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(),
    sessionToken: zod_1.z.boolean().optional(),
    userId: zod_1.z.boolean().optional(),
    expires: zod_1.z.boolean().optional(),
    user: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.UserArgsSchema)]).optional(),
}).strict();
// VERIFICATION TOKEN
//------------------------------------------------------
exports.VerificationTokenSelectSchema = zod_1.z.object({
    identifier: zod_1.z.boolean().optional(),
    token: zod_1.z.boolean().optional(),
    expires: zod_1.z.boolean().optional(),
}).strict();
// PROJECT
//------------------------------------------------------
exports.ProjectIncludeSchema = zod_1.z.object({
    users: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.ProjectUsersFindManyArgsSchema)]).optional(),
    invites: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.ProjectInviteFindManyArgsSchema)]).optional(),
    sentEmails: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.SentEmailFindManyArgsSchema)]).optional(),
    domains: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.DomainFindManyArgsSchema)]).optional(),
    links: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.LinkFindManyArgsSchema)]).optional(),
    tags: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.TagFindManyArgsSchema)]).optional(),
    site: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.SiteArgsSchema)]).optional(),
    _count: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.ProjectCountOutputTypeArgsSchema)]).optional(),
}).strict();
exports.ProjectArgsSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => exports.ProjectSelectSchema).optional(),
    include: zod_1.z.lazy(() => exports.ProjectIncludeSchema).optional(),
}).strict();
exports.ProjectCountOutputTypeArgsSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => exports.ProjectCountOutputTypeSelectSchema).nullish(),
}).strict();
exports.ProjectCountOutputTypeSelectSchema = zod_1.z.object({
    users: zod_1.z.boolean().optional(),
    invites: zod_1.z.boolean().optional(),
    sentEmails: zod_1.z.boolean().optional(),
    domains: zod_1.z.boolean().optional(),
    links: zod_1.z.boolean().optional(),
    tags: zod_1.z.boolean().optional(),
}).strict();
exports.ProjectSelectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(),
    name: zod_1.z.boolean().optional(),
    slug: zod_1.z.boolean().optional(),
    logo: zod_1.z.boolean().optional(),
    password: zod_1.z.boolean().optional(),
    type: zod_1.z.boolean().optional(),
    usage: zod_1.z.boolean().optional(),
    usageLimit: zod_1.z.boolean().optional(),
    plan: zod_1.z.boolean().optional(),
    stripeId: zod_1.z.boolean().optional(),
    billingCycleStart: zod_1.z.boolean().optional(),
    region: zod_1.z.boolean().optional(),
    endpoint: zod_1.z.boolean().optional(),
    bucket: zod_1.z.boolean().optional(),
    useHost: zod_1.z.boolean().optional(),
    createdAt: zod_1.z.boolean().optional(),
    updatedAt: zod_1.z.boolean().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    users: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.ProjectUsersFindManyArgsSchema)]).optional(),
    invites: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.ProjectInviteFindManyArgsSchema)]).optional(),
    sentEmails: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.SentEmailFindManyArgsSchema)]).optional(),
    domains: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.DomainFindManyArgsSchema)]).optional(),
    links: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.LinkFindManyArgsSchema)]).optional(),
    tags: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.TagFindManyArgsSchema)]).optional(),
    site: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.SiteArgsSchema)]).optional(),
    _count: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.ProjectCountOutputTypeArgsSchema)]).optional(),
}).strict();
// PROJECT INVITE
//------------------------------------------------------
exports.ProjectInviteIncludeSchema = zod_1.z.object({
    project: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.ProjectArgsSchema)]).optional(),
}).strict();
exports.ProjectInviteArgsSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => exports.ProjectInviteSelectSchema).optional(),
    include: zod_1.z.lazy(() => exports.ProjectInviteIncludeSchema).optional(),
}).strict();
exports.ProjectInviteSelectSchema = zod_1.z.object({
    email: zod_1.z.boolean().optional(),
    expires: zod_1.z.boolean().optional(),
    projectId: zod_1.z.boolean().optional(),
    createdAt: zod_1.z.boolean().optional(),
    project: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.ProjectArgsSchema)]).optional(),
}).strict();
// PROJECT USERS
//------------------------------------------------------
exports.ProjectUsersIncludeSchema = zod_1.z.object({
    project: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.ProjectArgsSchema)]).optional(),
}).strict();
exports.ProjectUsersArgsSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => exports.ProjectUsersSelectSchema).optional(),
    include: zod_1.z.lazy(() => exports.ProjectUsersIncludeSchema).optional(),
}).strict();
exports.ProjectUsersSelectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(),
    role: zod_1.z.boolean().optional(),
    createdAt: zod_1.z.boolean().optional(),
    updatedAt: zod_1.z.boolean().optional(),
    userId: zod_1.z.boolean().optional(),
    projectId: zod_1.z.boolean().optional(),
    project: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.ProjectArgsSchema)]).optional(),
}).strict();
// SENT EMAIL
//------------------------------------------------------
exports.SentEmailIncludeSchema = zod_1.z.object({
    project: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.ProjectArgsSchema)]).optional(),
}).strict();
exports.SentEmailArgsSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => exports.SentEmailSelectSchema).optional(),
    include: zod_1.z.lazy(() => exports.SentEmailIncludeSchema).optional(),
}).strict();
exports.SentEmailSelectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(),
    type: zod_1.z.boolean().optional(),
    createdAt: zod_1.z.boolean().optional(),
    projectId: zod_1.z.boolean().optional(),
    project: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.ProjectArgsSchema)]).optional(),
}).strict();
// DOMAIN
//------------------------------------------------------
exports.DomainIncludeSchema = zod_1.z.object({
    project: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.ProjectArgsSchema)]).optional(),
    links: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.LinkFindManyArgsSchema)]).optional(),
    _count: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.DomainCountOutputTypeArgsSchema)]).optional(),
}).strict();
exports.DomainArgsSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => exports.DomainSelectSchema).optional(),
    include: zod_1.z.lazy(() => exports.DomainIncludeSchema).optional(),
}).strict();
exports.DomainCountOutputTypeArgsSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => exports.DomainCountOutputTypeSelectSchema).nullish(),
}).strict();
exports.DomainCountOutputTypeSelectSchema = zod_1.z.object({
    links: zod_1.z.boolean().optional(),
}).strict();
exports.DomainSelectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(),
    slug: zod_1.z.boolean().optional(),
    verified: zod_1.z.boolean().optional(),
    target: zod_1.z.boolean().optional(),
    type: zod_1.z.boolean().optional(),
    description: zod_1.z.boolean().optional(),
    projectId: zod_1.z.boolean().optional(),
    primary: zod_1.z.boolean().optional(),
    lastChecked: zod_1.z.boolean().optional(),
    createdAt: zod_1.z.boolean().optional(),
    updatedAt: zod_1.z.boolean().optional(),
    project: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.ProjectArgsSchema)]).optional(),
    links: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.LinkFindManyArgsSchema)]).optional(),
    _count: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.DomainCountOutputTypeArgsSchema)]).optional(),
}).strict();
// LINK
//------------------------------------------------------
exports.LinkIncludeSchema = zod_1.z.object({
    project: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.ProjectArgsSchema)]).optional(),
    projectDomain: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.DomainArgsSchema)]).optional(),
    tag: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.TagArgsSchema)]).optional(),
}).strict();
exports.LinkArgsSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => exports.LinkSelectSchema).optional(),
    include: zod_1.z.lazy(() => exports.LinkIncludeSchema).optional(),
}).strict();
exports.LinkSelectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(),
    domain: zod_1.z.boolean().optional(),
    key: zod_1.z.boolean().optional(),
    url: zod_1.z.boolean().optional(),
    archived: zod_1.z.boolean().optional(),
    expiresAt: zod_1.z.boolean().optional(),
    password: zod_1.z.boolean().optional(),
    proxy: zod_1.z.boolean().optional(),
    title: zod_1.z.boolean().optional(),
    description: zod_1.z.boolean().optional(),
    image: zod_1.z.boolean().optional(),
    utm_source: zod_1.z.boolean().optional(),
    utm_medium: zod_1.z.boolean().optional(),
    utm_campaign: zod_1.z.boolean().optional(),
    utm_term: zod_1.z.boolean().optional(),
    utm_content: zod_1.z.boolean().optional(),
    rewrite: zod_1.z.boolean().optional(),
    ios: zod_1.z.boolean().optional(),
    android: zod_1.z.boolean().optional(),
    userId: zod_1.z.boolean().optional(),
    projectId: zod_1.z.boolean().optional(),
    clicks: zod_1.z.boolean().optional(),
    publicStats: zod_1.z.boolean().optional(),
    createdAt: zod_1.z.boolean().optional(),
    updatedAt: zod_1.z.boolean().optional(),
    tagId: zod_1.z.boolean().optional(),
    project: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.ProjectArgsSchema)]).optional(),
    projectDomain: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.DomainArgsSchema)]).optional(),
    tag: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.TagArgsSchema)]).optional(),
}).strict();
// TAG
//------------------------------------------------------
exports.TagIncludeSchema = zod_1.z.object({
    project: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.ProjectArgsSchema)]).optional(),
    links: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.LinkFindManyArgsSchema)]).optional(),
    _count: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.TagCountOutputTypeArgsSchema)]).optional(),
}).strict();
exports.TagArgsSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => exports.TagSelectSchema).optional(),
    include: zod_1.z.lazy(() => exports.TagIncludeSchema).optional(),
}).strict();
exports.TagCountOutputTypeArgsSchema = zod_1.z.object({
    select: zod_1.z.lazy(() => exports.TagCountOutputTypeSelectSchema).nullish(),
}).strict();
exports.TagCountOutputTypeSelectSchema = zod_1.z.object({
    links: zod_1.z.boolean().optional(),
}).strict();
exports.TagSelectSchema = zod_1.z.object({
    id: zod_1.z.boolean().optional(),
    name: zod_1.z.boolean().optional(),
    color: zod_1.z.boolean().optional(),
    createdAt: zod_1.z.boolean().optional(),
    updatedAt: zod_1.z.boolean().optional(),
    projectId: zod_1.z.boolean().optional(),
    project: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.ProjectArgsSchema)]).optional(),
    links: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.LinkFindManyArgsSchema)]).optional(),
    _count: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.TagCountOutputTypeArgsSchema)]).optional(),
}).strict();
/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////
exports.AuditsWhereInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.AuditsWhereInputSchema), zod_1.z.lazy(() => exports.AuditsWhereInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.AuditsWhereInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.AuditsWhereInputSchema), zod_1.z.lazy(() => exports.AuditsWhereInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.IntFilterSchema), zod_1.z.number()]).optional(),
    createdAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeFilterSchema), zod_1.z.date()]).optional(),
    auditId: zod_1.z.union([zod_1.z.lazy(() => exports.IntFilterSchema), zod_1.z.number()]).optional(),
    auditType: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    userId: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    username: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    action: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    auditChanges: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    version: zod_1.z.union([zod_1.z.lazy(() => exports.IntFilterSchema), zod_1.z.number()]).optional(),
}).strict();
exports.AuditsOrderByWithRelationAndSearchRelevanceInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    auditId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    auditType: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    userId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    username: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    action: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    auditChanges: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    version: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    _relevance: zod_1.z.lazy(() => exports.AuditsOrderByRelevanceInputSchema).optional()
}).strict();
exports.AuditsWhereUniqueInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional()
}).strict();
exports.AuditsOrderByWithAggregationInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    auditId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    auditType: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    userId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    username: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    action: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    auditChanges: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    version: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    _count: zod_1.z.lazy(() => exports.AuditsCountOrderByAggregateInputSchema).optional(),
    _avg: zod_1.z.lazy(() => exports.AuditsAvgOrderByAggregateInputSchema).optional(),
    _max: zod_1.z.lazy(() => exports.AuditsMaxOrderByAggregateInputSchema).optional(),
    _min: zod_1.z.lazy(() => exports.AuditsMinOrderByAggregateInputSchema).optional(),
    _sum: zod_1.z.lazy(() => exports.AuditsSumOrderByAggregateInputSchema).optional()
}).strict();
exports.AuditsScalarWhereWithAggregatesInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.AuditsScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.AuditsScalarWhereWithAggregatesInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.AuditsScalarWhereWithAggregatesInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.AuditsScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.AuditsScalarWhereWithAggregatesInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.IntWithAggregatesFilterSchema), zod_1.z.number()]).optional(),
    createdAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeWithAggregatesFilterSchema), zod_1.z.date()]).optional(),
    auditId: zod_1.z.union([zod_1.z.lazy(() => exports.IntWithAggregatesFilterSchema), zod_1.z.number()]).optional(),
    auditType: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    userId: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    username: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    action: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    auditChanges: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    version: zod_1.z.union([zod_1.z.lazy(() => exports.IntWithAggregatesFilterSchema), zod_1.z.number()]).optional(),
}).strict();
exports.SiteTemplateWhereInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.SiteTemplateWhereInputSchema), zod_1.z.lazy(() => exports.SiteTemplateWhereInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.SiteTemplateWhereInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.SiteTemplateWhereInputSchema), zod_1.z.lazy(() => exports.SiteTemplateWhereInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.IntFilterSchema), zod_1.z.number()]).optional(),
    createdAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeFilterSchema), zod_1.z.date()]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeFilterSchema), zod_1.z.date()]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.lazy(() => exports.BoolFilterSchema), zod_1.z.boolean()]).optional(),
    name: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    template: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    site: zod_1.z.lazy(() => exports.SiteListRelationFilterSchema).optional(),
    siteTemplateDataDef: zod_1.z.union([zod_1.z.lazy(() => exports.SiteTemplateDataDefRelationFilterSchema), zod_1.z.lazy(() => exports.SiteTemplateDataDefWhereInputSchema)]).optional().nullable(),
}).strict();
exports.SiteTemplateOrderByWithRelationAndSearchRelevanceInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    isDeleted: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    template: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    site: zod_1.z.lazy(() => exports.SiteOrderByRelationAggregateInputSchema).optional(),
    siteTemplateDataDef: zod_1.z.lazy(() => exports.SiteTemplateDataDefOrderByWithRelationAndSearchRelevanceInputSchema).optional(),
    _relevance: zod_1.z.lazy(() => exports.SiteTemplateOrderByRelevanceInputSchema).optional()
}).strict();
exports.SiteTemplateWhereUniqueInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional()
}).strict();
exports.SiteTemplateOrderByWithAggregationInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    isDeleted: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    template: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    _count: zod_1.z.lazy(() => exports.SiteTemplateCountOrderByAggregateInputSchema).optional(),
    _avg: zod_1.z.lazy(() => exports.SiteTemplateAvgOrderByAggregateInputSchema).optional(),
    _max: zod_1.z.lazy(() => exports.SiteTemplateMaxOrderByAggregateInputSchema).optional(),
    _min: zod_1.z.lazy(() => exports.SiteTemplateMinOrderByAggregateInputSchema).optional(),
    _sum: zod_1.z.lazy(() => exports.SiteTemplateSumOrderByAggregateInputSchema).optional()
}).strict();
exports.SiteTemplateScalarWhereWithAggregatesInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.SiteTemplateScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.SiteTemplateScalarWhereWithAggregatesInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.SiteTemplateScalarWhereWithAggregatesInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.SiteTemplateScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.SiteTemplateScalarWhereWithAggregatesInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.IntWithAggregatesFilterSchema), zod_1.z.number()]).optional(),
    createdAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeWithAggregatesFilterSchema), zod_1.z.date()]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeWithAggregatesFilterSchema), zod_1.z.date()]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.lazy(() => exports.BoolWithAggregatesFilterSchema), zod_1.z.boolean()]).optional(),
    name: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    template: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
}).strict();
exports.SiteTemplateDataDefWhereInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.SiteTemplateDataDefWhereInputSchema), zod_1.z.lazy(() => exports.SiteTemplateDataDefWhereInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.SiteTemplateDataDefWhereInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.SiteTemplateDataDefWhereInputSchema), zod_1.z.lazy(() => exports.SiteTemplateDataDefWhereInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.IntFilterSchema), zod_1.z.number()]).optional(),
    createdAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeFilterSchema), zod_1.z.date()]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeFilterSchema), zod_1.z.date()]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.lazy(() => exports.BoolFilterSchema), zod_1.z.boolean()]).optional(),
    siteTemplateId: zod_1.z.union([zod_1.z.lazy(() => exports.IntFilterSchema), zod_1.z.number()]).optional(),
    defData: zod_1.z.lazy(() => exports.JsonFilterSchema).optional(),
    siteTemplate: zod_1.z.union([zod_1.z.lazy(() => exports.SiteTemplateRelationFilterSchema), zod_1.z.lazy(() => exports.SiteTemplateWhereInputSchema)]).optional(),
}).strict();
exports.SiteTemplateDataDefOrderByWithRelationAndSearchRelevanceInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    isDeleted: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    siteTemplateId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    defData: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    siteTemplate: zod_1.z.lazy(() => exports.SiteTemplateOrderByWithRelationAndSearchRelevanceInputSchema).optional()
}).strict();
exports.SiteTemplateDataDefWhereUniqueInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    siteTemplateId: zod_1.z.number().int().optional()
}).strict();
exports.SiteTemplateDataDefOrderByWithAggregationInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    isDeleted: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    siteTemplateId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    defData: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    _count: zod_1.z.lazy(() => exports.SiteTemplateDataDefCountOrderByAggregateInputSchema).optional(),
    _avg: zod_1.z.lazy(() => exports.SiteTemplateDataDefAvgOrderByAggregateInputSchema).optional(),
    _max: zod_1.z.lazy(() => exports.SiteTemplateDataDefMaxOrderByAggregateInputSchema).optional(),
    _min: zod_1.z.lazy(() => exports.SiteTemplateDataDefMinOrderByAggregateInputSchema).optional(),
    _sum: zod_1.z.lazy(() => exports.SiteTemplateDataDefSumOrderByAggregateInputSchema).optional()
}).strict();
exports.SiteTemplateDataDefScalarWhereWithAggregatesInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.SiteTemplateDataDefScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.SiteTemplateDataDefScalarWhereWithAggregatesInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.SiteTemplateDataDefScalarWhereWithAggregatesInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.SiteTemplateDataDefScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.SiteTemplateDataDefScalarWhereWithAggregatesInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.IntWithAggregatesFilterSchema), zod_1.z.number()]).optional(),
    createdAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeWithAggregatesFilterSchema), zod_1.z.date()]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeWithAggregatesFilterSchema), zod_1.z.date()]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.lazy(() => exports.BoolWithAggregatesFilterSchema), zod_1.z.boolean()]).optional(),
    siteTemplateId: zod_1.z.union([zod_1.z.lazy(() => exports.IntWithAggregatesFilterSchema), zod_1.z.number()]).optional(),
    defData: zod_1.z.lazy(() => exports.JsonWithAggregatesFilterSchema).optional()
}).strict();
exports.CustomerWhereInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.CustomerWhereInputSchema), zod_1.z.lazy(() => exports.CustomerWhereInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.CustomerWhereInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.CustomerWhereInputSchema), zod_1.z.lazy(() => exports.CustomerWhereInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.IntFilterSchema), zod_1.z.number()]).optional(),
    createdAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeFilterSchema), zod_1.z.date()]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeFilterSchema), zod_1.z.date()]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.lazy(() => exports.BoolFilterSchema), zod_1.z.boolean()]).optional(),
    name: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    extendData: zod_1.z.lazy(() => exports.JsonNullableFilterSchema).optional(),
    site: zod_1.z.lazy(() => exports.SiteListRelationFilterSchema).optional()
}).strict();
exports.CustomerOrderByWithRelationAndSearchRelevanceInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    isDeleted: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    extendData: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    site: zod_1.z.lazy(() => exports.SiteOrderByRelationAggregateInputSchema).optional(),
    _relevance: zod_1.z.lazy(() => exports.CustomerOrderByRelevanceInputSchema).optional()
}).strict();
exports.CustomerWhereUniqueInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional()
}).strict();
exports.CustomerOrderByWithAggregationInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    isDeleted: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    extendData: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    _count: zod_1.z.lazy(() => exports.CustomerCountOrderByAggregateInputSchema).optional(),
    _avg: zod_1.z.lazy(() => exports.CustomerAvgOrderByAggregateInputSchema).optional(),
    _max: zod_1.z.lazy(() => exports.CustomerMaxOrderByAggregateInputSchema).optional(),
    _min: zod_1.z.lazy(() => exports.CustomerMinOrderByAggregateInputSchema).optional(),
    _sum: zod_1.z.lazy(() => exports.CustomerSumOrderByAggregateInputSchema).optional()
}).strict();
exports.CustomerScalarWhereWithAggregatesInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.CustomerScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.CustomerScalarWhereWithAggregatesInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.CustomerScalarWhereWithAggregatesInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.CustomerScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.CustomerScalarWhereWithAggregatesInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.IntWithAggregatesFilterSchema), zod_1.z.number()]).optional(),
    createdAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeWithAggregatesFilterSchema), zod_1.z.date()]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeWithAggregatesFilterSchema), zod_1.z.date()]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.lazy(() => exports.BoolWithAggregatesFilterSchema), zod_1.z.boolean()]).optional(),
    name: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    extendData: zod_1.z.lazy(() => exports.JsonNullableWithAggregatesFilterSchema).optional()
}).strict();
exports.SiteWhereInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.SiteWhereInputSchema), zod_1.z.lazy(() => exports.SiteWhereInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.SiteWhereInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.SiteWhereInputSchema), zod_1.z.lazy(() => exports.SiteWhereInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.IntFilterSchema), zod_1.z.number()]).optional(),
    createdAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeFilterSchema), zod_1.z.date()]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeFilterSchema), zod_1.z.date()]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.lazy(() => exports.BoolFilterSchema), zod_1.z.boolean()]).optional(),
    name: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    cosUrl: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    siteTemplateId: zod_1.z.union([zod_1.z.lazy(() => exports.IntFilterSchema), zod_1.z.number()]).optional(),
    customerId: zod_1.z.union([zod_1.z.lazy(() => exports.IntFilterSchema), zod_1.z.number()]).optional(),
    slotData: zod_1.z.lazy(() => exports.JsonFilterSchema).optional(),
    projectId: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    siteTemplate: zod_1.z.union([zod_1.z.lazy(() => exports.SiteTemplateRelationFilterSchema), zod_1.z.lazy(() => exports.SiteTemplateWhereInputSchema)]).optional(),
    customer: zod_1.z.union([zod_1.z.lazy(() => exports.CustomerRelationFilterSchema), zod_1.z.lazy(() => exports.CustomerWhereInputSchema)]).optional(),
    project: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectRelationFilterSchema), zod_1.z.lazy(() => exports.ProjectWhereInputSchema)]).optional().nullable(),
}).strict();
exports.SiteOrderByWithRelationAndSearchRelevanceInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    isDeleted: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    cosUrl: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    siteTemplateId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    customerId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    slotData: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    projectId: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    siteTemplate: zod_1.z.lazy(() => exports.SiteTemplateOrderByWithRelationAndSearchRelevanceInputSchema).optional(),
    customer: zod_1.z.lazy(() => exports.CustomerOrderByWithRelationAndSearchRelevanceInputSchema).optional(),
    project: zod_1.z.lazy(() => exports.ProjectOrderByWithRelationAndSearchRelevanceInputSchema).optional(),
    _relevance: zod_1.z.lazy(() => exports.SiteOrderByRelevanceInputSchema).optional()
}).strict();
exports.SiteWhereUniqueInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    projectId: zod_1.z.string().optional()
}).strict();
exports.SiteOrderByWithAggregationInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    isDeleted: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    cosUrl: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    siteTemplateId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    customerId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    slotData: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    projectId: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    _count: zod_1.z.lazy(() => exports.SiteCountOrderByAggregateInputSchema).optional(),
    _avg: zod_1.z.lazy(() => exports.SiteAvgOrderByAggregateInputSchema).optional(),
    _max: zod_1.z.lazy(() => exports.SiteMaxOrderByAggregateInputSchema).optional(),
    _min: zod_1.z.lazy(() => exports.SiteMinOrderByAggregateInputSchema).optional(),
    _sum: zod_1.z.lazy(() => exports.SiteSumOrderByAggregateInputSchema).optional()
}).strict();
exports.SiteScalarWhereWithAggregatesInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.SiteScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.SiteScalarWhereWithAggregatesInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.SiteScalarWhereWithAggregatesInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.SiteScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.SiteScalarWhereWithAggregatesInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.IntWithAggregatesFilterSchema), zod_1.z.number()]).optional(),
    createdAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeWithAggregatesFilterSchema), zod_1.z.date()]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeWithAggregatesFilterSchema), zod_1.z.date()]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.lazy(() => exports.BoolWithAggregatesFilterSchema), zod_1.z.boolean()]).optional(),
    name: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    cosUrl: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    siteTemplateId: zod_1.z.union([zod_1.z.lazy(() => exports.IntWithAggregatesFilterSchema), zod_1.z.number()]).optional(),
    customerId: zod_1.z.union([zod_1.z.lazy(() => exports.IntWithAggregatesFilterSchema), zod_1.z.number()]).optional(),
    slotData: zod_1.z.lazy(() => exports.JsonWithAggregatesFilterSchema).optional(),
    projectId: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
}).strict();
exports.UserWhereInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.UserWhereInputSchema), zod_1.z.lazy(() => exports.UserWhereInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.UserWhereInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.UserWhereInputSchema), zod_1.z.lazy(() => exports.UserWhereInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    name: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    email: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    emailVerified: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeNullableFilterSchema), zod_1.z.date()]).optional().nullable(),
    image: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    createdAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeFilterSchema), zod_1.z.date()]).optional(),
    accounts: zod_1.z.lazy(() => exports.AccountListRelationFilterSchema).optional(),
    sessions: zod_1.z.lazy(() => exports.SessionListRelationFilterSchema).optional()
}).strict();
exports.UserOrderByWithRelationAndSearchRelevanceInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    name: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    email: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    emailVerified: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    image: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    accounts: zod_1.z.lazy(() => exports.AccountOrderByRelationAggregateInputSchema).optional(),
    sessions: zod_1.z.lazy(() => exports.SessionOrderByRelationAggregateInputSchema).optional(),
    _relevance: zod_1.z.lazy(() => exports.UserOrderByRelevanceInputSchema).optional()
}).strict();
exports.UserWhereUniqueInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    email: zod_1.z.string().optional()
}).strict();
exports.UserOrderByWithAggregationInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    name: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    email: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    emailVerified: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    image: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    _count: zod_1.z.lazy(() => exports.UserCountOrderByAggregateInputSchema).optional(),
    _max: zod_1.z.lazy(() => exports.UserMaxOrderByAggregateInputSchema).optional(),
    _min: zod_1.z.lazy(() => exports.UserMinOrderByAggregateInputSchema).optional()
}).strict();
exports.UserScalarWhereWithAggregatesInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.UserScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.UserScalarWhereWithAggregatesInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.UserScalarWhereWithAggregatesInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.UserScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.UserScalarWhereWithAggregatesInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    name: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    email: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    emailVerified: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeNullableWithAggregatesFilterSchema), zod_1.z.date()]).optional().nullable(),
    image: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    createdAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeWithAggregatesFilterSchema), zod_1.z.date()]).optional(),
}).strict();
exports.AccountWhereInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.AccountWhereInputSchema), zod_1.z.lazy(() => exports.AccountWhereInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.AccountWhereInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.AccountWhereInputSchema), zod_1.z.lazy(() => exports.AccountWhereInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    userId: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    type: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    provider: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    providerAccountId: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    refresh_token: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    refresh_token_expires_in: zod_1.z.union([zod_1.z.lazy(() => exports.IntNullableFilterSchema), zod_1.z.number()]).optional().nullable(),
    access_token: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    expires_at: zod_1.z.union([zod_1.z.lazy(() => exports.IntNullableFilterSchema), zod_1.z.number()]).optional().nullable(),
    token_type: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    scope: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    id_token: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    session_state: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    user: zod_1.z.union([zod_1.z.lazy(() => exports.UserRelationFilterSchema), zod_1.z.lazy(() => exports.UserWhereInputSchema)]).optional(),
}).strict();
exports.AccountOrderByWithRelationAndSearchRelevanceInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    userId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    type: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    provider: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    providerAccountId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    refresh_token: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    refresh_token_expires_in: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    access_token: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    expires_at: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    token_type: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    scope: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    id_token: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    session_state: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    user: zod_1.z.lazy(() => exports.UserOrderByWithRelationAndSearchRelevanceInputSchema).optional(),
    _relevance: zod_1.z.lazy(() => exports.AccountOrderByRelevanceInputSchema).optional()
}).strict();
exports.AccountWhereUniqueInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    provider_providerAccountId: zod_1.z.lazy(() => exports.AccountProviderProviderAccountIdCompoundUniqueInputSchema).optional()
}).strict();
exports.AccountOrderByWithAggregationInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    userId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    type: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    provider: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    providerAccountId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    refresh_token: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    refresh_token_expires_in: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    access_token: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    expires_at: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    token_type: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    scope: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    id_token: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    session_state: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    _count: zod_1.z.lazy(() => exports.AccountCountOrderByAggregateInputSchema).optional(),
    _avg: zod_1.z.lazy(() => exports.AccountAvgOrderByAggregateInputSchema).optional(),
    _max: zod_1.z.lazy(() => exports.AccountMaxOrderByAggregateInputSchema).optional(),
    _min: zod_1.z.lazy(() => exports.AccountMinOrderByAggregateInputSchema).optional(),
    _sum: zod_1.z.lazy(() => exports.AccountSumOrderByAggregateInputSchema).optional()
}).strict();
exports.AccountScalarWhereWithAggregatesInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.AccountScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.AccountScalarWhereWithAggregatesInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.AccountScalarWhereWithAggregatesInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.AccountScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.AccountScalarWhereWithAggregatesInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    userId: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    type: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    provider: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    providerAccountId: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    refresh_token: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    refresh_token_expires_in: zod_1.z.union([zod_1.z.lazy(() => exports.IntNullableWithAggregatesFilterSchema), zod_1.z.number()]).optional().nullable(),
    access_token: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    expires_at: zod_1.z.union([zod_1.z.lazy(() => exports.IntNullableWithAggregatesFilterSchema), zod_1.z.number()]).optional().nullable(),
    token_type: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    scope: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    id_token: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    session_state: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
}).strict();
exports.SessionWhereInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.SessionWhereInputSchema), zod_1.z.lazy(() => exports.SessionWhereInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.SessionWhereInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.SessionWhereInputSchema), zod_1.z.lazy(() => exports.SessionWhereInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    sessionToken: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    userId: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    expires: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeFilterSchema), zod_1.z.date()]).optional(),
    user: zod_1.z.union([zod_1.z.lazy(() => exports.UserRelationFilterSchema), zod_1.z.lazy(() => exports.UserWhereInputSchema)]).optional(),
}).strict();
exports.SessionOrderByWithRelationAndSearchRelevanceInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    sessionToken: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    userId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    expires: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    user: zod_1.z.lazy(() => exports.UserOrderByWithRelationAndSearchRelevanceInputSchema).optional(),
    _relevance: zod_1.z.lazy(() => exports.SessionOrderByRelevanceInputSchema).optional()
}).strict();
exports.SessionWhereUniqueInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    sessionToken: zod_1.z.string().optional()
}).strict();
exports.SessionOrderByWithAggregationInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    sessionToken: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    userId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    expires: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    _count: zod_1.z.lazy(() => exports.SessionCountOrderByAggregateInputSchema).optional(),
    _max: zod_1.z.lazy(() => exports.SessionMaxOrderByAggregateInputSchema).optional(),
    _min: zod_1.z.lazy(() => exports.SessionMinOrderByAggregateInputSchema).optional()
}).strict();
exports.SessionScalarWhereWithAggregatesInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.SessionScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.SessionScalarWhereWithAggregatesInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.SessionScalarWhereWithAggregatesInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.SessionScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.SessionScalarWhereWithAggregatesInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    sessionToken: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    userId: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    expires: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeWithAggregatesFilterSchema), zod_1.z.date()]).optional(),
}).strict();
exports.VerificationTokenWhereInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.VerificationTokenWhereInputSchema), zod_1.z.lazy(() => exports.VerificationTokenWhereInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.VerificationTokenWhereInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.VerificationTokenWhereInputSchema), zod_1.z.lazy(() => exports.VerificationTokenWhereInputSchema).array()]).optional(),
    identifier: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    token: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    expires: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeFilterSchema), zod_1.z.date()]).optional(),
}).strict();
exports.VerificationTokenOrderByWithRelationAndSearchRelevanceInputSchema = zod_1.z.object({
    identifier: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    token: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    expires: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    _relevance: zod_1.z.lazy(() => exports.VerificationTokenOrderByRelevanceInputSchema).optional()
}).strict();
exports.VerificationTokenWhereUniqueInputSchema = zod_1.z.object({
    token: zod_1.z.string().optional(),
    identifier_token: zod_1.z.lazy(() => exports.VerificationTokenIdentifierTokenCompoundUniqueInputSchema).optional()
}).strict();
exports.VerificationTokenOrderByWithAggregationInputSchema = zod_1.z.object({
    identifier: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    token: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    expires: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    _count: zod_1.z.lazy(() => exports.VerificationTokenCountOrderByAggregateInputSchema).optional(),
    _max: zod_1.z.lazy(() => exports.VerificationTokenMaxOrderByAggregateInputSchema).optional(),
    _min: zod_1.z.lazy(() => exports.VerificationTokenMinOrderByAggregateInputSchema).optional()
}).strict();
exports.VerificationTokenScalarWhereWithAggregatesInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.VerificationTokenScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.VerificationTokenScalarWhereWithAggregatesInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.VerificationTokenScalarWhereWithAggregatesInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.VerificationTokenScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.VerificationTokenScalarWhereWithAggregatesInputSchema).array()]).optional(),
    identifier: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    token: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    expires: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeWithAggregatesFilterSchema), zod_1.z.date()]).optional(),
}).strict();
exports.ProjectWhereInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectWhereInputSchema), zod_1.z.lazy(() => exports.ProjectWhereInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.ProjectWhereInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectWhereInputSchema), zod_1.z.lazy(() => exports.ProjectWhereInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    name: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    slug: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    logo: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    password: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    type: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    usage: zod_1.z.union([zod_1.z.lazy(() => exports.IntFilterSchema), zod_1.z.number()]).optional(),
    usageLimit: zod_1.z.union([zod_1.z.lazy(() => exports.IntFilterSchema), zod_1.z.number()]).optional(),
    plan: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    stripeId: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    billingCycleStart: zod_1.z.union([zod_1.z.lazy(() => exports.IntNullableFilterSchema), zod_1.z.number()]).optional().nullable(),
    region: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    endpoint: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    bucket: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    useHost: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    createdAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeFilterSchema), zod_1.z.date()]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeFilterSchema), zod_1.z.date()]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.lazy(() => exports.BoolFilterSchema), zod_1.z.boolean()]).optional(),
    users: zod_1.z.lazy(() => exports.ProjectUsersListRelationFilterSchema).optional(),
    invites: zod_1.z.lazy(() => exports.ProjectInviteListRelationFilterSchema).optional(),
    sentEmails: zod_1.z.lazy(() => exports.SentEmailListRelationFilterSchema).optional(),
    domains: zod_1.z.lazy(() => exports.DomainListRelationFilterSchema).optional(),
    links: zod_1.z.lazy(() => exports.LinkListRelationFilterSchema).optional(),
    tags: zod_1.z.lazy(() => exports.TagListRelationFilterSchema).optional(),
    site: zod_1.z.union([zod_1.z.lazy(() => exports.SiteRelationFilterSchema), zod_1.z.lazy(() => exports.SiteWhereInputSchema)]).optional().nullable(),
}).strict();
exports.ProjectOrderByWithRelationAndSearchRelevanceInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    slug: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    logo: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    password: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    type: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    usage: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    usageLimit: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    plan: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    stripeId: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    billingCycleStart: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    region: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    endpoint: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    bucket: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    useHost: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    isDeleted: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    users: zod_1.z.lazy(() => exports.ProjectUsersOrderByRelationAggregateInputSchema).optional(),
    invites: zod_1.z.lazy(() => exports.ProjectInviteOrderByRelationAggregateInputSchema).optional(),
    sentEmails: zod_1.z.lazy(() => exports.SentEmailOrderByRelationAggregateInputSchema).optional(),
    domains: zod_1.z.lazy(() => exports.DomainOrderByRelationAggregateInputSchema).optional(),
    links: zod_1.z.lazy(() => exports.LinkOrderByRelationAggregateInputSchema).optional(),
    tags: zod_1.z.lazy(() => exports.TagOrderByRelationAggregateInputSchema).optional(),
    site: zod_1.z.lazy(() => exports.SiteOrderByWithRelationAndSearchRelevanceInputSchema).optional(),
    _relevance: zod_1.z.lazy(() => exports.ProjectOrderByRelevanceInputSchema).optional()
}).strict();
exports.ProjectWhereUniqueInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    slug: zod_1.z.string().optional(),
    stripeId: zod_1.z.string().optional()
}).strict();
exports.ProjectOrderByWithAggregationInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    slug: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    logo: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    password: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    type: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    usage: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    usageLimit: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    plan: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    stripeId: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    billingCycleStart: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    region: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    endpoint: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    bucket: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    useHost: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    isDeleted: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    _count: zod_1.z.lazy(() => exports.ProjectCountOrderByAggregateInputSchema).optional(),
    _avg: zod_1.z.lazy(() => exports.ProjectAvgOrderByAggregateInputSchema).optional(),
    _max: zod_1.z.lazy(() => exports.ProjectMaxOrderByAggregateInputSchema).optional(),
    _min: zod_1.z.lazy(() => exports.ProjectMinOrderByAggregateInputSchema).optional(),
    _sum: zod_1.z.lazy(() => exports.ProjectSumOrderByAggregateInputSchema).optional()
}).strict();
exports.ProjectScalarWhereWithAggregatesInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.ProjectScalarWhereWithAggregatesInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.ProjectScalarWhereWithAggregatesInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.ProjectScalarWhereWithAggregatesInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    name: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    slug: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    logo: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    password: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    type: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    usage: zod_1.z.union([zod_1.z.lazy(() => exports.IntWithAggregatesFilterSchema), zod_1.z.number()]).optional(),
    usageLimit: zod_1.z.union([zod_1.z.lazy(() => exports.IntWithAggregatesFilterSchema), zod_1.z.number()]).optional(),
    plan: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    stripeId: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    billingCycleStart: zod_1.z.union([zod_1.z.lazy(() => exports.IntNullableWithAggregatesFilterSchema), zod_1.z.number()]).optional().nullable(),
    region: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    endpoint: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    bucket: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    useHost: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    createdAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeWithAggregatesFilterSchema), zod_1.z.date()]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeWithAggregatesFilterSchema), zod_1.z.date()]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.lazy(() => exports.BoolWithAggregatesFilterSchema), zod_1.z.boolean()]).optional(),
}).strict();
exports.ProjectInviteWhereInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectInviteWhereInputSchema), zod_1.z.lazy(() => exports.ProjectInviteWhereInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.ProjectInviteWhereInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectInviteWhereInputSchema), zod_1.z.lazy(() => exports.ProjectInviteWhereInputSchema).array()]).optional(),
    email: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    expires: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeFilterSchema), zod_1.z.date()]).optional(),
    projectId: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    createdAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeFilterSchema), zod_1.z.date()]).optional(),
    project: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectRelationFilterSchema), zod_1.z.lazy(() => exports.ProjectWhereInputSchema)]).optional(),
}).strict();
exports.ProjectInviteOrderByWithRelationAndSearchRelevanceInputSchema = zod_1.z.object({
    email: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    expires: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    projectId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    project: zod_1.z.lazy(() => exports.ProjectOrderByWithRelationAndSearchRelevanceInputSchema).optional(),
    _relevance: zod_1.z.lazy(() => exports.ProjectInviteOrderByRelevanceInputSchema).optional()
}).strict();
exports.ProjectInviteWhereUniqueInputSchema = zod_1.z.object({
    email_projectId: zod_1.z.lazy(() => exports.ProjectInviteEmailProjectIdCompoundUniqueInputSchema).optional()
}).strict();
exports.ProjectInviteOrderByWithAggregationInputSchema = zod_1.z.object({
    email: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    expires: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    projectId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    _count: zod_1.z.lazy(() => exports.ProjectInviteCountOrderByAggregateInputSchema).optional(),
    _max: zod_1.z.lazy(() => exports.ProjectInviteMaxOrderByAggregateInputSchema).optional(),
    _min: zod_1.z.lazy(() => exports.ProjectInviteMinOrderByAggregateInputSchema).optional()
}).strict();
exports.ProjectInviteScalarWhereWithAggregatesInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectInviteScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.ProjectInviteScalarWhereWithAggregatesInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.ProjectInviteScalarWhereWithAggregatesInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectInviteScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.ProjectInviteScalarWhereWithAggregatesInputSchema).array()]).optional(),
    email: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    expires: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeWithAggregatesFilterSchema), zod_1.z.date()]).optional(),
    projectId: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    createdAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeWithAggregatesFilterSchema), zod_1.z.date()]).optional(),
}).strict();
exports.ProjectUsersWhereInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUsersWhereInputSchema), zod_1.z.lazy(() => exports.ProjectUsersWhereInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.ProjectUsersWhereInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUsersWhereInputSchema), zod_1.z.lazy(() => exports.ProjectUsersWhereInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    role: zod_1.z.union([zod_1.z.lazy(() => exports.EnumRoleFilterSchema), zod_1.z.lazy(() => exports.RoleSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeFilterSchema), zod_1.z.date()]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeFilterSchema), zod_1.z.date()]).optional(),
    userId: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    projectId: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    project: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectRelationFilterSchema), zod_1.z.lazy(() => exports.ProjectWhereInputSchema)]).optional(),
}).strict();
exports.ProjectUsersOrderByWithRelationAndSearchRelevanceInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    role: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    userId: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    projectId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    project: zod_1.z.lazy(() => exports.ProjectOrderByWithRelationAndSearchRelevanceInputSchema).optional(),
    _relevance: zod_1.z.lazy(() => exports.ProjectUsersOrderByRelevanceInputSchema).optional()
}).strict();
exports.ProjectUsersWhereUniqueInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    userId_projectId: zod_1.z.lazy(() => exports.ProjectUsersUserIdProjectIdCompoundUniqueInputSchema).optional()
}).strict();
exports.ProjectUsersOrderByWithAggregationInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    role: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    userId: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    projectId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    _count: zod_1.z.lazy(() => exports.ProjectUsersCountOrderByAggregateInputSchema).optional(),
    _max: zod_1.z.lazy(() => exports.ProjectUsersMaxOrderByAggregateInputSchema).optional(),
    _min: zod_1.z.lazy(() => exports.ProjectUsersMinOrderByAggregateInputSchema).optional()
}).strict();
exports.ProjectUsersScalarWhereWithAggregatesInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUsersScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.ProjectUsersScalarWhereWithAggregatesInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.ProjectUsersScalarWhereWithAggregatesInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUsersScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.ProjectUsersScalarWhereWithAggregatesInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    role: zod_1.z.union([zod_1.z.lazy(() => exports.EnumRoleWithAggregatesFilterSchema), zod_1.z.lazy(() => exports.RoleSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeWithAggregatesFilterSchema), zod_1.z.date()]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeWithAggregatesFilterSchema), zod_1.z.date()]).optional(),
    userId: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    projectId: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
}).strict();
exports.SentEmailWhereInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.SentEmailWhereInputSchema), zod_1.z.lazy(() => exports.SentEmailWhereInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.SentEmailWhereInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.SentEmailWhereInputSchema), zod_1.z.lazy(() => exports.SentEmailWhereInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    type: zod_1.z.union([zod_1.z.lazy(() => exports.EnumEmailTypeFilterSchema), zod_1.z.lazy(() => exports.EmailTypeSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeFilterSchema), zod_1.z.date()]).optional(),
    projectId: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    project: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectRelationFilterSchema), zod_1.z.lazy(() => exports.ProjectWhereInputSchema)]).optional().nullable(),
}).strict();
exports.SentEmailOrderByWithRelationAndSearchRelevanceInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    type: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    projectId: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    project: zod_1.z.lazy(() => exports.ProjectOrderByWithRelationAndSearchRelevanceInputSchema).optional(),
    _relevance: zod_1.z.lazy(() => exports.SentEmailOrderByRelevanceInputSchema).optional()
}).strict();
exports.SentEmailWhereUniqueInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional()
}).strict();
exports.SentEmailOrderByWithAggregationInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    type: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    projectId: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    _count: zod_1.z.lazy(() => exports.SentEmailCountOrderByAggregateInputSchema).optional(),
    _max: zod_1.z.lazy(() => exports.SentEmailMaxOrderByAggregateInputSchema).optional(),
    _min: zod_1.z.lazy(() => exports.SentEmailMinOrderByAggregateInputSchema).optional()
}).strict();
exports.SentEmailScalarWhereWithAggregatesInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.SentEmailScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.SentEmailScalarWhereWithAggregatesInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.SentEmailScalarWhereWithAggregatesInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.SentEmailScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.SentEmailScalarWhereWithAggregatesInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    type: zod_1.z.union([zod_1.z.lazy(() => exports.EnumEmailTypeWithAggregatesFilterSchema), zod_1.z.lazy(() => exports.EmailTypeSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeWithAggregatesFilterSchema), zod_1.z.date()]).optional(),
    projectId: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
}).strict();
exports.DomainWhereInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.DomainWhereInputSchema), zod_1.z.lazy(() => exports.DomainWhereInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.DomainWhereInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.DomainWhereInputSchema), zod_1.z.lazy(() => exports.DomainWhereInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    slug: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    verified: zod_1.z.union([zod_1.z.lazy(() => exports.BoolFilterSchema), zod_1.z.boolean()]).optional(),
    target: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    type: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    description: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    projectId: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    primary: zod_1.z.union([zod_1.z.lazy(() => exports.BoolFilterSchema), zod_1.z.boolean()]).optional(),
    lastChecked: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeFilterSchema), zod_1.z.date()]).optional(),
    createdAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeFilterSchema), zod_1.z.date()]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeFilterSchema), zod_1.z.date()]).optional(),
    project: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectRelationFilterSchema), zod_1.z.lazy(() => exports.ProjectWhereInputSchema)]).optional().nullable(),
    links: zod_1.z.lazy(() => exports.LinkListRelationFilterSchema).optional()
}).strict();
exports.DomainOrderByWithRelationAndSearchRelevanceInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    slug: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    verified: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    target: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    type: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    description: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    projectId: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    primary: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    lastChecked: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    project: zod_1.z.lazy(() => exports.ProjectOrderByWithRelationAndSearchRelevanceInputSchema).optional(),
    links: zod_1.z.lazy(() => exports.LinkOrderByRelationAggregateInputSchema).optional(),
    _relevance: zod_1.z.lazy(() => exports.DomainOrderByRelevanceInputSchema).optional()
}).strict();
exports.DomainWhereUniqueInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    slug: zod_1.z.string().optional()
}).strict();
exports.DomainOrderByWithAggregationInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    slug: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    verified: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    target: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    type: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    description: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    projectId: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    primary: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    lastChecked: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    _count: zod_1.z.lazy(() => exports.DomainCountOrderByAggregateInputSchema).optional(),
    _max: zod_1.z.lazy(() => exports.DomainMaxOrderByAggregateInputSchema).optional(),
    _min: zod_1.z.lazy(() => exports.DomainMinOrderByAggregateInputSchema).optional()
}).strict();
exports.DomainScalarWhereWithAggregatesInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.DomainScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.DomainScalarWhereWithAggregatesInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.DomainScalarWhereWithAggregatesInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.DomainScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.DomainScalarWhereWithAggregatesInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    slug: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    verified: zod_1.z.union([zod_1.z.lazy(() => exports.BoolWithAggregatesFilterSchema), zod_1.z.boolean()]).optional(),
    target: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    type: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    description: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    projectId: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    primary: zod_1.z.union([zod_1.z.lazy(() => exports.BoolWithAggregatesFilterSchema), zod_1.z.boolean()]).optional(),
    lastChecked: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeWithAggregatesFilterSchema), zod_1.z.date()]).optional(),
    createdAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeWithAggregatesFilterSchema), zod_1.z.date()]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeWithAggregatesFilterSchema), zod_1.z.date()]).optional(),
}).strict();
exports.LinkWhereInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.LinkWhereInputSchema), zod_1.z.lazy(() => exports.LinkWhereInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.LinkWhereInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.LinkWhereInputSchema), zod_1.z.lazy(() => exports.LinkWhereInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    domain: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    key: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    url: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    archived: zod_1.z.union([zod_1.z.lazy(() => exports.BoolFilterSchema), zod_1.z.boolean()]).optional(),
    expiresAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeNullableFilterSchema), zod_1.z.date()]).optional().nullable(),
    password: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    proxy: zod_1.z.union([zod_1.z.lazy(() => exports.BoolFilterSchema), zod_1.z.boolean()]).optional(),
    title: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    description: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    image: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    utm_source: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    utm_medium: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    utm_campaign: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    utm_term: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    utm_content: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    rewrite: zod_1.z.union([zod_1.z.lazy(() => exports.BoolFilterSchema), zod_1.z.boolean()]).optional(),
    ios: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    android: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    userId: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    projectId: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    clicks: zod_1.z.union([zod_1.z.lazy(() => exports.IntFilterSchema), zod_1.z.number()]).optional(),
    publicStats: zod_1.z.union([zod_1.z.lazy(() => exports.BoolFilterSchema), zod_1.z.boolean()]).optional(),
    createdAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeFilterSchema), zod_1.z.date()]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeFilterSchema), zod_1.z.date()]).optional(),
    tagId: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    project: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectRelationFilterSchema), zod_1.z.lazy(() => exports.ProjectWhereInputSchema)]).optional().nullable(),
    projectDomain: zod_1.z.union([zod_1.z.lazy(() => exports.DomainRelationFilterSchema), zod_1.z.lazy(() => exports.DomainWhereInputSchema)]).optional().nullable(),
    tag: zod_1.z.union([zod_1.z.lazy(() => exports.TagRelationFilterSchema), zod_1.z.lazy(() => exports.TagWhereInputSchema)]).optional().nullable(),
}).strict();
exports.LinkOrderByWithRelationAndSearchRelevanceInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    domain: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    key: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    url: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    archived: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    expiresAt: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    password: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    proxy: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    title: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    description: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    image: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    utm_source: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    utm_medium: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    utm_campaign: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    utm_term: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    utm_content: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    rewrite: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    ios: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    android: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    userId: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    projectId: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    clicks: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    publicStats: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    tagId: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    project: zod_1.z.lazy(() => exports.ProjectOrderByWithRelationAndSearchRelevanceInputSchema).optional(),
    projectDomain: zod_1.z.lazy(() => exports.DomainOrderByWithRelationAndSearchRelevanceInputSchema).optional(),
    tag: zod_1.z.lazy(() => exports.TagOrderByWithRelationAndSearchRelevanceInputSchema).optional(),
    _relevance: zod_1.z.lazy(() => exports.LinkOrderByRelevanceInputSchema).optional()
}).strict();
exports.LinkWhereUniqueInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    domain_key: zod_1.z.lazy(() => exports.LinkDomainKeyCompoundUniqueInputSchema).optional()
}).strict();
exports.LinkOrderByWithAggregationInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    domain: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    key: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    url: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    archived: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    expiresAt: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    password: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    proxy: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    title: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    description: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    image: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    utm_source: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    utm_medium: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    utm_campaign: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    utm_term: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    utm_content: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    rewrite: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    ios: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    android: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    userId: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    projectId: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    clicks: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    publicStats: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    tagId: zod_1.z.union([zod_1.z.lazy(() => exports.SortOrderSchema), zod_1.z.lazy(() => exports.SortOrderInputSchema)]).optional(),
    _count: zod_1.z.lazy(() => exports.LinkCountOrderByAggregateInputSchema).optional(),
    _avg: zod_1.z.lazy(() => exports.LinkAvgOrderByAggregateInputSchema).optional(),
    _max: zod_1.z.lazy(() => exports.LinkMaxOrderByAggregateInputSchema).optional(),
    _min: zod_1.z.lazy(() => exports.LinkMinOrderByAggregateInputSchema).optional(),
    _sum: zod_1.z.lazy(() => exports.LinkSumOrderByAggregateInputSchema).optional()
}).strict();
exports.LinkScalarWhereWithAggregatesInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.LinkScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.LinkScalarWhereWithAggregatesInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.LinkScalarWhereWithAggregatesInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.LinkScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.LinkScalarWhereWithAggregatesInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    domain: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    key: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    url: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    archived: zod_1.z.union([zod_1.z.lazy(() => exports.BoolWithAggregatesFilterSchema), zod_1.z.boolean()]).optional(),
    expiresAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeNullableWithAggregatesFilterSchema), zod_1.z.date()]).optional().nullable(),
    password: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    proxy: zod_1.z.union([zod_1.z.lazy(() => exports.BoolWithAggregatesFilterSchema), zod_1.z.boolean()]).optional(),
    title: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    description: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    image: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    utm_source: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    utm_medium: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    utm_campaign: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    utm_term: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    utm_content: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    rewrite: zod_1.z.union([zod_1.z.lazy(() => exports.BoolWithAggregatesFilterSchema), zod_1.z.boolean()]).optional(),
    ios: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    android: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    userId: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    projectId: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
    clicks: zod_1.z.union([zod_1.z.lazy(() => exports.IntWithAggregatesFilterSchema), zod_1.z.number()]).optional(),
    publicStats: zod_1.z.union([zod_1.z.lazy(() => exports.BoolWithAggregatesFilterSchema), zod_1.z.boolean()]).optional(),
    createdAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeWithAggregatesFilterSchema), zod_1.z.date()]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeWithAggregatesFilterSchema), zod_1.z.date()]).optional(),
    tagId: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableWithAggregatesFilterSchema), zod_1.z.string()]).optional().nullable(),
}).strict();
exports.TagWhereInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.TagWhereInputSchema), zod_1.z.lazy(() => exports.TagWhereInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.TagWhereInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.TagWhereInputSchema), zod_1.z.lazy(() => exports.TagWhereInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    name: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    color: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    createdAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeFilterSchema), zod_1.z.date()]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeFilterSchema), zod_1.z.date()]).optional(),
    projectId: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    project: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectRelationFilterSchema), zod_1.z.lazy(() => exports.ProjectWhereInputSchema)]).optional(),
    links: zod_1.z.lazy(() => exports.LinkListRelationFilterSchema).optional()
}).strict();
exports.TagOrderByWithRelationAndSearchRelevanceInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    color: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    projectId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    project: zod_1.z.lazy(() => exports.ProjectOrderByWithRelationAndSearchRelevanceInputSchema).optional(),
    links: zod_1.z.lazy(() => exports.LinkOrderByRelationAggregateInputSchema).optional(),
    _relevance: zod_1.z.lazy(() => exports.TagOrderByRelevanceInputSchema).optional()
}).strict();
exports.TagWhereUniqueInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    name_projectId: zod_1.z.lazy(() => exports.TagNameProjectIdCompoundUniqueInputSchema).optional()
}).strict();
exports.TagOrderByWithAggregationInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    color: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    projectId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    _count: zod_1.z.lazy(() => exports.TagCountOrderByAggregateInputSchema).optional(),
    _max: zod_1.z.lazy(() => exports.TagMaxOrderByAggregateInputSchema).optional(),
    _min: zod_1.z.lazy(() => exports.TagMinOrderByAggregateInputSchema).optional()
}).strict();
exports.TagScalarWhereWithAggregatesInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.TagScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.TagScalarWhereWithAggregatesInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.TagScalarWhereWithAggregatesInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.TagScalarWhereWithAggregatesInputSchema), zod_1.z.lazy(() => exports.TagScalarWhereWithAggregatesInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    name: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    color: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
    createdAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeWithAggregatesFilterSchema), zod_1.z.date()]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeWithAggregatesFilterSchema), zod_1.z.date()]).optional(),
    projectId: zod_1.z.union([zod_1.z.lazy(() => exports.StringWithAggregatesFilterSchema), zod_1.z.string()]).optional(),
}).strict();
exports.AuditsCreateInputSchema = zod_1.z.object({
    createdAt: zod_1.z.date().optional(),
    auditId: zod_1.z.number().int(),
    auditType: zod_1.z.string(),
    userId: zod_1.z.string(),
    username: zod_1.z.string().optional().nullable(),
    action: zod_1.z.string(),
    auditChanges: zod_1.z.string(),
    version: zod_1.z.number().int()
}).strict();
exports.AuditsUncheckedCreateInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    createdAt: zod_1.z.date().optional(),
    auditId: zod_1.z.number().int(),
    auditType: zod_1.z.string(),
    userId: zod_1.z.string(),
    username: zod_1.z.string().optional().nullable(),
    action: zod_1.z.string(),
    auditChanges: zod_1.z.string(),
    version: zod_1.z.number().int()
}).strict();
exports.AuditsUpdateInputSchema = zod_1.z.object({
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    auditId: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    auditType: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    userId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    username: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    action: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    auditChanges: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    version: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.AuditsUncheckedUpdateInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    auditId: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    auditType: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    userId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    username: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    action: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    auditChanges: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    version: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.AuditsCreateManyInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    createdAt: zod_1.z.date().optional(),
    auditId: zod_1.z.number().int(),
    auditType: zod_1.z.string(),
    userId: zod_1.z.string(),
    username: zod_1.z.string().optional().nullable(),
    action: zod_1.z.string(),
    auditChanges: zod_1.z.string(),
    version: zod_1.z.number().int()
}).strict();
exports.AuditsUpdateManyMutationInputSchema = zod_1.z.object({
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    auditId: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    auditType: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    userId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    username: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    action: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    auditChanges: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    version: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.AuditsUncheckedUpdateManyInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    auditId: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    auditType: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    userId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    username: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    action: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    auditChanges: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    version: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.SiteTemplateCreateInputSchema = zod_1.z.object({
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    name: zod_1.z.string(),
    template: zod_1.z.string(),
    site: zod_1.z.lazy(() => exports.SiteCreateNestedManyWithoutSiteTemplateInputSchema).optional(),
    siteTemplateDataDef: zod_1.z.lazy(() => exports.SiteTemplateDataDefCreateNestedOneWithoutSiteTemplateInputSchema).optional()
}).strict();
exports.SiteTemplateUncheckedCreateInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    name: zod_1.z.string(),
    template: zod_1.z.string(),
    site: zod_1.z.lazy(() => exports.SiteUncheckedCreateNestedManyWithoutSiteTemplateInputSchema).optional(),
    siteTemplateDataDef: zod_1.z.lazy(() => exports.SiteTemplateDataDefUncheckedCreateNestedOneWithoutSiteTemplateInputSchema).optional()
}).strict();
exports.SiteTemplateUpdateInputSchema = zod_1.z.object({
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    template: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    site: zod_1.z.lazy(() => exports.SiteUpdateManyWithoutSiteTemplateNestedInputSchema).optional(),
    siteTemplateDataDef: zod_1.z.lazy(() => exports.SiteTemplateDataDefUpdateOneWithoutSiteTemplateNestedInputSchema).optional()
}).strict();
exports.SiteTemplateUncheckedUpdateInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    template: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    site: zod_1.z.lazy(() => exports.SiteUncheckedUpdateManyWithoutSiteTemplateNestedInputSchema).optional(),
    siteTemplateDataDef: zod_1.z.lazy(() => exports.SiteTemplateDataDefUncheckedUpdateOneWithoutSiteTemplateNestedInputSchema).optional()
}).strict();
exports.SiteTemplateCreateManyInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    name: zod_1.z.string(),
    template: zod_1.z.string()
}).strict();
exports.SiteTemplateUpdateManyMutationInputSchema = zod_1.z.object({
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    template: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.SiteTemplateUncheckedUpdateManyInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    template: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.SiteTemplateDataDefCreateInputSchema = zod_1.z.object({
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    defData: zod_1.z.union([zod_1.z.lazy(() => exports.JsonNullValueInputSchema), exports.InputJsonValue]),
    siteTemplate: zod_1.z.lazy(() => exports.SiteTemplateCreateNestedOneWithoutSiteTemplateDataDefInputSchema)
}).strict();
exports.SiteTemplateDataDefUncheckedCreateInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    siteTemplateId: zod_1.z.number().int(),
    defData: zod_1.z.union([zod_1.z.lazy(() => exports.JsonNullValueInputSchema), exports.InputJsonValue]),
}).strict();
exports.SiteTemplateDataDefUpdateInputSchema = zod_1.z.object({
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    defData: zod_1.z.union([zod_1.z.lazy(() => exports.JsonNullValueInputSchema), exports.InputJsonValue]).optional(),
    siteTemplate: zod_1.z.lazy(() => exports.SiteTemplateUpdateOneRequiredWithoutSiteTemplateDataDefNestedInputSchema).optional()
}).strict();
exports.SiteTemplateDataDefUncheckedUpdateInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    siteTemplateId: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    defData: zod_1.z.union([zod_1.z.lazy(() => exports.JsonNullValueInputSchema), exports.InputJsonValue]).optional(),
}).strict();
exports.SiteTemplateDataDefCreateManyInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    siteTemplateId: zod_1.z.number().int(),
    defData: zod_1.z.union([zod_1.z.lazy(() => exports.JsonNullValueInputSchema), exports.InputJsonValue]),
}).strict();
exports.SiteTemplateDataDefUpdateManyMutationInputSchema = zod_1.z.object({
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    defData: zod_1.z.union([zod_1.z.lazy(() => exports.JsonNullValueInputSchema), exports.InputJsonValue]).optional(),
}).strict();
exports.SiteTemplateDataDefUncheckedUpdateManyInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    siteTemplateId: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    defData: zod_1.z.union([zod_1.z.lazy(() => exports.JsonNullValueInputSchema), exports.InputJsonValue]).optional(),
}).strict();
exports.CustomerCreateInputSchema = zod_1.z.object({
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    name: zod_1.z.string(),
    extendData: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValue]).optional(),
    site: zod_1.z.lazy(() => exports.SiteCreateNestedManyWithoutCustomerInputSchema).optional()
}).strict();
exports.CustomerUncheckedCreateInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    name: zod_1.z.string(),
    extendData: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValue]).optional(),
    site: zod_1.z.lazy(() => exports.SiteUncheckedCreateNestedManyWithoutCustomerInputSchema).optional()
}).strict();
exports.CustomerUpdateInputSchema = zod_1.z.object({
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    extendData: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValue]).optional(),
    site: zod_1.z.lazy(() => exports.SiteUpdateManyWithoutCustomerNestedInputSchema).optional()
}).strict();
exports.CustomerUncheckedUpdateInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    extendData: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValue]).optional(),
    site: zod_1.z.lazy(() => exports.SiteUncheckedUpdateManyWithoutCustomerNestedInputSchema).optional()
}).strict();
exports.CustomerCreateManyInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    name: zod_1.z.string(),
    extendData: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValue]).optional(),
}).strict();
exports.CustomerUpdateManyMutationInputSchema = zod_1.z.object({
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    extendData: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValue]).optional(),
}).strict();
exports.CustomerUncheckedUpdateManyInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    extendData: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValue]).optional(),
}).strict();
exports.SiteCreateInputSchema = zod_1.z.object({
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    name: zod_1.z.string(),
    cosUrl: zod_1.z.string().optional(),
    slotData: zod_1.z.union([zod_1.z.lazy(() => exports.JsonNullValueInputSchema), exports.InputJsonValue]).optional(),
    siteTemplate: zod_1.z.lazy(() => exports.SiteTemplateCreateNestedOneWithoutSiteInputSchema),
    customer: zod_1.z.lazy(() => exports.CustomerCreateNestedOneWithoutSiteInputSchema),
    project: zod_1.z.lazy(() => exports.ProjectCreateNestedOneWithoutSiteInputSchema).optional()
}).strict();
exports.SiteUncheckedCreateInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    name: zod_1.z.string(),
    cosUrl: zod_1.z.string().optional(),
    siteTemplateId: zod_1.z.number().int(),
    customerId: zod_1.z.number().int(),
    slotData: zod_1.z.union([zod_1.z.lazy(() => exports.JsonNullValueInputSchema), exports.InputJsonValue]).optional(),
    projectId: zod_1.z.string().optional().nullable()
}).strict();
exports.SiteUpdateInputSchema = zod_1.z.object({
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    cosUrl: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    slotData: zod_1.z.union([zod_1.z.lazy(() => exports.JsonNullValueInputSchema), exports.InputJsonValue]).optional(),
    siteTemplate: zod_1.z.lazy(() => exports.SiteTemplateUpdateOneRequiredWithoutSiteNestedInputSchema).optional(),
    customer: zod_1.z.lazy(() => exports.CustomerUpdateOneRequiredWithoutSiteNestedInputSchema).optional(),
    project: zod_1.z.lazy(() => exports.ProjectUpdateOneWithoutSiteNestedInputSchema).optional()
}).strict();
exports.SiteUncheckedUpdateInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    cosUrl: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    siteTemplateId: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    customerId: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    slotData: zod_1.z.union([zod_1.z.lazy(() => exports.JsonNullValueInputSchema), exports.InputJsonValue]).optional(),
    projectId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();
exports.SiteCreateManyInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    name: zod_1.z.string(),
    cosUrl: zod_1.z.string().optional(),
    siteTemplateId: zod_1.z.number().int(),
    customerId: zod_1.z.number().int(),
    slotData: zod_1.z.union([zod_1.z.lazy(() => exports.JsonNullValueInputSchema), exports.InputJsonValue]).optional(),
    projectId: zod_1.z.string().optional().nullable()
}).strict();
exports.SiteUpdateManyMutationInputSchema = zod_1.z.object({
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    cosUrl: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    slotData: zod_1.z.union([zod_1.z.lazy(() => exports.JsonNullValueInputSchema), exports.InputJsonValue]).optional(),
}).strict();
exports.SiteUncheckedUpdateManyInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    cosUrl: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    siteTemplateId: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    customerId: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    slotData: zod_1.z.union([zod_1.z.lazy(() => exports.JsonNullValueInputSchema), exports.InputJsonValue]).optional(),
    projectId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();
exports.UserCreateInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    name: zod_1.z.string().optional().nullable(),
    email: zod_1.z.string().optional().nullable(),
    emailVerified: zod_1.z.date().optional().nullable(),
    image: zod_1.z.string().optional().nullable(),
    createdAt: zod_1.z.date().optional(),
    accounts: zod_1.z.lazy(() => exports.AccountCreateNestedManyWithoutUserInputSchema).optional(),
    sessions: zod_1.z.lazy(() => exports.SessionCreateNestedManyWithoutUserInputSchema).optional()
}).strict();
exports.UserUncheckedCreateInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    name: zod_1.z.string().optional().nullable(),
    email: zod_1.z.string().optional().nullable(),
    emailVerified: zod_1.z.date().optional().nullable(),
    image: zod_1.z.string().optional().nullable(),
    createdAt: zod_1.z.date().optional(),
    accounts: zod_1.z.lazy(() => exports.AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
    sessions: zod_1.z.lazy(() => exports.SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();
exports.UserUpdateInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    emailVerified: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
    image: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    accounts: zod_1.z.lazy(() => exports.AccountUpdateManyWithoutUserNestedInputSchema).optional(),
    sessions: zod_1.z.lazy(() => exports.SessionUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();
exports.UserUncheckedUpdateInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    emailVerified: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
    image: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    accounts: zod_1.z.lazy(() => exports.AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
    sessions: zod_1.z.lazy(() => exports.SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();
exports.UserCreateManyInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    name: zod_1.z.string().optional().nullable(),
    email: zod_1.z.string().optional().nullable(),
    emailVerified: zod_1.z.date().optional().nullable(),
    image: zod_1.z.string().optional().nullable(),
    createdAt: zod_1.z.date().optional()
}).strict();
exports.UserUpdateManyMutationInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    emailVerified: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
    image: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.UserUncheckedUpdateManyInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    emailVerified: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
    image: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.AccountCreateInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    type: zod_1.z.string(),
    provider: zod_1.z.string(),
    providerAccountId: zod_1.z.string(),
    refresh_token: zod_1.z.string().optional().nullable(),
    refresh_token_expires_in: zod_1.z.number().int().optional().nullable(),
    access_token: zod_1.z.string().optional().nullable(),
    expires_at: zod_1.z.number().int().optional().nullable(),
    token_type: zod_1.z.string().optional().nullable(),
    scope: zod_1.z.string().optional().nullable(),
    id_token: zod_1.z.string().optional().nullable(),
    session_state: zod_1.z.string().optional().nullable(),
    user: zod_1.z.lazy(() => exports.UserCreateNestedOneWithoutAccountsInputSchema)
}).strict();
exports.AccountUncheckedCreateInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    userId: zod_1.z.string(),
    type: zod_1.z.string(),
    provider: zod_1.z.string(),
    providerAccountId: zod_1.z.string(),
    refresh_token: zod_1.z.string().optional().nullable(),
    refresh_token_expires_in: zod_1.z.number().int().optional().nullable(),
    access_token: zod_1.z.string().optional().nullable(),
    expires_at: zod_1.z.number().int().optional().nullable(),
    token_type: zod_1.z.string().optional().nullable(),
    scope: zod_1.z.string().optional().nullable(),
    id_token: zod_1.z.string().optional().nullable(),
    session_state: zod_1.z.string().optional().nullable()
}).strict();
exports.AccountUpdateInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    type: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    provider: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    providerAccountId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    refresh_token: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    refresh_token_expires_in: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
    access_token: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    expires_at: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
    token_type: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    scope: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    id_token: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    session_state: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    user: zod_1.z.lazy(() => exports.UserUpdateOneRequiredWithoutAccountsNestedInputSchema).optional()
}).strict();
exports.AccountUncheckedUpdateInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    userId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    type: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    provider: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    providerAccountId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    refresh_token: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    refresh_token_expires_in: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
    access_token: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    expires_at: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
    token_type: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    scope: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    id_token: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    session_state: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();
exports.AccountCreateManyInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    userId: zod_1.z.string(),
    type: zod_1.z.string(),
    provider: zod_1.z.string(),
    providerAccountId: zod_1.z.string(),
    refresh_token: zod_1.z.string().optional().nullable(),
    refresh_token_expires_in: zod_1.z.number().int().optional().nullable(),
    access_token: zod_1.z.string().optional().nullable(),
    expires_at: zod_1.z.number().int().optional().nullable(),
    token_type: zod_1.z.string().optional().nullable(),
    scope: zod_1.z.string().optional().nullable(),
    id_token: zod_1.z.string().optional().nullable(),
    session_state: zod_1.z.string().optional().nullable()
}).strict();
exports.AccountUpdateManyMutationInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    type: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    provider: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    providerAccountId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    refresh_token: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    refresh_token_expires_in: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
    access_token: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    expires_at: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
    token_type: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    scope: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    id_token: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    session_state: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();
exports.AccountUncheckedUpdateManyInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    userId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    type: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    provider: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    providerAccountId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    refresh_token: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    refresh_token_expires_in: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
    access_token: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    expires_at: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
    token_type: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    scope: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    id_token: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    session_state: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();
exports.SessionCreateInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    sessionToken: zod_1.z.string(),
    expires: zod_1.z.date(),
    user: zod_1.z.lazy(() => exports.UserCreateNestedOneWithoutSessionsInputSchema)
}).strict();
exports.SessionUncheckedCreateInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    sessionToken: zod_1.z.string(),
    userId: zod_1.z.string(),
    expires: zod_1.z.date()
}).strict();
exports.SessionUpdateInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    sessionToken: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    expires: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    user: zod_1.z.lazy(() => exports.UserUpdateOneRequiredWithoutSessionsNestedInputSchema).optional()
}).strict();
exports.SessionUncheckedUpdateInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    sessionToken: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    userId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    expires: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.SessionCreateManyInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    sessionToken: zod_1.z.string(),
    userId: zod_1.z.string(),
    expires: zod_1.z.date()
}).strict();
exports.SessionUpdateManyMutationInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    sessionToken: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    expires: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.SessionUncheckedUpdateManyInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    sessionToken: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    userId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    expires: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.VerificationTokenCreateInputSchema = zod_1.z.object({
    identifier: zod_1.z.string(),
    token: zod_1.z.string(),
    expires: zod_1.z.date()
}).strict();
exports.VerificationTokenUncheckedCreateInputSchema = zod_1.z.object({
    identifier: zod_1.z.string(),
    token: zod_1.z.string(),
    expires: zod_1.z.date()
}).strict();
exports.VerificationTokenUpdateInputSchema = zod_1.z.object({
    identifier: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    token: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    expires: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.VerificationTokenUncheckedUpdateInputSchema = zod_1.z.object({
    identifier: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    token: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    expires: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.VerificationTokenCreateManyInputSchema = zod_1.z.object({
    identifier: zod_1.z.string(),
    token: zod_1.z.string(),
    expires: zod_1.z.date()
}).strict();
exports.VerificationTokenUpdateManyMutationInputSchema = zod_1.z.object({
    identifier: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    token: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    expires: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.VerificationTokenUncheckedUpdateManyInputSchema = zod_1.z.object({
    identifier: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    token: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    expires: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.ProjectCreateInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    name: zod_1.z.string(),
    slug: zod_1.z.string(),
    logo: zod_1.z.string().optional().nullable(),
    password: zod_1.z.string().optional().nullable(),
    type: zod_1.z.string().optional(),
    usage: zod_1.z.number().int().optional(),
    usageLimit: zod_1.z.number().int().optional(),
    plan: zod_1.z.string().optional(),
    stripeId: zod_1.z.string().optional().nullable(),
    billingCycleStart: zod_1.z.number().int().optional().nullable(),
    region: zod_1.z.string().optional().nullable(),
    endpoint: zod_1.z.string().optional().nullable(),
    bucket: zod_1.z.string().optional().nullable(),
    useHost: zod_1.z.string().optional().nullable(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    users: zod_1.z.lazy(() => exports.ProjectUsersCreateNestedManyWithoutProjectInputSchema).optional(),
    invites: zod_1.z.lazy(() => exports.ProjectInviteCreateNestedManyWithoutProjectInputSchema).optional(),
    sentEmails: zod_1.z.lazy(() => exports.SentEmailCreateNestedManyWithoutProjectInputSchema).optional(),
    domains: zod_1.z.lazy(() => exports.DomainCreateNestedManyWithoutProjectInputSchema).optional(),
    links: zod_1.z.lazy(() => exports.LinkCreateNestedManyWithoutProjectInputSchema).optional(),
    tags: zod_1.z.lazy(() => exports.TagCreateNestedManyWithoutProjectInputSchema).optional(),
    site: zod_1.z.lazy(() => exports.SiteCreateNestedOneWithoutProjectInputSchema).optional()
}).strict();
exports.ProjectUncheckedCreateInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    name: zod_1.z.string(),
    slug: zod_1.z.string(),
    logo: zod_1.z.string().optional().nullable(),
    password: zod_1.z.string().optional().nullable(),
    type: zod_1.z.string().optional(),
    usage: zod_1.z.number().int().optional(),
    usageLimit: zod_1.z.number().int().optional(),
    plan: zod_1.z.string().optional(),
    stripeId: zod_1.z.string().optional().nullable(),
    billingCycleStart: zod_1.z.number().int().optional().nullable(),
    region: zod_1.z.string().optional().nullable(),
    endpoint: zod_1.z.string().optional().nullable(),
    bucket: zod_1.z.string().optional().nullable(),
    useHost: zod_1.z.string().optional().nullable(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    users: zod_1.z.lazy(() => exports.ProjectUsersUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
    invites: zod_1.z.lazy(() => exports.ProjectInviteUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
    sentEmails: zod_1.z.lazy(() => exports.SentEmailUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
    domains: zod_1.z.lazy(() => exports.DomainUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
    links: zod_1.z.lazy(() => exports.LinkUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
    tags: zod_1.z.lazy(() => exports.TagUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
    site: zod_1.z.lazy(() => exports.SiteUncheckedCreateNestedOneWithoutProjectInputSchema).optional()
}).strict();
exports.ProjectUpdateInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    slug: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    logo: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    type: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    usage: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    usageLimit: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    plan: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    stripeId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    billingCycleStart: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
    region: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    endpoint: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    bucket: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    useHost: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    users: zod_1.z.lazy(() => exports.ProjectUsersUpdateManyWithoutProjectNestedInputSchema).optional(),
    invites: zod_1.z.lazy(() => exports.ProjectInviteUpdateManyWithoutProjectNestedInputSchema).optional(),
    sentEmails: zod_1.z.lazy(() => exports.SentEmailUpdateManyWithoutProjectNestedInputSchema).optional(),
    domains: zod_1.z.lazy(() => exports.DomainUpdateManyWithoutProjectNestedInputSchema).optional(),
    links: zod_1.z.lazy(() => exports.LinkUpdateManyWithoutProjectNestedInputSchema).optional(),
    tags: zod_1.z.lazy(() => exports.TagUpdateManyWithoutProjectNestedInputSchema).optional(),
    site: zod_1.z.lazy(() => exports.SiteUpdateOneWithoutProjectNestedInputSchema).optional()
}).strict();
exports.ProjectUncheckedUpdateInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    slug: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    logo: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    type: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    usage: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    usageLimit: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    plan: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    stripeId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    billingCycleStart: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
    region: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    endpoint: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    bucket: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    useHost: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    users: zod_1.z.lazy(() => exports.ProjectUsersUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
    invites: zod_1.z.lazy(() => exports.ProjectInviteUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
    sentEmails: zod_1.z.lazy(() => exports.SentEmailUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
    domains: zod_1.z.lazy(() => exports.DomainUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
    links: zod_1.z.lazy(() => exports.LinkUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
    tags: zod_1.z.lazy(() => exports.TagUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
    site: zod_1.z.lazy(() => exports.SiteUncheckedUpdateOneWithoutProjectNestedInputSchema).optional()
}).strict();
exports.ProjectCreateManyInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    name: zod_1.z.string(),
    slug: zod_1.z.string(),
    logo: zod_1.z.string().optional().nullable(),
    password: zod_1.z.string().optional().nullable(),
    type: zod_1.z.string().optional(),
    usage: zod_1.z.number().int().optional(),
    usageLimit: zod_1.z.number().int().optional(),
    plan: zod_1.z.string().optional(),
    stripeId: zod_1.z.string().optional().nullable(),
    billingCycleStart: zod_1.z.number().int().optional().nullable(),
    region: zod_1.z.string().optional().nullable(),
    endpoint: zod_1.z.string().optional().nullable(),
    bucket: zod_1.z.string().optional().nullable(),
    useHost: zod_1.z.string().optional().nullable(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional()
}).strict();
exports.ProjectUpdateManyMutationInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    slug: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    logo: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    type: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    usage: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    usageLimit: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    plan: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    stripeId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    billingCycleStart: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
    region: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    endpoint: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    bucket: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    useHost: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.ProjectUncheckedUpdateManyInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    slug: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    logo: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    type: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    usage: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    usageLimit: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    plan: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    stripeId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    billingCycleStart: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
    region: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    endpoint: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    bucket: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    useHost: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.ProjectInviteCreateInputSchema = zod_1.z.object({
    email: zod_1.z.string(),
    expires: zod_1.z.date(),
    createdAt: zod_1.z.date().optional(),
    project: zod_1.z.lazy(() => exports.ProjectCreateNestedOneWithoutInvitesInputSchema)
}).strict();
exports.ProjectInviteUncheckedCreateInputSchema = zod_1.z.object({
    email: zod_1.z.string(),
    expires: zod_1.z.date(),
    projectId: zod_1.z.string(),
    createdAt: zod_1.z.date().optional()
}).strict();
exports.ProjectInviteUpdateInputSchema = zod_1.z.object({
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    expires: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    project: zod_1.z.lazy(() => exports.ProjectUpdateOneRequiredWithoutInvitesNestedInputSchema).optional()
}).strict();
exports.ProjectInviteUncheckedUpdateInputSchema = zod_1.z.object({
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    expires: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    projectId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.ProjectInviteCreateManyInputSchema = zod_1.z.object({
    email: zod_1.z.string(),
    expires: zod_1.z.date(),
    projectId: zod_1.z.string(),
    createdAt: zod_1.z.date().optional()
}).strict();
exports.ProjectInviteUpdateManyMutationInputSchema = zod_1.z.object({
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    expires: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.ProjectInviteUncheckedUpdateManyInputSchema = zod_1.z.object({
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    expires: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    projectId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.ProjectUsersCreateInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    role: zod_1.z.lazy(() => exports.RoleSchema).optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    userId: zod_1.z.string().optional().nullable(),
    project: zod_1.z.lazy(() => exports.ProjectCreateNestedOneWithoutUsersInputSchema)
}).strict();
exports.ProjectUsersUncheckedCreateInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    role: zod_1.z.lazy(() => exports.RoleSchema).optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    userId: zod_1.z.string().optional().nullable(),
    projectId: zod_1.z.string()
}).strict();
exports.ProjectUsersUpdateInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    role: zod_1.z.union([zod_1.z.lazy(() => exports.RoleSchema), zod_1.z.lazy(() => exports.EnumRoleFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    userId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    project: zod_1.z.lazy(() => exports.ProjectUpdateOneRequiredWithoutUsersNestedInputSchema).optional()
}).strict();
exports.ProjectUsersUncheckedUpdateInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    role: zod_1.z.union([zod_1.z.lazy(() => exports.RoleSchema), zod_1.z.lazy(() => exports.EnumRoleFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    userId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    projectId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.ProjectUsersCreateManyInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    role: zod_1.z.lazy(() => exports.RoleSchema).optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    userId: zod_1.z.string().optional().nullable(),
    projectId: zod_1.z.string()
}).strict();
exports.ProjectUsersUpdateManyMutationInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    role: zod_1.z.union([zod_1.z.lazy(() => exports.RoleSchema), zod_1.z.lazy(() => exports.EnumRoleFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    userId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();
exports.ProjectUsersUncheckedUpdateManyInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    role: zod_1.z.union([zod_1.z.lazy(() => exports.RoleSchema), zod_1.z.lazy(() => exports.EnumRoleFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    userId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    projectId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.SentEmailCreateInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    type: zod_1.z.lazy(() => exports.EmailTypeSchema),
    createdAt: zod_1.z.date().optional(),
    project: zod_1.z.lazy(() => exports.ProjectCreateNestedOneWithoutSentEmailsInputSchema).optional()
}).strict();
exports.SentEmailUncheckedCreateInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    type: zod_1.z.lazy(() => exports.EmailTypeSchema),
    createdAt: zod_1.z.date().optional(),
    projectId: zod_1.z.string().optional().nullable()
}).strict();
exports.SentEmailUpdateInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    type: zod_1.z.union([zod_1.z.lazy(() => exports.EmailTypeSchema), zod_1.z.lazy(() => exports.EnumEmailTypeFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    project: zod_1.z.lazy(() => exports.ProjectUpdateOneWithoutSentEmailsNestedInputSchema).optional()
}).strict();
exports.SentEmailUncheckedUpdateInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    type: zod_1.z.union([zod_1.z.lazy(() => exports.EmailTypeSchema), zod_1.z.lazy(() => exports.EnumEmailTypeFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    projectId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();
exports.SentEmailCreateManyInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    type: zod_1.z.lazy(() => exports.EmailTypeSchema),
    createdAt: zod_1.z.date().optional(),
    projectId: zod_1.z.string().optional().nullable()
}).strict();
exports.SentEmailUpdateManyMutationInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    type: zod_1.z.union([zod_1.z.lazy(() => exports.EmailTypeSchema), zod_1.z.lazy(() => exports.EnumEmailTypeFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.SentEmailUncheckedUpdateManyInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    type: zod_1.z.union([zod_1.z.lazy(() => exports.EmailTypeSchema), zod_1.z.lazy(() => exports.EnumEmailTypeFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    projectId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();
exports.DomainCreateInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    slug: zod_1.z.string(),
    verified: zod_1.z.boolean().optional(),
    target: zod_1.z.string().optional().nullable(),
    type: zod_1.z.string().optional(),
    description: zod_1.z.string().optional().nullable(),
    primary: zod_1.z.boolean().optional(),
    lastChecked: zod_1.z.date().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    project: zod_1.z.lazy(() => exports.ProjectCreateNestedOneWithoutDomainsInputSchema).optional(),
    links: zod_1.z.lazy(() => exports.LinkCreateNestedManyWithoutProjectDomainInputSchema).optional()
}).strict();
exports.DomainUncheckedCreateInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    slug: zod_1.z.string(),
    verified: zod_1.z.boolean().optional(),
    target: zod_1.z.string().optional().nullable(),
    type: zod_1.z.string().optional(),
    description: zod_1.z.string().optional().nullable(),
    projectId: zod_1.z.string().optional().nullable(),
    primary: zod_1.z.boolean().optional(),
    lastChecked: zod_1.z.date().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    links: zod_1.z.lazy(() => exports.LinkUncheckedCreateNestedManyWithoutProjectDomainInputSchema).optional()
}).strict();
exports.DomainUpdateInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    slug: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    verified: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    target: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    type: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    description: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    primary: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    lastChecked: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    project: zod_1.z.lazy(() => exports.ProjectUpdateOneWithoutDomainsNestedInputSchema).optional(),
    links: zod_1.z.lazy(() => exports.LinkUpdateManyWithoutProjectDomainNestedInputSchema).optional()
}).strict();
exports.DomainUncheckedUpdateInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    slug: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    verified: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    target: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    type: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    description: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    projectId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    primary: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    lastChecked: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    links: zod_1.z.lazy(() => exports.LinkUncheckedUpdateManyWithoutProjectDomainNestedInputSchema).optional()
}).strict();
exports.DomainCreateManyInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    slug: zod_1.z.string(),
    verified: zod_1.z.boolean().optional(),
    target: zod_1.z.string().optional().nullable(),
    type: zod_1.z.string().optional(),
    description: zod_1.z.string().optional().nullable(),
    projectId: zod_1.z.string().optional().nullable(),
    primary: zod_1.z.boolean().optional(),
    lastChecked: zod_1.z.date().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional()
}).strict();
exports.DomainUpdateManyMutationInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    slug: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    verified: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    target: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    type: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    description: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    primary: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    lastChecked: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.DomainUncheckedUpdateManyInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    slug: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    verified: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    target: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    type: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    description: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    projectId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    primary: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    lastChecked: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.LinkCreateInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    key: zod_1.z.string(),
    url: zod_1.z.string(),
    archived: zod_1.z.boolean().optional(),
    expiresAt: zod_1.z.date().optional().nullable(),
    password: zod_1.z.string().optional().nullable(),
    proxy: zod_1.z.boolean().optional(),
    title: zod_1.z.string().optional().nullable(),
    description: zod_1.z.string().optional().nullable(),
    image: zod_1.z.string().optional().nullable(),
    utm_source: zod_1.z.string().optional().nullable(),
    utm_medium: zod_1.z.string().optional().nullable(),
    utm_campaign: zod_1.z.string().optional().nullable(),
    utm_term: zod_1.z.string().optional().nullable(),
    utm_content: zod_1.z.string().optional().nullable(),
    rewrite: zod_1.z.boolean().optional(),
    ios: zod_1.z.string().optional().nullable(),
    android: zod_1.z.string().optional().nullable(),
    userId: zod_1.z.string().optional().nullable(),
    clicks: zod_1.z.number().int().optional(),
    publicStats: zod_1.z.boolean().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    project: zod_1.z.lazy(() => exports.ProjectCreateNestedOneWithoutLinksInputSchema).optional(),
    projectDomain: zod_1.z.lazy(() => exports.DomainCreateNestedOneWithoutLinksInputSchema).optional(),
    tag: zod_1.z.lazy(() => exports.TagCreateNestedOneWithoutLinksInputSchema).optional()
}).strict();
exports.LinkUncheckedCreateInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    domain: zod_1.z.string(),
    key: zod_1.z.string(),
    url: zod_1.z.string(),
    archived: zod_1.z.boolean().optional(),
    expiresAt: zod_1.z.date().optional().nullable(),
    password: zod_1.z.string().optional().nullable(),
    proxy: zod_1.z.boolean().optional(),
    title: zod_1.z.string().optional().nullable(),
    description: zod_1.z.string().optional().nullable(),
    image: zod_1.z.string().optional().nullable(),
    utm_source: zod_1.z.string().optional().nullable(),
    utm_medium: zod_1.z.string().optional().nullable(),
    utm_campaign: zod_1.z.string().optional().nullable(),
    utm_term: zod_1.z.string().optional().nullable(),
    utm_content: zod_1.z.string().optional().nullable(),
    rewrite: zod_1.z.boolean().optional(),
    ios: zod_1.z.string().optional().nullable(),
    android: zod_1.z.string().optional().nullable(),
    userId: zod_1.z.string().optional().nullable(),
    projectId: zod_1.z.string().optional().nullable(),
    clicks: zod_1.z.number().int().optional(),
    publicStats: zod_1.z.boolean().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    tagId: zod_1.z.string().optional().nullable()
}).strict();
exports.LinkUpdateInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    key: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    url: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    archived: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    expiresAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    proxy: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    title: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    description: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    image: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_source: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_medium: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_campaign: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_term: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_content: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    rewrite: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    ios: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    android: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    userId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    clicks: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    publicStats: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    project: zod_1.z.lazy(() => exports.ProjectUpdateOneWithoutLinksNestedInputSchema).optional(),
    projectDomain: zod_1.z.lazy(() => exports.DomainUpdateOneWithoutLinksNestedInputSchema).optional(),
    tag: zod_1.z.lazy(() => exports.TagUpdateOneWithoutLinksNestedInputSchema).optional()
}).strict();
exports.LinkUncheckedUpdateInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    domain: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    key: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    url: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    archived: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    expiresAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    proxy: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    title: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    description: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    image: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_source: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_medium: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_campaign: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_term: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_content: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    rewrite: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    ios: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    android: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    userId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    projectId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    clicks: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    publicStats: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    tagId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();
exports.LinkCreateManyInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    domain: zod_1.z.string(),
    key: zod_1.z.string(),
    url: zod_1.z.string(),
    archived: zod_1.z.boolean().optional(),
    expiresAt: zod_1.z.date().optional().nullable(),
    password: zod_1.z.string().optional().nullable(),
    proxy: zod_1.z.boolean().optional(),
    title: zod_1.z.string().optional().nullable(),
    description: zod_1.z.string().optional().nullable(),
    image: zod_1.z.string().optional().nullable(),
    utm_source: zod_1.z.string().optional().nullable(),
    utm_medium: zod_1.z.string().optional().nullable(),
    utm_campaign: zod_1.z.string().optional().nullable(),
    utm_term: zod_1.z.string().optional().nullable(),
    utm_content: zod_1.z.string().optional().nullable(),
    rewrite: zod_1.z.boolean().optional(),
    ios: zod_1.z.string().optional().nullable(),
    android: zod_1.z.string().optional().nullable(),
    userId: zod_1.z.string().optional().nullable(),
    projectId: zod_1.z.string().optional().nullable(),
    clicks: zod_1.z.number().int().optional(),
    publicStats: zod_1.z.boolean().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    tagId: zod_1.z.string().optional().nullable()
}).strict();
exports.LinkUpdateManyMutationInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    key: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    url: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    archived: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    expiresAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    proxy: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    title: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    description: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    image: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_source: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_medium: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_campaign: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_term: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_content: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    rewrite: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    ios: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    android: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    userId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    clicks: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    publicStats: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.LinkUncheckedUpdateManyInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    domain: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    key: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    url: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    archived: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    expiresAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    proxy: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    title: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    description: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    image: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_source: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_medium: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_campaign: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_term: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_content: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    rewrite: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    ios: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    android: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    userId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    projectId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    clicks: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    publicStats: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    tagId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();
exports.TagCreateInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    name: zod_1.z.string(),
    color: zod_1.z.string().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    project: zod_1.z.lazy(() => exports.ProjectCreateNestedOneWithoutTagsInputSchema),
    links: zod_1.z.lazy(() => exports.LinkCreateNestedManyWithoutTagInputSchema).optional()
}).strict();
exports.TagUncheckedCreateInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    name: zod_1.z.string(),
    color: zod_1.z.string().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    projectId: zod_1.z.string(),
    links: zod_1.z.lazy(() => exports.LinkUncheckedCreateNestedManyWithoutTagInputSchema).optional()
}).strict();
exports.TagUpdateInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    color: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    project: zod_1.z.lazy(() => exports.ProjectUpdateOneRequiredWithoutTagsNestedInputSchema).optional(),
    links: zod_1.z.lazy(() => exports.LinkUpdateManyWithoutTagNestedInputSchema).optional()
}).strict();
exports.TagUncheckedUpdateInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    color: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    projectId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    links: zod_1.z.lazy(() => exports.LinkUncheckedUpdateManyWithoutTagNestedInputSchema).optional()
}).strict();
exports.TagCreateManyInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    name: zod_1.z.string(),
    color: zod_1.z.string().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    projectId: zod_1.z.string()
}).strict();
exports.TagUpdateManyMutationInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    color: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.TagUncheckedUpdateManyInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    color: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    projectId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.IntFilterSchema = zod_1.z.object({
    equals: zod_1.z.number().optional(),
    in: zod_1.z.union([zod_1.z.number().array(), zod_1.z.number()]).optional(),
    notIn: zod_1.z.union([zod_1.z.number().array(), zod_1.z.number()]).optional(),
    lt: zod_1.z.number().optional(),
    lte: zod_1.z.number().optional(),
    gt: zod_1.z.number().optional(),
    gte: zod_1.z.number().optional(),
    not: zod_1.z.union([zod_1.z.number(), zod_1.z.lazy(() => exports.NestedIntFilterSchema)]).optional(),
}).strict();
exports.DateTimeFilterSchema = zod_1.z.object({
    equals: zod_1.z.date().optional(),
    in: zod_1.z.union([zod_1.z.date().array(), zod_1.z.date()]).optional(),
    notIn: zod_1.z.union([zod_1.z.date().array(), zod_1.z.date()]).optional(),
    lt: zod_1.z.date().optional(),
    lte: zod_1.z.date().optional(),
    gt: zod_1.z.date().optional(),
    gte: zod_1.z.date().optional(),
    not: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.NestedDateTimeFilterSchema)]).optional(),
}).strict();
exports.StringFilterSchema = zod_1.z.object({
    equals: zod_1.z.string().optional(),
    in: zod_1.z.union([zod_1.z.string().array(), zod_1.z.string()]).optional(),
    notIn: zod_1.z.union([zod_1.z.string().array(), zod_1.z.string()]).optional(),
    lt: zod_1.z.string().optional(),
    lte: zod_1.z.string().optional(),
    gt: zod_1.z.string().optional(),
    gte: zod_1.z.string().optional(),
    contains: zod_1.z.string().optional(),
    startsWith: zod_1.z.string().optional(),
    endsWith: zod_1.z.string().optional(),
    search: zod_1.z.string().optional(),
    not: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NestedStringFilterSchema)]).optional(),
}).strict();
exports.StringNullableFilterSchema = zod_1.z.object({
    equals: zod_1.z.string().optional().nullable(),
    in: zod_1.z.union([zod_1.z.string().array(), zod_1.z.string()]).optional().nullable(),
    notIn: zod_1.z.union([zod_1.z.string().array(), zod_1.z.string()]).optional().nullable(),
    lt: zod_1.z.string().optional(),
    lte: zod_1.z.string().optional(),
    gt: zod_1.z.string().optional(),
    gte: zod_1.z.string().optional(),
    contains: zod_1.z.string().optional(),
    startsWith: zod_1.z.string().optional(),
    endsWith: zod_1.z.string().optional(),
    search: zod_1.z.string().optional(),
    not: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NestedStringNullableFilterSchema)]).optional().nullable(),
}).strict();
exports.SortOrderInputSchema = zod_1.z.object({
    sort: zod_1.z.lazy(() => exports.SortOrderSchema),
    nulls: zod_1.z.lazy(() => exports.NullsOrderSchema).optional()
}).strict();
exports.AuditsOrderByRelevanceInputSchema = zod_1.z.object({
    fields: zod_1.z.union([zod_1.z.lazy(() => exports.AuditsOrderByRelevanceFieldEnumSchema), zod_1.z.lazy(() => exports.AuditsOrderByRelevanceFieldEnumSchema).array()]),
    sort: zod_1.z.lazy(() => exports.SortOrderSchema),
    search: zod_1.z.string()
}).strict();
exports.AuditsCountOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    auditId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    auditType: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    userId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    username: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    action: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    auditChanges: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    version: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.AuditsAvgOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    auditId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    version: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.AuditsMaxOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    auditId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    auditType: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    userId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    username: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    action: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    auditChanges: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    version: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.AuditsMinOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    auditId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    auditType: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    userId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    username: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    action: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    auditChanges: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    version: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.AuditsSumOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    auditId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    version: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.IntWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.number().optional(),
    in: zod_1.z.union([zod_1.z.number().array(), zod_1.z.number()]).optional(),
    notIn: zod_1.z.union([zod_1.z.number().array(), zod_1.z.number()]).optional(),
    lt: zod_1.z.number().optional(),
    lte: zod_1.z.number().optional(),
    gt: zod_1.z.number().optional(),
    gte: zod_1.z.number().optional(),
    not: zod_1.z.union([zod_1.z.number(), zod_1.z.lazy(() => exports.NestedIntWithAggregatesFilterSchema)]).optional(),
    _count: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _avg: zod_1.z.lazy(() => exports.NestedFloatFilterSchema).optional(),
    _sum: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional()
}).strict();
exports.DateTimeWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.date().optional(),
    in: zod_1.z.union([zod_1.z.date().array(), zod_1.z.date()]).optional(),
    notIn: zod_1.z.union([zod_1.z.date().array(), zod_1.z.date()]).optional(),
    lt: zod_1.z.date().optional(),
    lte: zod_1.z.date().optional(),
    gt: zod_1.z.date().optional(),
    gte: zod_1.z.date().optional(),
    not: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.NestedDateTimeWithAggregatesFilterSchema)]).optional(),
    _count: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedDateTimeFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedDateTimeFilterSchema).optional()
}).strict();
exports.StringWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.string().optional(),
    in: zod_1.z.union([zod_1.z.string().array(), zod_1.z.string()]).optional(),
    notIn: zod_1.z.union([zod_1.z.string().array(), zod_1.z.string()]).optional(),
    lt: zod_1.z.string().optional(),
    lte: zod_1.z.string().optional(),
    gt: zod_1.z.string().optional(),
    gte: zod_1.z.string().optional(),
    contains: zod_1.z.string().optional(),
    startsWith: zod_1.z.string().optional(),
    endsWith: zod_1.z.string().optional(),
    search: zod_1.z.string().optional(),
    not: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NestedStringWithAggregatesFilterSchema)]).optional(),
    _count: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedStringFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedStringFilterSchema).optional()
}).strict();
exports.StringNullableWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.string().optional().nullable(),
    in: zod_1.z.union([zod_1.z.string().array(), zod_1.z.string()]).optional().nullable(),
    notIn: zod_1.z.union([zod_1.z.string().array(), zod_1.z.string()]).optional().nullable(),
    lt: zod_1.z.string().optional(),
    lte: zod_1.z.string().optional(),
    gt: zod_1.z.string().optional(),
    gte: zod_1.z.string().optional(),
    contains: zod_1.z.string().optional(),
    startsWith: zod_1.z.string().optional(),
    endsWith: zod_1.z.string().optional(),
    search: zod_1.z.string().optional(),
    not: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NestedStringNullableWithAggregatesFilterSchema)]).optional().nullable(),
    _count: zod_1.z.lazy(() => exports.NestedIntNullableFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedStringNullableFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedStringNullableFilterSchema).optional()
}).strict();
exports.BoolFilterSchema = zod_1.z.object({
    equals: zod_1.z.boolean().optional(),
    not: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.NestedBoolFilterSchema)]).optional(),
}).strict();
exports.SiteListRelationFilterSchema = zod_1.z.object({
    every: zod_1.z.lazy(() => exports.SiteWhereInputSchema).optional(),
    some: zod_1.z.lazy(() => exports.SiteWhereInputSchema).optional(),
    none: zod_1.z.lazy(() => exports.SiteWhereInputSchema).optional()
}).strict();
exports.SiteTemplateDataDefRelationFilterSchema = zod_1.z.object({
    is: zod_1.z.lazy(() => exports.SiteTemplateDataDefWhereInputSchema).optional().nullable(),
    isNot: zod_1.z.lazy(() => exports.SiteTemplateDataDefWhereInputSchema).optional().nullable()
}).strict();
exports.SiteOrderByRelationAggregateInputSchema = zod_1.z.object({
    _count: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.SiteTemplateOrderByRelevanceInputSchema = zod_1.z.object({
    fields: zod_1.z.union([zod_1.z.lazy(() => exports.SiteTemplateOrderByRelevanceFieldEnumSchema), zod_1.z.lazy(() => exports.SiteTemplateOrderByRelevanceFieldEnumSchema).array()]),
    sort: zod_1.z.lazy(() => exports.SortOrderSchema),
    search: zod_1.z.string()
}).strict();
exports.SiteTemplateCountOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    isDeleted: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    template: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.SiteTemplateAvgOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.SiteTemplateMaxOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    isDeleted: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    template: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.SiteTemplateMinOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    isDeleted: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    template: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.SiteTemplateSumOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.BoolWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.boolean().optional(),
    not: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.NestedBoolWithAggregatesFilterSchema)]).optional(),
    _count: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedBoolFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedBoolFilterSchema).optional()
}).strict();
exports.JsonFilterSchema = zod_1.z.object({
    equals: zod_1.z.union([exports.InputJsonValue, zod_1.z.lazy(() => exports.JsonNullValueFilterSchema)]).optional(),
    path: zod_1.z.string().optional(),
    string_contains: zod_1.z.string().optional(),
    string_starts_with: zod_1.z.string().optional(),
    string_ends_with: zod_1.z.string().optional(),
    array_contains: exports.InputJsonValue.optional().nullable(),
    array_starts_with: exports.InputJsonValue.optional().nullable(),
    array_ends_with: exports.InputJsonValue.optional().nullable(),
    lt: exports.InputJsonValue.optional(),
    lte: exports.InputJsonValue.optional(),
    gt: exports.InputJsonValue.optional(),
    gte: exports.InputJsonValue.optional(),
    not: zod_1.z.union([exports.InputJsonValue, zod_1.z.lazy(() => exports.JsonNullValueFilterSchema)]).optional(),
}).strict();
exports.SiteTemplateRelationFilterSchema = zod_1.z.object({
    is: zod_1.z.lazy(() => exports.SiteTemplateWhereInputSchema).optional().nullable(),
    isNot: zod_1.z.lazy(() => exports.SiteTemplateWhereInputSchema).optional().nullable()
}).strict();
exports.SiteTemplateDataDefCountOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    isDeleted: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    siteTemplateId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    defData: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.SiteTemplateDataDefAvgOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    siteTemplateId: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.SiteTemplateDataDefMaxOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    isDeleted: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    siteTemplateId: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.SiteTemplateDataDefMinOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    isDeleted: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    siteTemplateId: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.SiteTemplateDataDefSumOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    siteTemplateId: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.JsonWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.union([exports.InputJsonValue, zod_1.z.lazy(() => exports.JsonNullValueFilterSchema)]).optional(),
    path: zod_1.z.string().optional(),
    string_contains: zod_1.z.string().optional(),
    string_starts_with: zod_1.z.string().optional(),
    string_ends_with: zod_1.z.string().optional(),
    array_contains: exports.InputJsonValue.optional().nullable(),
    array_starts_with: exports.InputJsonValue.optional().nullable(),
    array_ends_with: exports.InputJsonValue.optional().nullable(),
    lt: exports.InputJsonValue.optional(),
    lte: exports.InputJsonValue.optional(),
    gt: exports.InputJsonValue.optional(),
    gte: exports.InputJsonValue.optional(),
    not: zod_1.z.union([exports.InputJsonValue, zod_1.z.lazy(() => exports.JsonNullValueFilterSchema)]).optional(),
    _count: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedJsonFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedJsonFilterSchema).optional()
}).strict();
exports.JsonNullableFilterSchema = zod_1.z.object({
    equals: zod_1.z.union([exports.InputJsonValue, zod_1.z.lazy(() => exports.JsonNullValueFilterSchema)]).optional(),
    path: zod_1.z.string().optional(),
    string_contains: zod_1.z.string().optional(),
    string_starts_with: zod_1.z.string().optional(),
    string_ends_with: zod_1.z.string().optional(),
    array_contains: exports.InputJsonValue.optional().nullable(),
    array_starts_with: exports.InputJsonValue.optional().nullable(),
    array_ends_with: exports.InputJsonValue.optional().nullable(),
    lt: exports.InputJsonValue.optional(),
    lte: exports.InputJsonValue.optional(),
    gt: exports.InputJsonValue.optional(),
    gte: exports.InputJsonValue.optional(),
    not: zod_1.z.union([exports.InputJsonValue, zod_1.z.lazy(() => exports.JsonNullValueFilterSchema)]).optional(),
}).strict();
exports.CustomerOrderByRelevanceInputSchema = zod_1.z.object({
    fields: zod_1.z.union([zod_1.z.lazy(() => exports.CustomerOrderByRelevanceFieldEnumSchema), zod_1.z.lazy(() => exports.CustomerOrderByRelevanceFieldEnumSchema).array()]),
    sort: zod_1.z.lazy(() => exports.SortOrderSchema),
    search: zod_1.z.string()
}).strict();
exports.CustomerCountOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    isDeleted: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    extendData: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.CustomerAvgOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.CustomerMaxOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    isDeleted: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.CustomerMinOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    isDeleted: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.CustomerSumOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.JsonNullableWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.union([exports.InputJsonValue, zod_1.z.lazy(() => exports.JsonNullValueFilterSchema)]).optional(),
    path: zod_1.z.string().optional(),
    string_contains: zod_1.z.string().optional(),
    string_starts_with: zod_1.z.string().optional(),
    string_ends_with: zod_1.z.string().optional(),
    array_contains: exports.InputJsonValue.optional().nullable(),
    array_starts_with: exports.InputJsonValue.optional().nullable(),
    array_ends_with: exports.InputJsonValue.optional().nullable(),
    lt: exports.InputJsonValue.optional(),
    lte: exports.InputJsonValue.optional(),
    gt: exports.InputJsonValue.optional(),
    gte: exports.InputJsonValue.optional(),
    not: zod_1.z.union([exports.InputJsonValue, zod_1.z.lazy(() => exports.JsonNullValueFilterSchema)]).optional(),
    _count: zod_1.z.lazy(() => exports.NestedIntNullableFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedJsonNullableFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedJsonNullableFilterSchema).optional()
}).strict();
exports.CustomerRelationFilterSchema = zod_1.z.object({
    is: zod_1.z.lazy(() => exports.CustomerWhereInputSchema).optional().nullable(),
    isNot: zod_1.z.lazy(() => exports.CustomerWhereInputSchema).optional().nullable()
}).strict();
exports.ProjectRelationFilterSchema = zod_1.z.object({
    is: zod_1.z.lazy(() => exports.ProjectWhereInputSchema).optional().nullable(),
    isNot: zod_1.z.lazy(() => exports.ProjectWhereInputSchema).optional().nullable()
}).strict();
exports.SiteOrderByRelevanceInputSchema = zod_1.z.object({
    fields: zod_1.z.union([zod_1.z.lazy(() => exports.SiteOrderByRelevanceFieldEnumSchema), zod_1.z.lazy(() => exports.SiteOrderByRelevanceFieldEnumSchema).array()]),
    sort: zod_1.z.lazy(() => exports.SortOrderSchema),
    search: zod_1.z.string()
}).strict();
exports.SiteCountOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    isDeleted: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    cosUrl: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    siteTemplateId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    customerId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    slotData: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    projectId: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.SiteAvgOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    siteTemplateId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    customerId: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.SiteMaxOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    isDeleted: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    cosUrl: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    siteTemplateId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    customerId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    projectId: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.SiteMinOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    isDeleted: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    cosUrl: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    siteTemplateId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    customerId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    projectId: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.SiteSumOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    siteTemplateId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    customerId: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.DateTimeNullableFilterSchema = zod_1.z.object({
    equals: zod_1.z.date().optional().nullable(),
    in: zod_1.z.union([zod_1.z.date().array(), zod_1.z.date()]).optional().nullable(),
    notIn: zod_1.z.union([zod_1.z.date().array(), zod_1.z.date()]).optional().nullable(),
    lt: zod_1.z.date().optional(),
    lte: zod_1.z.date().optional(),
    gt: zod_1.z.date().optional(),
    gte: zod_1.z.date().optional(),
    not: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.NestedDateTimeNullableFilterSchema)]).optional().nullable(),
}).strict();
exports.AccountListRelationFilterSchema = zod_1.z.object({
    every: zod_1.z.lazy(() => exports.AccountWhereInputSchema).optional(),
    some: zod_1.z.lazy(() => exports.AccountWhereInputSchema).optional(),
    none: zod_1.z.lazy(() => exports.AccountWhereInputSchema).optional()
}).strict();
exports.SessionListRelationFilterSchema = zod_1.z.object({
    every: zod_1.z.lazy(() => exports.SessionWhereInputSchema).optional(),
    some: zod_1.z.lazy(() => exports.SessionWhereInputSchema).optional(),
    none: zod_1.z.lazy(() => exports.SessionWhereInputSchema).optional()
}).strict();
exports.AccountOrderByRelationAggregateInputSchema = zod_1.z.object({
    _count: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.SessionOrderByRelationAggregateInputSchema = zod_1.z.object({
    _count: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.UserOrderByRelevanceInputSchema = zod_1.z.object({
    fields: zod_1.z.union([zod_1.z.lazy(() => exports.UserOrderByRelevanceFieldEnumSchema), zod_1.z.lazy(() => exports.UserOrderByRelevanceFieldEnumSchema).array()]),
    sort: zod_1.z.lazy(() => exports.SortOrderSchema),
    search: zod_1.z.string()
}).strict();
exports.UserCountOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    email: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    emailVerified: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    image: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.UserMaxOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    email: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    emailVerified: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    image: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.UserMinOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    email: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    emailVerified: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    image: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.DateTimeNullableWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.date().optional().nullable(),
    in: zod_1.z.union([zod_1.z.date().array(), zod_1.z.date()]).optional().nullable(),
    notIn: zod_1.z.union([zod_1.z.date().array(), zod_1.z.date()]).optional().nullable(),
    lt: zod_1.z.date().optional(),
    lte: zod_1.z.date().optional(),
    gt: zod_1.z.date().optional(),
    gte: zod_1.z.date().optional(),
    not: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.NestedDateTimeNullableWithAggregatesFilterSchema)]).optional().nullable(),
    _count: zod_1.z.lazy(() => exports.NestedIntNullableFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedDateTimeNullableFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedDateTimeNullableFilterSchema).optional()
}).strict();
exports.IntNullableFilterSchema = zod_1.z.object({
    equals: zod_1.z.number().optional().nullable(),
    in: zod_1.z.union([zod_1.z.number().array(), zod_1.z.number()]).optional().nullable(),
    notIn: zod_1.z.union([zod_1.z.number().array(), zod_1.z.number()]).optional().nullable(),
    lt: zod_1.z.number().optional(),
    lte: zod_1.z.number().optional(),
    gt: zod_1.z.number().optional(),
    gte: zod_1.z.number().optional(),
    not: zod_1.z.union([zod_1.z.number(), zod_1.z.lazy(() => exports.NestedIntNullableFilterSchema)]).optional().nullable(),
}).strict();
exports.UserRelationFilterSchema = zod_1.z.object({
    is: zod_1.z.lazy(() => exports.UserWhereInputSchema).optional().nullable(),
    isNot: zod_1.z.lazy(() => exports.UserWhereInputSchema).optional().nullable()
}).strict();
exports.AccountOrderByRelevanceInputSchema = zod_1.z.object({
    fields: zod_1.z.union([zod_1.z.lazy(() => exports.AccountOrderByRelevanceFieldEnumSchema), zod_1.z.lazy(() => exports.AccountOrderByRelevanceFieldEnumSchema).array()]),
    sort: zod_1.z.lazy(() => exports.SortOrderSchema),
    search: zod_1.z.string()
}).strict();
exports.AccountProviderProviderAccountIdCompoundUniqueInputSchema = zod_1.z.object({
    provider: zod_1.z.string(),
    providerAccountId: zod_1.z.string()
}).strict();
exports.AccountCountOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    userId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    type: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    provider: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    providerAccountId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    refresh_token: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    refresh_token_expires_in: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    access_token: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    expires_at: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    token_type: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    scope: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    id_token: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    session_state: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.AccountAvgOrderByAggregateInputSchema = zod_1.z.object({
    refresh_token_expires_in: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    expires_at: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.AccountMaxOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    userId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    type: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    provider: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    providerAccountId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    refresh_token: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    refresh_token_expires_in: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    access_token: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    expires_at: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    token_type: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    scope: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    id_token: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    session_state: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.AccountMinOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    userId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    type: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    provider: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    providerAccountId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    refresh_token: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    refresh_token_expires_in: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    access_token: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    expires_at: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    token_type: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    scope: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    id_token: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    session_state: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.AccountSumOrderByAggregateInputSchema = zod_1.z.object({
    refresh_token_expires_in: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    expires_at: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.IntNullableWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.number().optional().nullable(),
    in: zod_1.z.union([zod_1.z.number().array(), zod_1.z.number()]).optional().nullable(),
    notIn: zod_1.z.union([zod_1.z.number().array(), zod_1.z.number()]).optional().nullable(),
    lt: zod_1.z.number().optional(),
    lte: zod_1.z.number().optional(),
    gt: zod_1.z.number().optional(),
    gte: zod_1.z.number().optional(),
    not: zod_1.z.union([zod_1.z.number(), zod_1.z.lazy(() => exports.NestedIntNullableWithAggregatesFilterSchema)]).optional().nullable(),
    _count: zod_1.z.lazy(() => exports.NestedIntNullableFilterSchema).optional(),
    _avg: zod_1.z.lazy(() => exports.NestedFloatNullableFilterSchema).optional(),
    _sum: zod_1.z.lazy(() => exports.NestedIntNullableFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedIntNullableFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedIntNullableFilterSchema).optional()
}).strict();
exports.SessionOrderByRelevanceInputSchema = zod_1.z.object({
    fields: zod_1.z.union([zod_1.z.lazy(() => exports.SessionOrderByRelevanceFieldEnumSchema), zod_1.z.lazy(() => exports.SessionOrderByRelevanceFieldEnumSchema).array()]),
    sort: zod_1.z.lazy(() => exports.SortOrderSchema),
    search: zod_1.z.string()
}).strict();
exports.SessionCountOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    sessionToken: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    userId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    expires: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.SessionMaxOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    sessionToken: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    userId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    expires: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.SessionMinOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    sessionToken: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    userId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    expires: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.VerificationTokenOrderByRelevanceInputSchema = zod_1.z.object({
    fields: zod_1.z.union([zod_1.z.lazy(() => exports.VerificationTokenOrderByRelevanceFieldEnumSchema), zod_1.z.lazy(() => exports.VerificationTokenOrderByRelevanceFieldEnumSchema).array()]),
    sort: zod_1.z.lazy(() => exports.SortOrderSchema),
    search: zod_1.z.string()
}).strict();
exports.VerificationTokenIdentifierTokenCompoundUniqueInputSchema = zod_1.z.object({
    identifier: zod_1.z.string(),
    token: zod_1.z.string()
}).strict();
exports.VerificationTokenCountOrderByAggregateInputSchema = zod_1.z.object({
    identifier: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    token: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    expires: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.VerificationTokenMaxOrderByAggregateInputSchema = zod_1.z.object({
    identifier: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    token: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    expires: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.VerificationTokenMinOrderByAggregateInputSchema = zod_1.z.object({
    identifier: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    token: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    expires: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.ProjectUsersListRelationFilterSchema = zod_1.z.object({
    every: zod_1.z.lazy(() => exports.ProjectUsersWhereInputSchema).optional(),
    some: zod_1.z.lazy(() => exports.ProjectUsersWhereInputSchema).optional(),
    none: zod_1.z.lazy(() => exports.ProjectUsersWhereInputSchema).optional()
}).strict();
exports.ProjectInviteListRelationFilterSchema = zod_1.z.object({
    every: zod_1.z.lazy(() => exports.ProjectInviteWhereInputSchema).optional(),
    some: zod_1.z.lazy(() => exports.ProjectInviteWhereInputSchema).optional(),
    none: zod_1.z.lazy(() => exports.ProjectInviteWhereInputSchema).optional()
}).strict();
exports.SentEmailListRelationFilterSchema = zod_1.z.object({
    every: zod_1.z.lazy(() => exports.SentEmailWhereInputSchema).optional(),
    some: zod_1.z.lazy(() => exports.SentEmailWhereInputSchema).optional(),
    none: zod_1.z.lazy(() => exports.SentEmailWhereInputSchema).optional()
}).strict();
exports.DomainListRelationFilterSchema = zod_1.z.object({
    every: zod_1.z.lazy(() => exports.DomainWhereInputSchema).optional(),
    some: zod_1.z.lazy(() => exports.DomainWhereInputSchema).optional(),
    none: zod_1.z.lazy(() => exports.DomainWhereInputSchema).optional()
}).strict();
exports.LinkListRelationFilterSchema = zod_1.z.object({
    every: zod_1.z.lazy(() => exports.LinkWhereInputSchema).optional(),
    some: zod_1.z.lazy(() => exports.LinkWhereInputSchema).optional(),
    none: zod_1.z.lazy(() => exports.LinkWhereInputSchema).optional()
}).strict();
exports.TagListRelationFilterSchema = zod_1.z.object({
    every: zod_1.z.lazy(() => exports.TagWhereInputSchema).optional(),
    some: zod_1.z.lazy(() => exports.TagWhereInputSchema).optional(),
    none: zod_1.z.lazy(() => exports.TagWhereInputSchema).optional()
}).strict();
exports.SiteRelationFilterSchema = zod_1.z.object({
    is: zod_1.z.lazy(() => exports.SiteWhereInputSchema).optional().nullable(),
    isNot: zod_1.z.lazy(() => exports.SiteWhereInputSchema).optional().nullable()
}).strict();
exports.ProjectUsersOrderByRelationAggregateInputSchema = zod_1.z.object({
    _count: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.ProjectInviteOrderByRelationAggregateInputSchema = zod_1.z.object({
    _count: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.SentEmailOrderByRelationAggregateInputSchema = zod_1.z.object({
    _count: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.DomainOrderByRelationAggregateInputSchema = zod_1.z.object({
    _count: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.LinkOrderByRelationAggregateInputSchema = zod_1.z.object({
    _count: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.TagOrderByRelationAggregateInputSchema = zod_1.z.object({
    _count: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.ProjectOrderByRelevanceInputSchema = zod_1.z.object({
    fields: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectOrderByRelevanceFieldEnumSchema), zod_1.z.lazy(() => exports.ProjectOrderByRelevanceFieldEnumSchema).array()]),
    sort: zod_1.z.lazy(() => exports.SortOrderSchema),
    search: zod_1.z.string()
}).strict();
exports.ProjectCountOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    slug: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    logo: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    password: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    type: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    usage: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    usageLimit: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    plan: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    stripeId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    billingCycleStart: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    region: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    endpoint: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    bucket: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    useHost: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    isDeleted: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.ProjectAvgOrderByAggregateInputSchema = zod_1.z.object({
    usage: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    usageLimit: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    billingCycleStart: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.ProjectMaxOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    slug: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    logo: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    password: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    type: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    usage: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    usageLimit: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    plan: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    stripeId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    billingCycleStart: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    region: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    endpoint: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    bucket: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    useHost: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    isDeleted: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.ProjectMinOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    slug: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    logo: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    password: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    type: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    usage: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    usageLimit: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    plan: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    stripeId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    billingCycleStart: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    region: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    endpoint: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    bucket: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    useHost: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    isDeleted: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.ProjectSumOrderByAggregateInputSchema = zod_1.z.object({
    usage: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    usageLimit: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    billingCycleStart: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.ProjectInviteOrderByRelevanceInputSchema = zod_1.z.object({
    fields: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectInviteOrderByRelevanceFieldEnumSchema), zod_1.z.lazy(() => exports.ProjectInviteOrderByRelevanceFieldEnumSchema).array()]),
    sort: zod_1.z.lazy(() => exports.SortOrderSchema),
    search: zod_1.z.string()
}).strict();
exports.ProjectInviteEmailProjectIdCompoundUniqueInputSchema = zod_1.z.object({
    email: zod_1.z.string(),
    projectId: zod_1.z.string()
}).strict();
exports.ProjectInviteCountOrderByAggregateInputSchema = zod_1.z.object({
    email: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    expires: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    projectId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.ProjectInviteMaxOrderByAggregateInputSchema = zod_1.z.object({
    email: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    expires: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    projectId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.ProjectInviteMinOrderByAggregateInputSchema = zod_1.z.object({
    email: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    expires: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    projectId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.EnumRoleFilterSchema = zod_1.z.object({
    equals: zod_1.z.lazy(() => exports.RoleSchema).optional(),
    in: zod_1.z.union([zod_1.z.lazy(() => exports.RoleSchema).array(), zod_1.z.lazy(() => exports.RoleSchema)]).optional(),
    notIn: zod_1.z.union([zod_1.z.lazy(() => exports.RoleSchema).array(), zod_1.z.lazy(() => exports.RoleSchema)]).optional(),
    not: zod_1.z.union([zod_1.z.lazy(() => exports.RoleSchema), zod_1.z.lazy(() => exports.NestedEnumRoleFilterSchema)]).optional(),
}).strict();
exports.ProjectUsersOrderByRelevanceInputSchema = zod_1.z.object({
    fields: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUsersOrderByRelevanceFieldEnumSchema), zod_1.z.lazy(() => exports.ProjectUsersOrderByRelevanceFieldEnumSchema).array()]),
    sort: zod_1.z.lazy(() => exports.SortOrderSchema),
    search: zod_1.z.string()
}).strict();
exports.ProjectUsersUserIdProjectIdCompoundUniqueInputSchema = zod_1.z.object({
    userId: zod_1.z.string(),
    projectId: zod_1.z.string()
}).strict();
exports.ProjectUsersCountOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    role: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    userId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    projectId: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.ProjectUsersMaxOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    role: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    userId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    projectId: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.ProjectUsersMinOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    role: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    userId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    projectId: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.EnumRoleWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.lazy(() => exports.RoleSchema).optional(),
    in: zod_1.z.union([zod_1.z.lazy(() => exports.RoleSchema).array(), zod_1.z.lazy(() => exports.RoleSchema)]).optional(),
    notIn: zod_1.z.union([zod_1.z.lazy(() => exports.RoleSchema).array(), zod_1.z.lazy(() => exports.RoleSchema)]).optional(),
    not: zod_1.z.union([zod_1.z.lazy(() => exports.RoleSchema), zod_1.z.lazy(() => exports.NestedEnumRoleWithAggregatesFilterSchema)]).optional(),
    _count: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedEnumRoleFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedEnumRoleFilterSchema).optional()
}).strict();
exports.EnumEmailTypeFilterSchema = zod_1.z.object({
    equals: zod_1.z.lazy(() => exports.EmailTypeSchema).optional(),
    in: zod_1.z.union([zod_1.z.lazy(() => exports.EmailTypeSchema).array(), zod_1.z.lazy(() => exports.EmailTypeSchema)]).optional(),
    notIn: zod_1.z.union([zod_1.z.lazy(() => exports.EmailTypeSchema).array(), zod_1.z.lazy(() => exports.EmailTypeSchema)]).optional(),
    not: zod_1.z.union([zod_1.z.lazy(() => exports.EmailTypeSchema), zod_1.z.lazy(() => exports.NestedEnumEmailTypeFilterSchema)]).optional(),
}).strict();
exports.SentEmailOrderByRelevanceInputSchema = zod_1.z.object({
    fields: zod_1.z.union([zod_1.z.lazy(() => exports.SentEmailOrderByRelevanceFieldEnumSchema), zod_1.z.lazy(() => exports.SentEmailOrderByRelevanceFieldEnumSchema).array()]),
    sort: zod_1.z.lazy(() => exports.SortOrderSchema),
    search: zod_1.z.string()
}).strict();
exports.SentEmailCountOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    type: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    projectId: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.SentEmailMaxOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    type: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    projectId: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.SentEmailMinOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    type: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    projectId: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.EnumEmailTypeWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.lazy(() => exports.EmailTypeSchema).optional(),
    in: zod_1.z.union([zod_1.z.lazy(() => exports.EmailTypeSchema).array(), zod_1.z.lazy(() => exports.EmailTypeSchema)]).optional(),
    notIn: zod_1.z.union([zod_1.z.lazy(() => exports.EmailTypeSchema).array(), zod_1.z.lazy(() => exports.EmailTypeSchema)]).optional(),
    not: zod_1.z.union([zod_1.z.lazy(() => exports.EmailTypeSchema), zod_1.z.lazy(() => exports.NestedEnumEmailTypeWithAggregatesFilterSchema)]).optional(),
    _count: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedEnumEmailTypeFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedEnumEmailTypeFilterSchema).optional()
}).strict();
exports.DomainOrderByRelevanceInputSchema = zod_1.z.object({
    fields: zod_1.z.union([zod_1.z.lazy(() => exports.DomainOrderByRelevanceFieldEnumSchema), zod_1.z.lazy(() => exports.DomainOrderByRelevanceFieldEnumSchema).array()]),
    sort: zod_1.z.lazy(() => exports.SortOrderSchema),
    search: zod_1.z.string()
}).strict();
exports.DomainCountOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    slug: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    verified: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    target: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    type: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    description: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    projectId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    primary: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    lastChecked: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.DomainMaxOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    slug: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    verified: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    target: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    type: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    description: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    projectId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    primary: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    lastChecked: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.DomainMinOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    slug: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    verified: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    target: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    type: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    description: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    projectId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    primary: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    lastChecked: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.DomainRelationFilterSchema = zod_1.z.object({
    is: zod_1.z.lazy(() => exports.DomainWhereInputSchema).optional().nullable(),
    isNot: zod_1.z.lazy(() => exports.DomainWhereInputSchema).optional().nullable()
}).strict();
exports.TagRelationFilterSchema = zod_1.z.object({
    is: zod_1.z.lazy(() => exports.TagWhereInputSchema).optional().nullable(),
    isNot: zod_1.z.lazy(() => exports.TagWhereInputSchema).optional().nullable()
}).strict();
exports.LinkOrderByRelevanceInputSchema = zod_1.z.object({
    fields: zod_1.z.union([zod_1.z.lazy(() => exports.LinkOrderByRelevanceFieldEnumSchema), zod_1.z.lazy(() => exports.LinkOrderByRelevanceFieldEnumSchema).array()]),
    sort: zod_1.z.lazy(() => exports.SortOrderSchema),
    search: zod_1.z.string()
}).strict();
exports.LinkDomainKeyCompoundUniqueInputSchema = zod_1.z.object({
    domain: zod_1.z.string(),
    key: zod_1.z.string()
}).strict();
exports.LinkCountOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    domain: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    key: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    url: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    archived: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    expiresAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    password: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    proxy: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    title: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    description: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    image: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    utm_source: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    utm_medium: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    utm_campaign: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    utm_term: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    utm_content: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    rewrite: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    ios: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    android: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    userId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    projectId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    clicks: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    publicStats: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    tagId: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.LinkAvgOrderByAggregateInputSchema = zod_1.z.object({
    clicks: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.LinkMaxOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    domain: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    key: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    url: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    archived: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    expiresAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    password: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    proxy: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    title: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    description: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    image: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    utm_source: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    utm_medium: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    utm_campaign: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    utm_term: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    utm_content: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    rewrite: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    ios: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    android: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    userId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    projectId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    clicks: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    publicStats: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    tagId: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.LinkMinOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    domain: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    key: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    url: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    archived: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    expiresAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    password: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    proxy: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    title: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    description: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    image: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    utm_source: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    utm_medium: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    utm_campaign: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    utm_term: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    utm_content: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    rewrite: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    ios: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    android: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    userId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    projectId: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    clicks: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    publicStats: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    tagId: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.LinkSumOrderByAggregateInputSchema = zod_1.z.object({
    clicks: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.TagOrderByRelevanceInputSchema = zod_1.z.object({
    fields: zod_1.z.union([zod_1.z.lazy(() => exports.TagOrderByRelevanceFieldEnumSchema), zod_1.z.lazy(() => exports.TagOrderByRelevanceFieldEnumSchema).array()]),
    sort: zod_1.z.lazy(() => exports.SortOrderSchema),
    search: zod_1.z.string()
}).strict();
exports.TagNameProjectIdCompoundUniqueInputSchema = zod_1.z.object({
    name: zod_1.z.string(),
    projectId: zod_1.z.string()
}).strict();
exports.TagCountOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    color: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    projectId: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.TagMaxOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    color: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    projectId: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.TagMinOrderByAggregateInputSchema = zod_1.z.object({
    id: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    color: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    createdAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    updatedAt: zod_1.z.lazy(() => exports.SortOrderSchema).optional(),
    projectId: zod_1.z.lazy(() => exports.SortOrderSchema).optional()
}).strict();
exports.DateTimeFieldUpdateOperationsInputSchema = zod_1.z.object({
    set: zod_1.z.date().optional()
}).strict();
exports.IntFieldUpdateOperationsInputSchema = zod_1.z.object({
    set: zod_1.z.number().optional(),
    increment: zod_1.z.number().optional(),
    decrement: zod_1.z.number().optional(),
    multiply: zod_1.z.number().optional(),
    divide: zod_1.z.number().optional()
}).strict();
exports.StringFieldUpdateOperationsInputSchema = zod_1.z.object({
    set: zod_1.z.string().optional()
}).strict();
exports.NullableStringFieldUpdateOperationsInputSchema = zod_1.z.object({
    set: zod_1.z.string().optional().nullable()
}).strict();
exports.SiteCreateNestedManyWithoutSiteTemplateInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.SiteCreateWithoutSiteTemplateInputSchema), zod_1.z.lazy(() => exports.SiteCreateWithoutSiteTemplateInputSchema).array(), zod_1.z.lazy(() => exports.SiteUncheckedCreateWithoutSiteTemplateInputSchema), zod_1.z.lazy(() => exports.SiteUncheckedCreateWithoutSiteTemplateInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.SiteCreateOrConnectWithoutSiteTemplateInputSchema), zod_1.z.lazy(() => exports.SiteCreateOrConnectWithoutSiteTemplateInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.SiteCreateManySiteTemplateInputEnvelopeSchema).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema).array()]).optional(),
}).strict();
exports.SiteTemplateDataDefCreateNestedOneWithoutSiteTemplateInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.SiteTemplateDataDefCreateWithoutSiteTemplateInputSchema), zod_1.z.lazy(() => exports.SiteTemplateDataDefUncheckedCreateWithoutSiteTemplateInputSchema)]).optional(),
    connectOrCreate: zod_1.z.lazy(() => exports.SiteTemplateDataDefCreateOrConnectWithoutSiteTemplateInputSchema).optional(),
    connect: zod_1.z.lazy(() => exports.SiteTemplateDataDefWhereUniqueInputSchema).optional()
}).strict();
exports.SiteUncheckedCreateNestedManyWithoutSiteTemplateInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.SiteCreateWithoutSiteTemplateInputSchema), zod_1.z.lazy(() => exports.SiteCreateWithoutSiteTemplateInputSchema).array(), zod_1.z.lazy(() => exports.SiteUncheckedCreateWithoutSiteTemplateInputSchema), zod_1.z.lazy(() => exports.SiteUncheckedCreateWithoutSiteTemplateInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.SiteCreateOrConnectWithoutSiteTemplateInputSchema), zod_1.z.lazy(() => exports.SiteCreateOrConnectWithoutSiteTemplateInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.SiteCreateManySiteTemplateInputEnvelopeSchema).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema).array()]).optional(),
}).strict();
exports.SiteTemplateDataDefUncheckedCreateNestedOneWithoutSiteTemplateInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.SiteTemplateDataDefCreateWithoutSiteTemplateInputSchema), zod_1.z.lazy(() => exports.SiteTemplateDataDefUncheckedCreateWithoutSiteTemplateInputSchema)]).optional(),
    connectOrCreate: zod_1.z.lazy(() => exports.SiteTemplateDataDefCreateOrConnectWithoutSiteTemplateInputSchema).optional(),
    connect: zod_1.z.lazy(() => exports.SiteTemplateDataDefWhereUniqueInputSchema).optional()
}).strict();
exports.BoolFieldUpdateOperationsInputSchema = zod_1.z.object({
    set: zod_1.z.boolean().optional()
}).strict();
exports.SiteUpdateManyWithoutSiteTemplateNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.SiteCreateWithoutSiteTemplateInputSchema), zod_1.z.lazy(() => exports.SiteCreateWithoutSiteTemplateInputSchema).array(), zod_1.z.lazy(() => exports.SiteUncheckedCreateWithoutSiteTemplateInputSchema), zod_1.z.lazy(() => exports.SiteUncheckedCreateWithoutSiteTemplateInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.SiteCreateOrConnectWithoutSiteTemplateInputSchema), zod_1.z.lazy(() => exports.SiteCreateOrConnectWithoutSiteTemplateInputSchema).array()]).optional(),
    upsert: zod_1.z.union([zod_1.z.lazy(() => exports.SiteUpsertWithWhereUniqueWithoutSiteTemplateInputSchema), zod_1.z.lazy(() => exports.SiteUpsertWithWhereUniqueWithoutSiteTemplateInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.SiteCreateManySiteTemplateInputEnvelopeSchema).optional(),
    set: zod_1.z.union([zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema).array()]).optional(),
    disconnect: zod_1.z.union([zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema).array()]).optional(),
    delete: zod_1.z.union([zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema).array()]).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema).array()]).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.SiteUpdateWithWhereUniqueWithoutSiteTemplateInputSchema), zod_1.z.lazy(() => exports.SiteUpdateWithWhereUniqueWithoutSiteTemplateInputSchema).array()]).optional(),
    updateMany: zod_1.z.union([zod_1.z.lazy(() => exports.SiteUpdateManyWithWhereWithoutSiteTemplateInputSchema), zod_1.z.lazy(() => exports.SiteUpdateManyWithWhereWithoutSiteTemplateInputSchema).array()]).optional(),
    deleteMany: zod_1.z.union([zod_1.z.lazy(() => exports.SiteScalarWhereInputSchema), zod_1.z.lazy(() => exports.SiteScalarWhereInputSchema).array()]).optional(),
}).strict();
exports.SiteTemplateDataDefUpdateOneWithoutSiteTemplateNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.SiteTemplateDataDefCreateWithoutSiteTemplateInputSchema), zod_1.z.lazy(() => exports.SiteTemplateDataDefUncheckedCreateWithoutSiteTemplateInputSchema)]).optional(),
    connectOrCreate: zod_1.z.lazy(() => exports.SiteTemplateDataDefCreateOrConnectWithoutSiteTemplateInputSchema).optional(),
    upsert: zod_1.z.lazy(() => exports.SiteTemplateDataDefUpsertWithoutSiteTemplateInputSchema).optional(),
    disconnect: zod_1.z.boolean().optional(),
    delete: zod_1.z.boolean().optional(),
    connect: zod_1.z.lazy(() => exports.SiteTemplateDataDefWhereUniqueInputSchema).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.SiteTemplateDataDefUpdateWithoutSiteTemplateInputSchema), zod_1.z.lazy(() => exports.SiteTemplateDataDefUncheckedUpdateWithoutSiteTemplateInputSchema)]).optional(),
}).strict();
exports.SiteUncheckedUpdateManyWithoutSiteTemplateNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.SiteCreateWithoutSiteTemplateInputSchema), zod_1.z.lazy(() => exports.SiteCreateWithoutSiteTemplateInputSchema).array(), zod_1.z.lazy(() => exports.SiteUncheckedCreateWithoutSiteTemplateInputSchema), zod_1.z.lazy(() => exports.SiteUncheckedCreateWithoutSiteTemplateInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.SiteCreateOrConnectWithoutSiteTemplateInputSchema), zod_1.z.lazy(() => exports.SiteCreateOrConnectWithoutSiteTemplateInputSchema).array()]).optional(),
    upsert: zod_1.z.union([zod_1.z.lazy(() => exports.SiteUpsertWithWhereUniqueWithoutSiteTemplateInputSchema), zod_1.z.lazy(() => exports.SiteUpsertWithWhereUniqueWithoutSiteTemplateInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.SiteCreateManySiteTemplateInputEnvelopeSchema).optional(),
    set: zod_1.z.union([zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema).array()]).optional(),
    disconnect: zod_1.z.union([zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema).array()]).optional(),
    delete: zod_1.z.union([zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema).array()]).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema).array()]).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.SiteUpdateWithWhereUniqueWithoutSiteTemplateInputSchema), zod_1.z.lazy(() => exports.SiteUpdateWithWhereUniqueWithoutSiteTemplateInputSchema).array()]).optional(),
    updateMany: zod_1.z.union([zod_1.z.lazy(() => exports.SiteUpdateManyWithWhereWithoutSiteTemplateInputSchema), zod_1.z.lazy(() => exports.SiteUpdateManyWithWhereWithoutSiteTemplateInputSchema).array()]).optional(),
    deleteMany: zod_1.z.union([zod_1.z.lazy(() => exports.SiteScalarWhereInputSchema), zod_1.z.lazy(() => exports.SiteScalarWhereInputSchema).array()]).optional(),
}).strict();
exports.SiteTemplateDataDefUncheckedUpdateOneWithoutSiteTemplateNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.SiteTemplateDataDefCreateWithoutSiteTemplateInputSchema), zod_1.z.lazy(() => exports.SiteTemplateDataDefUncheckedCreateWithoutSiteTemplateInputSchema)]).optional(),
    connectOrCreate: zod_1.z.lazy(() => exports.SiteTemplateDataDefCreateOrConnectWithoutSiteTemplateInputSchema).optional(),
    upsert: zod_1.z.lazy(() => exports.SiteTemplateDataDefUpsertWithoutSiteTemplateInputSchema).optional(),
    disconnect: zod_1.z.boolean().optional(),
    delete: zod_1.z.boolean().optional(),
    connect: zod_1.z.lazy(() => exports.SiteTemplateDataDefWhereUniqueInputSchema).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.SiteTemplateDataDefUpdateWithoutSiteTemplateInputSchema), zod_1.z.lazy(() => exports.SiteTemplateDataDefUncheckedUpdateWithoutSiteTemplateInputSchema)]).optional(),
}).strict();
exports.SiteTemplateCreateNestedOneWithoutSiteTemplateDataDefInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.SiteTemplateCreateWithoutSiteTemplateDataDefInputSchema), zod_1.z.lazy(() => exports.SiteTemplateUncheckedCreateWithoutSiteTemplateDataDefInputSchema)]).optional(),
    connectOrCreate: zod_1.z.lazy(() => exports.SiteTemplateCreateOrConnectWithoutSiteTemplateDataDefInputSchema).optional(),
    connect: zod_1.z.lazy(() => exports.SiteTemplateWhereUniqueInputSchema).optional()
}).strict();
exports.SiteTemplateUpdateOneRequiredWithoutSiteTemplateDataDefNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.SiteTemplateCreateWithoutSiteTemplateDataDefInputSchema), zod_1.z.lazy(() => exports.SiteTemplateUncheckedCreateWithoutSiteTemplateDataDefInputSchema)]).optional(),
    connectOrCreate: zod_1.z.lazy(() => exports.SiteTemplateCreateOrConnectWithoutSiteTemplateDataDefInputSchema).optional(),
    upsert: zod_1.z.lazy(() => exports.SiteTemplateUpsertWithoutSiteTemplateDataDefInputSchema).optional(),
    connect: zod_1.z.lazy(() => exports.SiteTemplateWhereUniqueInputSchema).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.SiteTemplateUpdateWithoutSiteTemplateDataDefInputSchema), zod_1.z.lazy(() => exports.SiteTemplateUncheckedUpdateWithoutSiteTemplateDataDefInputSchema)]).optional(),
}).strict();
exports.SiteCreateNestedManyWithoutCustomerInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.SiteCreateWithoutCustomerInputSchema), zod_1.z.lazy(() => exports.SiteCreateWithoutCustomerInputSchema).array(), zod_1.z.lazy(() => exports.SiteUncheckedCreateWithoutCustomerInputSchema), zod_1.z.lazy(() => exports.SiteUncheckedCreateWithoutCustomerInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.SiteCreateOrConnectWithoutCustomerInputSchema), zod_1.z.lazy(() => exports.SiteCreateOrConnectWithoutCustomerInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.SiteCreateManyCustomerInputEnvelopeSchema).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema).array()]).optional(),
}).strict();
exports.SiteUncheckedCreateNestedManyWithoutCustomerInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.SiteCreateWithoutCustomerInputSchema), zod_1.z.lazy(() => exports.SiteCreateWithoutCustomerInputSchema).array(), zod_1.z.lazy(() => exports.SiteUncheckedCreateWithoutCustomerInputSchema), zod_1.z.lazy(() => exports.SiteUncheckedCreateWithoutCustomerInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.SiteCreateOrConnectWithoutCustomerInputSchema), zod_1.z.lazy(() => exports.SiteCreateOrConnectWithoutCustomerInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.SiteCreateManyCustomerInputEnvelopeSchema).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema).array()]).optional(),
}).strict();
exports.SiteUpdateManyWithoutCustomerNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.SiteCreateWithoutCustomerInputSchema), zod_1.z.lazy(() => exports.SiteCreateWithoutCustomerInputSchema).array(), zod_1.z.lazy(() => exports.SiteUncheckedCreateWithoutCustomerInputSchema), zod_1.z.lazy(() => exports.SiteUncheckedCreateWithoutCustomerInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.SiteCreateOrConnectWithoutCustomerInputSchema), zod_1.z.lazy(() => exports.SiteCreateOrConnectWithoutCustomerInputSchema).array()]).optional(),
    upsert: zod_1.z.union([zod_1.z.lazy(() => exports.SiteUpsertWithWhereUniqueWithoutCustomerInputSchema), zod_1.z.lazy(() => exports.SiteUpsertWithWhereUniqueWithoutCustomerInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.SiteCreateManyCustomerInputEnvelopeSchema).optional(),
    set: zod_1.z.union([zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema).array()]).optional(),
    disconnect: zod_1.z.union([zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema).array()]).optional(),
    delete: zod_1.z.union([zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema).array()]).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema).array()]).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.SiteUpdateWithWhereUniqueWithoutCustomerInputSchema), zod_1.z.lazy(() => exports.SiteUpdateWithWhereUniqueWithoutCustomerInputSchema).array()]).optional(),
    updateMany: zod_1.z.union([zod_1.z.lazy(() => exports.SiteUpdateManyWithWhereWithoutCustomerInputSchema), zod_1.z.lazy(() => exports.SiteUpdateManyWithWhereWithoutCustomerInputSchema).array()]).optional(),
    deleteMany: zod_1.z.union([zod_1.z.lazy(() => exports.SiteScalarWhereInputSchema), zod_1.z.lazy(() => exports.SiteScalarWhereInputSchema).array()]).optional(),
}).strict();
exports.SiteUncheckedUpdateManyWithoutCustomerNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.SiteCreateWithoutCustomerInputSchema), zod_1.z.lazy(() => exports.SiteCreateWithoutCustomerInputSchema).array(), zod_1.z.lazy(() => exports.SiteUncheckedCreateWithoutCustomerInputSchema), zod_1.z.lazy(() => exports.SiteUncheckedCreateWithoutCustomerInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.SiteCreateOrConnectWithoutCustomerInputSchema), zod_1.z.lazy(() => exports.SiteCreateOrConnectWithoutCustomerInputSchema).array()]).optional(),
    upsert: zod_1.z.union([zod_1.z.lazy(() => exports.SiteUpsertWithWhereUniqueWithoutCustomerInputSchema), zod_1.z.lazy(() => exports.SiteUpsertWithWhereUniqueWithoutCustomerInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.SiteCreateManyCustomerInputEnvelopeSchema).optional(),
    set: zod_1.z.union([zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema).array()]).optional(),
    disconnect: zod_1.z.union([zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema).array()]).optional(),
    delete: zod_1.z.union([zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema).array()]).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema).array()]).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.SiteUpdateWithWhereUniqueWithoutCustomerInputSchema), zod_1.z.lazy(() => exports.SiteUpdateWithWhereUniqueWithoutCustomerInputSchema).array()]).optional(),
    updateMany: zod_1.z.union([zod_1.z.lazy(() => exports.SiteUpdateManyWithWhereWithoutCustomerInputSchema), zod_1.z.lazy(() => exports.SiteUpdateManyWithWhereWithoutCustomerInputSchema).array()]).optional(),
    deleteMany: zod_1.z.union([zod_1.z.lazy(() => exports.SiteScalarWhereInputSchema), zod_1.z.lazy(() => exports.SiteScalarWhereInputSchema).array()]).optional(),
}).strict();
exports.SiteTemplateCreateNestedOneWithoutSiteInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.SiteTemplateCreateWithoutSiteInputSchema), zod_1.z.lazy(() => exports.SiteTemplateUncheckedCreateWithoutSiteInputSchema)]).optional(),
    connectOrCreate: zod_1.z.lazy(() => exports.SiteTemplateCreateOrConnectWithoutSiteInputSchema).optional(),
    connect: zod_1.z.lazy(() => exports.SiteTemplateWhereUniqueInputSchema).optional()
}).strict();
exports.CustomerCreateNestedOneWithoutSiteInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.CustomerCreateWithoutSiteInputSchema), zod_1.z.lazy(() => exports.CustomerUncheckedCreateWithoutSiteInputSchema)]).optional(),
    connectOrCreate: zod_1.z.lazy(() => exports.CustomerCreateOrConnectWithoutSiteInputSchema).optional(),
    connect: zod_1.z.lazy(() => exports.CustomerWhereUniqueInputSchema).optional()
}).strict();
exports.ProjectCreateNestedOneWithoutSiteInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectCreateWithoutSiteInputSchema), zod_1.z.lazy(() => exports.ProjectUncheckedCreateWithoutSiteInputSchema)]).optional(),
    connectOrCreate: zod_1.z.lazy(() => exports.ProjectCreateOrConnectWithoutSiteInputSchema).optional(),
    connect: zod_1.z.lazy(() => exports.ProjectWhereUniqueInputSchema).optional()
}).strict();
exports.SiteTemplateUpdateOneRequiredWithoutSiteNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.SiteTemplateCreateWithoutSiteInputSchema), zod_1.z.lazy(() => exports.SiteTemplateUncheckedCreateWithoutSiteInputSchema)]).optional(),
    connectOrCreate: zod_1.z.lazy(() => exports.SiteTemplateCreateOrConnectWithoutSiteInputSchema).optional(),
    upsert: zod_1.z.lazy(() => exports.SiteTemplateUpsertWithoutSiteInputSchema).optional(),
    connect: zod_1.z.lazy(() => exports.SiteTemplateWhereUniqueInputSchema).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.SiteTemplateUpdateWithoutSiteInputSchema), zod_1.z.lazy(() => exports.SiteTemplateUncheckedUpdateWithoutSiteInputSchema)]).optional(),
}).strict();
exports.CustomerUpdateOneRequiredWithoutSiteNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.CustomerCreateWithoutSiteInputSchema), zod_1.z.lazy(() => exports.CustomerUncheckedCreateWithoutSiteInputSchema)]).optional(),
    connectOrCreate: zod_1.z.lazy(() => exports.CustomerCreateOrConnectWithoutSiteInputSchema).optional(),
    upsert: zod_1.z.lazy(() => exports.CustomerUpsertWithoutSiteInputSchema).optional(),
    connect: zod_1.z.lazy(() => exports.CustomerWhereUniqueInputSchema).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.CustomerUpdateWithoutSiteInputSchema), zod_1.z.lazy(() => exports.CustomerUncheckedUpdateWithoutSiteInputSchema)]).optional(),
}).strict();
exports.ProjectUpdateOneWithoutSiteNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectCreateWithoutSiteInputSchema), zod_1.z.lazy(() => exports.ProjectUncheckedCreateWithoutSiteInputSchema)]).optional(),
    connectOrCreate: zod_1.z.lazy(() => exports.ProjectCreateOrConnectWithoutSiteInputSchema).optional(),
    upsert: zod_1.z.lazy(() => exports.ProjectUpsertWithoutSiteInputSchema).optional(),
    disconnect: zod_1.z.boolean().optional(),
    delete: zod_1.z.boolean().optional(),
    connect: zod_1.z.lazy(() => exports.ProjectWhereUniqueInputSchema).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUpdateWithoutSiteInputSchema), zod_1.z.lazy(() => exports.ProjectUncheckedUpdateWithoutSiteInputSchema)]).optional(),
}).strict();
exports.AccountCreateNestedManyWithoutUserInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.AccountCreateWithoutUserInputSchema), zod_1.z.lazy(() => exports.AccountCreateWithoutUserInputSchema).array(), zod_1.z.lazy(() => exports.AccountUncheckedCreateWithoutUserInputSchema), zod_1.z.lazy(() => exports.AccountUncheckedCreateWithoutUserInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.AccountCreateOrConnectWithoutUserInputSchema), zod_1.z.lazy(() => exports.AccountCreateOrConnectWithoutUserInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.AccountCreateManyUserInputEnvelopeSchema).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.AccountWhereUniqueInputSchema), zod_1.z.lazy(() => exports.AccountWhereUniqueInputSchema).array()]).optional(),
}).strict();
exports.SessionCreateNestedManyWithoutUserInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.SessionCreateWithoutUserInputSchema), zod_1.z.lazy(() => exports.SessionCreateWithoutUserInputSchema).array(), zod_1.z.lazy(() => exports.SessionUncheckedCreateWithoutUserInputSchema), zod_1.z.lazy(() => exports.SessionUncheckedCreateWithoutUserInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.SessionCreateOrConnectWithoutUserInputSchema), zod_1.z.lazy(() => exports.SessionCreateOrConnectWithoutUserInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.SessionCreateManyUserInputEnvelopeSchema).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.SessionWhereUniqueInputSchema), zod_1.z.lazy(() => exports.SessionWhereUniqueInputSchema).array()]).optional(),
}).strict();
exports.AccountUncheckedCreateNestedManyWithoutUserInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.AccountCreateWithoutUserInputSchema), zod_1.z.lazy(() => exports.AccountCreateWithoutUserInputSchema).array(), zod_1.z.lazy(() => exports.AccountUncheckedCreateWithoutUserInputSchema), zod_1.z.lazy(() => exports.AccountUncheckedCreateWithoutUserInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.AccountCreateOrConnectWithoutUserInputSchema), zod_1.z.lazy(() => exports.AccountCreateOrConnectWithoutUserInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.AccountCreateManyUserInputEnvelopeSchema).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.AccountWhereUniqueInputSchema), zod_1.z.lazy(() => exports.AccountWhereUniqueInputSchema).array()]).optional(),
}).strict();
exports.SessionUncheckedCreateNestedManyWithoutUserInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.SessionCreateWithoutUserInputSchema), zod_1.z.lazy(() => exports.SessionCreateWithoutUserInputSchema).array(), zod_1.z.lazy(() => exports.SessionUncheckedCreateWithoutUserInputSchema), zod_1.z.lazy(() => exports.SessionUncheckedCreateWithoutUserInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.SessionCreateOrConnectWithoutUserInputSchema), zod_1.z.lazy(() => exports.SessionCreateOrConnectWithoutUserInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.SessionCreateManyUserInputEnvelopeSchema).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.SessionWhereUniqueInputSchema), zod_1.z.lazy(() => exports.SessionWhereUniqueInputSchema).array()]).optional(),
}).strict();
exports.NullableDateTimeFieldUpdateOperationsInputSchema = zod_1.z.object({
    set: zod_1.z.date().optional().nullable()
}).strict();
exports.AccountUpdateManyWithoutUserNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.AccountCreateWithoutUserInputSchema), zod_1.z.lazy(() => exports.AccountCreateWithoutUserInputSchema).array(), zod_1.z.lazy(() => exports.AccountUncheckedCreateWithoutUserInputSchema), zod_1.z.lazy(() => exports.AccountUncheckedCreateWithoutUserInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.AccountCreateOrConnectWithoutUserInputSchema), zod_1.z.lazy(() => exports.AccountCreateOrConnectWithoutUserInputSchema).array()]).optional(),
    upsert: zod_1.z.union([zod_1.z.lazy(() => exports.AccountUpsertWithWhereUniqueWithoutUserInputSchema), zod_1.z.lazy(() => exports.AccountUpsertWithWhereUniqueWithoutUserInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.AccountCreateManyUserInputEnvelopeSchema).optional(),
    set: zod_1.z.union([zod_1.z.lazy(() => exports.AccountWhereUniqueInputSchema), zod_1.z.lazy(() => exports.AccountWhereUniqueInputSchema).array()]).optional(),
    disconnect: zod_1.z.union([zod_1.z.lazy(() => exports.AccountWhereUniqueInputSchema), zod_1.z.lazy(() => exports.AccountWhereUniqueInputSchema).array()]).optional(),
    delete: zod_1.z.union([zod_1.z.lazy(() => exports.AccountWhereUniqueInputSchema), zod_1.z.lazy(() => exports.AccountWhereUniqueInputSchema).array()]).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.AccountWhereUniqueInputSchema), zod_1.z.lazy(() => exports.AccountWhereUniqueInputSchema).array()]).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.AccountUpdateWithWhereUniqueWithoutUserInputSchema), zod_1.z.lazy(() => exports.AccountUpdateWithWhereUniqueWithoutUserInputSchema).array()]).optional(),
    updateMany: zod_1.z.union([zod_1.z.lazy(() => exports.AccountUpdateManyWithWhereWithoutUserInputSchema), zod_1.z.lazy(() => exports.AccountUpdateManyWithWhereWithoutUserInputSchema).array()]).optional(),
    deleteMany: zod_1.z.union([zod_1.z.lazy(() => exports.AccountScalarWhereInputSchema), zod_1.z.lazy(() => exports.AccountScalarWhereInputSchema).array()]).optional(),
}).strict();
exports.SessionUpdateManyWithoutUserNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.SessionCreateWithoutUserInputSchema), zod_1.z.lazy(() => exports.SessionCreateWithoutUserInputSchema).array(), zod_1.z.lazy(() => exports.SessionUncheckedCreateWithoutUserInputSchema), zod_1.z.lazy(() => exports.SessionUncheckedCreateWithoutUserInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.SessionCreateOrConnectWithoutUserInputSchema), zod_1.z.lazy(() => exports.SessionCreateOrConnectWithoutUserInputSchema).array()]).optional(),
    upsert: zod_1.z.union([zod_1.z.lazy(() => exports.SessionUpsertWithWhereUniqueWithoutUserInputSchema), zod_1.z.lazy(() => exports.SessionUpsertWithWhereUniqueWithoutUserInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.SessionCreateManyUserInputEnvelopeSchema).optional(),
    set: zod_1.z.union([zod_1.z.lazy(() => exports.SessionWhereUniqueInputSchema), zod_1.z.lazy(() => exports.SessionWhereUniqueInputSchema).array()]).optional(),
    disconnect: zod_1.z.union([zod_1.z.lazy(() => exports.SessionWhereUniqueInputSchema), zod_1.z.lazy(() => exports.SessionWhereUniqueInputSchema).array()]).optional(),
    delete: zod_1.z.union([zod_1.z.lazy(() => exports.SessionWhereUniqueInputSchema), zod_1.z.lazy(() => exports.SessionWhereUniqueInputSchema).array()]).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.SessionWhereUniqueInputSchema), zod_1.z.lazy(() => exports.SessionWhereUniqueInputSchema).array()]).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.SessionUpdateWithWhereUniqueWithoutUserInputSchema), zod_1.z.lazy(() => exports.SessionUpdateWithWhereUniqueWithoutUserInputSchema).array()]).optional(),
    updateMany: zod_1.z.union([zod_1.z.lazy(() => exports.SessionUpdateManyWithWhereWithoutUserInputSchema), zod_1.z.lazy(() => exports.SessionUpdateManyWithWhereWithoutUserInputSchema).array()]).optional(),
    deleteMany: zod_1.z.union([zod_1.z.lazy(() => exports.SessionScalarWhereInputSchema), zod_1.z.lazy(() => exports.SessionScalarWhereInputSchema).array()]).optional(),
}).strict();
exports.AccountUncheckedUpdateManyWithoutUserNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.AccountCreateWithoutUserInputSchema), zod_1.z.lazy(() => exports.AccountCreateWithoutUserInputSchema).array(), zod_1.z.lazy(() => exports.AccountUncheckedCreateWithoutUserInputSchema), zod_1.z.lazy(() => exports.AccountUncheckedCreateWithoutUserInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.AccountCreateOrConnectWithoutUserInputSchema), zod_1.z.lazy(() => exports.AccountCreateOrConnectWithoutUserInputSchema).array()]).optional(),
    upsert: zod_1.z.union([zod_1.z.lazy(() => exports.AccountUpsertWithWhereUniqueWithoutUserInputSchema), zod_1.z.lazy(() => exports.AccountUpsertWithWhereUniqueWithoutUserInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.AccountCreateManyUserInputEnvelopeSchema).optional(),
    set: zod_1.z.union([zod_1.z.lazy(() => exports.AccountWhereUniqueInputSchema), zod_1.z.lazy(() => exports.AccountWhereUniqueInputSchema).array()]).optional(),
    disconnect: zod_1.z.union([zod_1.z.lazy(() => exports.AccountWhereUniqueInputSchema), zod_1.z.lazy(() => exports.AccountWhereUniqueInputSchema).array()]).optional(),
    delete: zod_1.z.union([zod_1.z.lazy(() => exports.AccountWhereUniqueInputSchema), zod_1.z.lazy(() => exports.AccountWhereUniqueInputSchema).array()]).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.AccountWhereUniqueInputSchema), zod_1.z.lazy(() => exports.AccountWhereUniqueInputSchema).array()]).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.AccountUpdateWithWhereUniqueWithoutUserInputSchema), zod_1.z.lazy(() => exports.AccountUpdateWithWhereUniqueWithoutUserInputSchema).array()]).optional(),
    updateMany: zod_1.z.union([zod_1.z.lazy(() => exports.AccountUpdateManyWithWhereWithoutUserInputSchema), zod_1.z.lazy(() => exports.AccountUpdateManyWithWhereWithoutUserInputSchema).array()]).optional(),
    deleteMany: zod_1.z.union([zod_1.z.lazy(() => exports.AccountScalarWhereInputSchema), zod_1.z.lazy(() => exports.AccountScalarWhereInputSchema).array()]).optional(),
}).strict();
exports.SessionUncheckedUpdateManyWithoutUserNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.SessionCreateWithoutUserInputSchema), zod_1.z.lazy(() => exports.SessionCreateWithoutUserInputSchema).array(), zod_1.z.lazy(() => exports.SessionUncheckedCreateWithoutUserInputSchema), zod_1.z.lazy(() => exports.SessionUncheckedCreateWithoutUserInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.SessionCreateOrConnectWithoutUserInputSchema), zod_1.z.lazy(() => exports.SessionCreateOrConnectWithoutUserInputSchema).array()]).optional(),
    upsert: zod_1.z.union([zod_1.z.lazy(() => exports.SessionUpsertWithWhereUniqueWithoutUserInputSchema), zod_1.z.lazy(() => exports.SessionUpsertWithWhereUniqueWithoutUserInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.SessionCreateManyUserInputEnvelopeSchema).optional(),
    set: zod_1.z.union([zod_1.z.lazy(() => exports.SessionWhereUniqueInputSchema), zod_1.z.lazy(() => exports.SessionWhereUniqueInputSchema).array()]).optional(),
    disconnect: zod_1.z.union([zod_1.z.lazy(() => exports.SessionWhereUniqueInputSchema), zod_1.z.lazy(() => exports.SessionWhereUniqueInputSchema).array()]).optional(),
    delete: zod_1.z.union([zod_1.z.lazy(() => exports.SessionWhereUniqueInputSchema), zod_1.z.lazy(() => exports.SessionWhereUniqueInputSchema).array()]).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.SessionWhereUniqueInputSchema), zod_1.z.lazy(() => exports.SessionWhereUniqueInputSchema).array()]).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.SessionUpdateWithWhereUniqueWithoutUserInputSchema), zod_1.z.lazy(() => exports.SessionUpdateWithWhereUniqueWithoutUserInputSchema).array()]).optional(),
    updateMany: zod_1.z.union([zod_1.z.lazy(() => exports.SessionUpdateManyWithWhereWithoutUserInputSchema), zod_1.z.lazy(() => exports.SessionUpdateManyWithWhereWithoutUserInputSchema).array()]).optional(),
    deleteMany: zod_1.z.union([zod_1.z.lazy(() => exports.SessionScalarWhereInputSchema), zod_1.z.lazy(() => exports.SessionScalarWhereInputSchema).array()]).optional(),
}).strict();
exports.UserCreateNestedOneWithoutAccountsInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.UserCreateWithoutAccountsInputSchema), zod_1.z.lazy(() => exports.UserUncheckedCreateWithoutAccountsInputSchema)]).optional(),
    connectOrCreate: zod_1.z.lazy(() => exports.UserCreateOrConnectWithoutAccountsInputSchema).optional(),
    connect: zod_1.z.lazy(() => exports.UserWhereUniqueInputSchema).optional()
}).strict();
exports.NullableIntFieldUpdateOperationsInputSchema = zod_1.z.object({
    set: zod_1.z.number().optional().nullable(),
    increment: zod_1.z.number().optional(),
    decrement: zod_1.z.number().optional(),
    multiply: zod_1.z.number().optional(),
    divide: zod_1.z.number().optional()
}).strict();
exports.UserUpdateOneRequiredWithoutAccountsNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.UserCreateWithoutAccountsInputSchema), zod_1.z.lazy(() => exports.UserUncheckedCreateWithoutAccountsInputSchema)]).optional(),
    connectOrCreate: zod_1.z.lazy(() => exports.UserCreateOrConnectWithoutAccountsInputSchema).optional(),
    upsert: zod_1.z.lazy(() => exports.UserUpsertWithoutAccountsInputSchema).optional(),
    connect: zod_1.z.lazy(() => exports.UserWhereUniqueInputSchema).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.UserUpdateWithoutAccountsInputSchema), zod_1.z.lazy(() => exports.UserUncheckedUpdateWithoutAccountsInputSchema)]).optional(),
}).strict();
exports.UserCreateNestedOneWithoutSessionsInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.UserCreateWithoutSessionsInputSchema), zod_1.z.lazy(() => exports.UserUncheckedCreateWithoutSessionsInputSchema)]).optional(),
    connectOrCreate: zod_1.z.lazy(() => exports.UserCreateOrConnectWithoutSessionsInputSchema).optional(),
    connect: zod_1.z.lazy(() => exports.UserWhereUniqueInputSchema).optional()
}).strict();
exports.UserUpdateOneRequiredWithoutSessionsNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.UserCreateWithoutSessionsInputSchema), zod_1.z.lazy(() => exports.UserUncheckedCreateWithoutSessionsInputSchema)]).optional(),
    connectOrCreate: zod_1.z.lazy(() => exports.UserCreateOrConnectWithoutSessionsInputSchema).optional(),
    upsert: zod_1.z.lazy(() => exports.UserUpsertWithoutSessionsInputSchema).optional(),
    connect: zod_1.z.lazy(() => exports.UserWhereUniqueInputSchema).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.UserUpdateWithoutSessionsInputSchema), zod_1.z.lazy(() => exports.UserUncheckedUpdateWithoutSessionsInputSchema)]).optional(),
}).strict();
exports.ProjectUsersCreateNestedManyWithoutProjectInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUsersCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.ProjectUsersCreateWithoutProjectInputSchema).array(), zod_1.z.lazy(() => exports.ProjectUsersUncheckedCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.ProjectUsersUncheckedCreateWithoutProjectInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUsersCreateOrConnectWithoutProjectInputSchema), zod_1.z.lazy(() => exports.ProjectUsersCreateOrConnectWithoutProjectInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.ProjectUsersCreateManyProjectInputEnvelopeSchema).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUsersWhereUniqueInputSchema), zod_1.z.lazy(() => exports.ProjectUsersWhereUniqueInputSchema).array()]).optional(),
}).strict();
exports.ProjectInviteCreateNestedManyWithoutProjectInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectInviteCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.ProjectInviteCreateWithoutProjectInputSchema).array(), zod_1.z.lazy(() => exports.ProjectInviteUncheckedCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.ProjectInviteUncheckedCreateWithoutProjectInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectInviteCreateOrConnectWithoutProjectInputSchema), zod_1.z.lazy(() => exports.ProjectInviteCreateOrConnectWithoutProjectInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.ProjectInviteCreateManyProjectInputEnvelopeSchema).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectInviteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.ProjectInviteWhereUniqueInputSchema).array()]).optional(),
}).strict();
exports.SentEmailCreateNestedManyWithoutProjectInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.SentEmailCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.SentEmailCreateWithoutProjectInputSchema).array(), zod_1.z.lazy(() => exports.SentEmailUncheckedCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.SentEmailUncheckedCreateWithoutProjectInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.SentEmailCreateOrConnectWithoutProjectInputSchema), zod_1.z.lazy(() => exports.SentEmailCreateOrConnectWithoutProjectInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.SentEmailCreateManyProjectInputEnvelopeSchema).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.SentEmailWhereUniqueInputSchema), zod_1.z.lazy(() => exports.SentEmailWhereUniqueInputSchema).array()]).optional(),
}).strict();
exports.DomainCreateNestedManyWithoutProjectInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.DomainCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.DomainCreateWithoutProjectInputSchema).array(), zod_1.z.lazy(() => exports.DomainUncheckedCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.DomainUncheckedCreateWithoutProjectInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.DomainCreateOrConnectWithoutProjectInputSchema), zod_1.z.lazy(() => exports.DomainCreateOrConnectWithoutProjectInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.DomainCreateManyProjectInputEnvelopeSchema).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.DomainWhereUniqueInputSchema), zod_1.z.lazy(() => exports.DomainWhereUniqueInputSchema).array()]).optional(),
}).strict();
exports.LinkCreateNestedManyWithoutProjectInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.LinkCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.LinkCreateWithoutProjectInputSchema).array(), zod_1.z.lazy(() => exports.LinkUncheckedCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.LinkUncheckedCreateWithoutProjectInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.LinkCreateOrConnectWithoutProjectInputSchema), zod_1.z.lazy(() => exports.LinkCreateOrConnectWithoutProjectInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.LinkCreateManyProjectInputEnvelopeSchema).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema), zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema).array()]).optional(),
}).strict();
exports.TagCreateNestedManyWithoutProjectInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.TagCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.TagCreateWithoutProjectInputSchema).array(), zod_1.z.lazy(() => exports.TagUncheckedCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.TagUncheckedCreateWithoutProjectInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.TagCreateOrConnectWithoutProjectInputSchema), zod_1.z.lazy(() => exports.TagCreateOrConnectWithoutProjectInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.TagCreateManyProjectInputEnvelopeSchema).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.TagWhereUniqueInputSchema), zod_1.z.lazy(() => exports.TagWhereUniqueInputSchema).array()]).optional(),
}).strict();
exports.SiteCreateNestedOneWithoutProjectInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.SiteCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.SiteUncheckedCreateWithoutProjectInputSchema)]).optional(),
    connectOrCreate: zod_1.z.lazy(() => exports.SiteCreateOrConnectWithoutProjectInputSchema).optional(),
    connect: zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema).optional()
}).strict();
exports.ProjectUsersUncheckedCreateNestedManyWithoutProjectInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUsersCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.ProjectUsersCreateWithoutProjectInputSchema).array(), zod_1.z.lazy(() => exports.ProjectUsersUncheckedCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.ProjectUsersUncheckedCreateWithoutProjectInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUsersCreateOrConnectWithoutProjectInputSchema), zod_1.z.lazy(() => exports.ProjectUsersCreateOrConnectWithoutProjectInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.ProjectUsersCreateManyProjectInputEnvelopeSchema).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUsersWhereUniqueInputSchema), zod_1.z.lazy(() => exports.ProjectUsersWhereUniqueInputSchema).array()]).optional(),
}).strict();
exports.ProjectInviteUncheckedCreateNestedManyWithoutProjectInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectInviteCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.ProjectInviteCreateWithoutProjectInputSchema).array(), zod_1.z.lazy(() => exports.ProjectInviteUncheckedCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.ProjectInviteUncheckedCreateWithoutProjectInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectInviteCreateOrConnectWithoutProjectInputSchema), zod_1.z.lazy(() => exports.ProjectInviteCreateOrConnectWithoutProjectInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.ProjectInviteCreateManyProjectInputEnvelopeSchema).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectInviteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.ProjectInviteWhereUniqueInputSchema).array()]).optional(),
}).strict();
exports.SentEmailUncheckedCreateNestedManyWithoutProjectInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.SentEmailCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.SentEmailCreateWithoutProjectInputSchema).array(), zod_1.z.lazy(() => exports.SentEmailUncheckedCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.SentEmailUncheckedCreateWithoutProjectInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.SentEmailCreateOrConnectWithoutProjectInputSchema), zod_1.z.lazy(() => exports.SentEmailCreateOrConnectWithoutProjectInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.SentEmailCreateManyProjectInputEnvelopeSchema).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.SentEmailWhereUniqueInputSchema), zod_1.z.lazy(() => exports.SentEmailWhereUniqueInputSchema).array()]).optional(),
}).strict();
exports.DomainUncheckedCreateNestedManyWithoutProjectInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.DomainCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.DomainCreateWithoutProjectInputSchema).array(), zod_1.z.lazy(() => exports.DomainUncheckedCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.DomainUncheckedCreateWithoutProjectInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.DomainCreateOrConnectWithoutProjectInputSchema), zod_1.z.lazy(() => exports.DomainCreateOrConnectWithoutProjectInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.DomainCreateManyProjectInputEnvelopeSchema).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.DomainWhereUniqueInputSchema), zod_1.z.lazy(() => exports.DomainWhereUniqueInputSchema).array()]).optional(),
}).strict();
exports.LinkUncheckedCreateNestedManyWithoutProjectInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.LinkCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.LinkCreateWithoutProjectInputSchema).array(), zod_1.z.lazy(() => exports.LinkUncheckedCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.LinkUncheckedCreateWithoutProjectInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.LinkCreateOrConnectWithoutProjectInputSchema), zod_1.z.lazy(() => exports.LinkCreateOrConnectWithoutProjectInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.LinkCreateManyProjectInputEnvelopeSchema).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema), zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema).array()]).optional(),
}).strict();
exports.TagUncheckedCreateNestedManyWithoutProjectInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.TagCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.TagCreateWithoutProjectInputSchema).array(), zod_1.z.lazy(() => exports.TagUncheckedCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.TagUncheckedCreateWithoutProjectInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.TagCreateOrConnectWithoutProjectInputSchema), zod_1.z.lazy(() => exports.TagCreateOrConnectWithoutProjectInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.TagCreateManyProjectInputEnvelopeSchema).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.TagWhereUniqueInputSchema), zod_1.z.lazy(() => exports.TagWhereUniqueInputSchema).array()]).optional(),
}).strict();
exports.SiteUncheckedCreateNestedOneWithoutProjectInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.SiteCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.SiteUncheckedCreateWithoutProjectInputSchema)]).optional(),
    connectOrCreate: zod_1.z.lazy(() => exports.SiteCreateOrConnectWithoutProjectInputSchema).optional(),
    connect: zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema).optional()
}).strict();
exports.ProjectUsersUpdateManyWithoutProjectNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUsersCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.ProjectUsersCreateWithoutProjectInputSchema).array(), zod_1.z.lazy(() => exports.ProjectUsersUncheckedCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.ProjectUsersUncheckedCreateWithoutProjectInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUsersCreateOrConnectWithoutProjectInputSchema), zod_1.z.lazy(() => exports.ProjectUsersCreateOrConnectWithoutProjectInputSchema).array()]).optional(),
    upsert: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUsersUpsertWithWhereUniqueWithoutProjectInputSchema), zod_1.z.lazy(() => exports.ProjectUsersUpsertWithWhereUniqueWithoutProjectInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.ProjectUsersCreateManyProjectInputEnvelopeSchema).optional(),
    set: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUsersWhereUniqueInputSchema), zod_1.z.lazy(() => exports.ProjectUsersWhereUniqueInputSchema).array()]).optional(),
    disconnect: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUsersWhereUniqueInputSchema), zod_1.z.lazy(() => exports.ProjectUsersWhereUniqueInputSchema).array()]).optional(),
    delete: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUsersWhereUniqueInputSchema), zod_1.z.lazy(() => exports.ProjectUsersWhereUniqueInputSchema).array()]).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUsersWhereUniqueInputSchema), zod_1.z.lazy(() => exports.ProjectUsersWhereUniqueInputSchema).array()]).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUsersUpdateWithWhereUniqueWithoutProjectInputSchema), zod_1.z.lazy(() => exports.ProjectUsersUpdateWithWhereUniqueWithoutProjectInputSchema).array()]).optional(),
    updateMany: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUsersUpdateManyWithWhereWithoutProjectInputSchema), zod_1.z.lazy(() => exports.ProjectUsersUpdateManyWithWhereWithoutProjectInputSchema).array()]).optional(),
    deleteMany: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUsersScalarWhereInputSchema), zod_1.z.lazy(() => exports.ProjectUsersScalarWhereInputSchema).array()]).optional(),
}).strict();
exports.ProjectInviteUpdateManyWithoutProjectNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectInviteCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.ProjectInviteCreateWithoutProjectInputSchema).array(), zod_1.z.lazy(() => exports.ProjectInviteUncheckedCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.ProjectInviteUncheckedCreateWithoutProjectInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectInviteCreateOrConnectWithoutProjectInputSchema), zod_1.z.lazy(() => exports.ProjectInviteCreateOrConnectWithoutProjectInputSchema).array()]).optional(),
    upsert: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectInviteUpsertWithWhereUniqueWithoutProjectInputSchema), zod_1.z.lazy(() => exports.ProjectInviteUpsertWithWhereUniqueWithoutProjectInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.ProjectInviteCreateManyProjectInputEnvelopeSchema).optional(),
    set: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectInviteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.ProjectInviteWhereUniqueInputSchema).array()]).optional(),
    disconnect: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectInviteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.ProjectInviteWhereUniqueInputSchema).array()]).optional(),
    delete: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectInviteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.ProjectInviteWhereUniqueInputSchema).array()]).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectInviteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.ProjectInviteWhereUniqueInputSchema).array()]).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectInviteUpdateWithWhereUniqueWithoutProjectInputSchema), zod_1.z.lazy(() => exports.ProjectInviteUpdateWithWhereUniqueWithoutProjectInputSchema).array()]).optional(),
    updateMany: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectInviteUpdateManyWithWhereWithoutProjectInputSchema), zod_1.z.lazy(() => exports.ProjectInviteUpdateManyWithWhereWithoutProjectInputSchema).array()]).optional(),
    deleteMany: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectInviteScalarWhereInputSchema), zod_1.z.lazy(() => exports.ProjectInviteScalarWhereInputSchema).array()]).optional(),
}).strict();
exports.SentEmailUpdateManyWithoutProjectNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.SentEmailCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.SentEmailCreateWithoutProjectInputSchema).array(), zod_1.z.lazy(() => exports.SentEmailUncheckedCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.SentEmailUncheckedCreateWithoutProjectInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.SentEmailCreateOrConnectWithoutProjectInputSchema), zod_1.z.lazy(() => exports.SentEmailCreateOrConnectWithoutProjectInputSchema).array()]).optional(),
    upsert: zod_1.z.union([zod_1.z.lazy(() => exports.SentEmailUpsertWithWhereUniqueWithoutProjectInputSchema), zod_1.z.lazy(() => exports.SentEmailUpsertWithWhereUniqueWithoutProjectInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.SentEmailCreateManyProjectInputEnvelopeSchema).optional(),
    set: zod_1.z.union([zod_1.z.lazy(() => exports.SentEmailWhereUniqueInputSchema), zod_1.z.lazy(() => exports.SentEmailWhereUniqueInputSchema).array()]).optional(),
    disconnect: zod_1.z.union([zod_1.z.lazy(() => exports.SentEmailWhereUniqueInputSchema), zod_1.z.lazy(() => exports.SentEmailWhereUniqueInputSchema).array()]).optional(),
    delete: zod_1.z.union([zod_1.z.lazy(() => exports.SentEmailWhereUniqueInputSchema), zod_1.z.lazy(() => exports.SentEmailWhereUniqueInputSchema).array()]).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.SentEmailWhereUniqueInputSchema), zod_1.z.lazy(() => exports.SentEmailWhereUniqueInputSchema).array()]).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.SentEmailUpdateWithWhereUniqueWithoutProjectInputSchema), zod_1.z.lazy(() => exports.SentEmailUpdateWithWhereUniqueWithoutProjectInputSchema).array()]).optional(),
    updateMany: zod_1.z.union([zod_1.z.lazy(() => exports.SentEmailUpdateManyWithWhereWithoutProjectInputSchema), zod_1.z.lazy(() => exports.SentEmailUpdateManyWithWhereWithoutProjectInputSchema).array()]).optional(),
    deleteMany: zod_1.z.union([zod_1.z.lazy(() => exports.SentEmailScalarWhereInputSchema), zod_1.z.lazy(() => exports.SentEmailScalarWhereInputSchema).array()]).optional(),
}).strict();
exports.DomainUpdateManyWithoutProjectNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.DomainCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.DomainCreateWithoutProjectInputSchema).array(), zod_1.z.lazy(() => exports.DomainUncheckedCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.DomainUncheckedCreateWithoutProjectInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.DomainCreateOrConnectWithoutProjectInputSchema), zod_1.z.lazy(() => exports.DomainCreateOrConnectWithoutProjectInputSchema).array()]).optional(),
    upsert: zod_1.z.union([zod_1.z.lazy(() => exports.DomainUpsertWithWhereUniqueWithoutProjectInputSchema), zod_1.z.lazy(() => exports.DomainUpsertWithWhereUniqueWithoutProjectInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.DomainCreateManyProjectInputEnvelopeSchema).optional(),
    set: zod_1.z.union([zod_1.z.lazy(() => exports.DomainWhereUniqueInputSchema), zod_1.z.lazy(() => exports.DomainWhereUniqueInputSchema).array()]).optional(),
    disconnect: zod_1.z.union([zod_1.z.lazy(() => exports.DomainWhereUniqueInputSchema), zod_1.z.lazy(() => exports.DomainWhereUniqueInputSchema).array()]).optional(),
    delete: zod_1.z.union([zod_1.z.lazy(() => exports.DomainWhereUniqueInputSchema), zod_1.z.lazy(() => exports.DomainWhereUniqueInputSchema).array()]).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.DomainWhereUniqueInputSchema), zod_1.z.lazy(() => exports.DomainWhereUniqueInputSchema).array()]).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.DomainUpdateWithWhereUniqueWithoutProjectInputSchema), zod_1.z.lazy(() => exports.DomainUpdateWithWhereUniqueWithoutProjectInputSchema).array()]).optional(),
    updateMany: zod_1.z.union([zod_1.z.lazy(() => exports.DomainUpdateManyWithWhereWithoutProjectInputSchema), zod_1.z.lazy(() => exports.DomainUpdateManyWithWhereWithoutProjectInputSchema).array()]).optional(),
    deleteMany: zod_1.z.union([zod_1.z.lazy(() => exports.DomainScalarWhereInputSchema), zod_1.z.lazy(() => exports.DomainScalarWhereInputSchema).array()]).optional(),
}).strict();
exports.LinkUpdateManyWithoutProjectNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.LinkCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.LinkCreateWithoutProjectInputSchema).array(), zod_1.z.lazy(() => exports.LinkUncheckedCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.LinkUncheckedCreateWithoutProjectInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.LinkCreateOrConnectWithoutProjectInputSchema), zod_1.z.lazy(() => exports.LinkCreateOrConnectWithoutProjectInputSchema).array()]).optional(),
    upsert: zod_1.z.union([zod_1.z.lazy(() => exports.LinkUpsertWithWhereUniqueWithoutProjectInputSchema), zod_1.z.lazy(() => exports.LinkUpsertWithWhereUniqueWithoutProjectInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.LinkCreateManyProjectInputEnvelopeSchema).optional(),
    set: zod_1.z.union([zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema), zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema).array()]).optional(),
    disconnect: zod_1.z.union([zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema), zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema).array()]).optional(),
    delete: zod_1.z.union([zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema), zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema).array()]).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema), zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema).array()]).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.LinkUpdateWithWhereUniqueWithoutProjectInputSchema), zod_1.z.lazy(() => exports.LinkUpdateWithWhereUniqueWithoutProjectInputSchema).array()]).optional(),
    updateMany: zod_1.z.union([zod_1.z.lazy(() => exports.LinkUpdateManyWithWhereWithoutProjectInputSchema), zod_1.z.lazy(() => exports.LinkUpdateManyWithWhereWithoutProjectInputSchema).array()]).optional(),
    deleteMany: zod_1.z.union([zod_1.z.lazy(() => exports.LinkScalarWhereInputSchema), zod_1.z.lazy(() => exports.LinkScalarWhereInputSchema).array()]).optional(),
}).strict();
exports.TagUpdateManyWithoutProjectNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.TagCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.TagCreateWithoutProjectInputSchema).array(), zod_1.z.lazy(() => exports.TagUncheckedCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.TagUncheckedCreateWithoutProjectInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.TagCreateOrConnectWithoutProjectInputSchema), zod_1.z.lazy(() => exports.TagCreateOrConnectWithoutProjectInputSchema).array()]).optional(),
    upsert: zod_1.z.union([zod_1.z.lazy(() => exports.TagUpsertWithWhereUniqueWithoutProjectInputSchema), zod_1.z.lazy(() => exports.TagUpsertWithWhereUniqueWithoutProjectInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.TagCreateManyProjectInputEnvelopeSchema).optional(),
    set: zod_1.z.union([zod_1.z.lazy(() => exports.TagWhereUniqueInputSchema), zod_1.z.lazy(() => exports.TagWhereUniqueInputSchema).array()]).optional(),
    disconnect: zod_1.z.union([zod_1.z.lazy(() => exports.TagWhereUniqueInputSchema), zod_1.z.lazy(() => exports.TagWhereUniqueInputSchema).array()]).optional(),
    delete: zod_1.z.union([zod_1.z.lazy(() => exports.TagWhereUniqueInputSchema), zod_1.z.lazy(() => exports.TagWhereUniqueInputSchema).array()]).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.TagWhereUniqueInputSchema), zod_1.z.lazy(() => exports.TagWhereUniqueInputSchema).array()]).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.TagUpdateWithWhereUniqueWithoutProjectInputSchema), zod_1.z.lazy(() => exports.TagUpdateWithWhereUniqueWithoutProjectInputSchema).array()]).optional(),
    updateMany: zod_1.z.union([zod_1.z.lazy(() => exports.TagUpdateManyWithWhereWithoutProjectInputSchema), zod_1.z.lazy(() => exports.TagUpdateManyWithWhereWithoutProjectInputSchema).array()]).optional(),
    deleteMany: zod_1.z.union([zod_1.z.lazy(() => exports.TagScalarWhereInputSchema), zod_1.z.lazy(() => exports.TagScalarWhereInputSchema).array()]).optional(),
}).strict();
exports.SiteUpdateOneWithoutProjectNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.SiteCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.SiteUncheckedCreateWithoutProjectInputSchema)]).optional(),
    connectOrCreate: zod_1.z.lazy(() => exports.SiteCreateOrConnectWithoutProjectInputSchema).optional(),
    upsert: zod_1.z.lazy(() => exports.SiteUpsertWithoutProjectInputSchema).optional(),
    disconnect: zod_1.z.boolean().optional(),
    delete: zod_1.z.boolean().optional(),
    connect: zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.SiteUpdateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.SiteUncheckedUpdateWithoutProjectInputSchema)]).optional(),
}).strict();
exports.ProjectUsersUncheckedUpdateManyWithoutProjectNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUsersCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.ProjectUsersCreateWithoutProjectInputSchema).array(), zod_1.z.lazy(() => exports.ProjectUsersUncheckedCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.ProjectUsersUncheckedCreateWithoutProjectInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUsersCreateOrConnectWithoutProjectInputSchema), zod_1.z.lazy(() => exports.ProjectUsersCreateOrConnectWithoutProjectInputSchema).array()]).optional(),
    upsert: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUsersUpsertWithWhereUniqueWithoutProjectInputSchema), zod_1.z.lazy(() => exports.ProjectUsersUpsertWithWhereUniqueWithoutProjectInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.ProjectUsersCreateManyProjectInputEnvelopeSchema).optional(),
    set: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUsersWhereUniqueInputSchema), zod_1.z.lazy(() => exports.ProjectUsersWhereUniqueInputSchema).array()]).optional(),
    disconnect: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUsersWhereUniqueInputSchema), zod_1.z.lazy(() => exports.ProjectUsersWhereUniqueInputSchema).array()]).optional(),
    delete: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUsersWhereUniqueInputSchema), zod_1.z.lazy(() => exports.ProjectUsersWhereUniqueInputSchema).array()]).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUsersWhereUniqueInputSchema), zod_1.z.lazy(() => exports.ProjectUsersWhereUniqueInputSchema).array()]).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUsersUpdateWithWhereUniqueWithoutProjectInputSchema), zod_1.z.lazy(() => exports.ProjectUsersUpdateWithWhereUniqueWithoutProjectInputSchema).array()]).optional(),
    updateMany: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUsersUpdateManyWithWhereWithoutProjectInputSchema), zod_1.z.lazy(() => exports.ProjectUsersUpdateManyWithWhereWithoutProjectInputSchema).array()]).optional(),
    deleteMany: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUsersScalarWhereInputSchema), zod_1.z.lazy(() => exports.ProjectUsersScalarWhereInputSchema).array()]).optional(),
}).strict();
exports.ProjectInviteUncheckedUpdateManyWithoutProjectNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectInviteCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.ProjectInviteCreateWithoutProjectInputSchema).array(), zod_1.z.lazy(() => exports.ProjectInviteUncheckedCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.ProjectInviteUncheckedCreateWithoutProjectInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectInviteCreateOrConnectWithoutProjectInputSchema), zod_1.z.lazy(() => exports.ProjectInviteCreateOrConnectWithoutProjectInputSchema).array()]).optional(),
    upsert: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectInviteUpsertWithWhereUniqueWithoutProjectInputSchema), zod_1.z.lazy(() => exports.ProjectInviteUpsertWithWhereUniqueWithoutProjectInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.ProjectInviteCreateManyProjectInputEnvelopeSchema).optional(),
    set: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectInviteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.ProjectInviteWhereUniqueInputSchema).array()]).optional(),
    disconnect: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectInviteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.ProjectInviteWhereUniqueInputSchema).array()]).optional(),
    delete: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectInviteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.ProjectInviteWhereUniqueInputSchema).array()]).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectInviteWhereUniqueInputSchema), zod_1.z.lazy(() => exports.ProjectInviteWhereUniqueInputSchema).array()]).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectInviteUpdateWithWhereUniqueWithoutProjectInputSchema), zod_1.z.lazy(() => exports.ProjectInviteUpdateWithWhereUniqueWithoutProjectInputSchema).array()]).optional(),
    updateMany: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectInviteUpdateManyWithWhereWithoutProjectInputSchema), zod_1.z.lazy(() => exports.ProjectInviteUpdateManyWithWhereWithoutProjectInputSchema).array()]).optional(),
    deleteMany: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectInviteScalarWhereInputSchema), zod_1.z.lazy(() => exports.ProjectInviteScalarWhereInputSchema).array()]).optional(),
}).strict();
exports.SentEmailUncheckedUpdateManyWithoutProjectNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.SentEmailCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.SentEmailCreateWithoutProjectInputSchema).array(), zod_1.z.lazy(() => exports.SentEmailUncheckedCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.SentEmailUncheckedCreateWithoutProjectInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.SentEmailCreateOrConnectWithoutProjectInputSchema), zod_1.z.lazy(() => exports.SentEmailCreateOrConnectWithoutProjectInputSchema).array()]).optional(),
    upsert: zod_1.z.union([zod_1.z.lazy(() => exports.SentEmailUpsertWithWhereUniqueWithoutProjectInputSchema), zod_1.z.lazy(() => exports.SentEmailUpsertWithWhereUniqueWithoutProjectInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.SentEmailCreateManyProjectInputEnvelopeSchema).optional(),
    set: zod_1.z.union([zod_1.z.lazy(() => exports.SentEmailWhereUniqueInputSchema), zod_1.z.lazy(() => exports.SentEmailWhereUniqueInputSchema).array()]).optional(),
    disconnect: zod_1.z.union([zod_1.z.lazy(() => exports.SentEmailWhereUniqueInputSchema), zod_1.z.lazy(() => exports.SentEmailWhereUniqueInputSchema).array()]).optional(),
    delete: zod_1.z.union([zod_1.z.lazy(() => exports.SentEmailWhereUniqueInputSchema), zod_1.z.lazy(() => exports.SentEmailWhereUniqueInputSchema).array()]).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.SentEmailWhereUniqueInputSchema), zod_1.z.lazy(() => exports.SentEmailWhereUniqueInputSchema).array()]).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.SentEmailUpdateWithWhereUniqueWithoutProjectInputSchema), zod_1.z.lazy(() => exports.SentEmailUpdateWithWhereUniqueWithoutProjectInputSchema).array()]).optional(),
    updateMany: zod_1.z.union([zod_1.z.lazy(() => exports.SentEmailUpdateManyWithWhereWithoutProjectInputSchema), zod_1.z.lazy(() => exports.SentEmailUpdateManyWithWhereWithoutProjectInputSchema).array()]).optional(),
    deleteMany: zod_1.z.union([zod_1.z.lazy(() => exports.SentEmailScalarWhereInputSchema), zod_1.z.lazy(() => exports.SentEmailScalarWhereInputSchema).array()]).optional(),
}).strict();
exports.DomainUncheckedUpdateManyWithoutProjectNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.DomainCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.DomainCreateWithoutProjectInputSchema).array(), zod_1.z.lazy(() => exports.DomainUncheckedCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.DomainUncheckedCreateWithoutProjectInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.DomainCreateOrConnectWithoutProjectInputSchema), zod_1.z.lazy(() => exports.DomainCreateOrConnectWithoutProjectInputSchema).array()]).optional(),
    upsert: zod_1.z.union([zod_1.z.lazy(() => exports.DomainUpsertWithWhereUniqueWithoutProjectInputSchema), zod_1.z.lazy(() => exports.DomainUpsertWithWhereUniqueWithoutProjectInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.DomainCreateManyProjectInputEnvelopeSchema).optional(),
    set: zod_1.z.union([zod_1.z.lazy(() => exports.DomainWhereUniqueInputSchema), zod_1.z.lazy(() => exports.DomainWhereUniqueInputSchema).array()]).optional(),
    disconnect: zod_1.z.union([zod_1.z.lazy(() => exports.DomainWhereUniqueInputSchema), zod_1.z.lazy(() => exports.DomainWhereUniqueInputSchema).array()]).optional(),
    delete: zod_1.z.union([zod_1.z.lazy(() => exports.DomainWhereUniqueInputSchema), zod_1.z.lazy(() => exports.DomainWhereUniqueInputSchema).array()]).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.DomainWhereUniqueInputSchema), zod_1.z.lazy(() => exports.DomainWhereUniqueInputSchema).array()]).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.DomainUpdateWithWhereUniqueWithoutProjectInputSchema), zod_1.z.lazy(() => exports.DomainUpdateWithWhereUniqueWithoutProjectInputSchema).array()]).optional(),
    updateMany: zod_1.z.union([zod_1.z.lazy(() => exports.DomainUpdateManyWithWhereWithoutProjectInputSchema), zod_1.z.lazy(() => exports.DomainUpdateManyWithWhereWithoutProjectInputSchema).array()]).optional(),
    deleteMany: zod_1.z.union([zod_1.z.lazy(() => exports.DomainScalarWhereInputSchema), zod_1.z.lazy(() => exports.DomainScalarWhereInputSchema).array()]).optional(),
}).strict();
exports.LinkUncheckedUpdateManyWithoutProjectNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.LinkCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.LinkCreateWithoutProjectInputSchema).array(), zod_1.z.lazy(() => exports.LinkUncheckedCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.LinkUncheckedCreateWithoutProjectInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.LinkCreateOrConnectWithoutProjectInputSchema), zod_1.z.lazy(() => exports.LinkCreateOrConnectWithoutProjectInputSchema).array()]).optional(),
    upsert: zod_1.z.union([zod_1.z.lazy(() => exports.LinkUpsertWithWhereUniqueWithoutProjectInputSchema), zod_1.z.lazy(() => exports.LinkUpsertWithWhereUniqueWithoutProjectInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.LinkCreateManyProjectInputEnvelopeSchema).optional(),
    set: zod_1.z.union([zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema), zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema).array()]).optional(),
    disconnect: zod_1.z.union([zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema), zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema).array()]).optional(),
    delete: zod_1.z.union([zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema), zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema).array()]).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema), zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema).array()]).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.LinkUpdateWithWhereUniqueWithoutProjectInputSchema), zod_1.z.lazy(() => exports.LinkUpdateWithWhereUniqueWithoutProjectInputSchema).array()]).optional(),
    updateMany: zod_1.z.union([zod_1.z.lazy(() => exports.LinkUpdateManyWithWhereWithoutProjectInputSchema), zod_1.z.lazy(() => exports.LinkUpdateManyWithWhereWithoutProjectInputSchema).array()]).optional(),
    deleteMany: zod_1.z.union([zod_1.z.lazy(() => exports.LinkScalarWhereInputSchema), zod_1.z.lazy(() => exports.LinkScalarWhereInputSchema).array()]).optional(),
}).strict();
exports.TagUncheckedUpdateManyWithoutProjectNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.TagCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.TagCreateWithoutProjectInputSchema).array(), zod_1.z.lazy(() => exports.TagUncheckedCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.TagUncheckedCreateWithoutProjectInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.TagCreateOrConnectWithoutProjectInputSchema), zod_1.z.lazy(() => exports.TagCreateOrConnectWithoutProjectInputSchema).array()]).optional(),
    upsert: zod_1.z.union([zod_1.z.lazy(() => exports.TagUpsertWithWhereUniqueWithoutProjectInputSchema), zod_1.z.lazy(() => exports.TagUpsertWithWhereUniqueWithoutProjectInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.TagCreateManyProjectInputEnvelopeSchema).optional(),
    set: zod_1.z.union([zod_1.z.lazy(() => exports.TagWhereUniqueInputSchema), zod_1.z.lazy(() => exports.TagWhereUniqueInputSchema).array()]).optional(),
    disconnect: zod_1.z.union([zod_1.z.lazy(() => exports.TagWhereUniqueInputSchema), zod_1.z.lazy(() => exports.TagWhereUniqueInputSchema).array()]).optional(),
    delete: zod_1.z.union([zod_1.z.lazy(() => exports.TagWhereUniqueInputSchema), zod_1.z.lazy(() => exports.TagWhereUniqueInputSchema).array()]).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.TagWhereUniqueInputSchema), zod_1.z.lazy(() => exports.TagWhereUniqueInputSchema).array()]).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.TagUpdateWithWhereUniqueWithoutProjectInputSchema), zod_1.z.lazy(() => exports.TagUpdateWithWhereUniqueWithoutProjectInputSchema).array()]).optional(),
    updateMany: zod_1.z.union([zod_1.z.lazy(() => exports.TagUpdateManyWithWhereWithoutProjectInputSchema), zod_1.z.lazy(() => exports.TagUpdateManyWithWhereWithoutProjectInputSchema).array()]).optional(),
    deleteMany: zod_1.z.union([zod_1.z.lazy(() => exports.TagScalarWhereInputSchema), zod_1.z.lazy(() => exports.TagScalarWhereInputSchema).array()]).optional(),
}).strict();
exports.SiteUncheckedUpdateOneWithoutProjectNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.SiteCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.SiteUncheckedCreateWithoutProjectInputSchema)]).optional(),
    connectOrCreate: zod_1.z.lazy(() => exports.SiteCreateOrConnectWithoutProjectInputSchema).optional(),
    upsert: zod_1.z.lazy(() => exports.SiteUpsertWithoutProjectInputSchema).optional(),
    disconnect: zod_1.z.boolean().optional(),
    delete: zod_1.z.boolean().optional(),
    connect: zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.SiteUpdateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.SiteUncheckedUpdateWithoutProjectInputSchema)]).optional(),
}).strict();
exports.ProjectCreateNestedOneWithoutInvitesInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectCreateWithoutInvitesInputSchema), zod_1.z.lazy(() => exports.ProjectUncheckedCreateWithoutInvitesInputSchema)]).optional(),
    connectOrCreate: zod_1.z.lazy(() => exports.ProjectCreateOrConnectWithoutInvitesInputSchema).optional(),
    connect: zod_1.z.lazy(() => exports.ProjectWhereUniqueInputSchema).optional()
}).strict();
exports.ProjectUpdateOneRequiredWithoutInvitesNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectCreateWithoutInvitesInputSchema), zod_1.z.lazy(() => exports.ProjectUncheckedCreateWithoutInvitesInputSchema)]).optional(),
    connectOrCreate: zod_1.z.lazy(() => exports.ProjectCreateOrConnectWithoutInvitesInputSchema).optional(),
    upsert: zod_1.z.lazy(() => exports.ProjectUpsertWithoutInvitesInputSchema).optional(),
    connect: zod_1.z.lazy(() => exports.ProjectWhereUniqueInputSchema).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUpdateWithoutInvitesInputSchema), zod_1.z.lazy(() => exports.ProjectUncheckedUpdateWithoutInvitesInputSchema)]).optional(),
}).strict();
exports.ProjectCreateNestedOneWithoutUsersInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectCreateWithoutUsersInputSchema), zod_1.z.lazy(() => exports.ProjectUncheckedCreateWithoutUsersInputSchema)]).optional(),
    connectOrCreate: zod_1.z.lazy(() => exports.ProjectCreateOrConnectWithoutUsersInputSchema).optional(),
    connect: zod_1.z.lazy(() => exports.ProjectWhereUniqueInputSchema).optional()
}).strict();
exports.EnumRoleFieldUpdateOperationsInputSchema = zod_1.z.object({
    set: zod_1.z.lazy(() => exports.RoleSchema).optional()
}).strict();
exports.ProjectUpdateOneRequiredWithoutUsersNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectCreateWithoutUsersInputSchema), zod_1.z.lazy(() => exports.ProjectUncheckedCreateWithoutUsersInputSchema)]).optional(),
    connectOrCreate: zod_1.z.lazy(() => exports.ProjectCreateOrConnectWithoutUsersInputSchema).optional(),
    upsert: zod_1.z.lazy(() => exports.ProjectUpsertWithoutUsersInputSchema).optional(),
    connect: zod_1.z.lazy(() => exports.ProjectWhereUniqueInputSchema).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUpdateWithoutUsersInputSchema), zod_1.z.lazy(() => exports.ProjectUncheckedUpdateWithoutUsersInputSchema)]).optional(),
}).strict();
exports.ProjectCreateNestedOneWithoutSentEmailsInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectCreateWithoutSentEmailsInputSchema), zod_1.z.lazy(() => exports.ProjectUncheckedCreateWithoutSentEmailsInputSchema)]).optional(),
    connectOrCreate: zod_1.z.lazy(() => exports.ProjectCreateOrConnectWithoutSentEmailsInputSchema).optional(),
    connect: zod_1.z.lazy(() => exports.ProjectWhereUniqueInputSchema).optional()
}).strict();
exports.EnumEmailTypeFieldUpdateOperationsInputSchema = zod_1.z.object({
    set: zod_1.z.lazy(() => exports.EmailTypeSchema).optional()
}).strict();
exports.ProjectUpdateOneWithoutSentEmailsNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectCreateWithoutSentEmailsInputSchema), zod_1.z.lazy(() => exports.ProjectUncheckedCreateWithoutSentEmailsInputSchema)]).optional(),
    connectOrCreate: zod_1.z.lazy(() => exports.ProjectCreateOrConnectWithoutSentEmailsInputSchema).optional(),
    upsert: zod_1.z.lazy(() => exports.ProjectUpsertWithoutSentEmailsInputSchema).optional(),
    disconnect: zod_1.z.boolean().optional(),
    delete: zod_1.z.boolean().optional(),
    connect: zod_1.z.lazy(() => exports.ProjectWhereUniqueInputSchema).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUpdateWithoutSentEmailsInputSchema), zod_1.z.lazy(() => exports.ProjectUncheckedUpdateWithoutSentEmailsInputSchema)]).optional(),
}).strict();
exports.ProjectCreateNestedOneWithoutDomainsInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectCreateWithoutDomainsInputSchema), zod_1.z.lazy(() => exports.ProjectUncheckedCreateWithoutDomainsInputSchema)]).optional(),
    connectOrCreate: zod_1.z.lazy(() => exports.ProjectCreateOrConnectWithoutDomainsInputSchema).optional(),
    connect: zod_1.z.lazy(() => exports.ProjectWhereUniqueInputSchema).optional()
}).strict();
exports.LinkCreateNestedManyWithoutProjectDomainInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.LinkCreateWithoutProjectDomainInputSchema), zod_1.z.lazy(() => exports.LinkCreateWithoutProjectDomainInputSchema).array(), zod_1.z.lazy(() => exports.LinkUncheckedCreateWithoutProjectDomainInputSchema), zod_1.z.lazy(() => exports.LinkUncheckedCreateWithoutProjectDomainInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.LinkCreateOrConnectWithoutProjectDomainInputSchema), zod_1.z.lazy(() => exports.LinkCreateOrConnectWithoutProjectDomainInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.LinkCreateManyProjectDomainInputEnvelopeSchema).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema), zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema).array()]).optional(),
}).strict();
exports.LinkUncheckedCreateNestedManyWithoutProjectDomainInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.LinkCreateWithoutProjectDomainInputSchema), zod_1.z.lazy(() => exports.LinkCreateWithoutProjectDomainInputSchema).array(), zod_1.z.lazy(() => exports.LinkUncheckedCreateWithoutProjectDomainInputSchema), zod_1.z.lazy(() => exports.LinkUncheckedCreateWithoutProjectDomainInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.LinkCreateOrConnectWithoutProjectDomainInputSchema), zod_1.z.lazy(() => exports.LinkCreateOrConnectWithoutProjectDomainInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.LinkCreateManyProjectDomainInputEnvelopeSchema).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema), zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema).array()]).optional(),
}).strict();
exports.ProjectUpdateOneWithoutDomainsNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectCreateWithoutDomainsInputSchema), zod_1.z.lazy(() => exports.ProjectUncheckedCreateWithoutDomainsInputSchema)]).optional(),
    connectOrCreate: zod_1.z.lazy(() => exports.ProjectCreateOrConnectWithoutDomainsInputSchema).optional(),
    upsert: zod_1.z.lazy(() => exports.ProjectUpsertWithoutDomainsInputSchema).optional(),
    disconnect: zod_1.z.boolean().optional(),
    delete: zod_1.z.boolean().optional(),
    connect: zod_1.z.lazy(() => exports.ProjectWhereUniqueInputSchema).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUpdateWithoutDomainsInputSchema), zod_1.z.lazy(() => exports.ProjectUncheckedUpdateWithoutDomainsInputSchema)]).optional(),
}).strict();
exports.LinkUpdateManyWithoutProjectDomainNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.LinkCreateWithoutProjectDomainInputSchema), zod_1.z.lazy(() => exports.LinkCreateWithoutProjectDomainInputSchema).array(), zod_1.z.lazy(() => exports.LinkUncheckedCreateWithoutProjectDomainInputSchema), zod_1.z.lazy(() => exports.LinkUncheckedCreateWithoutProjectDomainInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.LinkCreateOrConnectWithoutProjectDomainInputSchema), zod_1.z.lazy(() => exports.LinkCreateOrConnectWithoutProjectDomainInputSchema).array()]).optional(),
    upsert: zod_1.z.union([zod_1.z.lazy(() => exports.LinkUpsertWithWhereUniqueWithoutProjectDomainInputSchema), zod_1.z.lazy(() => exports.LinkUpsertWithWhereUniqueWithoutProjectDomainInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.LinkCreateManyProjectDomainInputEnvelopeSchema).optional(),
    set: zod_1.z.union([zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema), zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema).array()]).optional(),
    disconnect: zod_1.z.union([zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema), zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema).array()]).optional(),
    delete: zod_1.z.union([zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema), zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema).array()]).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema), zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema).array()]).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.LinkUpdateWithWhereUniqueWithoutProjectDomainInputSchema), zod_1.z.lazy(() => exports.LinkUpdateWithWhereUniqueWithoutProjectDomainInputSchema).array()]).optional(),
    updateMany: zod_1.z.union([zod_1.z.lazy(() => exports.LinkUpdateManyWithWhereWithoutProjectDomainInputSchema), zod_1.z.lazy(() => exports.LinkUpdateManyWithWhereWithoutProjectDomainInputSchema).array()]).optional(),
    deleteMany: zod_1.z.union([zod_1.z.lazy(() => exports.LinkScalarWhereInputSchema), zod_1.z.lazy(() => exports.LinkScalarWhereInputSchema).array()]).optional(),
}).strict();
exports.LinkUncheckedUpdateManyWithoutProjectDomainNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.LinkCreateWithoutProjectDomainInputSchema), zod_1.z.lazy(() => exports.LinkCreateWithoutProjectDomainInputSchema).array(), zod_1.z.lazy(() => exports.LinkUncheckedCreateWithoutProjectDomainInputSchema), zod_1.z.lazy(() => exports.LinkUncheckedCreateWithoutProjectDomainInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.LinkCreateOrConnectWithoutProjectDomainInputSchema), zod_1.z.lazy(() => exports.LinkCreateOrConnectWithoutProjectDomainInputSchema).array()]).optional(),
    upsert: zod_1.z.union([zod_1.z.lazy(() => exports.LinkUpsertWithWhereUniqueWithoutProjectDomainInputSchema), zod_1.z.lazy(() => exports.LinkUpsertWithWhereUniqueWithoutProjectDomainInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.LinkCreateManyProjectDomainInputEnvelopeSchema).optional(),
    set: zod_1.z.union([zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema), zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema).array()]).optional(),
    disconnect: zod_1.z.union([zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema), zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema).array()]).optional(),
    delete: zod_1.z.union([zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema), zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema).array()]).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema), zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema).array()]).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.LinkUpdateWithWhereUniqueWithoutProjectDomainInputSchema), zod_1.z.lazy(() => exports.LinkUpdateWithWhereUniqueWithoutProjectDomainInputSchema).array()]).optional(),
    updateMany: zod_1.z.union([zod_1.z.lazy(() => exports.LinkUpdateManyWithWhereWithoutProjectDomainInputSchema), zod_1.z.lazy(() => exports.LinkUpdateManyWithWhereWithoutProjectDomainInputSchema).array()]).optional(),
    deleteMany: zod_1.z.union([zod_1.z.lazy(() => exports.LinkScalarWhereInputSchema), zod_1.z.lazy(() => exports.LinkScalarWhereInputSchema).array()]).optional(),
}).strict();
exports.ProjectCreateNestedOneWithoutLinksInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectCreateWithoutLinksInputSchema), zod_1.z.lazy(() => exports.ProjectUncheckedCreateWithoutLinksInputSchema)]).optional(),
    connectOrCreate: zod_1.z.lazy(() => exports.ProjectCreateOrConnectWithoutLinksInputSchema).optional(),
    connect: zod_1.z.lazy(() => exports.ProjectWhereUniqueInputSchema).optional()
}).strict();
exports.DomainCreateNestedOneWithoutLinksInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.DomainCreateWithoutLinksInputSchema), zod_1.z.lazy(() => exports.DomainUncheckedCreateWithoutLinksInputSchema)]).optional(),
    connectOrCreate: zod_1.z.lazy(() => exports.DomainCreateOrConnectWithoutLinksInputSchema).optional(),
    connect: zod_1.z.lazy(() => exports.DomainWhereUniqueInputSchema).optional()
}).strict();
exports.TagCreateNestedOneWithoutLinksInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.TagCreateWithoutLinksInputSchema), zod_1.z.lazy(() => exports.TagUncheckedCreateWithoutLinksInputSchema)]).optional(),
    connectOrCreate: zod_1.z.lazy(() => exports.TagCreateOrConnectWithoutLinksInputSchema).optional(),
    connect: zod_1.z.lazy(() => exports.TagWhereUniqueInputSchema).optional()
}).strict();
exports.ProjectUpdateOneWithoutLinksNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectCreateWithoutLinksInputSchema), zod_1.z.lazy(() => exports.ProjectUncheckedCreateWithoutLinksInputSchema)]).optional(),
    connectOrCreate: zod_1.z.lazy(() => exports.ProjectCreateOrConnectWithoutLinksInputSchema).optional(),
    upsert: zod_1.z.lazy(() => exports.ProjectUpsertWithoutLinksInputSchema).optional(),
    disconnect: zod_1.z.boolean().optional(),
    delete: zod_1.z.boolean().optional(),
    connect: zod_1.z.lazy(() => exports.ProjectWhereUniqueInputSchema).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUpdateWithoutLinksInputSchema), zod_1.z.lazy(() => exports.ProjectUncheckedUpdateWithoutLinksInputSchema)]).optional(),
}).strict();
exports.DomainUpdateOneWithoutLinksNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.DomainCreateWithoutLinksInputSchema), zod_1.z.lazy(() => exports.DomainUncheckedCreateWithoutLinksInputSchema)]).optional(),
    connectOrCreate: zod_1.z.lazy(() => exports.DomainCreateOrConnectWithoutLinksInputSchema).optional(),
    upsert: zod_1.z.lazy(() => exports.DomainUpsertWithoutLinksInputSchema).optional(),
    disconnect: zod_1.z.boolean().optional(),
    delete: zod_1.z.boolean().optional(),
    connect: zod_1.z.lazy(() => exports.DomainWhereUniqueInputSchema).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.DomainUpdateWithoutLinksInputSchema), zod_1.z.lazy(() => exports.DomainUncheckedUpdateWithoutLinksInputSchema)]).optional(),
}).strict();
exports.TagUpdateOneWithoutLinksNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.TagCreateWithoutLinksInputSchema), zod_1.z.lazy(() => exports.TagUncheckedCreateWithoutLinksInputSchema)]).optional(),
    connectOrCreate: zod_1.z.lazy(() => exports.TagCreateOrConnectWithoutLinksInputSchema).optional(),
    upsert: zod_1.z.lazy(() => exports.TagUpsertWithoutLinksInputSchema).optional(),
    disconnect: zod_1.z.boolean().optional(),
    delete: zod_1.z.boolean().optional(),
    connect: zod_1.z.lazy(() => exports.TagWhereUniqueInputSchema).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.TagUpdateWithoutLinksInputSchema), zod_1.z.lazy(() => exports.TagUncheckedUpdateWithoutLinksInputSchema)]).optional(),
}).strict();
exports.ProjectCreateNestedOneWithoutTagsInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectCreateWithoutTagsInputSchema), zod_1.z.lazy(() => exports.ProjectUncheckedCreateWithoutTagsInputSchema)]).optional(),
    connectOrCreate: zod_1.z.lazy(() => exports.ProjectCreateOrConnectWithoutTagsInputSchema).optional(),
    connect: zod_1.z.lazy(() => exports.ProjectWhereUniqueInputSchema).optional()
}).strict();
exports.LinkCreateNestedManyWithoutTagInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.LinkCreateWithoutTagInputSchema), zod_1.z.lazy(() => exports.LinkCreateWithoutTagInputSchema).array(), zod_1.z.lazy(() => exports.LinkUncheckedCreateWithoutTagInputSchema), zod_1.z.lazy(() => exports.LinkUncheckedCreateWithoutTagInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.LinkCreateOrConnectWithoutTagInputSchema), zod_1.z.lazy(() => exports.LinkCreateOrConnectWithoutTagInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.LinkCreateManyTagInputEnvelopeSchema).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema), zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema).array()]).optional(),
}).strict();
exports.LinkUncheckedCreateNestedManyWithoutTagInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.LinkCreateWithoutTagInputSchema), zod_1.z.lazy(() => exports.LinkCreateWithoutTagInputSchema).array(), zod_1.z.lazy(() => exports.LinkUncheckedCreateWithoutTagInputSchema), zod_1.z.lazy(() => exports.LinkUncheckedCreateWithoutTagInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.LinkCreateOrConnectWithoutTagInputSchema), zod_1.z.lazy(() => exports.LinkCreateOrConnectWithoutTagInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.LinkCreateManyTagInputEnvelopeSchema).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema), zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema).array()]).optional(),
}).strict();
exports.ProjectUpdateOneRequiredWithoutTagsNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectCreateWithoutTagsInputSchema), zod_1.z.lazy(() => exports.ProjectUncheckedCreateWithoutTagsInputSchema)]).optional(),
    connectOrCreate: zod_1.z.lazy(() => exports.ProjectCreateOrConnectWithoutTagsInputSchema).optional(),
    upsert: zod_1.z.lazy(() => exports.ProjectUpsertWithoutTagsInputSchema).optional(),
    connect: zod_1.z.lazy(() => exports.ProjectWhereUniqueInputSchema).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUpdateWithoutTagsInputSchema), zod_1.z.lazy(() => exports.ProjectUncheckedUpdateWithoutTagsInputSchema)]).optional(),
}).strict();
exports.LinkUpdateManyWithoutTagNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.LinkCreateWithoutTagInputSchema), zod_1.z.lazy(() => exports.LinkCreateWithoutTagInputSchema).array(), zod_1.z.lazy(() => exports.LinkUncheckedCreateWithoutTagInputSchema), zod_1.z.lazy(() => exports.LinkUncheckedCreateWithoutTagInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.LinkCreateOrConnectWithoutTagInputSchema), zod_1.z.lazy(() => exports.LinkCreateOrConnectWithoutTagInputSchema).array()]).optional(),
    upsert: zod_1.z.union([zod_1.z.lazy(() => exports.LinkUpsertWithWhereUniqueWithoutTagInputSchema), zod_1.z.lazy(() => exports.LinkUpsertWithWhereUniqueWithoutTagInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.LinkCreateManyTagInputEnvelopeSchema).optional(),
    set: zod_1.z.union([zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema), zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema).array()]).optional(),
    disconnect: zod_1.z.union([zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema), zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema).array()]).optional(),
    delete: zod_1.z.union([zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema), zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema).array()]).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema), zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema).array()]).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.LinkUpdateWithWhereUniqueWithoutTagInputSchema), zod_1.z.lazy(() => exports.LinkUpdateWithWhereUniqueWithoutTagInputSchema).array()]).optional(),
    updateMany: zod_1.z.union([zod_1.z.lazy(() => exports.LinkUpdateManyWithWhereWithoutTagInputSchema), zod_1.z.lazy(() => exports.LinkUpdateManyWithWhereWithoutTagInputSchema).array()]).optional(),
    deleteMany: zod_1.z.union([zod_1.z.lazy(() => exports.LinkScalarWhereInputSchema), zod_1.z.lazy(() => exports.LinkScalarWhereInputSchema).array()]).optional(),
}).strict();
exports.LinkUncheckedUpdateManyWithoutTagNestedInputSchema = zod_1.z.object({
    create: zod_1.z.union([zod_1.z.lazy(() => exports.LinkCreateWithoutTagInputSchema), zod_1.z.lazy(() => exports.LinkCreateWithoutTagInputSchema).array(), zod_1.z.lazy(() => exports.LinkUncheckedCreateWithoutTagInputSchema), zod_1.z.lazy(() => exports.LinkUncheckedCreateWithoutTagInputSchema).array()]).optional(),
    connectOrCreate: zod_1.z.union([zod_1.z.lazy(() => exports.LinkCreateOrConnectWithoutTagInputSchema), zod_1.z.lazy(() => exports.LinkCreateOrConnectWithoutTagInputSchema).array()]).optional(),
    upsert: zod_1.z.union([zod_1.z.lazy(() => exports.LinkUpsertWithWhereUniqueWithoutTagInputSchema), zod_1.z.lazy(() => exports.LinkUpsertWithWhereUniqueWithoutTagInputSchema).array()]).optional(),
    createMany: zod_1.z.lazy(() => exports.LinkCreateManyTagInputEnvelopeSchema).optional(),
    set: zod_1.z.union([zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema), zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema).array()]).optional(),
    disconnect: zod_1.z.union([zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema), zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema).array()]).optional(),
    delete: zod_1.z.union([zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema), zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema).array()]).optional(),
    connect: zod_1.z.union([zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema), zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema).array()]).optional(),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.LinkUpdateWithWhereUniqueWithoutTagInputSchema), zod_1.z.lazy(() => exports.LinkUpdateWithWhereUniqueWithoutTagInputSchema).array()]).optional(),
    updateMany: zod_1.z.union([zod_1.z.lazy(() => exports.LinkUpdateManyWithWhereWithoutTagInputSchema), zod_1.z.lazy(() => exports.LinkUpdateManyWithWhereWithoutTagInputSchema).array()]).optional(),
    deleteMany: zod_1.z.union([zod_1.z.lazy(() => exports.LinkScalarWhereInputSchema), zod_1.z.lazy(() => exports.LinkScalarWhereInputSchema).array()]).optional(),
}).strict();
exports.NestedIntFilterSchema = zod_1.z.object({
    equals: zod_1.z.number().optional(),
    in: zod_1.z.union([zod_1.z.number().array(), zod_1.z.number()]).optional(),
    notIn: zod_1.z.union([zod_1.z.number().array(), zod_1.z.number()]).optional(),
    lt: zod_1.z.number().optional(),
    lte: zod_1.z.number().optional(),
    gt: zod_1.z.number().optional(),
    gte: zod_1.z.number().optional(),
    not: zod_1.z.union([zod_1.z.number(), zod_1.z.lazy(() => exports.NestedIntFilterSchema)]).optional(),
}).strict();
exports.NestedDateTimeFilterSchema = zod_1.z.object({
    equals: zod_1.z.date().optional(),
    in: zod_1.z.union([zod_1.z.date().array(), zod_1.z.date()]).optional(),
    notIn: zod_1.z.union([zod_1.z.date().array(), zod_1.z.date()]).optional(),
    lt: zod_1.z.date().optional(),
    lte: zod_1.z.date().optional(),
    gt: zod_1.z.date().optional(),
    gte: zod_1.z.date().optional(),
    not: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.NestedDateTimeFilterSchema)]).optional(),
}).strict();
exports.NestedStringFilterSchema = zod_1.z.object({
    equals: zod_1.z.string().optional(),
    in: zod_1.z.union([zod_1.z.string().array(), zod_1.z.string()]).optional(),
    notIn: zod_1.z.union([zod_1.z.string().array(), zod_1.z.string()]).optional(),
    lt: zod_1.z.string().optional(),
    lte: zod_1.z.string().optional(),
    gt: zod_1.z.string().optional(),
    gte: zod_1.z.string().optional(),
    contains: zod_1.z.string().optional(),
    startsWith: zod_1.z.string().optional(),
    endsWith: zod_1.z.string().optional(),
    search: zod_1.z.string().optional(),
    not: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NestedStringFilterSchema)]).optional(),
}).strict();
exports.NestedStringNullableFilterSchema = zod_1.z.object({
    equals: zod_1.z.string().optional().nullable(),
    in: zod_1.z.union([zod_1.z.string().array(), zod_1.z.string()]).optional().nullable(),
    notIn: zod_1.z.union([zod_1.z.string().array(), zod_1.z.string()]).optional().nullable(),
    lt: zod_1.z.string().optional(),
    lte: zod_1.z.string().optional(),
    gt: zod_1.z.string().optional(),
    gte: zod_1.z.string().optional(),
    contains: zod_1.z.string().optional(),
    startsWith: zod_1.z.string().optional(),
    endsWith: zod_1.z.string().optional(),
    search: zod_1.z.string().optional(),
    not: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NestedStringNullableFilterSchema)]).optional().nullable(),
}).strict();
exports.NestedIntWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.number().optional(),
    in: zod_1.z.union([zod_1.z.number().array(), zod_1.z.number()]).optional(),
    notIn: zod_1.z.union([zod_1.z.number().array(), zod_1.z.number()]).optional(),
    lt: zod_1.z.number().optional(),
    lte: zod_1.z.number().optional(),
    gt: zod_1.z.number().optional(),
    gte: zod_1.z.number().optional(),
    not: zod_1.z.union([zod_1.z.number(), zod_1.z.lazy(() => exports.NestedIntWithAggregatesFilterSchema)]).optional(),
    _count: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _avg: zod_1.z.lazy(() => exports.NestedFloatFilterSchema).optional(),
    _sum: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional()
}).strict();
exports.NestedFloatFilterSchema = zod_1.z.object({
    equals: zod_1.z.number().optional(),
    in: zod_1.z.union([zod_1.z.number().array(), zod_1.z.number()]).optional(),
    notIn: zod_1.z.union([zod_1.z.number().array(), zod_1.z.number()]).optional(),
    lt: zod_1.z.number().optional(),
    lte: zod_1.z.number().optional(),
    gt: zod_1.z.number().optional(),
    gte: zod_1.z.number().optional(),
    not: zod_1.z.union([zod_1.z.number(), zod_1.z.lazy(() => exports.NestedFloatFilterSchema)]).optional(),
}).strict();
exports.NestedDateTimeWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.date().optional(),
    in: zod_1.z.union([zod_1.z.date().array(), zod_1.z.date()]).optional(),
    notIn: zod_1.z.union([zod_1.z.date().array(), zod_1.z.date()]).optional(),
    lt: zod_1.z.date().optional(),
    lte: zod_1.z.date().optional(),
    gt: zod_1.z.date().optional(),
    gte: zod_1.z.date().optional(),
    not: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.NestedDateTimeWithAggregatesFilterSchema)]).optional(),
    _count: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedDateTimeFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedDateTimeFilterSchema).optional()
}).strict();
exports.NestedStringWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.string().optional(),
    in: zod_1.z.union([zod_1.z.string().array(), zod_1.z.string()]).optional(),
    notIn: zod_1.z.union([zod_1.z.string().array(), zod_1.z.string()]).optional(),
    lt: zod_1.z.string().optional(),
    lte: zod_1.z.string().optional(),
    gt: zod_1.z.string().optional(),
    gte: zod_1.z.string().optional(),
    contains: zod_1.z.string().optional(),
    startsWith: zod_1.z.string().optional(),
    endsWith: zod_1.z.string().optional(),
    search: zod_1.z.string().optional(),
    not: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NestedStringWithAggregatesFilterSchema)]).optional(),
    _count: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedStringFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedStringFilterSchema).optional()
}).strict();
exports.NestedStringNullableWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.string().optional().nullable(),
    in: zod_1.z.union([zod_1.z.string().array(), zod_1.z.string()]).optional().nullable(),
    notIn: zod_1.z.union([zod_1.z.string().array(), zod_1.z.string()]).optional().nullable(),
    lt: zod_1.z.string().optional(),
    lte: zod_1.z.string().optional(),
    gt: zod_1.z.string().optional(),
    gte: zod_1.z.string().optional(),
    contains: zod_1.z.string().optional(),
    startsWith: zod_1.z.string().optional(),
    endsWith: zod_1.z.string().optional(),
    search: zod_1.z.string().optional(),
    not: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NestedStringNullableWithAggregatesFilterSchema)]).optional().nullable(),
    _count: zod_1.z.lazy(() => exports.NestedIntNullableFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedStringNullableFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedStringNullableFilterSchema).optional()
}).strict();
exports.NestedIntNullableFilterSchema = zod_1.z.object({
    equals: zod_1.z.number().optional().nullable(),
    in: zod_1.z.union([zod_1.z.number().array(), zod_1.z.number()]).optional().nullable(),
    notIn: zod_1.z.union([zod_1.z.number().array(), zod_1.z.number()]).optional().nullable(),
    lt: zod_1.z.number().optional(),
    lte: zod_1.z.number().optional(),
    gt: zod_1.z.number().optional(),
    gte: zod_1.z.number().optional(),
    not: zod_1.z.union([zod_1.z.number(), zod_1.z.lazy(() => exports.NestedIntNullableFilterSchema)]).optional().nullable(),
}).strict();
exports.NestedBoolFilterSchema = zod_1.z.object({
    equals: zod_1.z.boolean().optional(),
    not: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.NestedBoolFilterSchema)]).optional(),
}).strict();
exports.NestedBoolWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.boolean().optional(),
    not: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.NestedBoolWithAggregatesFilterSchema)]).optional(),
    _count: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedBoolFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedBoolFilterSchema).optional()
}).strict();
exports.NestedJsonFilterSchema = zod_1.z.object({
    equals: zod_1.z.union([exports.InputJsonValue, zod_1.z.lazy(() => exports.JsonNullValueFilterSchema)]).optional(),
    path: zod_1.z.string().optional(),
    string_contains: zod_1.z.string().optional(),
    string_starts_with: zod_1.z.string().optional(),
    string_ends_with: zod_1.z.string().optional(),
    array_contains: exports.InputJsonValue.optional().nullable(),
    array_starts_with: exports.InputJsonValue.optional().nullable(),
    array_ends_with: exports.InputJsonValue.optional().nullable(),
    lt: exports.InputJsonValue.optional(),
    lte: exports.InputJsonValue.optional(),
    gt: exports.InputJsonValue.optional(),
    gte: exports.InputJsonValue.optional(),
    not: zod_1.z.union([exports.InputJsonValue, zod_1.z.lazy(() => exports.JsonNullValueFilterSchema)]).optional(),
}).strict();
exports.NestedJsonNullableFilterSchema = zod_1.z.object({
    equals: zod_1.z.union([exports.InputJsonValue, zod_1.z.lazy(() => exports.JsonNullValueFilterSchema)]).optional(),
    path: zod_1.z.string().optional(),
    string_contains: zod_1.z.string().optional(),
    string_starts_with: zod_1.z.string().optional(),
    string_ends_with: zod_1.z.string().optional(),
    array_contains: exports.InputJsonValue.optional().nullable(),
    array_starts_with: exports.InputJsonValue.optional().nullable(),
    array_ends_with: exports.InputJsonValue.optional().nullable(),
    lt: exports.InputJsonValue.optional(),
    lte: exports.InputJsonValue.optional(),
    gt: exports.InputJsonValue.optional(),
    gte: exports.InputJsonValue.optional(),
    not: zod_1.z.union([exports.InputJsonValue, zod_1.z.lazy(() => exports.JsonNullValueFilterSchema)]).optional(),
}).strict();
exports.NestedDateTimeNullableFilterSchema = zod_1.z.object({
    equals: zod_1.z.date().optional().nullable(),
    in: zod_1.z.union([zod_1.z.date().array(), zod_1.z.date()]).optional().nullable(),
    notIn: zod_1.z.union([zod_1.z.date().array(), zod_1.z.date()]).optional().nullable(),
    lt: zod_1.z.date().optional(),
    lte: zod_1.z.date().optional(),
    gt: zod_1.z.date().optional(),
    gte: zod_1.z.date().optional(),
    not: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.NestedDateTimeNullableFilterSchema)]).optional().nullable(),
}).strict();
exports.NestedDateTimeNullableWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.date().optional().nullable(),
    in: zod_1.z.union([zod_1.z.date().array(), zod_1.z.date()]).optional().nullable(),
    notIn: zod_1.z.union([zod_1.z.date().array(), zod_1.z.date()]).optional().nullable(),
    lt: zod_1.z.date().optional(),
    lte: zod_1.z.date().optional(),
    gt: zod_1.z.date().optional(),
    gte: zod_1.z.date().optional(),
    not: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.NestedDateTimeNullableWithAggregatesFilterSchema)]).optional().nullable(),
    _count: zod_1.z.lazy(() => exports.NestedIntNullableFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedDateTimeNullableFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedDateTimeNullableFilterSchema).optional()
}).strict();
exports.NestedIntNullableWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.number().optional().nullable(),
    in: zod_1.z.union([zod_1.z.number().array(), zod_1.z.number()]).optional().nullable(),
    notIn: zod_1.z.union([zod_1.z.number().array(), zod_1.z.number()]).optional().nullable(),
    lt: zod_1.z.number().optional(),
    lte: zod_1.z.number().optional(),
    gt: zod_1.z.number().optional(),
    gte: zod_1.z.number().optional(),
    not: zod_1.z.union([zod_1.z.number(), zod_1.z.lazy(() => exports.NestedIntNullableWithAggregatesFilterSchema)]).optional().nullable(),
    _count: zod_1.z.lazy(() => exports.NestedIntNullableFilterSchema).optional(),
    _avg: zod_1.z.lazy(() => exports.NestedFloatNullableFilterSchema).optional(),
    _sum: zod_1.z.lazy(() => exports.NestedIntNullableFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedIntNullableFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedIntNullableFilterSchema).optional()
}).strict();
exports.NestedFloatNullableFilterSchema = zod_1.z.object({
    equals: zod_1.z.number().optional().nullable(),
    in: zod_1.z.union([zod_1.z.number().array(), zod_1.z.number()]).optional().nullable(),
    notIn: zod_1.z.union([zod_1.z.number().array(), zod_1.z.number()]).optional().nullable(),
    lt: zod_1.z.number().optional(),
    lte: zod_1.z.number().optional(),
    gt: zod_1.z.number().optional(),
    gte: zod_1.z.number().optional(),
    not: zod_1.z.union([zod_1.z.number(), zod_1.z.lazy(() => exports.NestedFloatNullableFilterSchema)]).optional().nullable(),
}).strict();
exports.NestedEnumRoleFilterSchema = zod_1.z.object({
    equals: zod_1.z.lazy(() => exports.RoleSchema).optional(),
    in: zod_1.z.union([zod_1.z.lazy(() => exports.RoleSchema).array(), zod_1.z.lazy(() => exports.RoleSchema)]).optional(),
    notIn: zod_1.z.union([zod_1.z.lazy(() => exports.RoleSchema).array(), zod_1.z.lazy(() => exports.RoleSchema)]).optional(),
    not: zod_1.z.union([zod_1.z.lazy(() => exports.RoleSchema), zod_1.z.lazy(() => exports.NestedEnumRoleFilterSchema)]).optional(),
}).strict();
exports.NestedEnumRoleWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.lazy(() => exports.RoleSchema).optional(),
    in: zod_1.z.union([zod_1.z.lazy(() => exports.RoleSchema).array(), zod_1.z.lazy(() => exports.RoleSchema)]).optional(),
    notIn: zod_1.z.union([zod_1.z.lazy(() => exports.RoleSchema).array(), zod_1.z.lazy(() => exports.RoleSchema)]).optional(),
    not: zod_1.z.union([zod_1.z.lazy(() => exports.RoleSchema), zod_1.z.lazy(() => exports.NestedEnumRoleWithAggregatesFilterSchema)]).optional(),
    _count: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedEnumRoleFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedEnumRoleFilterSchema).optional()
}).strict();
exports.NestedEnumEmailTypeFilterSchema = zod_1.z.object({
    equals: zod_1.z.lazy(() => exports.EmailTypeSchema).optional(),
    in: zod_1.z.union([zod_1.z.lazy(() => exports.EmailTypeSchema).array(), zod_1.z.lazy(() => exports.EmailTypeSchema)]).optional(),
    notIn: zod_1.z.union([zod_1.z.lazy(() => exports.EmailTypeSchema).array(), zod_1.z.lazy(() => exports.EmailTypeSchema)]).optional(),
    not: zod_1.z.union([zod_1.z.lazy(() => exports.EmailTypeSchema), zod_1.z.lazy(() => exports.NestedEnumEmailTypeFilterSchema)]).optional(),
}).strict();
exports.NestedEnumEmailTypeWithAggregatesFilterSchema = zod_1.z.object({
    equals: zod_1.z.lazy(() => exports.EmailTypeSchema).optional(),
    in: zod_1.z.union([zod_1.z.lazy(() => exports.EmailTypeSchema).array(), zod_1.z.lazy(() => exports.EmailTypeSchema)]).optional(),
    notIn: zod_1.z.union([zod_1.z.lazy(() => exports.EmailTypeSchema).array(), zod_1.z.lazy(() => exports.EmailTypeSchema)]).optional(),
    not: zod_1.z.union([zod_1.z.lazy(() => exports.EmailTypeSchema), zod_1.z.lazy(() => exports.NestedEnumEmailTypeWithAggregatesFilterSchema)]).optional(),
    _count: zod_1.z.lazy(() => exports.NestedIntFilterSchema).optional(),
    _min: zod_1.z.lazy(() => exports.NestedEnumEmailTypeFilterSchema).optional(),
    _max: zod_1.z.lazy(() => exports.NestedEnumEmailTypeFilterSchema).optional()
}).strict();
exports.SiteCreateWithoutSiteTemplateInputSchema = zod_1.z.object({
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    name: zod_1.z.string(),
    cosUrl: zod_1.z.string().optional(),
    slotData: zod_1.z.union([zod_1.z.lazy(() => exports.JsonNullValueInputSchema), exports.InputJsonValue]).optional(),
    customer: zod_1.z.lazy(() => exports.CustomerCreateNestedOneWithoutSiteInputSchema),
    project: zod_1.z.lazy(() => exports.ProjectCreateNestedOneWithoutSiteInputSchema).optional()
}).strict();
exports.SiteUncheckedCreateWithoutSiteTemplateInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    name: zod_1.z.string(),
    cosUrl: zod_1.z.string().optional(),
    customerId: zod_1.z.number().int(),
    slotData: zod_1.z.union([zod_1.z.lazy(() => exports.JsonNullValueInputSchema), exports.InputJsonValue]).optional(),
    projectId: zod_1.z.string().optional().nullable()
}).strict();
exports.SiteCreateOrConnectWithoutSiteTemplateInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.SiteCreateWithoutSiteTemplateInputSchema), zod_1.z.lazy(() => exports.SiteUncheckedCreateWithoutSiteTemplateInputSchema)]),
}).strict();
exports.SiteCreateManySiteTemplateInputEnvelopeSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => exports.SiteCreateManySiteTemplateInputSchema), zod_1.z.lazy(() => exports.SiteCreateManySiteTemplateInputSchema).array()]),
    skipDuplicates: zod_1.z.boolean().optional()
}).strict();
exports.SiteTemplateDataDefCreateWithoutSiteTemplateInputSchema = zod_1.z.object({
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    defData: zod_1.z.union([zod_1.z.lazy(() => exports.JsonNullValueInputSchema), exports.InputJsonValue]),
}).strict();
exports.SiteTemplateDataDefUncheckedCreateWithoutSiteTemplateInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    defData: zod_1.z.union([zod_1.z.lazy(() => exports.JsonNullValueInputSchema), exports.InputJsonValue]),
}).strict();
exports.SiteTemplateDataDefCreateOrConnectWithoutSiteTemplateInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.SiteTemplateDataDefWhereUniqueInputSchema),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.SiteTemplateDataDefCreateWithoutSiteTemplateInputSchema), zod_1.z.lazy(() => exports.SiteTemplateDataDefUncheckedCreateWithoutSiteTemplateInputSchema)]),
}).strict();
exports.SiteUpsertWithWhereUniqueWithoutSiteTemplateInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.SiteUpdateWithoutSiteTemplateInputSchema), zod_1.z.lazy(() => exports.SiteUncheckedUpdateWithoutSiteTemplateInputSchema)]),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.SiteCreateWithoutSiteTemplateInputSchema), zod_1.z.lazy(() => exports.SiteUncheckedCreateWithoutSiteTemplateInputSchema)]),
}).strict();
exports.SiteUpdateWithWhereUniqueWithoutSiteTemplateInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema),
    data: zod_1.z.union([zod_1.z.lazy(() => exports.SiteUpdateWithoutSiteTemplateInputSchema), zod_1.z.lazy(() => exports.SiteUncheckedUpdateWithoutSiteTemplateInputSchema)]),
}).strict();
exports.SiteUpdateManyWithWhereWithoutSiteTemplateInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.SiteScalarWhereInputSchema),
    data: zod_1.z.union([zod_1.z.lazy(() => exports.SiteUpdateManyMutationInputSchema), zod_1.z.lazy(() => exports.SiteUncheckedUpdateManyWithoutSiteInputSchema)]),
}).strict();
exports.SiteScalarWhereInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.SiteScalarWhereInputSchema), zod_1.z.lazy(() => exports.SiteScalarWhereInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.SiteScalarWhereInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.SiteScalarWhereInputSchema), zod_1.z.lazy(() => exports.SiteScalarWhereInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.IntFilterSchema), zod_1.z.number()]).optional(),
    createdAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeFilterSchema), zod_1.z.date()]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeFilterSchema), zod_1.z.date()]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.lazy(() => exports.BoolFilterSchema), zod_1.z.boolean()]).optional(),
    name: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    cosUrl: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    siteTemplateId: zod_1.z.union([zod_1.z.lazy(() => exports.IntFilterSchema), zod_1.z.number()]).optional(),
    customerId: zod_1.z.union([zod_1.z.lazy(() => exports.IntFilterSchema), zod_1.z.number()]).optional(),
    slotData: zod_1.z.lazy(() => exports.JsonFilterSchema).optional(),
    projectId: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
}).strict();
exports.SiteTemplateDataDefUpsertWithoutSiteTemplateInputSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => exports.SiteTemplateDataDefUpdateWithoutSiteTemplateInputSchema), zod_1.z.lazy(() => exports.SiteTemplateDataDefUncheckedUpdateWithoutSiteTemplateInputSchema)]),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.SiteTemplateDataDefCreateWithoutSiteTemplateInputSchema), zod_1.z.lazy(() => exports.SiteTemplateDataDefUncheckedCreateWithoutSiteTemplateInputSchema)]),
}).strict();
exports.SiteTemplateDataDefUpdateWithoutSiteTemplateInputSchema = zod_1.z.object({
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    defData: zod_1.z.union([zod_1.z.lazy(() => exports.JsonNullValueInputSchema), exports.InputJsonValue]).optional(),
}).strict();
exports.SiteTemplateDataDefUncheckedUpdateWithoutSiteTemplateInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    defData: zod_1.z.union([zod_1.z.lazy(() => exports.JsonNullValueInputSchema), exports.InputJsonValue]).optional(),
}).strict();
exports.SiteTemplateCreateWithoutSiteTemplateDataDefInputSchema = zod_1.z.object({
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    name: zod_1.z.string(),
    template: zod_1.z.string(),
    site: zod_1.z.lazy(() => exports.SiteCreateNestedManyWithoutSiteTemplateInputSchema).optional()
}).strict();
exports.SiteTemplateUncheckedCreateWithoutSiteTemplateDataDefInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    name: zod_1.z.string(),
    template: zod_1.z.string(),
    site: zod_1.z.lazy(() => exports.SiteUncheckedCreateNestedManyWithoutSiteTemplateInputSchema).optional()
}).strict();
exports.SiteTemplateCreateOrConnectWithoutSiteTemplateDataDefInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.SiteTemplateWhereUniqueInputSchema),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.SiteTemplateCreateWithoutSiteTemplateDataDefInputSchema), zod_1.z.lazy(() => exports.SiteTemplateUncheckedCreateWithoutSiteTemplateDataDefInputSchema)]),
}).strict();
exports.SiteTemplateUpsertWithoutSiteTemplateDataDefInputSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => exports.SiteTemplateUpdateWithoutSiteTemplateDataDefInputSchema), zod_1.z.lazy(() => exports.SiteTemplateUncheckedUpdateWithoutSiteTemplateDataDefInputSchema)]),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.SiteTemplateCreateWithoutSiteTemplateDataDefInputSchema), zod_1.z.lazy(() => exports.SiteTemplateUncheckedCreateWithoutSiteTemplateDataDefInputSchema)]),
}).strict();
exports.SiteTemplateUpdateWithoutSiteTemplateDataDefInputSchema = zod_1.z.object({
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    template: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    site: zod_1.z.lazy(() => exports.SiteUpdateManyWithoutSiteTemplateNestedInputSchema).optional()
}).strict();
exports.SiteTemplateUncheckedUpdateWithoutSiteTemplateDataDefInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    template: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    site: zod_1.z.lazy(() => exports.SiteUncheckedUpdateManyWithoutSiteTemplateNestedInputSchema).optional()
}).strict();
exports.SiteCreateWithoutCustomerInputSchema = zod_1.z.object({
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    name: zod_1.z.string(),
    cosUrl: zod_1.z.string().optional(),
    slotData: zod_1.z.union([zod_1.z.lazy(() => exports.JsonNullValueInputSchema), exports.InputJsonValue]).optional(),
    siteTemplate: zod_1.z.lazy(() => exports.SiteTemplateCreateNestedOneWithoutSiteInputSchema),
    project: zod_1.z.lazy(() => exports.ProjectCreateNestedOneWithoutSiteInputSchema).optional()
}).strict();
exports.SiteUncheckedCreateWithoutCustomerInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    name: zod_1.z.string(),
    cosUrl: zod_1.z.string().optional(),
    siteTemplateId: zod_1.z.number().int(),
    slotData: zod_1.z.union([zod_1.z.lazy(() => exports.JsonNullValueInputSchema), exports.InputJsonValue]).optional(),
    projectId: zod_1.z.string().optional().nullable()
}).strict();
exports.SiteCreateOrConnectWithoutCustomerInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.SiteCreateWithoutCustomerInputSchema), zod_1.z.lazy(() => exports.SiteUncheckedCreateWithoutCustomerInputSchema)]),
}).strict();
exports.SiteCreateManyCustomerInputEnvelopeSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => exports.SiteCreateManyCustomerInputSchema), zod_1.z.lazy(() => exports.SiteCreateManyCustomerInputSchema).array()]),
    skipDuplicates: zod_1.z.boolean().optional()
}).strict();
exports.SiteUpsertWithWhereUniqueWithoutCustomerInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.SiteUpdateWithoutCustomerInputSchema), zod_1.z.lazy(() => exports.SiteUncheckedUpdateWithoutCustomerInputSchema)]),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.SiteCreateWithoutCustomerInputSchema), zod_1.z.lazy(() => exports.SiteUncheckedCreateWithoutCustomerInputSchema)]),
}).strict();
exports.SiteUpdateWithWhereUniqueWithoutCustomerInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema),
    data: zod_1.z.union([zod_1.z.lazy(() => exports.SiteUpdateWithoutCustomerInputSchema), zod_1.z.lazy(() => exports.SiteUncheckedUpdateWithoutCustomerInputSchema)]),
}).strict();
exports.SiteUpdateManyWithWhereWithoutCustomerInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.SiteScalarWhereInputSchema),
    data: zod_1.z.union([zod_1.z.lazy(() => exports.SiteUpdateManyMutationInputSchema), zod_1.z.lazy(() => exports.SiteUncheckedUpdateManyWithoutSiteInputSchema)]),
}).strict();
exports.SiteTemplateCreateWithoutSiteInputSchema = zod_1.z.object({
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    name: zod_1.z.string(),
    template: zod_1.z.string(),
    siteTemplateDataDef: zod_1.z.lazy(() => exports.SiteTemplateDataDefCreateNestedOneWithoutSiteTemplateInputSchema).optional()
}).strict();
exports.SiteTemplateUncheckedCreateWithoutSiteInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    name: zod_1.z.string(),
    template: zod_1.z.string(),
    siteTemplateDataDef: zod_1.z.lazy(() => exports.SiteTemplateDataDefUncheckedCreateNestedOneWithoutSiteTemplateInputSchema).optional()
}).strict();
exports.SiteTemplateCreateOrConnectWithoutSiteInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.SiteTemplateWhereUniqueInputSchema),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.SiteTemplateCreateWithoutSiteInputSchema), zod_1.z.lazy(() => exports.SiteTemplateUncheckedCreateWithoutSiteInputSchema)]),
}).strict();
exports.CustomerCreateWithoutSiteInputSchema = zod_1.z.object({
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    name: zod_1.z.string(),
    extendData: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValue]).optional(),
}).strict();
exports.CustomerUncheckedCreateWithoutSiteInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    name: zod_1.z.string(),
    extendData: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValue]).optional(),
}).strict();
exports.CustomerCreateOrConnectWithoutSiteInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.CustomerWhereUniqueInputSchema),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.CustomerCreateWithoutSiteInputSchema), zod_1.z.lazy(() => exports.CustomerUncheckedCreateWithoutSiteInputSchema)]),
}).strict();
exports.ProjectCreateWithoutSiteInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    name: zod_1.z.string(),
    slug: zod_1.z.string(),
    logo: zod_1.z.string().optional().nullable(),
    password: zod_1.z.string().optional().nullable(),
    type: zod_1.z.string().optional(),
    usage: zod_1.z.number().int().optional(),
    usageLimit: zod_1.z.number().int().optional(),
    plan: zod_1.z.string().optional(),
    stripeId: zod_1.z.string().optional().nullable(),
    billingCycleStart: zod_1.z.number().int().optional().nullable(),
    region: zod_1.z.string().optional().nullable(),
    endpoint: zod_1.z.string().optional().nullable(),
    bucket: zod_1.z.string().optional().nullable(),
    useHost: zod_1.z.string().optional().nullable(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    users: zod_1.z.lazy(() => exports.ProjectUsersCreateNestedManyWithoutProjectInputSchema).optional(),
    invites: zod_1.z.lazy(() => exports.ProjectInviteCreateNestedManyWithoutProjectInputSchema).optional(),
    sentEmails: zod_1.z.lazy(() => exports.SentEmailCreateNestedManyWithoutProjectInputSchema).optional(),
    domains: zod_1.z.lazy(() => exports.DomainCreateNestedManyWithoutProjectInputSchema).optional(),
    links: zod_1.z.lazy(() => exports.LinkCreateNestedManyWithoutProjectInputSchema).optional(),
    tags: zod_1.z.lazy(() => exports.TagCreateNestedManyWithoutProjectInputSchema).optional()
}).strict();
exports.ProjectUncheckedCreateWithoutSiteInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    name: zod_1.z.string(),
    slug: zod_1.z.string(),
    logo: zod_1.z.string().optional().nullable(),
    password: zod_1.z.string().optional().nullable(),
    type: zod_1.z.string().optional(),
    usage: zod_1.z.number().int().optional(),
    usageLimit: zod_1.z.number().int().optional(),
    plan: zod_1.z.string().optional(),
    stripeId: zod_1.z.string().optional().nullable(),
    billingCycleStart: zod_1.z.number().int().optional().nullable(),
    region: zod_1.z.string().optional().nullable(),
    endpoint: zod_1.z.string().optional().nullable(),
    bucket: zod_1.z.string().optional().nullable(),
    useHost: zod_1.z.string().optional().nullable(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    users: zod_1.z.lazy(() => exports.ProjectUsersUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
    invites: zod_1.z.lazy(() => exports.ProjectInviteUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
    sentEmails: zod_1.z.lazy(() => exports.SentEmailUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
    domains: zod_1.z.lazy(() => exports.DomainUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
    links: zod_1.z.lazy(() => exports.LinkUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
    tags: zod_1.z.lazy(() => exports.TagUncheckedCreateNestedManyWithoutProjectInputSchema).optional()
}).strict();
exports.ProjectCreateOrConnectWithoutSiteInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.ProjectWhereUniqueInputSchema),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectCreateWithoutSiteInputSchema), zod_1.z.lazy(() => exports.ProjectUncheckedCreateWithoutSiteInputSchema)]),
}).strict();
exports.SiteTemplateUpsertWithoutSiteInputSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => exports.SiteTemplateUpdateWithoutSiteInputSchema), zod_1.z.lazy(() => exports.SiteTemplateUncheckedUpdateWithoutSiteInputSchema)]),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.SiteTemplateCreateWithoutSiteInputSchema), zod_1.z.lazy(() => exports.SiteTemplateUncheckedCreateWithoutSiteInputSchema)]),
}).strict();
exports.SiteTemplateUpdateWithoutSiteInputSchema = zod_1.z.object({
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    template: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    siteTemplateDataDef: zod_1.z.lazy(() => exports.SiteTemplateDataDefUpdateOneWithoutSiteTemplateNestedInputSchema).optional()
}).strict();
exports.SiteTemplateUncheckedUpdateWithoutSiteInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    template: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    siteTemplateDataDef: zod_1.z.lazy(() => exports.SiteTemplateDataDefUncheckedUpdateOneWithoutSiteTemplateNestedInputSchema).optional()
}).strict();
exports.CustomerUpsertWithoutSiteInputSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => exports.CustomerUpdateWithoutSiteInputSchema), zod_1.z.lazy(() => exports.CustomerUncheckedUpdateWithoutSiteInputSchema)]),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.CustomerCreateWithoutSiteInputSchema), zod_1.z.lazy(() => exports.CustomerUncheckedCreateWithoutSiteInputSchema)]),
}).strict();
exports.CustomerUpdateWithoutSiteInputSchema = zod_1.z.object({
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    extendData: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValue]).optional(),
}).strict();
exports.CustomerUncheckedUpdateWithoutSiteInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    extendData: zod_1.z.union([zod_1.z.lazy(() => exports.NullableJsonNullValueInputSchema), exports.InputJsonValue]).optional(),
}).strict();
exports.ProjectUpsertWithoutSiteInputSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUpdateWithoutSiteInputSchema), zod_1.z.lazy(() => exports.ProjectUncheckedUpdateWithoutSiteInputSchema)]),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectCreateWithoutSiteInputSchema), zod_1.z.lazy(() => exports.ProjectUncheckedCreateWithoutSiteInputSchema)]),
}).strict();
exports.ProjectUpdateWithoutSiteInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    slug: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    logo: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    type: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    usage: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    usageLimit: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    plan: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    stripeId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    billingCycleStart: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
    region: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    endpoint: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    bucket: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    useHost: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    users: zod_1.z.lazy(() => exports.ProjectUsersUpdateManyWithoutProjectNestedInputSchema).optional(),
    invites: zod_1.z.lazy(() => exports.ProjectInviteUpdateManyWithoutProjectNestedInputSchema).optional(),
    sentEmails: zod_1.z.lazy(() => exports.SentEmailUpdateManyWithoutProjectNestedInputSchema).optional(),
    domains: zod_1.z.lazy(() => exports.DomainUpdateManyWithoutProjectNestedInputSchema).optional(),
    links: zod_1.z.lazy(() => exports.LinkUpdateManyWithoutProjectNestedInputSchema).optional(),
    tags: zod_1.z.lazy(() => exports.TagUpdateManyWithoutProjectNestedInputSchema).optional()
}).strict();
exports.ProjectUncheckedUpdateWithoutSiteInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    slug: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    logo: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    type: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    usage: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    usageLimit: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    plan: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    stripeId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    billingCycleStart: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
    region: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    endpoint: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    bucket: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    useHost: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    users: zod_1.z.lazy(() => exports.ProjectUsersUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
    invites: zod_1.z.lazy(() => exports.ProjectInviteUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
    sentEmails: zod_1.z.lazy(() => exports.SentEmailUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
    domains: zod_1.z.lazy(() => exports.DomainUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
    links: zod_1.z.lazy(() => exports.LinkUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
    tags: zod_1.z.lazy(() => exports.TagUncheckedUpdateManyWithoutProjectNestedInputSchema).optional()
}).strict();
exports.AccountCreateWithoutUserInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    type: zod_1.z.string(),
    provider: zod_1.z.string(),
    providerAccountId: zod_1.z.string(),
    refresh_token: zod_1.z.string().optional().nullable(),
    refresh_token_expires_in: zod_1.z.number().int().optional().nullable(),
    access_token: zod_1.z.string().optional().nullable(),
    expires_at: zod_1.z.number().int().optional().nullable(),
    token_type: zod_1.z.string().optional().nullable(),
    scope: zod_1.z.string().optional().nullable(),
    id_token: zod_1.z.string().optional().nullable(),
    session_state: zod_1.z.string().optional().nullable()
}).strict();
exports.AccountUncheckedCreateWithoutUserInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    type: zod_1.z.string(),
    provider: zod_1.z.string(),
    providerAccountId: zod_1.z.string(),
    refresh_token: zod_1.z.string().optional().nullable(),
    refresh_token_expires_in: zod_1.z.number().int().optional().nullable(),
    access_token: zod_1.z.string().optional().nullable(),
    expires_at: zod_1.z.number().int().optional().nullable(),
    token_type: zod_1.z.string().optional().nullable(),
    scope: zod_1.z.string().optional().nullable(),
    id_token: zod_1.z.string().optional().nullable(),
    session_state: zod_1.z.string().optional().nullable()
}).strict();
exports.AccountCreateOrConnectWithoutUserInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.AccountWhereUniqueInputSchema),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.AccountCreateWithoutUserInputSchema), zod_1.z.lazy(() => exports.AccountUncheckedCreateWithoutUserInputSchema)]),
}).strict();
exports.AccountCreateManyUserInputEnvelopeSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => exports.AccountCreateManyUserInputSchema), zod_1.z.lazy(() => exports.AccountCreateManyUserInputSchema).array()]),
    skipDuplicates: zod_1.z.boolean().optional()
}).strict();
exports.SessionCreateWithoutUserInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    sessionToken: zod_1.z.string(),
    expires: zod_1.z.date()
}).strict();
exports.SessionUncheckedCreateWithoutUserInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    sessionToken: zod_1.z.string(),
    expires: zod_1.z.date()
}).strict();
exports.SessionCreateOrConnectWithoutUserInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.SessionWhereUniqueInputSchema),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.SessionCreateWithoutUserInputSchema), zod_1.z.lazy(() => exports.SessionUncheckedCreateWithoutUserInputSchema)]),
}).strict();
exports.SessionCreateManyUserInputEnvelopeSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => exports.SessionCreateManyUserInputSchema), zod_1.z.lazy(() => exports.SessionCreateManyUserInputSchema).array()]),
    skipDuplicates: zod_1.z.boolean().optional()
}).strict();
exports.AccountUpsertWithWhereUniqueWithoutUserInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.AccountWhereUniqueInputSchema),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.AccountUpdateWithoutUserInputSchema), zod_1.z.lazy(() => exports.AccountUncheckedUpdateWithoutUserInputSchema)]),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.AccountCreateWithoutUserInputSchema), zod_1.z.lazy(() => exports.AccountUncheckedCreateWithoutUserInputSchema)]),
}).strict();
exports.AccountUpdateWithWhereUniqueWithoutUserInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.AccountWhereUniqueInputSchema),
    data: zod_1.z.union([zod_1.z.lazy(() => exports.AccountUpdateWithoutUserInputSchema), zod_1.z.lazy(() => exports.AccountUncheckedUpdateWithoutUserInputSchema)]),
}).strict();
exports.AccountUpdateManyWithWhereWithoutUserInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.AccountScalarWhereInputSchema),
    data: zod_1.z.union([zod_1.z.lazy(() => exports.AccountUpdateManyMutationInputSchema), zod_1.z.lazy(() => exports.AccountUncheckedUpdateManyWithoutAccountsInputSchema)]),
}).strict();
exports.AccountScalarWhereInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.AccountScalarWhereInputSchema), zod_1.z.lazy(() => exports.AccountScalarWhereInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.AccountScalarWhereInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.AccountScalarWhereInputSchema), zod_1.z.lazy(() => exports.AccountScalarWhereInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    userId: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    type: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    provider: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    providerAccountId: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    refresh_token: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    refresh_token_expires_in: zod_1.z.union([zod_1.z.lazy(() => exports.IntNullableFilterSchema), zod_1.z.number()]).optional().nullable(),
    access_token: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    expires_at: zod_1.z.union([zod_1.z.lazy(() => exports.IntNullableFilterSchema), zod_1.z.number()]).optional().nullable(),
    token_type: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    scope: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    id_token: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    session_state: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
}).strict();
exports.SessionUpsertWithWhereUniqueWithoutUserInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.SessionWhereUniqueInputSchema),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.SessionUpdateWithoutUserInputSchema), zod_1.z.lazy(() => exports.SessionUncheckedUpdateWithoutUserInputSchema)]),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.SessionCreateWithoutUserInputSchema), zod_1.z.lazy(() => exports.SessionUncheckedCreateWithoutUserInputSchema)]),
}).strict();
exports.SessionUpdateWithWhereUniqueWithoutUserInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.SessionWhereUniqueInputSchema),
    data: zod_1.z.union([zod_1.z.lazy(() => exports.SessionUpdateWithoutUserInputSchema), zod_1.z.lazy(() => exports.SessionUncheckedUpdateWithoutUserInputSchema)]),
}).strict();
exports.SessionUpdateManyWithWhereWithoutUserInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.SessionScalarWhereInputSchema),
    data: zod_1.z.union([zod_1.z.lazy(() => exports.SessionUpdateManyMutationInputSchema), zod_1.z.lazy(() => exports.SessionUncheckedUpdateManyWithoutSessionsInputSchema)]),
}).strict();
exports.SessionScalarWhereInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.SessionScalarWhereInputSchema), zod_1.z.lazy(() => exports.SessionScalarWhereInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.SessionScalarWhereInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.SessionScalarWhereInputSchema), zod_1.z.lazy(() => exports.SessionScalarWhereInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    sessionToken: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    userId: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    expires: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeFilterSchema), zod_1.z.date()]).optional(),
}).strict();
exports.UserCreateWithoutAccountsInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    name: zod_1.z.string().optional().nullable(),
    email: zod_1.z.string().optional().nullable(),
    emailVerified: zod_1.z.date().optional().nullable(),
    image: zod_1.z.string().optional().nullable(),
    createdAt: zod_1.z.date().optional(),
    sessions: zod_1.z.lazy(() => exports.SessionCreateNestedManyWithoutUserInputSchema).optional()
}).strict();
exports.UserUncheckedCreateWithoutAccountsInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    name: zod_1.z.string().optional().nullable(),
    email: zod_1.z.string().optional().nullable(),
    emailVerified: zod_1.z.date().optional().nullable(),
    image: zod_1.z.string().optional().nullable(),
    createdAt: zod_1.z.date().optional(),
    sessions: zod_1.z.lazy(() => exports.SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();
exports.UserCreateOrConnectWithoutAccountsInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.UserWhereUniqueInputSchema),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.UserCreateWithoutAccountsInputSchema), zod_1.z.lazy(() => exports.UserUncheckedCreateWithoutAccountsInputSchema)]),
}).strict();
exports.UserUpsertWithoutAccountsInputSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => exports.UserUpdateWithoutAccountsInputSchema), zod_1.z.lazy(() => exports.UserUncheckedUpdateWithoutAccountsInputSchema)]),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.UserCreateWithoutAccountsInputSchema), zod_1.z.lazy(() => exports.UserUncheckedCreateWithoutAccountsInputSchema)]),
}).strict();
exports.UserUpdateWithoutAccountsInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    emailVerified: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
    image: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    sessions: zod_1.z.lazy(() => exports.SessionUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();
exports.UserUncheckedUpdateWithoutAccountsInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    emailVerified: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
    image: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    sessions: zod_1.z.lazy(() => exports.SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();
exports.UserCreateWithoutSessionsInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    name: zod_1.z.string().optional().nullable(),
    email: zod_1.z.string().optional().nullable(),
    emailVerified: zod_1.z.date().optional().nullable(),
    image: zod_1.z.string().optional().nullable(),
    createdAt: zod_1.z.date().optional(),
    accounts: zod_1.z.lazy(() => exports.AccountCreateNestedManyWithoutUserInputSchema).optional()
}).strict();
exports.UserUncheckedCreateWithoutSessionsInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    name: zod_1.z.string().optional().nullable(),
    email: zod_1.z.string().optional().nullable(),
    emailVerified: zod_1.z.date().optional().nullable(),
    image: zod_1.z.string().optional().nullable(),
    createdAt: zod_1.z.date().optional(),
    accounts: zod_1.z.lazy(() => exports.AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();
exports.UserCreateOrConnectWithoutSessionsInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.UserWhereUniqueInputSchema),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.UserCreateWithoutSessionsInputSchema), zod_1.z.lazy(() => exports.UserUncheckedCreateWithoutSessionsInputSchema)]),
}).strict();
exports.UserUpsertWithoutSessionsInputSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => exports.UserUpdateWithoutSessionsInputSchema), zod_1.z.lazy(() => exports.UserUncheckedUpdateWithoutSessionsInputSchema)]),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.UserCreateWithoutSessionsInputSchema), zod_1.z.lazy(() => exports.UserUncheckedCreateWithoutSessionsInputSchema)]),
}).strict();
exports.UserUpdateWithoutSessionsInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    emailVerified: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
    image: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    accounts: zod_1.z.lazy(() => exports.AccountUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();
exports.UserUncheckedUpdateWithoutSessionsInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    emailVerified: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
    image: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    accounts: zod_1.z.lazy(() => exports.AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();
exports.ProjectUsersCreateWithoutProjectInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    role: zod_1.z.lazy(() => exports.RoleSchema).optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    userId: zod_1.z.string().optional().nullable()
}).strict();
exports.ProjectUsersUncheckedCreateWithoutProjectInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    role: zod_1.z.lazy(() => exports.RoleSchema).optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    userId: zod_1.z.string().optional().nullable()
}).strict();
exports.ProjectUsersCreateOrConnectWithoutProjectInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.ProjectUsersWhereUniqueInputSchema),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUsersCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.ProjectUsersUncheckedCreateWithoutProjectInputSchema)]),
}).strict();
exports.ProjectUsersCreateManyProjectInputEnvelopeSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUsersCreateManyProjectInputSchema), zod_1.z.lazy(() => exports.ProjectUsersCreateManyProjectInputSchema).array()]),
    skipDuplicates: zod_1.z.boolean().optional()
}).strict();
exports.ProjectInviteCreateWithoutProjectInputSchema = zod_1.z.object({
    email: zod_1.z.string(),
    expires: zod_1.z.date(),
    createdAt: zod_1.z.date().optional()
}).strict();
exports.ProjectInviteUncheckedCreateWithoutProjectInputSchema = zod_1.z.object({
    email: zod_1.z.string(),
    expires: zod_1.z.date(),
    createdAt: zod_1.z.date().optional()
}).strict();
exports.ProjectInviteCreateOrConnectWithoutProjectInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.ProjectInviteWhereUniqueInputSchema),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectInviteCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.ProjectInviteUncheckedCreateWithoutProjectInputSchema)]),
}).strict();
exports.ProjectInviteCreateManyProjectInputEnvelopeSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectInviteCreateManyProjectInputSchema), zod_1.z.lazy(() => exports.ProjectInviteCreateManyProjectInputSchema).array()]),
    skipDuplicates: zod_1.z.boolean().optional()
}).strict();
exports.SentEmailCreateWithoutProjectInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    type: zod_1.z.lazy(() => exports.EmailTypeSchema),
    createdAt: zod_1.z.date().optional()
}).strict();
exports.SentEmailUncheckedCreateWithoutProjectInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    type: zod_1.z.lazy(() => exports.EmailTypeSchema),
    createdAt: zod_1.z.date().optional()
}).strict();
exports.SentEmailCreateOrConnectWithoutProjectInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.SentEmailWhereUniqueInputSchema),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.SentEmailCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.SentEmailUncheckedCreateWithoutProjectInputSchema)]),
}).strict();
exports.SentEmailCreateManyProjectInputEnvelopeSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => exports.SentEmailCreateManyProjectInputSchema), zod_1.z.lazy(() => exports.SentEmailCreateManyProjectInputSchema).array()]),
    skipDuplicates: zod_1.z.boolean().optional()
}).strict();
exports.DomainCreateWithoutProjectInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    slug: zod_1.z.string(),
    verified: zod_1.z.boolean().optional(),
    target: zod_1.z.string().optional().nullable(),
    type: zod_1.z.string().optional(),
    description: zod_1.z.string().optional().nullable(),
    primary: zod_1.z.boolean().optional(),
    lastChecked: zod_1.z.date().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    links: zod_1.z.lazy(() => exports.LinkCreateNestedManyWithoutProjectDomainInputSchema).optional()
}).strict();
exports.DomainUncheckedCreateWithoutProjectInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    slug: zod_1.z.string(),
    verified: zod_1.z.boolean().optional(),
    target: zod_1.z.string().optional().nullable(),
    type: zod_1.z.string().optional(),
    description: zod_1.z.string().optional().nullable(),
    primary: zod_1.z.boolean().optional(),
    lastChecked: zod_1.z.date().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    links: zod_1.z.lazy(() => exports.LinkUncheckedCreateNestedManyWithoutProjectDomainInputSchema).optional()
}).strict();
exports.DomainCreateOrConnectWithoutProjectInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.DomainWhereUniqueInputSchema),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.DomainCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.DomainUncheckedCreateWithoutProjectInputSchema)]),
}).strict();
exports.DomainCreateManyProjectInputEnvelopeSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => exports.DomainCreateManyProjectInputSchema), zod_1.z.lazy(() => exports.DomainCreateManyProjectInputSchema).array()]),
    skipDuplicates: zod_1.z.boolean().optional()
}).strict();
exports.LinkCreateWithoutProjectInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    key: zod_1.z.string(),
    url: zod_1.z.string(),
    archived: zod_1.z.boolean().optional(),
    expiresAt: zod_1.z.date().optional().nullable(),
    password: zod_1.z.string().optional().nullable(),
    proxy: zod_1.z.boolean().optional(),
    title: zod_1.z.string().optional().nullable(),
    description: zod_1.z.string().optional().nullable(),
    image: zod_1.z.string().optional().nullable(),
    utm_source: zod_1.z.string().optional().nullable(),
    utm_medium: zod_1.z.string().optional().nullable(),
    utm_campaign: zod_1.z.string().optional().nullable(),
    utm_term: zod_1.z.string().optional().nullable(),
    utm_content: zod_1.z.string().optional().nullable(),
    rewrite: zod_1.z.boolean().optional(),
    ios: zod_1.z.string().optional().nullable(),
    android: zod_1.z.string().optional().nullable(),
    userId: zod_1.z.string().optional().nullable(),
    clicks: zod_1.z.number().int().optional(),
    publicStats: zod_1.z.boolean().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    projectDomain: zod_1.z.lazy(() => exports.DomainCreateNestedOneWithoutLinksInputSchema).optional(),
    tag: zod_1.z.lazy(() => exports.TagCreateNestedOneWithoutLinksInputSchema).optional()
}).strict();
exports.LinkUncheckedCreateWithoutProjectInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    domain: zod_1.z.string(),
    key: zod_1.z.string(),
    url: zod_1.z.string(),
    archived: zod_1.z.boolean().optional(),
    expiresAt: zod_1.z.date().optional().nullable(),
    password: zod_1.z.string().optional().nullable(),
    proxy: zod_1.z.boolean().optional(),
    title: zod_1.z.string().optional().nullable(),
    description: zod_1.z.string().optional().nullable(),
    image: zod_1.z.string().optional().nullable(),
    utm_source: zod_1.z.string().optional().nullable(),
    utm_medium: zod_1.z.string().optional().nullable(),
    utm_campaign: zod_1.z.string().optional().nullable(),
    utm_term: zod_1.z.string().optional().nullable(),
    utm_content: zod_1.z.string().optional().nullable(),
    rewrite: zod_1.z.boolean().optional(),
    ios: zod_1.z.string().optional().nullable(),
    android: zod_1.z.string().optional().nullable(),
    userId: zod_1.z.string().optional().nullable(),
    clicks: zod_1.z.number().int().optional(),
    publicStats: zod_1.z.boolean().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    tagId: zod_1.z.string().optional().nullable()
}).strict();
exports.LinkCreateOrConnectWithoutProjectInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.LinkCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.LinkUncheckedCreateWithoutProjectInputSchema)]),
}).strict();
exports.LinkCreateManyProjectInputEnvelopeSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => exports.LinkCreateManyProjectInputSchema), zod_1.z.lazy(() => exports.LinkCreateManyProjectInputSchema).array()]),
    skipDuplicates: zod_1.z.boolean().optional()
}).strict();
exports.TagCreateWithoutProjectInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    name: zod_1.z.string(),
    color: zod_1.z.string().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    links: zod_1.z.lazy(() => exports.LinkCreateNestedManyWithoutTagInputSchema).optional()
}).strict();
exports.TagUncheckedCreateWithoutProjectInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    name: zod_1.z.string(),
    color: zod_1.z.string().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    links: zod_1.z.lazy(() => exports.LinkUncheckedCreateNestedManyWithoutTagInputSchema).optional()
}).strict();
exports.TagCreateOrConnectWithoutProjectInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.TagWhereUniqueInputSchema),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.TagCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.TagUncheckedCreateWithoutProjectInputSchema)]),
}).strict();
exports.TagCreateManyProjectInputEnvelopeSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => exports.TagCreateManyProjectInputSchema), zod_1.z.lazy(() => exports.TagCreateManyProjectInputSchema).array()]),
    skipDuplicates: zod_1.z.boolean().optional()
}).strict();
exports.SiteCreateWithoutProjectInputSchema = zod_1.z.object({
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    name: zod_1.z.string(),
    cosUrl: zod_1.z.string().optional(),
    slotData: zod_1.z.union([zod_1.z.lazy(() => exports.JsonNullValueInputSchema), exports.InputJsonValue]).optional(),
    siteTemplate: zod_1.z.lazy(() => exports.SiteTemplateCreateNestedOneWithoutSiteInputSchema),
    customer: zod_1.z.lazy(() => exports.CustomerCreateNestedOneWithoutSiteInputSchema)
}).strict();
exports.SiteUncheckedCreateWithoutProjectInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    name: zod_1.z.string(),
    cosUrl: zod_1.z.string().optional(),
    siteTemplateId: zod_1.z.number().int(),
    customerId: zod_1.z.number().int(),
    slotData: zod_1.z.union([zod_1.z.lazy(() => exports.JsonNullValueInputSchema), exports.InputJsonValue]).optional(),
}).strict();
exports.SiteCreateOrConnectWithoutProjectInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.SiteWhereUniqueInputSchema),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.SiteCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.SiteUncheckedCreateWithoutProjectInputSchema)]),
}).strict();
exports.ProjectUsersUpsertWithWhereUniqueWithoutProjectInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.ProjectUsersWhereUniqueInputSchema),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUsersUpdateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.ProjectUsersUncheckedUpdateWithoutProjectInputSchema)]),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUsersCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.ProjectUsersUncheckedCreateWithoutProjectInputSchema)]),
}).strict();
exports.ProjectUsersUpdateWithWhereUniqueWithoutProjectInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.ProjectUsersWhereUniqueInputSchema),
    data: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUsersUpdateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.ProjectUsersUncheckedUpdateWithoutProjectInputSchema)]),
}).strict();
exports.ProjectUsersUpdateManyWithWhereWithoutProjectInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.ProjectUsersScalarWhereInputSchema),
    data: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUsersUpdateManyMutationInputSchema), zod_1.z.lazy(() => exports.ProjectUsersUncheckedUpdateManyWithoutUsersInputSchema)]),
}).strict();
exports.ProjectUsersScalarWhereInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUsersScalarWhereInputSchema), zod_1.z.lazy(() => exports.ProjectUsersScalarWhereInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.ProjectUsersScalarWhereInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUsersScalarWhereInputSchema), zod_1.z.lazy(() => exports.ProjectUsersScalarWhereInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    role: zod_1.z.union([zod_1.z.lazy(() => exports.EnumRoleFilterSchema), zod_1.z.lazy(() => exports.RoleSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeFilterSchema), zod_1.z.date()]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeFilterSchema), zod_1.z.date()]).optional(),
    userId: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    projectId: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
}).strict();
exports.ProjectInviteUpsertWithWhereUniqueWithoutProjectInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.ProjectInviteWhereUniqueInputSchema),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectInviteUpdateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.ProjectInviteUncheckedUpdateWithoutProjectInputSchema)]),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectInviteCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.ProjectInviteUncheckedCreateWithoutProjectInputSchema)]),
}).strict();
exports.ProjectInviteUpdateWithWhereUniqueWithoutProjectInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.ProjectInviteWhereUniqueInputSchema),
    data: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectInviteUpdateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.ProjectInviteUncheckedUpdateWithoutProjectInputSchema)]),
}).strict();
exports.ProjectInviteUpdateManyWithWhereWithoutProjectInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.ProjectInviteScalarWhereInputSchema),
    data: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectInviteUpdateManyMutationInputSchema), zod_1.z.lazy(() => exports.ProjectInviteUncheckedUpdateManyWithoutInvitesInputSchema)]),
}).strict();
exports.ProjectInviteScalarWhereInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectInviteScalarWhereInputSchema), zod_1.z.lazy(() => exports.ProjectInviteScalarWhereInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.ProjectInviteScalarWhereInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectInviteScalarWhereInputSchema), zod_1.z.lazy(() => exports.ProjectInviteScalarWhereInputSchema).array()]).optional(),
    email: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    expires: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeFilterSchema), zod_1.z.date()]).optional(),
    projectId: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    createdAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeFilterSchema), zod_1.z.date()]).optional(),
}).strict();
exports.SentEmailUpsertWithWhereUniqueWithoutProjectInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.SentEmailWhereUniqueInputSchema),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.SentEmailUpdateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.SentEmailUncheckedUpdateWithoutProjectInputSchema)]),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.SentEmailCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.SentEmailUncheckedCreateWithoutProjectInputSchema)]),
}).strict();
exports.SentEmailUpdateWithWhereUniqueWithoutProjectInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.SentEmailWhereUniqueInputSchema),
    data: zod_1.z.union([zod_1.z.lazy(() => exports.SentEmailUpdateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.SentEmailUncheckedUpdateWithoutProjectInputSchema)]),
}).strict();
exports.SentEmailUpdateManyWithWhereWithoutProjectInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.SentEmailScalarWhereInputSchema),
    data: zod_1.z.union([zod_1.z.lazy(() => exports.SentEmailUpdateManyMutationInputSchema), zod_1.z.lazy(() => exports.SentEmailUncheckedUpdateManyWithoutSentEmailsInputSchema)]),
}).strict();
exports.SentEmailScalarWhereInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.SentEmailScalarWhereInputSchema), zod_1.z.lazy(() => exports.SentEmailScalarWhereInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.SentEmailScalarWhereInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.SentEmailScalarWhereInputSchema), zod_1.z.lazy(() => exports.SentEmailScalarWhereInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    type: zod_1.z.union([zod_1.z.lazy(() => exports.EnumEmailTypeFilterSchema), zod_1.z.lazy(() => exports.EmailTypeSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeFilterSchema), zod_1.z.date()]).optional(),
    projectId: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
}).strict();
exports.DomainUpsertWithWhereUniqueWithoutProjectInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.DomainWhereUniqueInputSchema),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.DomainUpdateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.DomainUncheckedUpdateWithoutProjectInputSchema)]),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.DomainCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.DomainUncheckedCreateWithoutProjectInputSchema)]),
}).strict();
exports.DomainUpdateWithWhereUniqueWithoutProjectInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.DomainWhereUniqueInputSchema),
    data: zod_1.z.union([zod_1.z.lazy(() => exports.DomainUpdateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.DomainUncheckedUpdateWithoutProjectInputSchema)]),
}).strict();
exports.DomainUpdateManyWithWhereWithoutProjectInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.DomainScalarWhereInputSchema),
    data: zod_1.z.union([zod_1.z.lazy(() => exports.DomainUpdateManyMutationInputSchema), zod_1.z.lazy(() => exports.DomainUncheckedUpdateManyWithoutDomainsInputSchema)]),
}).strict();
exports.DomainScalarWhereInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.DomainScalarWhereInputSchema), zod_1.z.lazy(() => exports.DomainScalarWhereInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.DomainScalarWhereInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.DomainScalarWhereInputSchema), zod_1.z.lazy(() => exports.DomainScalarWhereInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    slug: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    verified: zod_1.z.union([zod_1.z.lazy(() => exports.BoolFilterSchema), zod_1.z.boolean()]).optional(),
    target: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    type: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    description: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    projectId: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    primary: zod_1.z.union([zod_1.z.lazy(() => exports.BoolFilterSchema), zod_1.z.boolean()]).optional(),
    lastChecked: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeFilterSchema), zod_1.z.date()]).optional(),
    createdAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeFilterSchema), zod_1.z.date()]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeFilterSchema), zod_1.z.date()]).optional(),
}).strict();
exports.LinkUpsertWithWhereUniqueWithoutProjectInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.LinkUpdateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.LinkUncheckedUpdateWithoutProjectInputSchema)]),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.LinkCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.LinkUncheckedCreateWithoutProjectInputSchema)]),
}).strict();
exports.LinkUpdateWithWhereUniqueWithoutProjectInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema),
    data: zod_1.z.union([zod_1.z.lazy(() => exports.LinkUpdateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.LinkUncheckedUpdateWithoutProjectInputSchema)]),
}).strict();
exports.LinkUpdateManyWithWhereWithoutProjectInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.LinkScalarWhereInputSchema),
    data: zod_1.z.union([zod_1.z.lazy(() => exports.LinkUpdateManyMutationInputSchema), zod_1.z.lazy(() => exports.LinkUncheckedUpdateManyWithoutLinksInputSchema)]),
}).strict();
exports.LinkScalarWhereInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.LinkScalarWhereInputSchema), zod_1.z.lazy(() => exports.LinkScalarWhereInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.LinkScalarWhereInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.LinkScalarWhereInputSchema), zod_1.z.lazy(() => exports.LinkScalarWhereInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    domain: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    key: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    url: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    archived: zod_1.z.union([zod_1.z.lazy(() => exports.BoolFilterSchema), zod_1.z.boolean()]).optional(),
    expiresAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeNullableFilterSchema), zod_1.z.date()]).optional().nullable(),
    password: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    proxy: zod_1.z.union([zod_1.z.lazy(() => exports.BoolFilterSchema), zod_1.z.boolean()]).optional(),
    title: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    description: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    image: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    utm_source: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    utm_medium: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    utm_campaign: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    utm_term: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    utm_content: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    rewrite: zod_1.z.union([zod_1.z.lazy(() => exports.BoolFilterSchema), zod_1.z.boolean()]).optional(),
    ios: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    android: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    userId: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    projectId: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
    clicks: zod_1.z.union([zod_1.z.lazy(() => exports.IntFilterSchema), zod_1.z.number()]).optional(),
    publicStats: zod_1.z.union([zod_1.z.lazy(() => exports.BoolFilterSchema), zod_1.z.boolean()]).optional(),
    createdAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeFilterSchema), zod_1.z.date()]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeFilterSchema), zod_1.z.date()]).optional(),
    tagId: zod_1.z.union([zod_1.z.lazy(() => exports.StringNullableFilterSchema), zod_1.z.string()]).optional().nullable(),
}).strict();
exports.TagUpsertWithWhereUniqueWithoutProjectInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.TagWhereUniqueInputSchema),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.TagUpdateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.TagUncheckedUpdateWithoutProjectInputSchema)]),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.TagCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.TagUncheckedCreateWithoutProjectInputSchema)]),
}).strict();
exports.TagUpdateWithWhereUniqueWithoutProjectInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.TagWhereUniqueInputSchema),
    data: zod_1.z.union([zod_1.z.lazy(() => exports.TagUpdateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.TagUncheckedUpdateWithoutProjectInputSchema)]),
}).strict();
exports.TagUpdateManyWithWhereWithoutProjectInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.TagScalarWhereInputSchema),
    data: zod_1.z.union([zod_1.z.lazy(() => exports.TagUpdateManyMutationInputSchema), zod_1.z.lazy(() => exports.TagUncheckedUpdateManyWithoutTagsInputSchema)]),
}).strict();
exports.TagScalarWhereInputSchema = zod_1.z.object({
    AND: zod_1.z.union([zod_1.z.lazy(() => exports.TagScalarWhereInputSchema), zod_1.z.lazy(() => exports.TagScalarWhereInputSchema).array()]).optional(),
    OR: zod_1.z.lazy(() => exports.TagScalarWhereInputSchema).array().optional(),
    NOT: zod_1.z.union([zod_1.z.lazy(() => exports.TagScalarWhereInputSchema), zod_1.z.lazy(() => exports.TagScalarWhereInputSchema).array()]).optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    name: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    color: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
    createdAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeFilterSchema), zod_1.z.date()]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.lazy(() => exports.DateTimeFilterSchema), zod_1.z.date()]).optional(),
    projectId: zod_1.z.union([zod_1.z.lazy(() => exports.StringFilterSchema), zod_1.z.string()]).optional(),
}).strict();
exports.SiteUpsertWithoutProjectInputSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => exports.SiteUpdateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.SiteUncheckedUpdateWithoutProjectInputSchema)]),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.SiteCreateWithoutProjectInputSchema), zod_1.z.lazy(() => exports.SiteUncheckedCreateWithoutProjectInputSchema)]),
}).strict();
exports.SiteUpdateWithoutProjectInputSchema = zod_1.z.object({
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    cosUrl: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    slotData: zod_1.z.union([zod_1.z.lazy(() => exports.JsonNullValueInputSchema), exports.InputJsonValue]).optional(),
    siteTemplate: zod_1.z.lazy(() => exports.SiteTemplateUpdateOneRequiredWithoutSiteNestedInputSchema).optional(),
    customer: zod_1.z.lazy(() => exports.CustomerUpdateOneRequiredWithoutSiteNestedInputSchema).optional()
}).strict();
exports.SiteUncheckedUpdateWithoutProjectInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    cosUrl: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    siteTemplateId: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    customerId: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    slotData: zod_1.z.union([zod_1.z.lazy(() => exports.JsonNullValueInputSchema), exports.InputJsonValue]).optional(),
}).strict();
exports.ProjectCreateWithoutInvitesInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    name: zod_1.z.string(),
    slug: zod_1.z.string(),
    logo: zod_1.z.string().optional().nullable(),
    password: zod_1.z.string().optional().nullable(),
    type: zod_1.z.string().optional(),
    usage: zod_1.z.number().int().optional(),
    usageLimit: zod_1.z.number().int().optional(),
    plan: zod_1.z.string().optional(),
    stripeId: zod_1.z.string().optional().nullable(),
    billingCycleStart: zod_1.z.number().int().optional().nullable(),
    region: zod_1.z.string().optional().nullable(),
    endpoint: zod_1.z.string().optional().nullable(),
    bucket: zod_1.z.string().optional().nullable(),
    useHost: zod_1.z.string().optional().nullable(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    users: zod_1.z.lazy(() => exports.ProjectUsersCreateNestedManyWithoutProjectInputSchema).optional(),
    sentEmails: zod_1.z.lazy(() => exports.SentEmailCreateNestedManyWithoutProjectInputSchema).optional(),
    domains: zod_1.z.lazy(() => exports.DomainCreateNestedManyWithoutProjectInputSchema).optional(),
    links: zod_1.z.lazy(() => exports.LinkCreateNestedManyWithoutProjectInputSchema).optional(),
    tags: zod_1.z.lazy(() => exports.TagCreateNestedManyWithoutProjectInputSchema).optional(),
    site: zod_1.z.lazy(() => exports.SiteCreateNestedOneWithoutProjectInputSchema).optional()
}).strict();
exports.ProjectUncheckedCreateWithoutInvitesInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    name: zod_1.z.string(),
    slug: zod_1.z.string(),
    logo: zod_1.z.string().optional().nullable(),
    password: zod_1.z.string().optional().nullable(),
    type: zod_1.z.string().optional(),
    usage: zod_1.z.number().int().optional(),
    usageLimit: zod_1.z.number().int().optional(),
    plan: zod_1.z.string().optional(),
    stripeId: zod_1.z.string().optional().nullable(),
    billingCycleStart: zod_1.z.number().int().optional().nullable(),
    region: zod_1.z.string().optional().nullable(),
    endpoint: zod_1.z.string().optional().nullable(),
    bucket: zod_1.z.string().optional().nullable(),
    useHost: zod_1.z.string().optional().nullable(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    users: zod_1.z.lazy(() => exports.ProjectUsersUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
    sentEmails: zod_1.z.lazy(() => exports.SentEmailUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
    domains: zod_1.z.lazy(() => exports.DomainUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
    links: zod_1.z.lazy(() => exports.LinkUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
    tags: zod_1.z.lazy(() => exports.TagUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
    site: zod_1.z.lazy(() => exports.SiteUncheckedCreateNestedOneWithoutProjectInputSchema).optional()
}).strict();
exports.ProjectCreateOrConnectWithoutInvitesInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.ProjectWhereUniqueInputSchema),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectCreateWithoutInvitesInputSchema), zod_1.z.lazy(() => exports.ProjectUncheckedCreateWithoutInvitesInputSchema)]),
}).strict();
exports.ProjectUpsertWithoutInvitesInputSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUpdateWithoutInvitesInputSchema), zod_1.z.lazy(() => exports.ProjectUncheckedUpdateWithoutInvitesInputSchema)]),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectCreateWithoutInvitesInputSchema), zod_1.z.lazy(() => exports.ProjectUncheckedCreateWithoutInvitesInputSchema)]),
}).strict();
exports.ProjectUpdateWithoutInvitesInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    slug: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    logo: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    type: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    usage: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    usageLimit: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    plan: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    stripeId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    billingCycleStart: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
    region: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    endpoint: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    bucket: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    useHost: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    users: zod_1.z.lazy(() => exports.ProjectUsersUpdateManyWithoutProjectNestedInputSchema).optional(),
    sentEmails: zod_1.z.lazy(() => exports.SentEmailUpdateManyWithoutProjectNestedInputSchema).optional(),
    domains: zod_1.z.lazy(() => exports.DomainUpdateManyWithoutProjectNestedInputSchema).optional(),
    links: zod_1.z.lazy(() => exports.LinkUpdateManyWithoutProjectNestedInputSchema).optional(),
    tags: zod_1.z.lazy(() => exports.TagUpdateManyWithoutProjectNestedInputSchema).optional(),
    site: zod_1.z.lazy(() => exports.SiteUpdateOneWithoutProjectNestedInputSchema).optional()
}).strict();
exports.ProjectUncheckedUpdateWithoutInvitesInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    slug: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    logo: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    type: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    usage: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    usageLimit: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    plan: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    stripeId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    billingCycleStart: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
    region: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    endpoint: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    bucket: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    useHost: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    users: zod_1.z.lazy(() => exports.ProjectUsersUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
    sentEmails: zod_1.z.lazy(() => exports.SentEmailUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
    domains: zod_1.z.lazy(() => exports.DomainUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
    links: zod_1.z.lazy(() => exports.LinkUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
    tags: zod_1.z.lazy(() => exports.TagUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
    site: zod_1.z.lazy(() => exports.SiteUncheckedUpdateOneWithoutProjectNestedInputSchema).optional()
}).strict();
exports.ProjectCreateWithoutUsersInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    name: zod_1.z.string(),
    slug: zod_1.z.string(),
    logo: zod_1.z.string().optional().nullable(),
    password: zod_1.z.string().optional().nullable(),
    type: zod_1.z.string().optional(),
    usage: zod_1.z.number().int().optional(),
    usageLimit: zod_1.z.number().int().optional(),
    plan: zod_1.z.string().optional(),
    stripeId: zod_1.z.string().optional().nullable(),
    billingCycleStart: zod_1.z.number().int().optional().nullable(),
    region: zod_1.z.string().optional().nullable(),
    endpoint: zod_1.z.string().optional().nullable(),
    bucket: zod_1.z.string().optional().nullable(),
    useHost: zod_1.z.string().optional().nullable(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    invites: zod_1.z.lazy(() => exports.ProjectInviteCreateNestedManyWithoutProjectInputSchema).optional(),
    sentEmails: zod_1.z.lazy(() => exports.SentEmailCreateNestedManyWithoutProjectInputSchema).optional(),
    domains: zod_1.z.lazy(() => exports.DomainCreateNestedManyWithoutProjectInputSchema).optional(),
    links: zod_1.z.lazy(() => exports.LinkCreateNestedManyWithoutProjectInputSchema).optional(),
    tags: zod_1.z.lazy(() => exports.TagCreateNestedManyWithoutProjectInputSchema).optional(),
    site: zod_1.z.lazy(() => exports.SiteCreateNestedOneWithoutProjectInputSchema).optional()
}).strict();
exports.ProjectUncheckedCreateWithoutUsersInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    name: zod_1.z.string(),
    slug: zod_1.z.string(),
    logo: zod_1.z.string().optional().nullable(),
    password: zod_1.z.string().optional().nullable(),
    type: zod_1.z.string().optional(),
    usage: zod_1.z.number().int().optional(),
    usageLimit: zod_1.z.number().int().optional(),
    plan: zod_1.z.string().optional(),
    stripeId: zod_1.z.string().optional().nullable(),
    billingCycleStart: zod_1.z.number().int().optional().nullable(),
    region: zod_1.z.string().optional().nullable(),
    endpoint: zod_1.z.string().optional().nullable(),
    bucket: zod_1.z.string().optional().nullable(),
    useHost: zod_1.z.string().optional().nullable(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    invites: zod_1.z.lazy(() => exports.ProjectInviteUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
    sentEmails: zod_1.z.lazy(() => exports.SentEmailUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
    domains: zod_1.z.lazy(() => exports.DomainUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
    links: zod_1.z.lazy(() => exports.LinkUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
    tags: zod_1.z.lazy(() => exports.TagUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
    site: zod_1.z.lazy(() => exports.SiteUncheckedCreateNestedOneWithoutProjectInputSchema).optional()
}).strict();
exports.ProjectCreateOrConnectWithoutUsersInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.ProjectWhereUniqueInputSchema),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectCreateWithoutUsersInputSchema), zod_1.z.lazy(() => exports.ProjectUncheckedCreateWithoutUsersInputSchema)]),
}).strict();
exports.ProjectUpsertWithoutUsersInputSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUpdateWithoutUsersInputSchema), zod_1.z.lazy(() => exports.ProjectUncheckedUpdateWithoutUsersInputSchema)]),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectCreateWithoutUsersInputSchema), zod_1.z.lazy(() => exports.ProjectUncheckedCreateWithoutUsersInputSchema)]),
}).strict();
exports.ProjectUpdateWithoutUsersInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    slug: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    logo: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    type: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    usage: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    usageLimit: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    plan: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    stripeId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    billingCycleStart: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
    region: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    endpoint: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    bucket: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    useHost: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    invites: zod_1.z.lazy(() => exports.ProjectInviteUpdateManyWithoutProjectNestedInputSchema).optional(),
    sentEmails: zod_1.z.lazy(() => exports.SentEmailUpdateManyWithoutProjectNestedInputSchema).optional(),
    domains: zod_1.z.lazy(() => exports.DomainUpdateManyWithoutProjectNestedInputSchema).optional(),
    links: zod_1.z.lazy(() => exports.LinkUpdateManyWithoutProjectNestedInputSchema).optional(),
    tags: zod_1.z.lazy(() => exports.TagUpdateManyWithoutProjectNestedInputSchema).optional(),
    site: zod_1.z.lazy(() => exports.SiteUpdateOneWithoutProjectNestedInputSchema).optional()
}).strict();
exports.ProjectUncheckedUpdateWithoutUsersInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    slug: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    logo: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    type: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    usage: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    usageLimit: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    plan: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    stripeId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    billingCycleStart: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
    region: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    endpoint: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    bucket: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    useHost: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    invites: zod_1.z.lazy(() => exports.ProjectInviteUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
    sentEmails: zod_1.z.lazy(() => exports.SentEmailUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
    domains: zod_1.z.lazy(() => exports.DomainUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
    links: zod_1.z.lazy(() => exports.LinkUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
    tags: zod_1.z.lazy(() => exports.TagUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
    site: zod_1.z.lazy(() => exports.SiteUncheckedUpdateOneWithoutProjectNestedInputSchema).optional()
}).strict();
exports.ProjectCreateWithoutSentEmailsInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    name: zod_1.z.string(),
    slug: zod_1.z.string(),
    logo: zod_1.z.string().optional().nullable(),
    password: zod_1.z.string().optional().nullable(),
    type: zod_1.z.string().optional(),
    usage: zod_1.z.number().int().optional(),
    usageLimit: zod_1.z.number().int().optional(),
    plan: zod_1.z.string().optional(),
    stripeId: zod_1.z.string().optional().nullable(),
    billingCycleStart: zod_1.z.number().int().optional().nullable(),
    region: zod_1.z.string().optional().nullable(),
    endpoint: zod_1.z.string().optional().nullable(),
    bucket: zod_1.z.string().optional().nullable(),
    useHost: zod_1.z.string().optional().nullable(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    users: zod_1.z.lazy(() => exports.ProjectUsersCreateNestedManyWithoutProjectInputSchema).optional(),
    invites: zod_1.z.lazy(() => exports.ProjectInviteCreateNestedManyWithoutProjectInputSchema).optional(),
    domains: zod_1.z.lazy(() => exports.DomainCreateNestedManyWithoutProjectInputSchema).optional(),
    links: zod_1.z.lazy(() => exports.LinkCreateNestedManyWithoutProjectInputSchema).optional(),
    tags: zod_1.z.lazy(() => exports.TagCreateNestedManyWithoutProjectInputSchema).optional(),
    site: zod_1.z.lazy(() => exports.SiteCreateNestedOneWithoutProjectInputSchema).optional()
}).strict();
exports.ProjectUncheckedCreateWithoutSentEmailsInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    name: zod_1.z.string(),
    slug: zod_1.z.string(),
    logo: zod_1.z.string().optional().nullable(),
    password: zod_1.z.string().optional().nullable(),
    type: zod_1.z.string().optional(),
    usage: zod_1.z.number().int().optional(),
    usageLimit: zod_1.z.number().int().optional(),
    plan: zod_1.z.string().optional(),
    stripeId: zod_1.z.string().optional().nullable(),
    billingCycleStart: zod_1.z.number().int().optional().nullable(),
    region: zod_1.z.string().optional().nullable(),
    endpoint: zod_1.z.string().optional().nullable(),
    bucket: zod_1.z.string().optional().nullable(),
    useHost: zod_1.z.string().optional().nullable(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    users: zod_1.z.lazy(() => exports.ProjectUsersUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
    invites: zod_1.z.lazy(() => exports.ProjectInviteUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
    domains: zod_1.z.lazy(() => exports.DomainUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
    links: zod_1.z.lazy(() => exports.LinkUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
    tags: zod_1.z.lazy(() => exports.TagUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
    site: zod_1.z.lazy(() => exports.SiteUncheckedCreateNestedOneWithoutProjectInputSchema).optional()
}).strict();
exports.ProjectCreateOrConnectWithoutSentEmailsInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.ProjectWhereUniqueInputSchema),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectCreateWithoutSentEmailsInputSchema), zod_1.z.lazy(() => exports.ProjectUncheckedCreateWithoutSentEmailsInputSchema)]),
}).strict();
exports.ProjectUpsertWithoutSentEmailsInputSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUpdateWithoutSentEmailsInputSchema), zod_1.z.lazy(() => exports.ProjectUncheckedUpdateWithoutSentEmailsInputSchema)]),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectCreateWithoutSentEmailsInputSchema), zod_1.z.lazy(() => exports.ProjectUncheckedCreateWithoutSentEmailsInputSchema)]),
}).strict();
exports.ProjectUpdateWithoutSentEmailsInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    slug: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    logo: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    type: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    usage: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    usageLimit: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    plan: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    stripeId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    billingCycleStart: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
    region: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    endpoint: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    bucket: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    useHost: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    users: zod_1.z.lazy(() => exports.ProjectUsersUpdateManyWithoutProjectNestedInputSchema).optional(),
    invites: zod_1.z.lazy(() => exports.ProjectInviteUpdateManyWithoutProjectNestedInputSchema).optional(),
    domains: zod_1.z.lazy(() => exports.DomainUpdateManyWithoutProjectNestedInputSchema).optional(),
    links: zod_1.z.lazy(() => exports.LinkUpdateManyWithoutProjectNestedInputSchema).optional(),
    tags: zod_1.z.lazy(() => exports.TagUpdateManyWithoutProjectNestedInputSchema).optional(),
    site: zod_1.z.lazy(() => exports.SiteUpdateOneWithoutProjectNestedInputSchema).optional()
}).strict();
exports.ProjectUncheckedUpdateWithoutSentEmailsInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    slug: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    logo: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    type: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    usage: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    usageLimit: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    plan: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    stripeId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    billingCycleStart: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
    region: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    endpoint: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    bucket: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    useHost: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    users: zod_1.z.lazy(() => exports.ProjectUsersUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
    invites: zod_1.z.lazy(() => exports.ProjectInviteUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
    domains: zod_1.z.lazy(() => exports.DomainUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
    links: zod_1.z.lazy(() => exports.LinkUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
    tags: zod_1.z.lazy(() => exports.TagUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
    site: zod_1.z.lazy(() => exports.SiteUncheckedUpdateOneWithoutProjectNestedInputSchema).optional()
}).strict();
exports.ProjectCreateWithoutDomainsInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    name: zod_1.z.string(),
    slug: zod_1.z.string(),
    logo: zod_1.z.string().optional().nullable(),
    password: zod_1.z.string().optional().nullable(),
    type: zod_1.z.string().optional(),
    usage: zod_1.z.number().int().optional(),
    usageLimit: zod_1.z.number().int().optional(),
    plan: zod_1.z.string().optional(),
    stripeId: zod_1.z.string().optional().nullable(),
    billingCycleStart: zod_1.z.number().int().optional().nullable(),
    region: zod_1.z.string().optional().nullable(),
    endpoint: zod_1.z.string().optional().nullable(),
    bucket: zod_1.z.string().optional().nullable(),
    useHost: zod_1.z.string().optional().nullable(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    users: zod_1.z.lazy(() => exports.ProjectUsersCreateNestedManyWithoutProjectInputSchema).optional(),
    invites: zod_1.z.lazy(() => exports.ProjectInviteCreateNestedManyWithoutProjectInputSchema).optional(),
    sentEmails: zod_1.z.lazy(() => exports.SentEmailCreateNestedManyWithoutProjectInputSchema).optional(),
    links: zod_1.z.lazy(() => exports.LinkCreateNestedManyWithoutProjectInputSchema).optional(),
    tags: zod_1.z.lazy(() => exports.TagCreateNestedManyWithoutProjectInputSchema).optional(),
    site: zod_1.z.lazy(() => exports.SiteCreateNestedOneWithoutProjectInputSchema).optional()
}).strict();
exports.ProjectUncheckedCreateWithoutDomainsInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    name: zod_1.z.string(),
    slug: zod_1.z.string(),
    logo: zod_1.z.string().optional().nullable(),
    password: zod_1.z.string().optional().nullable(),
    type: zod_1.z.string().optional(),
    usage: zod_1.z.number().int().optional(),
    usageLimit: zod_1.z.number().int().optional(),
    plan: zod_1.z.string().optional(),
    stripeId: zod_1.z.string().optional().nullable(),
    billingCycleStart: zod_1.z.number().int().optional().nullable(),
    region: zod_1.z.string().optional().nullable(),
    endpoint: zod_1.z.string().optional().nullable(),
    bucket: zod_1.z.string().optional().nullable(),
    useHost: zod_1.z.string().optional().nullable(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    users: zod_1.z.lazy(() => exports.ProjectUsersUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
    invites: zod_1.z.lazy(() => exports.ProjectInviteUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
    sentEmails: zod_1.z.lazy(() => exports.SentEmailUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
    links: zod_1.z.lazy(() => exports.LinkUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
    tags: zod_1.z.lazy(() => exports.TagUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
    site: zod_1.z.lazy(() => exports.SiteUncheckedCreateNestedOneWithoutProjectInputSchema).optional()
}).strict();
exports.ProjectCreateOrConnectWithoutDomainsInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.ProjectWhereUniqueInputSchema),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectCreateWithoutDomainsInputSchema), zod_1.z.lazy(() => exports.ProjectUncheckedCreateWithoutDomainsInputSchema)]),
}).strict();
exports.LinkCreateWithoutProjectDomainInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    key: zod_1.z.string(),
    url: zod_1.z.string(),
    archived: zod_1.z.boolean().optional(),
    expiresAt: zod_1.z.date().optional().nullable(),
    password: zod_1.z.string().optional().nullable(),
    proxy: zod_1.z.boolean().optional(),
    title: zod_1.z.string().optional().nullable(),
    description: zod_1.z.string().optional().nullable(),
    image: zod_1.z.string().optional().nullable(),
    utm_source: zod_1.z.string().optional().nullable(),
    utm_medium: zod_1.z.string().optional().nullable(),
    utm_campaign: zod_1.z.string().optional().nullable(),
    utm_term: zod_1.z.string().optional().nullable(),
    utm_content: zod_1.z.string().optional().nullable(),
    rewrite: zod_1.z.boolean().optional(),
    ios: zod_1.z.string().optional().nullable(),
    android: zod_1.z.string().optional().nullable(),
    userId: zod_1.z.string().optional().nullable(),
    clicks: zod_1.z.number().int().optional(),
    publicStats: zod_1.z.boolean().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    project: zod_1.z.lazy(() => exports.ProjectCreateNestedOneWithoutLinksInputSchema).optional(),
    tag: zod_1.z.lazy(() => exports.TagCreateNestedOneWithoutLinksInputSchema).optional()
}).strict();
exports.LinkUncheckedCreateWithoutProjectDomainInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    key: zod_1.z.string(),
    url: zod_1.z.string(),
    archived: zod_1.z.boolean().optional(),
    expiresAt: zod_1.z.date().optional().nullable(),
    password: zod_1.z.string().optional().nullable(),
    proxy: zod_1.z.boolean().optional(),
    title: zod_1.z.string().optional().nullable(),
    description: zod_1.z.string().optional().nullable(),
    image: zod_1.z.string().optional().nullable(),
    utm_source: zod_1.z.string().optional().nullable(),
    utm_medium: zod_1.z.string().optional().nullable(),
    utm_campaign: zod_1.z.string().optional().nullable(),
    utm_term: zod_1.z.string().optional().nullable(),
    utm_content: zod_1.z.string().optional().nullable(),
    rewrite: zod_1.z.boolean().optional(),
    ios: zod_1.z.string().optional().nullable(),
    android: zod_1.z.string().optional().nullable(),
    userId: zod_1.z.string().optional().nullable(),
    projectId: zod_1.z.string().optional().nullable(),
    clicks: zod_1.z.number().int().optional(),
    publicStats: zod_1.z.boolean().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    tagId: zod_1.z.string().optional().nullable()
}).strict();
exports.LinkCreateOrConnectWithoutProjectDomainInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.LinkCreateWithoutProjectDomainInputSchema), zod_1.z.lazy(() => exports.LinkUncheckedCreateWithoutProjectDomainInputSchema)]),
}).strict();
exports.LinkCreateManyProjectDomainInputEnvelopeSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => exports.LinkCreateManyProjectDomainInputSchema), zod_1.z.lazy(() => exports.LinkCreateManyProjectDomainInputSchema).array()]),
    skipDuplicates: zod_1.z.boolean().optional()
}).strict();
exports.ProjectUpsertWithoutDomainsInputSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUpdateWithoutDomainsInputSchema), zod_1.z.lazy(() => exports.ProjectUncheckedUpdateWithoutDomainsInputSchema)]),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectCreateWithoutDomainsInputSchema), zod_1.z.lazy(() => exports.ProjectUncheckedCreateWithoutDomainsInputSchema)]),
}).strict();
exports.ProjectUpdateWithoutDomainsInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    slug: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    logo: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    type: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    usage: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    usageLimit: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    plan: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    stripeId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    billingCycleStart: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
    region: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    endpoint: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    bucket: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    useHost: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    users: zod_1.z.lazy(() => exports.ProjectUsersUpdateManyWithoutProjectNestedInputSchema).optional(),
    invites: zod_1.z.lazy(() => exports.ProjectInviteUpdateManyWithoutProjectNestedInputSchema).optional(),
    sentEmails: zod_1.z.lazy(() => exports.SentEmailUpdateManyWithoutProjectNestedInputSchema).optional(),
    links: zod_1.z.lazy(() => exports.LinkUpdateManyWithoutProjectNestedInputSchema).optional(),
    tags: zod_1.z.lazy(() => exports.TagUpdateManyWithoutProjectNestedInputSchema).optional(),
    site: zod_1.z.lazy(() => exports.SiteUpdateOneWithoutProjectNestedInputSchema).optional()
}).strict();
exports.ProjectUncheckedUpdateWithoutDomainsInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    slug: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    logo: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    type: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    usage: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    usageLimit: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    plan: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    stripeId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    billingCycleStart: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
    region: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    endpoint: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    bucket: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    useHost: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    users: zod_1.z.lazy(() => exports.ProjectUsersUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
    invites: zod_1.z.lazy(() => exports.ProjectInviteUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
    sentEmails: zod_1.z.lazy(() => exports.SentEmailUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
    links: zod_1.z.lazy(() => exports.LinkUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
    tags: zod_1.z.lazy(() => exports.TagUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
    site: zod_1.z.lazy(() => exports.SiteUncheckedUpdateOneWithoutProjectNestedInputSchema).optional()
}).strict();
exports.LinkUpsertWithWhereUniqueWithoutProjectDomainInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.LinkUpdateWithoutProjectDomainInputSchema), zod_1.z.lazy(() => exports.LinkUncheckedUpdateWithoutProjectDomainInputSchema)]),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.LinkCreateWithoutProjectDomainInputSchema), zod_1.z.lazy(() => exports.LinkUncheckedCreateWithoutProjectDomainInputSchema)]),
}).strict();
exports.LinkUpdateWithWhereUniqueWithoutProjectDomainInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema),
    data: zod_1.z.union([zod_1.z.lazy(() => exports.LinkUpdateWithoutProjectDomainInputSchema), zod_1.z.lazy(() => exports.LinkUncheckedUpdateWithoutProjectDomainInputSchema)]),
}).strict();
exports.LinkUpdateManyWithWhereWithoutProjectDomainInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.LinkScalarWhereInputSchema),
    data: zod_1.z.union([zod_1.z.lazy(() => exports.LinkUpdateManyMutationInputSchema), zod_1.z.lazy(() => exports.LinkUncheckedUpdateManyWithoutLinksInputSchema)]),
}).strict();
exports.ProjectCreateWithoutLinksInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    name: zod_1.z.string(),
    slug: zod_1.z.string(),
    logo: zod_1.z.string().optional().nullable(),
    password: zod_1.z.string().optional().nullable(),
    type: zod_1.z.string().optional(),
    usage: zod_1.z.number().int().optional(),
    usageLimit: zod_1.z.number().int().optional(),
    plan: zod_1.z.string().optional(),
    stripeId: zod_1.z.string().optional().nullable(),
    billingCycleStart: zod_1.z.number().int().optional().nullable(),
    region: zod_1.z.string().optional().nullable(),
    endpoint: zod_1.z.string().optional().nullable(),
    bucket: zod_1.z.string().optional().nullable(),
    useHost: zod_1.z.string().optional().nullable(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    users: zod_1.z.lazy(() => exports.ProjectUsersCreateNestedManyWithoutProjectInputSchema).optional(),
    invites: zod_1.z.lazy(() => exports.ProjectInviteCreateNestedManyWithoutProjectInputSchema).optional(),
    sentEmails: zod_1.z.lazy(() => exports.SentEmailCreateNestedManyWithoutProjectInputSchema).optional(),
    domains: zod_1.z.lazy(() => exports.DomainCreateNestedManyWithoutProjectInputSchema).optional(),
    tags: zod_1.z.lazy(() => exports.TagCreateNestedManyWithoutProjectInputSchema).optional(),
    site: zod_1.z.lazy(() => exports.SiteCreateNestedOneWithoutProjectInputSchema).optional()
}).strict();
exports.ProjectUncheckedCreateWithoutLinksInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    name: zod_1.z.string(),
    slug: zod_1.z.string(),
    logo: zod_1.z.string().optional().nullable(),
    password: zod_1.z.string().optional().nullable(),
    type: zod_1.z.string().optional(),
    usage: zod_1.z.number().int().optional(),
    usageLimit: zod_1.z.number().int().optional(),
    plan: zod_1.z.string().optional(),
    stripeId: zod_1.z.string().optional().nullable(),
    billingCycleStart: zod_1.z.number().int().optional().nullable(),
    region: zod_1.z.string().optional().nullable(),
    endpoint: zod_1.z.string().optional().nullable(),
    bucket: zod_1.z.string().optional().nullable(),
    useHost: zod_1.z.string().optional().nullable(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    users: zod_1.z.lazy(() => exports.ProjectUsersUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
    invites: zod_1.z.lazy(() => exports.ProjectInviteUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
    sentEmails: zod_1.z.lazy(() => exports.SentEmailUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
    domains: zod_1.z.lazy(() => exports.DomainUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
    tags: zod_1.z.lazy(() => exports.TagUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
    site: zod_1.z.lazy(() => exports.SiteUncheckedCreateNestedOneWithoutProjectInputSchema).optional()
}).strict();
exports.ProjectCreateOrConnectWithoutLinksInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.ProjectWhereUniqueInputSchema),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectCreateWithoutLinksInputSchema), zod_1.z.lazy(() => exports.ProjectUncheckedCreateWithoutLinksInputSchema)]),
}).strict();
exports.DomainCreateWithoutLinksInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    slug: zod_1.z.string(),
    verified: zod_1.z.boolean().optional(),
    target: zod_1.z.string().optional().nullable(),
    type: zod_1.z.string().optional(),
    description: zod_1.z.string().optional().nullable(),
    primary: zod_1.z.boolean().optional(),
    lastChecked: zod_1.z.date().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    project: zod_1.z.lazy(() => exports.ProjectCreateNestedOneWithoutDomainsInputSchema).optional()
}).strict();
exports.DomainUncheckedCreateWithoutLinksInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    slug: zod_1.z.string(),
    verified: zod_1.z.boolean().optional(),
    target: zod_1.z.string().optional().nullable(),
    type: zod_1.z.string().optional(),
    description: zod_1.z.string().optional().nullable(),
    projectId: zod_1.z.string().optional().nullable(),
    primary: zod_1.z.boolean().optional(),
    lastChecked: zod_1.z.date().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional()
}).strict();
exports.DomainCreateOrConnectWithoutLinksInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.DomainWhereUniqueInputSchema),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.DomainCreateWithoutLinksInputSchema), zod_1.z.lazy(() => exports.DomainUncheckedCreateWithoutLinksInputSchema)]),
}).strict();
exports.TagCreateWithoutLinksInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    name: zod_1.z.string(),
    color: zod_1.z.string().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    project: zod_1.z.lazy(() => exports.ProjectCreateNestedOneWithoutTagsInputSchema)
}).strict();
exports.TagUncheckedCreateWithoutLinksInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    name: zod_1.z.string(),
    color: zod_1.z.string().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    projectId: zod_1.z.string()
}).strict();
exports.TagCreateOrConnectWithoutLinksInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.TagWhereUniqueInputSchema),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.TagCreateWithoutLinksInputSchema), zod_1.z.lazy(() => exports.TagUncheckedCreateWithoutLinksInputSchema)]),
}).strict();
exports.ProjectUpsertWithoutLinksInputSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUpdateWithoutLinksInputSchema), zod_1.z.lazy(() => exports.ProjectUncheckedUpdateWithoutLinksInputSchema)]),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectCreateWithoutLinksInputSchema), zod_1.z.lazy(() => exports.ProjectUncheckedCreateWithoutLinksInputSchema)]),
}).strict();
exports.ProjectUpdateWithoutLinksInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    slug: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    logo: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    type: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    usage: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    usageLimit: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    plan: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    stripeId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    billingCycleStart: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
    region: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    endpoint: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    bucket: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    useHost: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    users: zod_1.z.lazy(() => exports.ProjectUsersUpdateManyWithoutProjectNestedInputSchema).optional(),
    invites: zod_1.z.lazy(() => exports.ProjectInviteUpdateManyWithoutProjectNestedInputSchema).optional(),
    sentEmails: zod_1.z.lazy(() => exports.SentEmailUpdateManyWithoutProjectNestedInputSchema).optional(),
    domains: zod_1.z.lazy(() => exports.DomainUpdateManyWithoutProjectNestedInputSchema).optional(),
    tags: zod_1.z.lazy(() => exports.TagUpdateManyWithoutProjectNestedInputSchema).optional(),
    site: zod_1.z.lazy(() => exports.SiteUpdateOneWithoutProjectNestedInputSchema).optional()
}).strict();
exports.ProjectUncheckedUpdateWithoutLinksInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    slug: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    logo: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    type: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    usage: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    usageLimit: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    plan: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    stripeId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    billingCycleStart: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
    region: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    endpoint: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    bucket: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    useHost: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    users: zod_1.z.lazy(() => exports.ProjectUsersUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
    invites: zod_1.z.lazy(() => exports.ProjectInviteUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
    sentEmails: zod_1.z.lazy(() => exports.SentEmailUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
    domains: zod_1.z.lazy(() => exports.DomainUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
    tags: zod_1.z.lazy(() => exports.TagUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
    site: zod_1.z.lazy(() => exports.SiteUncheckedUpdateOneWithoutProjectNestedInputSchema).optional()
}).strict();
exports.DomainUpsertWithoutLinksInputSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => exports.DomainUpdateWithoutLinksInputSchema), zod_1.z.lazy(() => exports.DomainUncheckedUpdateWithoutLinksInputSchema)]),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.DomainCreateWithoutLinksInputSchema), zod_1.z.lazy(() => exports.DomainUncheckedCreateWithoutLinksInputSchema)]),
}).strict();
exports.DomainUpdateWithoutLinksInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    slug: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    verified: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    target: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    type: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    description: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    primary: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    lastChecked: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    project: zod_1.z.lazy(() => exports.ProjectUpdateOneWithoutDomainsNestedInputSchema).optional()
}).strict();
exports.DomainUncheckedUpdateWithoutLinksInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    slug: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    verified: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    target: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    type: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    description: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    projectId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    primary: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    lastChecked: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.TagUpsertWithoutLinksInputSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => exports.TagUpdateWithoutLinksInputSchema), zod_1.z.lazy(() => exports.TagUncheckedUpdateWithoutLinksInputSchema)]),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.TagCreateWithoutLinksInputSchema), zod_1.z.lazy(() => exports.TagUncheckedCreateWithoutLinksInputSchema)]),
}).strict();
exports.TagUpdateWithoutLinksInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    color: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    project: zod_1.z.lazy(() => exports.ProjectUpdateOneRequiredWithoutTagsNestedInputSchema).optional()
}).strict();
exports.TagUncheckedUpdateWithoutLinksInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    color: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    projectId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.ProjectCreateWithoutTagsInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    name: zod_1.z.string(),
    slug: zod_1.z.string(),
    logo: zod_1.z.string().optional().nullable(),
    password: zod_1.z.string().optional().nullable(),
    type: zod_1.z.string().optional(),
    usage: zod_1.z.number().int().optional(),
    usageLimit: zod_1.z.number().int().optional(),
    plan: zod_1.z.string().optional(),
    stripeId: zod_1.z.string().optional().nullable(),
    billingCycleStart: zod_1.z.number().int().optional().nullable(),
    region: zod_1.z.string().optional().nullable(),
    endpoint: zod_1.z.string().optional().nullable(),
    bucket: zod_1.z.string().optional().nullable(),
    useHost: zod_1.z.string().optional().nullable(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    users: zod_1.z.lazy(() => exports.ProjectUsersCreateNestedManyWithoutProjectInputSchema).optional(),
    invites: zod_1.z.lazy(() => exports.ProjectInviteCreateNestedManyWithoutProjectInputSchema).optional(),
    sentEmails: zod_1.z.lazy(() => exports.SentEmailCreateNestedManyWithoutProjectInputSchema).optional(),
    domains: zod_1.z.lazy(() => exports.DomainCreateNestedManyWithoutProjectInputSchema).optional(),
    links: zod_1.z.lazy(() => exports.LinkCreateNestedManyWithoutProjectInputSchema).optional(),
    site: zod_1.z.lazy(() => exports.SiteCreateNestedOneWithoutProjectInputSchema).optional()
}).strict();
exports.ProjectUncheckedCreateWithoutTagsInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    name: zod_1.z.string(),
    slug: zod_1.z.string(),
    logo: zod_1.z.string().optional().nullable(),
    password: zod_1.z.string().optional().nullable(),
    type: zod_1.z.string().optional(),
    usage: zod_1.z.number().int().optional(),
    usageLimit: zod_1.z.number().int().optional(),
    plan: zod_1.z.string().optional(),
    stripeId: zod_1.z.string().optional().nullable(),
    billingCycleStart: zod_1.z.number().int().optional().nullable(),
    region: zod_1.z.string().optional().nullable(),
    endpoint: zod_1.z.string().optional().nullable(),
    bucket: zod_1.z.string().optional().nullable(),
    useHost: zod_1.z.string().optional().nullable(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    users: zod_1.z.lazy(() => exports.ProjectUsersUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
    invites: zod_1.z.lazy(() => exports.ProjectInviteUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
    sentEmails: zod_1.z.lazy(() => exports.SentEmailUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
    domains: zod_1.z.lazy(() => exports.DomainUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
    links: zod_1.z.lazy(() => exports.LinkUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
    site: zod_1.z.lazy(() => exports.SiteUncheckedCreateNestedOneWithoutProjectInputSchema).optional()
}).strict();
exports.ProjectCreateOrConnectWithoutTagsInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.ProjectWhereUniqueInputSchema),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectCreateWithoutTagsInputSchema), zod_1.z.lazy(() => exports.ProjectUncheckedCreateWithoutTagsInputSchema)]),
}).strict();
exports.LinkCreateWithoutTagInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    key: zod_1.z.string(),
    url: zod_1.z.string(),
    archived: zod_1.z.boolean().optional(),
    expiresAt: zod_1.z.date().optional().nullable(),
    password: zod_1.z.string().optional().nullable(),
    proxy: zod_1.z.boolean().optional(),
    title: zod_1.z.string().optional().nullable(),
    description: zod_1.z.string().optional().nullable(),
    image: zod_1.z.string().optional().nullable(),
    utm_source: zod_1.z.string().optional().nullable(),
    utm_medium: zod_1.z.string().optional().nullable(),
    utm_campaign: zod_1.z.string().optional().nullable(),
    utm_term: zod_1.z.string().optional().nullable(),
    utm_content: zod_1.z.string().optional().nullable(),
    rewrite: zod_1.z.boolean().optional(),
    ios: zod_1.z.string().optional().nullable(),
    android: zod_1.z.string().optional().nullable(),
    userId: zod_1.z.string().optional().nullable(),
    clicks: zod_1.z.number().int().optional(),
    publicStats: zod_1.z.boolean().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    project: zod_1.z.lazy(() => exports.ProjectCreateNestedOneWithoutLinksInputSchema).optional(),
    projectDomain: zod_1.z.lazy(() => exports.DomainCreateNestedOneWithoutLinksInputSchema).optional()
}).strict();
exports.LinkUncheckedCreateWithoutTagInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    domain: zod_1.z.string(),
    key: zod_1.z.string(),
    url: zod_1.z.string(),
    archived: zod_1.z.boolean().optional(),
    expiresAt: zod_1.z.date().optional().nullable(),
    password: zod_1.z.string().optional().nullable(),
    proxy: zod_1.z.boolean().optional(),
    title: zod_1.z.string().optional().nullable(),
    description: zod_1.z.string().optional().nullable(),
    image: zod_1.z.string().optional().nullable(),
    utm_source: zod_1.z.string().optional().nullable(),
    utm_medium: zod_1.z.string().optional().nullable(),
    utm_campaign: zod_1.z.string().optional().nullable(),
    utm_term: zod_1.z.string().optional().nullable(),
    utm_content: zod_1.z.string().optional().nullable(),
    rewrite: zod_1.z.boolean().optional(),
    ios: zod_1.z.string().optional().nullable(),
    android: zod_1.z.string().optional().nullable(),
    userId: zod_1.z.string().optional().nullable(),
    projectId: zod_1.z.string().optional().nullable(),
    clicks: zod_1.z.number().int().optional(),
    publicStats: zod_1.z.boolean().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional()
}).strict();
exports.LinkCreateOrConnectWithoutTagInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.LinkCreateWithoutTagInputSchema), zod_1.z.lazy(() => exports.LinkUncheckedCreateWithoutTagInputSchema)]),
}).strict();
exports.LinkCreateManyTagInputEnvelopeSchema = zod_1.z.object({
    data: zod_1.z.union([zod_1.z.lazy(() => exports.LinkCreateManyTagInputSchema), zod_1.z.lazy(() => exports.LinkCreateManyTagInputSchema).array()]),
    skipDuplicates: zod_1.z.boolean().optional()
}).strict();
exports.ProjectUpsertWithoutTagsInputSchema = zod_1.z.object({
    update: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectUpdateWithoutTagsInputSchema), zod_1.z.lazy(() => exports.ProjectUncheckedUpdateWithoutTagsInputSchema)]),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.ProjectCreateWithoutTagsInputSchema), zod_1.z.lazy(() => exports.ProjectUncheckedCreateWithoutTagsInputSchema)]),
}).strict();
exports.ProjectUpdateWithoutTagsInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    slug: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    logo: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    type: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    usage: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    usageLimit: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    plan: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    stripeId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    billingCycleStart: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
    region: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    endpoint: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    bucket: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    useHost: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    users: zod_1.z.lazy(() => exports.ProjectUsersUpdateManyWithoutProjectNestedInputSchema).optional(),
    invites: zod_1.z.lazy(() => exports.ProjectInviteUpdateManyWithoutProjectNestedInputSchema).optional(),
    sentEmails: zod_1.z.lazy(() => exports.SentEmailUpdateManyWithoutProjectNestedInputSchema).optional(),
    domains: zod_1.z.lazy(() => exports.DomainUpdateManyWithoutProjectNestedInputSchema).optional(),
    links: zod_1.z.lazy(() => exports.LinkUpdateManyWithoutProjectNestedInputSchema).optional(),
    site: zod_1.z.lazy(() => exports.SiteUpdateOneWithoutProjectNestedInputSchema).optional()
}).strict();
exports.ProjectUncheckedUpdateWithoutTagsInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    slug: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    logo: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    type: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    usage: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    usageLimit: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    plan: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    stripeId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    billingCycleStart: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
    region: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    endpoint: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    bucket: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    useHost: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    users: zod_1.z.lazy(() => exports.ProjectUsersUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
    invites: zod_1.z.lazy(() => exports.ProjectInviteUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
    sentEmails: zod_1.z.lazy(() => exports.SentEmailUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
    domains: zod_1.z.lazy(() => exports.DomainUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
    links: zod_1.z.lazy(() => exports.LinkUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
    site: zod_1.z.lazy(() => exports.SiteUncheckedUpdateOneWithoutProjectNestedInputSchema).optional()
}).strict();
exports.LinkUpsertWithWhereUniqueWithoutTagInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema),
    update: zod_1.z.union([zod_1.z.lazy(() => exports.LinkUpdateWithoutTagInputSchema), zod_1.z.lazy(() => exports.LinkUncheckedUpdateWithoutTagInputSchema)]),
    create: zod_1.z.union([zod_1.z.lazy(() => exports.LinkCreateWithoutTagInputSchema), zod_1.z.lazy(() => exports.LinkUncheckedCreateWithoutTagInputSchema)]),
}).strict();
exports.LinkUpdateWithWhereUniqueWithoutTagInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.LinkWhereUniqueInputSchema),
    data: zod_1.z.union([zod_1.z.lazy(() => exports.LinkUpdateWithoutTagInputSchema), zod_1.z.lazy(() => exports.LinkUncheckedUpdateWithoutTagInputSchema)]),
}).strict();
exports.LinkUpdateManyWithWhereWithoutTagInputSchema = zod_1.z.object({
    where: zod_1.z.lazy(() => exports.LinkScalarWhereInputSchema),
    data: zod_1.z.union([zod_1.z.lazy(() => exports.LinkUpdateManyMutationInputSchema), zod_1.z.lazy(() => exports.LinkUncheckedUpdateManyWithoutLinksInputSchema)]),
}).strict();
exports.SiteCreateManySiteTemplateInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    name: zod_1.z.string(),
    cosUrl: zod_1.z.string().optional(),
    customerId: zod_1.z.number().int(),
    slotData: zod_1.z.union([zod_1.z.lazy(() => exports.JsonNullValueInputSchema), exports.InputJsonValue]).optional(),
    projectId: zod_1.z.string().optional().nullable()
}).strict();
exports.SiteUpdateWithoutSiteTemplateInputSchema = zod_1.z.object({
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    cosUrl: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    slotData: zod_1.z.union([zod_1.z.lazy(() => exports.JsonNullValueInputSchema), exports.InputJsonValue]).optional(),
    customer: zod_1.z.lazy(() => exports.CustomerUpdateOneRequiredWithoutSiteNestedInputSchema).optional(),
    project: zod_1.z.lazy(() => exports.ProjectUpdateOneWithoutSiteNestedInputSchema).optional()
}).strict();
exports.SiteUncheckedUpdateWithoutSiteTemplateInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    cosUrl: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    customerId: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    slotData: zod_1.z.union([zod_1.z.lazy(() => exports.JsonNullValueInputSchema), exports.InputJsonValue]).optional(),
    projectId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();
exports.SiteUncheckedUpdateManyWithoutSiteInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    cosUrl: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    customerId: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    slotData: zod_1.z.union([zod_1.z.lazy(() => exports.JsonNullValueInputSchema), exports.InputJsonValue]).optional(),
    projectId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();
exports.SiteCreateManyCustomerInputSchema = zod_1.z.object({
    id: zod_1.z.number().int().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
    name: zod_1.z.string(),
    cosUrl: zod_1.z.string().optional(),
    siteTemplateId: zod_1.z.number().int(),
    slotData: zod_1.z.union([zod_1.z.lazy(() => exports.JsonNullValueInputSchema), exports.InputJsonValue]).optional(),
    projectId: zod_1.z.string().optional().nullable()
}).strict();
exports.SiteUpdateWithoutCustomerInputSchema = zod_1.z.object({
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    cosUrl: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    slotData: zod_1.z.union([zod_1.z.lazy(() => exports.JsonNullValueInputSchema), exports.InputJsonValue]).optional(),
    siteTemplate: zod_1.z.lazy(() => exports.SiteTemplateUpdateOneRequiredWithoutSiteNestedInputSchema).optional(),
    project: zod_1.z.lazy(() => exports.ProjectUpdateOneWithoutSiteNestedInputSchema).optional()
}).strict();
exports.SiteUncheckedUpdateWithoutCustomerInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    isDeleted: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    cosUrl: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    siteTemplateId: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    slotData: zod_1.z.union([zod_1.z.lazy(() => exports.JsonNullValueInputSchema), exports.InputJsonValue]).optional(),
    projectId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();
exports.AccountCreateManyUserInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    type: zod_1.z.string(),
    provider: zod_1.z.string(),
    providerAccountId: zod_1.z.string(),
    refresh_token: zod_1.z.string().optional().nullable(),
    refresh_token_expires_in: zod_1.z.number().int().optional().nullable(),
    access_token: zod_1.z.string().optional().nullable(),
    expires_at: zod_1.z.number().int().optional().nullable(),
    token_type: zod_1.z.string().optional().nullable(),
    scope: zod_1.z.string().optional().nullable(),
    id_token: zod_1.z.string().optional().nullable(),
    session_state: zod_1.z.string().optional().nullable()
}).strict();
exports.SessionCreateManyUserInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    sessionToken: zod_1.z.string(),
    expires: zod_1.z.date()
}).strict();
exports.AccountUpdateWithoutUserInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    type: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    provider: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    providerAccountId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    refresh_token: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    refresh_token_expires_in: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
    access_token: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    expires_at: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
    token_type: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    scope: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    id_token: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    session_state: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();
exports.AccountUncheckedUpdateWithoutUserInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    type: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    provider: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    providerAccountId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    refresh_token: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    refresh_token_expires_in: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
    access_token: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    expires_at: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
    token_type: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    scope: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    id_token: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    session_state: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();
exports.AccountUncheckedUpdateManyWithoutAccountsInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    type: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    provider: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    providerAccountId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    refresh_token: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    refresh_token_expires_in: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
    access_token: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    expires_at: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
    token_type: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    scope: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    id_token: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    session_state: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();
exports.SessionUpdateWithoutUserInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    sessionToken: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    expires: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.SessionUncheckedUpdateWithoutUserInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    sessionToken: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    expires: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.SessionUncheckedUpdateManyWithoutSessionsInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    sessionToken: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    expires: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.ProjectUsersCreateManyProjectInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    role: zod_1.z.lazy(() => exports.RoleSchema).optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    userId: zod_1.z.string().optional().nullable()
}).strict();
exports.ProjectInviteCreateManyProjectInputSchema = zod_1.z.object({
    email: zod_1.z.string(),
    expires: zod_1.z.date(),
    createdAt: zod_1.z.date().optional()
}).strict();
exports.SentEmailCreateManyProjectInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    type: zod_1.z.lazy(() => exports.EmailTypeSchema),
    createdAt: zod_1.z.date().optional()
}).strict();
exports.DomainCreateManyProjectInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    slug: zod_1.z.string(),
    verified: zod_1.z.boolean().optional(),
    target: zod_1.z.string().optional().nullable(),
    type: zod_1.z.string().optional(),
    description: zod_1.z.string().optional().nullable(),
    primary: zod_1.z.boolean().optional(),
    lastChecked: zod_1.z.date().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional()
}).strict();
exports.LinkCreateManyProjectInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    domain: zod_1.z.string(),
    key: zod_1.z.string(),
    url: zod_1.z.string(),
    archived: zod_1.z.boolean().optional(),
    expiresAt: zod_1.z.date().optional().nullable(),
    password: zod_1.z.string().optional().nullable(),
    proxy: zod_1.z.boolean().optional(),
    title: zod_1.z.string().optional().nullable(),
    description: zod_1.z.string().optional().nullable(),
    image: zod_1.z.string().optional().nullable(),
    utm_source: zod_1.z.string().optional().nullable(),
    utm_medium: zod_1.z.string().optional().nullable(),
    utm_campaign: zod_1.z.string().optional().nullable(),
    utm_term: zod_1.z.string().optional().nullable(),
    utm_content: zod_1.z.string().optional().nullable(),
    rewrite: zod_1.z.boolean().optional(),
    ios: zod_1.z.string().optional().nullable(),
    android: zod_1.z.string().optional().nullable(),
    userId: zod_1.z.string().optional().nullable(),
    clicks: zod_1.z.number().int().optional(),
    publicStats: zod_1.z.boolean().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    tagId: zod_1.z.string().optional().nullable()
}).strict();
exports.TagCreateManyProjectInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    name: zod_1.z.string(),
    color: zod_1.z.string().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional()
}).strict();
exports.ProjectUsersUpdateWithoutProjectInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    role: zod_1.z.union([zod_1.z.lazy(() => exports.RoleSchema), zod_1.z.lazy(() => exports.EnumRoleFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    userId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();
exports.ProjectUsersUncheckedUpdateWithoutProjectInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    role: zod_1.z.union([zod_1.z.lazy(() => exports.RoleSchema), zod_1.z.lazy(() => exports.EnumRoleFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    userId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();
exports.ProjectUsersUncheckedUpdateManyWithoutUsersInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    role: zod_1.z.union([zod_1.z.lazy(() => exports.RoleSchema), zod_1.z.lazy(() => exports.EnumRoleFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    userId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();
exports.ProjectInviteUpdateWithoutProjectInputSchema = zod_1.z.object({
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    expires: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.ProjectInviteUncheckedUpdateWithoutProjectInputSchema = zod_1.z.object({
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    expires: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.ProjectInviteUncheckedUpdateManyWithoutInvitesInputSchema = zod_1.z.object({
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    expires: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.SentEmailUpdateWithoutProjectInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    type: zod_1.z.union([zod_1.z.lazy(() => exports.EmailTypeSchema), zod_1.z.lazy(() => exports.EnumEmailTypeFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.SentEmailUncheckedUpdateWithoutProjectInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    type: zod_1.z.union([zod_1.z.lazy(() => exports.EmailTypeSchema), zod_1.z.lazy(() => exports.EnumEmailTypeFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.SentEmailUncheckedUpdateManyWithoutSentEmailsInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    type: zod_1.z.union([zod_1.z.lazy(() => exports.EmailTypeSchema), zod_1.z.lazy(() => exports.EnumEmailTypeFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.DomainUpdateWithoutProjectInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    slug: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    verified: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    target: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    type: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    description: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    primary: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    lastChecked: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    links: zod_1.z.lazy(() => exports.LinkUpdateManyWithoutProjectDomainNestedInputSchema).optional()
}).strict();
exports.DomainUncheckedUpdateWithoutProjectInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    slug: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    verified: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    target: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    type: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    description: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    primary: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    lastChecked: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    links: zod_1.z.lazy(() => exports.LinkUncheckedUpdateManyWithoutProjectDomainNestedInputSchema).optional()
}).strict();
exports.DomainUncheckedUpdateManyWithoutDomainsInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    slug: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    verified: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    target: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    type: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    description: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    primary: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    lastChecked: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.LinkUpdateWithoutProjectInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    key: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    url: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    archived: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    expiresAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    proxy: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    title: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    description: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    image: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_source: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_medium: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_campaign: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_term: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_content: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    rewrite: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    ios: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    android: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    userId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    clicks: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    publicStats: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    projectDomain: zod_1.z.lazy(() => exports.DomainUpdateOneWithoutLinksNestedInputSchema).optional(),
    tag: zod_1.z.lazy(() => exports.TagUpdateOneWithoutLinksNestedInputSchema).optional()
}).strict();
exports.LinkUncheckedUpdateWithoutProjectInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    domain: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    key: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    url: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    archived: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    expiresAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    proxy: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    title: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    description: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    image: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_source: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_medium: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_campaign: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_term: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_content: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    rewrite: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    ios: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    android: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    userId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    clicks: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    publicStats: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    tagId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();
exports.LinkUncheckedUpdateManyWithoutLinksInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    domain: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    key: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    url: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    archived: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    expiresAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    proxy: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    title: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    description: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    image: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_source: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_medium: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_campaign: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_term: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_content: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    rewrite: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    ios: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    android: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    userId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    clicks: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    publicStats: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    tagId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();
exports.TagUpdateWithoutProjectInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    color: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    links: zod_1.z.lazy(() => exports.LinkUpdateManyWithoutTagNestedInputSchema).optional()
}).strict();
exports.TagUncheckedUpdateWithoutProjectInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    color: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    links: zod_1.z.lazy(() => exports.LinkUncheckedUpdateManyWithoutTagNestedInputSchema).optional()
}).strict();
exports.TagUncheckedUpdateManyWithoutTagsInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    color: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
exports.LinkCreateManyProjectDomainInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    key: zod_1.z.string(),
    url: zod_1.z.string(),
    archived: zod_1.z.boolean().optional(),
    expiresAt: zod_1.z.date().optional().nullable(),
    password: zod_1.z.string().optional().nullable(),
    proxy: zod_1.z.boolean().optional(),
    title: zod_1.z.string().optional().nullable(),
    description: zod_1.z.string().optional().nullable(),
    image: zod_1.z.string().optional().nullable(),
    utm_source: zod_1.z.string().optional().nullable(),
    utm_medium: zod_1.z.string().optional().nullable(),
    utm_campaign: zod_1.z.string().optional().nullable(),
    utm_term: zod_1.z.string().optional().nullable(),
    utm_content: zod_1.z.string().optional().nullable(),
    rewrite: zod_1.z.boolean().optional(),
    ios: zod_1.z.string().optional().nullable(),
    android: zod_1.z.string().optional().nullable(),
    userId: zod_1.z.string().optional().nullable(),
    projectId: zod_1.z.string().optional().nullable(),
    clicks: zod_1.z.number().int().optional(),
    publicStats: zod_1.z.boolean().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    tagId: zod_1.z.string().optional().nullable()
}).strict();
exports.LinkUpdateWithoutProjectDomainInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    key: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    url: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    archived: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    expiresAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    proxy: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    title: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    description: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    image: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_source: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_medium: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_campaign: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_term: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_content: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    rewrite: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    ios: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    android: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    userId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    clicks: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    publicStats: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    project: zod_1.z.lazy(() => exports.ProjectUpdateOneWithoutLinksNestedInputSchema).optional(),
    tag: zod_1.z.lazy(() => exports.TagUpdateOneWithoutLinksNestedInputSchema).optional()
}).strict();
exports.LinkUncheckedUpdateWithoutProjectDomainInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    key: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    url: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    archived: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    expiresAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    proxy: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    title: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    description: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    image: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_source: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_medium: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_campaign: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_term: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_content: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    rewrite: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    ios: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    android: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    userId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    projectId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    clicks: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    publicStats: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    tagId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
}).strict();
exports.LinkCreateManyTagInputSchema = zod_1.z.object({
    id: zod_1.z.string().cuid().optional(),
    domain: zod_1.z.string(),
    key: zod_1.z.string(),
    url: zod_1.z.string(),
    archived: zod_1.z.boolean().optional(),
    expiresAt: zod_1.z.date().optional().nullable(),
    password: zod_1.z.string().optional().nullable(),
    proxy: zod_1.z.boolean().optional(),
    title: zod_1.z.string().optional().nullable(),
    description: zod_1.z.string().optional().nullable(),
    image: zod_1.z.string().optional().nullable(),
    utm_source: zod_1.z.string().optional().nullable(),
    utm_medium: zod_1.z.string().optional().nullable(),
    utm_campaign: zod_1.z.string().optional().nullable(),
    utm_term: zod_1.z.string().optional().nullable(),
    utm_content: zod_1.z.string().optional().nullable(),
    rewrite: zod_1.z.boolean().optional(),
    ios: zod_1.z.string().optional().nullable(),
    android: zod_1.z.string().optional().nullable(),
    userId: zod_1.z.string().optional().nullable(),
    projectId: zod_1.z.string().optional().nullable(),
    clicks: zod_1.z.number().int().optional(),
    publicStats: zod_1.z.boolean().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional()
}).strict();
exports.LinkUpdateWithoutTagInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    key: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    url: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    archived: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    expiresAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    proxy: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    title: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    description: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    image: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_source: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_medium: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_campaign: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_term: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_content: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    rewrite: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    ios: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    android: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    userId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    clicks: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    publicStats: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    project: zod_1.z.lazy(() => exports.ProjectUpdateOneWithoutLinksNestedInputSchema).optional(),
    projectDomain: zod_1.z.lazy(() => exports.DomainUpdateOneWithoutLinksNestedInputSchema).optional()
}).strict();
exports.LinkUncheckedUpdateWithoutTagInputSchema = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string().cuid(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    domain: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    key: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    url: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.StringFieldUpdateOperationsInputSchema)]).optional(),
    archived: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    expiresAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.NullableDateTimeFieldUpdateOperationsInputSchema)]).optional().nullable(),
    password: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    proxy: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    title: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    description: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    image: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_source: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_medium: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_campaign: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_term: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    utm_content: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    rewrite: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    ios: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    android: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    userId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    projectId: zod_1.z.union([zod_1.z.string(), zod_1.z.lazy(() => exports.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    clicks: zod_1.z.union([zod_1.z.number().int(), zod_1.z.lazy(() => exports.IntFieldUpdateOperationsInputSchema)]).optional(),
    publicStats: zod_1.z.union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.BoolFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: zod_1.z.union([zod_1.z.date(), zod_1.z.lazy(() => exports.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
/////////////////////////////////////////
// ARGS
/////////////////////////////////////////
exports.AuditsFindFirstArgsSchema = zod_1.z.object({
    select: exports.AuditsSelectSchema.optional(),
    where: exports.AuditsWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.AuditsOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.AuditsOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.AuditsWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.AuditsScalarFieldEnumSchema, exports.AuditsScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.AuditsFindFirstOrThrowArgsSchema = zod_1.z.object({
    select: exports.AuditsSelectSchema.optional(),
    where: exports.AuditsWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.AuditsOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.AuditsOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.AuditsWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.AuditsScalarFieldEnumSchema, exports.AuditsScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.AuditsFindManyArgsSchema = zod_1.z.object({
    select: exports.AuditsSelectSchema.optional(),
    where: exports.AuditsWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.AuditsOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.AuditsOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.AuditsWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.AuditsScalarFieldEnumSchema, exports.AuditsScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.AuditsAggregateArgsSchema = zod_1.z.object({
    where: exports.AuditsWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.AuditsOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.AuditsOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.AuditsWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.AuditsGroupByArgsSchema = zod_1.z.object({
    where: exports.AuditsWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.AuditsOrderByWithAggregationInputSchema.array(), exports.AuditsOrderByWithAggregationInputSchema]).optional(),
    by: exports.AuditsScalarFieldEnumSchema.array(),
    having: exports.AuditsScalarWhereWithAggregatesInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.AuditsFindUniqueArgsSchema = zod_1.z.object({
    select: exports.AuditsSelectSchema.optional(),
    where: exports.AuditsWhereUniqueInputSchema,
}).strict();
exports.AuditsFindUniqueOrThrowArgsSchema = zod_1.z.object({
    select: exports.AuditsSelectSchema.optional(),
    where: exports.AuditsWhereUniqueInputSchema,
}).strict();
exports.SiteTemplateFindFirstArgsSchema = zod_1.z.object({
    select: exports.SiteTemplateSelectSchema.optional(),
    include: exports.SiteTemplateIncludeSchema.optional(),
    where: exports.SiteTemplateWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.SiteTemplateOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.SiteTemplateOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.SiteTemplateWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.SiteTemplateScalarFieldEnumSchema, exports.SiteTemplateScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.SiteTemplateFindFirstOrThrowArgsSchema = zod_1.z.object({
    select: exports.SiteTemplateSelectSchema.optional(),
    include: exports.SiteTemplateIncludeSchema.optional(),
    where: exports.SiteTemplateWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.SiteTemplateOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.SiteTemplateOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.SiteTemplateWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.SiteTemplateScalarFieldEnumSchema, exports.SiteTemplateScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.SiteTemplateFindManyArgsSchema = zod_1.z.object({
    select: exports.SiteTemplateSelectSchema.optional(),
    include: exports.SiteTemplateIncludeSchema.optional(),
    where: exports.SiteTemplateWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.SiteTemplateOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.SiteTemplateOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.SiteTemplateWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.SiteTemplateScalarFieldEnumSchema, exports.SiteTemplateScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.SiteTemplateAggregateArgsSchema = zod_1.z.object({
    where: exports.SiteTemplateWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.SiteTemplateOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.SiteTemplateOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.SiteTemplateWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.SiteTemplateGroupByArgsSchema = zod_1.z.object({
    where: exports.SiteTemplateWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.SiteTemplateOrderByWithAggregationInputSchema.array(), exports.SiteTemplateOrderByWithAggregationInputSchema]).optional(),
    by: exports.SiteTemplateScalarFieldEnumSchema.array(),
    having: exports.SiteTemplateScalarWhereWithAggregatesInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.SiteTemplateFindUniqueArgsSchema = zod_1.z.object({
    select: exports.SiteTemplateSelectSchema.optional(),
    include: exports.SiteTemplateIncludeSchema.optional(),
    where: exports.SiteTemplateWhereUniqueInputSchema,
}).strict();
exports.SiteTemplateFindUniqueOrThrowArgsSchema = zod_1.z.object({
    select: exports.SiteTemplateSelectSchema.optional(),
    include: exports.SiteTemplateIncludeSchema.optional(),
    where: exports.SiteTemplateWhereUniqueInputSchema,
}).strict();
exports.SiteTemplateDataDefFindFirstArgsSchema = zod_1.z.object({
    select: exports.SiteTemplateDataDefSelectSchema.optional(),
    include: exports.SiteTemplateDataDefIncludeSchema.optional(),
    where: exports.SiteTemplateDataDefWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.SiteTemplateDataDefOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.SiteTemplateDataDefOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.SiteTemplateDataDefWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.SiteTemplateDataDefScalarFieldEnumSchema, exports.SiteTemplateDataDefScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.SiteTemplateDataDefFindFirstOrThrowArgsSchema = zod_1.z.object({
    select: exports.SiteTemplateDataDefSelectSchema.optional(),
    include: exports.SiteTemplateDataDefIncludeSchema.optional(),
    where: exports.SiteTemplateDataDefWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.SiteTemplateDataDefOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.SiteTemplateDataDefOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.SiteTemplateDataDefWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.SiteTemplateDataDefScalarFieldEnumSchema, exports.SiteTemplateDataDefScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.SiteTemplateDataDefFindManyArgsSchema = zod_1.z.object({
    select: exports.SiteTemplateDataDefSelectSchema.optional(),
    include: exports.SiteTemplateDataDefIncludeSchema.optional(),
    where: exports.SiteTemplateDataDefWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.SiteTemplateDataDefOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.SiteTemplateDataDefOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.SiteTemplateDataDefWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.SiteTemplateDataDefScalarFieldEnumSchema, exports.SiteTemplateDataDefScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.SiteTemplateDataDefAggregateArgsSchema = zod_1.z.object({
    where: exports.SiteTemplateDataDefWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.SiteTemplateDataDefOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.SiteTemplateDataDefOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.SiteTemplateDataDefWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.SiteTemplateDataDefGroupByArgsSchema = zod_1.z.object({
    where: exports.SiteTemplateDataDefWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.SiteTemplateDataDefOrderByWithAggregationInputSchema.array(), exports.SiteTemplateDataDefOrderByWithAggregationInputSchema]).optional(),
    by: exports.SiteTemplateDataDefScalarFieldEnumSchema.array(),
    having: exports.SiteTemplateDataDefScalarWhereWithAggregatesInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.SiteTemplateDataDefFindUniqueArgsSchema = zod_1.z.object({
    select: exports.SiteTemplateDataDefSelectSchema.optional(),
    include: exports.SiteTemplateDataDefIncludeSchema.optional(),
    where: exports.SiteTemplateDataDefWhereUniqueInputSchema,
}).strict();
exports.SiteTemplateDataDefFindUniqueOrThrowArgsSchema = zod_1.z.object({
    select: exports.SiteTemplateDataDefSelectSchema.optional(),
    include: exports.SiteTemplateDataDefIncludeSchema.optional(),
    where: exports.SiteTemplateDataDefWhereUniqueInputSchema,
}).strict();
exports.CustomerFindFirstArgsSchema = zod_1.z.object({
    select: exports.CustomerSelectSchema.optional(),
    include: exports.CustomerIncludeSchema.optional(),
    where: exports.CustomerWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.CustomerOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.CustomerOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.CustomerWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.CustomerScalarFieldEnumSchema, exports.CustomerScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.CustomerFindFirstOrThrowArgsSchema = zod_1.z.object({
    select: exports.CustomerSelectSchema.optional(),
    include: exports.CustomerIncludeSchema.optional(),
    where: exports.CustomerWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.CustomerOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.CustomerOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.CustomerWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.CustomerScalarFieldEnumSchema, exports.CustomerScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.CustomerFindManyArgsSchema = zod_1.z.object({
    select: exports.CustomerSelectSchema.optional(),
    include: exports.CustomerIncludeSchema.optional(),
    where: exports.CustomerWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.CustomerOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.CustomerOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.CustomerWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.CustomerScalarFieldEnumSchema, exports.CustomerScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.CustomerAggregateArgsSchema = zod_1.z.object({
    where: exports.CustomerWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.CustomerOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.CustomerOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.CustomerWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.CustomerGroupByArgsSchema = zod_1.z.object({
    where: exports.CustomerWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.CustomerOrderByWithAggregationInputSchema.array(), exports.CustomerOrderByWithAggregationInputSchema]).optional(),
    by: exports.CustomerScalarFieldEnumSchema.array(),
    having: exports.CustomerScalarWhereWithAggregatesInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.CustomerFindUniqueArgsSchema = zod_1.z.object({
    select: exports.CustomerSelectSchema.optional(),
    include: exports.CustomerIncludeSchema.optional(),
    where: exports.CustomerWhereUniqueInputSchema,
}).strict();
exports.CustomerFindUniqueOrThrowArgsSchema = zod_1.z.object({
    select: exports.CustomerSelectSchema.optional(),
    include: exports.CustomerIncludeSchema.optional(),
    where: exports.CustomerWhereUniqueInputSchema,
}).strict();
exports.SiteFindFirstArgsSchema = zod_1.z.object({
    select: exports.SiteSelectSchema.optional(),
    include: exports.SiteIncludeSchema.optional(),
    where: exports.SiteWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.SiteOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.SiteOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.SiteWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.SiteScalarFieldEnumSchema, exports.SiteScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.SiteFindFirstOrThrowArgsSchema = zod_1.z.object({
    select: exports.SiteSelectSchema.optional(),
    include: exports.SiteIncludeSchema.optional(),
    where: exports.SiteWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.SiteOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.SiteOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.SiteWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.SiteScalarFieldEnumSchema, exports.SiteScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.SiteFindManyArgsSchema = zod_1.z.object({
    select: exports.SiteSelectSchema.optional(),
    include: exports.SiteIncludeSchema.optional(),
    where: exports.SiteWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.SiteOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.SiteOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.SiteWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.SiteScalarFieldEnumSchema, exports.SiteScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.SiteAggregateArgsSchema = zod_1.z.object({
    where: exports.SiteWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.SiteOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.SiteOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.SiteWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.SiteGroupByArgsSchema = zod_1.z.object({
    where: exports.SiteWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.SiteOrderByWithAggregationInputSchema.array(), exports.SiteOrderByWithAggregationInputSchema]).optional(),
    by: exports.SiteScalarFieldEnumSchema.array(),
    having: exports.SiteScalarWhereWithAggregatesInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.SiteFindUniqueArgsSchema = zod_1.z.object({
    select: exports.SiteSelectSchema.optional(),
    include: exports.SiteIncludeSchema.optional(),
    where: exports.SiteWhereUniqueInputSchema,
}).strict();
exports.SiteFindUniqueOrThrowArgsSchema = zod_1.z.object({
    select: exports.SiteSelectSchema.optional(),
    include: exports.SiteIncludeSchema.optional(),
    where: exports.SiteWhereUniqueInputSchema,
}).strict();
exports.UserFindFirstArgsSchema = zod_1.z.object({
    select: exports.UserSelectSchema.optional(),
    include: exports.UserIncludeSchema.optional(),
    where: exports.UserWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.UserOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.UserOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.UserWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.UserScalarFieldEnumSchema, exports.UserScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.UserFindFirstOrThrowArgsSchema = zod_1.z.object({
    select: exports.UserSelectSchema.optional(),
    include: exports.UserIncludeSchema.optional(),
    where: exports.UserWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.UserOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.UserOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.UserWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.UserScalarFieldEnumSchema, exports.UserScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.UserFindManyArgsSchema = zod_1.z.object({
    select: exports.UserSelectSchema.optional(),
    include: exports.UserIncludeSchema.optional(),
    where: exports.UserWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.UserOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.UserOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.UserWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.UserScalarFieldEnumSchema, exports.UserScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.UserAggregateArgsSchema = zod_1.z.object({
    where: exports.UserWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.UserOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.UserOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.UserWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.UserGroupByArgsSchema = zod_1.z.object({
    where: exports.UserWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.UserOrderByWithAggregationInputSchema.array(), exports.UserOrderByWithAggregationInputSchema]).optional(),
    by: exports.UserScalarFieldEnumSchema.array(),
    having: exports.UserScalarWhereWithAggregatesInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.UserFindUniqueArgsSchema = zod_1.z.object({
    select: exports.UserSelectSchema.optional(),
    include: exports.UserIncludeSchema.optional(),
    where: exports.UserWhereUniqueInputSchema,
}).strict();
exports.UserFindUniqueOrThrowArgsSchema = zod_1.z.object({
    select: exports.UserSelectSchema.optional(),
    include: exports.UserIncludeSchema.optional(),
    where: exports.UserWhereUniqueInputSchema,
}).strict();
exports.AccountFindFirstArgsSchema = zod_1.z.object({
    select: exports.AccountSelectSchema.optional(),
    include: exports.AccountIncludeSchema.optional(),
    where: exports.AccountWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.AccountOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.AccountOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.AccountWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.AccountScalarFieldEnumSchema, exports.AccountScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.AccountFindFirstOrThrowArgsSchema = zod_1.z.object({
    select: exports.AccountSelectSchema.optional(),
    include: exports.AccountIncludeSchema.optional(),
    where: exports.AccountWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.AccountOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.AccountOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.AccountWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.AccountScalarFieldEnumSchema, exports.AccountScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.AccountFindManyArgsSchema = zod_1.z.object({
    select: exports.AccountSelectSchema.optional(),
    include: exports.AccountIncludeSchema.optional(),
    where: exports.AccountWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.AccountOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.AccountOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.AccountWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.AccountScalarFieldEnumSchema, exports.AccountScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.AccountAggregateArgsSchema = zod_1.z.object({
    where: exports.AccountWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.AccountOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.AccountOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.AccountWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.AccountGroupByArgsSchema = zod_1.z.object({
    where: exports.AccountWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.AccountOrderByWithAggregationInputSchema.array(), exports.AccountOrderByWithAggregationInputSchema]).optional(),
    by: exports.AccountScalarFieldEnumSchema.array(),
    having: exports.AccountScalarWhereWithAggregatesInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.AccountFindUniqueArgsSchema = zod_1.z.object({
    select: exports.AccountSelectSchema.optional(),
    include: exports.AccountIncludeSchema.optional(),
    where: exports.AccountWhereUniqueInputSchema,
}).strict();
exports.AccountFindUniqueOrThrowArgsSchema = zod_1.z.object({
    select: exports.AccountSelectSchema.optional(),
    include: exports.AccountIncludeSchema.optional(),
    where: exports.AccountWhereUniqueInputSchema,
}).strict();
exports.SessionFindFirstArgsSchema = zod_1.z.object({
    select: exports.SessionSelectSchema.optional(),
    include: exports.SessionIncludeSchema.optional(),
    where: exports.SessionWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.SessionOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.SessionOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.SessionWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.SessionScalarFieldEnumSchema, exports.SessionScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.SessionFindFirstOrThrowArgsSchema = zod_1.z.object({
    select: exports.SessionSelectSchema.optional(),
    include: exports.SessionIncludeSchema.optional(),
    where: exports.SessionWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.SessionOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.SessionOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.SessionWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.SessionScalarFieldEnumSchema, exports.SessionScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.SessionFindManyArgsSchema = zod_1.z.object({
    select: exports.SessionSelectSchema.optional(),
    include: exports.SessionIncludeSchema.optional(),
    where: exports.SessionWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.SessionOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.SessionOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.SessionWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.SessionScalarFieldEnumSchema, exports.SessionScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.SessionAggregateArgsSchema = zod_1.z.object({
    where: exports.SessionWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.SessionOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.SessionOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.SessionWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.SessionGroupByArgsSchema = zod_1.z.object({
    where: exports.SessionWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.SessionOrderByWithAggregationInputSchema.array(), exports.SessionOrderByWithAggregationInputSchema]).optional(),
    by: exports.SessionScalarFieldEnumSchema.array(),
    having: exports.SessionScalarWhereWithAggregatesInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.SessionFindUniqueArgsSchema = zod_1.z.object({
    select: exports.SessionSelectSchema.optional(),
    include: exports.SessionIncludeSchema.optional(),
    where: exports.SessionWhereUniqueInputSchema,
}).strict();
exports.SessionFindUniqueOrThrowArgsSchema = zod_1.z.object({
    select: exports.SessionSelectSchema.optional(),
    include: exports.SessionIncludeSchema.optional(),
    where: exports.SessionWhereUniqueInputSchema,
}).strict();
exports.VerificationTokenFindFirstArgsSchema = zod_1.z.object({
    select: exports.VerificationTokenSelectSchema.optional(),
    where: exports.VerificationTokenWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.VerificationTokenOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.VerificationTokenOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.VerificationTokenWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.VerificationTokenScalarFieldEnumSchema, exports.VerificationTokenScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.VerificationTokenFindFirstOrThrowArgsSchema = zod_1.z.object({
    select: exports.VerificationTokenSelectSchema.optional(),
    where: exports.VerificationTokenWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.VerificationTokenOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.VerificationTokenOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.VerificationTokenWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.VerificationTokenScalarFieldEnumSchema, exports.VerificationTokenScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.VerificationTokenFindManyArgsSchema = zod_1.z.object({
    select: exports.VerificationTokenSelectSchema.optional(),
    where: exports.VerificationTokenWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.VerificationTokenOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.VerificationTokenOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.VerificationTokenWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.VerificationTokenScalarFieldEnumSchema, exports.VerificationTokenScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.VerificationTokenAggregateArgsSchema = zod_1.z.object({
    where: exports.VerificationTokenWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.VerificationTokenOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.VerificationTokenOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.VerificationTokenWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.VerificationTokenGroupByArgsSchema = zod_1.z.object({
    where: exports.VerificationTokenWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.VerificationTokenOrderByWithAggregationInputSchema.array(), exports.VerificationTokenOrderByWithAggregationInputSchema]).optional(),
    by: exports.VerificationTokenScalarFieldEnumSchema.array(),
    having: exports.VerificationTokenScalarWhereWithAggregatesInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.VerificationTokenFindUniqueArgsSchema = zod_1.z.object({
    select: exports.VerificationTokenSelectSchema.optional(),
    where: exports.VerificationTokenWhereUniqueInputSchema,
}).strict();
exports.VerificationTokenFindUniqueOrThrowArgsSchema = zod_1.z.object({
    select: exports.VerificationTokenSelectSchema.optional(),
    where: exports.VerificationTokenWhereUniqueInputSchema,
}).strict();
exports.ProjectFindFirstArgsSchema = zod_1.z.object({
    select: exports.ProjectSelectSchema.optional(),
    include: exports.ProjectIncludeSchema.optional(),
    where: exports.ProjectWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.ProjectOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.ProjectOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.ProjectWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.ProjectScalarFieldEnumSchema, exports.ProjectScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.ProjectFindFirstOrThrowArgsSchema = zod_1.z.object({
    select: exports.ProjectSelectSchema.optional(),
    include: exports.ProjectIncludeSchema.optional(),
    where: exports.ProjectWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.ProjectOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.ProjectOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.ProjectWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.ProjectScalarFieldEnumSchema, exports.ProjectScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.ProjectFindManyArgsSchema = zod_1.z.object({
    select: exports.ProjectSelectSchema.optional(),
    include: exports.ProjectIncludeSchema.optional(),
    where: exports.ProjectWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.ProjectOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.ProjectOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.ProjectWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.ProjectScalarFieldEnumSchema, exports.ProjectScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.ProjectAggregateArgsSchema = zod_1.z.object({
    where: exports.ProjectWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.ProjectOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.ProjectOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.ProjectWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.ProjectGroupByArgsSchema = zod_1.z.object({
    where: exports.ProjectWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.ProjectOrderByWithAggregationInputSchema.array(), exports.ProjectOrderByWithAggregationInputSchema]).optional(),
    by: exports.ProjectScalarFieldEnumSchema.array(),
    having: exports.ProjectScalarWhereWithAggregatesInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.ProjectFindUniqueArgsSchema = zod_1.z.object({
    select: exports.ProjectSelectSchema.optional(),
    include: exports.ProjectIncludeSchema.optional(),
    where: exports.ProjectWhereUniqueInputSchema,
}).strict();
exports.ProjectFindUniqueOrThrowArgsSchema = zod_1.z.object({
    select: exports.ProjectSelectSchema.optional(),
    include: exports.ProjectIncludeSchema.optional(),
    where: exports.ProjectWhereUniqueInputSchema,
}).strict();
exports.ProjectInviteFindFirstArgsSchema = zod_1.z.object({
    select: exports.ProjectInviteSelectSchema.optional(),
    include: exports.ProjectInviteIncludeSchema.optional(),
    where: exports.ProjectInviteWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.ProjectInviteOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.ProjectInviteOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.ProjectInviteWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.ProjectInviteScalarFieldEnumSchema, exports.ProjectInviteScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.ProjectInviteFindFirstOrThrowArgsSchema = zod_1.z.object({
    select: exports.ProjectInviteSelectSchema.optional(),
    include: exports.ProjectInviteIncludeSchema.optional(),
    where: exports.ProjectInviteWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.ProjectInviteOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.ProjectInviteOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.ProjectInviteWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.ProjectInviteScalarFieldEnumSchema, exports.ProjectInviteScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.ProjectInviteFindManyArgsSchema = zod_1.z.object({
    select: exports.ProjectInviteSelectSchema.optional(),
    include: exports.ProjectInviteIncludeSchema.optional(),
    where: exports.ProjectInviteWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.ProjectInviteOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.ProjectInviteOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.ProjectInviteWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.ProjectInviteScalarFieldEnumSchema, exports.ProjectInviteScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.ProjectInviteAggregateArgsSchema = zod_1.z.object({
    where: exports.ProjectInviteWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.ProjectInviteOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.ProjectInviteOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.ProjectInviteWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.ProjectInviteGroupByArgsSchema = zod_1.z.object({
    where: exports.ProjectInviteWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.ProjectInviteOrderByWithAggregationInputSchema.array(), exports.ProjectInviteOrderByWithAggregationInputSchema]).optional(),
    by: exports.ProjectInviteScalarFieldEnumSchema.array(),
    having: exports.ProjectInviteScalarWhereWithAggregatesInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.ProjectInviteFindUniqueArgsSchema = zod_1.z.object({
    select: exports.ProjectInviteSelectSchema.optional(),
    include: exports.ProjectInviteIncludeSchema.optional(),
    where: exports.ProjectInviteWhereUniqueInputSchema,
}).strict();
exports.ProjectInviteFindUniqueOrThrowArgsSchema = zod_1.z.object({
    select: exports.ProjectInviteSelectSchema.optional(),
    include: exports.ProjectInviteIncludeSchema.optional(),
    where: exports.ProjectInviteWhereUniqueInputSchema,
}).strict();
exports.ProjectUsersFindFirstArgsSchema = zod_1.z.object({
    select: exports.ProjectUsersSelectSchema.optional(),
    include: exports.ProjectUsersIncludeSchema.optional(),
    where: exports.ProjectUsersWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.ProjectUsersOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.ProjectUsersOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.ProjectUsersWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.ProjectUsersScalarFieldEnumSchema, exports.ProjectUsersScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.ProjectUsersFindFirstOrThrowArgsSchema = zod_1.z.object({
    select: exports.ProjectUsersSelectSchema.optional(),
    include: exports.ProjectUsersIncludeSchema.optional(),
    where: exports.ProjectUsersWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.ProjectUsersOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.ProjectUsersOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.ProjectUsersWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.ProjectUsersScalarFieldEnumSchema, exports.ProjectUsersScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.ProjectUsersFindManyArgsSchema = zod_1.z.object({
    select: exports.ProjectUsersSelectSchema.optional(),
    include: exports.ProjectUsersIncludeSchema.optional(),
    where: exports.ProjectUsersWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.ProjectUsersOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.ProjectUsersOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.ProjectUsersWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.ProjectUsersScalarFieldEnumSchema, exports.ProjectUsersScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.ProjectUsersAggregateArgsSchema = zod_1.z.object({
    where: exports.ProjectUsersWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.ProjectUsersOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.ProjectUsersOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.ProjectUsersWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.ProjectUsersGroupByArgsSchema = zod_1.z.object({
    where: exports.ProjectUsersWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.ProjectUsersOrderByWithAggregationInputSchema.array(), exports.ProjectUsersOrderByWithAggregationInputSchema]).optional(),
    by: exports.ProjectUsersScalarFieldEnumSchema.array(),
    having: exports.ProjectUsersScalarWhereWithAggregatesInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.ProjectUsersFindUniqueArgsSchema = zod_1.z.object({
    select: exports.ProjectUsersSelectSchema.optional(),
    include: exports.ProjectUsersIncludeSchema.optional(),
    where: exports.ProjectUsersWhereUniqueInputSchema,
}).strict();
exports.ProjectUsersFindUniqueOrThrowArgsSchema = zod_1.z.object({
    select: exports.ProjectUsersSelectSchema.optional(),
    include: exports.ProjectUsersIncludeSchema.optional(),
    where: exports.ProjectUsersWhereUniqueInputSchema,
}).strict();
exports.SentEmailFindFirstArgsSchema = zod_1.z.object({
    select: exports.SentEmailSelectSchema.optional(),
    include: exports.SentEmailIncludeSchema.optional(),
    where: exports.SentEmailWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.SentEmailOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.SentEmailOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.SentEmailWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.SentEmailScalarFieldEnumSchema, exports.SentEmailScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.SentEmailFindFirstOrThrowArgsSchema = zod_1.z.object({
    select: exports.SentEmailSelectSchema.optional(),
    include: exports.SentEmailIncludeSchema.optional(),
    where: exports.SentEmailWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.SentEmailOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.SentEmailOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.SentEmailWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.SentEmailScalarFieldEnumSchema, exports.SentEmailScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.SentEmailFindManyArgsSchema = zod_1.z.object({
    select: exports.SentEmailSelectSchema.optional(),
    include: exports.SentEmailIncludeSchema.optional(),
    where: exports.SentEmailWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.SentEmailOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.SentEmailOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.SentEmailWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.SentEmailScalarFieldEnumSchema, exports.SentEmailScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.SentEmailAggregateArgsSchema = zod_1.z.object({
    where: exports.SentEmailWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.SentEmailOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.SentEmailOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.SentEmailWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.SentEmailGroupByArgsSchema = zod_1.z.object({
    where: exports.SentEmailWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.SentEmailOrderByWithAggregationInputSchema.array(), exports.SentEmailOrderByWithAggregationInputSchema]).optional(),
    by: exports.SentEmailScalarFieldEnumSchema.array(),
    having: exports.SentEmailScalarWhereWithAggregatesInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.SentEmailFindUniqueArgsSchema = zod_1.z.object({
    select: exports.SentEmailSelectSchema.optional(),
    include: exports.SentEmailIncludeSchema.optional(),
    where: exports.SentEmailWhereUniqueInputSchema,
}).strict();
exports.SentEmailFindUniqueOrThrowArgsSchema = zod_1.z.object({
    select: exports.SentEmailSelectSchema.optional(),
    include: exports.SentEmailIncludeSchema.optional(),
    where: exports.SentEmailWhereUniqueInputSchema,
}).strict();
exports.DomainFindFirstArgsSchema = zod_1.z.object({
    select: exports.DomainSelectSchema.optional(),
    include: exports.DomainIncludeSchema.optional(),
    where: exports.DomainWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.DomainOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.DomainOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.DomainWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.DomainScalarFieldEnumSchema, exports.DomainScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.DomainFindFirstOrThrowArgsSchema = zod_1.z.object({
    select: exports.DomainSelectSchema.optional(),
    include: exports.DomainIncludeSchema.optional(),
    where: exports.DomainWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.DomainOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.DomainOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.DomainWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.DomainScalarFieldEnumSchema, exports.DomainScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.DomainFindManyArgsSchema = zod_1.z.object({
    select: exports.DomainSelectSchema.optional(),
    include: exports.DomainIncludeSchema.optional(),
    where: exports.DomainWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.DomainOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.DomainOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.DomainWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.DomainScalarFieldEnumSchema, exports.DomainScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.DomainAggregateArgsSchema = zod_1.z.object({
    where: exports.DomainWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.DomainOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.DomainOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.DomainWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.DomainGroupByArgsSchema = zod_1.z.object({
    where: exports.DomainWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.DomainOrderByWithAggregationInputSchema.array(), exports.DomainOrderByWithAggregationInputSchema]).optional(),
    by: exports.DomainScalarFieldEnumSchema.array(),
    having: exports.DomainScalarWhereWithAggregatesInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.DomainFindUniqueArgsSchema = zod_1.z.object({
    select: exports.DomainSelectSchema.optional(),
    include: exports.DomainIncludeSchema.optional(),
    where: exports.DomainWhereUniqueInputSchema,
}).strict();
exports.DomainFindUniqueOrThrowArgsSchema = zod_1.z.object({
    select: exports.DomainSelectSchema.optional(),
    include: exports.DomainIncludeSchema.optional(),
    where: exports.DomainWhereUniqueInputSchema,
}).strict();
exports.LinkFindFirstArgsSchema = zod_1.z.object({
    select: exports.LinkSelectSchema.optional(),
    include: exports.LinkIncludeSchema.optional(),
    where: exports.LinkWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.LinkOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.LinkOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.LinkWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.LinkScalarFieldEnumSchema, exports.LinkScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.LinkFindFirstOrThrowArgsSchema = zod_1.z.object({
    select: exports.LinkSelectSchema.optional(),
    include: exports.LinkIncludeSchema.optional(),
    where: exports.LinkWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.LinkOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.LinkOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.LinkWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.LinkScalarFieldEnumSchema, exports.LinkScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.LinkFindManyArgsSchema = zod_1.z.object({
    select: exports.LinkSelectSchema.optional(),
    include: exports.LinkIncludeSchema.optional(),
    where: exports.LinkWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.LinkOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.LinkOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.LinkWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.LinkScalarFieldEnumSchema, exports.LinkScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.LinkAggregateArgsSchema = zod_1.z.object({
    where: exports.LinkWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.LinkOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.LinkOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.LinkWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.LinkGroupByArgsSchema = zod_1.z.object({
    where: exports.LinkWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.LinkOrderByWithAggregationInputSchema.array(), exports.LinkOrderByWithAggregationInputSchema]).optional(),
    by: exports.LinkScalarFieldEnumSchema.array(),
    having: exports.LinkScalarWhereWithAggregatesInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.LinkFindUniqueArgsSchema = zod_1.z.object({
    select: exports.LinkSelectSchema.optional(),
    include: exports.LinkIncludeSchema.optional(),
    where: exports.LinkWhereUniqueInputSchema,
}).strict();
exports.LinkFindUniqueOrThrowArgsSchema = zod_1.z.object({
    select: exports.LinkSelectSchema.optional(),
    include: exports.LinkIncludeSchema.optional(),
    where: exports.LinkWhereUniqueInputSchema,
}).strict();
exports.TagFindFirstArgsSchema = zod_1.z.object({
    select: exports.TagSelectSchema.optional(),
    include: exports.TagIncludeSchema.optional(),
    where: exports.TagWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.TagOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.TagOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.TagWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.TagScalarFieldEnumSchema, exports.TagScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.TagFindFirstOrThrowArgsSchema = zod_1.z.object({
    select: exports.TagSelectSchema.optional(),
    include: exports.TagIncludeSchema.optional(),
    where: exports.TagWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.TagOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.TagOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.TagWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.TagScalarFieldEnumSchema, exports.TagScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.TagFindManyArgsSchema = zod_1.z.object({
    select: exports.TagSelectSchema.optional(),
    include: exports.TagIncludeSchema.optional(),
    where: exports.TagWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.TagOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.TagOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.TagWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.union([exports.TagScalarFieldEnumSchema, exports.TagScalarFieldEnumSchema.array()]).optional(),
}).strict();
exports.TagAggregateArgsSchema = zod_1.z.object({
    where: exports.TagWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.TagOrderByWithRelationAndSearchRelevanceInputSchema.array(), exports.TagOrderByWithRelationAndSearchRelevanceInputSchema]).optional(),
    cursor: exports.TagWhereUniqueInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.TagGroupByArgsSchema = zod_1.z.object({
    where: exports.TagWhereInputSchema.optional(),
    orderBy: zod_1.z.union([exports.TagOrderByWithAggregationInputSchema.array(), exports.TagOrderByWithAggregationInputSchema]).optional(),
    by: exports.TagScalarFieldEnumSchema.array(),
    having: exports.TagScalarWhereWithAggregatesInputSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
}).strict();
exports.TagFindUniqueArgsSchema = zod_1.z.object({
    select: exports.TagSelectSchema.optional(),
    include: exports.TagIncludeSchema.optional(),
    where: exports.TagWhereUniqueInputSchema,
}).strict();
exports.TagFindUniqueOrThrowArgsSchema = zod_1.z.object({
    select: exports.TagSelectSchema.optional(),
    include: exports.TagIncludeSchema.optional(),
    where: exports.TagWhereUniqueInputSchema,
}).strict();
exports.AuditsCreateArgsSchema = zod_1.z.object({
    select: exports.AuditsSelectSchema.optional(),
    data: zod_1.z.union([exports.AuditsCreateInputSchema, exports.AuditsUncheckedCreateInputSchema]),
}).strict();
exports.AuditsUpsertArgsSchema = zod_1.z.object({
    select: exports.AuditsSelectSchema.optional(),
    where: exports.AuditsWhereUniqueInputSchema,
    create: zod_1.z.union([exports.AuditsCreateInputSchema, exports.AuditsUncheckedCreateInputSchema]),
    update: zod_1.z.union([exports.AuditsUpdateInputSchema, exports.AuditsUncheckedUpdateInputSchema]),
}).strict();
exports.AuditsCreateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.AuditsCreateManyInputSchema, exports.AuditsCreateManyInputSchema.array()]),
    skipDuplicates: zod_1.z.boolean().optional(),
}).strict();
exports.AuditsDeleteArgsSchema = zod_1.z.object({
    select: exports.AuditsSelectSchema.optional(),
    where: exports.AuditsWhereUniqueInputSchema,
}).strict();
exports.AuditsUpdateArgsSchema = zod_1.z.object({
    select: exports.AuditsSelectSchema.optional(),
    data: zod_1.z.union([exports.AuditsUpdateInputSchema, exports.AuditsUncheckedUpdateInputSchema]),
    where: exports.AuditsWhereUniqueInputSchema,
}).strict();
exports.AuditsUpdateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.AuditsUpdateManyMutationInputSchema, exports.AuditsUncheckedUpdateManyInputSchema]),
    where: exports.AuditsWhereInputSchema.optional(),
}).strict();
exports.AuditsDeleteManyArgsSchema = zod_1.z.object({
    where: exports.AuditsWhereInputSchema.optional(),
}).strict();
exports.SiteTemplateCreateArgsSchema = zod_1.z.object({
    select: exports.SiteTemplateSelectSchema.optional(),
    include: exports.SiteTemplateIncludeSchema.optional(),
    data: zod_1.z.union([exports.SiteTemplateCreateInputSchema, exports.SiteTemplateUncheckedCreateInputSchema]),
}).strict();
exports.SiteTemplateUpsertArgsSchema = zod_1.z.object({
    select: exports.SiteTemplateSelectSchema.optional(),
    include: exports.SiteTemplateIncludeSchema.optional(),
    where: exports.SiteTemplateWhereUniqueInputSchema,
    create: zod_1.z.union([exports.SiteTemplateCreateInputSchema, exports.SiteTemplateUncheckedCreateInputSchema]),
    update: zod_1.z.union([exports.SiteTemplateUpdateInputSchema, exports.SiteTemplateUncheckedUpdateInputSchema]),
}).strict();
exports.SiteTemplateCreateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.SiteTemplateCreateManyInputSchema, exports.SiteTemplateCreateManyInputSchema.array()]),
    skipDuplicates: zod_1.z.boolean().optional(),
}).strict();
exports.SiteTemplateDeleteArgsSchema = zod_1.z.object({
    select: exports.SiteTemplateSelectSchema.optional(),
    include: exports.SiteTemplateIncludeSchema.optional(),
    where: exports.SiteTemplateWhereUniqueInputSchema,
}).strict();
exports.SiteTemplateUpdateArgsSchema = zod_1.z.object({
    select: exports.SiteTemplateSelectSchema.optional(),
    include: exports.SiteTemplateIncludeSchema.optional(),
    data: zod_1.z.union([exports.SiteTemplateUpdateInputSchema, exports.SiteTemplateUncheckedUpdateInputSchema]),
    where: exports.SiteTemplateWhereUniqueInputSchema,
}).strict();
exports.SiteTemplateUpdateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.SiteTemplateUpdateManyMutationInputSchema, exports.SiteTemplateUncheckedUpdateManyInputSchema]),
    where: exports.SiteTemplateWhereInputSchema.optional(),
}).strict();
exports.SiteTemplateDeleteManyArgsSchema = zod_1.z.object({
    where: exports.SiteTemplateWhereInputSchema.optional(),
}).strict();
exports.SiteTemplateDataDefCreateArgsSchema = zod_1.z.object({
    select: exports.SiteTemplateDataDefSelectSchema.optional(),
    include: exports.SiteTemplateDataDefIncludeSchema.optional(),
    data: zod_1.z.union([exports.SiteTemplateDataDefCreateInputSchema, exports.SiteTemplateDataDefUncheckedCreateInputSchema]),
}).strict();
exports.SiteTemplateDataDefUpsertArgsSchema = zod_1.z.object({
    select: exports.SiteTemplateDataDefSelectSchema.optional(),
    include: exports.SiteTemplateDataDefIncludeSchema.optional(),
    where: exports.SiteTemplateDataDefWhereUniqueInputSchema,
    create: zod_1.z.union([exports.SiteTemplateDataDefCreateInputSchema, exports.SiteTemplateDataDefUncheckedCreateInputSchema]),
    update: zod_1.z.union([exports.SiteTemplateDataDefUpdateInputSchema, exports.SiteTemplateDataDefUncheckedUpdateInputSchema]),
}).strict();
exports.SiteTemplateDataDefCreateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.SiteTemplateDataDefCreateManyInputSchema, exports.SiteTemplateDataDefCreateManyInputSchema.array()]),
    skipDuplicates: zod_1.z.boolean().optional(),
}).strict();
exports.SiteTemplateDataDefDeleteArgsSchema = zod_1.z.object({
    select: exports.SiteTemplateDataDefSelectSchema.optional(),
    include: exports.SiteTemplateDataDefIncludeSchema.optional(),
    where: exports.SiteTemplateDataDefWhereUniqueInputSchema,
}).strict();
exports.SiteTemplateDataDefUpdateArgsSchema = zod_1.z.object({
    select: exports.SiteTemplateDataDefSelectSchema.optional(),
    include: exports.SiteTemplateDataDefIncludeSchema.optional(),
    data: zod_1.z.union([exports.SiteTemplateDataDefUpdateInputSchema, exports.SiteTemplateDataDefUncheckedUpdateInputSchema]),
    where: exports.SiteTemplateDataDefWhereUniqueInputSchema,
}).strict();
exports.SiteTemplateDataDefUpdateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.SiteTemplateDataDefUpdateManyMutationInputSchema, exports.SiteTemplateDataDefUncheckedUpdateManyInputSchema]),
    where: exports.SiteTemplateDataDefWhereInputSchema.optional(),
}).strict();
exports.SiteTemplateDataDefDeleteManyArgsSchema = zod_1.z.object({
    where: exports.SiteTemplateDataDefWhereInputSchema.optional(),
}).strict();
exports.CustomerCreateArgsSchema = zod_1.z.object({
    select: exports.CustomerSelectSchema.optional(),
    include: exports.CustomerIncludeSchema.optional(),
    data: zod_1.z.union([exports.CustomerCreateInputSchema, exports.CustomerUncheckedCreateInputSchema]),
}).strict();
exports.CustomerUpsertArgsSchema = zod_1.z.object({
    select: exports.CustomerSelectSchema.optional(),
    include: exports.CustomerIncludeSchema.optional(),
    where: exports.CustomerWhereUniqueInputSchema,
    create: zod_1.z.union([exports.CustomerCreateInputSchema, exports.CustomerUncheckedCreateInputSchema]),
    update: zod_1.z.union([exports.CustomerUpdateInputSchema, exports.CustomerUncheckedUpdateInputSchema]),
}).strict();
exports.CustomerCreateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.CustomerCreateManyInputSchema, exports.CustomerCreateManyInputSchema.array()]),
    skipDuplicates: zod_1.z.boolean().optional(),
}).strict();
exports.CustomerDeleteArgsSchema = zod_1.z.object({
    select: exports.CustomerSelectSchema.optional(),
    include: exports.CustomerIncludeSchema.optional(),
    where: exports.CustomerWhereUniqueInputSchema,
}).strict();
exports.CustomerUpdateArgsSchema = zod_1.z.object({
    select: exports.CustomerSelectSchema.optional(),
    include: exports.CustomerIncludeSchema.optional(),
    data: zod_1.z.union([exports.CustomerUpdateInputSchema, exports.CustomerUncheckedUpdateInputSchema]),
    where: exports.CustomerWhereUniqueInputSchema,
}).strict();
exports.CustomerUpdateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.CustomerUpdateManyMutationInputSchema, exports.CustomerUncheckedUpdateManyInputSchema]),
    where: exports.CustomerWhereInputSchema.optional(),
}).strict();
exports.CustomerDeleteManyArgsSchema = zod_1.z.object({
    where: exports.CustomerWhereInputSchema.optional(),
}).strict();
exports.SiteCreateArgsSchema = zod_1.z.object({
    select: exports.SiteSelectSchema.optional(),
    include: exports.SiteIncludeSchema.optional(),
    data: zod_1.z.union([exports.SiteCreateInputSchema, exports.SiteUncheckedCreateInputSchema]),
}).strict();
exports.SiteUpsertArgsSchema = zod_1.z.object({
    select: exports.SiteSelectSchema.optional(),
    include: exports.SiteIncludeSchema.optional(),
    where: exports.SiteWhereUniqueInputSchema,
    create: zod_1.z.union([exports.SiteCreateInputSchema, exports.SiteUncheckedCreateInputSchema]),
    update: zod_1.z.union([exports.SiteUpdateInputSchema, exports.SiteUncheckedUpdateInputSchema]),
}).strict();
exports.SiteCreateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.SiteCreateManyInputSchema, exports.SiteCreateManyInputSchema.array()]),
    skipDuplicates: zod_1.z.boolean().optional(),
}).strict();
exports.SiteDeleteArgsSchema = zod_1.z.object({
    select: exports.SiteSelectSchema.optional(),
    include: exports.SiteIncludeSchema.optional(),
    where: exports.SiteWhereUniqueInputSchema,
}).strict();
exports.SiteUpdateArgsSchema = zod_1.z.object({
    select: exports.SiteSelectSchema.optional(),
    include: exports.SiteIncludeSchema.optional(),
    data: zod_1.z.union([exports.SiteUpdateInputSchema, exports.SiteUncheckedUpdateInputSchema]),
    where: exports.SiteWhereUniqueInputSchema,
}).strict();
exports.SiteUpdateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.SiteUpdateManyMutationInputSchema, exports.SiteUncheckedUpdateManyInputSchema]),
    where: exports.SiteWhereInputSchema.optional(),
}).strict();
exports.SiteDeleteManyArgsSchema = zod_1.z.object({
    where: exports.SiteWhereInputSchema.optional(),
}).strict();
exports.UserCreateArgsSchema = zod_1.z.object({
    select: exports.UserSelectSchema.optional(),
    include: exports.UserIncludeSchema.optional(),
    data: zod_1.z.union([exports.UserCreateInputSchema, exports.UserUncheckedCreateInputSchema]).optional(),
}).strict();
exports.UserUpsertArgsSchema = zod_1.z.object({
    select: exports.UserSelectSchema.optional(),
    include: exports.UserIncludeSchema.optional(),
    where: exports.UserWhereUniqueInputSchema,
    create: zod_1.z.union([exports.UserCreateInputSchema, exports.UserUncheckedCreateInputSchema]),
    update: zod_1.z.union([exports.UserUpdateInputSchema, exports.UserUncheckedUpdateInputSchema]),
}).strict();
exports.UserCreateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.UserCreateManyInputSchema, exports.UserCreateManyInputSchema.array()]),
    skipDuplicates: zod_1.z.boolean().optional(),
}).strict();
exports.UserDeleteArgsSchema = zod_1.z.object({
    select: exports.UserSelectSchema.optional(),
    include: exports.UserIncludeSchema.optional(),
    where: exports.UserWhereUniqueInputSchema,
}).strict();
exports.UserUpdateArgsSchema = zod_1.z.object({
    select: exports.UserSelectSchema.optional(),
    include: exports.UserIncludeSchema.optional(),
    data: zod_1.z.union([exports.UserUpdateInputSchema, exports.UserUncheckedUpdateInputSchema]),
    where: exports.UserWhereUniqueInputSchema,
}).strict();
exports.UserUpdateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.UserUpdateManyMutationInputSchema, exports.UserUncheckedUpdateManyInputSchema]),
    where: exports.UserWhereInputSchema.optional(),
}).strict();
exports.UserDeleteManyArgsSchema = zod_1.z.object({
    where: exports.UserWhereInputSchema.optional(),
}).strict();
exports.AccountCreateArgsSchema = zod_1.z.object({
    select: exports.AccountSelectSchema.optional(),
    include: exports.AccountIncludeSchema.optional(),
    data: zod_1.z.union([exports.AccountCreateInputSchema, exports.AccountUncheckedCreateInputSchema]),
}).strict();
exports.AccountUpsertArgsSchema = zod_1.z.object({
    select: exports.AccountSelectSchema.optional(),
    include: exports.AccountIncludeSchema.optional(),
    where: exports.AccountWhereUniqueInputSchema,
    create: zod_1.z.union([exports.AccountCreateInputSchema, exports.AccountUncheckedCreateInputSchema]),
    update: zod_1.z.union([exports.AccountUpdateInputSchema, exports.AccountUncheckedUpdateInputSchema]),
}).strict();
exports.AccountCreateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.AccountCreateManyInputSchema, exports.AccountCreateManyInputSchema.array()]),
    skipDuplicates: zod_1.z.boolean().optional(),
}).strict();
exports.AccountDeleteArgsSchema = zod_1.z.object({
    select: exports.AccountSelectSchema.optional(),
    include: exports.AccountIncludeSchema.optional(),
    where: exports.AccountWhereUniqueInputSchema,
}).strict();
exports.AccountUpdateArgsSchema = zod_1.z.object({
    select: exports.AccountSelectSchema.optional(),
    include: exports.AccountIncludeSchema.optional(),
    data: zod_1.z.union([exports.AccountUpdateInputSchema, exports.AccountUncheckedUpdateInputSchema]),
    where: exports.AccountWhereUniqueInputSchema,
}).strict();
exports.AccountUpdateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.AccountUpdateManyMutationInputSchema, exports.AccountUncheckedUpdateManyInputSchema]),
    where: exports.AccountWhereInputSchema.optional(),
}).strict();
exports.AccountDeleteManyArgsSchema = zod_1.z.object({
    where: exports.AccountWhereInputSchema.optional(),
}).strict();
exports.SessionCreateArgsSchema = zod_1.z.object({
    select: exports.SessionSelectSchema.optional(),
    include: exports.SessionIncludeSchema.optional(),
    data: zod_1.z.union([exports.SessionCreateInputSchema, exports.SessionUncheckedCreateInputSchema]),
}).strict();
exports.SessionUpsertArgsSchema = zod_1.z.object({
    select: exports.SessionSelectSchema.optional(),
    include: exports.SessionIncludeSchema.optional(),
    where: exports.SessionWhereUniqueInputSchema,
    create: zod_1.z.union([exports.SessionCreateInputSchema, exports.SessionUncheckedCreateInputSchema]),
    update: zod_1.z.union([exports.SessionUpdateInputSchema, exports.SessionUncheckedUpdateInputSchema]),
}).strict();
exports.SessionCreateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.SessionCreateManyInputSchema, exports.SessionCreateManyInputSchema.array()]),
    skipDuplicates: zod_1.z.boolean().optional(),
}).strict();
exports.SessionDeleteArgsSchema = zod_1.z.object({
    select: exports.SessionSelectSchema.optional(),
    include: exports.SessionIncludeSchema.optional(),
    where: exports.SessionWhereUniqueInputSchema,
}).strict();
exports.SessionUpdateArgsSchema = zod_1.z.object({
    select: exports.SessionSelectSchema.optional(),
    include: exports.SessionIncludeSchema.optional(),
    data: zod_1.z.union([exports.SessionUpdateInputSchema, exports.SessionUncheckedUpdateInputSchema]),
    where: exports.SessionWhereUniqueInputSchema,
}).strict();
exports.SessionUpdateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.SessionUpdateManyMutationInputSchema, exports.SessionUncheckedUpdateManyInputSchema]),
    where: exports.SessionWhereInputSchema.optional(),
}).strict();
exports.SessionDeleteManyArgsSchema = zod_1.z.object({
    where: exports.SessionWhereInputSchema.optional(),
}).strict();
exports.VerificationTokenCreateArgsSchema = zod_1.z.object({
    select: exports.VerificationTokenSelectSchema.optional(),
    data: zod_1.z.union([exports.VerificationTokenCreateInputSchema, exports.VerificationTokenUncheckedCreateInputSchema]),
}).strict();
exports.VerificationTokenUpsertArgsSchema = zod_1.z.object({
    select: exports.VerificationTokenSelectSchema.optional(),
    where: exports.VerificationTokenWhereUniqueInputSchema,
    create: zod_1.z.union([exports.VerificationTokenCreateInputSchema, exports.VerificationTokenUncheckedCreateInputSchema]),
    update: zod_1.z.union([exports.VerificationTokenUpdateInputSchema, exports.VerificationTokenUncheckedUpdateInputSchema]),
}).strict();
exports.VerificationTokenCreateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.VerificationTokenCreateManyInputSchema, exports.VerificationTokenCreateManyInputSchema.array()]),
    skipDuplicates: zod_1.z.boolean().optional(),
}).strict();
exports.VerificationTokenDeleteArgsSchema = zod_1.z.object({
    select: exports.VerificationTokenSelectSchema.optional(),
    where: exports.VerificationTokenWhereUniqueInputSchema,
}).strict();
exports.VerificationTokenUpdateArgsSchema = zod_1.z.object({
    select: exports.VerificationTokenSelectSchema.optional(),
    data: zod_1.z.union([exports.VerificationTokenUpdateInputSchema, exports.VerificationTokenUncheckedUpdateInputSchema]),
    where: exports.VerificationTokenWhereUniqueInputSchema,
}).strict();
exports.VerificationTokenUpdateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.VerificationTokenUpdateManyMutationInputSchema, exports.VerificationTokenUncheckedUpdateManyInputSchema]),
    where: exports.VerificationTokenWhereInputSchema.optional(),
}).strict();
exports.VerificationTokenDeleteManyArgsSchema = zod_1.z.object({
    where: exports.VerificationTokenWhereInputSchema.optional(),
}).strict();
exports.ProjectCreateArgsSchema = zod_1.z.object({
    select: exports.ProjectSelectSchema.optional(),
    include: exports.ProjectIncludeSchema.optional(),
    data: zod_1.z.union([exports.ProjectCreateInputSchema, exports.ProjectUncheckedCreateInputSchema]),
}).strict();
exports.ProjectUpsertArgsSchema = zod_1.z.object({
    select: exports.ProjectSelectSchema.optional(),
    include: exports.ProjectIncludeSchema.optional(),
    where: exports.ProjectWhereUniqueInputSchema,
    create: zod_1.z.union([exports.ProjectCreateInputSchema, exports.ProjectUncheckedCreateInputSchema]),
    update: zod_1.z.union([exports.ProjectUpdateInputSchema, exports.ProjectUncheckedUpdateInputSchema]),
}).strict();
exports.ProjectCreateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.ProjectCreateManyInputSchema, exports.ProjectCreateManyInputSchema.array()]),
    skipDuplicates: zod_1.z.boolean().optional(),
}).strict();
exports.ProjectDeleteArgsSchema = zod_1.z.object({
    select: exports.ProjectSelectSchema.optional(),
    include: exports.ProjectIncludeSchema.optional(),
    where: exports.ProjectWhereUniqueInputSchema,
}).strict();
exports.ProjectUpdateArgsSchema = zod_1.z.object({
    select: exports.ProjectSelectSchema.optional(),
    include: exports.ProjectIncludeSchema.optional(),
    data: zod_1.z.union([exports.ProjectUpdateInputSchema, exports.ProjectUncheckedUpdateInputSchema]),
    where: exports.ProjectWhereUniqueInputSchema,
}).strict();
exports.ProjectUpdateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.ProjectUpdateManyMutationInputSchema, exports.ProjectUncheckedUpdateManyInputSchema]),
    where: exports.ProjectWhereInputSchema.optional(),
}).strict();
exports.ProjectDeleteManyArgsSchema = zod_1.z.object({
    where: exports.ProjectWhereInputSchema.optional(),
}).strict();
exports.ProjectInviteCreateArgsSchema = zod_1.z.object({
    select: exports.ProjectInviteSelectSchema.optional(),
    include: exports.ProjectInviteIncludeSchema.optional(),
    data: zod_1.z.union([exports.ProjectInviteCreateInputSchema, exports.ProjectInviteUncheckedCreateInputSchema]),
}).strict();
exports.ProjectInviteUpsertArgsSchema = zod_1.z.object({
    select: exports.ProjectInviteSelectSchema.optional(),
    include: exports.ProjectInviteIncludeSchema.optional(),
    where: exports.ProjectInviteWhereUniqueInputSchema,
    create: zod_1.z.union([exports.ProjectInviteCreateInputSchema, exports.ProjectInviteUncheckedCreateInputSchema]),
    update: zod_1.z.union([exports.ProjectInviteUpdateInputSchema, exports.ProjectInviteUncheckedUpdateInputSchema]),
}).strict();
exports.ProjectInviteCreateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.ProjectInviteCreateManyInputSchema, exports.ProjectInviteCreateManyInputSchema.array()]),
    skipDuplicates: zod_1.z.boolean().optional(),
}).strict();
exports.ProjectInviteDeleteArgsSchema = zod_1.z.object({
    select: exports.ProjectInviteSelectSchema.optional(),
    include: exports.ProjectInviteIncludeSchema.optional(),
    where: exports.ProjectInviteWhereUniqueInputSchema,
}).strict();
exports.ProjectInviteUpdateArgsSchema = zod_1.z.object({
    select: exports.ProjectInviteSelectSchema.optional(),
    include: exports.ProjectInviteIncludeSchema.optional(),
    data: zod_1.z.union([exports.ProjectInviteUpdateInputSchema, exports.ProjectInviteUncheckedUpdateInputSchema]),
    where: exports.ProjectInviteWhereUniqueInputSchema,
}).strict();
exports.ProjectInviteUpdateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.ProjectInviteUpdateManyMutationInputSchema, exports.ProjectInviteUncheckedUpdateManyInputSchema]),
    where: exports.ProjectInviteWhereInputSchema.optional(),
}).strict();
exports.ProjectInviteDeleteManyArgsSchema = zod_1.z.object({
    where: exports.ProjectInviteWhereInputSchema.optional(),
}).strict();
exports.ProjectUsersCreateArgsSchema = zod_1.z.object({
    select: exports.ProjectUsersSelectSchema.optional(),
    include: exports.ProjectUsersIncludeSchema.optional(),
    data: zod_1.z.union([exports.ProjectUsersCreateInputSchema, exports.ProjectUsersUncheckedCreateInputSchema]),
}).strict();
exports.ProjectUsersUpsertArgsSchema = zod_1.z.object({
    select: exports.ProjectUsersSelectSchema.optional(),
    include: exports.ProjectUsersIncludeSchema.optional(),
    where: exports.ProjectUsersWhereUniqueInputSchema,
    create: zod_1.z.union([exports.ProjectUsersCreateInputSchema, exports.ProjectUsersUncheckedCreateInputSchema]),
    update: zod_1.z.union([exports.ProjectUsersUpdateInputSchema, exports.ProjectUsersUncheckedUpdateInputSchema]),
}).strict();
exports.ProjectUsersCreateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.ProjectUsersCreateManyInputSchema, exports.ProjectUsersCreateManyInputSchema.array()]),
    skipDuplicates: zod_1.z.boolean().optional(),
}).strict();
exports.ProjectUsersDeleteArgsSchema = zod_1.z.object({
    select: exports.ProjectUsersSelectSchema.optional(),
    include: exports.ProjectUsersIncludeSchema.optional(),
    where: exports.ProjectUsersWhereUniqueInputSchema,
}).strict();
exports.ProjectUsersUpdateArgsSchema = zod_1.z.object({
    select: exports.ProjectUsersSelectSchema.optional(),
    include: exports.ProjectUsersIncludeSchema.optional(),
    data: zod_1.z.union([exports.ProjectUsersUpdateInputSchema, exports.ProjectUsersUncheckedUpdateInputSchema]),
    where: exports.ProjectUsersWhereUniqueInputSchema,
}).strict();
exports.ProjectUsersUpdateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.ProjectUsersUpdateManyMutationInputSchema, exports.ProjectUsersUncheckedUpdateManyInputSchema]),
    where: exports.ProjectUsersWhereInputSchema.optional(),
}).strict();
exports.ProjectUsersDeleteManyArgsSchema = zod_1.z.object({
    where: exports.ProjectUsersWhereInputSchema.optional(),
}).strict();
exports.SentEmailCreateArgsSchema = zod_1.z.object({
    select: exports.SentEmailSelectSchema.optional(),
    include: exports.SentEmailIncludeSchema.optional(),
    data: zod_1.z.union([exports.SentEmailCreateInputSchema, exports.SentEmailUncheckedCreateInputSchema]),
}).strict();
exports.SentEmailUpsertArgsSchema = zod_1.z.object({
    select: exports.SentEmailSelectSchema.optional(),
    include: exports.SentEmailIncludeSchema.optional(),
    where: exports.SentEmailWhereUniqueInputSchema,
    create: zod_1.z.union([exports.SentEmailCreateInputSchema, exports.SentEmailUncheckedCreateInputSchema]),
    update: zod_1.z.union([exports.SentEmailUpdateInputSchema, exports.SentEmailUncheckedUpdateInputSchema]),
}).strict();
exports.SentEmailCreateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.SentEmailCreateManyInputSchema, exports.SentEmailCreateManyInputSchema.array()]),
    skipDuplicates: zod_1.z.boolean().optional(),
}).strict();
exports.SentEmailDeleteArgsSchema = zod_1.z.object({
    select: exports.SentEmailSelectSchema.optional(),
    include: exports.SentEmailIncludeSchema.optional(),
    where: exports.SentEmailWhereUniqueInputSchema,
}).strict();
exports.SentEmailUpdateArgsSchema = zod_1.z.object({
    select: exports.SentEmailSelectSchema.optional(),
    include: exports.SentEmailIncludeSchema.optional(),
    data: zod_1.z.union([exports.SentEmailUpdateInputSchema, exports.SentEmailUncheckedUpdateInputSchema]),
    where: exports.SentEmailWhereUniqueInputSchema,
}).strict();
exports.SentEmailUpdateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.SentEmailUpdateManyMutationInputSchema, exports.SentEmailUncheckedUpdateManyInputSchema]),
    where: exports.SentEmailWhereInputSchema.optional(),
}).strict();
exports.SentEmailDeleteManyArgsSchema = zod_1.z.object({
    where: exports.SentEmailWhereInputSchema.optional(),
}).strict();
exports.DomainCreateArgsSchema = zod_1.z.object({
    select: exports.DomainSelectSchema.optional(),
    include: exports.DomainIncludeSchema.optional(),
    data: zod_1.z.union([exports.DomainCreateInputSchema, exports.DomainUncheckedCreateInputSchema]),
}).strict();
exports.DomainUpsertArgsSchema = zod_1.z.object({
    select: exports.DomainSelectSchema.optional(),
    include: exports.DomainIncludeSchema.optional(),
    where: exports.DomainWhereUniqueInputSchema,
    create: zod_1.z.union([exports.DomainCreateInputSchema, exports.DomainUncheckedCreateInputSchema]),
    update: zod_1.z.union([exports.DomainUpdateInputSchema, exports.DomainUncheckedUpdateInputSchema]),
}).strict();
exports.DomainCreateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.DomainCreateManyInputSchema, exports.DomainCreateManyInputSchema.array()]),
    skipDuplicates: zod_1.z.boolean().optional(),
}).strict();
exports.DomainDeleteArgsSchema = zod_1.z.object({
    select: exports.DomainSelectSchema.optional(),
    include: exports.DomainIncludeSchema.optional(),
    where: exports.DomainWhereUniqueInputSchema,
}).strict();
exports.DomainUpdateArgsSchema = zod_1.z.object({
    select: exports.DomainSelectSchema.optional(),
    include: exports.DomainIncludeSchema.optional(),
    data: zod_1.z.union([exports.DomainUpdateInputSchema, exports.DomainUncheckedUpdateInputSchema]),
    where: exports.DomainWhereUniqueInputSchema,
}).strict();
exports.DomainUpdateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.DomainUpdateManyMutationInputSchema, exports.DomainUncheckedUpdateManyInputSchema]),
    where: exports.DomainWhereInputSchema.optional(),
}).strict();
exports.DomainDeleteManyArgsSchema = zod_1.z.object({
    where: exports.DomainWhereInputSchema.optional(),
}).strict();
exports.LinkCreateArgsSchema = zod_1.z.object({
    select: exports.LinkSelectSchema.optional(),
    include: exports.LinkIncludeSchema.optional(),
    data: zod_1.z.union([exports.LinkCreateInputSchema, exports.LinkUncheckedCreateInputSchema]),
}).strict();
exports.LinkUpsertArgsSchema = zod_1.z.object({
    select: exports.LinkSelectSchema.optional(),
    include: exports.LinkIncludeSchema.optional(),
    where: exports.LinkWhereUniqueInputSchema,
    create: zod_1.z.union([exports.LinkCreateInputSchema, exports.LinkUncheckedCreateInputSchema]),
    update: zod_1.z.union([exports.LinkUpdateInputSchema, exports.LinkUncheckedUpdateInputSchema]),
}).strict();
exports.LinkCreateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.LinkCreateManyInputSchema, exports.LinkCreateManyInputSchema.array()]),
    skipDuplicates: zod_1.z.boolean().optional(),
}).strict();
exports.LinkDeleteArgsSchema = zod_1.z.object({
    select: exports.LinkSelectSchema.optional(),
    include: exports.LinkIncludeSchema.optional(),
    where: exports.LinkWhereUniqueInputSchema,
}).strict();
exports.LinkUpdateArgsSchema = zod_1.z.object({
    select: exports.LinkSelectSchema.optional(),
    include: exports.LinkIncludeSchema.optional(),
    data: zod_1.z.union([exports.LinkUpdateInputSchema, exports.LinkUncheckedUpdateInputSchema]),
    where: exports.LinkWhereUniqueInputSchema,
}).strict();
exports.LinkUpdateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.LinkUpdateManyMutationInputSchema, exports.LinkUncheckedUpdateManyInputSchema]),
    where: exports.LinkWhereInputSchema.optional(),
}).strict();
exports.LinkDeleteManyArgsSchema = zod_1.z.object({
    where: exports.LinkWhereInputSchema.optional(),
}).strict();
exports.TagCreateArgsSchema = zod_1.z.object({
    select: exports.TagSelectSchema.optional(),
    include: exports.TagIncludeSchema.optional(),
    data: zod_1.z.union([exports.TagCreateInputSchema, exports.TagUncheckedCreateInputSchema]),
}).strict();
exports.TagUpsertArgsSchema = zod_1.z.object({
    select: exports.TagSelectSchema.optional(),
    include: exports.TagIncludeSchema.optional(),
    where: exports.TagWhereUniqueInputSchema,
    create: zod_1.z.union([exports.TagCreateInputSchema, exports.TagUncheckedCreateInputSchema]),
    update: zod_1.z.union([exports.TagUpdateInputSchema, exports.TagUncheckedUpdateInputSchema]),
}).strict();
exports.TagCreateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.TagCreateManyInputSchema, exports.TagCreateManyInputSchema.array()]),
    skipDuplicates: zod_1.z.boolean().optional(),
}).strict();
exports.TagDeleteArgsSchema = zod_1.z.object({
    select: exports.TagSelectSchema.optional(),
    include: exports.TagIncludeSchema.optional(),
    where: exports.TagWhereUniqueInputSchema,
}).strict();
exports.TagUpdateArgsSchema = zod_1.z.object({
    select: exports.TagSelectSchema.optional(),
    include: exports.TagIncludeSchema.optional(),
    data: zod_1.z.union([exports.TagUpdateInputSchema, exports.TagUncheckedUpdateInputSchema]),
    where: exports.TagWhereUniqueInputSchema,
}).strict();
exports.TagUpdateManyArgsSchema = zod_1.z.object({
    data: zod_1.z.union([exports.TagUpdateManyMutationInputSchema, exports.TagUncheckedUpdateManyInputSchema]),
    where: exports.TagWhereInputSchema.optional(),
}).strict();
exports.TagDeleteManyArgsSchema = zod_1.z.object({
    where: exports.TagWhereInputSchema.optional(),
}).strict();


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

/***/ "@trpc/server":
/***/ ((module) => {

module.exports = require("@trpc/server");

/***/ }),

/***/ "@trpc/server/adapters/express":
/***/ ((module) => {

module.exports = require("@trpc/server/adapters/express");

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