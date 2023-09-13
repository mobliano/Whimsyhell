// priority: 0

console.info('KubeJS - Loading Whimsyhell Custom Loot')

// Loot modifiers
LootJS.modifiers((event) => {
    // Wolf Spider Allfather loot modification
    event.addEntityLootModifier("conrads_wolf_spiders:wolf_spider_allfather")
    .killedByPlayer()
    .addWeightedLoot(
        [0,2],
        [
            Item.of("mysticalagriculture:prudentium_axe").withChance(5),
            Item.of("mysticalagriculture:tertium_axe").withChance(5)
        ]
    );

    // Wolf Spider loot modification
    event.addEntityLootModifier("conrads_wolf_spiders:wolf_spider")
    .killedByPlayer()
    .randomChanceWithEnchantment("minecraft:looting", [0, 0.01, 0.05, 0.10, 0.15, 0.20, 0.25])
    .addLoot("mysticalagriculture:inferium_axe");

    // Mother Scary Spider loot modification
    event.addEntityLootModifier("radioactive_spiders:mother_scary_spider")
    .killedByPlayer()
    .addWeightedLoot(
        [0,2],
        [
            Item.of("mysticalagriculture:prudentium_axe").withChance(5),
            Item.of("mysticalagriculture:tertium_axe").withChance(5)
        ]
    );

    // Phasing Scary Spider loot modification
    event.addEntityLootModifier("radioactive_spiders:phasing_scary_spider")
    .killedByPlayer()
    .randomChanceWithEnchantment("minecraft:looting", [0, 0.05, 0.10, 0.15, 0.20, 0.30, 0.40])
    .addLoot("mysticalagriculture:inferium_axe");

    // Scary Spider loot modification
    event.addEntityLootModifier("radioactive_spiders:scary_spider")
    .killedByPlayer()
    .randomChanceWithEnchantment("minecraft:looting", [0, 0.01, 0.05, 0.10, 0.15, 0.20, 0.25])
    .addLoot("mysticalagriculture:inferium_axe");
    
    // Warden loot modification
    event.addEntityLootModifier("minecraft:warden")
    .killedByPlayer()
    .addWeightedLoot(
        [0,2],
        [
            Item.of("piglin_expansion:divinity_netherite_armor_helmet").withChance(5),
            Item.of("cataclysm:ignitium_helmet").withChance(5),
            Item.of("mysticalagriculture:supremium_helmet").withChance(5),
            Item.of("piglin_expansion:divinity_netherite_armor_boots").withChance(5),
            Item.of("cataclysm:ignitium_boots").withChance(5),
            Item.of("mysticalagriculture:supremium_boots").withChance(5)
        ]
    );

    // Wither loot modification
    event.addEntityLootModifier("minecraft:wither")
    .killedByPlayer()
    .addWeightedLoot(
        [0,2],
        [
            Item.of("piglin_expansion:divinity_netherite_armor_chestplate").withChance(5),
            Item.of("cataclysm:ignitium_chestplate").withChance(5),
            Item.of("mysticalagriculture:supremium_chestplate").withChance(5),
            Item.of("piglin_expansion:divinity_netherite_armor_leggings").withChance(5),
            Item.of("cataclysm:ignitium_leggings").withChance(5),
            Item.of("mysticalagriculture:supremium_leggings").withChance(5)
        ]
    );

    // Ender Dragon loot modification
    event.addEntityLootModifier("minecraft:ender_dragon")
    .killedByPlayer()
    .addWeightedLoot(
        [0,2],
        [
            Item.of("mysticalagriculture:tertium_axe").withChance(5),
            Item.of("mysticalagriculture:imperium_axe").withChance(5)
        ]
    );
});