
import clientPromise from './../../lib/mongodb';
import {ObjectId} from 'mongodb';
export default async function handler(req,res){
    const client = await clientPromise;
    const db = client.db("ediary");
    if(req.method === "POST"){
        console.log(req.body)
        console.log('hel')
        const diary = db.collection('diary');
        diary.insertOne({
            data:req.body,
            date:Date.now(),
        })
        .then(data=>{
            res.json(data);
            console.log('ok')
        })
        .catch(err=>{
            console.log(err);
        })
    }
    if(req.method==='GET'){
        const diary = db.collection('diary');
        diary.find({_id:ObjectId("632368216c4c60bff586930f")}).toArray().then(data=>{
            res.json(data);
        })
        .catch(err=>{
            console.log(err);
        })
    }
}