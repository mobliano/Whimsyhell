onEvent('worldgen.remove', event => {
  event.removeOres(ore => {
    ore.blocks = [
      // 'thermal:tin_ore',
      // 'thermal:deepslate_tin_ore',
      // 'thermal:lead_ore',
      // 'thermal:deepslate_lead_ore',
      // 'thermal:silver_ore',
      // 'thermal:deepslate_silver_ore',
      // 'thermal:nickel_ore',
      // 'thermal:deepslate_nickel_ore'
    ]
  })
})
