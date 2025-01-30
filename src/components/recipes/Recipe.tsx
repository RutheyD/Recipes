import { observer } from "mobx-react-lite";
import { RecipeType } from "../store/recipeStore";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Recipe = observer(({ recipe }: { recipe: RecipeType }) => {
    const navigate = useNavigate();
    const handleUpdate = (recipe: RecipeType) => {
        navigate(`${recipe.id}`)
        console.log("select one recipe");
    }
    return (

        <Button
            onClick={() => handleUpdate(recipe)}
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
            {recipe.title}
        </Button>

    );
});
export default Recipe
