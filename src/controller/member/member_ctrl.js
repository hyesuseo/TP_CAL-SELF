const ser = require("../../service/member/member_service")


const loginCheck = async (req, res) => {
    let msg = await ser.loginCheck(req.body)
    res.send(msg);
}
const logout = (req, res) => {
    // 로그아웃
}
const register = async ( req, res ) => {
     //console.log("ctrl body:", req.body)
     let msg = await ser.register(req.body);
     res.send(msg);

}




module.exports = {loginCheck, logout, register}