import { useMemo, useState } from 'react'
import {
  ArrowLeft, BadgeCheck, BriefcaseBusiness, Building2, ChevronDown,
  FileText, Headphones, MessageCircle, Plane, Search, ShieldCheck,
  Sparkles, TicketCheck, UserRound, WalletCards
} from 'lucide-react'

type FinderState = {
  passport: string
  destination: string
  purpose: string
}

const serviceGroups = [
  { title: 'ویزا و اقامت', icon: TicketCheck, desc: 'توریستی، تجاری، تحصیلی، کاری، زیارتی، تمدید و اقامت', href: '#visa' },
  { title: 'دعوتنامه و تجارت', icon: BriefcaseBusiness, desc: 'دعوتنامه تجاری، نمایشگاه، سفر کاری و خدمات شرکتی', href: '#business' },
  { title: 'پرواز و هتل', icon: Plane, desc: 'درخواست بلیت، رزرو هتل و بسته سفر', href: '#travel' },
  { title: 'زیارت و کاروان', icon: Building2, desc: 'عمره، کربلا، ایران و خدمات گروهی', href: '#pilgrimage' },
  { title: 'اسناد و کنسولی', icon: FileText, desc: 'ترجمه، تصدیق، فرم، وقت سفارت و آماده‌سازی اسناد', href: '#docs' },
  { title: 'بیمه و خدمات سفر', icon: ShieldCheck, desc: 'بیمه، ترانسفر، کمک سفر و خدمات مکمل', href: '#addons' },
]

const destinations = [
  ['امارات', 'ویزا، اقامت، تجارت، هتل و پرواز'],
  ['ایران', 'سیاحتی، زیارتی، تجاری و خدمات اسناد'],
  ['ترکیه', 'ویزا، سفر، تجارت و رزرو'],
  ['چین', 'تجارت، دعوتنامه، نمایشگاه و سفر'],
  ['عربستان', 'عمره و خدمات زیارتی'],
  ['عراق', 'کربلا و عتبات'],
  ['پاکستان', 'سفر و خدمات کنسولی'],
  ['آسیای میانه', 'ازبکستان، قزاقستان و خدمات سفر'],
]

const quickChips = ['ویزای ۳۰ روزه', 'ویزای ۹۰ روزه', 'دعوتنامه تجاری', 'تمدید ویزا', 'اقامت', 'عمره', 'هتل', 'تکت']

