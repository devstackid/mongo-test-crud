const {MongoClient} = require('mongodb');


const uri = 'mongodb://127.0.0.1:27017';

const dbName = 'mongodb';

// setup mongodb
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

client.connect((error,client) => {
    if(error) {
        return console.log('koneksi gagal')
    }
    
    // pilih database
    const db = client.db(dbName);

    // attach variable ObjectID
    const ObjectID = require('mongodb').ObjectID

    // Menambahkan 1 data ke collection mahasiswa - insertOne
    // db.collection('mahasiswa').insertOne({
    //  nama: 'erik',
    //  email: 'erik@gmail.com'   
    // },
    // (error, result) => {
    //     if(error) {
    //         return console.log('gagal menambahkan data')
    //     }
    //     console.log(result);
    // }
    // )


    // ------------------------------------------------------
    // Menambahkan lebih dari satu data - insertMany
    // db.collection('mahasiswa').insertMany([
    //     {
    //         nama: "aji",
    //         email: "aji@gmail.com"
    //     },
    //     {
    //         nama: "rangga",
    //         email: "rangga@gmail.com"
    //     }
    // ],
    // (error, result) => {
    //     if(error){
    //         return console.log('data gagal ditambahkan')
    //     }
    //     console.log(result);
    // }
    // )


    // ----------------------------------------------
    // Menampilkan semua data yang ada di tabel mahasiswa - dbfind()
    // console.log(db.collection('mahasiswa').find().toArray((error, result)=>{
    //     console.log(result);
    // }));

    // -------------------------------------------------
    // Menampilkan data berdasarkan kriteria nama
    // console.log(db.collection('mahasiswa').find({nama: "Wahyu"}).toArray((error, result)=>{
    //     console.log(result);
    // }));

    // -----------------------------------------
    // menampilkan data berdasarkan kriteria id
    // console.log(db.collection('mahasiswa').find({ _id: ObjectId('653b26a1960c36a453cf8b76')} ).toArray((error, result)=>{
    //     console.log(result);
    // }));

    // ---------------------------------------------
    // mengubah sebuah data berdasarkan id - updateOne
    // const updatePromise = db.collection('mahasiswa').updateOne(
    //     {
    //         _id: ObjectID("653b2763960c36a453cf8b78"),
    //     },
    //     {
    //         $set: {
    //             nama: 'Avif',
    //             email: "avif@gmail.com"
    //         }
    //     }
    // );

    // updatePromise.then((result) => {
    //     console.log(result);
    // }).catch((error)=> {
    //     console.log(error);
    // });

    // -------------------------------------------------------------
    // mengubah banyak data berdasarkan nama - updateMany
    // db.collection('mahasiswa').updateMany(
    //     {
    //         nama: 'Saif'
    //     },
    //     {
    //         $set: {
    //             nama: 'Arifin'
    //         }
    //     }
    // )

    // -------------------------------------------------------------
    // menghapus 1 data berdasarkan id - deleteOne
    // db.collection('mahasiswa').deleteOne(
    //     {
    //         _id: ObjectID("653b2caa827a201c5c831cf2")
    //     }
    // ).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // -------------------------------------------------------------
    // menghapus lebih dari 1 data berdasarkan nama - deleteMany
    // db.collection('mahasiswa').deleteMany(
    //     {
    //        nama: "Arifin"
    //     }
    // ).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })



});