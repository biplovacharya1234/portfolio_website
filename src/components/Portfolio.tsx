import { Grid } from "@mui/material";
import Project from "./common/project"
const Portfolio = () => {

    return (
        <>
            <Grid container spacing={0} sx={{ mt: 0, mb: 0, pt: 0 }}>
                <Project myImage="../src/assets/react.svg" />
                <Project myImage="../src/assets/react.svg" />
                <Project myImage="../src/assets/react.svg" />
                <Project myImage="../src/assets/react.svg" />
                <Project myImage="../src/assets/react.svg" />
                <Project myImage="../src/assets/react.svg" />
            </Grid>

        </>

    )
}

export default Portfolio