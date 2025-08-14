import { MyDatabaseFunction } from './db/my-database-iife.ts';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Rogerio', age: 30, active: true });
myDatabaseClassic.add({ name: 'Angelica', age: 25, active: true });
myDatabaseClassic.add({ name: 'Mario', age: 19, active: false });

export { myDatabaseClassic };
