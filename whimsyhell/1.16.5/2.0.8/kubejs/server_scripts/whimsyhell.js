//priority: 1

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Loading Whimsyhell Custom Recipes')

onEvent('recipes', event => {
    // Use constant removeRecipeById() method to remove recipes
    removeRecipeById([
        'kubejs:dummy_fluid_item'
    ])

    // event.recipes.createCrushing(output[], input[])
    event.recipes.createCrushing([
        '2x kubejs:crushed_lycanite',
        Item.of('kubejs:crushed_lycanite').withChance(0.5)
        ],
        '#kubejs:lycanite_tag'
    )
    
    event.recipes.createCrushing([
        'kubejs:whimsy_dust',
        ],
        '#kubejs:whimsy_ingot_plate_tag'
    )

    // event.recipes.createMechanicalCrafting(output, pattern[], {patternKey: input})
    event.recipes.createMechanicalCrafting('kubejs:whimsy_crystal', [
        'LLLLL',
        'LXDXL',
        'LIPIL',
        'LXDXL',
        'LLLLL'
    ],{
        L: 'kubejs:crushed_lycanite',
        I: 'theabyss:incorythe_gem',
        D: '#forge:dusts/lithium',
        X: 'forbidden_arcanus:xpetrified_orb',
        P: 'mekanism:pellet_polonium'
    })

    // event.recipes.mekanismMetallurgicInfusing(output, inputItem, infusionInput, infusionAmount)
    // event.recipes.mekanismMetallurgicInfusing(
        // 'kubejs:whimsy_dust',
        // 'kubejs:whimsy_crystal',
        // 'mekanism:refined_obsidian',
        // 40
    // )
    
    // event.recipes.mekanismMetallurgicInfusing(
        // 'kubejs:whimsy_ingot',
        // 'kubejs:whimsy_dust',
        // 'mekanism:refined_obsidian',
        // 80
    // )
    
    // event.recipes.createMixing('namespace:outputItem', ['namespace:inputItem1', 'namespace:inputItem2']).heated() or .superheated()
    event.recipes.createMixing('kubejs:whimsy_dust', [
        'kubejs:whimsy_crystal',
        'mekanism:dust_netherite'
    ]).superheated()
    
    event.recipes.createMixing('kubejs:whimsy_ingot', [
        'kubejs:whimsy_dust',
        'silentgems:magma_cream_crystal'
    ]).superheated()
    
    // event.recipes.createPressing(output[], input[])
    event.recipes.createPressing([
        'kubejs:whimsy_plate'
    ],[
        'kubejs:whimsy_ingot'
    ])

    // event.shaped()
    onEvent('recipes', event => {
        event.shaped('9x kubejs:whimsy_nugget', [
            '   ',
            ' I ',
            '   '
        ], {
            I: 'kubejs:whimsy_ingot'
        })
    })
    
    onEvent('recipes', event => {
        event.shaped('kubejs:whimsy_ingot', [
            'NNN',
            'NNN',
            'NNN'
        ], {
            N: 'kubejs:whimsy_nugget'
        })
    })
})

// Custom loot tables
onEvent('entity.loot_tables', event => {
    // Update wither loot table that will drop 1 of either Whimsy Nugget (50% chance) or Nether Star (50% chance)
    event.addEntity('minecraft:wither', table => {
        table.addPool(pool => {
            pool.rolls = 1
            pool.addItem('kubejs:whimsy_nugget', 1)
            pool.addItem('minecraft:nether_star', 1)
        })
    })
})