import { db } from "@/lib/prisma";

export const EntryModel = db.entry;
export const UserModel = db.user;
export const CollectionModel = db.collection;
export const DraftModel = db.draft;