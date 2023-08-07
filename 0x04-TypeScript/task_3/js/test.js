"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CRUD = require("./crud");
var main_1 = require("./main");
var obj = { firstName: "Guillaume", lastName: "Salva" };
CRUD.insertRow(obj);
// Insert row {firstName: "Guillaume", lastName: "Salva"}
var updatedRow = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(main_1.newRowID, updatedRow);
// Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}
CRUD.deleteRow(125);
// Delete row id 125
