// // import { useParams } from "react-router"
// import { RecipeType } from "../store/recipeStore"

// const RecipeToShow=({recipe}:{recipe:RecipeType})=>{
    
// // const { recipeName } = useParams()
// // const recipe = recipeStore.getRecipeByName(recipeName);

// return(<>
// <h4>{recipe.title}</h4>
// <div>
//     {recipe.description}
// </div>
// {recipe.ingredients.map(r=><div>{r}</div>)}
// <div>
//     {recipe.ingredients}
// </div>
// </>)

// }
// export default RecipeToShow
// import { Grid, Typography, Card, CardContent, List, ListItem, Divider, Box } from "@mui/material";
// import { RecipeType } from "../store/recipeStore";

// const RecipeToShow = ({ recipe }: { recipe: RecipeType }) => {
//   return (
//     <Grid container spacing={3} justifyContent="flex-end" sx={{ marginTop: 8 }}>
//       {/* כרטיס שמציג את שם המתכון וקטע תיאור */}
//       <Grid item xs={12} md={6}>
//         <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
//           <CardContent>
//             <Typography variant="h4" component="h1" sx={{ fontWeight: "bold", marginBottom: 2 }}>
//               {recipe.title}
//             </Typography>
//             <Typography variant="body1" sx={{ fontStyle: "italic", marginBottom: 2 }}>
//               {recipe.description}
//             </Typography>
//           </CardContent>
//         </Card>
//       </Grid>

//       {/* כרטיס שמציג את רשימת המרכיבים */}
//       <Grid item xs={12} md={6}>
//         <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
//           <CardContent>
//             <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
//               Ingredients:
//             </Typography>
//             <List>
//               {recipe.ingredients.map((ingredient, index) => (
//                 <ListItem key={index} sx={{ paddingLeft: 0 }}>
//                   <Typography variant="body1" sx={{ fontSize: "1.1rem", marginBottom: 1 }}>
//                     {ingredient}
//                   </Typography>
//                 </ListItem>
//               ))}
//             </List>
//           </CardContent>
//         </Card>
//       </Grid>

//       {/* דיבידר להוראות הכנה */}
//       <Grid item xs={12}>
//         <Box sx={{ paddingTop: 2 }}>
//           <Divider sx={{ marginBottom: 2 }} />
//           <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//             Preparation Instructions:
//           </Typography>
//           <Typography variant="body1">{recipe.instructions}</Typography>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// };

// export default RecipeToShow;
// import {  Typography, Card, CardContent, List, ListItem, Divider, Box, Paper } from "@mui/material";
// import { RecipeType } from "../store/recipeStore";
// import Grid from '@mui/material/Grid2';

// const RecipeToShow = ({ recipe }: { recipe: RecipeType }) => {
//   return (
//     <Grid container spacing={4} justifyContent="flex-end" sx={{ marginTop: 8 }}>
//       {/* כרטיס עם רקע כהה ותמונה */}
//       <Grid  size={8} minWidth={6}>
//         <Card sx={{ borderRadius: 2, boxShadow: 10, background: "#212121" }}>
//           <CardContent>
//             <Typography
//               variant="h4"
//               component="h1"
//               sx={{ color: "#fff", fontWeight: "bold", marginBottom: 3 }}
//             >
//               {recipe.title}
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{ color: "#b0b0b0", fontStyle: "italic", marginBottom: 3 }}
//             >
//               {recipe.description}
//             </Typography>
//           </CardContent>
//         </Card>
//       </Grid>

//       {/* כרטיס מרכיבים עם רקע בהיר וצללים */}
//       <Grid size={8} minWidth={6}>
//         <Card sx={{ borderRadius: 2, boxShadow: 10, background: "#f5f5f5" }}>
//           <CardContent>
//             <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
//               Ingredients:
//             </Typography>
//             <List>
//               {recipe.ingredients.map((ingredient, index) => (
//                 <ListItem key={index} sx={{ paddingLeft: 0, marginBottom: 1 }}>
//                   <Typography variant="body1" sx={{ fontSize: "1.1rem" }}>
//                     <span
//                       style={{
//                         fontWeight: "bold",
//                         color: "#3f51b5",
//                       }}
//                     >
//                       {ingredient}
//                     </span>
//                   </Typography>
//                 </ListItem>
//               ))}
//             </List>
//           </CardContent>
//         </Card>
//       </Grid>

