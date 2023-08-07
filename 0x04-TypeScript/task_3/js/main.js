"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatedRow = exports.newRowID = void 0;
var CRUD = require("./crud");
var row = {
    firstName: 'Guillaume',
    lastName: 'Salva',
};
exports.newRowID = CRUD.insertRow(row);
exports.updatedRow = row;
exports.updatedRow.age = 23;
CRUD.updateRow(exports.newRowID, exports.updatedRow);
CRUD.deleteRow(exports.newRowID);
