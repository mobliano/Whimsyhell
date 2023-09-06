//priority: 0

console.info('Loading JEI Customizations')

onEvent('jei.hide.items', jei => {
  jei.hide([
    /mekanism:(atomic_disassembler|meka()|module()|jetpack())/,
    /mekanismgenerators:module_geothermal_generator_unit/,
    /mekanismgenerators:module_solar_recharging_unit/,
    /kubejs:dummy_fluid_item/
  ])
})