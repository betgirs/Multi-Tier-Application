import Tabungan from "../models/tabunganModel.js";

export const getTabungan = async(req, res)=>{
    try{
        const tabung = await Tabungan.find();
        res.json(tabung);
    }catch(error){
        res.status(500).json({
            message: error.message
        });
    }
}

export const getTabunganById = async(req, res)=>{
    try{
        const tabung1 = await Tabungan.findById(req.params.id);
        res.json(tabung1);
    }catch(error){
        res.status(404).json({
            message: error.message
        });
    }
}

export const tambahTabungan = async(req, res)=>{
    const { tanggal, jumlah } = req.body;

    if (!tanggal || !jumlah) {
        return res.status(400).json({ message: 'Tanggal dan jumlah harus diisi' });
    }

    try {
        const newTabungan = new Tabungan({
            tanggal: new Date(tanggal),
            jumlah
        });
        await newTabungan.save();
        res.status(201).json(newTabungan);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const editTabungan = async(req, res)=>{
    try{
        const edtTabung = await Tabungan.updateOne({_id:req.params.id},{$set:req.body});
        res.status(200).json(edtTabung);
    }catch(error){
        res.status(400).json({
            message: error.message
        });
    }
}

export const hapusTabungan = async(req, res)=>{
    try{
        const hpsTabung = await Tabungan.deleteOne({_id:req.params.id});
        res.status(200).json(hpsTabung);
    }catch(error){
        res.status(400).json({
            message: error.message
        });
    }
}