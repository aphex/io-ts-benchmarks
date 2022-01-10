import { z } from 'zod'

export const getType = () => {
  const Vector = z.array(z.number())

  const Asteroid = z.object({
    type: z.literal('asteroid'),
    location: Vector,
    mass: z.number(),
  })

  const Planet = z.object({
    type: z.literal('planet'),
    location: Vector,
    mass: z.number(),
    population: z.number(),
    habitable: z.boolean(),
  })

  const Rank = z.enum(["captain", 'first mate', "officer", "ensign"])

  const CrewMember = z.object({
    name: z.string(),
    age: z.number(),
    rank: Rank,
    home: Planet,
  })

  const Ship = z.object({
    type: z.literal('ship'),
    location: Vector,
    mass: z.number(),
    name: z.string(),
    crew: z.array(CrewMember),
  })

  return z.union([Asteroid, Planet, Ship])
}
