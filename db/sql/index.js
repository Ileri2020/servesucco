import dbsql from "../../config/sql";
import Blogs from "./queryBlog";

export const dbsql = dbsql;

dbsql.connect(err => {
    if(err) console.log(err);
});

export const Blogs = Blogs;