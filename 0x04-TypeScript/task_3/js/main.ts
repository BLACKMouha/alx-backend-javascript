/// <reference path="./crud.d.ts" />/
import { RowID, RowElement } from "./interface";
import * as CRUD from './crud';

const row : RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
}

export const newRowID: RowID = CRUD.insertRow(row);
export const updatedRow: RowElement = row;
updatedRow.age = 23;
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
