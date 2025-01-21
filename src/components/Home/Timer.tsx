import { useEffect, useState } from "react";

export default function Timer() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const timeUnits = [
    {
      variable: days,
      unit: "Days",
    },
    {
      variable: hours,
      unit: "Hours",
    },
    {
      variable: minutes,
      unit: "Minutes",
    },
    {
      variable: seconds,
      unit: "Seconds",
    },
  ];
  const deadLine = "January, 25, 2025";
  function getTime() {
    const time = Date.parse(deadLine) - Date.now();
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  }
  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="flex">
        {timeUnits.map((timeUnit, index) => {
          return (
            <div>
              <div className="text-[12px]">
                {timeUnit.unit}
              </div>
              <div className="text-[32px]">
                {timeUnit.variable < 10 && "0"}
                {timeUnit.variable}
                {index < timeUnits.length - 1 && <span className="text-[#E07575]">:</span>}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
