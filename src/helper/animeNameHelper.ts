export const getAnimeLogoPath = (animeName: string) : string => {
    switch(animeName)
    {
        case 'Attack on Titan': return 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Attack_on_Titan_logo.svg';
        case 'Death Note': return 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Death_Note_logo_%28black_background%29.png';
        case 'Dororo': return 'https://upload.wikimedia.org/wikipedia/commons/4/42/Dororo_logo.svg';
        case 'One Piece': return 'https://1000logos.net/wp-content/uploads/2022/08/One-Piece-Logo.png';
        case 'Naruto': return 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Naruto_logo.svg';
        default: return '';
    }
}