function App() {
  const [megaOpen, setMegaOpen] = useState(false)
  const [finder, setFinder] = useState<FinderState>({ passport: 'افغانستان', destination: '', purpose: '' })
  const finderReady = useMemo(() => Boolean(finder.destination && finder.purpose), [finder])

  return (
    <div className="min-h-screen bg-[#f8f6f0] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-900/5 bg-[#fffdf8]/92 backdrop-blur-xl">
        <div className="shell flex h-18 items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-3">
            <img src="https://raw.githubusercontent.com/khwajaprn/fajer-parsa/main/logo.png" alt="Fajr Parsa" className="h-11 w-11 rounded-xl object-contain bg-white" />
            <div>
              <div className="font-black tracking-tight">فجر پارسا</div>
              <div className="text-[11px] text-slate-500">Travel • Visa • Pilgrimage • Business</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1 text-sm font-bold">
            <button onClick={() => setMegaOpen(!megaOpen)} className="flex items-center gap-1 rounded-xl px-4 py-2 hover:bg-slate-900/5">
              خدمات <ChevronDown size={15} />
            </button>
            <a className="rounded-xl px-4 py-2 hover:bg-slate-900/5" href="#destinations">کشورها</a>
            <a className="rounded-xl px-4 py-2 hover:bg-slate-900/5" href="#deals">پیشنهادها</a>
            <a className="rounded-xl px-4 py-2 hover:bg-slate-900/5" href="#track">پیگیری</a>
            <a className="rounded-xl px-4 py-2 hover:bg-slate-900/5" href="#help">راهنما</a>
          </nav>

          <div className="flex items-center gap-2">
            <button className="hidden sm:flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold">
              <UserRound size={16}/> حساب من
            </button>
            <button className="rounded-xl bg-[#0b1220] px-4 py-2.5 text-xs font-black text-white shadow-lg">
              شروع درخواست
            </button>
          </div>
        </div>

        {megaOpen && (
          <div className="absolute inset-x-0 top-full border-t border-slate-900/5 bg-[#fffdf8] shadow-2xl">
            <div className="shell grid grid-cols-2 gap-3 py-6 md:grid-cols-3 lg:grid-cols-6">
              {serviceGroups.map(({title, icon: Icon, desc, href}) => (
                <a key={title} href={href} onClick={() => setMegaOpen(false)} className="rounded-2xl border border-slate-200 bg-white p-4 hover:border-[#b8892f]/40">
                  <Icon size={20} className="mb-3 text-[#9a6f20]" />
                  <div className="text-sm font-black">{title}</div>
                  <div className="mt-1 text-[11px] leading-5 text-slate-500">{desc}</div>
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="hero min-h-[650px] text-white">
          <div className="shell grid min-h-[650px] items-center gap-10 py-16 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-bold backdrop-blur">
                <Sparkles size={15} className="text-amber-300"/> پلتفرم خدمات سفر و ویزای فجر پارسا
              </div>
              <h1 className="max-w-3xl text-4xl font-black leading-[1.25] md:text-6xl">
                از پیدا کردن خدمت تا <span className="text-[#f3d48c]">ثبت درخواست و پیگیری</span>، همه در یک مسیر
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-200 md:text-base">
                ویزا، اقامت، دعوتنامه، سفر تجاری، زیارت، پرواز، هتل و خدمات اسناد — با مسیر شفاف، درخواست آنلاین و پشتیبانی انسانی.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {quickChips.map(c => <span key={c} className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs">{c}</span>)}
              </div>
            </div>

            <div className="glass rounded-[28px] p-5 text-slate-900 md:p-7">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-sm font-black">خدمت مناسب خود را پیدا کنید</div>
                  <div className="mt-1 text-xs text-slate-500">چند انتخاب کوتاه، سپس پیشنهادهای مرتبط</div>
                </div>
                <Search size={22} className="text-[#9a6f20]" />
              </div>
              <div className="space-y-3">
                <label className="block text-xs font-bold text-slate-600">پاسپورت شما</label>
                <select value={finder.passport} onChange={e=>setFinder({...finder, passport:e.target.value})} className="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm">
                  <option>افغانستان</option>
                  <option>کشور دیگر</option>
                </select>

                <label className="block text-xs font-bold text-slate-600">مقصد</label>
                <select value={finder.destination} onChange={e=>setFinder({...finder, destination:e.target.value})} className="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm">
                  <option value="">انتخاب مقصد</option>
                  {destinations.map(([name]) => <option key={name}>{name}</option>)}
                </select>

                <label className="block text-xs font-bold text-slate-600">هدف سفر</label>
                <select value={finder.purpose} onChange={e=>setFinder({...finder, purpose:e.target.value})} className="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm">
                  <option value="">انتخاب هدف</option>
                  <option>سیاحت</option><option>تجارت</option><option>اقامت</option>
                  <option>زیارت</option><option>تحصیل</option><option>کار</option>
                </select>

                <button disabled={!finderReady} className="mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#0b1220] px-4 py-3.5 text-sm font-black text-white disabled:opacity-40">
                  نمایش خدمات مرتبط <ArrowLeft size={17}/>
                </button>
                <p className="text-center text-[11px] leading-5 text-slate-500">
                  قیمت، شرایط یا موجودی فقط بعد از تأیید اطلاعات واقعی فجر پارسا نمایش داده می‌شود.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="shell py-16" id="services">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div><div className="text-xs font-black text-[#9a6f20]">SERVICES</div><h2 className="mt-2 text-3xl font-black">همه خدمات، یکجا و قابل توسعه</h2></div>
            <button className="hidden items-center gap-2 text-sm font-bold text-slate-600 md:flex">مشاهده همه <ArrowLeft size={16}/></button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {serviceGroups.map(({title, icon: Icon, desc}) => (
              <article key={title} className="service-card soft-card rounded-3xl p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f3ead7] text-[#8a6423]"><Icon size={22}/></div>
                <h3 className="text-lg font-black">{title}</h3>
                <p className="mt-2 min-h-12 text-sm leading-7 text-slate-500">{desc}</p>
                <button className="mt-5 flex items-center gap-2 text-xs font-black text-[#7b5b20]">بررسی گزینه‌ها <ArrowLeft size={15}/></button>
              </article>
            ))}
          </div>
        </section>

        <section id="destinations" className="bg-[#0b1220] py-16 text-white">
          <div className="shell">
            <div className="mb-8"><div className="text-xs font-black text-[#e8c874]">DESTINATIONS</div><h2 className="mt-2 text-3xl font-black">بر اساس کشور شروع کنید</h2></div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {destinations.map(([name, desc]) => (
                <button key={name} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-right transition hover:bg-white/10">
                  <div className="font-black text-[#f2d287]">{name}</div>
                  <div className="mt-2 text-xs leading-6 text-slate-300">{desc}</div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="shell grid gap-4 py-16 lg:grid-cols-3" id="deals">
          <div className="soft-card rounded-3xl p-6 lg:col-span-2">
            <div className="pill inline-flex rounded-full px-3 py-1 text-[11px] font-black">SMART COMMERCE</div>
            <h2 className="mt-4 text-2xl font-black">بسته بسازید، فقط یک خدمت نخرید</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">ویزا + دعوتنامه + هتل + تکت + بیمه + ترانسفر؛ سیستم بر اساس سفر، خدمات مکمل را پیشنهاد می‌دهد. قیمت نهایی بعد از تأیید نرخ و ظرفیت اعلام می‌شود.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {['Visa Only','Business Bundle','Complete Travel'].map((x,i)=><div key={x} className="rounded-2xl bg-slate-50 p-4"><WalletCards size={18} className="text-[#9a6f20]"/><div className="mt-3 text-sm font-black">{x}</div><div className="mt-1 text-[11px] text-slate-500">{['خدمت اصلی','دعوتنامه + ویزا + سفر','بسته کامل قابل تنظیم'][i]}</div></div>)}
            </div>
          </div>
          <div className="rounded-3xl bg-[#efe4ca] p-6">
            <BadgeCheck size={28} className="text-[#79591f]"/>
            <h3 className="mt-5 text-xl font-black">اعتماد و شفافیت</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">شرایط، مراحل، مدارک و وضعیت هر درخواست باید روشن باشد. هیچ تضمین ویزا یا خدمت تأییدنشده نمایش داده نمی‌شود.</p>
          </div>
        </section>

        <section id="track" className="bg-white py-16">
          <div className="shell grid gap-5 lg:grid-cols-2">
            <div className="rounded-3xl bg-[#0b1220] p-7 text-white">
              <Headphones size={26} className="text-[#f0cf7f]"/>
              <h2 className="mt-4 text-2xl font-black">پیگیری درخواست و حساب مشتری</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">Case ID، مراحل پرونده، مدارک کمبود، پرداخت‌ها، رسیدها، پیام‌ها و ادامه درخواست — در My Fajr Parsa.</p>
              <button className="mt-6 rounded-xl bg-white px-4 py-2.5 text-xs font-black text-slate-900">پیگیری پرونده</button>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-[#fffdf8] p-7">
              <Sparkles size={26} className="text-[#9a6f20]"/>
              <h2 className="mt-4 text-2xl font-black">Fajr Parsa AI Assistant</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">دستیار واقعی Gemini در نسخه بعدی به کاتالوگ تأییدشده، FAQ، اسناد و وضعیت درخواست متصل می‌شود؛ پاسخ ساختگی درباره قیمت یا موجودی نمی‌دهد.</p>
              <button className="mt-6 flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-black"><MessageCircle size={15}/> گفت‌وگو با دستیار</button>
            </div>
          </div>
        </section>

        <section id="help" className="shell py-16">
          <div className="rounded-[32px] bg-gradient-to-l from-[#d9bf80] to-[#f0e4c8] p-8 md:p-12">
            <div className="max-w-3xl">
              <div className="text-xs font-black text-[#72531e]">FAJR PARSA CUSTOMER JOURNEY</div>
              <h2 className="mt-3 text-3xl font-black">کشف → انتخاب → درخواست → پیگیری</h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">ساختار جدید برای این طراحی شده که بازدیدکننده را از پست، گوگل یا شبکه اجتماعی مستقیماً به یک اقدام قابل اندازه‌گیری برساند.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#080d16] py-12 text-slate-300">
        <div className="shell grid gap-8 md:grid-cols-4">
          <div><div className="font-black text-white">فجر پارسا</div><p className="mt-3 text-xs leading-6 text-slate-400">سفر، ویزا، زیارت و تجارت در یک تجربه منظم و قابل پیگیری.</p></div>
          <div><div className="text-xs font-black text-white">خدمات</div><p className="mt-3 text-xs leading-6 text-slate-400">ویزا • اقامت • دعوتنامه • پرواز • هتل • زیارت • اسناد</p></div>
          <div><div className="text-xs font-black text-white">تعامل</div><p className="mt-3 text-xs leading-6 text-slate-400">WhatsApp • Telegram • Facebook • Instagram • Email</p></div>
          <div><div className="text-xs font-black text-white">پشتیبانی</div><p className="mt-3 text-xs leading-6 text-slate-400">پیگیری درخواست • FAQ • تماس • دفتر</p></div>
        </div>
      </footer>

      <button className="floating-ai fixed bottom-5 left-5 z-40 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0b1220] text-white" aria-label="Fajr Parsa AI">
        <Sparkles size={22} className="text-[#f0cf7f]"/>
      </button>
    </div>
  )
}

export default App
