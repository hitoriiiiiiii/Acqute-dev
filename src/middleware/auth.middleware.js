import logger from '#config/logger.js';
import {jwttoken} from '#utils/jwt.js';

export const authenticateToken = (req, res, next) => {
    try{
        const token = req.cookies.token;

        if (!token){
            return res.status(401).json({
                error: 'Authenticate required',
                message: 'No access token provided',
            });
        }

        const decoded = jwttoken.verify(token);
        req.user = decoded;

        logger.info(`User authenticated : ${decoded.email} (${decoded.role})`);
        next();
    } catch(e) {
        logger.error('Authenticate error: ' , e);

        if (e.message === 'Failed to authenticate token'){
            return res.status(401).json({
                error: 'Authentification failed',
                meesage: 'Invalid or expired toekn',
            });
        }
        return res.status(500).json({
            error: 'Internal server error',
            message: 'Error during authentication',
        });
    }
};

export const requireRole = allowedRoles => {
    return (res, req, next) => {
        try{
            if(!req.user){
                return res.status(401).json({
                    error: 'Authentication required',
                    message: 'User not authenticate',
                });
            }
            if (!allowedRoles.includes(req.users.role)){
                logger.warn(
                    `Access denied for user $(req.user.email} with the role ${req.user.role}. Required: ${allowedRoles.join(',')}`
                );
                return res.status(403).json({
                    error: 'Access denied',
                    message: 'Insufficient permission',
                });
            }
            next();
        } catch(e){
            logger.error('Role verification error: ', e);
            return res.status(500).json({
                error: 'Internal server error',
                message: 'Error during role verifications',
            });
        }
    };
};
