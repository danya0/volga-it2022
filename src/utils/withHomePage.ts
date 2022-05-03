import {homepage} from '../constants/homepage'

export const withHomePage = (linkToItem: string): string => {
    let link = homepage + linkToItem
    if (process.env.NODE_ENV === 'development' || window.location.href === homepage + '/' || linkToItem.startsWith('data:')) {
        link = linkToItem
    }

    return link
}

