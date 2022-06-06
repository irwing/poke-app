import { useState, useEffect } from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import Wrapper from '../Utils/Wrapper'
import { useNavigation } from '@react-navigation/native'
import { tw } from 'react-native-tailwindcss'

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

const pokeball = require('../../../assets/pokeball.png')

const getPokemon = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const pokemon = await response.json()
  const pokemonDetails = {
    id: pokemon.id,
    name: pokemon.name,
    type: pokemon.types[0].type.name,
    image: pokemon.sprites.other['official-artwork'].front_default,
    stats: pokemon.stats,
    sprites: pokemon.sprites
  }
  return pokemonDetails
}

const Detail = (props) => {
  const navigation = useNavigation()
  const { pokemon } = props
  const { name, image, type } = pokemon
  const pokemonColor = getColorPokemonType(type)
  const bgView = [
    { backgroundColor: pokemonColor },
    [tw.itemsCenter, tw.roundedLg, tw.shadow2xl, tw.pY5]
  ]

  const handlePressToggleFavorite = () => {
    console.log('Favorite')
  }

  const handlePressBack = (id) => {
    navigation.navigate('Pokedesk')
  }

  return (
    <>
      <View style={bgView}>
        <TouchableWithoutFeedback onPress={handlePressBack}>
          <View style={{
            position: 'absolute',
            top: 0,
            left: 0
          }}>
            <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 18 }}> {'<-'} </Text>
          </View>
        </TouchableWithoutFeedback>

        <Image source={{ uri: image }} style={{ width: 160, height: 160 }} />
        <Text style={[tw.text4xl]}>{name}</Text>
        <Text style={[tw.bgWhite, tw.rounded, tw.textXl, tw.pX4, tw.pY1, tw.uppercase]}>{type}</Text>
      </View>
      <View style={[tw.pX10, tw.mT2]}>
        <Stats pokemon={pokemon} style={[tw.flexRow]} />
        <TouchableWithoutFeedback onPress={() => handlePressToggleFavorite()}>
          <View style={[{ opacity: 0.5, alignItems: 'center', marginTop: 5 }]}>
            <Image style={{ width: 120, height: 120 }} source={pokeball} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </>
  )
}

const Stats = (props) => {
  const { pokemon } = props
  const { stats } = pokemon

  return stats.map((_stat) => {
    const { base_stat: baseStat, stat: { name } } = _stat
    return (
      <View key={name} style={[tw.flexRow, tw.justifyBetween, tw.borderB2, tw.borderGray500, tw.p2]}>
        <Text style={[tw.textLg, tw.textCenter, tw.uppercase, tw.mB1]}>{name}:</Text>
        <Text style={[tw.textLg, tw.textCenter, tw.uppercase, tw.mB1]}>{baseStat}</Text>
      </View>
    )
  })
}

const PokemonDetail = (props) => {
  const { route: { params } } = props
  const { id } = params
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    getPokemon(id).then((_pokemon) => setPokemon(_pokemon))
  }, [])

  return (
    <Wrapper>
      {!pokemon.id && (<View><Text>Loading...</Text></View>)}
      {pokemon?.id && (<Detail pokemon={pokemon} />)}
    </Wrapper>
  )
}

export default PokemonDetail
