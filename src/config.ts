import { TestConfig } from './types';

export const testConfig: TestConfig = {
  questions: [
    {
      id: 1,
      text: "¿Qué tan preparada está tu organización para adaptarse rápidamente a cambios inesperados en la demanda del mercado?",
      recommendation: "Implementa sistemas de pronóstico más ágiles y desarrolla planes de contingencia para cambios rápidos en la demanda."
    },
    {
      id: 2,
      text: "¿Con qué frecuencia tu cadena de suministro puede ajustar sus procesos cuando surgen interrupciones inesperadas?",
      recommendation: "Establece protocolos de respuesta rápida y mantén inventarios de seguridad para gestionar interrupciones."
    },
    {
      id: 3,
      text: "¿Qué tan bien conoce tu organización a todos sus proveedores y sus capacidades reales?",
      recommendation: "Desarrolla un programa de evaluación continua de proveedores y mantén comunicación regular con ellos."
    },
    {
      id: 4,
      text: "¿Tu organización tiene sistemas de monitoreo en tiempo real de toda la cadena de suministro?",
      recommendation: "Invierte en tecnologías de visibilidad en tiempo real y dashboards de monitoreo integral."
    },
    {
      id: 5,
      text: "¿Qué tan rápido puede tu organización cambiar de proveedor cuando es necesario?",
      recommendation: "Desarrolla una base de proveedores alternativos y procesos de calificación acelerados."
    },
    {
      id: 6,
      text: "¿Tu organización tiene planes de contingencia documentados para diferentes escenarios de crisis?",
      recommendation: "Crea y mantén actualizados planes de contingencia específicos para diferentes tipos de crisis."
    },
    {
      id: 7,
      text: "¿Qué tan bien puede tu organización predecir y prepararse para cambios en las regulaciones o políticas?",
      recommendation: "Establece un sistema de monitoreo regulatorio y mantén relaciones con organismos gubernamentales."
    },
    {
      id: 8,
      text: "¿Tu organización puede adaptar rápidamente sus productos o servicios cuando cambian las necesidades del cliente?",
      recommendation: "Desarrolla capacidades de diseño modular y procesos de desarrollo ágiles."
    },
    {
      id: 9,
      text: "¿Qué tan bien puede tu organización gestionar la complejidad de múltiples mercados y regulaciones simultáneamente?",
      recommendation: "Implementa sistemas de gestión centralizada y procesos estandarizados para múltiples mercados."
    },
    {
      id: 10,
      text: "¿Tu organización tiene la capacidad de aprender rápidamente de los errores y mejorar continuamente?",
      recommendation: "Establece procesos de aprendizaje organizacional y sistemas de mejora continua."
    }
  ],
  levels: {
    low: { 
      min: 0, 
      max: 70, 
      text: 'Necesita transformación', 
      interpretation: 'Tu cadena de suministro muestra vulnerabilidades significativas frente a los desafíos VUCA. Es crucial implementar cambios profundos para mejorar la resiliencia y adaptabilidad.' 
    },
    medium: { 
      min: 71, 
      max: 85, 
      text: 'Mejora táctica', 
      interpretation: 'Tu cadena de suministro tiene una base sólida, pero aún hay oportunidades para optimizar procesos y fortalecer la respuesta ante la incertidumbre. Considera mejoras tácticas.' 
    },
    high: { 
      min: 86, 
      max: 100, 
      text: 'Madurez avanzada', 
      interpretation: 'Tu cadena de suministro es altamente adaptable y resiliente. Estás bien posicionado para navegar en entornos VUCA, pero siempre hay espacio para la innovación continua.' 
    },
  }
};