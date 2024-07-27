import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usuarios = sqliteTable("usuarios", {
    correoElectronico: text("correoElectronico").primaryKey(),
    nombre: text("nombre").notNull(),
    apellidos: text("apellidos").notNull(),
    contraseña: text("contraseña").notNull(),
    telefono: text("telefono"),
    domicilio: text("domicilio"),
    cp: text("cp"),
    provincia: text("provincia"),
  });
  