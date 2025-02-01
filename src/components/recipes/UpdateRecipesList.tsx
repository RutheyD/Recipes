import { observer } from "mobx-react-lite"
import { useContext, useState } from "react"
import { IdContext } from "../AppLayout"
import recipeStore, { RecipeType } from "../store/recipeStore"
import Grid from "@mui/material/Grid2"
import { Box, Button, Typography } from "@mui/material"
import Recipe from "./Recipe"
import UpdateRecipe from "./UpdateRecipe"

const UpdateRecipesList=observer(()=>{
const [id] = useContext(IdContext)
const list:RecipeType[]=recipeStore.listOfRecipes.filter(r=>+r.authorId===+id)
const [clicked,setClicked]=useState(false)
const [clickedRecipeId,setClickedRecipeId]=useState<RecipeType>()

    return (<>
    
    <Grid container sx={{ height: "100%", padding: 2}}>
            <Grid size={12} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflowY: "auto" }}>
                <Box sx={{ width: "80%" }}>
                    <Typography variant="h5" sx={{ marginBottom: 2, fontWeight: "bold", textAlign: "center" }}>Your recipes to update: </Typography>
                    {list.map((r) => (
                        <Button
                        key={r.id}
                        onClick={() =>{setClicked(true), setClickedRecipeId(r)} }
                        fullWidth
                        sx={{
                            marginBottom: 2,
                            padding: "20px",
                            background: "linear-gradient(90deg, rgba(14, 117, 148, 0.62), rgba(248, 163, 253, 0.73))",
                            color: "white",
                            fontWeight: "bold",
                            fontSize: "1.2rem",
                            borderRadius: 2,
                            '&:hover': {
                                background: "linear-gradient(90deg, rgb(10, 90, 120), rgb(230, 140, 240))",
                                transform: "scale(1.05)",
                                transition: "transform 0.3s ease"
                            }
                        }}>
                        {r.title}
                    </Button>
                    ))}
                </Box>
            </Grid>
{clicked&&clickedRecipeId&&<UpdateRecipe recipeToUpdate={clickedRecipeId} /*isClicked={true}*//>}          
        </Grid>
    </>)
})
export default UpdateRecipesList