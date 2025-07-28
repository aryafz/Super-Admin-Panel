# SaaS Super Admin Panel

This project provides a basic scaffold for a Super Admin Panel built with **React Admin**, **TypeScript**, and **Vite**. It authenticates via JWT against a NestJS backend and demonstrates multi‑tenant support using a tenant header.

## Setup

1. Install dependencies:
   ```bash
   npm ci
   ```
2. Copy `.env.example` to `.env` and set the API url and any custom token/tenant keys.
3. Run the dev server:
   ```bash
   npm run dev
   ```

## Project Structure

- `src/auth` – authProvider and auth utilities.
- `src/data` – axios http client and react-admin dataProvider.
- `src/components` – shared UI components such as the `TenantSelector`.
- `src/resources` – react-admin resources (example: Users).

## Adding Resources

Create a folder under `src/resources/<name>` with `list.tsx`, `create.tsx`, `edit.tsx`, and `show.tsx`. Export them via `index.ts` and register the resource inside `App.tsx`.

## Tenant Selector

`TenantSelector` manages the currently selected site and sets the tenant header for site‑bound API calls using `httpClient`.
