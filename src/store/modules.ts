import camelCase from 'lodash/camelCase'

const requireModule = require.context('./modules', false, /\.ts$/)
const modules: any = {}

requireModule.keys().forEach(fileName => {
  const moduleName = camelCase(
    fileName.replace(/(\.\/|\.ts)/g, '')
  )

  modules[moduleName] = {
    namespaced: true,
    ...requireModule(fileName)
  }
})

export default modules
