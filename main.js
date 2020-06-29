let coin = {
    state: 0,
    flip: function () {
       this.state = Math.floor(Math.random() * 2);
    },

    toString: function() {
        if (this.state === 0) {
            return "Heads";
        } else {
            return "Tails";
        }
    },

    toHTML: function() {
        let image = document.createElement('img');

        if (this.state === 0) {
            image.src = "./images/heads.jpeg"
        } else {
            image.src = "./images/tails.jpeg"
        }
       
        return image;
    }
};

function display20flips () {

    for (let index = 0; index < 20; index++) {
        coin.flip()
        let showFlip = document.createElement('p')
        showFlip.append(coin.toString())
        document.body.append(showFlip)
       
    }
}

function display20images () {

    for (let index = 0; index < 20; index++) {
        coin.flip()
        document.body.append(coin.toHTML())
    }
}