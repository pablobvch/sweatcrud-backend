//@flow

import {name as publicationTableName} from "./publicationTable";

const onRemoveSucceed = removepublicationsCount =>
  removepublicationsCount === 1;

const getRemoveQuery = (db, id) =>
  db(publicationTableName)
    .where({id})
    .del();

const removeUsing = (db, id) => transaction =>
  getRemoveQuery(db, id)
    .transacting(transaction)
    .then(onRemoveSucceed);

const remove = (db: any, id: number) => db.transaction(removeUsing(db, id));

export default remove;
