/**
 * Cyber Runner - Autenticação do Painel do Professor
 * Define o código de acesso mestre do professor.
 */
(function() {
  var AUTH = {
    "codigoAcesso": "PROF2026",
    "descricao": "Código de acesso do Professor ao painel de monitoramento do Cyber Runner."
  };

  if (typeof window !== 'undefined') {
    window.PROFESSOR_AUTH = AUTH;
  }
  if (typeof global !== 'undefined') {
    global.PROFESSOR_AUTH = AUTH;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = AUTH;
  }
})();
