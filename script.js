const batteryLevel=document.querySelector(".batteryLevel");
const batteryCharging= document.querySelector(".batteryCharging");
const batteryChargingTime=document.querySelector(".batteryChargingTime");
const batteryDischargingTime=document.querySelector(".batteryDischargingTime");

const battery=()=>{
    if("getBattery" in navigator){
        navigator.getBattery().then(battery =>{
function updateBatteryInfo(){
    updateChargingInfo();
    updateBatteryLevel();
    updateChargingTime();
    updateDischargingTime()
}
updateBatteryInfo();
            battery.addEventListener("chargingchange",()=>{
                updateChargingInfo();
            })
function updateChargingInfo(){
    const charging= battery.charging ? "Yes":"No";
    batteryCharging.innerHTML=charging;
}
            battery.addEventListener("levelchange",()=>{
                updateBatteryLevel();
            })
function updateBatteryLevel(){
    const level = battery.level*100+"%";
    batteryLevel.innerHTML=level;

}
            battery.addEventListener("chargingtimechange",()=>{
                updateChargingTime();
            })
function updateChargingTime(){
    const time=battery.chargingTime + " seconds";
    batteryChargingTime.innerHTML=time;
}
            battery.addEventListener("dischargingtimechange",()=>{
                updateDischargingTime();                    
            })
function updateDischargingTime(){
    const dischargeTime=battery.dischargingTime + " seconds";
    batteryDischargingTime.innerHTML=dischargeTime;
}
        });

    }
};
battery();
