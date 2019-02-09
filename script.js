const config = {
    'greeting': {
        'slogan': 'Las mejores guitarras',
        'image': 'negocio_guitarras.jpg',
        'text_button': 'Comprar!'
    },
    'description': {
        'title': '¿Quienes somos?',
        'image': 'descripcion_guitarra.jpg',
        'text_description': 'Somos los que venden las guitarras mas chidas.'
    },
    'catalog': {
        'title': 'Nuestras Guitarras',
        'products': [
            {
                'title': 'Telecaster',
                'subtitle': 'The best Telecaster',
                'image': 'telecaster.jpg'
            },
            {
                'title': 'Gibson',
                'subtitle': 'The best Gibson',
                'image': 'gibson.jpg'
            },
            {
                'title': 'Gibson',
                'subtitle': 'The best Gibson',
                'image': 'gibson.jpg'
            },
            {
                'title': 'Gibson',
                'subtitle': 'The best Gibson',
                'image': 'gibson.jpg'
            }

        ]
    }
}

const init = (config) => {
    // Greeting
    $('#eslogan').html(config.greeting.slogan)
    $('#contenedor-saludo').css('background-image', `url(${config.greeting.image})`)
    $('#contenedor-saludo > button').html(config.greeting.text_button)
    // Description
    $('#descripcion-titulo').html(config.description.title)
    $('#contenedor-descripcion > .contenido > img').attr('src', config.description.image)
    $('#texto-uno').html(config.description.text_description)
    // Products
    $('#contendor-catalogo > h2').html(config.catalog.title)
    createProducts(config.catalog.products)
}

const createProducts = (products) => {
    let builtProducts = '';
    products.forEach(product => {        
        builtProducts += `
            <div class="producto">
                <img src="${product.image}" alt="black">
                <div class="producto-descripcion">
                <h3 class="titulo">
                    ${product.title}
                </h3>
                <div class="description">
                    ${product.subtitle}
                </div>
                </div>
            </div>
       `
   })
   $('#catalogo-contenido').html(builtProducts)
}

$(() => {
    init(config)
})