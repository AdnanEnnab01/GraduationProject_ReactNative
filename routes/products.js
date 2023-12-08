import express from 'express';
import { createProduct,deleteProduct,getProductsHouseByMaxPrice,getProductsByMaxPrice,updateProduct,getAllProducts,getProductsByCarCategory,getProductsByHouseCategory,getProductById,getProductsUnderAccountPrice } from '../controllers/product.js'; // Import the controller function

const router = express.Router();
router.post('/',createProduct)
router.get('/', (req, res, next) => {
    if (req.query.search) {
        getProductById(req, res);
    } else {
        next(); // Move to the next handler (getAllProducts) if no search query is present
    }
}, getAllProducts); // Route handler to get all products

router.get('/car', getProductsByCarCategory);
router.get('/house', getProductsByHouseCategory);
router.get('/car/:price', getProductsByMaxPrice);
router.get('/house/:price', getProductsHouseByMaxPrice);

router.get('/underprice/:account_id', getProductsUnderAccountPrice);

router.delete("/:id", deleteProduct);
router.put("/:id",updateProduct);
export default router;