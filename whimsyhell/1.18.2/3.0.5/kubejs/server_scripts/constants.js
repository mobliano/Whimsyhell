//priority: 1

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Loading Global Constants')

//Global constants
const removeRecipeById = function (recipes) {
  onEvent('recipes', e => {
    recipes.forEach(recipe => {
      e.remove({ id: recipe })
    })
  })
}