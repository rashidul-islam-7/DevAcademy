export default function FeatureSection() {
  const features = [
    {
      title: 'বাস্তব প্রজেক্ট নির্ভর শিক্ষা',
      description: 'শুধুমাত্র থিওরি নয়, প্রতিটি মডিউলে থাকবে রিয়েল-ওয়ার্ল্ড প্রজেক্ট তৈরির সুযোগ।',
      icon: '🚀',
    },
    {
      title: 'আপ-টু-ডেট টেক স্ট্যাক',
      description: 'JavaScript, React, Next.js এবং Node.js-এর সর্বশেষ টেকনোলজি শেখানো হয়।',
      icon: '💻',
    },
    {
      title: 'সহজ বাংলা ভাষায় নোট',
      description: 'জটিল কোডিং কনসেপ্টগুলোকে সহজ ও প্রাঞ্জল বাংলায় উদাহরণ সহ ব্যাখ্যা।',
      icon: '📚',
    },
    {
      title: 'সরাসরি সাপোর্ট ও ফিডব্যাক',
      description: 'প্রতিটি অ্যাসাইনমেন্টে পাবেন গাইডদের থেকে সরাসরি ফিডব্যাক ও সমস্যার সমাধান।',
      icon: '🤝',
    },
  ];

  return (
    <section className="py-16 bg-slate-900/50 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">কেন DevAcademy বেছে নেবেন?</h2>
          <p className="text-slate-400">আমাদের শেখানোর পদ্ধতি একদম সহজ ও কার্যকরী</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => (
            <div key={idx} className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/40 transition duration-300">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}