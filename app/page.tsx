import { ThreeDotNav } from "@/components/three-dot-nav"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ThreeDotNav />
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome</h1>
        <p className="text-muted-foreground">Your content goes here</p>
      </div>

      <div className="px-8 py-12 bg-gray-50">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold mb-8">
            <span className="text-gray-500">Latest project.</span>
            <br />
            <span className="text-black">with colo work between</span>
            <br />
            <span className="text-black">stepham and</span>
            <br />
            <span className="text-black">armoredlion.</span>
          </h2>

          {/* Award badges grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {/* iF Design Award */}
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                iF
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold">AWARD</p>
                <p className="text-sm font-semibold">iF Design</p>
              </div>
            </div>

            {/* Gold Award European Design */}
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-yellow-400 font-bold text-lg">
                ✦
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold">GOLD AWARD</p>
                <p className="text-sm font-semibold">European Design</p>
              </div>
            </div>

            {/* Gold Award German Design */}
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold">
                ◉
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold">GOLD AWARD</p>
                <p className="text-sm font-semibold">German Design</p>
              </div>
            </div>

            {/* Red Dot Award */}
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                ●
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold">AWARD</p>
                <p className="text-sm font-semibold">Red Dot</p>
              </div>
            </div>

            {/* Good Design Award */}
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg col-span-2">
              <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                ◎
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold">AWARD</p>
                <p className="text-sm font-semibold">Good Design</p>
              </div>
            </div>
          </div>

          {/* View project link */}
          <a href="#" className="text-sm font-semibold hover:opacity-70 transition-opacity">
            View project →
          </a>
        </div>
      </div>
    </main>
  )
}
