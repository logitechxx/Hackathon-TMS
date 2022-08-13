import { get, post } from './config';
export const getShipments = get('http://localhost:8000/shipments');
export const CreateShipment = post('http://localhost:8000/shipments');
export const createDriver = post('http://localhost:8000/drivers');
