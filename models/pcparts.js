import { createConnection } from "mysql2";

const pcParts = createConnection(
    {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'pcparts',
        multipleStatements: true,
    }
)

export default pcParts;