//priority: 1

console.info('Loading Dragon Mounts Customizations')

// Dragon entity spawn event customization
onEvent('entity.spawned', e => {
    if(e.entity.type == "dragonmounts:dragon"){
        // Set dragon max health to 1000
        e.entity.setMaxHealth(3000)

        // Delay 1 tick
        e.server.scheduleInTicks(1, callback => {
            // Set dragon health to 1000
            e.entity.setHealth(3000)

            // Modify dragon attack damage from a base of 8 to 100 (8 + 92 = 100)
            e.entity.modifyAttribute('minecraft:generic.attack_damage', 'dragon-attack', 92.0, 'Addition')
        })
    }
})
