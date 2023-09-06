//priority: 0

console.info('Loading JEI Customizations')

onEvent('jei.hide.items', jei => {
  jei.hide([
    /kubejs:dummy_fluid_item/,
    /aquaculture:neptunium_pickaxe/,
    /aquaculture:neptunium_shovel/,
    /aquaculture:neptunium_axe/,
    /aquaculture:neptunium_hoe/,
    /aquaculture:neptunium_sword/,
    /aquaculture:neptunium_bow/,
    /aquaculture:neptunium_helmet/,
    /aquaculture:neptunium_chestplate/,
    /aquaculture:neptunium_leggings/,
    /aquaculture:neptunium_boots/,
    /alexsmobs:roadrunner_boots/,
    /alexsmobs:crocodile_chestplate/,
    /alexsmobs:centipede_leggings/,
    /alexsmobs:frontier_cap/,
    /alexsmobs:froststalker_helmet/,
    /alexsmobs:pigshoes/,
    /alexsmobs:straddle_helmet/,
    /alexsmobs:emu_leggings/,
    /alexsmobs:rocky_chestplate/,
    /alexsmobs:novelty_hat/,
    /quark:forgotten_hat/,
    /cataclysm:ignitium_helmet/,
    /cataclysm:ignitium_chestplate/,
    /cataclysm:ignitium_elytra_chestplate/,
    /cataclysm:ignitium_leggings/,
    /cataclysm:ignitium_boots/,
    /cataclysm:monstrous_helm/,
    /theoneprobe:probe/,
    /theoneprobe:creativeprobe/,
    /theoneprobe:probenote/,
    /theoneprobe:diamond_helmet_probe/,
    /theoneprobe:gold_helmet_probe/,
    /theoneprobe:iron_helmet_probe/,
    /piglin_expansion:piglin_divinity_gem/,
    /piglin_expansion:piglin_divinity_essence/,
    /piglin_expansion:divinity_netherite_ingot/,
    /piglin_expansion:divinity_netherite_armor_helmet/,
    /piglin_expansion:divinity_netherite_armor_chestplate/,
    /piglin_expansion:divinity_netherite_armor_leggings/,
    /piglin_expansion:divinity_netherite_armor_boots/,
    /piglin_expansion:piglin_divinity_staff/,
    /bygonenether:gilded_netherite_helmet/,
    /bygonenether:gilded_netherite_chestplate/,
    /bygonenether:gilded_netherite_leggings/,
    /bygonenether:gilded_netherite_boots/,
    /mysticalagriculture:inferium_sword/,
    /mysticalagriculture:inferium_pickaxe/,
    /mysticalagriculture:inferium_shovel/,
    /mysticalagriculture:inferium_axe/,
    /mysticalagriculture:inferium_hoe/,
    /mysticalagriculture:inferium_staff/,
    /mysticalagriculture:inferium_watering_can/,
    /mysticalagriculture:inferium_bow/,
    /mysticalagriculture:inferium_crossbow/,
    /mysticalagriculture:prudentium_sword/,
    /mysticalagriculture:prudentium_pickaxe/,
    /mysticalagriculture:prudentium_shovel/,
    /mysticalagriculture:prudentium_axe/,
    /mysticalagriculture:prudentium_hoe/,
    /mysticalagriculture:prudentium_staff/,
    /mysticalagriculture:prudentium_watering_can/,
    /mysticalagriculture:prudentium_bow/,
    /mysticalagriculture:prudentium_crossbow/,
    /mysticalagriculture:tertium_sword/,
    /mysticalagriculture:tertium_pickaxe/,
    /mysticalagriculture:tertium_shovel/,
    /mysticalagriculture:tertium_axe/,
    /mysticalagriculture:tertium_hoe/,
    /mysticalagriculture:tertium_staff/,
    /mysticalagriculture:tertium_watering_can/,
    /mysticalagriculture:tertium_bow/,
    /mysticalagriculture:tertium_crossbow/,
    /mysticalagriculture:imperium_sword/,
    /mysticalagriculture:imperium_pickaxe/,
    /mysticalagriculture:imperium_shovel/,
    /mysticalagriculture:imperium_axe/,
    /mysticalagriculture:imperium_hoe/,
    /mysticalagriculture:imperium_staff/,
    /mysticalagriculture:imperium_watering_can/,
    /mysticalagriculture:imperium_bow/,
    /mysticalagriculture:imperium_crossbow/,
    /mysticalagriculture:supremium_sword/,
    /mysticalagriculture:supremium_pickaxe/,
    /mysticalagriculture:supremium_shovel/,
    /mysticalagriculture:supremium_axe/,
    /mysticalagriculture:supremium_hoe/,
    /mysticalagriculture:supremium_staff/,
    /mysticalagriculture:supremium_watering_can/,
    /mysticalagriculture:supremium_bow/,
    /mysticalagriculture:supremium_crossbow/,
    /mysticalagriculture:inferium_helmet/,
    /mysticalagriculture:inferium_chestplate/,
    /mysticalagriculture:inferium_leggings/,
    /mysticalagriculture:inferium_boots/,
    /mysticalagriculture:prudentium_helmet/,
    /mysticalagriculture:prudentium_chestplate/,
    /mysticalagriculture:prudentium_leggings/,
    /mysticalagriculture:prudentium_boots/,
    /mysticalagriculture:tertium_helmet/,
    /mysticalagriculture:tertium_chestplate/,
    /mysticalagriculture:tertium_leggings/,
    /mysticalagriculture:tertium_boots/,
    /mysticalagriculture:imperium_helmet/,
    /mysticalagriculture:imperium_chestplate/,
    /mysticalagriculture:imperium_leggings/,
    /mysticalagriculture:imperium_boots/,
    /mysticalagriculture:supremium_helmet/,
    /mysticalagriculture:supremium_chestplate/,
    /mysticalagriculture:supremium_leggings/,
    /mysticalagriculture:supremium_boots/,
    /mysticalagriculture:absorption_i_augment/,
    /mysticalagriculture:health_boost_i_augment/,
    /mysticalagriculture:pathing_aoe_i_augment/,
    /mysticalagriculture:night_vision_augment/,
    /mysticalagriculture:water_breathing_augment/,
    /mysticalagriculture:absorption_ii_augment/,
    /mysticalagriculture:jump_boost_i_augment/,
    /mysticalagriculture:health_boost_ii_augment/,
    /mysticalagriculture:speed_i_augment/,
    /mysticalagriculture:mining_aoe_i_augment/,
    /mysticalagriculture:tilling_aoe_i_augment/,
    /mysticalagriculture:pathing_aoe_ii_augment/,
    /mysticalagriculture:absorption_iii_augment/,
    /mysticalagriculture:fire_resistance_augment/,
    /mysticalagriculture:jump_boost_ii_augment/,
    /mysticalagriculture:step_assist_augment/,
    /mysticalagriculture:health_boost_iii_augment/,
    /mysticalagriculture:strength_i_augment/,
    /mysticalagriculture:speed_ii_augment/,
    /mysticalagriculture:no_fall_damage_augment/,
    /mysticalagriculture:mining_aoe_ii_augment/,
    /mysticalagriculture:attack_aoe_i_augment/,
    /mysticalagriculture:tilling_aoe_ii_augment/,
    /mysticalagriculture:pathing_aoe_iii_augment/,
    /mysticalagriculture:absorption_iv_augment/,
    /mysticalagriculture:poison_resistance_augment/,
    /mysticalagriculture:jump_boost_iii_augment/,
    /mysticalagriculture:health_boost_iv_augment/,
    /mysticalagriculture:strength_ii_augment/,
    /mysticalagriculture:speed_iii_augment/,
    /mysticalagriculture:mining_aoe_iii_augment/,
    /mysticalagriculture:attack_aoe_ii_augment/,
    /mysticalagriculture:tilling_aoe_iii_augment/,
    /mysticalagriculture:pathing_aoe_iv_augment/,
    /mysticalagriculture:mining_fatigue_resistance_augment/,
    /mysticalagriculture:absorption_v_augment/,
    /mysticalagriculture:wither_resistance_augment/,
    /mysticalagriculture:health_boost_v_augment/,
    /mysticalagriculture:strength_iii_augment/,
    /mysticalagriculture:flight_augment/,
    /mysticalagriculture:mining_aoe_iv_augment/,
    /mysticalagriculture:attack_aoe_iii_augment/,
    /mysticalagriculture:tilling_aoe_iv_augment/
  ])
})