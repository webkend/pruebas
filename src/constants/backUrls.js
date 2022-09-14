import { URL_PROD, URL_DEV } from './env';

let urlBase = URL_DEV === 'development' ? 'https://b9d9-191-95-149-54.ngrok.io/api/' : URL_PROD;

// Roles
export const urlGetRoles = `${urlBase}roles/consult-role`;

// Headquarters
export const urlGetHeadquarters = `${urlBase}headquarters/consult-headquarters`;
export const urlPostHeadquarters = `${urlBase}headquarters/create-headquarters`;

// Team
export const urlGetTeam = `${urlBase}users/consult-user`;
export const urlPostTeam = `${urlBase}users/create-user`;

// Inventory
export const urlGetInventory = `${urlBase}products/consult-product`;
export const urlPostInventory = `${urlBase}products/create-product`;

// Thirds
export const urlGetThirds = `${urlBase}thirds/consult-third`;
export const urlPostThirds = `${urlBase}thirds/create-third`;