const expenseModal = require("../model/expense");
const jwt = require('jsonwebtoken');
const router = require("express").Router();

function authenticateToken(req, res, next) {
  
  const token = req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }

  jwt.verify(token, process.env.TOKEN_SECRET, { ignoreExpiration: false } , (err, user) => {
    if (err) {
      console.log(err)
      return res.status(403).json({ err: 'Unauthorized: Invalid token' });
    }
    req.user = user;
    next();
  });
}

router.get("/", (req, res, next) => {
  res.json({
    posts: {
      title: "Hi There",
    },
  });
});

router.post("/expense/add", authenticateToken, async (req, res) => {
  try {
    console.log("testing")
    const expenseDetails = await expenseModal.create(req.body);
    res.status(200).json({ status: true, message: "Added Successfully", data: expenseDetails });
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

router.get("/expense" , authenticateToken, async (req, res) => {
  try {
    const expenseDetails = await expenseModal.find({});
    res.status(200).json({ expenseDetails });
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

router.get("/expense/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const expenseDetails = await expenseModal.findById(id);
    res.status(200).json({ expenseDetails });
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

router.post("/expense/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const expenseDetails = await expenseModal.findByIdAndUpdate(
      id,
      req.body
    );
    if (!expenseDetails) {
      res.status(400).json({ data: "Not available expense details" });
    }
    const updateExpense = await expenseModal.findById(id);
    res.status(200).json({ status: true, message: "Edited Successfully" });
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

router.delete("/expense/:id", authenticateToken ,async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id, "id")
    const expenseDetails = await expenseModal.findByIdAndDelete(
      id,
      req.body
    );
    if (!expenseDetails) {
      res.status(400).json({ data: "Not available delete expense details" });
    }
    res.status(200).json({ status: true, message: "Deleted Successfully" });
  } catch (err) {
    res.status(400).json({ error: err });
  }
});



module.exports = router;