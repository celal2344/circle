# Circle Agent Skills

This note tracks agent skills that are relevant to Circle. Installed local skills can be used immediately; external candidates should be reviewed before installation.

## Use Immediately

- `obsidian-vault`: maintain project notes and wikilinked context.
- `grill-with-docs`: stress-test plans and keep `CONTEXT.md`/ADRs aligned.
- `supabase`: Supabase auth, RLS, Edge Functions, migrations, and docs lookup.
- `supabase-postgres-best-practices`: Postgres schema, query, index, and RLS review.
- `nextjs-app-router-patterns`: Next.js Admin app architecture.
- `shadcn`: Admin UI components and shadcn conventions.
- `turborepo`: monorepo task orchestration and package boundaries.
- `tdd`: test-first implementation when a slice needs tight behavioral guarantees.
- `diagnose`: structured debugging loop for failures and regressions.
- `triage`: issue intake and readiness workflow.
- `to-prd`: turn project discussion into PRD updates.
- `to-issues`: break roadmap/spec work into implementation issues.
- `improve-codebase-architecture`: periodic architecture review as code grows.
- `github:github`, `github:yeet`, `github:gh-fix-ci`, `github:gh-address-comments`: repository, PR, CI, and review workflows.

## External Candidates To Evaluate

These came from `npx skills find` searches. Prefer higher-install and reputable sources, then inspect the skill before installing.

- `nexu-io/open-design@shadcn-ui` - shadcn UI guidance, 1.4K installs.  
  https://skills.sh/nexu-io/open-design/shadcn-ui
- `nexu-io/open-design@web-design-guidelines` - general web design guidance, 2.2K installs.  
  https://skills.sh/nexu-io/open-design/web-design-guidelines
- `giuseppe-trisciuoglio/developer-kit@turborepo-monorepo` - Turborepo monorepo guidance, 1.4K installs.  
  https://skills.sh/giuseppe-trisciuoglio/developer-kit/turborepo-monorepo
- `giuseppe-trisciuoglio/developer-kit@tailwind-design-system` - Tailwind design system guidance, 1.7K installs.  
  https://skills.sh/giuseppe-trisciuoglio/developer-kit/tailwind-design-system
- `sickn33/antigravity-awesome-skills@react-nextjs-development` - React/Next.js development, 1.1K installs.  
  https://skills.sh/sickn33/antigravity-awesome-skills/react-nextjs-development
- `pproenca/dot-skills@expo-react-native-performance` - Expo/React Native performance, 893 installs.  
  https://skills.sh/pproenca/dot-skills/expo-react-native-performance
- `jezweb/claude-skills@react-native` - React Native guidance, 983 installs.  
  https://skills.sh/jezweb/claude-skills/react-native
- `shipshitdev/library@playwright-e2e-init` - Playwright E2E setup, 288 installs.  
  https://skills.sh/shipshitdev/library/playwright-e2e-init
- `adobe/skills@appbuilder-e2e-testing` - E2E testing workflow, 360 installs.  
  https://skills.sh/adobe/skills/appbuilder-e2e-testing

## Lower-Priority Candidates

- `secondsky/claude-skills@supabase-postgres-best-practices` - Supabase/Postgres, 284 installs. Already covered locally by `supabase-postgres-best-practices`.
- `hairyf/skills@react-native-expo` - React Native/Expo, 219 installs.
- `coleam00/archon@triage` - triage, 136 installs. Already covered locally by `triage`.
- `akillness/oh-my-skills@to-prd` - PRD workflow, 136 installs. Already covered locally by `to-prd`.

## Current Recommendation

Do not install more skills immediately. The local skill set already covers the main project work. Revisit external installs when starting a specific phase:

- Web/Admin UI phase: evaluate `nexu-io/open-design@shadcn-ui`.
- Mobile performance phase: evaluate `pproenca/dot-skills@expo-react-native-performance`.
- E2E setup phase: evaluate `shipshitdev/library@playwright-e2e-init`.

Related: [[docs/conventions]], [[docs/architecture]], [[docs/roadmap]]
