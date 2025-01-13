// import axios from "axios"
// import { useEffect, useState } from "react"

// const Recipes = () => {

//     const [recipes, setRecipes] = useState([])

//     useEffect(() => {
//         const fetch = async () => {
//             try {
//                 const res = await axios.get('http://localhost:3000/api/recipes')
//                 console.log(res);
                
//                 setRecipes(res.data)
//             }
//             catch (e) {
//                 console.log(e);

//             }
//         }
//         fetch()
//     }, [])

//     return (<>
//         <h1>Recipes</h1>
//         {recipes && recipes.map((r) => <div>{r}</div>)}
//     </>)
// }

// export default Recipes