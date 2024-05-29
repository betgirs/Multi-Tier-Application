import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const apiUrl = process.env.REACT_APP_BACKEND_URL;
const AddTabungan = () => {

   
    const [tanggal, setTanggal]=useState("");
    const [jumlah, setJumlah]=useState("");
    const navigate = useNavigate();

    const tambahTabungan = async(e)=>{
        e.preventDefault();
        try{
            await axios.post(`${apiUrl}/tabungan`,{
                
                tanggal,
                jumlah
            });
            navigate("/");
        }catch(error){
            console.log(error);
        }
    }
  return (
    <div className="rectangle is-centered mt-5">   
     <div className="navbar is-primary" role="navigation" aria-label="main navigation" style={{ backgroundColor: '#75BAFA' }}>
                <div className="navbar-brand">
                    <p to="/" className="navbar-item">Tambah Tabungan</p>
                </div>
            </div>
        <div className="box is-half mt-5">
            <form onSubmit={tambahTabungan}>
            <div className="field">
                <label className="label">Tanggal</label>
                <div className="control">
                    <input type="date" 
                    className="input" 
                    value={tanggal} 
                    onChange= {(e)=>setTanggal(e.target.value)} 
                    placeholder='Tanggal'/>
                </div>
            </div>
            <div className="field">
                <label className="label">Jumlah</label>
                <div className="control">
                    <input type="number" 
                    className="input" value={jumlah} 
                    onChange= {(e)=>setJumlah(e.target.value)}
                    placeholder='Jumlah'/>
                </div>
            </div>
            <div className="field">
                <div className="control">
                   <button type= "submit" className='button is-success'>Save</button>
                </div>
            </div>
            </form>
        </div>
    </div>
  );
};

export default AddTabungan

