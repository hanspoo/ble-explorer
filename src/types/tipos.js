import { number, string } from 'prop-types';

const tipoAdulto = {
  id: number,
  nombre: string,
  avatar: string,
  sexo: string,
  edad: number
};

const tipoIndicador = {
  id: number,
  nombre: string,
  icono: string
};

export { tipoIndicador, tipoAdulto };
