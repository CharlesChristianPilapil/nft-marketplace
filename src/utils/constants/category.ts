import { ComponentType } from 'react';

import art_bg from '@images/Category/art-bg.svg'
import collectibles_bg from '@images/Category/collectibles-bg.svg'
import music_bg from '@images/Category/music-bg.svg'
import photography_bg from '@images/Category/photography-bg.svg'
import videos_bg from '@images/Category/videos-bg.svg'
import utility_bg from '@images/Category/utilities-bg.svg'
import sport_bg from '@images/Category/sport-bg.svg'
import virtual_bg from '@images/Category/virtual-worlds-bg.svg'

import { Paintbrush } from 'lucide-react'

export interface CategoryCardInterface {
    category: string;
    src: string;
    icon: ComponentType<{ className?: string }>
}

export const CATEGORY: CategoryCardInterface[] = [
    {
        category: 'Art',
        src: art_bg,
        icon: Paintbrush
    },
    {
        category: 'Collectibles',
        src: collectibles_bg,
        icon: Paintbrush
    },
    {
        category: 'Music',
        src: music_bg,
        icon: Paintbrush
    },
    {
        category: 'Photography',
        src: photography_bg,
        icon: Paintbrush
    },
    {
        category: 'Videos',
        src: videos_bg,
        icon: Paintbrush
    },
    {
        category: 'Utility',
        src: utility_bg,
        icon: Paintbrush
    },
    {
        category: 'Sport',
        src: sport_bg,
        icon: Paintbrush
    },
    {
        category: 'Virtual Worlds',
        src: virtual_bg,
        icon: Paintbrush
    }
]