import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Group from './Group';
import { GroupContext } from '@/contexts/GroupContext';

test('renders Group component', () => {
    const mockContext = {
        groups: [],
        addGroup: jest.fn(),
        updateGroup: jest.fn(),
        deleteGroup: jest.fn(),
        addPost: jest.fn(),
        updatePost: jest.fn(),
        deletePost: jest.fn(),
    };

    render(
        <GroupContext.Provider value={mockContext}>
            <Group name="Test Group" posts={[]} onDelete={() => {}}/>
        </GroupContext.Provider>
    );

    const groupName = screen.getByText(/Test Group/i);
    expect(groupName).toBeInTheDocument();
});
