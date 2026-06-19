import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const SITE = {
  name: 'SAC',
  fullName: 'Soluciones Avanzadas Comerciales',
  tagline: 'El partner tecnológico que moderniza tu negocio',
  email: 'hola@sac.mx',
  phone: '+52 55 1234 5678',
  whatsapp: '+525512345678',
  address: 'Ciudad de México, México',
};
