import Evento from "./model/Evento";
import Convidado from "./model/Convidado";
import { complementarConvidado } from "./functions/complementarConvidado.ts";
import complementarEvento from "./functions/complementarEvento";
import criarEventoVazio from "./functions/criarEventoVazio";
import { criarConvidadoVazio } from "./functions/criarConvidadoVazio";

export type{ Evento, Convidado};
export {
    complementarConvidado,
    complementarEvento,
    criarConvidadoVazio,
    criarEventoVazio,
}