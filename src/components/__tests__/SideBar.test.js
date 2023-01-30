import React from 'react';
import { render, screen } from '@testing-library/react';
import SideBar from './SideBar';

describe('SideBar', () => {
    it('should render the correct links if user is logged in', () => {
        render(<SideBar />);

        const links = [
            { text: 'Stories', icon: 'fa fa-rss' },
            { text: 'Feed', icon: 'fas fa-heart' },
            { text: 'Friends', icon: 'fa fa-address-book' },
            { text: 'Events', icon: 'fa fa-calendar' },
            { text: 'Sport', icon: 'fa fa-medal' },
        ];

        links.forEach(({ text, icon }) => {
            const link = screen.getByText(text);
            expect(link).toBeInTheDocument();
            expect(link).toHaveClass(icon);
        });
    });
});