import {Header as AntDesignHeader} from 'antd/es/layout/layout'
import { IHeaderButtons } from '../../types/HeadetInterfaces';
import { generateButtons } from '../../Helpers/actions';
import { titles } from '../constants/titles';

const Header: React.FC = () => {

    const buttonsArray: IHeaderButtons[] = [
        {
            title: titles.header.navButtons.main,
            type: 'link',
            href: '/',
        },
        {
            title: titles.header.navButtons.news,
            type: 'link',
            href: 'news',
        },
        {
            title: titles.header.navButtons.support,
            type: 'link',
            href: 'support'
        }
    ]

    return (
        <AntDesignHeader>
            {generateButtons(buttonsArray)}
        </AntDesignHeader>
    )
}

export default Header