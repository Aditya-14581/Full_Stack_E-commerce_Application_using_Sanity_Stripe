import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import schemas from './schemas/schema'

export default defineConfig({
  name: 'default',
  title: 'Ecommerce',

  projectId: 'df9fd2ci',
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: schemas,
  },
})
