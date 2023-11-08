import Progress from "./common/Progress"
import { Grid } from "@mui/material";

const ProgressSection = () => {
    return (

        <>
            <Grid container spacing={0} sx={{ mt: 0, mb: 0, pt: 0, display: 'block' }}>
                <Progress Topic="HTML & CSS" ProgressLabel="80" ProgressPercent="80%" />
                <Progress Topic="JavaScript" ProgressLabel="70" ProgressPercent="70%" />
                <Progress Topic="React" ProgressLabel="70" ProgressPercent="70%" />
                <Progress Topic="Next js" ProgressLabel="40" ProgressPercent="40%" />
                <Progress Topic="Bootstrap | Tailwind CSS | Material UI" ProgressLabel="70" ProgressPercent="70%" />
            </Grid>

        </>
    )
}

export default ProgressSection
