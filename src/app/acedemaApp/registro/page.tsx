'use client';

import { useState } from "react";
import Image from "next/image";
import { registrarPersona } from "@/hooks/useRegistrarPersona";
import type { ReqRegistrarPersona } from "@/lib/types";

export default function RegistroPage() {
  const [form, setForm] = useState({
    numCedula: "",
    fechaNacimiento: "",
    primerNombre: "",
    segundoNombre: "",
    correo: "",
    direccion: "",
    telefono1: "",
    telefono2: "",
    fechaRegistro: new Date().toISOString().split("T")[0],
    idRol: "",
    puesto: "",
    cedulaResponsable: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const data: ReqRegistrarPersona["persona"] = {
        primerNombre: form.primerNombre,
        correo: form.correo,
        idRol: Number(form.idRol),

        // el resto será null/default en el backend
        numCedula: Number(form.numCedula),
        segundoNombre: form.segundoNombre,
        fechaNacimiento: form.fechaNacimiento,
        direccion: form.direccion,
        telefono1: Number(form.telefono1),
        telefono2: Number(form.telefono2),
        fechaRegistro: new Date().toISOString(),
        puesto: form.puesto,
        cedulaResponsable: null,
      };

      const res = await registrarPersona(data);
      if (res.resultado) {
        setSuccess(true);
      } else {
        setError(res.listaDeErrores.join("\n"));
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center flex-col bg-[rgba(0,22,54,1)]">
      <div className="relative top-4 left-4">
        <Image src="/logo.jpg" alt="Logo" width={128} height={128} priority />
      </div>

      <div className="bg-white p-8 rounded-lg w-[90%] max-w-md">
        <h4 className="text-[rgba(67,10,17,1)] text-2xl font-bold text-center mb-6">
          Registro
        </h4>

        {success ? (
          <p className="text-green-600 text-center">¡Registro exitoso!</p>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4">
            {error && (
              <div className="text-red-600 text-sm whitespace-pre-wrap">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="primerNombre" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre
              </label>
              <input
                id="primerNombre"
                name="primerNombre"
                type="text"
                value={form.primerNombre}
                onChange={onChange}
                className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#43100D]"
                required
              />
            </div>

            <div>
              <label htmlFor="correo" className="block text-sm font-medium text-gray-700 mb-1">
                Correo
              </label>
              <input
                id="correo"
                name="correo"
                type="email"
                value={form.correo}
                onChange={onChange}
                className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#43100D]"
                required
              />
            </div>

            <div>
              <label htmlFor="idRol" className="block text-sm font-medium text-gray-700 mb-1">
                Rol
              </label>
              <select
                id="idRol"
                name="idRol"
                value={form.idRol}
                onChange={onChange}
                className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#43100D]"
                required
              >
                <option value="">Selecciona un rol</option>
                <option value="1">Usuario</option>
                <option value="2">Administrador</option>
                {/* Ajusta los roles según tu catálogo */}
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#430a11] text-[#ffffff] py-2 rounded-md"
            >
              {loading ? "Registrando…" : "Registrar"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}


