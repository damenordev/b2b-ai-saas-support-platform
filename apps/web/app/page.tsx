'use client'

import { useQuery } from 'convex/react'
import { SignInButton, UserButton } from '@clerk/nextjs'

import { api } from '@workspace/backend/_generated/api'
import { Authenticated, Unauthenticated } from 'convex/react'

export default function Page() {
  const users = useQuery(api.users.getMany)

  return (
    <>
      <Authenticated>
        <div className="flex flex-col gap-4">
          <p>WEB</p>
          <pre>{JSON.stringify(users, null, 2)}</pre>
        </div>
        <UserButton />
      </Authenticated>
      <Unauthenticated>
        <SignInButton>Sign in</SignInButton>
      </Unauthenticated>
    </>
  )
}
