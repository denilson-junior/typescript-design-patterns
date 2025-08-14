import { MyDatabaseFunction } from './db/my-database-iife.ts';
import { myDatabaseClassic as MyDatabaseClassicFromModuleA } from './module_a.ts';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Zanito', age: 16, active: true });
myDatabaseClassic.add({ name: 'Pericles', age: 29, active: false });
myDatabaseClassic.add({ name: 'Kanobio', age: 44, active: false });
myDatabaseClassic.show();

console.log(myDatabaseClassic === MyDatabaseClassicFromModuleA);
