export class User {
    id?: number;
    name!: string;
    email!: string;
    password?: string;
    birthday?: string;
    roleId?: string;
    role?: { id: number };
}
