import { useState, useEffect } from 'react'
import { FlatList, View, Text, Image, TouchableHighlight } from 'react-native'
import Wrapper from '../Utils/Wrapper'
import { tw } from 'react-native-tailwindcss'
import { useNavigation } from '@react-navigation/native'

export const POKEMON_TYPE_COLORS = {
  normal: '#A8A878',
  fighting: '#C03028',
  flying: '#A890F0',
  poison: '#A040A0',
  ground: '#E0C068',
  rock: '#B8A038',
  bug: '#A8B820',
  ghost: '#705898',
  steel: '#B8B8D0',
  fire: '#FA6C6C',
  water: '#6890F0',
  grass: '#48CFB2',
  electric: '#FFCE4B',
  psychic: '#F85888',
  ice: '#98D8D8',
  dragon: '#7038F8',
  dark: '#705848',
  fairy: '#EE99AC'
}

const getColorPokemonType = (t) => POKEMON_TYPE_COLORS[t.toLowerCase()]

const getPokemons = async (page = 1) => {
  const limit = 12
  const offset = (page === 1) ? 0 : (page - 1) * limit
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
  const pokemons = await response.json()

  const pokemonsArray = []
  try {
    for await (const pokemon of pokemons.results) {
      const pokemonDetails = await getPokemon(pokemon.url)
      pokemonsArray.push({
        id: pokemonDetails.id,
        name: pokemonDetails.name,
        type: pokemonDetails.types[0].type.name,
        order: pokemonDetails.order,
        image: pokemonDetails.sprites.other['official-artwork'].front_default
      })
    }
  } catch (error) {
    console.error(error)
  }

  return pokemonsArray
}

const getPokemon = async (url) => {
  const response = await fetch(url)
  const pokemon = await response.json()
  return pokemon
}

const PokemonDeskCard = (props) => {
  const { pokemon } = props
  const navigation = useNavigation()
  const pokemonColor = getColorPokemonType(pokemon.type)

  // automatic color dark from pokemon color
  const colorDark = (pokemonColor) => {
    const rgb = pokemonColor.replace('#', '').match(/.{2}/g)
    const r = parseInt(rgb[0], 16)
    const g = parseInt(rgb[1], 16)
    const b = parseInt(rgb[2], 16)
    const y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722)
    return (y > 128) ? '#000' : '#FFF'
  }

  const bgStyles = [{
    backgroundColor: pokemonColor,
    border: `2px solid ${colorDark}`,
    height: 120,
    width: '48.5%',
    marginBottom: 10
  }, [tw.shadow2xl, tw.roundedLg]]

  const handlePress = (id) => {
    navigation.navigate('PokemonDetail', { id })
  }

  return (
    <TouchableHighlight key={pokemon.id} onPress={() => handlePress(pokemon.id)} style={bgStyles}>
      <View style={[tw.flex1]}>
        <Text style={{ marginLeft: 10, fontSize: 18, fontWeight: 'bold', position: 'absolute', top: 10, right: 15 }}>{pokemon.id}</Text>
        <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 18 }}>{pokemon.name}</Text>
        <Text style={{ marginLeft: 10, fontSize: 14 }}>Tipo: {pokemon.type}</Text>
        <Image source={{ uri: pokemon.image }} style={{
          position: 'absolute',
          bottom: 2,
          right: 2,
          width: 85,
          height: 85
        }} />
      </View>
    </TouchableHighlight>
  )
}

const Pokedesk = () => {
  const [page, setPage] = useState(1)
  const [pokemons, setPokemons] = useState([])

  const handlePressLoadMore = async () => setPage(page + 1)

  useEffect(() => {
    getPokemons(page).then((_pokemons) => {
      (page === 1) ? setPokemons(_pokemons) : setPokemons([...pokemons, ..._pokemons])
    })
  }, [page])

  return (
    <Wrapper>
      <FlatList
        style={[tw.bgBlue200]}
        data={pokemons}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <PokemonDeskCard pokemon={item} />}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          (
            <View style={{ }}>
              <TouchableHighlight
                style={[tw.p2, tw.h12, tw.mB1, tw.justifyCenter]}
                onPress={handlePressLoadMore}>
                <Text style={[tw.fontBold, tw.textCenter]}>{'Ver más pokemons'}</Text>
              </TouchableHighlight>
            </View>
          )
        }
      />
    </Wrapper>
  )
}

export default Pokedesk
