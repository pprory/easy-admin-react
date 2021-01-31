import React, { FC, useState } from 'react'
import Styles from './index.module.scss'
import {
    Card,
    TextField,
    Button,
    InputAdornment,
    FormControl,
    Input,
    InputLabel,
    IconButton,
} from "@material-ui/core";
import { VisibilityOff, Visibility } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import {
    Login,
} from "~/api";
import { setToken, getToken } from "~/utils/auth";
import { RouteComponentProps } from 'react-router-dom'

const Home: FC<RouteComponentProps> = (router) => {

    if (getToken()) router.history.push('/')

    const handleClickShowPassword = () => {
        setUserInfo({ ...userInfo, showPassword: !userInfo.showPassword });
    }
    const handleMouseDownPassword = (event: React.BaseSyntheticEvent) => {
        event.preventDefault();
    }
    const classes = useStyles()
    const [isDisabled, setDisabled] = useState(true)
    const [userInfo, setUserInfo] = useState({
        account: '',
        password: '',
        showPassword: false
    })
    const handlerInput = (
        prop: string,
    ) => (
        e: React.BaseSyntheticEvent,
        ) => {
            setUserInfo({ ...userInfo, [prop]: e.target.value })
            setDisabled(!(userInfo.account && userInfo.password))
        }
    const submit = async () => {
        const { data } = await Login()
        setToken(data)
        if (router.location.search.includes('redirect')) {
            router.history.push(router.location.search.split('=')[1])
        } else {
            router.history.push('/')
        }
    }
    return <div className={Styles.container}>
        <Card className={classes.root}>
            <h1>EASY ADMIN</h1>
            <TextField
                onChange={handlerInput('account')}
                className={classes.account} label="用户名"
                autoFocus
            />
            <FormControl className={classes.account}>
                <InputLabel htmlFor="standard-adornment-password">密码</InputLabel>
                <Input
                    id="standard-adornment-password"
                    type={userInfo.showPassword ? 'text' : 'password'}
                    value={userInfo.password}
                    onChange={handlerInput('password')}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {userInfo.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
            <Button
                className={classes.loginBtn}
                variant="contained"
                color="primary"
                disabled={isDisabled}
                onClick={() => submit()}
            >登录</Button>
        </Card>
    </div>
}


const useStyles = makeStyles((theme) => ({
    root: {
        opacity: '0.88',
        [theme.breakpoints.up('sm')]: {
            width: 475,
            minHeight: 500,
            position: "absolute",
            right: "230px",
            top: "50%",
            padding: "68px",
            boxSizing: 'border-box',
            transform: "translateY(-50%)"
        },
        [theme.breakpoints.down('sm')]: {
            minWidth: 335,
            height: 500,
            padding: "68px",
            boxSizing: 'border-box',
            margin: '100px 20px',
        }
    },
    account: {
        width: '100%',
        marginBottom: '30px',
        marginTop: '10px',
    },
    loginBtn: {
        height: '44px',
        marginTop: '30px',
        width: '100%',
    }
}));

export default Home