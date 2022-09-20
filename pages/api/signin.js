
// import clientPromise from './../../lib/mongodb';
export default async function handler(req,res){
    // const client = await clientPromise;
    // const db = client.db("ediary");
    // const diary = db.collection('diary');
    // diary.insertOne({
    //     data:"this is the data",
    //     date:Date.now(),
    // })
    // .then(data=>{
    //     res.json(data);
    // })
    // .catch(err=>{
    //     console.log(err);
    // })
    console.log('hello')
    if(req.method === 'POST'){
        console.log(req.body)
        res.json(req.body);
    }
}