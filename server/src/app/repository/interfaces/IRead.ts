interface IRead<T> {   
    retrieve: (orderBy: string, limit: number, skip: number, callback: (error: any, result: any) => void) => void;
    findById: (id: string, callback: (error: any, result: any) => void) => void;
} 

export = IRead;