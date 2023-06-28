import React, {useContext, useState} from 'react';
import {GroupContext} from '@/contexts/GroupContext';

const CreateGroup = () => {
    const {addGroup} = useContext(GroupContext);
    const [name, setName] = useState('');

    const submit = (event: React.FormEvent) => {
        event.preventDefault();
        addGroup(name);
        console.log('submitted form with name',name);
        setName('');
    };

    return (
        <div>
            <form onSubmit={submit}>
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Group name"/>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateGroup;