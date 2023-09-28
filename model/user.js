const database= require('../database/db');
module.exports= class User{
    constructor(id,name, email, phone){
        this.id=id;
        this.name=name;
        this.email=email;
        this.phone=phone;
    }

    save(){
        return database.execute('INSERT INTO booking (ID , NAME,EMAIL,PHONE) VALUES (? ,?,?,?)',[this.id , this.name,this.email,this.phone])
    }

    static fetchAll(){
        return database.execute('SELECT * FROM booking');

    }

    static deleteById(id){
        return database.execute('DELETE FROM booking WHERE id= (?)',[id]);

    }
}
