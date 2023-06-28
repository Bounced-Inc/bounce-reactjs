import {useContext, useEffect} from 'react';
import { GroupContext } from '@/contexts/GroupContext';
import Group from "@/components/Group";

const GroupList = () => {
    const { groups, deleteGroup } = useContext(GroupContext);

    console.log('groups',groups);
    useEffect(() => {
        console.log(groups);
    }, [groups]);

    return (
        <div className="flex flex-col items-center">
            {groups.length <= 0 ? (
                <p>No groups!</p>
            ) : (
                groups.map((group: any, index: number) => (
                    <Group
                        key={index}
                        name={group.name}
                        posts={group.posts}
                        onDelete={() => deleteGroup(group.name)}
                    />
                ))
            )}
        </div>
    );
};

export default GroupList;
