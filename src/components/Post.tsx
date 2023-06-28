import { FC } from 'react';

interface PostProps {
    id: string;
    title: string;
    content: string;
    onEdit: () => void;
    onDelete: () => void;
}

const Post: FC<PostProps> = ({ title, content, onEdit, onDelete }) => (
    <div className="bg-blue-200 flex justify-between items-start w-full my-2 p-4 mb-8 rounded-lg shadow-lg">
        <div className="bg-conflower-blue text-black p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p className="text-lg">{content}</p>
        </div>
        <div className="flex flex-col items-center justify-center m-3 p-3">
            <button onClick={onEdit} className="mb-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700">Edit</button>
            <button onClick={onDelete} className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700">Delete</button>
        </div>
    </div>
);

export default Post;
