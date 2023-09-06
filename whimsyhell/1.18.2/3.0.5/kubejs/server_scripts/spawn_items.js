// Listen to player login event
onEvent('player.logged_in', event => {
  // Check if player doesn't have "starting_items" stage yet
  if (!event.player.stages.has('starting_items')) {
    // Add the stage
    event.player.stages.add('starting_items')
    
    // Add tick delay
    event.server.scheduleInTicks(10, c => {
      // Clear all default items
      event.player.inventory.clear()

      // Give some items to player
      event.player.give('ftbquests:book')
    })
  }
})