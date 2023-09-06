//priority: 1

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Whimsyhell Tags Loaded')

// onEvent('item.tags', event => {
//     // Whimsy Ingot and Whimsy Plate tag used to crush back to Whimsy Dust
//     event.add('kubejs:whimsy_ingot_plate_tag', 'kubejs:whimsy_ingot')
//     event.add('kubejs:whimsy_ingot_plate_tag', 'kubejs:whimsy_plate')
// })


// I tried to add biome tagging, but apparently the 1.18.2 version of kubejs doesn't support it.
// onEvent('worldgen/biome', event => {
//     event.add('kubejs:fire_dragon_biomes', [
//         '#forge:is_hot/overworld',
//         '#forge:is_dry/overworld',
//         '#forge:is_plains',
//         '#forge:is_desert',
//         '#forge:is_savanna',
//         '#forge:is_sandy',
//         '#forge:is_plateau',
//         'terralith:desert_canyon',
//         'terralith:ancient_sands',
//         'terralith:arid_highlands',
//         'terralith:ashen_savanna',
//         'terralith:basalt_cliffs',
//         'terralith:bryce_canyon',
//         'terralith:caldera',
//         'terralith:desert_oasis',
//         'terralith:desert_spires',
//         'terralith:fractured_savanna',
//         'terralith:gravel_desert',
//         'terralith:desert_oasis',
//         'terralith:hot_shrubland',
//         'terralith:painted_mountains',
//         'terralith:red_oasis',
//         'terralith:sandstone_valley',
//         'terralith:savanna_badlands',
//         'terralith:savanna_slopes',
//         'terralith:shrubland',
//         'terralith:skylands_spring',
//         'terralith:skylands_summer',
//         'terralith:valley_clearing',
//         'terralith:volcanic_crater',
//         'terralith:volcanic_peaks',
//         'terralith:white_cliffs',
//         'terralith:white_mesa',
//         'terralith:yellowstone',
//         'terralith:yosemite_cliffs',
//         'terralith:yosemite_lowlands'
//     ])
//     event.add('kubejs:ice_dragon_biomes', [
//         '#forge:is_cold/overworld', 
//         '#forge:is_snowy',
//         'terralith:alpha_islands_winter',
//         'terralith:alpine_grove',
//         'terralith:alpine_highlands',
//         'terralith:birch_taiga',
//         'terralith:cloud_forest',
//         'terralith:forested_highlands',
//         'terralith:cold_shrubland',
//         'terralith:glacial_chasm',
//         'terralith:frozen_cliffs',
//         'terralith:highlands',
//         'terralith:ice_marsh',
//         'terralith:lavender_forest',
//         'terralith:mountain_steppe',
//         'terralith:rocky_mountains',
//         'terralith:rocky_shrubland',
//         'terralith:scarlet_mountains',
//         'terralith:shield',
//         'terralith:siberian_grove',
//         'terralith:siberian_taiga',
//         'terralith:skylands_autumn',
//         'terralith:skylands_winter',
//         'terralith:snowy_badlands',
//         'terralith:snowy_maple_forest',
//         'terralith:snowy_shield',
//         'terralith:stony_spires',
//         'terralith:valley_clearing',
//         'terralith:windswept_spires',
//         'terralith:wintry_forest',
//         'terralith:yosemite_cliffs'
//     ])
//     event.add('kubejs:lightning_dragon_biomes', [
//         '#forge:is_swamp', 
//         '#forge:is_coniferous',
//         '#forge:is_rare',
//         '#minecraft:is_jungle',
//         '#forge:is_savanna',
//         'terralith:alpha_islands',
//         'terralith:amethyst_canyon',
//         'terralith:amethyst_rainforest',
//         'terralith:blooming_plateau',
//         'terralith:blooming_valley',
//         'terralith:emerald_peaks',
//         'terralith:granite_cliffs',
//         'terralith:gravel_beach',
//         'terralith:haze_mountain',
//         'terralith:jungle_mountains',
//         'terralith:lush_valley',
//         'terralith:mirage_isles',
//         'terralith:moonlight_grove',
//         'terralith:moonlight_valley',
//         'terralith:orchid_swamp',
//         'terralith:rocky_jungle',
//         'terralith:sakura_grove',
//         'terralith:sakura_valley',
//         'terralith:steppe',
//         'terralith:temperate_highlands',
//         'terralith:tropical_jungle',
//         'terralith:valley_clearing',
//         'terralith:warped_mesa',
//         'terralith:yosemite_cliffs',
//         'terralith:yosemite_lowlands'
//     ])
//     event.add('kubejs:fire_dragon_caves', [
//         '#kubejs:fire_dragon_biomes', 
//         '#forge:is_underground',
//         'terralith:cave/thermal_caves',
//         'terralith:cave/infested_caves',
//         'terralith:cave/granite_caves',
//         'terralith:cave/desert_caves',
//         'terralith:cave/andesite_caves',
//         'terralith:cave/mantle_caves',
//         'terralith:cave/deep_caves',
//         'terralith:cave/tuff_caves'
//     ])
//     event.add('kubejs:ice_dragon_caves', [
//         '#kubejs:ice_dragon_biomes', 
//         'terralith:cave/frostfire_caves',
//         'terralith:cave/ice_caves'
//     ])
//     event.add('kubejs:lightning_dragon_caves', [
//         '#kubejs:lightning_dragon_biomes', 
//         '#forge:is_underground',
//         'terralith:cave/deep_caves',
//         'terralith:cave/crystal_caves',
//         'terralith:cave/underground_jungle',
//         'terralith:cave/thermal_caves',
//         'terralith:cave/fungal_caves',
//         'terralith:cave/diorite_caves',
//         'terralith:cave/andesite_caves'
//     ])
// })
