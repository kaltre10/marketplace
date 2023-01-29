const { SECRET, COOKIE_NAME } = require('../config/config');
const jwt = require('jsonwebtoken');

const auth = () => {
   
   try {
        return (req, res, next) => {
          
            let token = null;
            
            if(req.cookies) 
            
                token = req.cookies[COOKIE_NAME];
                
            if (token) {
                jwt.verify(token, SECRET, (err, decoded) => {
                    if (err) {
                        res.clearCookie(COOKIE_NAME);
                    } else {
                        req.user = decoded;
                    }
                })
            }
           
            next();
        }
   } catch (error) {
        console.log(error)
   }
    
}

module.exports = auth;