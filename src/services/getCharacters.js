import data from '../assets/data.json'

export const getCharacters = () => {
  return new Promise((resolve, reject) => {
    resolve(data)
  })
}
