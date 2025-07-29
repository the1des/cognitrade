// scripts/dev.js

import { execSync } from 'child_process'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

try {
  console.log('📄 Generating blog index...')
  execSync('node generateBlogIndex.js', {
    cwd: __dirname,
    stdio: 'inherit'
  })

  console.log('\n🚀 Launching wrangler dev...\n')
  execSync('wrangler dev', { stdio: 'inherit' })
} catch (err) {
  console.error('❌ Dev script failed:', err.message)
  process.exit(1)
}
