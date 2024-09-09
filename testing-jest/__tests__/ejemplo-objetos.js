const cliente = {
    nombre: 'Johnny',
    balance: 500
}

describe('Testing al cliente', () => {
    test('El cliente es premium', () => {
        expect(cliente.balance).toBeGreaterThan(400)
    });

    test('Es Johnny', () => {
        expect(cliente.nombre).toBe('Johnny')
    })

    test('No es otro Cliente', () => {
        expect(cliente.nombre).not.toBe('Pedro')
    })

    test('No tiene 500', () => {
        expect(cliente.balance).not.toBe(400)
    })
})