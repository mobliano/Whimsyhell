//priority: 0

console.info('Loading Whimsyhell Custom Items')

// Custom item registry
onEvent('item.registry', event => {
    // Textures for these items are located at kubejs/assets/kubejs/textures/item/
    // event.create('whimsy_crystal').displayName('§bWhimsy Crystal')
    // event.create('whimsy_dust').displayName('§bWhimsy Dust')
    // event.create('whimsy_ingot').displayName('§bWhimsy Ingot')
    // event.create('whimsy_nugget').displayName('§bWhimsy Nugget')
    // event.create('whimsy_plate').displayName('§bWhimsy Plate')
})

// Custom block registry
onEvent('block.registry', event => {
	// Textures for these items are located at kubejs/assets/kubejs/textures/block/
    // Custom block models are located at kubejs/assets/kubejs/models/block/
	// event.create('whimsy_ingot_block').displayName('§bWhimsy Ingot Block').material('metal').hardness(5.0);
})