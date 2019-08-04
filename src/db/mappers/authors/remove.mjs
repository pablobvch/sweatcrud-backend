//@flow

import {name as authorTableName} from "./authorTable";

const onRemoveSucceed = removeAuthorsCount => removeAuthorsCount === 1;

const getRemoveQuery = (db, id) =>
  db(authorTableName)
    .where({id})
    .del();

const removeUsing = (db, id) => transaction =>
  getRemoveQuery(db, id)
    .transacting(transaction)
    .then(onRemoveSucceed);

const remove = (db: any, id: number) => db.transaction(removeUsing(db, id));

export default remove;
