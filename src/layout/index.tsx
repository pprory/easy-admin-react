import { FC } from 'react'
import {
    Head,
    Sidebar,
    Main,
} from "~/components/index";
import { Box } from "@material-ui/core";
import Styles from "./index.module.scss";

const Layout: FC = (porp) => {
    return <Box>
        <Box>
            <Head />
        </Box>
        <Box className={Styles.mainContainer}>
            <Sidebar />
            <Main children={porp.children} />
        </Box>
    </Box>
}
export default Layout