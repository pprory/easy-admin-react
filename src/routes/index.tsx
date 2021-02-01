import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { FC } from 'react'
import { map as RouteMap } from "./map";
import { getToken } from "~/utils/auth";
import Login from "~/views/login/index"
import Layout from "~/layout/index";

const Router: FC = () => {
    return <BrowserRouter>
    <Switch>
        <Route path="/login" exact component={Login} />
        <Layout>
            <Switch>
                {RouteMap.map((item, index) => {
                    return <Route
                        key={index}
                        path={item.path}
                        exact={item.exact}
                        render={props => {
                            return getToken() ? <item.component key={item.name} children {...props} /> : <Redirect to={"/login?redirect=" + item.path} />
                        }}
                    />
                })}
            </Switch>
        </Layout>
    </Switch>
    </BrowserRouter>
}
export default Router