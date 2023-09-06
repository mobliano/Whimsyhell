// Remove Recipes
// mods.mysticalagriculture.InfusionCrafting.remove(output as IItemStack);
mods.mysticalagriculture.InfusionCrafting.remove(<mysticalagriculture:flight_augment>);

// Add Recipes
// mods.mysticalagriculture.InfusionCrafting.addRecipe(id as string, output as IItemStack, inputs as IIngredient[]);
mods.mysticalagriculture.InfusionCrafting.addRecipe("flight_augment", <item:mysticalagriculture:flight_augment>, [<item:minecraft:elytra>, <item:mysticalagriculture:awakened_supremium_gemstone_block> * 2, <item:mysticalagriculture:awakened_supremium_ingot_block> * 2, <item:mysticalagradditions:dragon_egg_crux> * 2, <item:mysticalagradditions:nether_star_crux> * 2]);
