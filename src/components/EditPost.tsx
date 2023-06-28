import React, { useState } from 'react';
import { PostType } from './Group';

interface EditPostProps {
    post: PostType;
    onSave: (title: string, content: string) => void;
    onCancel: () => void;
}

const EditPost: React.FC<EditPostProps> = ({ post, onSave, onCancel }) => {
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

    return (
        <div className="bg-cornflower-blue p-4 rounded">
            <input
                data-testid="title-input"
                className="w-full mb-2 p-2 rounded border border-gray-300"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                data-testid="content-input"
                className="w-full h-32 mb-2 p-2 rounded border border-gray-300"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <div className="flex justify-end space-x-2">
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={() => onSave(title, content)}>Save</button>
                <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700" onClick={onCancel}>Cancel</button>
            </div>
        </div>
    );
};

export default EditPost;
