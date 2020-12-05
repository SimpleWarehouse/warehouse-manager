const { v4: uuid } = require('uuid');

const {
    query
} = require('../../data');


const {
    ServerError
} = require('../../errors');

const {
    hash,
    compare
} = require('../../security');

const register = async (username, password) => {
    const usersWithSameUsername = await query('SELECT * FROM users WHERE username = $1', [username]);

    if (usersWithSameUsername.length > 0) {
        throw new ServerError('Username taken', 400);
    }

    let cryptoPass = await hash(password);
    await query('INSERT INTO users (username, password_hash) VALUES ($1, $2)', [username, cryptoPass]);
};


const logIn = async (username, password) => {
    const usersWithSameUsername = await query('SELECT * FROM users WHERE username = $1', [username]);

    if (usersWithSameUsername.length === 0) {
        throw new ServerError('Wrong credentials', 400);
    }
    const user = usersWithSameUsername[0];

    const check = await compare(password, user.password_hash);
    if (!check) {
        throw new ServerError('Wrong credentials', 400);
    }

    const token = uuid();

    const alteredUsers = await query('UPDATE users SET logged_in_token = $2 WHERE id = $1 RETURNING *', [user.id, token]);


    return alteredUsers[0];
};


const logOut = async (id, token) => {
    const alteredUsers = await query('UPDATE users SET logged_in_token = NULL WHERE id = $1 AND logged_in_token = $2 RETURNING *', [id, token]);

    if (alteredUsers.length === 1) {
        throw new ServerError('Unconfirmed identity', 400);
    }
};

const confirmIdentity = async (id, token) => {
    const users = await query('SELECT * FROM users WHERE id = $1', [id]);

    if (users.length === 0 || users[0].logged_in_token !== token) {
        throw new ServerError('Unconfirmed identity', 400);
    }
};

module.exports = {
    register,
    logIn,
    logOut,
    confirmIdentity
}