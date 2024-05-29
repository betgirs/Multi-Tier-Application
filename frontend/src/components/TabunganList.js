import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const apiUrl = process.env.REACT_APP_BACKEND_URL;
const TabunganList = () => {
    const [tabungan, setTabungan] = useState([]);
    
    useEffect(() => {
        getTabungan();
    }, []);
    
    const getTabungan = async () => {
        try {
            const response = await axios.get(`${apiUrl}/tabungan`);
            setTabungan(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    
    const hapusTabungan = async (id) => {
        try {
            await axios.delete(`${apiUrl}/tabungan/${id}`);
            getTabungan();
        } catch (error) {
            console.log(error);
        }
    }
    
    const totalUang = tabungan.reduce((total, tabungannn) => total + tabungannn.jumlah, 0);
    
    return (
        <div className=" box mt-5" style={{ margin: 0, padding: 0 }}>
            <div className="navbar is-primary" role="navigation" aria-label="main navigation" style={{ backgroundColor: '#75BAFA' }}>
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item">Tabungan</Link>
                </div>
            </div>
            <div className=" box mt-5">
                <Link to="add" className='button is-success'>Add Tabungan</Link>
                <p style={{ textAlign: 'right' }}>Total Uang: Rp. {totalUang.toLocaleString()}</p>
                <table className="table is-striped is-fullwidth mt-5">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>ID</th>
                            <th>Tanggal</th>
                            <th>Jumlah</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tabungan.map((tabungann, index) => (
                            <tr key={tabungann._id}>
                                <td>{index + 1}</td>
                                <td>{tabungann._id}</td>
                                <td>{new Date(tabungann.tanggal).toLocaleDateString()}</td>
                                <td>{tabungann.jumlah.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                                <td>
                                    <Link to={`edit/${tabungann._id}`} className="button is-success is-small">Edit</Link>
                                    <Link onClick={() => hapusTabungan(tabungann._id)} className="button is-danger is-small">Delete</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TabunganList;
