/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create a new row
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert the row and get new ID
const newRowID: RowID = CRUD.insertRow(row);

// Update the row with age
const updatedRow: RowElement = {
  ...row,
  age: 23,
};

// Update and delete operations
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
