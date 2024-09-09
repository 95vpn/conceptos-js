const cliente = {
    nombre: "Johnny",
    balance: 500,
    tipo: 'premium'
};

describe('testing al cliente', () => {
    // test('Es Johnny', () => {
    //     expect(cliente.nombre).toBe('Johnny')
    // });
    test('Es Johnny', () => {
        expect(cliente).toMatchSnapshot()
    });
})