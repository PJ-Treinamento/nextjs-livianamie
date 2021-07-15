import React from 'react';

import {
    Menu,
    HomeIcon,
    NotificationsIcon,
    SearchIcon,
    DMIcon
} from './styles';

const BottomMenu: React.FC = () => {
    return (
        <Menu>
            <HomeIcon className="active" />
            <NotificationsIcon />
            <SearchIcon />
            <DMIcon />
        </Menu>
    );
};

export default BottomMenu;
