describe('Appointment', () => {
    it('renders the customer first name', () => {
        const customer = { firstName: 'Ashley' };
        const component = <Apppointment customer={customer} />;
        expect(document.body.textContent).toMatch('Ashley');
    });
});