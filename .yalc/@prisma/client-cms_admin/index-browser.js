
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.16.2
 * Query Engine version: 4bc8b6e1b66cb932731fb1bdbbc550d1e010de81
 */
Prisma.prismaVersion = {
  client: "4.16.2",
  engine: "4bc8b6e1b66cb932731fb1bdbbc550d1e010de81"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AuditsScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  auditId: 'auditId',
  auditType: 'auditType',
  userId: 'userId',
  username: 'username',
  action: 'action',
  auditChanges: 'auditChanges',
  version: 'version'
};

exports.Prisma.SiteTemplateScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  isDeleted: 'isDeleted',
  name: 'name',
  template: 'template'
};

exports.Prisma.SiteTemplateDataDefScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  isDeleted: 'isDeleted',
  siteTemplateId: 'siteTemplateId',
  defData: 'defData'
};

exports.Prisma.CustomerScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  isDeleted: 'isDeleted',
  name: 'name',
  extendData: 'extendData',
  kanzhunRaw: 'kanzhunRaw',
  prevExtendData: 'prevExtendData'
};

exports.Prisma.CustomerRawScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  isDeleted: 'isDeleted',
  ref: 'ref',
  target: 'target',
  name: 'name',
  address: 'address',
  region: 'region',
  phone: 'phone',
  email: 'email',
  websites: 'websites',
  contact: 'contact',
  mobile: 'mobile',
  qq: 'qq',
  desc: 'desc',
  scope: 'scope',
  biz: 'biz',
  logo: 'logo'
};

exports.Prisma.SiteScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  isDeleted: 'isDeleted',
  name: 'name',
  status: 'status',
  cosUrl: 'cosUrl',
  siteTemplateId: 'siteTemplateId',
  customerId: 'customerId',
  slotData: 'slotData',
  projectId: 'projectId'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  emailVerified: 'emailVerified',
  image: 'image',
  createdAt: 'createdAt'
};

exports.Prisma.AccountScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  provider: 'provider',
  providerAccountId: 'providerAccountId',
  refresh_token: 'refresh_token',
  refresh_token_expires_in: 'refresh_token_expires_in',
  access_token: 'access_token',
  expires_at: 'expires_at',
  token_type: 'token_type',
  scope: 'scope',
  id_token: 'id_token',
  session_state: 'session_state'
};

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  sessionToken: 'sessionToken',
  userId: 'userId',
  expires: 'expires'
};

exports.Prisma.VerificationTokenScalarFieldEnum = {
  identifier: 'identifier',
  token: 'token',
  expires: 'expires'
};

exports.Prisma.ProjectScalarFieldEnum = {
  id: 'id',
  name: 'name',
  slug: 'slug',
  logo: 'logo',
  password: 'password',
  type: 'type',
  usage: 'usage',
  usageLimit: 'usageLimit',
  plan: 'plan',
  stripeId: 'stripeId',
  billingCycleStart: 'billingCycleStart',
  region: 'region',
  endpoint: 'endpoint',
  bucket: 'bucket',
  useHost: 'useHost',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  isDeleted: 'isDeleted'
};

exports.Prisma.ProjectInviteScalarFieldEnum = {
  email: 'email',
  expires: 'expires',
  projectId: 'projectId',
  createdAt: 'createdAt'
};

exports.Prisma.ProjectUsersScalarFieldEnum = {
  id: 'id',
  role: 'role',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId',
  projectId: 'projectId',
  isDeleted: 'isDeleted'
};

exports.Prisma.SentEmailScalarFieldEnum = {
  id: 'id',
  type: 'type',
  createdAt: 'createdAt',
  projectId: 'projectId'
};

exports.Prisma.DomainScalarFieldEnum = {
  id: 'id',
  slug: 'slug',
  verified: 'verified',
  target: 'target',
  type: 'type',
  description: 'description',
  projectId: 'projectId',
  primary: 'primary',
  lastChecked: 'lastChecked',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.LinkScalarFieldEnum = {
  id: 'id',
  domain: 'domain',
  key: 'key',
  url: 'url',
  archived: 'archived',
  expiresAt: 'expiresAt',
  password: 'password',
  proxy: 'proxy',
  title: 'title',
  description: 'description',
  image: 'image',
  utm_source: 'utm_source',
  utm_medium: 'utm_medium',
  utm_campaign: 'utm_campaign',
  utm_term: 'utm_term',
  utm_content: 'utm_content',
  rewrite: 'rewrite',
  ios: 'ios',
  android: 'android',
  userId: 'userId',
  projectId: 'projectId',
  clicks: 'clicks',
  publicStats: 'publicStats',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  tagId: 'tagId',
  isDeleted: 'isDeleted'
};

exports.Prisma.TagScalarFieldEnum = {
  id: 'id',
  name: 'name',
  color: 'color',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  projectId: 'projectId'
};

exports.Prisma.ImageLibraryScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  isDeleted: 'isDeleted',
  unsplashId: 'unsplashId',
  tag: 'tag',
  urls: 'urls',
  css: 'css'
};

