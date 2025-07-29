import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const blogDir = path.resolve(__dirname, '../blog')
const outFile = path.resolve(__dirname, '../src/pages/blogIndex.ts')

const slugs = fs
  .readdirSync(blogDir)
  .filter(f => fs.statSync(path.join(blogDir, f)).isDirectory())
  .sort((a, b) => {
    const numA = parseInt(a.split('-')[0], 10)
    const numB = parseInt(b.split('-')[0], 10)
    return numB - numA
  })

let imports = ''
let postsArray = 'export const posts = [\n'

slugs.forEach((slug, index) => {
  const metaVar = `meta${index}`
  const mdVar = `md${index}`
  imports += `import ${metaVar} from '../../blog/${slug}/post.json'\n`
  imports += `import ${mdVar} from '../../blog/${slug}/content'\n`
  postsArray += `  { slug: '${slug}', meta: ${metaVar}, md: ${mdVar} },\n`
})

postsArray += ']'

fs.writeFileSync(outFile, imports + '\n' + postsArray)
console.log(`✅ Generated blogIndex.ts with ${slugs.length} posts (ordered DESC by numeric prefix)`)
