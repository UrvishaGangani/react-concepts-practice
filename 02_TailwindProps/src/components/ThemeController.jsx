import {useState,useEffect} from 'react'

function ThemeController() {
    const themeColors = [
      { name: "Red", value: "bg-red-500" },
      { name: "Green", value: "bg-green-500" },
      { name: "Blue", value: "bg-blue-500" },
      { name: "Yellow", value: "bg-yellow-500" },
      { name: "Purple", value: "bg-purple-500" },
    ];
    const [bgColor, setBgColor] = useState("bg-white");
    useEffect(() => {
        document.body.className = "";
        document.body.classList.add(bgColor);
    }, [bgColor]);
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 p-4 shadow-md z-50">
      <div className="flex flex-wrap justify-center gap-2">
        {themeColors.map((color) => (
          <button
            key={color.value}
            className="px-4 py-2 rounded-2xl font-medium text-black bg-white cursor-pointer transition-transform hover:scale-105"
            style={{
              backgroundColor: color.value.includes("-") ? "" : color.value,
            }}
            onClick={() => setBgColor(color.value)}
          >
            {color.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ThemeController