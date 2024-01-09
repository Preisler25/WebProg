const tartalom = [
    'Aki korán kel, aranyat lel.',
    'Aki mer, az nyer.',
    'Aki nem dolgozik, ne is egyék.',
    'Aki nem tud, tanuljon meg.',
    'Aki nem ügyes, az nem is szép.',
    'Aki szépet akar, szépre költ.',
]

document.addEventListener('DOMContentLoaded', () => {

    let tablazat = document.getElementById('tablazat')
    for (i in tartalom) {
        const j = Number(i) + 1
        const tr = document.createElement('tr')
        tablazat.appendChild(tr)

        const td1 = document.createElement('td')
        tr.appendChild(td1)
        td1.textContent = tartalom[i]
        console.log(i);

        const td2 = document.createElement('td')
        tr.appendChild(td2)

        const btn = document.createElement('button')
        td2.appendChild(btn)

        const btn2 = document.createElement('button')
        td2.appendChild(btn2)

        btn2.textContent = 'Hanyadik vagyok?'
        btn2.addEventListener('click', () => {
            alert('A ' + j + '. vagyok.')
        })

        btn.textContent = 'Törlés'
        btn.addEventListener('click', () => {
            tr.remove()
        })

        
    }

})