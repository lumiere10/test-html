document.addEventListener("DOMContentLoaded", function () {

    const listCards = document.querySelectorAll('.list-card');

    function setCardDetailsHeight(cardDetails, maxHeight) {
        if (cardDetails) {
            cardDetails.style.maxHeight = maxHeight;
        }
    }

    listCards.forEach(card => {
        const infoButtons = card.querySelectorAll('.info-button');
        const cardDetails = card.querySelector('.list-card__details');
        const initialHeight = cardDetails.scrollHeight + 'px';
        infoButtons.forEach(button => {
            const infoButtonText = button.querySelector('.info-button__btn span')
            const infoButtonTextValue = button.textContent;
            button.addEventListener('click', () => {

                const isShow = cardDetails.classList.contains('show');
                button.classList.toggle('show');
                button.classList.toggle('hide');
                if (!isShow) {
                    infoButtonText.textContent = 'Hide info'
                    cardDetails.classList.add('show');
                    button.classList.add('show');
                    button.classList.remove('hide');
                    setCardDetailsHeight(cardDetails, initialHeight);
                } else {
                    infoButtonText.textContent = infoButtonTextValue
                    cardDetails.classList.remove('show');
                    button.classList.remove('show');
                    button.classList.add('hide');
                    setCardDetailsHeight(cardDetails, '0px');
                }

            });
        });

    });

    window.addEventListener('resize', () => {
        listCards.forEach(card => {
            const cardDetails = card.querySelector('.list-card__details');
            setCardDetailsHeight(cardDetails);
        });
    });
});
