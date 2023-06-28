import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { GroupContext } from '@/contexts/GroupContext';
import CreatePost from './CreatePost';

describe('CreatePost', () => {
    it('renders the CreatePost component', () => {
        const mockContext = {
            groups: [],
            addGroup: jest.fn(),
            updateGroup: jest.fn(),
            deleteGroup: jest.fn(),
            addPost: jest.fn(),
            updatePost: jest.fn(),
            deletePost: jest.fn(),
        };

        const { getByPlaceholderText } = render(
            <GroupContext.Provider value={mockContext}>
                <CreatePost groupName="Test Group" />
            </GroupContext.Provider>
        );

        expect(getByPlaceholderText(/Title/i)).toBeInTheDocument();
        expect(getByPlaceholderText(/Content/i)).toBeInTheDocument();
    });

    it('calls addPost when form is submitted', () => {
        const mockContext = {
            groups: [],
            addGroup: jest.fn(),
            updateGroup: jest.fn(),
            deleteGroup: jest.fn(),
            addPost: jest.fn(),
            updatePost: jest.fn(),
            deletePost: jest.fn(),
        };

        const { getByPlaceholderText, getByText } = render(
            <GroupContext.Provider value={mockContext}>
                <CreatePost groupName="Test Group" />
            </GroupContext.Provider>
        );

        fireEvent.change(getByPlaceholderText(/Title/i), { target: { value: 'Test Post' } });
        fireEvent.change(getByPlaceholderText(/Content/i), { target: { value: 'Test Content' } });

        fireEvent.click(getByText(/Post/i));

        expect(mockContext.addPost).toHaveBeenCalledWith('Test Group', 'Test Post', 'Test Content');
    });
});
