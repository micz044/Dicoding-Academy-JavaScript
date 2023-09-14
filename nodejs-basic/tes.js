const artistsAndSongs = {
    "Keyakizaka46": ["Silent Majority"],
    "Blackpink": ["How You Like That", "Ice Cream"],
    "JKT48": ["Rapsodi", "Heavy Rotation"],
    "Twice": ["What is Love?"],
}

artistsAndSongs["Babymetal"] = ["Gimme chocolate"];
delete artistsAndSongs["Keyakizaka46"];
artistsAndSongs["Blackpink"].push("Rose - Gone");

console.log(artistsAndSongs);

const oneTwoThree = [1, 2, 3];
const sevenEightNine = [7, 8, 9];

const result = [4, 5, 6, ...oneTwoThree, ...sevenEightNine];

console.log(result);

function minMax(arrayOfNumbers) {
    let currentMin = arrayOfNumbers[0];
    let currentMax = arrayOfNumbers[0];
    for (value of arrayOfNumbers) {
        if (value < currentMin) {
            currentMin = value;
        } else if (value > currentMax) {
            currentMax = value;
        }
    }

    console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
}

minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);