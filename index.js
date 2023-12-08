import Express from "express"
const app=Express()
app.use(Express.json());


import WaitingRoutes from './routes/CreateNewWaitingAccountRoutes.js'
import userRoutes from './routes/users.js'
import AccountRoutes from "./routes/accounts.js"
import BranchRoutes from "./routes/branches.js"
import TransactionsRoutes from "./routes/transactions.js"
import visitRoutes from "./routes/visits.js"
import likeroute from './routes/likes.js'
import prizeroute from './routes/prizes.js'
import userBranchRoutes from "./routes/user_branches.js"
import commentroute from './routes/comments.js'
import productroute from './routes/products.js'
import pdfRouter from "./routes/pdf_documents.js"
import postroute from'./routes/posts.js'
import emergenceRoutes from "./routes/chatbots.js"
import employeeroute from './routes/employees.js'; // Import your employee route
app.use("/api/CreateNewWaitingAccountRoutes", WaitingRoutes);
app.use("/api/users", userRoutes);
app.use("/api/accounts",AccountRoutes)
app.use("/api/branches",BranchRoutes)
app.use("/api/transactions",TransactionsRoutes)
app.use("/api/visits",visitRoutes)
app.use("/api/user_branches",userBranchRoutes)
app.use('/api/post', postroute);
app.use("/api/chatbots",emergenceRoutes)
app.use('/api/comment', commentroute);
app.use('/api/like', likeroute);
app.use('/api/product', productroute);
app.use("/api/pdf_documents",pdfRouter)
app.use('/api/prize',prizeroute);
app.use('/api/employee', employeeroute);
app.listen(8800,'0.0.0.0',()=>{
    console.log("API WORKING!")
})