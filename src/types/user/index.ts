export type Role = "SUPER_ADMIN" | "ADMIN" | "INSTRUCTOR" | "STUDENT";
export type UserStatus = "ACTIVE" | "SUSPENDED" | "REMOVED";
export type Gender = "MALE" | "FEMALE" | "OTHER"

export interface IUser {
  createdAt: Date;
  updatedAt: Date;
  name: string;
  email: string;
  role: Role;
  status: UserStatus;
  id: string;
  phone: string | null;
  gender: Gender | null;
  isVerified: boolean;
  photoURL: string | null;
  deletedAt: Date | null;
  needPasswordChange: boolean;
}