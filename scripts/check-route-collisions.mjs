import { existsSync, readdirSync } from 'node:fs';
import path from 'node:path';

const appDir = path.join(process.cwd(), 'app');
const marketingDir = path.join(appDir, '(marketing)');

if (!existsSync(marketingDir)) {
  console.log('No app/(marketing) directory found. Route collision guard skipped.');
  process.exit(0);
}

const collisions = [];

const topLevelPage = path.join(appDir, 'page.tsx');
const marketingHomePage = path.join(marketingDir, 'page.tsx');
if (existsSync(topLevelPage) && existsSync(marketingHomePage)) {
  collisions.push('/ (app/page.tsx and app/(marketing)/page.tsx)');
}

const topLevelEntries = readdirSync(appDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .filter((name) => !name.startsWith('('));

for (const segment of topLevelEntries) {
  const topLevelRoutePage = path.join(appDir, segment, 'page.tsx');
  const marketingRoutePage = path.join(marketingDir, segment, 'page.tsx');

  if (existsSync(topLevelRoutePage) && existsSync(marketingRoutePage)) {
    collisions.push(`/${segment}`);
  }
}

if (collisions.length > 0) {
  console.error('Route collision(s) detected between top-level app routes and app/(marketing):');
  for (const route of collisions) {
    console.error(`- ${route}`);
  }
  process.exit(1);
}

console.log('Route collision guard passed: no duplicate marketing routes found.');
