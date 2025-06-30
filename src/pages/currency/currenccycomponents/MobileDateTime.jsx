import { useEffect, useState } from "react";

export default function MobileDateTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // هر ثانیه آپدیت بشه

    return () => clearInterval(interval); // پاک‌سازی
  }, []);

  const timeString = time.toLocaleTimeString("fa-IR", {
    timeZone: "Asia/Tehran"
  });

  const dateString = time.toLocaleDateString("fa-IR", {
    timeZone: "Asia/Tehran"
  });
  return (
        <div className="relative w-full">
            <div className="flex justify-between md:hidden px-4 mb-4">
                        {/* تاریخ - گوشه راست */}
                        <div className="flex items-center gap-1 p-2 shadow-2xl">
                            <span className="text-sm"> {dateString}</span>
                            <img src="https://cdn-icons-png.flaticon.com/512/2838/2838895.png" className="w-4 h-4" alt="date-icon" />
                        </div>
                        {/* ساعت - گوشه چپ */}
                        <div className="flex items-center gap-1 p-2 shadow-2xl ">
                            <span className="text-sm">{timeString}</span>
                            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png" className="w-4 h-4" alt="clock-icon" />
                        </div>
                    </div>
                </div>
         
        
    )
}
