import "dotenv/config"
import jwt from "jsonwebtoken"

export function createAccessToken({ userId, role }) {
    return jwt.sign(
        { userId, role },
        process.env.JWT_SECRET,
        { expiresIn: "15m" }
    )
}

export function readAccessToken(accessToken) {
    return jwt.verify(accessToken, process.env.JWT_SECRET)
}

export function createRefreshToken({ userId, role }) {
    return jwt.sign(
        { userId, role },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "7d" }
    )
}

export function readRefreshToken(refreshToken) {
    return jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)
}