import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserData } from '../types';

interface UserDataFormProps {
  onSubmit: (data: UserData) => void;
}

const UserDataForm: React.FC<UserDataFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<UserData>({
    nombre: '',
    empresa: '',
    cargo: '',
    pais: '',
    correo: '',
    whatsapp: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof UserData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof UserData, string>> = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio';
    }

    if (!formData.empresa.trim()) {
      newErrors.empresa = 'La empresa es obligatoria';
    }

    if (!formData.cargo.trim()) {
      newErrors.cargo = 'El cargo es obligatorio';
    }

    if (!formData.pais.trim()) {
      newErrors.pais = 'El país es obligatorio';
    }

    if (!formData.correo.trim()) {
      newErrors.correo = 'El correo electrónico es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
      newErrors.correo = 'Ingrese un correo electrónico válido';
    }

    if (formData.whatsapp && !/^\+?[\d\s-()]+$/.test(formData.whatsapp)) {
      newErrors.whatsapp = 'Ingrese un número de WhatsApp válido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      // Limpiar whatsapp si está vacío
      const dataToSubmit = {
        ...formData,
        whatsapp: formData.whatsapp?.trim() || undefined
      };
      onSubmit(dataToSubmit);
    }
  };

  const handleChange = (field: keyof UserData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-200/50 p-8 mb-10 max-w-2xl mx-auto"
    >
      <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
        Por favor, comparte tus datos
      </h3>
      <p className="text-gray-600 mb-6 text-center text-sm">
        Te enviaremos tu reporte completo por correo electrónico
      </p>

      <div className="space-y-4">
        {/* Nombre */}
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
            Nombre completo <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="nombre"
            value={formData.nombre}
            onChange={(e) => handleChange('nombre', e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.nombre ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent`}
            placeholder="Ingrese su nombre completo"
          />
          {errors.nombre && (
            <p className="text-red-500 text-xs mt-1">{errors.nombre}</p>
          )}
        </div>

        {/* Empresa */}
        <div>
          <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-1">
            Empresa <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="empresa"
            value={formData.empresa}
            onChange={(e) => handleChange('empresa', e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.empresa ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent`}
            placeholder="Ingrese el nombre de su empresa"
          />
          {errors.empresa && (
            <p className="text-red-500 text-xs mt-1">{errors.empresa}</p>
          )}
        </div>

        {/* Cargo */}
        <div>
          <label htmlFor="cargo" className="block text-sm font-medium text-gray-700 mb-1">
            Cargo <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="cargo"
            value={formData.cargo}
            onChange={(e) => handleChange('cargo', e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.cargo ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent`}
            placeholder="Ingrese su cargo o posición"
          />
          {errors.cargo && (
            <p className="text-red-500 text-xs mt-1">{errors.cargo}</p>
          )}
        </div>

        {/* País */}
        <div>
          <label htmlFor="pais" className="block text-sm font-medium text-gray-700 mb-1">
            País <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="pais"
            value={formData.pais}
            onChange={(e) => handleChange('pais', e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.pais ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent`}
            placeholder="Ingrese su país"
          />
          {errors.pais && (
            <p className="text-red-500 text-xs mt-1">{errors.pais}</p>
          )}
        </div>

        {/* Correo */}
        <div>
          <label htmlFor="correo" className="block text-sm font-medium text-gray-700 mb-1">
            Correo electrónico <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="correo"
            value={formData.correo}
            onChange={(e) => handleChange('correo', e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.correo ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent`}
            placeholder="correo@ejemplo.com"
          />
          {errors.correo && (
            <p className="text-red-500 text-xs mt-1">{errors.correo}</p>
          )}
        </div>

        {/* WhatsApp */}
        <div>
          <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">
            WhatsApp <span className="text-gray-500 text-xs">(opcional)</span>
          </label>
          <input
            type="tel"
            id="whatsapp"
            value={formData.whatsapp}
            onChange={(e) => handleChange('whatsapp', e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.whatsapp ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent`}
            placeholder="+1234567890 (opcional)"
          />
          {errors.whatsapp && (
            <p className="text-red-500 text-xs mt-1">{errors.whatsapp}</p>
          )}
        </div>
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        className={`w-full mt-6 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] hover:from-[#E55A2B] hover:to-[#E67A35] text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg transition-all duration-300 ${
          isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {isSubmitting ? 'Procesando...' : 'Continuar al auto-diagnóstico'}
      </motion.button>
    </motion.form>
  );
};

export default UserDataForm;

