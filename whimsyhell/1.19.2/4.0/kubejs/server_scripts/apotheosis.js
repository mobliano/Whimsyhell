// priority: 0

console.info('KubeJS - Loading Apotheosis Customizations')

ServerEvents.recipes(event => {
    // event.recipes.create.crushing(output[], input[])
    event.recipes.create.crushing('apotheosis:gem_dust', 'apotheosis:gem')
})