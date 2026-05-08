const express = require("express"); // import express buat bikin serper
const cors = require("cors"); // import cors biar frontend terhubung dengan backend
const db = require("./db"); // import koneksi db dari filedb.js
const app = express(); // membuat aplikasi express/server

app.use(cors()); // menagktivkan cors
app.use(express.json()); // membaca data dari express.json

//endpoint get
app.get("/siswa", (req, res) => {
    const sql = `
    SELECT
    siswa.nama_siswa,
    perusahaan.nama_perusahaan,
    pembimbing.nama_pembimbing
    
    FROM siswa
    
    jOIN perusahaan ON siswa.perusahaan_id = perusahaan.id
    jOIN pembimbing ON siswa.pembimbing_id = pembimbing.id`;

    //jalan kan queri ke db
    db.query(sql,(error,Result)=>{
        if(error){
            return res.json(error);
        }
        res.json(Result); //kalau berhasil . kirim data nya ke frontend/postman
    });
});

//jalan kan di port 3000
app.listen(3000, () => {
    console.log("server running");
});