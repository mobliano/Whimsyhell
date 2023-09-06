//priority: 1

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Loading Apotheosis Customizations')

//Remove Recipes
onEvent('recipes', event => {
    // event.recipes.createCrushing(output[], input[])
    event.recipes.createCrushing(
        'apotheosis:gem_dust',
        'apotheosis:gem'
    )

    // event.recipes.mekanismCrushing(output, input)
    event.recipes.mekanismCrushing(
        'apotheosis:gem_dust',
        'apotheosis:gem'
    )

    event.recipes.thermal.pulverizer(
        'apotheosis:gem_dust',
        'apotheosis:gem'
    ).energy(5000)
})