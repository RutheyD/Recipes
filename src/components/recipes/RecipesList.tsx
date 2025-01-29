// import { observer } from "mobx-react-lite"
// import Grid222 from '@mui/material/Grid2222';
// import { useState } from "react";
// import recipeStore, { RecipeType } from "../store/recipeStore";
// import Recipe from "./Recipe";
// import RecipeToShow from "./RecipeToShow";
// // import { List, ListItemButton, ListItemText } from "@mui/material";
// const RecipeList= observer(()=>{
//     const[ clickedRecipe,setClickedRecipe]=useState<RecipeType|undefined>(undefined);
//        const [isShow,setIsShow]=useState(false)
//     const clickOnRecipe=(id:number)=>{
//         setIsShow(true)
//         setClickedRecipe(recipeStore.listOfRecipes.find(r=>r.id===id))
//     }   
// return(
//     <>
//     <Grid222 container> 
// <Grid size={6}>
//     <div>Our Recipes</div>
//     {recipeStore.listOfRecipes.map(r=>
// <Recipe key={r.id} recipe={r} clickRecipeToShow={clickOnRecipe}/>
//     )
// }
// </Grid>
// <Grid222 size={6}>
//     {isShow&&clickedRecipe&&<RecipeToShow recipe={clickedRecipe}/> }

// </Grid222>
// </Grid222>
//     </>
// )
// })
// export default RecipeList
//---------------------------------------------------------------------------------------
// import { observer } from "mobx-react-lite";
// import { Grid222, Typography, Paper, Button, Box } from "@mui/material";
// import { useState } from "react";
// import recipeStore, { RecipeType } from "../store/recipeStore";
// import Recipe from "./Recipe";
// import RecipeToShow from "./RecipeToShow";

// const RecipeList = observer(() => {
//   const [clickedRecipe, setClickedRecipe] = useState<RecipeType | undefined>(undefined);
//   const [isShow, setIsShow] = useState(false);

//   const clickOnRecipe = (id: number) => {
//     setIsShow(true);
//     setClickedRecipe(recipeStore.listOfRecipes.find((r) => r.id === id));
//   };

//   return (
//     <Grid222 container spacing={4} sx={{ marginTop: 8 }}>
//       {/* כותרת רשימה */}
//       <Grid222 item xs={12} md={6}>
//         <Typography variant="h3" sx={{ fontWeight: "bold", color: "#3f51b5", marginBottom: 4 }}>
//           Our Recipes
//         </Typography>
//         <Paper sx={{ padding: 3, backgroundColor: "#f5f5f5", borderRadius: 3, boxShadow: 5 }}>
//           {recipeStore.listOfRecipes.map((r) => (
//             <Recipe key={r.id} recipe={r} clickRecipeToShow={clickOnRecipe} />
//           ))}
//         </Paper>
//       </Grid222>

//       {/* הצגת המתכון שנבחר */}
//       <Grid222 item xs={12} md={6}>
//         {isShow && clickedRecipe && <RecipeToShow recipe={clickedRecipe} />}
//       </Grid222>
//     </Grid222>
//   );
// });

// export default RecipeList;

// import { observer } from "mobx-react-lite";
// import Grid222 from '@mui/material/Grid222';
// import { useState } from "react";
// import recipeStore, { RecipeType } from "../store/recipeStore";
// import Recipe from "./Recipe";
// import RecipeToShow from "./RecipeToShow";
// import { Typography, Paper } from "@mui/material";

// const RecipeList = observer(() => {
//     const [clickedRecipe, setClickedRecipe] = useState<RecipeType | undefined>(undefined);
//     const [isShow, setIsShow] = useState(false);

//     const clickOnRecipe = (id: number) => {
//         setIsShow(true);
//         setClickedRecipe(recipeStore.listOfRecipes.find(r => r.id === id));
//     }

//     return (
//         <>
//             <Grid222 container spacing={2}>
//                 {/* Left side */}
//                 <Grid222 item xs={12} md={6}>
//                     <Paper sx={{ padding: 2, backgroundColor: "#f5f5f5", borderRadius: 2 }}>
//                         <Typography variant="h5" gutterBottom>
//                             Our Recipes
//                         </Typography>
//                         {recipeStore.listOfRecipes.map(r => (
//                             <Recipe key={r.id} recipe={r} clickRecipeToShow={clickOnRecipe} />
//                         ))}
//                     </Paper>
//                 </Grid222>

