SVG.on(document, 'DOMContentLoaded', function() {

  const map = [
    [5 ,0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0],
    [1 ,1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0],
    [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0 ,2, 0, 0, 0, 0, 2, 2, 0, 0, 2, 0],
    [0, 0, 0, 2, 2, 0, 0, 0, 2, 0, 0, 2],
    [0 ,3, 0, 3, 0, 0, 3, 0, 3, 0, 0, 3],
    [0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 3, 0],
    [4, 0, 4, 0, 0, 4, 0, 0, 0, 4, 0, 0],
    [0, 4, 0, 0, 4, 0, 0, 4, 0, 0, 4, 0],
  ]

  const config = {
    canvas: {
      size: { w: 1000, h: 500 }
    },
    visible: {
      offset: { x: 50, y: 50 },
      size: { w: 900, h: 400 }
    },
    colors: [
      "#000",
      "#ff0000",
      "#00ff00",
      "#0000ff",
      "#ff00ff",
      "#ffff00",
    ]
  }

  const draw = SVG().addTo('#svg').size(
    config.canvas.size.w,
    config.canvas.size.h
  )

  // draw boundaries
  draw.rect(
      config.canvas.size.w,
      config.canvas.size.h
    )
    .fill("#000")
    .stroke({ width: 1, color: "#000"})

  draw.rect(
      config.visible.size.w,
      config.visible.size.h
    )
    .attr({
      x: config.visible.offset.x,
      y: config.visible.offset.y
    })
    .fill("#000")
    .stroke({ width: 1, color: "#000"})

    // draw the squares
    const sh =  config.visible.size.h / map.length
    for (let i = 0; i < map.length; i++) {
      const sw = config.visible.size.w / map[i].length
      for (let j = 0; j < map[i].length; j++) {
        draw.rect(sw,sh)
          .attr({
            x: config.visible.offset.x + (j * sw),
            y: config.visible.offset.y + (i * sh)
          })
          .fill(config.colors[map[i][j]])
      }
   }

})
