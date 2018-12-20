import { IProfessor } from 'app/shared/model//professor.model';
import { IAtividade } from 'app/shared/model//atividade.model';

export interface IDisciplina {
    id?: number;
    codigo?: number;
    descricao?: string;
    professors?: IProfessor[];
    atividades?: IAtividade[];
}

export class Disciplina implements IDisciplina {
    constructor(
        public id?: number,
        public codigo?: number,
        public descricao?: string,
        public professors?: IProfessor[],
        public atividades?: IAtividade[]
    ) {}
}
