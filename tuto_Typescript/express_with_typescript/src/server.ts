import dotenv from 'dotenv';
import app from "./app";

dotenv.config();
const PORT = process.env.PORT ? process.env.PORT : 8080

export default app.listen(PORT, () => console.log("Server running at port :", PORT));