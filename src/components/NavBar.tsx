import { AppBar, Box, Button, Grid2 as Grid, ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Toolbar, Typography } from "@mui/material";

import { Link } from "react-router"

const NavBar = () => {

    const name = 'Ruti'

    return (<>
    
    {/* <Paper sx={{ width: 320, maxWidth: '100%' }}>
      <MenuList>
        <MenuItem>
        <Link to='/'>
          <ListItemIcon>
       
          </ListItemIcon>
          <ListItemText>Home</ListItemText>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          </Typography></Link>
        </MenuItem>
        
        <MenuItem>
        <Link to={`/recipes`}>
          <ListItemIcon>
            <ContentCopy fontSize="small" />
            <FastfoodIcon  fontSize="small" />

          </ListItemIcon>
          <ListItemText>Show recipes</ListItemText>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          </Typography>
          </Link> 
        </MenuItem>


        
        <MenuItem>
        { context?.user.id!=null &&
                <Link to={`/addRecipe`}>
          <ListItemIcon>
            <AddIcon  fontSize="small" />
          </ListItemIcon>
          <ListItemText>Add recipe</ListItemText>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          </Typography>
          </Link> }
        </MenuItem>

      </MenuList>
    </Paper> */}
  
          <AppBar
        position="fixed"
        sx={{
          top: 5,
          right: 5,
          width: "auto",
          background: "linear-gradient(90deg,rgb(14, 117, 148),rgb(248, 163, 253))", // מעבר צבעים

        //   bgcolor: "#D291BC",
          borderRadius: 2,
        }}
      >
      
        <Toolbar sx={{ padding: "0 10px" }}>
     <Box sx={{ display: "flex", gap: 2 }}>
     <Link to='/'style={{color:'rgb(0, 0, 0)',  margin: '0 10px' }}>Home Page</Link> |
     <Link to='/UserPage' style={{color:'rgb(0, 0, 0)', margin: '0 10px' }}>User</Link> |
     <Link to={`/person/${name}`}style={{color:'rgb(0, 0, 0)', margin: '0 10px' }}> One Person</Link> |
     <Link to='/RecipesList'style={{color:'rgb(0, 0, 0)', margin: '0 10px' }}>Recipes</Link>
      {/* <Link to="/RecipesList/:recipeName" style={{color:'rgb(0, 0, 0)', margin: '0 10px' }}></Link> */}
      
     </Box>
     </Toolbar>
      </AppBar>
    </>)
}

export default NavBar