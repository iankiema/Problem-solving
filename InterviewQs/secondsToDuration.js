function convertSecondsToDuration(seconds) {
    const weekSeconds = 7 * 24 * 60 * 60;
    const daySeconds = 24 * 60 * 60;
    const hourSeconds = 60 * 60;
    const minuteSeconds = 60;

    const weeks = Math.floor(seconds / weekSeconds)
    const days = Math.floor((seconds % weekSeconds) / daySeconds)
    const hours = Math.floor((seconds % daySeconds) / hourSeconds)
    const minutes = Math.floor((seconds % hourSeconds) / minuteSeconds)
    const remainingSeconds = seconds % minuteSeconds;

    const durationParts = [];
    if (weeks > 0) {
        durationParts.push(`${weeks} wk`)
    }
}