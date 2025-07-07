const nameList = [
    'Time', 'Past', 'Future', 'Dev', 'Fly', 'Soar', 'Power', 'Jump',
    'Mountain', 'Red', 'Blue', 'Green', 'Yellow', 'Panda', 'Cat', 'Kitten',
    'Zero', 'Trooper', 'Bandit', 'Fear', 'Light', 'Glow', 'Deep', 'Enemy',
    'Force', 'Video', 'Game', 'Colt', 'Recon', 'Trap', 'Code', 'Writer', 'Cube',
    'Echo', 'Alpha', 'Omega', 'Wolf', 'Legacy', 'Sharp', 'Zombie', 'Captain',
    'Punch', 'Slice', 'Wolf', 'Extreme', 'Universe', 'Monkey', 'Kid', 'Girl',
    'Vortex', 'Paradox'
];

const sentenceList = [
    "is learning how to code in React!",
    "just solved a tricky bug. 🔧",
    "can't stop watching tutorials. 🎥",
    "thinks Redux is awesome!",
    "is ready for a coffee break ☕",
    "pushed new code to GitHub 🚀",
    "debugged 99 bugs, found 100 more 🐛",
    "loves building UIs with Tailwind 💅",
    "just deployed an app to Vercel 🌐",
    "feels like a JavaScript wizard 🧙",
    "finally understood closures 🙌",
    "wants to try TypeScript next 💡",
];

export function generateRandomName() {
    return nameList[Math.floor(Math.random() * nameList.length)];
}

export function generateRandomMessage() {
    return sentenceList[Math.floor(Math.random() * sentenceList.length)];
}
