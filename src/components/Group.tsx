import React, { FC, useContext, useState } from 'react';
import { GroupContext } from '@/contexts/GroupContext';
import Post from './Post';
import EditPost from './EditPost';

interface PostType {
    title: string;
    content: string;
}

interface GroupProps {
    name: string;
    posts: Array<PostType>;
    onDelete: () => void;
}

const Group: FC<GroupProps> = ({ name, posts, onDelete }) => {
    const { deletePost } = useContext(GroupContext);
    const [editingPost, setEditingPost] = useState<string | null>(null);

    return (
        <div>
            <h2>{name}</h2>
            {posts.map((post, index) =>
                editingPost === post.title ? (
                    <EditPost
                        key={index}
                        groupName={name}
                        title={post.title}
                        content={post.content}
                        onDone={() => setEditingPost(null)}
                    />
                ) : (
                    <Post
                        key={index}
                        title={post.title}
                        content={post.content}
                        onEdit={() => setEditingPost(post.title)}
                        onDelete={() => deletePost(name, post.title)}
                    />
                )
            )}
            <button onClick={onDelete}>Delete</button>
        </div>
    );
};

export default Group;
