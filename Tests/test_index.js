test('La página carga correctamente', () => {
    document.body.innerHTML = '<h1>¡Hola Mundo!</h1>';
    const h1 = document.querySelector('h1');
    expect(h1.textContent).toBe('¡Hola Mundo!');
});

