//priority: 1

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Loading Mekanism Customizations')

//Remove Recipes
onEvent('recipes', event => {
    removeRecipeById([
        'mekanism:atomic_disassembler',
        'mekanism:digital_miner',
        'mekanism:jetpack',
        'mekanism:jetpack_armored',
        /mekanism:meka()/,
        /mekanism:module()/,
        'mekanismgenerators:module_geothermal_generator_unit',
        'mekanismgenerators:module_solar_recharging_unit'
    ])
  
    // event.recipes.createMechanicalCrafting(output, pattern[], {patternKey: input})
    event.recipes.createMechanicalCrafting('mekanism:digital_miner', [
        'CCCCC',
        'CWNWC',
        'CRPRC',
        'CWNWC',
        'CCCCC'
    ],{
        C: '#forge:dusts/copper',
        N: '#forge:dusts/netherite',
        R: 'mekanism:ingot_refined_obsidian',
        P: 'mekanism:pellet_polonium',
        W: 'kubejs:whimsy_nugget'
    })
})