describe('Appointment', () => {
    it('renders the customer first name', () => {
        const customer = { firstName: 'Ashley' };
        const component = <Apppointment customer={customer} />;
        const container = document.createElemenmt('div');
        expect(document.body.textContent).toMatch('Ashley');
    });
});