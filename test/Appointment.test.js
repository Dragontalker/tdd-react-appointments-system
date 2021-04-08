describe('Appointment', () => {
    it('renders the customer first name', () => {
        const customer = { firstName: 'Ashley' };
        expect(document.body.textContent).toMatch('Ashley');
    });
});