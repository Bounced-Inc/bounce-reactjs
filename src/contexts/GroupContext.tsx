import React, { createContext, FC, useState } from 'react';

interface GroupType {
    name: string;
    posts: Array<{
        id: string;
        title: string;
        content: string;
    }>;
}

interface GroupContextProps {
    groups: Array<GroupType>;
    addGroup: (name: string) => void;
    updateGroup: (oldName: string, newName: string) => void;
    deleteGroup: (name: string) => void;
    addPost: (groupName: string, title: string, content: string) => void;
    updatePost: (groupName: string, postId: string, newTitle: string, newContent: string) => void;
    deletePost: (groupName: string, title: string) => void;
}

export const GroupContext = createContext<GroupContextProps>({
    groups: [],
    addGroup: () => {},
    updateGroup: () => {},
    deleteGroup: () => {},
    addPost: () => {},
    updatePost: () => {},
    deletePost: () => {},
});

interface GroupContextProviderProps {
    children: React.ReactNode;
}

export const GroupContextProvider: FC<GroupContextProviderProps> = ({ children }) => {

        const [groups, setGroups] = useState<Array<GroupType>>([]);

    const addGroup = (name: string) => {
        setGroups([...groups, { name, posts: [] }]);
    };

    const updateGroup = (oldName: string, newName: string) => {
        setGroups(groups.map(group => group.name === oldName ? { ...group, name: newName } : group));
    };

    const deleteGroup = (name: string) => {
        setGroups(groups.filter(group => group.name !== name));
    };

    const addPost = (groupName: string, title: string, content: string) => {
        const postId = Date.now().toString();
        setGroups(groups.map(group => group.name === groupName ? { ...group, posts: [...group.posts, { id: postId, title, content }] } : group));
    };

    const updatePost = (groupName: string, postId: string, newTitle: string, newContent: string) => {
        setGroups(groups.map(group => {
            if (group.name === groupName) {
                const newPosts = group.posts.map(post => post.id === postId ? { ...post, title: newTitle, content: newContent } : post);
                return { ...group, posts: newPosts };
            }
            return group;
        }));
    };

    const deletePost = (groupName: string, postId: string) => {
        setGroups(groups.map(group => {
            if (group.name === groupName) {
                const newPosts = group.posts.filter(post => post.id !== postId);
                return { ...group, posts: newPosts };
            }
            return group;
        }));
    };

    return (
        <GroupContext.Provider value={{ groups, addGroup, updateGroup, deleteGroup, addPost, updatePost, deletePost }}>
            {children}
        </GroupContext.Provider>
    );
};
