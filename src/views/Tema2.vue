<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Barreras a mercados internacionales
    p.mb-5 Las barreras son obstáculos o divisiones, fijas o móviles, que impiden el paso de un lugar a otro.
    #t_2_1
    .titulo-segundo
      h2 2.1 Barreras arancelarias
    p Son impuestos o derechos de aduana que se cobran sobre las mercancías que ingresan a un país de forma definitiva por concepto de importaciones. 
    p.mb-5 Así mismo, la Organización Mundial del Comercio (OMC) las clasifica en:
    .h4.text-center.mb-5 Clasificación de las Barreras arancelarias
    .row.justify-content-center
      .col-lg-8
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img18.svg' ,alt='Texto que describa la imagen').m-auto
          figcaption Fuente: Cerviño (2014).
    separador.mb-5
    #t_2_2
    .titulo-segundo
      h2 2.2 Barreras no arancelarias
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-10
          .bloque-texto-a__texto.p-4
            p “Una barrera no arancelaria es toda medida, al margen del arancel, que restringe o evita el ingreso de un producto a un determinado mercado. 
            p Para que el producto pueda ingresar al mercado de interés para la empresa exportadora debe cumplir con los requisitos de entrada; esto repercute directamente en los costes y en el tiempo requerido para que el exportador pueda iniciar la comercialización de su producto en ese mercado.
            p Asimismo, el precio final del producto se ve afectado, lo que tendrá incidencia en su competitividad. Se consideran barreras no arancelarias aquellas medidas que restringen, dificultan o impiden las importaciones a través de las medidas o acciones gubernamentales distintas a la imposición de un arancel.” (Cerviño, 2014)
        .col-lg-2.mb-4.mb-lg-0
    p.mb-5 Entre las Barreras no arancelarias más frecuentes podemos encontrar:
    figure(data-aos="fade-left")
      img(src='@/assets/curso/img19.svg' ,alt='Texto que describa la imagen').m-auto
      figcaption Fuente: Cerviño (2014).

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
