// const AddRecipe=()=>{
    import { SubmitHandler, useFieldArray, useForm } from "react-hook-form"
    import { yupResolver } from "@hookform/resolvers/yup"
    import { array, object, string } from "yup"
    import { Box, Button, Modal, TextField, Typography } from "@mui/material"
// import recipeStore, { RecipeType } from "../store/recipeStore"
import { useContext, useState } from "react"
import { IdContext } from "../HomePage"
import { observer } from "mobx-react-lite"
import recipeStore, { RecipeType } from "../store/recipeStore"
import AddIcon from "@mui/icons-material/Add";
import SendIcon from "@mui/icons-material/Send";



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    background: "linear-gradient(90deg,rgb(139, 161, 168),rgb(225, 241, 255))",
    border: '3px solidrgb(103, 39, 107) ',
    boxShadow: 24,
    borderRadius: '16px',
    p: 4,
    overflowY: 'auto', // Added this line to enable vertical scrolling
    maxHeight: '80vh', // Optional: limit the height to prevent excessive scrolling
};  
const schema = object({
    title: string().required('Title is required'),
    description: string().required().min(10, 'Description nust be 10 letters'),
    // ingredients: string().required('error'),
    ingredients: array()
        .of(string().required('Each product is required')) // כל פריט במערך חייב להיות מחרוזת
        .min(1, 'At least one product is required'), // חייב להיות לפחות מוצר אחד
    instructions: string().required('Instructions are required'),

})
    
    
    const AddRecipe =observer (() => {
        //user id to send 
         const [id] = useContext(IdContext)
         const [clicked, setClicked] = useState(false)

        //   const context = useContext(UserContext)
        
        // const [ingredients, setIngredients] = useState<string[]>([""]); // Initialize with one empty ingredient
        // const [ingredient, setIngredient] = useState<string>(""); // Initialize with one empty ingredient
    
        // const handleIngredientChange = (index: number, value: string) => {
        //     const newIngredients = [...ingredients];
        //     newIngredients[index] = value;
        //     setIngredients(newIngredients);
        // };
        // const handleAddIngredient = () => {
        //     if (ingredient) { // לבדוק אם המחרוזת לא ריקה
        //         setIngredients([...ingredients, ingredient]); // הוספה למערך
        //         setIngredient(''); // איפוס שדה הקלט
        //     }
        //   };
        // const addIngredient = () => {
        //     setIngredients([...ingredients, ""]); // Add a new empty ingredient field
        // };
    
        // const removeIngredient = (index: number) => {
        //     const newIngredients = ingredients.filter((_, i) => i !== index);
        //     setIngredients(newIngredients);
        // };
        const onSubmit: SubmitHandler<Partial<RecipeType>> = async (data) => {
           if(id)
            recipeStore.addRecipe(data,+id)
           setClicked(false);
            console.log(data);
            
            reset({ingredients:[]})
            // setIngredients([""]); // Reset ingredients to one empty field
        }

        const { control } = useForm({ resolver: yupResolver(schema) });

        const {
            register,
            handleSubmit,
            reset,
            watch,
            formState: { errors }
        } = useForm({ resolver: yupResolver(schema) })
        
        const { fields, append, remove } = useFieldArray({
            control, // ודאי ש-control קיים
            name: "ingredients", // שם המערך כפי שהוא בסכמה
        });
        const handleModalOpen = () => {
            console.log("yyyyyyyyyyyy");
            reset({
                ingredients: [] 
            });
            fields.forEach((field, index) => {
               console.log(field);              
                remove(index); 
            });
        };
        return (<>  
        { id|| id != 0 ?
        <Button onClick={() => { handleModalOpen()
            setClicked(true)
         }} variant="outlined" sx={{ backgroundColor: 'white', color: "rgb(14, 117, 148)",   border: '1px solid gray' }}>Add Recipe</Button>
        :null}  
        <Modal
            open={clicked}
            onClose={() => { setClicked(false) }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div><TextField {...register('title')} type="text" fullWidth label="title" variant="outlined" />
                            {errors.title && <span>{errors.title.message}</span>}</div>
                        <div><TextField {...register('description')} type="text" fullWidth label="description" variant="outlined" />
                            {errors.description && <span>{errors.description.message}</span>}</div>
                        <Typography variant="subtitle1" sx={{ mt: 2 }}>Ingredients:</Typography>                    
                        {fields.map((field, index) => (
                            <div key={field.id}>
                                <TextField
                                    {...register(`ingredients.${index}`)}
                                    type="text"
                                    fullWidth
                                    variant="outlined"
                                    label={`Ingredient ${index + 1}`}
                                />
                                <Button onClick={() => remove(index)}>Remove</Button>
                            </div>
                        ))}
                        <Button
                            onClick={() => append({})}
                            variant="outlined"
                            startIcon={<AddIcon />}
                        >
                            Add Product
                        </Button>

                        <div><TextField {...register('instructions')} type="text" fullWidth label="instructions" variant="outlined" />
                            {errors.instructions && <span>{errors.instructions.message}</span>}</div>


                        <Button type='submit' variant="contained" endIcon={<SendIcon />} sx={{
                            backgroundColor: 'white',
                            color:  "rgb(14, 117, 148)", 
                            marginTop: '15px',
                            '&:hover': {
                                backgroundColor: '#f5f5f5',
                            },
                        }}
                        >Send</Button>
                    </form>
                </Typography>

            </Box>
        </Modal>

        </>)
    })
    export default AddRecipe
    
    