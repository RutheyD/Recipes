import { createBrowserRouter } from "react-router";
import AppLayout from "./components/AppLayout";
import RecipeList from "./components/recipes/RecipesList";
import RecipeToShow from "./components/recipes/RecipeToShow";
import AddRecipe from "./components/recipes/AddRecipe";
import UpdateRecipesList from "./components/recipes/UpdateRecipesList";

export const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <>main error</>,
        children: [
            {
                path: 'RecipesList/', element: <RecipeList />
                , children: [{

                    path: ':id', element: <RecipeToShow />
                }]

            },
            {
                path: 'AddRecipe/', element: <AddRecipe />
            },
            {
                path: 'UpdateRecipe/', element: <UpdateRecipesList />
            }
        ]
    }
])


