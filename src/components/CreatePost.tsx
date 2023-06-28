import React, {FC, useContext, useState} from 'react';
import {GroupContext} from '@/contexts/GroupContext';

interface CreatePostProps {
    groupName: string;
}

const CreatePost: FC<CreatePostProps> = ({groupName}) => {
    const {addPost} = useContext(GroupContext);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const submit = (event: React.FormEvent) => {
        event.preventDefault();
        addPost(groupName, title, content);
        setTitle('');
        setContent('');
    };

    return (
        <div className="bg-blue-gray-200 p-6 rounded-lg shadow-lg">
            <form onSubmit={submit}>
                <input
                    className="w-full mt-1 mb-4 p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Title"/>
                <textarea
                    className="w-full h-32 mb-4 p-3 rounded-lg text-white border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    placeholder="Content"/>
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="submit">Post
                </button>
            </form>
        </div>
    );
};
export default CreatePost;
