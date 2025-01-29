
// // import { useState } from "react";
// import { RecipeType } from "../store/recipeStore";
// import { observer } from "mobx-react-lite";

// const Recipe=observer(({recipe,clickRecipeToShow}:{recipe:RecipeType,clickRecipeToShow:Function})=>{
// //    const [isShow,setIsShow]=useState(false)
// //     const sendRecipeToShow=()=>{

// // }
// return(<>
// <div>
//     <button onClick={()=>clickRecipeToShow(recipe.id)}>{recipe.title}</button>    
//     {/* {isShow&&<RecipeToShow recipe={recipe}/> } */}
// </div>

// </>)
// })
// export default Recipe

// import { RecipeType } from "../store/recipeStore";
// import { observer } from "mobx-react-lite";
// import { Box, Button, Typography } from "@mui/material";

// const Recipe = observer(({ recipe, clickRecipeToShow }: { recipe: RecipeType, clickRecipeToShow: Function }) => {
//   return (
//     <Box sx={{ marginBottom: 3 }}>
//       <Button
//         onClick={() => clickRecipeToShow(recipe.id)}
//         variant="contained"
//         sx={{
//           backgroundColor: "#3f51b5",
//           color: "#fff",
//           padding: "10px 20px",
//           borderRadius: "12px",
//           fontSize: "1.1rem",
//           width: "100%",
//           textAlign: "left",
//           boxShadow: 3,
//           '&:hover': {
//             backgroundColor: "#303f9f",
//             transform: "scale(1.05)",
//           },
//           transition: "transform 0.3s ease, background-color 0.3s",
//         }}
//       >
//         <Typography sx={{ fontWeight: "bold", color: "#fff" }}>
//           {recipe.title}
//         </Typography>
//       </Button>
//     </Box>
//   );
// });

// export default Recipe;

// import { observer } from "mobx-react-lite";
// import { RecipeType } from "../store/recipeStore";
// import { Button, Typography } from "@mui/material";

// const Recipe = observer(({ recipe, clickRecipeToShow }: { recipe: RecipeType, clickRecipeToShow: Function }) => {
//     return (
//         <div>
//             <Button
//                 variant="contained"
//                 onClick={() => clickRecipeToShow(recipe.id)}
//                 sx={{
//                     marginBottom: 1,
//                     backgroundColor: "#1976d2",
//                     '&:hover': { backgroundColor: "#1565c0" },
//                     color: "white",
//                     borderRadius: 2,
//                     width: "100%",
//                     textAlign: "left",
//                     padding: 1.5
//                 }}
//             >
//                 <Typography variant="h6">{recipe.title}</Typography>
//             </Button>
//         </div>
//     );
// });

// export default Recipe;

// import { observer } from "mobx-react-lite";
// import { RecipeType } from "../store/recipeStore";
// import { Button, Typography } from "@mui/material";

// const Recipe = observer(({ recipe, clickRecipeToShow }: { recipe: RecipeType, clickRecipeToShow: Function }) => {
//     return (
//         <div>
//             <Button
//                 variant="contained"
//                 onClick={() => clickRecipeToShow(recipe.id)}
//                 sx={{
//                     marginBottom: 1,
//                     backgroundColor: "#1976d2",
//                     '&:hover': { backgroundColor: "#1565c0" },
//                     color: "white",
//                     borderRadius: 2,
//                     width: "100%",  // Ensures the button stays at 100% width
//                     textAlign: "left",
//                     padding: 1.5
//                 }}
//             >
//                 <Typography variant="h6">{recipe.title}</Typography>
//             </Button>
//         </div>
//     );
// });

// export default Recipe;


import { observer } from "mobx-react-lite";
import { RecipeType } from "../store/recipeStore";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { useState } from "react";

const Recipe = observer(({ recipe, clickRecipeToShow }: { recipe: RecipeType, clickRecipeToShow: Function }) => {
    // const navigate = useNavigate();

    // const [selectedRecipe, setSelectedRecipe] = useState<RecipeType | null>(null);
  
  
    // const handleUpdate = (recipe: RecipeType) => {
    //   setSelectedRecipe(recipe);
    //   navigate(`${recipe.id}`)
    //   console.log("select one recipe");
  
    // }
    return (
        <div>
            <Button
                variant="contained"
                onClick={() => clickRecipeToShow(recipe.id)}
                sx={{
                    marginBottom: 2,
                    backgroundColor: "#3f51b5",
                    '&:hover': {
                        backgroundColor: "#2c387e",
                        transform: "scale(1.05)",
                        boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
                        transition: "background-color 0.3s, transform 0.3s, box-shadow 0.3s"
                    },
                    color: "white",
                    borderRadius: 3,
                    width: "100%",  // Ensures the button stays at 100% width
                    textAlign: "left",
                    padding: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    "&:active": {
                        backgroundColor: "#1a237e"
                    }
                }}
            >
                <Typography variant="h6" sx={{
                    color: "#fff",
                    fontWeight: "bold",
                    letterSpacing: 0.5,
                    textTransform: "capitalize",
                    transition: "color 0.3s"
                }}>
                    {recipe.title}
                </Typography>
            </Button>
        </div>
    );
});

export default Recipe;
