import { v } from 'convex/values'

import { query, mutation } from './_generated/server'

export const getMany = query({
  args: {},
  handler: async ctx => {
    const users = await ctx.db.query('users').collect()
    return users
  },
})

export const add = mutation({
  args: {
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    if (identity === null) throw new Error('Not authenticated')
    const userId = await ctx.db.insert('users', { name: args.name })
    return userId
  },
})

export const get = query({
  args: {
    id: v.id('users'),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db.get(args.id)
    return user
  },
})

export const update = mutation({
  args: {
    id: v.id('users'),
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    if (identity === null) throw new Error('Not authenticated')
    await ctx.db.patch(args.id, { name: args.name })
  },
})

export const remove = mutation({
  args: {
    id: v.id('users'),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    if (identity === null) throw new Error('Not authenticated')
    await ctx.db.delete(args.id)
  },
})
