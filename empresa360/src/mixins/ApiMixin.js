export default{
      data: () => ({
    dadosRecebidos: {},
  }),
  methods: {
    getDadosApi(url) {
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          this.dadosRecebidos = response;
        });
    },
  },
}