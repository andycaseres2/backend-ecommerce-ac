"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
var CreateUserDto = /** @class */ (function () {
    function CreateUserDto(username, email, password, role) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
    }
    return CreateUserDto;
}());
exports.CreateUserDto = CreateUserDto;
