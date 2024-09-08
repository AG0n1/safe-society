import { Button } from "antd"
import { IHeaderButtons } from "../types/HeadetInterfaces"
import { useNavigate } from 'react-router-dom'

export const generateButtons = (buttonsArray: IHeaderButtons[]) => {

    const navigate = useNavigate()

    const navigatePage = (href: any) => {
        navigate(href)
    }

    return buttonsArray.map((button: IHeaderButtons) => {
        switch (button.type) {
            case ('link'):
                return (
                    <Button onClick={() => navigatePage(button.href)}>
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