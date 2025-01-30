
import { observer } from "mobx-react-lite";
import recipeStore from "../store/recipeStore";
import { Typography, Box } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { Outlet } from "react-router";
import Recipe from "./Recipe";

const RecipeList = observer(() => {
    return (
        <Grid container sx={{ height: "100vh", padding: 2, background: "white" }}>
            <Grid size={6} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", borderRight: "2px solid #ccc", overflowY: "auto" }}>
                <Box sx={{ width: "80%" }}>
                    <Typography variant="h5" sx={{ marginBottom: 2, fontWeight: "bold", textAlign: "center" }}>Our Recipes : </Typography>
                    {recipeStore.listOfRecipes.map((r) => (
                        <Recipe key={r.id} recipe={r} />
                    ))}
                </Box>
            </Grid>

            <Grid size={6} sx={{ display: "flex", alignItems: "center", justifyContent: "center", overflowY: "auto" }}>
                <Box sx={{ width: "80%" }}>
                    {<Outlet />}
                </Box>
            </Grid>
        </Grid>
    );
});
export default RecipeList
