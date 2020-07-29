const messages = [
    'Ana',
    'Maria',
    'Andres',
    'Susan',
    'Chris',
    'Alfred',
    'Leo',
    'Jessica',
    'Nata',
    'Antony',
    'Pedro',
    'Diego',
    'Jorge Luis',
    'Carolina',
    'Paulina'
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message)
}

module.exports = { randomMsg }
