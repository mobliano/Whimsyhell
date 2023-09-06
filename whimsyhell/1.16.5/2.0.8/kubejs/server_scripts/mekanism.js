//priority: 1

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Loading Mekanism Customizations')

//Remove Recipes
onEvent('recipes', event => {
    removeRecipeById([
        'mekanism:quantum_entangloporter',
        'mekanism:atomic_disassembler',
        'mekanism:digital_miner',
        /mekanism:jetpack()/,
        /mekanism:meka()/,
        /mekanism:module()/,
        'mekanismgenerators:module_geothermal_generator_unit'
    ])
  
    // event.recipes.createMechanicalCrafting(output, pattern[], {patternKey: input})
    event.recipes.createMechanicalCrafting('mekanism:digital_miner', [
        'LLLLL',
        'LWNWL',
        'LRPRL',
        'LWNWL',
        'LLLLL'
    ],{
        L: 'kubejs:crushed_lycanite',
        N: 'mekanism:dust_netherite',
        R: 'mekanism:ingot_refined_obsidian',
        P: 'mekanism:pellet_polonium',
        W: 'kubejs:whimsy_nugget'
    })
})