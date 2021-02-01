
import { RouteProps } from "react-router-dom";
import Test from "~/views/Text/index";
import Test1 from "~/views/Text1/index";
import { FC } from "react";

// all route info
interface T extends RouteProps {
    name: string,
    component: FC,
}

export const map: T[] = [
    {
        path: '/',
        name: 'App',
        exact: true,
        component: Test,
    }, {
        path: '/Test',
        name: 'Test',
        component: Test1,
    }
]