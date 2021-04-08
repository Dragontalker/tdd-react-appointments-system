import React from 'react';
import ReactDOM from 'react-dom';

describe('Appointment', () => {
    it('renders the customer first name', () => {
        const customer = { firstName: 'Ashley' };
        const component = <Apppointment customer={customer} />;
        const container = document.createElemenmt('div');
        document.body.appendChild(container);

        ReactDOM.render(component, container);

        expect(document.body.textContent).toMatch('Ashley');
    });
});