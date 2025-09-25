import { fetchQuery } from 'convex/nextjs'

import { api } from '@workspace/backend/_generated/api'

export default async function Page() {
  const users = await fetchQuery(api.users.getMany)

  return (
    <div className="flex items-center justify-center min-h-svh">
      <p>WIDGET</p>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  )
}
