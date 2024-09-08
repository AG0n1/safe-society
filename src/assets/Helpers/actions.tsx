import { Button } from "antd"
import { IHeaderButtons } from "../types/HeadetInterfaces"
import { useNavigate } from 'react-router-dom'

export const generateKey = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let key = '';
    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        key += characters[randomIndex];
    }
    return key;
}

export const generateButtons = (buttonsArray: IHeaderButtons[]) => {

    const navigate = useNavigate()

    const navigatePage = (href: any) => {
        navigate(href)
    }

    return buttonsArray.map((button: IHeaderButtons) => {
        switch (button.type) {
            case ('link'):
                return (
                    <Button key={generateKey()} onClick={() => navigatePage(button.href)}>
                        {button.title}
                    </Button>
                )

            case ('action'):
                return (
                    <Button key={generateKey()} onClick={button.action}>
                        {button.title}
                    </Button>
                )

            default: 
                return (
                    <Button key={generateKey()}>
                        {button.title}
                    </Button>
                )
        }
    })
}