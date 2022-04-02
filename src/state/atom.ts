import { eventosAsync } from './seletores/index';
import {atom} from 'recoil';
import { IEvento } from '../interfaces/IEvento';
import { IFiltroDeEventos } from '../interfaces/IFiltroDeEventos';

//Um estado com o seu valor padrão
export const listaDeEventosState = atom<IEvento[]>({
    key: 'listaDeEventos',
    default: eventosAsync
})

export const filtroDeEventos = atom<IFiltroDeEventos>({
    key: 'filtroDeEventos',
    default: {}
})