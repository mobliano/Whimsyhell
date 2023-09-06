// LOGIN PROTECTION SCRIPT
// By LadyLexxie 2022

onForgeEvent('net.minecraftforge.event.entity.player.PlayerInteractEvent$LeftClickEmpty', e => {
	if (!Client.player.persistentData.isPlayerProtected) return
	Client.player.sendData('key_pressed', { keyPressed: 0 })
})
onForgeEvent('net.minecraftforge.event.entity.player.PlayerInteractEvent$RightClickEmpty', e => {
	if (!Client.player.persistentData.isPlayerProtected) return
	Client.player.sendData('key_pressed', { keyPressed: 1 })
})
