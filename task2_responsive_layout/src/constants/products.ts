// Imports for shoe 2 galleryImages
import shoeColor2Thumb0 from '@/assets/shoe2/shoe-thumb0.svg';
import shoeColor2Thumb1 from '@/assets/shoe2/shoe-thumb1.svg';
import shoeColor2Thumb2 from '@/assets/shoe2/shoe-thumb2.svg';
import shoeColor2Thumb3 from '@/assets/shoe2/shoe-thumb3.svg';
import shoeColor2Thumb4 from '@/assets/shoe2/shoe-thumb4.svg';
import shoeColor2Thumb5 from '@/assets/shoe2/shoe-thumb5.svg';

// Imports for shoe 5 galleryImages
import shoeColor5Thumb0 from '@/assets/shoe5/shoe-thumb0.svg';
import shoeColor5Thumb1 from '@/assets/shoe5/shoe-thumb1.svg';
import shoeColor5Thumb2 from '@/assets/shoe5/shoe-thumb2.svg';
import shoeColor5Thumb3 from '@/assets/shoe5/shoe-thumb3.svg';
import shoeColor5Thumb4 from '@/assets/shoe5/shoe-thumb4.svg';
import shoeColor5Thumb5 from '@/assets/shoe5/shoe-thumb5.svg';

// Imports for colorImage
import color1 from '@/assets/color1.svg';
import color2 from '@/assets/shoe2/color2.svg';
import color3 from '@/assets/color3.svg';
import color4 from '@/assets/color4.svg';
import color5 from '@/assets/shoe5/color5.svg';

// Imports for mainImageThumbnail
import shoe2Main from '@/assets/shoe2/main-color2.svg';
import shoe5Main from '@/assets/shoe5/main-color5.svg';

