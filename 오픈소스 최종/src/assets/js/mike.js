function getNoiseSensorData() {
    // 이 부분은 실제 소음 센서 데이터를 받아오는 코드로 수정해야 합니다.
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * 100)); // 0 ~ 99 사이의 임의의 수를 반환
        }, 1000);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const noiseLevelElement = document.getElementById("noise-level");
    const alertElement = document.getElementById("alert2");

    function updateNoiseLevel() {
        getNoiseSensorData().then((noiseLevel) => {
            noiseLevelElement.textContent = "소음 레벨: " + noiseLevel;
            alertElement.style.display = noiseLevel > 70 ? "block" : "none"; // 소음 레벨이 70 이상이면 경고 메시지를 표시
            setTimeout(updateNoiseLevel, 1000);
        });
    }

    updateNoiseLevel();
});
