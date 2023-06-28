import React, {useContext, useState} from 'react';
import {GroupContext} from '@/contexts/GroupContext';

const CreateGroup = () => {
    const {addGroup} = useContext(GroupContext);
    const [name, setName] = useState('');

    const submit = (event: React.FormEvent) => {
        event.preventDefault();
        addGroup(name);
        console.log('submitted form with name', name);
        setName('');
    };

    return (
        <div className="rounded-md shadow-sm w-1/2 mx-auto">
            <form onSubmit={submit}>
                <input
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Group name"/>
                <button
                    className="mt-2 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    type="submit">
                    Create Group
                </button>
            </form>
        </div>
    );
};

export default CreateGroup;