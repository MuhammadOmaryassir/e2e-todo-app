import { typeOrmConfig } from "./ormconfig";
import { DataSource } from "typeorm";
const dataSource = new DataSource(typeOrmConfig()); 
dataSource.initialize();
 export default dataSource; 