import {FC, useContext, useState} from 'react';
import {GroupContext} from '@/contexts/GroupContext';

const EditPost: FC<EditPostProps> = ({ groupName, title: oldTitle, content: oldContent }: any) => {
    const { updatePost } = useContext(GroupContext);
    const [title, setTitle] = useState(oldTitle);
    const [content, setContent] = useState(oldContent);

    const submit = () => {
        updatePost(groupName, oldTitle, title, content);
        onDone();
    };

    return (
        <div>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" defaultValue={oldTitle} />
            <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content" defaultValue={oldContent} />
            <button onClick={submit}>Update</button>
        </div>
    );
};
export default EditPost;