import { Connection } from 'mongoose';
import { ProdusSchema } from '../schemas/produs.schema';

export const produseProviders = [
  {
    provide: 'PRODUS_MODEL',
    useFactory: (connection: Connection) => connection.model('Produs', ProdusSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];