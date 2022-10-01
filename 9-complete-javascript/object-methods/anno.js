const annoyer = {
    phrases: [
        "The best of both worlds", 'Speak of the devil','See eye to eye','Once in a blue moon',
        'when pigs fly'
    ],
    pickPhrase(){
        const {phrases} = this;
        const idx = Math.floor(Math.random() * phrases.length);
        return phrases[idx]
    },
    start(){
        const pickedPhrase = this.pickPhrase();
        setInterval(()=>{
            console.log(pickedPhrase);
            console.log(this.pickPhrase())// only work with arrow function
        },3000)
    }
}

