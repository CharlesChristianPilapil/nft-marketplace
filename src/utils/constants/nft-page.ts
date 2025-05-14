import { findCreator } from "../helpers/find-creator";
import { CREATED_NFT, DISCOVER, NftCardInterface } from "./discover";

export const NFT_PAGE: {
    title: string;
    created_at: string;
    user: {
      avatar?: string;
      username?: string;
    };
    description: string;
    more_nft: NftCardInterface[];
} = {
    title: 'The Orbitians',
    created_at: 'Sep 30, 2022',
    user: {
    avatar: findCreator('BeKind2Robots')?.image,
    username: findCreator('BeKind2Robots')?.username,
    },
    description: `The Orbitians
        is a collection of 10,000 unique NFTs on the Ethereum blockchain,
        
        There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians. 
        
        They live in a metal space machines, high up in the sky and only have one foot on Earth. 
        These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they've taken to make human beings their target.
    `,
    more_nft: [
    ...DISCOVER,
    ...CREATED_NFT
    ]
};