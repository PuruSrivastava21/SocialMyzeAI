import express from 'express';
import { auth } from '../middlewares/auth.js';
import { generateArticle, generateBogTitle, generateImage, removeImageBackgroud, removeImageObject, resumeReview } from '../controllers/aiController.js';
import { upload } from '../configs/multer.js';

const aiRouter = express.Router();

aiRouter.post('/generate-article', auth, generateArticle)
aiRouter.post('/generate-blog-title', auth, generateBogTitle)
aiRouter.post('/generate-Image', auth, generateImage)
aiRouter.post('/remove-image-background', upload.single('image') ,auth, removeImageBackgroud)
aiRouter.post('/remove-image-object', upload.single('image') ,auth, removeImageObject)
aiRouter.post('/resume-review', upload.single('resume') ,auth, resumeReview)

export default aiRouter