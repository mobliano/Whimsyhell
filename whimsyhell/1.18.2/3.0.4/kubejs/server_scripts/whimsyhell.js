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
        'kubejs:whimsy_dust',
        ],
        '#kubejs:whimsy_ingot_plate_tag'
    )

    // event.recipes.createMechanicalCrafting(output, pattern[], {patternKey: input})
    event.recipes.createMechanicalCrafting('kubejs:whimsy_crystal', [
        'CGUGC',
        'GXRXG',
        'CNPNC',
        'GXRXG',
        'CGUGC'
    ],{
        C: 'apotheosis:common_material',
        U: 'apotheosis:uncommon_material',
        R: 'apotheosis:rare_material',
        G: 'silentgear:glittery_dust',
        N: '#forge:dusts/netherite',
        X: 'forbidden_arcanus:xpetrified_orb',
        P: 'mekanism:pellet_polonium'
    })
    
    event.recipes.createMechanicalCrafting('dragonmounts:dragon_egg', [
        '  D  ',
        ' WDW ',
        'DDPDD',
        ' WDW ',
        '  D  '
    ],{
        D: 'mysticalagriculture:dragon_egg_essence',
        W: 'kubejs:whimsy_nugget',
        P: 'mekanism:pellet_polonium'
    })

    // event.recipes.createMixing('namespace:outputItem', ['namespace:inputItem1', 'namespace:inputItem2']).heated() or .superheated()
    event.recipes.createMixing('kubejs:whimsy_dust', [
        'kubejs:whimsy_crystal',
        '#forge:dusts/netherite'
    ]).superheated()
    
    event.smelting('kubejs:whimsy_ingot', 'kubejs:whimsy_dust')

    // event.recipes.createPressing(output[], input[])
    event.recipes.createPressing([
        'mysticalagradditions:dragon_scale'
    ],[
        'forbidden_arcanus:dragon_scale'
    ])

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
        event.shaped('9x kubejs:whimsy_ingot', [
            '   ',
            ' B ',
            '   '
        ], {
            B: 'kubejs:whimsy_ingot_block'
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

    onEvent('recipes', event => {
        event.shaped('kubejs:whimsy_ingot_block', [
            'III',
            'III',
            'III'
        ], {
            I: 'kubejs:whimsy_ingot'
        })
    })

    // event.recipes.thermal.insolator('namespace:outputItem', 'namespace:inputItem').water()
    // event.recipes.thermal.insolator(['namespace:outputItem1', 'namespace:outputItem2'], 'namespace:inputItem').water()
    event.recipes.thermal.insolator([Item.of('silentgear:nether_banana').withChance(0.1), '6x silentgear:netherwood_log', 'silentgear:netherwood_sapling'], 'silentgear:netherwood_sapling').water(500)
})

// Custom loot tables
onEvent('entity.loot_tables', event => {
    // Update wither loot table that will drop 1 of either Whimsy Nugget (33% chance), or Nether Star (33% chance), or an Apotheosis gem (33% chance)
    event.addEntity('minecraft:wither', table => {
        table.addPool(pool => {
            pool.rolls = 1
            pool.addItem('kubejs:whimsy_nugget', 1)
            pool.addItem('minecraft:nether_star', 1)
            pool.addItem('apotheosis:gem', 1)
        })
    })
})