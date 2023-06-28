import { FC } from 'react';

interface PostProps {
    title: string;
    content: string;
    onEdit: () => void;
    onDelete: () => void;
}

const Post: FC<PostProps> = ({ title, content, onEdit, onDelete }) => (
    <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
    </div>
);

export default Post;
