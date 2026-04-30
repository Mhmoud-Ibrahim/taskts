import { Query } from 'mongoose';
export default class ApiFeatures {
    mongooseQuery: Query<any[], any>;
    queryString: any;
    constructor(mongooseQuery: Query<any[], any>, queryString: any);
    pagination(): this;
    filter(): this;
    sort(): this;
    search(): this;
    fields(): this;
}
//# sourceMappingURL=ApiFeatures.d.ts.map