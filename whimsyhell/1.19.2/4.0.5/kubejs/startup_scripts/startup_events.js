// priority: 0

console.info('KubeJS - Loading Whimsyhell Startup Events')

// Custom item registry
StartupEvents.registry('item', event => {
    // Textures for these items are located at kubejs/assets/whimsyhell/textures/item/
    // event.create('whimsyhell:whimsy_crystal').displayName('§bWhimsy Crystal')
    
    event.create('whimsyhell:whimsy_dust')
    .displayName('§bWhimsy Dust')
    .rarity('epic')
    .glow(true)
    
    event.create('whimsyhell:whimsy_ingot')
    .displayName('§bWhimsy Ingot')
    .rarity('epic')
    .glow(true)

    // event.create('whimsyhell:whimsy_nugget').displayName('§bWhimsy Nugget')
    // event.create('whimsyhell:whimsy_plate').displayName('§bWhimsy Plate')

    event.create('whimsyhell:whimsy_sword', 'sword')
    .tier('netherite')
    .rarity('epic')
    .glow(true)
    .attackDamageBaseline(45.0)
    .speedBaseline(5.0)
    .maxDamage(8000)
    .tooltip("§5Enemies hear a whimsical slice!")  
    .tooltip("§5…and then silence forever.")
    .displayName("The Sword of Whimsyhell")
    .unstackable()

    event.create('whimsyhell:whimsy_sword_dev', 'sword')
    .tier('netherite')
    .rarity('epic')
    .glow(true)
    .attackDamageBaseline(999999.0)
    .speedBaseline(5.0)
    .maxDamage(8000)
    .tooltip("§5Sword for development use only.")  
    .displayName("The Sword of Whimsyhell Development")
    .unstackable()
})


// Custom block registry
// StartupEvents.registry('block', event => {
// 	// Textures for these items are located at kubejs/assets/whimsyhell/textures/block/
//     // Custom block models are located at kubejs/assets/whimsyhell/models/block/
// })