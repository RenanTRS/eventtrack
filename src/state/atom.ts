import {atom} from 'recoil';
import { IEvento } from '../interfaces/IEvento';
import { IFiltroDeEventos } from '../interfaces/IFiltroDeEventos';

//Um estado com o seu valor padrão
export const listaDeEventosState = atom<IEvento[]>({
    key: 'listaDeEventos',
    default: [
    {
        "descricao": "Estudar React",
        "inicio": new Date("2022-01-15T09:00"),
        "fim": new Date("2022-01-15T13:00"),
        "completo": false,
        "id": 1642342747
    },
    {
        "descricao": "Estudar Recoil",
        "inicio": new Date("2022-01-16T09:00"),
        "fim": new Date("2022-01-16T11:00"),
        "completo": false,
        "id": 1642342959
    }]
})

export const filtroDeEventos = atom<IFiltroDeEventos>({
    key: 'filtroDeEventos',
    default: {}
})