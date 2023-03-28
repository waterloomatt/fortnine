import renderer from 'react-test-renderer';
import Shop from '@/Pages/Shop';
import products from './fixtures/products.json';
import Product from "@/Pages/Product";
import Cart from "@/Pages/Cart";

jest.mock('@inertiajs/react', () => ({
    ...jest.requireActual('@inertiajs/react'),
    Controller: () => <></>,
    usePage: () => ({
        props: {
            constants: {
                max_product_quantity: 10,
                tax: {
                    "qst": 0.09975,
                    "gst": 0.05
                },
            },
            cart: [
                {
                    "id": 1,
                    "name": "Barton Greenfelder",
                    "quantity": 2,
                    "price": "77.07",
                    "image_url": "https://cdn.lorem.space/images/face/.cache/300x300/behrouz-sasani-khMxnuosSV4-unsplash.jpg"
                },
                {
                    "id": 4,
                    "name": "Constantin Graham",
                    "quantity": 1,
                    "price": "34.75",
                    "image_url": "https://cdn.lorem.space/images/face/.cache/300x300/jassir-jonis-QWa0TIUW638-unsplash.jpg"
                }
            ]
        },
    }),
    Head: () => {

    },
}))

it('renders the shop correctly', () => {
    const tree = renderer
        .create(<Shop products={products}/>)
        .toJSON();

    expect(tree).toMatchSnapshot();
});

it('renders the product details correctly', () => {
    const tree = renderer
        .create(<Product product={products.data[0]}/>)
        .toJSON();

    expect(tree).toMatchSnapshot();
});

it('renders the cart correctly', () => {
    const tree = renderer
        .create(<Cart/>)
        .toJSON();

    expect(tree).toMatchSnapshot();
});