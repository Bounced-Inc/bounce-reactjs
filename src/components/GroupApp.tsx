import CreateGroup from './CreateGroup';
import GroupList from "@/components/GroupList";

const GroupApp = () => {
    return (
        <div className="min-h-screen flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="mb-8 text-center text-3xl font-extrabold text-gray-900">Group App</h1>
            <CreateGroup />
            <GroupList />
        </div>
    );
};

export default GroupApp;
