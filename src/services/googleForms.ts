import { UserData, TestResult } from '../types';
import { K2_CONTACT } from '../config/k2Contact';

// URL del formulario de Google Forms
// TODO: Reemplazar con la URL real del formulario de Google Forms
const GOOGLE_FORMS_URL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse';

// IDs de los campos del formulario (se obtienen inspeccionando el HTML del formulario)
// TODO: Actualizar estos IDs según los campos reales de tu formulario
const FORM_FIELD_IDS = {
  nombre: 'entry.XXXXXXXXXX', // Reemplazar con el ID real
  empresa: 'entry.XXXXXXXXXX',
  cargo: 'entry.XXXXXXXXXX',
  pais: 'entry.XXXXXXXXXX',
  correo: 'entry.XXXXXXXXXX',
  whatsapp: 'entry.XXXXXXXXXX',
  puntajeTotal: 'entry.XXXXXXXXXX',
  nivel: 'entry.XXXXXXXXXX',
  recomendaciones: 'entry.XXXXXXXXXX',
  fechaCompletado: 'entry.XXXXXXXXXX'
};

/**
 * Envía los datos del usuario y resultados del test a Google Forms
 */
export const submitToGoogleForms = async (
  userData: UserData,
  testResult: TestResult
): Promise<boolean> => {
  try {
    // Preparar los datos para enviar
    const formData = new FormData();
    
    // Datos del usuario
    formData.append(FORM_FIELD_IDS.nombre, userData.nombre);
    formData.append(FORM_FIELD_IDS.empresa, userData.empresa);
    formData.append(FORM_FIELD_IDS.cargo, userData.cargo);
    formData.append(FORM_FIELD_IDS.pais, userData.pais);
    formData.append(FORM_FIELD_IDS.correo, userData.correo);
    if (userData.whatsapp) {
      formData.append(FORM_FIELD_IDS.whatsapp, userData.whatsapp);
    }
    
    // Resultados del test
    formData.append(FORM_FIELD_IDS.puntajeTotal, testResult.totalScore.toString());
    formData.append(FORM_FIELD_IDS.nivel, testResult.levelText);
    
    // Formatear recomendaciones
    const recomendacionesTexto = testResult.recommendations.length > 0
      ? testResult.recommendations.join('\n\n')
      : 'No se generaron recomendaciones específicas';
    formData.append(FORM_FIELD_IDS.recomendaciones, recomendacionesTexto);
    
    // Fecha de completado
    formData.append(FORM_FIELD_IDS.fechaCompletado, new Date().toISOString());
    
    // Enviar datos a Google Forms
    const response = await fetch(GOOGLE_FORMS_URL, {
      method: 'POST',
      mode: 'no-cors', // Google Forms requiere no-cors
      body: formData
    });
    
    // Con no-cors, no podemos verificar el estado de la respuesta
    // Pero si no hay error, asumimos que se envió correctamente
    return true;
  } catch (error) {
    console.error('Error al enviar datos a Google Forms:', error);
    return false;
  }
};

/**
 * Genera el texto del reporte para incluir en el correo
 */
export const generateReportText = (userData: UserData, testResult: TestResult): string => {
  const recomendacionesTexto = testResult.recommendations.length > 0
    ? testResult.recommendations.map((rec, index) => `${index + 1}. ${rec}`).join('\n\n')
    : 'No se generaron recomendaciones específicas. Tu cadena de suministro muestra un buen nivel de adaptabilidad.';
  
  return `
REPORTE DE AUTO-DIAGNÓSTICO VUCA - CADENA DE SUMINISTRO

Datos del participante:
- Nombre: ${userData.nombre}
- Empresa: ${userData.empresa}
- Cargo: ${userData.cargo}
- País: ${userData.pais}
- Correo: ${userData.correo}
${userData.whatsapp ? `- WhatsApp: ${userData.whatsapp}` : ''}

RESULTADOS:
- Puntaje Total: ${testResult.totalScore}%
- Nivel: ${testResult.levelText}
- Interpretación: ${testResult.interpretation}

RECOMENDACIONES:
${recomendacionesTexto}

DATOS DE CONTACTO K2:
- Sitio web: ${K2_CONTACT.website}
- Correo: ${K2_CONTACT.email}
${K2_CONTACT.whatsapp ? `- WhatsApp: ${K2_CONTACT.whatsapp}` : ''}
- Programas de formación: ${K2_CONTACT.trainingProgramsUrl}

Fecha de completado: ${new Date().toLocaleDateString('es-ES', { 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
})}
  `.trim();
};

