// priority: 0

console.info('Kubejs - Loading Custom JEIEvents')

JEIEvents.hideItems(event => {
	// Hide items in JEI here
	event.hide([
        'kubejs:dummy_fluid_item',
        'alexsmobs:roadrunner_boots',
        'alexsmobs:crocodile_chestplate',
        'alexsmobs:centipede_leggings',
        'alexsmobs:frontier_cap',
        'alexsmobs:froststalker_helmet',
        'alexsmobs:pigshoes',
        'alexsmobs:straddle_helmet',
        'alexsmobs:emu_leggings',
        'alexsmobs:rocky_chestplate',
        'alexsmobs:novelty_hat',
        'quark:forgotten_hat',
        'cataclysm:ignitium_helmet',
        'cataclysm:ignitium_chestplate',
        'cataclysm:ignitium_elytra_chestplate',
        'cataclysm:ignitium_leggings',
        'cataclysm:ignitium_boots',
        'cataclysm:monstrous_helm',
        'theoneprobe:probe',
        'theoneprobe:creativeprobe',
        'theoneprobe:probenote',
        'theoneprobe:diamond_helmet_probe',
        'theoneprobe:gold_helmet_probe',
        'theoneprobe:iron_helmet_probe',
        'piglin_expansion:piglin_divinity_gem',
        'piglin_expansion:piglin_divinity_essence',
        'piglin_expansion:divinity_netherite_ingot',
        'piglin_expansion:divinity_netherite_armor_helmet',
        'piglin_expansion:divinity_netherite_armor_chestplate',
        'piglin_expansion:divinity_netherite_armor_leggings',
        'piglin_expansion:divinity_netherite_armor_boots',
        'piglin_expansion:piglin_divinity_staff',
        // 'bygonenether:gilded_netherite_helmet',
        // 'bygonenether:gilded_netherite_chestplate',
        // 'bygonenether:gilded_netherite_leggings',
        // 'bygonenether:gilded_netherite_boots',
        'mysticalagriculture:inferium_sword',
        'mysticalagriculture:inferium_pickaxe',
        'mysticalagriculture:inferium_shovel',
        'mysticalagriculture:inferium_axe',
        'mysticalagriculture:inferium_staff',
        'mysticalagriculture:inferium_crossbow',
        'mysticalagriculture:inferium_bow',
        'mysticalagriculture:inferium_scythe',
        'mysticalagriculture:inferium_sickle',
        'mysticalagriculture:inferium_helmet',
        'mysticalagriculture:inferium_chestplate',
        'mysticalagriculture:inferium_leggings',
        'mysticalagriculture:inferium_boots',
        'mysticalagriculture:prudentium_sword',
        'mysticalagriculture:prudentium_pickaxe',
        'mysticalagriculture:prudentium_shovel',
        'mysticalagriculture:prudentium_axe',
        'mysticalagriculture:prudentium_staff',
        'mysticalagriculture:prudentium_crossbow',
        'mysticalagriculture:prudentium_bow',
        'mysticalagriculture:prudentium_scythe',
        'mysticalagriculture:prudentium_sickle',
        'mysticalagriculture:prudentium_helmet',
        'mysticalagriculture:prudentium_chestplate',
        'mysticalagriculture:prudentium_leggings',
        'mysticalagriculture:prudentium_boots',
        'mysticalagriculture:tertium_sword',
        'mysticalagriculture:tertium_pickaxe',
        'mysticalagriculture:tertium_shovel',
        'mysticalagriculture:tertium_axe',
        'mysticalagriculture:tertium_staff',
        'mysticalagriculture:tertium_crossbow',
        'mysticalagriculture:tertium_bow',
        'mysticalagriculture:tertium_scythe',
        'mysticalagriculture:tertium_sickle',
        'mysticalagriculture:tertium_helmet',
        'mysticalagriculture:tertium_chestplate',
        'mysticalagriculture:tertium_leggings',
        'mysticalagriculture:tertium_boots',
        'mysticalagriculture:imperium_sword',
        'mysticalagriculture:imperium_pickaxe',
        'mysticalagriculture:imperium_shovel',
        'mysticalagriculture:imperium_axe',
        'mysticalagriculture:imperium_staff',
        'mysticalagriculture:imperium_crossbow',
        'mysticalagriculture:imperium_bow',
        'mysticalagriculture:imperium_scythe',
        'mysticalagriculture:imperium_sickle',
        'mysticalagriculture:imperium_helmet',
        'mysticalagriculture:imperium_chestplate',
        'mysticalagriculture:imperium_leggings',
        'mysticalagriculture:imperium_boots',
        'mysticalagriculture:supremium_sword',
        'mysticalagriculture:supremium_pickaxe',
        'mysticalagriculture:supremium_shovel',
        'mysticalagriculture:supremium_axe',
        'mysticalagriculture:supremium_staff',
        'mysticalagriculture:supremium_crossbow',
        'mysticalagriculture:supremium_bow',
        'mysticalagriculture:supremium_scythe',
        'mysticalagriculture:supremium_sickle',
        'mysticalagriculture:supremium_helmet',
        'mysticalagriculture:supremium_chestplate',
        'mysticalagriculture:supremium_leggings',
        'mysticalagriculture:supremium_boots',
        'mysticalagriculture:awakened_supremium_sword',
        'mysticalagriculture:awakened_supremium_pickaxe',
        'mysticalagriculture:awakened_supremium_shovel',
        'mysticalagriculture:awakened_supremium_axe',
        'mysticalagriculture:awakened_supremium_staff',
        'mysticalagriculture:awakened_supremium_bow',
        'mysticalagriculture:awakened_supremium_scythe',
        'mysticalagriculture:awakened_supremium_sickle',
        'mysticalagriculture:awakened_supremium_crossbow',
        'mysticalagriculture:awakened_supremium_helmet',
        'mysticalagriculture:awakened_supremium_chestplate',
        'mysticalagriculture:awakened_supremium_leggings',
        'mysticalagriculture:awakened_supremium_boots',
        'mysticalagriculture:unattuned_augment',
        'mysticalagriculture:absorption_i_augment',
        'mysticalagriculture:health_boost_i_augment',
        'mysticalagriculture:pathing_aoe_i_augment',
        'mysticalagriculture:night_vision_augment',
        'mysticalagriculture:water_breathing_augment',
        'mysticalagriculture:absorption_ii_augment',
        'mysticalagriculture:jump_boost_i_augment',
        'mysticalagriculture:health_boost_ii_augment',
        'mysticalagriculture:speed_i_augment',
        'mysticalagriculture:mining_aoe_i_augment',
        'mysticalagriculture:tilling_aoe_i_augment',
        'mysticalagriculture:pathing_aoe_ii_augment',
        'mysticalagriculture:absorption_iii_augment',
        'mysticalagriculture:fire_resistance_augment',
        'mysticalagriculture:jump_boost_ii_augment',
        'mysticalagriculture:step_assist_augment',
        'mysticalagriculture:health_boost_iii_augment',
        'mysticalagriculture:strength_i_augment',
        'mysticalagriculture:speed_ii_augment',
        'mysticalagriculture:no_fall_damage_augment',
        'mysticalagriculture:mining_aoe_ii_augment',
        'mysticalagriculture:attack_aoe_i_augment',
        'mysticalagriculture:tilling_aoe_ii_augment',
        'mysticalagriculture:pathing_aoe_iii_augment',
        'mysticalagriculture:absorption_iv_augment',
        'mysticalagriculture:poison_resistance_augment',
        'mysticalagriculture:jump_boost_iii_augment',
        'mysticalagriculture:health_boost_iv_augment',
        'mysticalagriculture:strength_ii_augment',
        'mysticalagriculture:speed_iii_augment',
        'mysticalagriculture:mining_aoe_iii_augment',
        'mysticalagriculture:attack_aoe_ii_augment',
        'mysticalagriculture:tilling_aoe_iii_augment',
        'mysticalagriculture:pathing_aoe_iv_augment',
        'mysticalagriculture:mining_fatigue_resistance_augment',
        'mysticalagriculture:absorption_v_augment',
        'mysticalagriculture:wither_resistance_augment',
        'mysticalagriculture:health_boost_v_augment',
        'mysticalagriculture:strength_iii_augment',
        'mysticalagriculture:flight_augment',
        'mysticalagriculture:mining_aoe_iv_augment',
        'mysticalagriculture:attack_aoe_iii_augment',
        'mysticalagriculture:tilling_aoe_iv_augment',
        'mysticalagradditions:inferium_paxel',
        'mysticalagradditions:prudentium_paxel',
        'mysticalagradditions:tertium_paxel',
        'mysticalagradditions:imperium_paxel',
        'mysticalagradditions:supremium_paxel',
        'mysticalagradditions:awakened_supremium_paxel',
        'mysticalagradditions:inferium_paxel',
        '@cataclysm_weaponery',
        '@shieldsmod',
        '@vtaw_mw',
        'whimsyhell:whimsy_sword_dev'
    ])
})