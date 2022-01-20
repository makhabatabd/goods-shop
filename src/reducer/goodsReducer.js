const defaultState = [
    {
        manufacturer: 'Lenovo',
        title: 'Lenovo Ideapad V14',
        category: 'Laptop',
        price: 800,
        date: 'Jan 15 2022',
        id: 1,
        img: '/goods/lenovo.jpeg',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        manufacturer: 'Acer',
        title: 'Acer Swift 5',
        category: 'Laptop',
        price: 1000,
        date: 'Jan 12 2022',
        id: 2,
        img: '/goods/acer.jpeg',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        manufacturer: 'Apple',
        title: 'Apple mackbook air 13',
        category: 'Laptop',
        price: 1500,
        date: 'Jan 11 2022',
        id: 3,
        img: '/goods/apple.jpeg',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        manufacturer: 'Lenovo',
        title: 'Lenovo Ideapad V14',
        category: 'Laptop',
        price: 800,
        date: 'Jan 14 2022',
        id: 4,
        img: '/goods/lenovo.jpeg',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        manufacturer: 'Acer',
        title: 'Acer Swift 5',
        category: 'Laptop',
        price: 1000,
        date: 'Jan 13 2022',
        id: 5,
        img: '/goods/acer.jpeg',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        manufacturer: 'Apple',
        title: 'Apple mackbook air 13',
        category: 'Laptop',
        price: 1500,
        date: 'Jan 9 2022',
        id: 6,
        img: '/goods/apple.jpeg',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        manufacturer: 'Lenovo',
        title: 'Lenovo Ideapad V14',
        category: 'Laptop',
        price: 800,
        date: 'Jan 8 2022',
        id: 7,
        img: '/goods/lenovo.jpeg',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        manufacturer: 'Acer',
        title: 'Acer Swift 5',
        category: 'Laptop',
        price: 1000,
        date: 'Jan 7 2022',
        id: 8,
        img: '/goods/acer.jpeg',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        manufacturer: 'Apple',
        title: 'Apple mackbook air 13',
        category: 'Laptop',
        price: 1500,
        date: 'Jan 6 2022',
        id: 9,
        img: '/goods/apple.jpeg',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        manufacturer: 'Apple',
        title: 'Apple Iphone 13',
        category: 'Smartphone',
        price: 1000,
        date: 'Jan 18 2022',
        id: 10,
        img: '/goods/iphone.jpeg',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        manufacturer: 'Samsung',
        title: 'Samsung Galaxy',
        category: 'Smartphone',
        price: 800,
        date: 'Jan 8 2022',
        id: 11,
        img: '/goods/samsung.jpeg',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        manufacturer: 'Google',
        title: 'Google Pixel',
        category: 'Smartphone',
        price: 1000,
        date: 'Jan 2 2022',
        id: 12,
        img: '/goods/pixel.jpeg',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        manufacturer: 'Apple',
        title: 'Apple Iphone 13',
        category: 'Smartphone',
        price: 1100,
        date: 'Jan 7 2022',
        id: 13,
        img: '/goods/iphone.jpeg',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        manufacturer: 'Samsung',
        title: 'Samsung Galaxy',
        category: 'Smartphone',
        price: 700,
        date: 'Jan 5 2022',
        id: 14,
        img: '/goods/samsung.jpeg',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        manufacturer: 'Google',
        title: 'Google Pixel',
        category: 'Smartphone',
        price: 800,
        date: 'Jan 4 2022',
        id: 15,
        img: '/goods/pixel.jpeg',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        manufacturer: 'Apple',
        title: 'Apple Iphone 13',
        category: 'Smartphone',
        price: 800,
        date: 'Jan 15 2022',
        id: 16,
        img: '/goods/iphone.jpeg',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        manufacturer: 'Samsung',
        title: 'Samsung Galaxy',
        category: 'Smartphone',
        price: 600,
        date: 'Jan 14 2022',
        id: 17,
        img: '/goods/samsung.jpeg',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        manufacturer: 'Google',
        title: 'Google Pixel',
        category: 'Smartphone',
        price: 900,
        date: 'Jan 12 2022',
        id: 18,
        img: '/goods/pixel.jpeg',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        manufacturer: 'Sapphire',
        title: 'Sapphire Nitro',
        category: 'Gpu',
        price: 600,
        date: 'Jan 6 2022',
        id: 19,
        img: '/goods/sapphire.jpeg',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        manufacturer: 'GeForce',
        title: 'RTX 2060 Gerorce',
        category: 'Gpu',
        price: 1100,
        date: 'Jan 3 2022',
        id: 20,
        img: '/goods/geforce.jpeg',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        manufacturer: 'Soviet Union',
        title: 'Old GPU',
        category: 'Gpu',
        price: 10,
        date: 'Jan 1 2022',
        id: 21,
        img: '/goods/old.jpeg',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        manufacturer: 'Sapphire',
        title: 'Sapphire Nitro',
        category: 'Gpu',
        price: 700,
        date: 'Jan 12 2022',
        id: 22,
        img: '/goods/sapphire.jpeg',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        manufacturer: 'GeForce',
        title: 'RTX 2060 Gerorce',
        category: 'Gpu',
        price: 1200,
        date: 'Jan 14 2022',
        id: 23,
        img: '/goods/geforce.jpeg',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        manufacturer: 'Soviet Union',
        title: 'Old GPU',
        category: 'Gpu',
        price: 15,
        date: 'Jan 15 2022',
        id: 24,
        img: '/goods/old.jpeg',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        manufacturer: 'GeForce',
        title: 'RTX 2060 Gerorce',
        category: 'Gpu',
        price: 1500,
        date: 'Jan 19 2022',
        id: 25,
        img: '/goods/geforce.jpeg',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
]

export const goodsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_GOOD':

            return [
                ...state, 
                action.payload
            ]

        case 'DELETE_GOOD':
            return [
                ...state.filter(good => good !== action.payload),
            ]
        
        case 'EDIT_GOOD':
            return [
                ...state.map(good => (good.id == action.payload.id) ? action.payload : good)
            ]

        default:
            return state;
    }
}