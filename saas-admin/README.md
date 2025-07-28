# Uper Admin Panel

Production-ready multi-tenant admin panel built with **react-admin**, **Vite**, and **MUI**.

## Prerequisites

- Node.js and npm

## Environment Variables

Copy `.env.example` to `.env` and fill in values:

```
VITE_API_URL=<backend-url>
VITE_TOKEN_KEY=access_token
VITE_AUTH_STORAGE_KEY=saas_admin_token
VITE_TENANT_HEADER_NAME=x-tenant-id
```

## Installation & Run

```bash
npm ci
npm run dev
```

## Adding Resources

Create a folder under `src/resources/<name>` with `list.tsx`, `create.tsx`, `edit.tsx`, and `show.tsx`, then export them via `index.ts` and register in `App.tsx`.

## Tenant Selector

`TenantSelector` in the top bar loads sites and sets the tenant header for site-bound resources automatically.
