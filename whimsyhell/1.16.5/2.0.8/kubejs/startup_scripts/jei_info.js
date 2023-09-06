//priority: 0

console.info('Loading JEI Customizations')

onEvent('jei.hide.items', jei => {
  jei.hide([
    /mekanism:(quantum_entangloporter|atomic_disassembler|jetpack()|meka()|module())/,
    /mekanismgenerators:module_geothermal_generator_unit/,
    /lycanitesmobs:(equipment_()|equipmentforge_())/,
    /kubejs:dummy_fluid_item/
  ])
})