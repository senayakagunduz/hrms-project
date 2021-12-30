import React from 'react'
import { Menu } from 'semantic-ui-react'

export default function Categories() {
    return (
        <div>
            <Menu pointing vertical>
                <Menu.Item name="Adaylar"/>
                <Menu.Item name="İş ilanları"/>
                <Menu.Item name="İş verenler"/>
            </Menu>
        </div>
    );
}
