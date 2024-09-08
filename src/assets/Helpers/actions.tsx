import { Button } from "antd"
import { IHeaderButtons } from "../types/HeadetInterfaces"

const generateButtons = (buttonsArray: IHeaderButtons[]) => {
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