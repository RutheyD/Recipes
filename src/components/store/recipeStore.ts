import { Description } from "@mui/icons-material";
import axios from "axios";
import { makeAutoObservable } from "mobx";

export type RecipeType = {
    id: number,
    title: string,
    description: string,
    ingredients: string[],
    authorId: number,
    instructions: string
}
class RecipeStore {
    listOfRecipes: RecipeType[] = []
    constructor() {
        makeAutoObservable(this)
        this.getAllRecipes()
    }
    async getAllRecipes() {
        try {
            const res = await axios.get(`http://localhost:3000/api/recipes/`, {})
            console.log(res.data);
            this.listOfRecipes = res.data
            //    return this.listOfRecipes
        }
        catch (e: any) {
            if (e.status === 401 || e.response && e.response === 401 || e.response === 400 || e.status === 403)
                alert('בעיה בשליפת כל הנתונים')
            console.log(e)
        }
    }
    async addRecipe(recipe: Partial<RecipeType>, id: number) {
        try {
            const res = await axios.post(`http://localhost:3000/api/recipes/`, {
                title: recipe.title,
                description: recipe.description,
                ingredients: recipe.ingredients,
                instructions: recipe.instructions
            },
                { headers: { 'user-id': id + "" } })

            this.listOfRecipes.push(res.data.recipe)
            console.log(res);

        }
        catch (e: any) {
            if (e.status === 401 || e.response && e.response === 401 || e.response === 400)
                alert('problem in add')
            if (e.status === 403)
                alert('problem in connection')

            console.log(e);
        }

    }
async updateRecipe(recipe: Partial<RecipeType>, id: number){
    try {
        const res = await axios.put('http://localhost:3000/api/recipes', {
            title: recipe.title,
            description: recipe.description,
            ingredients: recipe.ingredients,
            instructions: recipe.instructions
         
        }, {
          headers: { 'recipe-id': id + "" }
        }
        )
        this.listOfRecipes = this.listOfRecipes.map(r => (r.id === id ? res.data : r));
        // this.listOfRecipes.push(res.data.recipe)
        console.log(res);
  
       
      }
      catch (e: any) {
        if (e.status === 401 || e.response === 403 || e.response === 4000)
          alert("User Not found")
        if (e.status === 403)
            alert('problem in connection')
        console.log(e);
      }
}

}


export default new RecipeStore() 