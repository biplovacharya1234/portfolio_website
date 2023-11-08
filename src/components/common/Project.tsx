import { Grid } from "@mui/material";

interface ProjectProps {
    myImage: string;
}

const Project = (props: ProjectProps) => {
    return (
        <>
            <Grid item lg={4} sm={6} xs={12} sx={{ mt: 0, mb: 0, p: 0, textAlign: "left", border: "2px solid red" }}><img src={props.myImage} alt="" style={{ width: "10rem", }} /></Grid>
        </>
    )
}

export default Project