// LOGIN PROTECTION SCRIPT
// By LadyLexxie 2022

let removeInvulnerability = (e) => {
  if (!e.player.persistentData.isPlayerProtected) return
  e.player.setStatusMessage(Text.of('You are no longer invulnerable').italic().red())
  console.log(`[Login Protection] ${e.player.name} is no longer invulnerable`)
  e.player.persistentData.isPlayerProtected = false
  e.player.sendData('sync', { isPlayerProtected: e.player.persistentData.isPlayerProtected })
  e.player.setInvulnerable(false)
  e.server.runCommandSilent(`/title ${e.player.name} reset`)
}

onEvent('player.logged_in', e => {
  if (e.player.isCreativeMode() || e.player.isSpectator()) return
  console.log(`[Login Protection] ${e.player.name} is now protected`)
  e.player.persistentData.isPlayerProtected = true
  e.player.sendData('sync', { isPlayerProtected: e.player.persistentData.isPlayerProtected })
  e.player.setInvulnerable(true)
  e.server.runCommandSilent(`/title ${e.player.name} times 20 100000 20`)
  e.server.runCommandSilent(`/title ${e.player.name} title {"text":"Invulnerable"}`)
  e.server.runCommandSilent(`/title ${e.player.name} subtitle {"text":"Press any key to resume"}`)
})

onEvent('player.data_from_client.key_pressed', e => { if (e.data.keyPressed != null && e.data.keyPressed != undefined) removeInvulnerability(e) })

onEvent('block.left_click', e => removeInvulnerability(e))
onEvent('block.right_click', e => removeInvulnerability(e))
onEvent('item.left_click', e => removeInvulnerability(e))
onEvent('item.right_click', e => removeInvulnerability(e))
onEvent('item.entity_interact', e => removeInvulnerability(e))
