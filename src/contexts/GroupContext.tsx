import React, { createContext, useState, ReactNode } from 'react';

interface Post {
    title: string;
    content: string;
}

interface Group {
    name: string;
    posts: Post[];
}

interface IGroupContext {
    groups: Group[];
    addGroup: (name: string) => void;
    updateGroup: (oldName: string, newName: string) => void;
    deleteGroup: (name: string) => void;
    addPost: (groupName: string, title: string, content: string) => void;
    updatePost: (groupName: string, oldTitle: string, newTitle: string, newContent: string) => void;
    deletePost: (groupName: string, postTitle: string) => void;
}

const fallbackGroupContext: IGroupContext = {
    groups: [],
    addGroup: () => {console.log("No GroupProvider!")},
    updateGroup: () => {},
    deleteGroup: () => {},
    addPost: () => {},
    updatePost: () => {},
    deletePost: () => {},
};

export const GroupContext = createContext<IGroupContext>(fallbackGroupContext);

export const GroupProvider = ({children}: { children: ReactNode }) => {
    const [groups, setGroups] = useState<Array<{ name: string, posts: Array<{ title: string, content: string }> }>>([]);

    const addGroup = (name: string) => {
        const newGroup = {name, posts: []};
        console.log('Adding group',newGroup);
        setGroups(prevGroups => [...prevGroups, newGroup]);
    };

    const updateGroup = (oldName: string, newName: string) => {
        setGroups(prevGroups => prevGroups.map(group => group.name === oldName ? {...group, name: newName} : group));
    };

    const deleteGroup = (name: string) => {
        setGroups(prevGroups => prevGroups.filter(group => group.name !== name));
    };

    const addPost = (groupName: string, title: string, content: string) => {
        setGroups(prevGroups => prevGroups.map(group => {
            if (group.name === groupName) {
                const newPost = {title, content};
                return {...group, posts: [...group.posts, newPost]};
            }
            return group;
        }));
    };

    const updatePost = (groupName: string, oldTitle: string, newTitle: string, newContent: string) => {
        setGroups(prevGroups => prevGroups.map(group => {
            if (group.name === groupName) {
                return {
                    ...group,
                    posts: group.posts.map(post => post.title === oldTitle ? {
                        title: newTitle,
                        content: newContent
                    } : post)
                };
            }
            return group;
        }));
    };
    const deletePost = (groupName: string, postTitle: string) => {
        setGroups(prevGroups => prevGroups.map(group => {
            if (group.name === groupName) {
                return {
                    ...group,
                    posts: group.posts.filter(post => post.title !== postTitle)
                };
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
