// priority: 0

console.info('KubeJS - Loading Whimsyhell Custom Loot')

// const GemManager = Java.loadClass('shadows.apotheosis.adventure.affix.socket.gem.GemManager')

// Loot modifiers
LootJS.modifiers((event) => {
    event.enableLogging()

    // Test
    // event.addEntityLootModifier("radioactive_spiders:scary_spider")
    // .killedByPlayer()
    // .apply(ctx => {
    //     let item = GemManager.createRandomGemStack(ctx.random, ctx.level.minecraftLevel, ctx.luck, (x) => true)
    //     console.log(item)
    //     item.forEach(attrib => {
    //         console.log(attrib)
    //     })
    //     ctx.addLoot(item)
    // })
    // .addWeightedLoot(
    //     [0,1],
    //     [
    //         Item.of("mysticalagriculture:prudentium_axe").withChance(5),
    //         Item.of("mysticalagriculture:tertium_axe").withChance(5)
    //     ]
    // );

    // Wolf Spider Allfather loot modification
    // event.addEntityLootModifier("conrads_wolf_spiders:wolf_spider_allfather")
    // .killedByPlayer()
    // .addWeightedLoot(
    //     [0,1],
    //     [
    //         Item.of("mysticalagriculture:prudentium_axe").withChance(5),
    //         Item.of("mysticalagriculture:tertium_axe").withChance(5)
    //     ]
    // );

    // Wolf Spider loot modification
    // event.addEntityLootModifier("conrads_wolf_spiders:wolf_spider")
    // .killedByPlayer()
    // .randomChanceWithEnchantment("minecraft:looting", [0, 0, 0.01, 0.05, 0.10, 0.15, 0.20])
    // .addLoot("mysticalagriculture:inferium_axe");

    // Mother Scary Spider loot modification
    // event.addEntityLootModifier("radioactive_spiders:mother_scary_spider")
    // .killedByPlayer()
    // .addWeightedLoot(
    //     [0,1],
    //     [
    //         Item.of("mysticalagriculture:prudentium_axe").withChance(5),
    //         Item.of("mysticalagriculture:tertium_axe").withChance(5)
    //     ]
    // );

    // Phasing Scary Spider loot modification
    // event.addEntityLootModifier("radioactive_spiders:phasing_scary_spider")
    // .killedByPlayer()
    // .randomChanceWithEnchantment("minecraft:looting", [0, 0, 0.01, 0.05, 0.10, 0.15, 0.20])
    // .addLoot("mysticalagriculture:inferium_axe");
    
    // Warden loot modification
    event.addEntityLootModifier("minecraft:warden")
    .killedByPlayer()
    .addWeightedLoot(
        [0,2],
        [
            Item.of("cataclysm:ignitium_helmet").withChance(5),
            Item.of("cataclysm:ignitium_boots").withChance(5)
        ]
    );
    event.addEntityLootModifier("minecraft:warden")
    .killedByPlayer()
    .randomChanceWithEnchantment("minecraft:looting", [0, 0, 0, 0, 0, 0, 0.01])
    .addLoot("whimsyhell:whimsy_dust");

    // Wither loot modification
    event.addEntityLootModifier("minecraft:wither")
    .killedByPlayer()
    .addWeightedLoot(
        [0,2],
        [
            Item.of("cataclysm:ignitium_chestplate").withChance(5),
            Item.of("cataclysm:ignitium_leggings").withChance(5)
        ]
    );
    event.addEntityLootModifier("minecraft:wither")
    .killedByPlayer()
    .randomChanceWithEnchantment("minecraft:looting", [0, 0, 0, 0, 0, 0, 0.01])
    .addLoot("whimsyhell:whimsy_dust");

    // Ender Dragon loot modification
    event.addEntityLootModifier("minecraft:ender_dragon")
    .killedByPlayer()
    .addWeightedLoot(
        [0,1],
        [
            Item.of("forbidden_arcanus:draco_arcanus_sword").withChance(5),
            Item.of("forbidden_arcanus:draco_arcanus_axe").withChance(5)
        ]
    );
    event.addEntityLootModifier("minecraft:ender_dragon")
    .killedByPlayer()
    .randomChanceWithEnchantment("minecraft:looting", [0, 0, 0, 0, 0, 0, 0.01])
    .addLoot("whimsyhell:whimsy_dust");
});