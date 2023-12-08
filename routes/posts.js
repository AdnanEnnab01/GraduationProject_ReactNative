import express from 'express';
import { createPost, deletePost, updatePost, getAllPosts, getPostById, getUnseenPosts, markPostAsSeen } from '../controllers/post.js';
import { db } from '../connect.js'; // Import the db connection

const router = express.Router();
router.get('/', (req, res) => {
    if (req.query.search) {
        getAllPosts(req, res); // If search term exists, use the getAllPosts function
    } else {
        // If no search term, return all posts
        // Your default route logic without the search functionality
        const query = "SELECT * FROM posts";
        db.query(query, (err, result) => {
            if (err) return res.status(500).json(err);
            return res.json(result);
        });
    }
});
// Modify the getAllPosts route to accept a query parameter for search
// New routes for handling unseen posts and marking posts as seen
router.get('/unseen', getUnseenPosts); // Route to get unseen posts
router.put('/markseen/:id', markPostAsSeen); // Route to mark a post as seen

// ... Other routes


router.get('/:id', getPostById);
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;