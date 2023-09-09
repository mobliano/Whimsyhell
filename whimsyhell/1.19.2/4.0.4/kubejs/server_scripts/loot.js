// priority: 0

console.info('KubeJS - Loading Whimsyhell Custom Loot')

// Loot modifiers
LootJS.modifiers((event) => {
    // If it's raining, and the player has looting, reward mining gravel with a chance for a diamond
    event.addBlockLootModifier("minecraft:gravel")
    .weatherCheck({
        raining: true,
    })
    .randomChanceWithEnchantment("minecraft:looting", [0, 0.01, 0.05, 0.10, 0.15, 0.20, 0.25])
    .addLoot("minecraft:diamond");
    
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
});