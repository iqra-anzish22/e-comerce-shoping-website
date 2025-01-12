export default function handler(req, res) {
    const products = [
        {
            id: 1,
            name:" Baby Girls Dresses",
            price: 4500,
            image:"/baby.webp"
        },

        {
            id: 2 ,
            name:"Baba Boy Dresses",
            price: 4500,
            image:"/boy.jpg"
        },
        {
            id: 3,
            name:"Ladies Bag",
            price: 850,
            image:"/bag.webp"
        },
        {
            id: 4,
            name:"Mens Items",
            price: 7500,
            image:"men.webp"
        },
        {
            id: 5,
            name:"Kids Shoes",
            price: 3000,
            image:"/kid.webp"
        },
        {
            id: 6,
            name:"Shoes",
            price: 5000,
            image:"/shoes.jpg"
        },
    ];

    res.status(200).json(products);
}