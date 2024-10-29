import connect from "../../config/mongodb.js";
import Post from "./post.js";
import ShippingAddress from "./address.js";
import Cart from "./carts.js";
import Coupon from "./coupons.js";
import Notification from "./notifications.js";
import Order from "./orders.js";
import Payment from "./payments.js";
import Refund from "./refunds.js";
import Review from "./reviews.js";
import Stock from "./stocks.js";
import User from "./users.js";
import Sale from "./sales.js";



export default {
    connect, Post, ShippingAddress, Cart, Coupon, Notification,
    Order, Payment, Refund, Review, Stock, User, Sale,
}