import Link from 'next/link';

export default function CourseGrid() {
  const courses = [
    {
      id: 'web-dev',
      title: 'Full Stack Web Development',
      badge: '১০০% ফ্রি',
      level: 'Beginner to Advanced',
      topics: ['HTML/CSS', 'JavaScript', 'React', 'Next.js', 'Node.js'],
      description: 'একদম জিরো থেকে শুরু করে ফ্রিতে প্রোফেশনাল ফুল-স্ট্যাক ডেভেলপার হওয়ার সম্পূর্ণ গাইডলাইন।',
    },
    {
      id: 'frontend',
      title: 'Modern Frontend Mastery',
      badge: '১০০% ফ্রি',
      level: 'Intermediate',
      topics: ['JavaScript ES6+', 'React.js', 'Tailwind CSS', 'Redux'],
      description: 'আধুনিক এবং দ্রুতগতিসম্পন্ন ইউজার ইন্টারফেস (UI) তৈরির সহজ শিক্ষা।',
    },
    {
      id: 'nextjs',
      title: 'Next.js App Router Mastery',
      badge: '১০০% ফ্রি',
      level: 'Advanced',
      topics: ['App Router', 'SSR/SSG', 'Server Actions', 'Prisma'],
      description: 'প্রোডাকশন রেডি ফুল-স্ট্যাক ওয়েবসাইট বানানোর সেরা ফ্রেমওয়ার্ক শিখুন বিনামূল্যে।',
    },
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">আমাদের ফ্রি কোর্সসমূহ</h2>
          <p className="text-slate-400">কোনো রেজিস্ট্রেশন ফি বা সাবস্ক্রিপশন ছাড়াই শেখা শুরু করুন</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-emerald-500/50 transition duration-300">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-semibold bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/30">
                    {course.badge}
                  </span>
                  <span className="text-xs text-slate-400">{course.level}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{course.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">{course.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {course.topics.map((topic, i) => (
                    <span key={i} className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href={`/courses/${course.id}`}
                  className="block text-center w-full bg-slate-800 hover:bg-emerald-600 text-white font-medium py-2.5 rounded-xl border border-slate-700 hover:border-emerald-600 transition duration-200"
                >
                  ফ্রিতে ক্লাস শুরু করুন
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}