import express from "express";
import { 
    getTabungan, 
    getTabunganById,
    tambahTabungan,
    editTabungan,
    hapusTabungan
} from "../controllers/TabunganController.js";
const router = express.Router();

router.get('/tabungan', getTabungan);
router.get('/tabungan/:id', getTabunganById);
router.post('/tabungan', tambahTabungan);
router.patch('/tabungan/:id', editTabungan);
router.delete('/tabungan/:id', hapusTabungan);

export default router;