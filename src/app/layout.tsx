import { type Metadata } from 'next'
import glob from 'fast-glob'
import { GoogleAnalytics } from '@next/third-parties/google'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { type Section } from '@/components/SectionProvider'

import '@/styles/styles.scss'

export const metadata: Metadata = {
  title: {
    template: '%s - Lua | Version 5.4 Docs',
    default: 'Lua Version 5.4 Documentation',
  },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  
  let pages = await glob('**/*.mdx', { cwd: 'src/app' })
  let allSectionsEntries = (await Promise.all(
    pages.map(async (filename) => [
      '/' + filename.replace(/(^|\/)page\.mdx$/, ''),
      (await import(`./${filename}`)).sections,
    ]),
  )) as Array<[string, Array<Section>]>
  let allSections = Object.fromEntries(allSectionsEntries)

  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="flex min-h-full bg-white antialiased dark:bg-zinc-900">
        <Providers>
          <div className="w-full">
            <Layout allSections={allSections}>{children}</Layout>
          </div>
        </Providers>
      </body>
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID!} />
    </html>
  )
}
