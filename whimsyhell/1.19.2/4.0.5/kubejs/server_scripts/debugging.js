ItemEvents.rightClicked(event => {
    global.itemRightClick(event)
  })
  
  /** @arg {Internal.ItemClickedEventJS} event*/
  global.itemRightClick = event => {
    console.log(event.item.item?.class?.simpleName)
    let attributes = event.item.getAttributeModifiers("mainhand")
    console.log(attributes)
    attributes.forEach((attrib, mod) => {
      console.log(attrib)
      console.log(attrib.descriptionId)
      console.log(mod)
      console.log(mod.amount)
      console.log(mod.name)
      console.log(mod.id)
      console.log(mod.operation)
    })
    attributes.forEach((attrib) => {
      console.log(attrib)
    })
  }