const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5001

app.use(cors())
app.use(express.json())

// Example: GET http://localhost:5001/api/type/fire
app.get('/api/type/:name', async (req, res) => {
  const typeName = encodeURIComponent(req.params.name.toLowerCase())

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${typeName}/`)
    const data = await response.json()

    if (!response.ok) {
      return res.status(response.status).json({ message: data.message || 'PokéAPI request failed.' })
    }

    const damageRelations = data.damage_relations
    res.json({
      half_damage_to: damageRelations.half_damage_to.map(({ name }) => name),
      double_damage_from: damageRelations.double_damage_from.map(({ name }) => name),
    })
  } catch (error) {
    console.error('Failed to fetch Pokémon type:', error)
    res.status(502).json({ message: 'Unable to reach PokéAPI.' })
  }
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
