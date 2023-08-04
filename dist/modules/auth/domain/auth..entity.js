"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
var UserEntity = /** @class */ (function () {
    function UserEntity(username, email, password, role) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
    }
    return UserEntity;
}());
exports.UserEntity = UserEntity;
