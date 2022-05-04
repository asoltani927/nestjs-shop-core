import { QueryOperation } from './type-defs/query-filter.interface';

export class QueryBuilder {
  async filter(query: any) {
    const q = [];
    const { limit, page, sort, ASC } = query;
    const filter = Object.entries(query).filter(
      ([key]) => !['limit', 'page', 'sort', 'ASC'].includes(key),
    );
    for (const f of filter) {
      const [name, operations] = f;
      const [op, value] = Object.entries(operations)[0];
      q.push(this.getQuery(name, op as QueryOperation, value)); //get query from operation and value
    }

    return { query: q, pagination: { limit, page, sort, ASC: ASC ? 1 : -1 } };
  }

  private getQuery(name: string, op: QueryOperation, value) {
    const mapping: { [key in QueryOperation]: (...args: any[]) => any } = {
      eq: ([name, value]) => {
        return { [name]: value };
      },
      between: ([name, value]) => {
        return {};
      },
      gte: ([name, value]) => {
        return { [name]: { $gte: value } };
      },
      lte: ([name, value]) => {
        return { [name]: { $lte: value } };
      },
      like: ([name, value]) => {
        return { [name]: new RegExp(value) };
      },
      gt: ([name, value]) => {
        return { [name]: { $gt: value } };
      }, //greater than
      lt: ([name, value]) => {
        return { [name]: { $lt: value } };
      }, //less than
      in: ([name, value]) => {
        return;
      }, //in
      any: ([name, value]) => {
        return;
      }, //
      isnull: ([name, value]) => {
        return;
      }, //
      not: ([name, value]) => {
        return { [name]: { $ne: value } };
      },
    };
    const mongoOp = mapping[op];
    return mongoOp([name, value]);
  }
}
