export interface IDbImpl {
    find(query?: object): Promise<any[]>
    insertOne(doc: any): void
    deleteOne(id: String): void
    updateOne(id: String, data: object): void
    deleteAll():void
}