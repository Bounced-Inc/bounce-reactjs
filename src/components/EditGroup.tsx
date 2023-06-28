import {FC, useContext, useState} from 'react';
import {GroupContext} from '@/contexts/GroupContext';

class EditGroupProps {
    name: string = '';
}

const EditGroup: FC<EditGroupProps> = ({ name }) => {
    const { updateGroup } = useContext(GroupContext);
    const [newName, setNewName] = useState(name);

    const submit = () => {
        updateGroup(name, newName);
    };

    return (
        <div>
            <input type="text" value={newName} onChange={e => setNewName(e.target.value)} placeholder="Group name" defaultValue={name} />
            <button onClick={submit}>Update</button>
        </div>
    );
};
export default EditGroup;