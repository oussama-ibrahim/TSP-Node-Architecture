export interface Db {
    find(query?: object): Promise<any[]>
    insertOne(doc: any): void
    deleteOne(query:object): void
    updateOne(query:object, data: object): void
    deleteAll():void
}