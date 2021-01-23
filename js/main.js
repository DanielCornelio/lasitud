let presentaciones = [
    {
        id: 1,
        date: '21/01/2020',
        place: 'Auditorio Nacional',
        city: 'CDMX'
    },
    {
        id: 2,
        date: '22/01/2020',
        place: 'Auditorio Nacional',
        city: 'CDMX'
    },
    {
        id: 3,
        date: '23/01/2020',
        place: 'Centro de Convenciones',
        city: 'Villahermosa'
    },
    {
        id: 4,
        date: '23/01/2020',
        place: 'Teatro al Aire Libre',
        city: 'Villahermosa'
    },
]

let participacion = presentaciones.map(p =>
    `<div class="tour__date">
        <div class="date">${p.date}</div>
        <div class="presentation"><div class="place">${p.place}</div>
        <div class="city">${p.city}</div></div>
      <div class="buttons"><a href="#">Tickets</a></div>
  </div>`
)
var content = document.getElementById("conciertos__item")
content.innerHTML = participacion
