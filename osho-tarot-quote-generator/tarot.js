(function(global){
    
        var OshoTarot = function() {
            return new OshoTarot.init();
        };
        
        OshoTarot.init = function() {
            
            var majorarcana =  [
                {
                    number: "0",
                    card: "The Fool",
                    commentary: "Moment to moment, and with every step, the Fool leaves the past behind.",
                    url: "http://kathryn.mnsi.net/major/0thefool.jpeg"
                },
                {
                    number: "I",
                    card: "Existence",
                    commentary: "This naked figure sits on the lotus leaf of perfection, gazing at the beauty of the night sky.",
                    url: "http://kathryn.mnsi.net/major/01existance.jpeg"
                },
                {
                    number: "II",
                    card: "Inner Voice",
                    commentary: "The Inner Voice speaks not in words but in the worldess language of the heart.",
                    url: "http://kathryn.mnsi.net/major/02innervoice.jpeg"
                },
                {
                    number: "III",
                    card: "Creativity",
                    commentary: "From the alchemy of fire and water below to the divine light entering from above, the figure in this card is literally 'possessed by' the creative force.",
                    url: "http://kathryn.mnsi.net/major/03creativity.jpeg"
                },
                {
                    number: "IV",
                    card: "The Rebel",
                    commentary: "The powerful and authoritative figure in this card is clearly the master of his own destiny.",
                    url: "http://kathryn.mnsi.net/major/04rebel.jpeg"
                },
                {
                    number: "V",
                    card: "No-Thingness",
                    commentary: "Being 'in the gap' can be disorienting and even scary.",
                    url: "http://kathryn.mnsi.net/major/05nothingness.jpeg"
                },
                {
                    number: "VI",
                    card: "The Lovers",
                    commentary: "What we call love is really a whole spectrum of relating reaching from the earth to the sky.",
                    url: "http://kathryn.mnsi.net/major/06lovers.jpeg"
                },
                {
                    number: "VII",
                    card: "Awareness",
                    commentary: "The viel of illusion, or maya, that has been keeping you from perceiving reality as it is, is starting to burn away.",
                    url: "http://kathryn.mnsi.net/major/07awareness.jpeg"
                },
                {
                    number: "VIII",
                    card: "Courage",
                    commentary: "This card shows a smaill wildflower that has met the challenge of the rocks and stones in its path to emerge into the light of day.",
                    url: "http://kathryn.mnsi.net/major/08courage.jpeg"
                },
                {
                    number: "IX",
                    card: "Aloneness",
                    commentary: "When there is no 'significant other' in our lives we can either be lonely, or enjoy the freedom that solitude brings.",
                    url: "http://kathryn.mnsi.net/major/09aloneness.jpeg"
                },
                {
                    number: "X",
                    card: "Change",
                    commentary: "The symbol in this card is an enormous wheel representing time, fate, karma.",
                    url: "http://kathryn.mnsi.net/major/10change.jpeg"
                },
                {
                    number: "XI",
                    card: "Breakthrough",
                    commentary: "The predominance of red in this card indicates at a glance that its suject is energy, power and strength.",
                    url: "http://kathryn.mnsi.net/major/11breakthrough.jpeg"
                },
                {
                    number: "XII",
                    card: "New Vision ",
                    commentary: "The figure on this card is being bord anew, emerging from his earthbound roots and growing wings to fly into the unbounded.",
                    url: "http://kathryn.mnsi.net/major/12newvision.jpeg"
                },
                {
                    number: "XIII",
                    card: "Transformation",
                    commentary: "The central figure in this card sits atop the vast flower of the void, and holds the symbols of transformation - the sword that cuts through illusion, the snake that rejuvenates itself by shedding its skin, the broken chain of limitations, and the yin/yang sumbol of transcending duality.",
                    url: "http://kathryn.mnsi.net/major/13transformation.jpeg"
                },
                {
                    number: "XIV",
                    card: "Integration",
                    commentary: "The image of integration is the unio mystica, the fusion of opposites.",
                    url: "http://kathryn.mnsi.net/major/14integration.jpeg"
                },
                {
                    number: "XV",
                    card: "Conditioning",
                    commentary: "This card recalls an old zen story, about a lion who was brought up by sheep and who though he was a sheep until an old lion captured him and took him to a pond, when he showed him his own reflection.",
                    url: "http://kathryn.mnsi.net/major/15conditioning.jpeg"
                },
                {
                    number: "XVI",
                    card: "Thunderbolt",
                    commentary: "The card shows a tower being burned, destroyed, blown apart.",
                    url: "http://kathryn.mnsi.net/major/16thunderbolt.jpeg"
                },
                {
                    number: "XVII",
                    card: "Silence",
                    commentary: "The silent mirrorlike receptiveness of a star-filled night with a full moon is reflected in the misty lake below.",
                    url: "http://kathryn.mnsi.net/major/17silence.jpeg"
                },
                {
                    number: "XVIII",
                    card: "Past Lives",
                    commentary: "The hands of existence form the shape of the female genitals, the opening of the cosmic mother.",
                    url: "http://kathryn.mnsi.net/major/18pastlives.jpeg"
                },
                {
                    number: "XIX",
                    card: "Innocence",
                    commentary: "The old man in this card radiates a childlike delight in the world.",
                    url: "http://kathryn.mnsi.net/major/19innocence.jpeg"
                },
                {
                    number: "XX",
                    card: "Beyond Illusion",
                    commentary: "The butterfly in this card represents the outer, that which is constantly moving and that which is not real but an illusion.",
                    url: "http://kathryn.mnsi.net/major/20beyondillusion.jpeg"
                },
                {
                    number: "XXI",
                    card: "Completion",
                    commentary: "Here the last piece of a jigsaw puzzle is being put into place, the position of the third eye, the place of inner perception.",
                    url: "http://kathryn.mnsi.net/major/21completion.jpeg"
                },
                {
                    number: "22",
                    card: "The Master",
                    commentary: "The Master of Zen is not a master over others, but a master of himself.",
                    url: "http://kathryn.mnsi.net/major/master.jpeg"
                }
            ];
        };
        
    OshoTarot.init.prototype = OshoTarot.prototype;
    
    global.OshoTarot = OshoTarot;
        
}(window));
