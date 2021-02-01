import { FC } from "react";
import { Box } from "@material-ui/core";
import Styles from "./index.module.scss";
import { Route, Switch } from "react-router-dom";
/* import Test1 from "~/views/Text/index";
import Test2 from "~/views/Text1/index"; */

const Main: FC = (prop) => {
    return <Box className={Styles.main}>
        {prop.children}
  {/*       <Switch>
            <Route path="/" exact component={Test1}></Route>
            <Route path="/" component={Test2}></Route>
        </Switch> */}
    </Box>
}

export default Main

