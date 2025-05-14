import dogNFT from '@images/NFTs/dog-nft.svg';
import catNFT from '@images/NFTs/cat-nft.svg';
import bearNFT from '@images/NFTs/bear-nft.svg';
import shroomNFT from '@images/NFTs/etubaks-nft.svg';
import discoNFT from '@images/NFTs/disco-machine.svg';
import { findCreator } from '../helpers/find-creator';

export const TRENDING_COLLECTION = [
    {
        images: [
            {
                title: 'dog-nft',
                src: dogNFT,
            },
            {
                title: 'cat-nft',
                src: catNFT,
            },
            {
                title: 'bear-nft',
                src: bearNFT,
            }
        ],
        user: findCreator('MrFox')?.username,
        picture: findCreator('MrFox')?.image,
        title: 'DSGN Animals',
        count: 1025,
    },
    {
        images: [
            {
                title: 'etubaks-nft1',
                src: shroomNFT,
            },
            {
                title: 'etubaks-nft2',
                src: shroomNFT,
            },
            {
                title: 'etubaks-nft3',
                src: shroomNFT,
            }
        ],
        user: findCreator('Shroomie')?.username,
        picture: findCreator('Shroomie')?.image,
        title: 'Magic Mushrooms',
        count: 1025,
    },
    {
        images: [
            {
                title: 'disco-nft1',
                src: discoNFT,
            },
            {
                title: 'disco-nft2',
                src: discoNFT,
            },
            {
                title: 'disco-nft3',
                src: discoNFT,
            }
        ],
        user: findCreator('BeKind2Robots')?.username,
        picture: findCreator('BeKind2Robots')?.image,
        title: 'Disco Machines',
        count: 1025,
    }
]