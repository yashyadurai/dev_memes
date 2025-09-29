// script.js
document.addEventListener('DOMContentLoaded', function () {
    const memeGrid = document.querySelector('.meme-grid');

    // Sample meme data with handpicked image URLs
    const memes = [
        { url: 'https://www.jsdeveloper.sh/_next/image?url=%2Fdatabase%2Fjs%2Fassets%2F7113413845812961280.jpeg&w=640&q=75', likes: 0 },
        { url: 'https://www.jsdeveloper.sh/_next/image?url=%2Fdatabase%2Fjs%2Fassets%2F7113055218627420161.jpeg&w=640&q=75', likes: 0 },
        { url: 'https://www.jsdeveloper.sh/_next/image?url=%2Fdatabase%2Fjs%2Fassets%2F7113118480228339714.jpeg&w=640&q=75', likes: 0 },
        { url: 'https://www.jsdeveloper.sh/_next/image?url=%2Fdatabase%2Fjs%2Fassets%2F7112754705314766850.jpeg&w=640&q=75', likes: 0 },
        { url: 'https://www.jsdeveloper.sh/_next/image?url=%2Fdatabase%2Fjs%2Fassets%2F7112014880013983746.jpeg&w=640&q=75', likes: 0 },
        { url: 'https://www.jsdeveloper.sh/_next/image?url=%2Fdatabase%2Fjs%2Fassets%2F7110883640238067712.jpeg&w=640&q=75', likes: 0 },
        { url: 'https://www.jsdeveloper.sh/_next/image?url=%2Fdatabase%2Fjs%2Fassets%2F7108708833706795008.jpeg&w=640&q=75', likes: 0 },
        { url: 'https://www.jsdeveloper.sh/_next/image?url=%2Fdatabase%2Fjs%2Fassets%2F7096767551149355008.jpeg&w=640&q=75', likes: 0 },
        { url: 'https://www.jsdeveloper.sh/_next/image?url=%2Fdatabase%2Fjs%2Fassets%2F7093155435955806208.jpeg&w=640&q=75', likes: 0 },
        { url: 'https://www.jsdeveloper.sh/_next/image?url=%2Fdatabase%2Fjs%2Fassets%2F7086596213147357184.jpeg&w=640&q=75', likes: 0 },
        { url: 'https://www.jsdeveloper.sh/_next/image?url=%2Fdatabase%2Fjs%2Fassets%2F7089869764679880705.jpeg&w=640&q=75', likes: 0 },
        { url: 'https://www.jsdeveloper.sh/_next/image?url=%2Fdatabase%2Fjs%2Fassets%2F7084060198503370752.jpeg&w=640&q=75', likes: 0 },               
        { url: 'https://www.jsdeveloper.sh/_next/image?url=%2Fdatabase%2Fjs%2Fassets%2F7073914412620767232.jpeg&w=640&q=75', likes: 0 },
        { url: 'https://www.jsdeveloper.sh/_next/image?url=%2Fdatabase%2Fjs%2Fassets%2F7072100467303931904.jpeg&w=640&q=75', likes: 0 },
        { url: 'https://www.jsdeveloper.sh/_next/image?url=%2Fdatabase%2Fjs%2Fassets%2F7066660914556538880.jpeg&w=640&q=75', likes: 0 },
        { url: 'https://www.jsdeveloper.sh/_next/image?url=%2Fdatabase%2Fjs%2Fassets%2F7069562592859488256.jpeg&w=640&q=75', likes: 0 },
        { url: 'https://www.jsdeveloper.sh/_next/image?url=%2Fdatabase%2Fjs%2Fassets%2F7066806370397761536.jpeg&w=640&q=75', likes: 0 },
        { url: 'https://www.jsdeveloper.sh/_next/image?url=%2Fdatabase%2Fjs%2Fassets%2F7074275544304865281.jpeg&w=640&q=75', likes: 0 },        
        { url: 'https://www.jsdeveloper.sh/_next/image?url=%2Fdatabase%2Fjs%2Fassets%2F7087682590001766400.jpeg&w=640&q=75', likes: 0 },
        { url: 'https://www.jsdeveloper.sh/_next/image?url=%2Fdatabase%2Fjs%2Fassets%2F7066304844994637825.jpeg&w=640&q=75', likes: 0 },
        { url: 'https://www.jsdeveloper.sh/_next/image?url=%2Fdatabase%2Fjs%2Fassets%2F7079343253291966464.jpeg&w=640&q=75', likes: 0 },
        { url: 'https://www.jsdeveloper.sh/_next/image?url=%2Fdatabase%2Fjs%2Fassets%2F7077897706622349314.jpeg&w=640&q=75', likes: 0 },

    ];

    // Function to generate meme items
    function generateMemeItems() {
        memes.forEach(meme => {
            let haveLiked = false;
            const memeItem = document.createElement('div');
            memeItem.classList.add('meme-item');

            const img = document.createElement('img');
            img.src = meme.url;
            img.alt = 'Meme';
            img.loading = 'lazy';

            const likeButton = document.createElement('button');
            likeButton.classList.add('like-button');
            likeButton.textContent = `🤍 ${meme.likes}`;

            likeButton.addEventListener('click', function () {
                if (!meme.liked) {
                    meme.likes++;
                    meme.liked = true;
                    likeButton.textContent = `❤️ ${meme.likes}`;
                } else {
                    meme.likes--;
                    meme.liked = false;
                    likeButton.textContent = `🤍 ${meme.likes}`;
                }
            });

            memeItem.appendChild(img);
            memeItem.appendChild(likeButton);
            memeGrid.appendChild(memeItem);
        });
    }

    generateMemeItems();
});