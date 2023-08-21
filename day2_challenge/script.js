const form = document.getElementById('libform');
const storySpan = document.getElementById('story');
const shuffleButton = document.getElementById('shuffle-button');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const noun = document.getElementById('noun').value;
    const adjective = document.getElementById('adjective').value;
    const person = document.getElementById('person').value;
    const verb = document.getElementById('verb').value;
    const place = document.getElementById('place').value;

    if (noun && adjective && person && verb && place) {
        const story = `Once upon a time in a ${adjective} ${place}, there lived a ${noun} named ${person}. ${person} loved to ${verb} all day long.`;
        storySpan.textContent = story;
    } else {
        storySpan.textContent = "Please fill in all the inputs.";
    }
});

const stories = [
    "Once upon a time, in a land far away, a brave knight named [person] embarked on a quest to find the legendary [noun].",
    "In the magical realm of [place], a mischievous [noun] used to [verb] all day, causing laughter and chaos everywhere.",
    "There was a [adjective] [person] who could [verb] faster than anyone in the [place], impressing everyone with their skills."
];

shuffleButton.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * stories.length);
    storySpan.textContent = stories[randomIndex].replace('[noun]', noun).replace('[adjective]', adjective).replace('[person]', person).replace('[verb]', verb).replace('[place]', place);
});
