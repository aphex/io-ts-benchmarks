import { Boolean, Number, String, Literal, Array, Tuple, Record, Union } from 'runtypes'

export const getType = () => {
  const Vector = Tuple(Number, Number, Number)

  const Asteroid = Record({
    type: Literal('asteroid'),
    location: Vector,
    mass: Number,
  })

  const Planet = Record({
    type: Literal('planet'),
    location: Vector,
    mass: Number,
    population: Number,
    habitable: Boolean,
  })

  const Rank = Union(Literal('captain'), Literal('first mate'), Literal('officer'), Literal('ensign'))

  const CrewMember = Record({
    name: String,
    age: Number,
    rank: Rank,
    home: Planet,
  })

  const Ship = Record({
    type: Literal('ship'),
    location: Vector,
    mass: Number,
    name: String,
    crew: Array(CrewMember),
  })

  return Union(Asteroid, Planet, Ship)
}