//       {/* הוראות הכנה עם רקע כהה ודיבידר מיוחד */}
//       <Grid size={12} >
//         <Box sx={{ paddingTop: 2 }}>
//           <Divider sx={{ marginBottom: 3, backgroundColor: "#3f51b5" }} />
//           <Typography
//             variant="h6"
//             sx={{ fontWeight: "bold", marginBottom: 2, color: "#212121" }}
//           >
//             Preparation Instructions:
//           </Typography>
//           <Paper sx={{ padding: 3, backgroundColor: "#e0e0e0", borderRadius: 2 }}>
//             <Typography variant="body1" sx={{ fontSize: "1.1rem" }}>
//               {recipe.instructions}
//             </Typography>
//           </Paper>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// };

// export default RecipeToShow;



import { Typography, Card, CardContent, List, ListItem, Divider, Box, Paper } from "@mui/material";
import { RecipeType } from "../store/recipeStore";
import Grid from '@mui/material/Grid2';

const RecipeToShow = ({ recipe }: { recipe: RecipeType }) => {
  return (
    <Grid container spacing={4} justifyContent="flex-end" sx={{ marginTop: 8 }}>
      {/* Dark background card with image */}
      <Grid size={8} minWidth={6}>
        <Card sx={{ 
          borderRadius: 2, 
          boxShadow: 15, 
          background: "#212121", 
          "&:hover": { 
            transform: "scale(1.03)", 
            transition: "transform 0.3s ease" 
          }
        }}>
          <CardContent>
            <Typography
              variant="h4"
              component="h1"
              sx={{ color: "#fff", fontWeight: "bold", marginBottom: 3 }}
            >
              {recipe.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#b0b0b0", fontStyle: "italic", marginBottom: 3 }}
            >
              {recipe.description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Ingredients card with light background and shadow */}
      <Grid size={8} minWidth={6}>
        <Card sx={{ 
          borderRadius: 2, 
          boxShadow: 15, 
          background: "#f5f5f5", 
          "&:hover": { 
            boxShadow: 20, 
            transform: "scale(1.05)", 
            transition: "transform 0.3s ease, box-shadow 0.3s ease" 
          }
        }}>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
              Ingredients:
            </Typography>
            <List>
              {recipe.ingredients.map((ingredient, index) => (
                <ListItem 
                  key={index} 
                  sx={{ 
                    paddingLeft: 0, 
                    marginBottom: 1, 
                    "&:hover": { 
                      backgroundColor: "#e3f2fd" 
                    } 
                  }}
                >
                  <Typography variant="body1" sx={{ fontSize: "1.1rem" }}>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#3f51b5",
                        textTransform: "uppercase",
                        transition: "color 0.3s"
                      }}
                    >
                      {ingredient}
                    </span>
                  </Typography>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Grid>

      {/* Preparation Instructions card with dark background and special divider */}
      <Grid size={12}>
        <Box sx={{ paddingTop: 2 }}>
          <Divider sx={{ marginBottom: 3, backgroundColor: "#3f51b5", height: "2px" }} />
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", marginBottom: 2, color: "#212121" }}
          >
            Preparation Instructions:
          </Typography>
          <Paper sx={{ 
            padding: 3, 
            backgroundColor: "#e0e0e0", 
            borderRadius: 2, 
            "&:hover": { 
              backgroundColor: "#cfd8dc", 
              transition: "background-color 0.3s ease" 
            }
          }}>
            <Typography variant="body1" sx={{ fontSize: "1.1rem" }}>
              {recipe.instructions}
            </Typography>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default RecipeToShow;

