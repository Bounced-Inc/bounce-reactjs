import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { GroupContext } from '@/contexts/GroupContext';
import CreateGroup from './CreateGroup';

describe('CreateGroup', () => {
    const mockContext = {
        groups: [],
        addGroup: jest.fn(),
        updateGroup: jest.fn(),
        deleteGroup: jest.fn(),
        addPost: jest.fn(),
        updatePost: jest.fn(),
        deletePost: jest.fn(),
    };

    it('renders CreateGroup component', () => {
        const { getByPlaceholderText } = render(
            <GroupContext.Provider value={mockContext}>
                <CreateGroup />
            </GroupContext.Provider>
        );

        expect(getByPlaceholderText(/Group Name/i)).toBeInTheDocument();
    });

});
