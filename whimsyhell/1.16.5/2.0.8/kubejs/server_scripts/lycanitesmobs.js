//priority: 1

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Loading Lycanites Mobs Customizations')

//Remove Recipes
onEvent('recipes', event => {
  removeRecipeById([
    /lycanitesmobs:equipment_()/,
    /lycanitesmobs:equipmentforge_()/
  ])
})