import api from '../api.json'
import { normalize, schema } from 'normalizr'

// Different schemas here
// Schemas are in singular cause we will define the schema of media
// and category
// const media = new schema.Entity(key, schema definition, options)
const media = new schema.Entity('media', {}, {
  idAttribute: 'id', // in case the id element is not called 'id'
  processStrategy: (value, parent, key) => ({...value, category:parent.id })
})

const category = new schema.Entity('categories', {
  playlist: new schema.Array(media)
})

const categories = { categories: new schema.Array(category)}

const normalizedData = normalize(api, categories);

export default normalizedData;