import { AppBar, Box, Toolbar } from "@mui/material";
import { Link } from "react-router"

import { useContext } from "react";
import { IdContext } from "./AppLayout";
const NavBar = () => {
  const [id] = useContext(IdContext);
  return (<>

    <AppBar
      position="fixed"
      sx={{
        top: 5,
        right: 5,
        width: "auto",
        background: "linear-gradient(90deg,rgb(14, 117, 148),rgb(248, 163, 253))", // מעבר צבעים
        borderRadius: 2,
      }}
    >

      <Toolbar sx={{ padding: "0 10px" }}>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Link to='/' style={{ color: 'rgb(0, 0, 0)', margin: '0 10px' }}>Home Page</Link> |
          <Link to='/RecipesList' style={{ color: 'rgb(0, 0, 0)', margin: '0 10px' }}>Recipes</Link>
          {id != 0 &&
           <> | <Link to="/AddRecipe" style={{ color: 'rgb(0, 0, 0)', margin: '0 10px' }}>Add Recipe</Link>
            | <Link to="/UpdateRecipe" style={{ color: 'rgb(0, 0, 0)', margin: '0 10px' }}>Update Recipe</Link>
          </>}

        </Box>
      </Toolbar>
    </AppBar>
  </>)
}

export default NavBar
