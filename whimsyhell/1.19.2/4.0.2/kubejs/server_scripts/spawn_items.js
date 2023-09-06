// priority: 0

console.info('KubeJS - Loading PlayerEvents')

PlayerEvents.loggedIn(event => {
    // Check if player doesn't have "starting_items" stage yet
    if (!event.player.stages.has('starting_items')) {
        // Add the stage
        event.player.stages.add('starting_items')
        
        // Add tick delay
        event.server.scheduleInTicks(20, c => {
            // Clear any default items
            event.player.inventory.clear()

            // Give items to player
            event.player.give('ftbquests:book')
        })
    }
})