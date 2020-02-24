SVG.on(document, 'DOMContentLoaded', function() {

  const file =
`
  1.1.1.1.1.1.
  22..2..2.22.
  ..2..2......
  .3....33..3.
  ...33...3..3
  .4.4..4.4..4
  ....4..4..4.
  5.5..5...5..
  .5..5..5..5.
`

  const lines = file.split(/\n/)
  const map = []
  for (let i = 0; i < lines.length; i++) {
    let str = lines[i].replace(/ /g,'')
    str = str.replace(/\./g,'0')
    if (str.length > 0) {
      const arr = []
      for (j = 0; j < str.length; j++) {
        arr.push(str.charAt(j))
      }
      map.push(arr)
    }
  }

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
