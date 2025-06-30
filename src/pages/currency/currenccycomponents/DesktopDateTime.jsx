import { useEffect, useState } from "react";

export default function DesktopDateTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeString = time.toLocaleTimeString("fa-IR", {
    timeZone: "Asia/Tehran"
  });

  const dateString = time.toLocaleDateString("fa-IR", {
    timeZone: "Asia/Tehran",
    // weekday: "long" // اضافه می‌کنه مثل "پنج‌شنبه"
  });

  return (
    <div className="relative w-full">
      <div className="hidden md:flex justify-end w-full">
        <div className="flex flex-col items-end shadow-2xl p-4 rounded-xl bg-white">
          <span>تاریخ: {dateString}</span>
          <span>ساعت: {timeString}</span>
        </div>
      </div>
    </div>
  );
}
