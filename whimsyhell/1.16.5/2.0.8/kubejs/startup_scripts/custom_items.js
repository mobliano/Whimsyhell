//priority: 0

console.info('Loading Whimsyhell Custom Items')

onEvent('item.registry', event => {
    // Textures for these items are located at kubejs/assets/kubejs/textures/item/
    event.create('crushed_lycanite').displayName('Crushed Lycanite')
    event.create('whimsy_crystal').displayName('Whimsy Crystal')
    event.create('whimsy_dust').displayName('Whimsy Dust')
    event.create('whimsy_ingot').displayName('Whimsy Ingot')
    event.create('whimsy_nugget').displayName('Whimsy Nugget')
    event.create('whimsy_plate').displayName('Whimsy Plate')
})