import {FC, useContext, useState} from 'react';
import {GroupContext} from '@/contexts/GroupContext';

interface CreatePostProps {
    groupName: string;
}

const CreatePost: FC<CreatePostProps> = ({ groupName } : any) => {
    const { addPost } = useContext(GroupContext);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const submit = () => {
        addPost(groupName, title, content);
        setTitle('');
        setContent('');
    };

    return (
        <div>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
            <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content" />
            <button onClick={submit}>Create</button>
        </div>
    );
};
export default CreatePost;
