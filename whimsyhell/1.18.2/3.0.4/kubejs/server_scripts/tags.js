//priority: 1

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Whimsyhell Tags Loaded')

onEvent('item.tags', event => {
    // Whimsy Ingot and Whimsy Plate tag used to crush back to Whimsy Dust
    event.add('kubejs:whimsy_ingot_plate_tag', 'kubejs:whimsy_ingot')
    event.add('kubejs:whimsy_ingot_plate_tag', 'kubejs:whimsy_plate')
})