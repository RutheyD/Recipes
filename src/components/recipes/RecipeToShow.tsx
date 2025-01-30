import { Typography, Card, CardContent, List, ListItem, Divider } from "@mui/material";
import recipeStore from "../store/recipeStore";
import { useParams } from "react-router";

const RecipeToShow = () => {
    const { id } = useParams();

    const recipe = recipeStore.listOfRecipes.find(r => r.id === Number(id));
    return (
        recipe ? (
            <Card sx={{ width: "100%", padding: 2, boxShadow: 3 }}>
                <CardContent >
                    <Typography variant="h4" sx={{ fontWeight: "bold", color: "rgb(14, 117, 148)" }}>
                        {recipe.title}
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: 2, fontStyle: 'italic' }}>
                        {recipe.description}
                    </Typography>

                    <Divider sx={{ my: 2 }} />

                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "rgb(14, 117, 148)" }}>Ingredients:</Typography>
                    <List>
                        {recipe.ingredients?.map((ingredient, index) => (
                            <ListItem key={index} sx={{ padding: 0 }}>
                                - {ingredient}
                            </ListItem>
                        ))}
                    </List>

                    <Divider sx={{ my: 2 }} />

                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "rgb(14, 117, 148)" }}>Preparation Instructions:</Typography>
                    <Typography variant="body1" sx={{ marginTop: 2 }}>
                        {recipe.instructions}
                    </Typography>
                </CardContent>
            </Card>
        ) : (
            <Typography variant="h6" sx={{ textAlign: "center", color: "#888" }}>Select a recipe to view details</Typography>
        )
    );
};
export default RecipeToShow;

