שינויים בשרת:
1
בקומפוננטה
LOGIN:
על המשתמש להכניס שם פרטי בסיסמה
2
בעדכון עשיתי רק לפי השדות האלו:
firstName, lastName, mail, address, phone
3
במתכון מחקתי את 
products

שינויים בשרת
פונקציית PUT 
עדכון מתכון:
```js
router.put('/', recipeMiddleware, (req, res) => {
    const {title,description,ingredients,instructions } = req.body;
    const id = parseInt(req.header('recipe-id'));

    const db = JSON.parse(fs.readFileSync(dbPath));

    const recipe = db.recipes.find(r => r.id === id);

    if (!recipe) {
        return res.status(404).json({ message: "Recipe not found" });
    }

   recipe.title=title,
   recipe.description=description,
   recipe.instructions=instructions,
   recipe.ingredients=ingredients

    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

    res.json(recipe);
});
```
קובץ recipeMiddleware
```js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (req, res, next) => {
    const recipeId = req.header('recipe-id');
    const db = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json')));

    const recipe = db.recipes.find(recipe => recipe.id == recipeId);
    if (!recipe) {
        return res.status(403).json({ message: "Unauthorized" });
    }

    req.recipe = recipe;
    next();
};
```