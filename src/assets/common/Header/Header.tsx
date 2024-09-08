import { Button } from 'antd';
import {Header as AntDesignHeader} from 'antd/es/layout/layout'
import { ReactNode } from 'react';
import { IHeaderButtons } from '../../types/HeadetInterfaces';

const Header: React.FC = () => {

    const buttonsArray: IHeaderButtons[] = [
        {
            title: 'Главная',
            type: 'link',
            href: '',
        },
        {
            title: 'Новости',
            type: 'link',
            href: '',
        },
    ]

    const generateButtons = () => {
        return buttonsArray.map((button: IHeaderButtons) => {
            switch (button.type) {
                case ('link'):
                    return (
                        <Button>
                            {button.title}
                        </Button>
                    )

                case ('action'):
                    return (
                        <Button onClick={button.action}>
                            {button.title}
                        </Button>
                    )

                default: 
                    return (
                        <Button>
                            {button.title}
                        </Button>
                    )
            }
        })
    }

    return (
        <AntDesignHeader>
            {generateButtons()}
        </AntDesignHeader>
    )
}

export default Header