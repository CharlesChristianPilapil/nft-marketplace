import { findCreator } from "../helpers/find-creator";
import galaxy_nft from '@images/NFTs/galaxy-nft.svg';

export interface NftCardInterface {
    img: string;
    username?: string;
    title: string;
    profile_picture?: string;
    price: string;
    highest_bid: string;
}

export const DISCOVER: NftCardInterface[] = [
    {
        img: galaxy_nft,
        title: 'Distant Galaxy',
        highest_bid: '0.33 wETH',
        price: '1.63 ETH',
        username: findCreator('rustyrobot')?.username,
        profile_picture: findCreator('rustyrobot')?.image,
    },
    {
        img: '/images/NFTs/life-on-edena.svg',
        title: 'Life on Edena',
        highest_bid: '0.33 wETH',
        price: '1.63 ETH',
        username: findCreator('bluewhale')?.username,
        profile_picture: findCreator('bluewhale')?.image,
    },
    {
        img: '/images/NFTs/astro-fiction.svg',
        title: 'Astro Fiction',
        highest_bid: '0.33 wETH',
        price: '1.63 ETH',
        username: findCreator('gravityone')?.username,
        profile_picture: findCreator('gravityone')?.image,
    },
];

export const CREATED_NFT: NftCardInterface[]= [
    {
        img: '/images/NFTs/crypto-city.svg',
        title: 'Crypto City',
        highest_bid: '0.33 wETH',
        price: '1.63 ETH',
        username: findCreator('rustyrobot')?.username,
        profile_picture: findCreator('rustyrobot')?.image,
    },
    {
        img: '/images/NFTs/colorful-dog.svg',
        title: 'Colorful Dog',
        highest_bid: '0.33 wETH',
        price: '1.63 ETH',
        username: findCreator('bluewhale')?.username,
        profile_picture: findCreator('bluewhale')?.image,
    },
    {
        img: '/images/NFTs/space-tales.svg',
        title: 'Space Tales',
        highest_bid: '0.33 wETH',
        price: '1.63 ETH',
        username: findCreator('gravityone')?.username,
        profile_picture: findCreator('gravityone')?.image,
    },
    {
        img: '/images/NFTs/cherry-blossom.svg',
        title: 'Cherry Blossom Girl 037',
        highest_bid: '0.33 wETH',
        price: '1.63 ETH',
        username: findCreator('rustyrobot')?.username,
        profile_picture: findCreator('rustyrobot')?.image,
    },
    {
        img: '/images/NFTs/dancing-robots.svg',
        title: 'Dancing Robots 0987',
        highest_bid: '0.33 wETH',
        price: '1.63 ETH',
        username: findCreator('bluewhale')?.username,
        profile_picture: findCreator('bluewhale')?.image,
    },
    {
        img: '/images/NFTs/icecream-ape.svg',
        title: 'IceCream Ape',
        highest_bid: '0.33 wETH',
        price: '1.63 ETH',
        username: findCreator('gravityone')?.username,
        profile_picture: findCreator('gravityone')?.image,
    }
]