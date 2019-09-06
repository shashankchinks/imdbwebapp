import mongoose from "mongoose";
export class Db{
    private static connectionString: string = "mongodb://localhost:27017/imdbApp";
    public static connectMongoDb(){
        mongoose.connect(this.connectionString,{useNewUrlParser:true}).then(()=>{
            console.log("Db connection successs");
        }).catch(err=>{
            console.log(err);
            console.log("Db connection fail");
        });
    }
}