import { findCreator } from "../helpers/find-creator"
import { USERNAMES } from "./creators"
import { NftCardInterface } from "./discover"

const NFTs : NftCardInterface[] = [
    {
        img: '/images/NFTs/etubaks-nft.svg',
        title: 'Magic Mushroom 0325',
        highest_bid: '0.33 wETH',
        price: '1.63 ETH',
        username: findCreator(USERNAMES.Shroomie)?.username,
        profile_picture: findCreator(USERNAMES.Shroomie)?.image,
    },
    {
        img: '/images/NFTs/cherry-blossom.svg',
        title: 'Cherry Blossom Girl 035',
        highest_bid: '0.33 wETH',
        price: '1.63 ETH',
        username: findCreator(USERNAMES.GravityOne)?.username,
        profile_picture: findCreator(USERNAMES.GravityOne)?.image,
    },
    {
        img: '/images/NFTs/astro-fiction.svg',
        title: 'Astro Fiction',
        highest_bid: '0.33 wETH',
        price: '1.63 ETH',
        username: findCreator(USERNAMES.GravityOne)?.username,
        profile_picture: findCreator(USERNAMES.GravityOne)?.image,
    },
    {
        img: '/images/NFTs/galaxy-nft.svg',
        title: 'Distant Galaxy',
        highest_bid: '0.33 wETH',
        price: '1.63 ETH',
        username: findCreator(USERNAMES.RustyRobot)?.username,
        profile_picture: findCreator(USERNAMES.RustyRobot)?.image,
    },
    {
        img: '/images/NFTs/life-on-edena.svg',
        title: 'Life on Edena',
        highest_bid: '0.33 wETH',
        price: '1.63 ETH',
        username: findCreator(USERNAMES.BlueWhale)?.username,
        profile_picture: findCreator(USERNAMES.BlueWhale)?.image,
    },
    {
        img: '/images/NFTs/dancing-robots.svg',
        title: 'Happy Robot 032',
        highest_bid: '0.33 wETH',
        price: '1.63 ETH',
        username: findCreator(USERNAMES.BeKind2Robots)?.username,
        profile_picture: findCreator(USERNAMES.BeKind2Robots)?.image,
    },
    {
        img: '/images/NFTs/bear-nft.svg',
        title: 'Designer Bear',
        highest_bid: '0.33 wETH',
        price: '1.63 ETH',
        username: findCreator(USERNAMES.MrFox)?.username,
        profile_picture: findCreator(USERNAMES.MrFox)?.image,
    },
    {
        img: '/images/NFTs/colorful-dog.svg',
        title: 'Colorful Dog 0356',
        highest_bid: '0.33 wETH',
        price: '1.63 ETH',
        username: findCreator(USERNAMES.KeepItReal)?.username,
        profile_picture: findCreator(USERNAMES.KeepItReal)?.image,
    },
    {
        img: '/images/NFTs/disco-machine.svg',
        title: 'Happy Robot 024',
        highest_bid: '0.33 wETH',
        price: '1.63 ETH',
        username: findCreator(USERNAMES.BeKind2Robots)?.username,
        profile_picture: findCreator(USERNAMES.BeKind2Robots)?.image,
    },
]

export const MARKETPLACE = {
    title: 'Browse Marketplace',
    subtitle: 'Browse through more than 50k NFTs on the NFT Marketplace.',
    NFTs,
}