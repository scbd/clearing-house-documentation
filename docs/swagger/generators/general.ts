// Generator for the shared document operations (v2013). Only "Save Draft" is
// legacy — it is the publish step the v2023 single-call Create/Update
// supersedes (ADR 0002/0003), so it carries the legacy notice and is unlisted.
// All other operations (drafts read/list/delete, locks, securities checks,
// validation, versions, attachments, temporary files) are active and listed;
// they are {uid}-based and schema-agnostic, so documented once per app.
//
// Operations are described compactly (method, full versioned path, params);
// this generator infers each parameter's location and builds the OpenAPI spec.
// Response bodies are documented generically.

const HEADER_PARAMS = new Set(['Authorization', 'Accept', 'Content-Type', 'Realm'])

export interface GeneralOp {
  key: string
  method: 'get' | 'post' | 'put' | 'delete' | 'head'
  path: string
  summary: string
  /** Parameter names; location is inferred (path if in `{}`, header if known, else query). */
  params: string[]
  body?: boolean
}

const paramObject = (name: string, path: string, realm: string) => {
  const inPath = path.includes(`{${name}}`)
  const where = inPath ? 'path' : HEADER_PARAMS.has(name) ? 'header' : 'query'
  const p: Record<string, unknown> = {
    name,
    in: where,
    required: inPath || name === 'Authorization',
    schema: { type: 'string', ...(name === 'Realm' && { example: realm }) }
  }
  if (name === 'Realm') p.description = `Clearing-House context. For this application and environment: \`${realm}\`.`
  return p
}

export interface GeneralSpecOptions {
  apiUrl: string
  realm: string
  op: GeneralOp
}

export const generalSpec = ({ apiUrl, realm, op }: GeneralSpecOptions) => ({
  openapi: '3.0.0',
  info: { title: `${op.summary}`, description: op.summary, version: '2.13.0' },
  servers: [{ url: apiUrl, description: '', variables: {} }],
  security: [{ BearerAuth: [] }, { ApiKeyAuth: [] }],
  components: {
    securitySchemes: {
      BearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      ApiKeyAuth: { type: 'apiKey', in: 'header', name: 'Authorization' }
    }
  },
  paths: {
    [op.path]: {
      [op.method]: {
        summary: op.summary,
        tags: [op.summary],
        security: [{ BearerAuth: [] }, { ApiKeyAuth: [] }],
        parameters: op.params.map((n) => paramObject(n, op.path, realm)),
        ...(op.body && {
          requestBody: {
            required: true,
            content: { 'application/json': { schema: { type: 'object' } } }
          }
        }),
        responses: {
          200: { description: 'Successful response', content: { 'application/json': { schema: { type: 'object' } } } },
          400: { description: 'Bad request' },
          401: { description: 'Unauthorized' },
          403: { description: 'Forbidden' }
        }
      }
    }
  }
})

// The v2013 publishing chain and the attachment/file operations, grouped into
// the pages the archive presented. `legacy: true` topics are the publishing
// chain (unlisted, carry the legacy notice); the rest are normal pages.
export interface GeneralTopic {
  slug: string
  title: string
  intro: string
  legacy: boolean
  ops: GeneralOp[]
}

