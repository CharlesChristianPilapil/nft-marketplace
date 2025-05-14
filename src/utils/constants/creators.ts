import mrFox from '@images/Users/user-mrfox.svg';
import shroomie from '@images/Users/user-shroomie.svg';
import beKind2Robots from '@images/Users/user-bekind2robots.svg';
import bluewhale from '@images/Users/user-bluewhale.svg';
import keepitreal from '@images/Users/user-keepitreal.svg';
import digilab from '@images/Users/user-digilab.svg';
import gravityone from '@images/Users/user-gravityone.svg';
import juanie from '@images/Users/user-juanie.svg';
import rustyrobot from '@images/Users/user-rustyrobot.svg';
import animalkid from '@images/Users/user-animalkid.svg';
import dotgu from '@images/Users/user-dotgu.svg';
import ghiblier from '@images/Users/user-ghiblier.svg';


export interface CreatorIterface {
    username: string;
    bio: string;
    image: string;
    total_sales: string;
    rank: string | number;
}

export const CREATORS: CreatorIterface[] = [
    {
        username: 'KeepItReal',
        bio: `The Internet's Friendliest Designer Kid.`,
        image: keepitreal,
        total_sales: '34.53 ETH',
        rank: 1,
    },
    {
        username: 'DigiLab',
        bio: `The Internet's Friendliest Designer Kid.`,
        image: digilab,
        total_sales: '34.53 ETH',
        rank: 2,
    },
    {
        username: 'GravityOne',
        bio: `The Internet's Friendliest Designer Kid.`,
        image: gravityone,
        total_sales: '34.53 ETH',
        rank: 3,
    },
    {
        username: 'Juanie',
        bio: `The Internet's Friendliest Designer Kid.`,
        image: juanie,
        total_sales: '34.53 ETH',
        rank: 5,
    },
    {
        username: 'BlueWhale',
        bio: `The Internet's Friendliest Designer Kid.`,
        image: bluewhale,
        total_sales: '34.53 ETH',
        rank: 5,
    },
    {
        username: 'MrFox',
        bio: `The Internet's Friendliest Designer Kid.`,
        image: mrFox,
        total_sales: '34.53 ETH',
        rank: 6,
    },
    {
        username: 'Shroomie',
        bio: `The Internet's Friendliest Designer Kid.`,
        image: shroomie,
        total_sales: '34.53 ETH',
        rank: 7,
    },
    {
        username: 'BeKind2Robots',
        bio: `The Internet's Friendliest Designer Kid.`,
        image: beKind2Robots,
        total_sales: '34.53 ETH',
        rank: 8,
    },
    {
        username: 'RustyRobot',
        bio: `The Internet's Friendliest Designer Kid.`,
        image: rustyrobot,
        total_sales: '34.53 ETH',
        rank: 9,
    },
    {
        username: 'AnimalKid',
        bio: `The Internet's Friendliest Designer Kid.`,
        image: animalkid,
        total_sales: '34.53 ETH',
        rank: 10,
    },
    {
        username: 'Dotgu',
        bio: `The Internet's Friendliest Designer Kid.`,
        image: dotgu,
        total_sales: '34.53 ETH',
        rank: 11,
    },
    {
        username: 'Ghiblier',
        bio: `The Internet's Friendliest Designer Kid.`,
        image: ghiblier,
        total_sales: '34.53 ETH',
        rank: 12,
    },
]

export const USERNAMES = {
    KeepItReal: 'KeepItReal',
    DigiLab: 'DigiLab',
    GravityOne: 'GravityOne',
    Juanie: 'Juanie',
    BlueWhale: 'BlueWhale',
    MrFox: 'MrFox',
    Shroomie: 'Shroomie',
    BeKind2Robots: 'BeKind2Robots',
    RustyRobot: 'RustyRobot',
    AnimalKid: 'AnimalKid',
    Dotgu: 'Dotgu',
    Ghiblier: 'Ghiblier',
};