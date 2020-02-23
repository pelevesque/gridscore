SVG.on(document, 'DOMContentLoaded', function() {

  const config = {
    canvas: {
      size: { w: 1000, h: 500 }
    },
    visible: {
      offset: { x: 50, y: 50 },
      size: { w: 900, h: 400 }
    }
  }

  const draw = SVG().addTo('#svg').size(
    config.canvas.size.w,
    config.canvas.size.h
  )

  draw.rect(
      config.canvas.size.w,
      config.canvas.size.h
    )
    .fill("#fff")
    .stroke({ width: 1, color: "#000"})

  draw.rect(
      config.visible.size.w,
      config.visible.size.h
    )
    .attr({
      x: config.visible.offset.x,
      y: config.visible.offset.y
    })
    .fill("#fff")
    .stroke({ width: 1, color: "#565656"})

})
