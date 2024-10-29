import dbsql from "../../config/sql";

export const all = async () => {
    return new Promise((reolve, reject) => {
        dbsql.query("SELECT * from blogs", (err, results) => {
            if(err){
                return reject(err);
            }
            resolve(results);
        });
    });
}

export default {
    all,
}