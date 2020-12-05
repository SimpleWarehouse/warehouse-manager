const express = require('express');

const UserService = require('./services');


const {
    validateFields
} = require('../../utils');


const router = express.Router();

router.post('/register', async (req, res, next) => {
    const {
        username,
        password
    } = req.body;

    try {
        validateFields({
            username: {
                value: username,
                type: 'ascii'
            },
            password: {
                value: password,
                type: 'ascii'
            },
        });

        await UserService.register(username, password);
        res.status(201).end();
    } catch (err) {
        next(err);
    }
});

router.post('/log-in', async (req, res, next) => {
    const {
        username,
        password
    } = req.body;

    try {
        validateFields({
            username: {
                value: username,
                type: 'ascii'
            },
            password: {
                value: password,
                type: 'ascii'
            },
        });

        const user = await UserService.logIn(username, password);
        res.json({
            id: user.id,
            username: user.username,
            token: user.logged_in_token,
        });
    } catch (err) {
        next(err);
    }
});

router.post('/log-out', async (req, res, next) => {
    const {
        id,
        token,
    } = req.body;

    try {
        validateFields({
            id: {
                value: id,
                type: 'int'
            },
            token: {
                value: token,
                type: 'ascii'
            },
        });

        await UserService.logOut(id, token);
        res.status(200).end();
    } catch (err) {
        next(err);
    }
});

router.post('/confirm-identity', async (req, res, next) => {
    const {
        id,
        token,
    } = req.body;

    try {
        validateFields({
            id: {
                value: id,
                type: 'int'
            },
            token: {
                value: token,
                type: 'ascii'
            },
        });

        await UserService.confirmIdentity(id, token);
        res.status(200).end();
    } catch (err) {
        next(err);
    }
});

module.exports = router;