import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <>
      <>
        <div style={{}}>
          <nav style={{ gap: "1rem", border: "1px solid red", alignItems: "center", display: "flex" }}>
            <ul style={{ alignItems: "center", }}>Home</ul>
            <ul style={{ alignItems: "center", }}>Project</ul>
            <ul style={{ alignItems: "center", }}>Contact me</ul>
            <ul style={{ alignItems: "center", }}>Resume</ul>
          </nav>
        </div>
        <MenuIcon sx={{ display: "none", "@media (max-width: 768px)": { display: "block" }, fontSize: "3rem", }}></MenuIcon>
      </>
    </>
  );
};

export default Navbar;
