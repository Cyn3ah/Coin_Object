let coin = {
    state: 0,
    flip: function() {

        return this.state = Math.floor(Math.random() * 2); 
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/

        
    },
    toString: function() {
        if (this.state === 0) {
        return "Heads";
        } else {
            return "Tails";
        }
        
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function() {
        let image = document.createElement('img');

        if (this.state === 0) {
        image.src = "./images/heads.jpeg"
        } else {
        image.src = "./images/tails.jpeg"
        }

        return image


        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
           return document.body.append(image);
    }
};


function display20flips () {

    for (let index = 0; index < 20; index++) {
        coin.flip()
        coin.toString()
        mainElement.append(coin.toHTML())
    }
}

function display20images ()  {

    for (let index = 0; index < 20; index++) {
        let showFlip = document.createElement('p')
        coin.flip()
        showFlip.append(coin.toString())
        mainElement.append(coin.toHTML())
    }

    //let textbox = document.createElement('p')
    //textbox.append(coin.toString())
    //mainElement.append(textbox)


}

