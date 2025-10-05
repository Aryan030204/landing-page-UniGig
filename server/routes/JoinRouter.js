const joinlist = require("../controllers/joinWaitlist");

const router = require("express").Router();

router.post("/waitinglist/join", joinlist);

module.exports = router
