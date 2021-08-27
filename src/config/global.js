export default {
  global: {
    componenteFormativo: 'Elección del destino de exportación',
    descripcionCurso:
      'La investigación es el proceso mediante el cual, a partir de consultas y experimentos, se da solución a un problema o interrogante y permite obtener nuevos conocimientos.</br></br>Después de haber realizado la selección de la oferta exportable, es necesario conocer acerca de nuestro mercado potencial y objetivo, conocer sus costumbres, características geográficas, demográficas, su conducta y forma de pensar.</br></br>Así mismo, es indispensable identificar la subpartida arancelaria que identifica el producto que se desea exportar, por ende, el pago de aranceles y el cumplimiento de requerimientos específicos de cada clasificación.</br></br>Este componente formativo brinda las herramientas necesarias para llevar la investigación de mercados que permitirá desarrollar de manera exitosa la comercialización internacional.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Factores para la selección de mercados',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Etapas en la selección de mercado',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: '¿Para qué se realiza un estudio de mercado?',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: '¿De dónde se saca la información?',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Detalles sobre el estudio de mercado',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Barreras a mercados internacionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Barreras arancelarias',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Barreras no arancelarias',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Arancel de aduanas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Derechos de aduana',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Sistema armonizado',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Historia del arancel de aduanas',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: '¿Por qué debo tener una partida arancelaria?',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      //{
      //  nombreRuta: 'complementario',
      //  icono: 'far fa-folder-open',
      //  titulo: 'Material complementario',
      //},
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Cerviño, J. (2014). Marketing Internacional, Nuevas perspectivas para un mercado globalizado. Editorial Grupo Anaya.',
      link: 'https://ebookcentral-proquest-com.bdigital.sena.edu.co',
    },
    {
      referencia:
        'Martínez, A. M., Torres Vargas, A. C., & Jaramillo Mejía, M. (2016). El comportamiento del mercado. SENA.',
    },
    {
      referencia:
        'Peña, A. C. (2016). Manual de transporte para el comercio internacional: Selección y gestión del transporte para la exportación. Editorial Marge Book.',
      link: 'https://ebookcentral-proquest-com.bdigital.sena.edu.co',
    },
  ],
  glosario: [
    {
      termino: 'Ad valorem',
      significado: 'es un porcentaje sobre el valor de aduana de la mercancía.',
    },
    {
      termino: 'Arancel de aduanas',
      significado:
        'son tributos o impuestos que gravan la importación de mercancías con el objeto de proteger el mercado interior de aquellas importaciones que sean más competitivas que la producción nacional.',
    },
    {
      termino: 'Barreras arancelarias',
      significado:
        'es un impuesto o derecho de aduana que se cobra sobre las mercancías que ingresan a un país de forma definitiva por concepto de importaciones.',
    },
    {
      termino: 'Barreras no arancelarias',
      significado:
        'una barrera no arancelaria es toda medida, al margen del arancel, que restringe o evita el ingreso de un producto a un determinado mercado.',
    },
    {
      termino: 'Exportación',
      significado:
        'proceso de vender bienes y/o servicios en mercados exteriores, es decir, es la operación mediante la cual un producto o mercancía se envía fuera del territorio nacional.',
    },
    {
      termino: 'Origen de mercancías',
      significado:
        'es el vínculo geográfico que existe entre una mercancía y el país en el que ha sido producida, manufacturada o transformada. Si en la producción de un bien intervienen dos o más países, el bien será originario del país donde se haya producido la última transformación sustancial, donde cambiará su código arancelario. Es importante determinar correctamente cuál es el origen porque la aplicación de un tipo de un arancel u otro dependerá de este. Es decir, el origen de la mercancía determina si el arancel es normal, reducido o incrementado, o si no se aplica y se considera libre de derechos.',
    },
    {
      termino: 'Nomenclatura arancelaria',
      significado:
        'es la clasificación y codificación de mercancías de todo tipo de productos susceptibles de importación o exportación.',
    },
    {
      termino: 'Valor en aduanas',
      significado:
        'se basa en el valor real de la mercancía importada, a la que se aplica el arancel. El valor real debería ser el precio al que, en un tiempo y lugar determinados por la legislación del país importador, las mercancías son vendidas u ofrecidas para la venta en el curso de operaciones comerciales en libre competencia.',
    },
  ],
  complementario: [
    {
      texto: '',
      tipo: '',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Kateryn Valderrama',
        cargo: 'Experta Técnica',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'José Gregorio Ramírez',
        cargo: 'Experto Técnico',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Bertha Paola Bejarano Avila',
        cargo: 'Diseñador Instruccional',
        centro:
          'Centro para La Industria de la Comunicación Gráfica - Distrito Capital',
      },
      {
        nombre: 'Liliana Victoria Morales Gualdron',
        cargo: 'Evaluador Instruccional',
        centro:
          'Centro para La Industria de la Comunicación Gráfica - Distrito Capital',
      },
      {
        nombre: 'Adriana Lozano Zapata',
        cargo: 'Correctora de estilo',
        centro:
          'Centro para La Industria de la Comunicación Gráfica - Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Marcela Gonzalez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo Front-End',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
