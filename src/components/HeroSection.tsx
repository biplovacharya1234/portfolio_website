import { Grid } from "@mui/material";
import { Box } from "@mui/material";

const HeroSection = () => {
  return (
    <>
      <Grid container spacing={0} sx={{ mt: 0, mb: 0, pt: 0, border: "5px solid blue" }}>
        <Grid item justifyContent="center" md={3} xs={12} sx={{ mt: 0, mb: 0, border: "5px solid yellow", display: 'flex' }}>
          <img src="../src/assets/react.svg" alt="" style={{ width: "10rem" }} />
        </Grid>
        <Grid
          item md={9} xs={12} sx={{ mt: 0, mb: 0, p: 2, textAlign: "left", border: "2x solid red", }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
          excepturi vitae molestias fugit iusto, numquam non incidunt adipisci
          provident sit sint vel cumque quis, quos repellat eius iste
          voluptatem aliquid impedit, recusandae totam ratione voluptates
          neque laborum. Omnis molestias aliquid accusamus beatae dolor quas
          blanditiis nostrum eveniet dignissimos modi, similique ducimus non
          nihil delectus, quam nulla? Quam consectetur quisquam officia
          reiciendis cumque libero consequuntur, quidem laudantium architecto.
          Vero nostrum amet temporibus aliquam ipsam totam praesentium rerum
          quaerat! Eveniet doloribus accusamus officia quae mollitia, quam
          laborum necessitatibus recusandae veniam, velit eos possimus
          voluptatibus ipsam quod omnis consequuntur ratione, voluptatum quo
          veritatis.
        </Grid>
      </Grid>
      <Box sx={{ border: "2px solid red" }}></Box>
    </>
  );
};

export default HeroSection;