export const generalTopics: GeneralTopic[] = [
  {
    // The ONLY legacy topic: saving a draft is the v2013 publish step that the
    // v2023 single-call create/update supersedes (ADR 0002/0003). Unlisted.
    slug: 'save-draft', title: 'Save Draft', legacy: true,
    intro: 'Saving a draft is the publish step of the legacy v2013 flow. New integrations should publish with the v2023 single-call Create/Update endpoints instead; this endpoint is documented for existing v2013 integrations.',
    ops: [
      { key: 'save', method: 'put', path: '/api/v2013/documents/{uid}/versions/draft', summary: 'Save a draft', params: ['Authorization', 'uid', 'Content-Type', 'Accept', 'schema'], body: true }
    ]
  },
  {
    slug: 'drafts', title: 'Drafts', legacy: false,
    intro: 'Read, list and remove document drafts. (The v2023 Create/Update endpoints write drafts for you; these endpoints operate on existing drafts directly.)',
    ops: [
      { key: 'get', method: 'get', path: '/api/v2013/documents/{uid}/versions/draft', summary: 'Get a draft', params: ['Authorization', 'uid', 'Accept'] },
      { key: 'get-info', method: 'get', path: '/api/v2013/documents/{uid}/versions/draft/info', summary: 'Get draft info', params: ['Authorization', 'uid', 'Accept'] },
      { key: 'list', method: 'get', path: '/api/v2013/document-drafts', summary: 'List drafts', params: ['Authorization', 'Accept', 'collection', '$filter', '$orderby', '$top', '$skip'] },
      { key: 'exists', method: 'head', path: '/api/v2013/documents/{uid}/versions/draft', summary: 'Check a draft exists', params: ['Authorization', 'uid', 'Accept'] },
      { key: 'delete', method: 'delete', path: '/api/v2013/documents/{uid}/versions/draft', summary: 'Delete a draft', params: ['Authorization', 'uid'] }
    ]
  },
  {
    slug: 'draft-locks', title: 'Draft Locks', legacy: false,
    intro: 'A draft is locked while a workflow runs against it. These endpoints inspect and manage those locks.',
    ops: [
      { key: 'lock', method: 'put', path: '/api/v2013/documents/{uid}/versions/draft/locks/{lockID}', summary: 'Lock a draft', params: ['Authorization', 'uid', 'lockID'] },
      { key: 'unlock', method: 'delete', path: '/api/v2013/documents/{uid}/versions/draft/locks/{lockID}', summary: 'Unlock a draft', params: ['Authorization', 'uid', 'lockID'] },
      { key: 'get', method: 'get', path: '/api/v2013/documents/{uid}/versions/draft/locks/{lockID}', summary: 'Get a draft lock', params: ['uid', 'lockID', 'Realm', 'Accept'] },
      { key: 'list', method: 'get', path: '/api/v2013/documents/{uid}/versions/draft/locks', summary: 'List draft locks', params: ['Authorization', 'uid', 'Accept', 'Realm'] },
      { key: 'exists', method: 'head', path: '/api/v2013/documents/{uid}/versions/draft/locks/{lockID}', summary: 'Check a draft lock exists', params: ['uid', 'lockID', 'Realm', 'Accept'] }
    ]
  },
  {
    slug: 'draft-securities', title: 'Draft Securities', legacy: false,
    intro: 'Pre-flight authorization checks: whether the current user may create, update or delete a draft for the given metadata.',
    ops: [
      { key: 'can-create', method: 'get', path: '/api/v2013/documents/{uid}/versions/draft/securities/create', summary: 'Can create a draft', params: ['Authorization', 'uid', 'schema', 'metadata', 'Realm', 'Accept'] },
      { key: 'can-update', method: 'get', path: '/api/v2013/documents/{uid}/versions/draft/securities/update', summary: 'Can update a draft', params: ['Authorization', 'uid', 'metadata', 'Accept', 'Realm'] },
      { key: 'can-delete', method: 'get', path: '/api/v2013/documents/{uid}/versions/draft/securities/delete', summary: 'Can delete a draft', params: ['Authorization', 'uid', 'Accept', 'Realm'] }
    ]
  },
  {
    slug: 'document-securities', title: 'Document Securities', legacy: false,
    intro: 'Authorization checks against published documents (as opposed to drafts).',
    ops: [
      { key: 'create', method: 'get', path: '/api/v2013/documents/{uid}/securities/create', summary: 'Can create a document', params: ['Authorization', 'uid', 'schema', 'metadata', 'government', 'Accept'] },
      { key: 'update', method: 'get', path: '/api/v2013/documents/{uid}/securities/update', summary: 'Can update a document', params: ['Authorization', 'uid', 'metadata', 'government'] },
      { key: 'delete', method: 'get', path: '/api/v2013/documents/{uid}/securities/delete', summary: 'Can delete a document', params: ['Authorization', 'uid', 'Accept'] }
    ]
  },
  {
    slug: 'document-validations', title: 'Document Validations', legacy: false,
    intro: 'Validate a document against its record-type schema before saving it as a draft.',
    ops: [
      { key: 'validate', method: 'post', path: '/api/v2013/documents/x/validate', summary: 'Validate a document', params: ['Authorization', 'schema'], body: true }
    ]
  },
  {
    slug: 'documents-versions', title: 'Document Versions', legacy: false,
    intro: 'Every publish creates a numbered revision. These endpoints read the revision history of a published document.',
    ops: [
      { key: 'list', method: 'get', path: '/api/v2013/documents/{uid}/versions', summary: 'List document versions', params: ['uid', 'Realm', 'Accept', '$filter', '$orderby', '$top', '$skip'] },
      { key: 'get', method: 'get', path: '/api/v2013/documents/{uid}/versions/{revision}', summary: 'Get a document version', params: ['uid', 'revision', 'Accept', 'Realm'] },
      { key: 'get-info', method: 'get', path: '/api/v2013/documents/{uid}/versions/{revision}/info', summary: 'Get document version info', params: ['uid', 'revision'] },
      { key: 'exists', method: 'head', path: '/api/v2013/documents/{uid}/versions/{revision}', summary: 'Check a document version exists', params: ['uid', 'revision', 'Accept'] }
    ]
  },
  {
    slug: 'document-attachments', title: 'Document Attachments', legacy: false,
    intro: 'Files attached to a document (uploaded to temporary storage first, then persisted onto the record).',
    ops: [
      { key: 'list', method: 'get', path: '/api/v2013/documents/{uid}/attachments', summary: 'List attachments', params: ['Authorization', 'uid', '$filter', '$orderby', '$top', '$skip'] },
      { key: 'get', method: 'get', path: '/api/v2013/documents/{uid}/attachments/{attachmentId}/{guid}/{filename}', summary: 'Get attachment data', params: ['uid', 'guid', 'attachmentId', 'filename'] },
      { key: 'thumbnail', method: 'get', path: '/api/v2013/documents/{uid}/attachments/{attachmentId}/{filename}/{guid}/thumbnail', summary: 'Get attachment thumbnail', params: ['uid', 'guid', 'attachmentId', 'filename'] },
      { key: 'exists', method: 'head', path: '/api/v2013/documents/{uid}/attachments/{attachmentId}', summary: 'Check an attachment exists', params: ['uid', 'attachmentId', 'Accept'] },
      { key: 'create', method: 'post', path: '/api/v2013/documents/{uid}/attachments/{filename}', summary: 'Create an attachment', params: ['uid', 'filename', 'Authorization'], body: true },
      { key: 'persist', method: 'post', path: '/api/v2013/documents/{uid}/attachments/persist-temporary/{tempFileId}', summary: 'Persist an attachment from temporary storage', params: ['uid', 'tempFileId', 'Authorization'] }
    ]
  },
  {
    slug: 'temporary-file', title: 'Temporary Files', legacy: false,
    intro: 'Upload a file to temporary storage and obtain a handle to persist it onto a document as an attachment.',
    ops: [
      { key: 'with-limit', method: 'post', path: '/api/v2015/temporary-files', summary: 'Upload a temporary file (size-limited)', params: ['Authorization'], body: true },
      { key: 'slot-creation', method: 'post', path: '/api/v2015/temporary-files', summary: 'Create a temporary-file upload slot', params: ['Authorization'], body: true },
      { key: 'get-file', method: 'get', path: '/api/v2015/temporary-files/{id}', summary: 'Get temporary-file details', params: ['id', 'Authorization'] }
    ]
  }
]

export const generalTopicBySlug = (slug: string) => generalTopics.find((t) => t.slug === slug)
