import React, { FC, useContext, useState } from 'react';
import { GroupContext } from '@/contexts/GroupContext';
import Post from './Post';
import EditPost from './EditPost';
import CreatePost from "@/components/CreatePost";

export interface PostType {
    id: string;
    title: string;
    content: string;
}

interface GroupProps {
    name: string;
    onDelete: () => void;
}

const Group: FC<GroupProps> = ({ name, posts, onDelete}) => {
    const { deletePost, updatePost } = useContext(GroupContext);
    const [editingPost, setEditingPost] = useState<string | null>(null);

    return (
        <div className="m-4 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex flex-col items-center space-x-4">
            <h2 className="text-xl font-medium text-black">Group {name}</h2>
            {posts.map((post, index) =>
                editingPost === post.id ? (
                    <EditPost
                        key={index}
                        post={post}
                        onSave={(title, content) => {
                            setEditingPost(null);
                            updatePost(name, post.id, title, content);
                        }}
                        onCancel={() => setEditingPost(null)}
                    />
                ) : (
                    <Post
                        key={index}
                        id={post.id}
                        title={post.title}
                        content={post.content}
                        onEdit={() => setEditingPost(post.id)}
                        onDelete={() => deletePost(name, post.id)}
                    />
                )
            )}
            <CreatePost groupName={name} />
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={onDelete}>Delete {name}</button>
        </div>
    );
};

export default Group;