exports.Prisma.ContactScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  isDeleted: 'isDeleted',
  siteId: 'siteId',
  contact: 'contact'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.AuditsOrderByRelevanceFieldEnum = {
  auditType: 'auditType',
  userId: 'userId',
  username: 'username',
  action: 'action',
  auditChanges: 'auditChanges'
};

exports.Prisma.SiteTemplateOrderByRelevanceFieldEnum = {
  name: 'name',
  template: 'template'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.CustomerOrderByRelevanceFieldEnum = {
  name: 'name'
};

exports.Prisma.CustomerRawOrderByRelevanceFieldEnum = {
  ref: 'ref',
  target: 'target',
  name: 'name',
  address: 'address',
  region: 'region',
  phone: 'phone',
  email: 'email',
  contact: 'contact',
  mobile: 'mobile',
  qq: 'qq',
  desc: 'desc',
  scope: 'scope',
  biz: 'biz',
  logo: 'logo'
};

exports.Prisma.SiteOrderByRelevanceFieldEnum = {
  name: 'name',
  cosUrl: 'cosUrl',
  projectId: 'projectId'
};

exports.Prisma.UserOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  image: 'image'
};

exports.Prisma.AccountOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  provider: 'provider',
  providerAccountId: 'providerAccountId',
  refresh_token: 'refresh_token',
  access_token: 'access_token',
  token_type: 'token_type',
  scope: 'scope',
  id_token: 'id_token',
  session_state: 'session_state'
};

exports.Prisma.SessionOrderByRelevanceFieldEnum = {
  id: 'id',
  sessionToken: 'sessionToken',
  userId: 'userId'
};

exports.Prisma.VerificationTokenOrderByRelevanceFieldEnum = {
  identifier: 'identifier',
  token: 'token'
};

exports.Prisma.ProjectOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  slug: 'slug',
  logo: 'logo',
  password: 'password',
  type: 'type',
  plan: 'plan',
  stripeId: 'stripeId',
  region: 'region',
  endpoint: 'endpoint',
  bucket: 'bucket',
  useHost: 'useHost'
};

exports.Prisma.ProjectInviteOrderByRelevanceFieldEnum = {
  email: 'email',
  projectId: 'projectId'
};

exports.Prisma.ProjectUsersOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  projectId: 'projectId'
};

exports.Prisma.SentEmailOrderByRelevanceFieldEnum = {
  id: 'id',
  projectId: 'projectId'
};

exports.Prisma.DomainOrderByRelevanceFieldEnum = {
  id: 'id',
  slug: 'slug',
  target: 'target',
  type: 'type',
  description: 'description',
  projectId: 'projectId'
};

exports.Prisma.LinkOrderByRelevanceFieldEnum = {
  id: 'id',
  domain: 'domain',
  key: 'key',
  url: 'url',
  password: 'password',
  title: 'title',
  description: 'description',
  image: 'image',
  utm_source: 'utm_source',
  utm_medium: 'utm_medium',
  utm_campaign: 'utm_campaign',
  utm_term: 'utm_term',
  utm_content: 'utm_content',
  ios: 'ios',
  android: 'android',
  userId: 'userId',
  projectId: 'projectId',
  tagId: 'tagId'
};

exports.Prisma.TagOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  color: 'color',
  projectId: 'projectId'
};

exports.Prisma.ImageLibraryOrderByRelevanceFieldEnum = {
  unsplashId: 'unsplashId',
  tag: 'tag',
  css: 'css'
};

exports.Prisma.ContactOrderByRelevanceFieldEnum = {
  contact: 'contact'
};
exports.SiteStatus = {
  generated: 'generated',
  passed: 'passed',
  failed: 'failed'
};

exports.Role = {
  owner: 'owner',
  member: 'member'
};

exports.EmailType = {
  firstDomainInvalidEmail: 'firstDomainInvalidEmail',
  secondDomainInvalidEmail: 'secondDomainInvalidEmail',
  firstUsageLimitEmail: 'firstUsageLimitEmail',
  secondUsageLimitEmail: 'secondUsageLimitEmail'
};

exports.Prisma.ModelName = {
  Audits: 'Audits',
  SiteTemplate: 'SiteTemplate',
  SiteTemplateDataDef: 'SiteTemplateDataDef',
  Customer: 'Customer',
  CustomerRaw: 'CustomerRaw',
  Site: 'Site',
  User: 'User',
  Account: 'Account',
  Session: 'Session',
  VerificationToken: 'VerificationToken',
  Project: 'Project',
  ProjectInvite: 'ProjectInvite',
  ProjectUsers: 'ProjectUsers',
  SentEmail: 'SentEmail',
  Domain: 'Domain',
  Link: 'Link',
  Tag: 'Tag',
  ImageLibrary: 'ImageLibrary',
  Contact: 'Contact'
};

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
