const socialMediaArr = [
    { link: 'https://www.facebook.com/', name: 'Facebook', title: 'Share on Facebook', image: 'icon-facebook.svg' },
    { link: 'https://www.twitter.com/', name: 'Twitter', title: 'Share on Twitter', image: 'icon-twitter.svg' },
    { link: 'https://www.pinterest.com/', name: 'Pinterest', title: 'Pin it on Pinterest', image: 'icon-pinterest.svg' }
];

const socialMedia = () => {
    const sharingOptions = document.getElementById('sharing-options');

    sharingOptions.innerHTML = socialMediaArr.map(sm =>
        `<a href="${sm.link}" title="${sm.title}" target="_blank" rel="nofollow noopener noreferrer">
            <img src="images/${sm.image}" alt="${sm.name}" />
        </a>`
    ).join('');
};

const toggleClass = () => {
    const options = document.getElementById( 'toggle-options' );
    const icon = document.getElementById( 'share-icon' );
    options.classList.toggle( 'active' );
    icon.classList.toggle( 'active' );
}

socialMedia();