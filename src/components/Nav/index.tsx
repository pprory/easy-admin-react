import React, { FC } from 'react'
import Styles from "./index.module.scss";
import { removeToken } from "~/utils/auth";
import { useHistory } from 'react-router-dom'

import {
    AcUnit,
    AccountCircle,
    Language,
    Book,
    PhoneAndroid
} from "@material-ui/icons";
import {
    IconButton,
    Menu,
    MenuItem,
} from "@material-ui/core";


const Head: FC = () => {
    const router = useHistory()
    const NavLeft: FC = () => {
        return <div>
            <IconButton className={Styles.Logo}>
                <AcUnit style={{ fontSize: 30, color: 'white' }} />
            </IconButton>
        </div>
    }

    const NavRight: FC = () => {
        const [anchorEl, setAnchorEl] = React.useState(null);
        const handleClick = (event: React.BaseSyntheticEvent) => {
            setAnchorEl(event.currentTarget);
        };
        const handleClose = (e?: number) => () => {
            setAnchorEl(null);
            if (e) {
                removeToken()
                router.push('/login')
            }
        };
        const iconStyle = {
            fontSize: 24,
            color: 'white',
            margin: '0 10px',
        }
        return <div className={Styles.navRight}>
            <IconButton>
                <PhoneAndroid style={iconStyle} />
            </IconButton>
            <IconButton>
                <Book style={iconStyle} />
            </IconButton>
            <IconButton>
                <Language style={iconStyle} />
            </IconButton>
            <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <AccountCircle style={iconStyle} />
            </IconButton>
            <Menu
                id="simple-menu"
                keepMounted
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose()}
            >
                <MenuItem onClick={handleClose()}>个人设置</MenuItem>
                <MenuItem onClick={handleClose(1)}>登出</MenuItem>
            </Menu>
        </div>
    }


    return <nav className={Styles.Head}>
        <NavLeft />
        <NavRight />
    </nav>
}

export default Head