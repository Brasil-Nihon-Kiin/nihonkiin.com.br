import FormatadorData from '../codigo/formatador_data';

describe('Formatador Data', function () {
  it('Formatação 2021-12-31 para 31/12/2021', function () {
    const dataFormatada = FormatadorData.formataISO8601ParaPtBR('2021-12-31');
    expect(dataFormatada).toBe('31/12/2021');
  });
  it('Formatação 1970-01-01 para 01/01/1970', function () {
    const dataFormatada = FormatadorData.formataISO8601ParaPtBR('1970-01-01');
    expect(dataFormatada).toBe('01/01/1970');
  });
  it('Formatação UTC\(1988, 5, 7\) para 07/06/1988', function () {
    const dataEmUTC = Date.UTC(1988, 5, 7)
    const dataFormatada = FormatadorData.formataUTCParaPtBR(dataEmUTC);
    expect(dataFormatada).toBe('07/06/1988');
  });
  it('Formatação UTC\(1987, 4, 20\) para 20/05/1987', function () {
    const dataEmUTC = Date.UTC(1987, 4, 20)
    const dataFormatada = FormatadorData.formataUTCParaPtBR(dataEmUTC);
    expect(dataFormatada).toBe('20/05/1987');
  });
  it('Formatação UTC\(1970, 0, 1\) para 01/01/1970', function () {
    const dataEmUTC = Date.UTC(1970, 0, 1)
    const dataFormatada = FormatadorData.formataUTCParaPtBR(dataEmUTC);
    expect(dataFormatada).toBe('01/01/1970');
  });
});