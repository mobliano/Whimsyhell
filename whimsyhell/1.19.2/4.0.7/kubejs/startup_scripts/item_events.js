// priority: 0

console.info('KubeJS - Loading Whimsyhell Item Events')

ItemEvents.modification(event => {
    event.modify('minecraft:ender_pearl', item => {
        item.maxStackSize = 64
        item.fireResistant = true
        item.rarity = "UNCOMMON"
    })
})