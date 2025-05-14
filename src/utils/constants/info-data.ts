export type InfoDataType = {        
    image: {
        src: string,
        alt: string
    },
    title: string,
    description: string,
}

export const INFO_DATA: InfoDataType[] = [
    {
        image: {
            src: '/images/setup-wallet.svg',
            alt: 'setup your wallet figure'
        },
        title: 'Setup Your wallet',
        description: 'Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.',
    },
    {
        image: {
            src: '/images/create-collection.svg',
            alt: 'create collection figure'
        },
        title: 'Create Collection',
        description: 'Upload your work and setup your collection. Add a description, social links and floor price.',
    },
    {
        image: {
            src: '/images/start-earning.svg',
            alt: 'start earning figure'
        },
        title: 'Start Earning',
        description: 'Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.',
    },
]