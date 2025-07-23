const facts = [
    "Cats are crepuscular, which means they are most active during dawn and dusk.",
    "A cat's nose print is unique, just like a human fingerprint.",
    "Cats can jump up to six times their height.",
    "The average cat sleeps for about 12-16 hours a day.",
    "Cats have a third eyelid, called a nictitating membrane, that helps protect their eyes.",
    "A group of cats is called a clowder.",
    "Cats can make over 100 different vocalizations, while dogs can only make about 10.",
    "The oldest known cat lived to be 38 years old.",
    "Cats use their whiskers to help them navigate and sense their environment.",
    "Cats have a specialized 'purr box' that vibrates at healing frequencies."
];

function generateFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById("fact").innerText = facts[randomIndex];
}
