import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { FC } from 'react'
import { map as RouteMap } from "./map";
import { getToken } from "~/utils/auth";
import Login from "~/views/login/index"

const Router: FC = () => {
    return <BrowserRouter>
        <Switch>
            <Route path="/login" component={Login} exact />
            {RouteMap.map(((item, index) => {
                return <Route
                    path={item.path}
                    exact
                    key={index}
                    render={props => {
                        return getToken() ? <item.component children {...props} /> : <Redirect to={"/login?redirect=" + item.path} />
                    }}
                />
            }))}
        </Switch>
    </BrowserRouter>
}
export default Router