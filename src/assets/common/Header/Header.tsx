import {Header as AntDesignHeader} from 'antd/es/layout/layout'
import { IHeaderButtons } from '../../types/HeadetInterfaces';
import { generateButtons } from '../../Helpers/actions';

const Header: React.FC = () => {

    const buttonsArray: IHeaderButtons[] = [
        {
            title: 'Главная',
            type: 'link',
            href: '/',
        },
        {
            title: 'Новости',
            type: 'link',
            href: '',
        },
    ]

    return (
        <AntDesignHeader>
            {generateButtons(buttonsArray)}
        </AntDesignHeader>
    )
}

export default Header