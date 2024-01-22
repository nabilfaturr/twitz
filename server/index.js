import express from "express";
import authRoute from "./routes/auth.route.js";
import adminRoute from "./routes/admin.route.js";
import userRoute from "./routes/user.route.js";
import session from "express-session";

const app = express();
const PORT = 3000;

app.use(
  session({
    secret: "secret-key",
    saveUninitialized: true,
    cookie: { maxAge: 10 * 24 * 60 * 60 * 60 },
    resave: false,
  })
);

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/admin", adminRoute);
app.use("/api/user", userRoute);

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
