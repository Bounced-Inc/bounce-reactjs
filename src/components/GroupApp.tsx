import CreateGroup from './CreateGroup';
import GroupList from "@/components/GroupList";

const GroupApp = () => {
    return (
        <div>
            <h1>Group App</h1>
            <CreateGroup />
            <GroupList />
        </div>
    );
};

export default GroupApp;
