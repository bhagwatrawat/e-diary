// import User from './../../models/user';
import clientPromise from './../../lib/mongodb';
export default async function handler(req,res){
    const client = await clientPromise;
    const db = client.db("ediary");
    if(req.method === 'POST'){
        const {username,email,password} = req.body;
        const findUser = await db.collection('user').findOne({username});
        if(findUser){
            res.json({error:"username already exists"});
            return ;
        }
        const findEmail= await db.collection('user').findOne({email});
        if(findEmail){
            res.json({error:"email already exists"});
            return ;
        }
        else{

            db.collection('user').insertOne({
                username,
                email,
                password,
            })
            .then(data=>{
                res.send(data);
            })
            .catch(err=>{
                console.log(err);
            })
        }
        }
        
    }