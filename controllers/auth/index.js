const register = require('./register');
const login = require('./login');
const currentUser = require('./currentUser');
const updateUser = require('./updateUser');
const changeTheme = require('./changeTheme');
const logout = require('./logout');

module.exports = {
    register,
    login,
    currentUser,
    updateUser,
    changeTheme,
    logout,
};