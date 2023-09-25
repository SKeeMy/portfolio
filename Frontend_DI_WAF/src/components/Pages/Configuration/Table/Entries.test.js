import { render, screen } from '@testing-library/react';
import ConfigEntries from './Entries';

test('renders table entries and checks their values', () => {
    const mockData = [
        {
            "name": "Name #1",
            "id": "ID #1"
        },
        {
            "name": "Name #2",
            "id": "ID #2"
        }
    ];
    render(<ConfigEntries data={mockData} />);

    mockData.forEach((entry) => {
        let baseSelector = "test-" + entry.id
        // name
        let rulesetNameElement = screen.getByTestId(baseSelector + "-name");
        expect(rulesetNameElement.textContent).toBe(entry.name);
        // id
        let rulesetIdElement = screen.getByTestId(baseSelector + "-id");
        expect(rulesetIdElement.textContent).toBe(entry.id);
    }) 
});
