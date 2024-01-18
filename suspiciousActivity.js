

function processLogs(logs, threshold) {
    
    let userCount = {};

   

    for (const log of logs) {
        const [sender, recipient] = log.split(' ');

        userCount[sender] = (userCount[sender] || 0) + 1

        if (sender !== recipient) {
            userCount[recipient] =  (userCount[recipient] || 0) + 1;
        }
    }

    const supUser = [];
    for (const userId in userCount) {
        if (userCount[userId] >= threshold) {
            supUser.push(userId)
        }

    }

    supUser.sort((a, b) => parseInt(a) - parseInt(b))

    return supUser
}

const logs = ["1 2 50", "1 7 70", "1 3 20","2 2 17"];
const threshold = 2;

const supUser = processLogs(logs, threshold)
console.log("supUser:", supUser);