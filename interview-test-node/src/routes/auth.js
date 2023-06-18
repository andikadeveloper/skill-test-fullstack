const express = require('express');
const router = express.Router();
const User = require('../model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
    try {
        const { first_name, last_name, username, password } = req.body;

        if (!(username && password && first_name && last_name)) {
            return res.status(400).json({
                status: 'fail',
                message: 'All input is required'
            });
        }

        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return res.status(409).json({
                status: 'fail',
                message: 'User already exist'
            });
        }

        const encryptedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            first_name,
            last_name,
            username: username.toLowerCase(),
            password: encryptedPassword,
        })

        const token = jwt.sign(
            { user_id: user._id, username },
            process.env.TOKEN_KEY,
            {
                expiresIn: '2h',
            }
        );

        return res.status(201).json({
            status: 'success',
            data: {
                id: user._id,
                first_name: user.first_name,
                last_name: user.last_name,
                username: user.username,
                token: token,
            }
        });
    } catch (error) {
        console.log(error);
    }
});

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!(username && password)) {
            res.status(400).json({
                status: 'fail',
                message: 'All input is required'
            });
        }

        const user = await User.findOne({ username });
        const p = await bcrypt.hash(password, 10);

        if (user && await bcrypt.compare(password, p)) {
            const token = jwt.sign(
                { user_id: user._id, username },
                process.env.TOKEN_KEY,
                {
                    expiresIn: '2h',
                }
            );

            return res.status(200).json({
                status: 'success',
                data: {
                    id: user._id,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    username: user.username,
                    token: token,
                }
            });
        }
        return res.status(400).json({ message: 'Invalid Credentials' });
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;