export const productsData = [
    {
        id: 1,
        name: 'ASICS GEL-KAYANO 14',
        price: 155,
        color: 'Grey',
        availableSizes: [],
        unavailableSizes: ['5.5', '6', '6.5', '7', '8', '9', '9.5', '10.5', '11', '12', '13', '14', '15'],
        colorImage: { src: color1, alt: 'ASICS GEL-KAYANO 14 in Grey' },
        mainImageThumbnail: null,
        galleryImages: [],
        description: '',
        details: [],
        shipping: [],
    },
    {
        id: 2,
        name: 'ASICS GEL-KAYANO 14',
        price: 155,
        color: 'Black',
        availableSizes: ['8', '8.5', '9', '9.5', '10', '11', '12', '13', '14'],
        unavailableSizes: ['5.5', '6', '6.5', '7', '7.5', '15'],
        colorImage: { src: color2, alt: 'ASICS GEL-KAYANO 14 in Black' },
        mainImageThumbnail: { src: shoe2Main, alt: 'ASICS GEL-KAYANO 14 thumbnail view (Black)' },
        galleryImages: [
            { src: shoeColor2Thumb0, alt: 'ASICS GEL-KAYANO 14 main view (Black)' },
            { src: shoeColor2Thumb1, alt: 'ASICS GEL-KAYANO 14 side view (Black)' },
            { src: shoeColor2Thumb2, alt: 'ASICS GEL-KAYANO 14 sole view (Black)' },
            { src: shoeColor2Thumb3, alt: 'ASICS GEL-KAYANO 14 pair (Black)' },
            { src: shoeColor2Thumb4, alt: 'ASICS GEL-KAYANO 14 angle view (Black)' },
            { src: shoeColor2Thumb5, alt: 'ASICS GEL-KAYANO 14 another angle view (Black)' },
        ],
        description: 'The ASICS GEL-KAYANO 14 is a classic running shoe designed for stability and support. This black version features updated materials for a sleek, modern look. The GEL technology in the midsole provides excellent shock absorption for long runs. Inspired by the original tooling from 2008, this shoe combines both performance and streetwear appeal.',
        details: [
            { label: 'Brand', value: 'ASICS' },
            { label: 'Model', value: 'GEL-KAYANO 14' },
            { label: 'Type', value: 'Running Shoe' },
            { label: 'Cushioning', value: 'GEL technology' },
            { label: 'Weight', value: "11.5 oz (men's size 9)" },
        ],
        shipping: [
            { label: 'ASICS Official Store', value: '$160' },
            { label: 'Amazon', value: '$140-$160 (varies by size)' },
            { label: 'Foot Locker', value: '$150' },
            { label: 'Zappos', value: '$155 (Free shipping options)' },
        ],
    },
    {
        id: 3,
        name: 'ASICS GEL-KAYANO 14',
        price: 155,
        color: 'Blue',
        availableSizes: [],
        unavailableSizes: ['5.5', '6', '6.5', '7', '8', '9', '9.5', '10.5', '11', '12', '13', '14', '15'],
        colorImage: { src: color3, alt: 'ASICS GEL-KAYANO 14 in Blue' },
        mainImageThumbnail: null,
        galleryImages: [],
        description: '',
        details: [],
        shipping: [],
    },
    {
        id: 4,
        name: 'ASICS GEL-KAYANO 14',
        price: 155,
        color: 'Pink',
        availableSizes: [],
        unavailableSizes: ['5.5', '6', '6.5', '7', '8', '9', '9.5', '10.5', '11', '12', '13', '14', '15'],
        colorImage: { src: color4, alt: 'ASICS GEL-KAYANO 14 in Pink' },
        mainImageThumbnail: null,
        galleryImages: [],
        description: '',
        details: [],
        shipping: [],
    },
    {
        id: 5,
        name: 'ASICS GEL-KAYANO 14',
        price: 155,
        color: 'White Tai Chi Yellow',
        availableSizes: ['6', '6.5', '7', '9.5', '10', '10.5', '11', '12', '13'],
        unavailableSizes: ['5.5', '8', '9', '14', '15'],
        colorImage: { src: color5, alt: 'ASICS GEL-KAYANO 14 in White Tai Chi Yellow' },
        mainImageThumbnail: { src: shoe5Main, alt: 'ASICS GEL-KAYANO 14 thumbnail view (White Tai Chi Yellow)' },
        galleryImages: [
            { src: shoeColor5Thumb0, alt: 'ASICS GEL-KAYANO 14 main view (White Tai Chi Yellow)' },
            { src: shoeColor5Thumb1, alt: 'ASICS GEL-KAYANO 14 side view (White Tai Chi Yellow)' },
            { src: shoeColor5Thumb2, alt: 'ASICS GEL-KAYANO 14 sole view (White Tai Chi Yellow)' },
            { src: shoeColor5Thumb3, alt: 'ASICS GEL-KAYANO 14 pair (White Tai Chi Yellow)' },
            { src: shoeColor5Thumb4, alt: 'ASICS GEL-KAYANO 14 angle view (White Tai Chi Yellow)' },
            { src: shoeColor5Thumb5, alt: 'ASICS GEL-KAYANO 14 another angle view (White Tai Chi Yellow)' },
        ],
        description: 'The ASICS GEL-KAYANO 14 is a classic running shoe designed for stability and support. Featuring advanced GEL technology in the midsole, this model offers superior shock absorption, making it suitable for long runs. The retro style pays homage to the original 2008 design, combining both performance and streetwear appeal. Its durable rubber outsole, supportive structure, and breathable mesh upper make it ideal for runners who overpronate, ensuring comfort and balance during intense runs.',
        details: [
            { label: 'Brand', value: 'ASICS' },
            { label: 'Model', value: 'GEL-KAYANO 14' },
            { label: 'Type', value: 'Running Shoe' },
            { label: 'Cushioning', value: 'GEL technology' },
            { label: 'Weight', value: "11.5 oz (men's size 9)" },
        ],
        shipping: [
            { label: 'ASICS Official Store', value: '$160' },
            { label: 'Amazon', value: '$140-$160 (varies by size)' },
            { label: 'Foot Locker', value: '$150' },
            { label: 'Zappos', value: '$155 (Free shipping options)' },
        ],
    },
];