//                 {/* Right side */}
//                 <Grid222 item xs={12} md={6}>
//                     {isShow && clickedRecipe && <RecipeToShow recipe={clickedRecipe} />}
//                 </Grid222>
//             </Grid222>
//         </>
//     );
// });

// export default RecipeList;
// import { observer } from "mobx-react-lite";
// import Grid222 from '@mui/material/Grid222';
// import { useState } from "react";
// import Recipe from "./Recipe";
// import recipeStore, { RecipeType } from "../store/recipeStore";
// import RecipeToShow from "./RecipeToShow";
// import { Typography, Paper, Box } from "@mui/material";

// const RecipeList = observer(() => {
//     const [clickedRecipe, setClickedRecipe] = useState<RecipeType | undefined>(undefined);
//     const [isShow, setIsShow] = useState(false);

//     const clickOnRecipe = (id: number) => {
//         setIsShow(true);
//         setClickedRecipe(recipeStore.listOfRecipes.find(r => r.id === id));
//     }

//     return (
//         <>
//             <Grid222 container spacing={2} sx={{ height: "100vh" }}>
//                 {/* Left side: Fixed to the left side of the screen */}
//                 <Grid222 item xs={12} md={3}>
//                     <Box sx={{ 
//                         position: 'fixed', 
//                         top: 0, 
//                         left: 0, 
//                         height: '100%', 
//                         overflowY: 'auto', 
//                         padding: 2, 
//                         backgroundColor: "#f5f5f5", 
//                         borderRadius: 2 
//                     }}>
//                         <Typography variant="h5" gutterBottom>
//                             Our Recipes
//                         </Typography>
//                         {recipeStore.listOfRecipes.map(r => (
//                             <Recipe key={r.id} recipe={r} clickRecipeToShow={clickOnRecipe} />
//                         ))}
//                     </Box>
//                 </Grid222>

//                 {/* Right side: Shows the selected recipe */}
//                 <Grid222 item xs={12} md={9} sx={{ marginLeft: 'auto', padding: 2 }}>
//                     {isShow && clickedRecipe && <RecipeToShow recipe={clickedRecipe} />}
//                 </Grid222>
//             </Grid222>
//         </>
//     );
// });

// export default RecipeList;

import { observer } from "mobx-react-lite";
import { useState } from "react";
import recipeStore, { RecipeType } from "../store/recipeStore";
import Recipe from "./Recipe";
import RecipeToShow from "./RecipeToShow";
import { Typography, Box } from "@mui/material";
import Grid from '@mui/material/Grid2';


const RecipeList = observer(() => {
    const [clickedRecipe, setClickedRecipe] = useState<RecipeType | undefined>(undefined);
    const [isShow, setIsShow] = useState(false);

    const clickOnRecipe = (id: number) => {
        setIsShow(true);
        setClickedRecipe(recipeStore.listOfRecipes.find(r => r.id === id));
    }

    return (
        <>
            <Grid container spacing={2} sx={{ height: "100vh" }}>
                {/* Left side: Fixed to the left side of the screen, vertically centered */}
                <Grid  size={8} >
                    <Box sx={{
                        position: 'fixed',
                        top: '50%',
                        left: 0,
                        transform: 'translateY(-50%)', // This centers the box vertically
                        padding: 2,
                        backgroundColor: "#f5f5f5",
                        borderRadius: 2,
                        width: '200px', // Make sure it's not too wide
                    }}>
                        <Typography variant="h5" gutterBottom>
                            Our Recipes
                        </Typography>
                        {recipeStore.listOfRecipes.map(r => (
                            <Recipe key={r.id} recipe={r} clickRecipeToShow={clickOnRecipe} />
                        ))}
                    </Box>
                </Grid>

                {/* Right side: Shows the selected recipe */}
                {/* <Grid2 component="div" item xs={12} md={9} sx={{ marginLeft: 'auto', padding: 2 }}>
    {isShow && clickedRecipe && <RecipeToShow recipe={clickedRecipe} />}
</Grid2> */}
        <Grid  size={8} sx={{ marginLeft: 'auto', padding: 2 }}>
            {isShow && clickedRecipe && <RecipeToShow recipe={clickedRecipe} />}
        </Grid>
            </Grid>
        </>
    );
});

export default RecipeList;
