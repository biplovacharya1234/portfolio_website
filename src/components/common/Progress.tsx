import 'bootstrap/dist/css/bootstrap.min.css';
import { Grid } from "@mui/material";

interface ProgressProps {
    Topic: string;
    ProgressLabel: string;
    ProgressPercent: string;
}

const Progress = (props: ProgressProps) => {
    return (
        <>
            <Grid item md={6} xs={12} sx={{ mt: 0, mb: 0, p: 0, textAlign: "left", border: "5px solid green", m: 'auto' }}>
                <div spacing={0} sx={{ mt: 0, mb: 0, pt: 0 }}>
                    <p>{props.Topic}</p>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: `${props.ProgressPercent}` }}>
                            {props.ProgressLabel}
                        </div>
                    </div>
                </div>
            </Grid>

        </>

    )
}

export default Progress