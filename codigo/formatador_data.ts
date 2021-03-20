export default class FormatadorData {

    static formataISO8601ParaPtBR(data: string): string {
        var dataArray = data.split("-")

        var dia = dataArray[2];
        var mes = dataArray[1];
        var ano = dataArray[0];

        return `${dia}/${mes}/${ano}`;
    }

    static formataUTCParaPtBR(data: number): string {
        const dataNascimento: Date = new Date(data);
        const dia: string = dataNascimento.getUTCDate().toString().padStart(2, '0');
        const mes: string = (dataNascimento.getUTCMonth() + 1).toString().padStart(2, '0');
        const ano: string = dataNascimento.getUTCFullYear().toString().padStart(4, '0');

        return `${dia}/${mes}/${ano}`;
    }

}