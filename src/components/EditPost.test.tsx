import { fireEvent, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EditPost from './EditPost';
import { PostType } from './Group';

const setup = (post) => {
    const onSave = jest.fn();
    const onCancel = jest.fn();
    const utils = render(<EditPost post={post} onSave={onSave} onCancel={onCancel} />);
    const titleInput = utils.getByTestId('title-input');
    const contentInput = utils.getByTestId('content-input');
    const saveButton = utils.getByRole('button', { name: 'Save' });
    const cancelButton = utils.getByRole('button', { name: 'Cancel' });
    return {
        titleInput,
        contentInput,
        saveButton,
        cancelButton,
        onSave,
        onCancel,
        ...utils,
    }
}


test('it renders without crashing', () => {
    const post = { id: "1", title: "Test title", content: "Test content" };
    render(<EditPost post={post} onSave={jest.fn()} onCancel={jest.fn()} />);
});


test('calls onSave with title and content when save is clicked', async () => {
    const post: PostType = {
        id: '1',
        title: 'Test title',
        content: 'Test content',
    };

    const { titleInput, contentInput, saveButton, onSave } = setup(post);

    fireEvent.change(titleInput, { target: { value: 'New title' } });
    fireEvent.change(contentInput, { target: { value: 'New content' } });

    fireEvent.click(saveButton);

    await waitFor(() => {
        expect(onSave).toHaveBeenCalledTimes(1);
        expect(onSave).toHaveBeenCalledWith('New title', 'New content');
        const titleInputElement = titleInput as HTMLInputElement;
        const contentInputElement = contentInput as HTMLInputElement;
        expect(titleInputElement.value).toBe('New title');
        expect(contentInputElement.value).toBe('New content');
    });
});

test('calls onCancel when cancel is clicked', async () => {
    const post: PostType = {
        id: '1',
        title: 'Test title',
        content: 'Test content',
    };

    const { cancelButton, onCancel } = setup(post);

    await userEvent.click(cancelButton);

    await waitFor(() => {
        expect(onCancel).toHaveBeenCalledTimes(1);
    });
});
