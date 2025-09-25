'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ConvexReactClient } from 'convex/react'
import { ConvexProviderWithClerk } from 'convex/react-clerk'
import { ClerkProvider, useAuth } from '@clerk/nextjs'

if (!process.env.NEXT_PUBLIC_CONVEX_URL) throw new Error('NEXT_PUBLIC_CONVEX_URL is not set')
if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) throw new Error('NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY is not set')

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!)

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  )
}
