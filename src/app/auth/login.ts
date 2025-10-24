// src/app/auth/login.ts
export class Login {
  username!: string;
  password!: string;
  client_id: string = 'ejtour__site'; // ID do client no Keycloak
  client_secret: string = 'nVi7CoAJsPUihRiViWmZEc6EyP4VLJI3'; // Secret do client
  grant_type: string = 'password'; // Tipo de grant
}