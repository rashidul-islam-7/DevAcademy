import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-left">
            <span className="inline-block bg-emerald-500/10 text-emerald-400 text-sm font-semibold px-4 py-1.5 rounded-full border border-emerald-500/20 mb-6">
              🎉 ১০০% ফ্রি ওয়েব ডেভেলপমেন্ট শিক্ষা
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              কোনো টাকা লাগবে না, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                সবকিছু ফ্রি-তে
              </span>{" "}
              শিখুন!
            </h1>
            <p className="text-slate-400 text-lg sm:text-xl mb-8 leading-relaxed">
              <strong>DevAcademy</strong>-তে কোনো হিডেন চার্জ ছাড়াই বাস্তব
              উদাহরণ এবং প্রজেক্টের মাধ্যমে আধুনিক ওয়েব টেকনোলজি শিখুন। সম্পূর্ণ
              ফ্রিতে নিজেকে গড়ে তুলুন একজন আত্মবিশ্বাসী ফুল-স্ট্যাক ডেভেলপার
              হিসেবে।
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/courses"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-8 py-3.5 rounded-xl text-center shadow-lg transition duration-200"
              >
                ফ্রি কোর্সগুলো দেখুন 🚀
              </Link>
              <Link
                href="/about"
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-8 py-3.5 rounded-xl text-center border border-slate-700 transition duration-200"
              >
                আমাদের উদ্দেশ্য
              </Link>
            </div>
          </div>

          {/* Hero Visual Block */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl blur opacity-30"></div>
            <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center space-x-2 mb-4 border-b border-slate-800 pb-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-xs text-slate-500 ml-2 font-mono">
                  DevAcademy.js
                </span>
              </div>
              <pre className="text-xs sm:text-sm text-emerald-300 font-mono overflow-x-auto p-2 leading-relaxed">
                <code>{`// DevAcademy - 100% Free Education
const course = {
  price: 0, // সম্পূর্ণ ফ্রি!
  access: 'Lifetime Free',
  topics: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js'],
  goal: 'সবাইকে দক্ষ ডেভেলপার বানানো'
};

function startLearning() {
  return "আজই ফ্রিতে কোডিং শেখা শুরু করুন!";
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
