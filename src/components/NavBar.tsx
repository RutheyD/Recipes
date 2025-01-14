import { AppBar, Box, Button, Grid2 as Grid, Toolbar, Typography } from "@mui/material";

import { Link } from "react-router"

const NavBar = () => {

    const name = 'Ruti'

    return (<>
        {/* <Grid container>
            <Grid sx={{
                position: "fixed",
                top: 5,
                right: 5
            }}>
            <nav>
                <Link to='/'>Home</Link> |
                <Link to='/UserPage'>user</Link> |
                <Link to={`/person/${name}`}>one person</Link>
            </nav>
            </Grid>
        </Grid> */}
          <AppBar
        position="fixed"
        sx={{
          top: 5,
          right: 5,
          width: "auto",
          background: "linear-gradient(90deg,rgb(152, 214, 233),rgb(248, 163, 253))", // מעבר צבעים

        //   bgcolor: "#D291BC",
          borderRadius: 2,
        }}
      >
        <Toolbar sx={{ padding: "0 10px" }}>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button component={Link} to="/" sx={{ color: "#fff" }}>
              Home
            </Button>
            <Button component={Link} to="/UserPage" sx={{ color: "#fff" }}>
              User
            </Button>
            <Button
              component={Link}
              to={`/person/${name}`}
              sx={{ color: "#fff" }}
            >
              One Person
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>)
}

export default NavBar