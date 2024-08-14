let config=require('../config/config');
const mysql=require('mysql2');
let db=mysql.createConnection({
    "host":config.host,
    "user":config.user,
    "password":config.password,
    "database":config.database
})
db.connect((err)=>{
    if(err){
        console.log("db connection failsd"+ err);
        return;
    }
    console.log("database connection successfull");
});

exports.getAllItems=(callback)=>{
    db.query("select * from Items ",callback);
}
exports.getItemsById=(id,callback)=>{
    db.query("select * from Items where id=?",[id],callback);
}
exports.createItem=(content,callback)=>{
console.log(content);
    let  values=[content.Username,content.Email,content.password,content.role]
        let query=`insert into Items(Username,Email,password,role) values (?,?,?,?);`;
        db.query(query,values,callback); 
}
exports.updateItem=(updated,id,callback)=>{
   console.log(updated);
    db.query("update  Items set ? where id=?",[updated,id],callback);
}

exports.deleteItem=(id,callback)=>{
    db.query("Delete from Items where id=?",[id],callback);
}
exports.createGig=(content,callback)=>{

    let  values=[content.Email,content.Gigname,content.Price,content.Skills,content.Keywords,content.ImageAddress,content.UserReview,content.GitHubLink]
    let query=`insert into Gigs(Email,Gigname,Price,Skills,Keywords,ImageAddress,UserReview,GitHubLink) values (?,?,?,?,?,?,?,?);`;
    db.query(query,values,callback); 
 

}
exports.createPosts=(content,callback)=>{
    // Email:email,Phone:pho,Website:websi,LinkedIn:Linkedin,GitHub:github,CompetitionsWon:competitionwon,Zip:zi
    let  values=[content.Email,content.Phone,content.Website,content.LinkedIn,content.GitHub,content.CompetitionsWon,content.Zip];
    let query=`INSERT INTO Posts(Email, Phone, Website, LinkedIn, GitHub, CompetitionsWon,Zip ) 
VALUES (?,?,?,?,?,?,?);
`;
    db.query(query,values,callback);
}
exports.getGigs=(callback)=>{
    db.query("select * from Gigs ",callback);
}
exports.getPosts=(callback)=>{
    db.query("select * from Posts",callback);
}
    exports.UpdatePosts=(updated,id,callback)=>{
        console.log(id);
         db.query("update  Posts set ? where Email=?",[updated,id],callback);
     }
     