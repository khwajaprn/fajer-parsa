import { useMemo, useState } from 'react'
import {
  ArrowLeft,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock3,
  FileText,
  Globe2,
  Headphones,
  Languages,
  Menu,
  MessageCircle,
  Plane,
  Search,
  ShieldCheck,
  Sparkles,
  TicketCheck,
  UserRound,
  WalletCards,
  X,
} from 'lucide-react'

type FinderState = {
  passport: string
  destination: string
  purpose: string
}

const serviceGroups = [
  { title: 'ویزا و اقامت', icon: TicketCheck, desc: 'توریستی، تجاری، تحصیلی، کاری، زیارتی، تمدید، تغییر وضعیت و اقامت.', label: 'Visa & Residency' },
  { title: 'دعوتنامه و تجارت', icon: BriefcaseBusiness, desc: 'دعوتنامه تجاری، نمایشگاه، سفر کاری، جلسات و خدمات شرکتی.', label: 'Business Travel' },
  { title: 'پرواز و هتل', icon: Plane, desc: 'درخواست بلیت، رزرو هتل، مسیر سفر و بسته‌های ترکیبی.', label: 'Flights & Hotels' },
  { title: 'زیارت و کاروان', icon: Building2, desc: 'عمره، کربلا، ایران و خدمات گروهی و زیارتی.', label: 'Pilgrimage' },
  { title: 'اسناد و کنسولی', icon: FileText, desc: 'ترجمه، تصدیق، فرم، وقت سفارت و آماده‌سازی پرونده.', label: 'Documents' },
  { title: 'خدمات مکمل سفر', icon: ShieldCheck, desc: 'بیمه، ترانسفر، بررسی اسناد و خدمات پشتیبان سفر.', label: 'Travel Add-ons' },
]

const destinations = [
  { name: 'امارات متحده عربی', short: 'امارات', desc: 'ویزا، اقامت، تجارت، هتل و پرواز', image: 'https://raw.githubusercontent.com/khwajaprn/fajer-parsa/main/arab.jpg' },
  { name: 'ایران', short: 'ایران', desc: 'سیاحتی، زیارتی، تجاری و خدمات اسناد', image: 'https://raw.githubusercontent.com/khwajaprn/fajer-parsa/main/iran.jpg' },
  { name: 'عراق و عتبات', short: 'عراق', desc: 'کربلا، نجف و خدمات گروهی زیارتی', image: 'https://raw.githubusercontent.com/khwajaprn/fajer-parsa/main/karbala.jpg' },
  { name: 'پاکستان', short: 'پاکستان', desc: 'سفر، خدمات کنسولی و درخواست‌های مرتبط', image: 'https://raw.githubusercontent.com/khwajaprn/fajer-parsa/main/pakistan.jpg' },
]

const moreDestinations = ['ترکیه', 'چین', 'عربستان سعودی', 'ازبکستان', 'قزاقستان', 'تاجیکستان']
const quickChips = ['ویزای ۳۰ روزه', 'ویزای ۹۰ روزه', 'دعوتنامه تجاری', 'تمدید ویزا', 'اقامت', 'عمره', 'هتل', 'تکت']
const trustItems = [
  ['درخواست آنلاین', 'فرم کوتاه و مرحله‌ای'],
  ['پیگیری پرونده', 'وضعیت و مدارک مورد نیاز'],
  ['پشتیبانی انسانی', 'واتساپ و مشاور فجر پارسا'],
  ['اسناد منظم', 'رسید، قرارداد و فایل‌های پرونده'],
]

function App() {
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [finder, setFinder] = useState<FinderState>({ passport: 'افغانستان', destination: '', purpose: '' })
  const finderReady = useMemo(() => Boolean(finder.destination && finder.purpose), [finder])

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f4ec] text-slate-900">
      <div className="bg-[#09111f] text-white">
        <div className="shell flex min-h-9 items-center justify-between gap-3 py-2 text-[11px] text-slate-300">
          <div className="flex items-center gap-2">
            <BadgeCheck size={14} className="text-[#e6c77d]" />
            <span>خدمات سفر و ویزا با مسیر شفاف درخواست و پیگیری</span>
          </div>
          <div className="hidden items-center gap-5 sm:flex">
            <span className="font-latin text-[10px] tracking-[.12em] text-slate-400">FAJR PARSA TRAVEL COMMERCE</span>
            <button className="flex items-center gap-1.5 text-white"><Languages size={13} /> دری</button>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-900/5 bg-[#fffdf8]/90 backdrop-blur-2xl">
        <div className="shell flex h-[74px] items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-3">
            <div className="relative">
              <img src="https://raw.githubusercontent.com/khwajaprn/fajer-parsa/main/logo.png" alt="لوگوی فجر پارسا" className="h-12 w-12 rounded-[15px] border border-slate-900/5 bg-white object-contain p-1 shadow-sm" />
              <span className="absolute -bottom-1 -left-1 h-3 w-3 rounded-full border-2 border-[#fffdf8] bg-emerald-500" />
            </div>
            <div>
              <div className="text-[17px] font-black tracking-[-.02em]">فجر پارسا</div>
              <div className="font-latin text-[9px] font-bold tracking-[.16em] text-slate-400">TRAVEL • VISA • BUSINESS</div>
            </div>
          </a>

          <nav className="hidden items-center gap-1 text-[13px] font-extrabold lg:flex">
            <button onClick={() => setMegaOpen(!megaOpen)} className="flex items-center gap-1.5 rounded-xl px-4 py-2.5 transition hover:bg-slate-900/5">
              خدمات <ChevronDown size={15} className={megaOpen ? 'rotate-180 transition' : 'transition'} />
            </button>
            <a className="rounded-xl px-4 py-2.5 transition hover:bg-slate-900/5" href="#destinations">کشورها</a>
            <a className="rounded-xl px-4 py-2.5 transition hover:bg-slate-900/5" href="#journey">رزرو و درخواست</a>
            <a className="rounded-xl px-4 py-2.5 transition hover:bg-slate-900/5" href="#deals">پیشنهادها</a>
            <a className="rounded-xl px-4 py-2.5 transition hover:bg-slate-900/5" href="#track">پیگیری</a>
          </nav>

          <div className="flex items-center gap-2">
            <button className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-extrabold shadow-sm sm:flex"><UserRound size={16} /> حساب من</button>
            <button className="shine rounded-xl bg-[#09111f] px-4 py-2.5 text-xs font-black text-white shadow-lg shadow-slate-950/10">شروع درخواست</button>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white lg:hidden" aria-label="منوی موبایل">
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {megaOpen && (
          <div className="absolute inset-x-0 top-full hidden border-t border-slate-900/5 bg-[#fffdf8]/98 shadow-2xl lg:block">
            <div className="shell grid grid-cols-[1.25fr_2.75fr] gap-6 py-7">
              <div className="rounded-3xl bg-[#09111f] p-6 text-white">
                <div className="eyebrow !border-white/10 !bg-white/5 !text-[#f2d99e]">همه خدمات</div>
                <h3 className="mt-4 text-2xl font-black leading-9">از یک خدمت تا بسته کامل سفر</h3>
                <p className="mt-3 text-xs leading-6 text-slate-300">کشور، هدف سفر و نوع خدمت را انتخاب کنید. ساختار جدید برای ده‌ها و صدها خدمت توسعه‌پذیر است.</p>
                <button className="mt-5 flex items-center gap-2 text-xs font-black text-[#f0cf7f]">مشاهده کاتالوگ کامل <ArrowLeft size={14} /></button>
              </div>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                {serviceGroups.map(({ title, icon: Icon, desc }) => (
                  <a key={title} href="#services" onClick={() => setMegaOpen(false)} className="action-card rounded-2xl border border-slate-200 bg-white p-4">
                    <Icon size={20} className="mb-3 text-[#9a6f20]" />
                    <div className="text-sm font-black">{title}</div>
                    <div className="mt-1 text-[10px] leading-5 text-slate-500">{desc}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {mobileOpen && (
          <div className="border-t border-slate-900/5 bg-[#fffdf8] px-4 py-4 lg:hidden">
            <div className="grid gap-2 text-sm font-bold">
              {['خدمات', 'کشورها', 'رزرو و درخواست', 'پیشنهادها', 'پیگیری پرونده', 'حساب من'].map((item) => (
                <button key={item} className="rounded-xl bg-white px-4 py-3 text-right shadow-sm">{item}</button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="hero min-h-[720px] text-white">
          <div className="shell grid min-h-[720px] items-center gap-10 py-16 lg:grid-cols-[1.08fr_.92fr]">
            <div className="max-w-3xl">
              <div className="eyebrow"><Sparkles size={15} /> پلتفرم خدمات سفر، ویزا و تجارت</div>
              <h1 className="text-balance mt-6 text-[42px] font-black leading-[1.18] tracking-[-.035em] sm:text-5xl lg:text-[68px]">
                سفر بعدی شما،
                <span className="block bg-gradient-to-l from-[#ffe6a9] via-[#e6c77d] to-[#fff3cf] bg-clip-text text-transparent">واضح‌تر، سریع‌تر، حرفه‌ای‌تر</span>
              </h1>
              <p className="mt-6 max-w-2xl text-[14px] font-medium leading-8 text-slate-200 sm:text-[15px]">
                ویزا، اقامت، دعوتنامه، سفر تجاری، زیارت، پرواز، هتل، اسناد و خدمات مکمل؛ از کشف خدمت تا ثبت درخواست و پیگیری پرونده در یک تجربه منظم.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {quickChips.map((chip) => <span key={chip} className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-bold backdrop-blur">{chip}</span>)}
              </div>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <button className="shine flex items-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-black text-[#09111f] shadow-xl shadow-black/10">جستجوی خدمات <ArrowLeft size={17} /></button>
                <div className="flex items-center gap-2 text-xs text-slate-300"><CheckCircle2 size={16} className="text-emerald-400" /> بدون نمایش قیمت یا وعده تأییدنشده</div>
              </div>
            </div>

            <div className="relative">
              <div className="glass rounded-[32px] p-5 text-slate-900 md:p-7">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <div className="eyebrow">Service Finder</div>
                    <h2 className="mt-3 text-xl font-black">خدمت مناسب خود را پیدا کنید</h2>
                    <p className="mt-1 text-xs leading-6 text-slate-500">سه انتخاب کوتاه؛ سپس گزینه‌های مرتبط را می‌بینید.</p>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f1e7d1] text-[#8a6423]"><Search size={20} /></div>
                </div>

                <div className="grid gap-3">
                  <label className="text-[11px] font-black text-slate-600">پاسپورت / تابعیت</label>
                  <select value={finder.passport} onChange={(e) => setFinder({ ...finder, passport: e.target.value })} className="w-full rounded-2xl border border-slate-200 bg-white p-3.5 text-sm outline-none transition focus:border-[#c79a42]">
                    <option>افغانستان</option><option>کشور دیگر</option>
                  </select>
                  <label className="mt-1 text-[11px] font-black text-slate-600">مقصد</label>
                  <select value={finder.destination} onChange={(e) => setFinder({ ...finder, destination: e.target.value })} className="w-full rounded-2xl border border-slate-200 bg-white p-3.5 text-sm outline-none transition focus:border-[#c79a42]">
                    <option value="">انتخاب مقصد</option>
                    {[...destinations.map((d) => d.short), ...moreDestinations].map((name) => <option key={name}>{name}</option>)}
                  </select>
                  <label className="mt-1 text-[11px] font-black text-slate-600">هدف سفر</label>
                  <select value={finder.purpose} onChange={(e) => setFinder({ ...finder, purpose: e.target.value })} className="w-full rounded-2xl border border-slate-200 bg-white p-3.5 text-sm outline-none transition focus:border-[#c79a42]">
                    <option value="">انتخاب هدف</option><option>سیاحت</option><option>تجارت</option><option>اقامت</option><option>زیارت</option><option>تحصیل</option><option>کار</option>
                  </select>
                  <button disabled={!finderReady} className="shine mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#09111f] px-4 py-3.5 text-sm font-black text-white shadow-lg disabled:cursor-not-allowed disabled:opacity-40">نمایش خدمات مرتبط <ArrowLeft size={17} /></button>
                </div>

                <div className="premium-divider my-5" />
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-2xl bg-white/75 p-3"><Globe2 size={16} className="mx-auto text-[#9a6f20]" /><div className="mt-2 text-[10px] font-black">کشورمحور</div></div>
                  <div className="rounded-2xl bg-white/75 p-3"><Clock3 size={16} className="mx-auto text-[#9a6f20]" /><div className="mt-2 text-[10px] font-black">مرحله‌ای</div></div>
                  <div className="rounded-2xl bg-white/75 p-3"><MessageCircle size={16} className="mx-auto text-[#9a6f20]" /><div className="mt-2 text-[10px] font-black">پشتیبانی</div></div>
                </div>
              </div>

              <div className="absolute -left-4 top-12 hidden rounded-2xl border border-white/15 bg-[#0d1a2d]/90 px-4 py-3 text-white shadow-2xl backdrop-blur-xl xl:block">
                <div className="font-latin text-[9px] tracking-[.16em] text-[#e6c77d]">SMART ROUTE</div>
                <div className="mt-1 text-xs font-black">Visa • Hotel • Flight</div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 -mt-9">
          <div className="shell">
            <div className="grid overflow-hidden rounded-[28px] border border-white bg-white shadow-[0_20px_70px_rgba(10,18,32,.11)] sm:grid-cols-2 lg:grid-cols-4">
              {trustItems.map(([title, text], index) => (
                <div key={title} className={`p-5 ${index ? 'border-t border-slate-100 sm:border-r sm:border-t-0' : ''}`}>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-600" /><div className="text-xs font-black">{title}</div></div>
                  <div className="mt-2 pr-6 text-[11px] leading-5 text-slate-500">{text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="shell py-20" id="services">
          <div className="mb-9 flex items-end justify-between gap-4">
            <div>
              <div className="eyebrow">Services</div>
              <h2 className="mt-4 text-3xl font-black tracking-[-.03em] sm:text-4xl">یک کاتالوگ؛ ده‌ها مسیر سفر و خدمت</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">معماری خدمات طوری طراحی شده که بعداً بدون بازنویسی سایت، کشورها، ویزاها، مدت‌ها و خدمات جدید اضافه شوند.</p>
            </div>
            <button className="hidden items-center gap-2 text-sm font-black text-[#7d5b20] md:flex">مشاهده کاتالوگ <ArrowLeft size={16} /></button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {serviceGroups.map(({ title, icon: Icon, desc, label }, index) => (
              <article key={title} className="service-card soft-card group rounded-[28px] p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f4ead5] to-[#fbf7ee] text-[#8a6423] shadow-inner"><Icon size={22} /></div>
                  <span className="font-latin text-[9px] font-bold uppercase tracking-[.12em] text-slate-300">0{index + 1}</span>
                </div>
                <div className="font-latin mt-6 text-[9px] font-extrabold uppercase tracking-[.15em] text-[#9b7730]">{label}</div>
                <h3 className="mt-2 text-xl font-black">{title}</h3>
                <p className="mt-2 min-h-14 text-sm leading-7 text-slate-500">{desc}</p>
                <div className="premium-divider my-5" />
                <button className="flex items-center gap-2 text-xs font-black text-[#75551d]">بررسی گزینه‌ها <ArrowLeft size={15} className="transition group-hover:-translate-x-1" /></button>
              </article>
            ))}
          </div>
        </section>

        <section id="destinations" className="bg-[#09111f] py-20 text-white">
          <div className="shell">
            <div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <div className="eyebrow !border-white/10 !bg-white/5 !text-[#efd38e]">Destinations</div>
                <h2 className="mt-4 text-3xl font-black tracking-[-.03em] sm:text-4xl">با مقصد شروع کنید</h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">هر کشور Hub اختصاصی خود را دارد: ویزا، اقامت، تجارت، زیارت، رزرو و خدمات مکمل.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {moreDestinations.slice(0, 4).map((name) => <button key={name} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-bold text-slate-300">{name}</button>)}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {destinations.map((destination) => (
                <article key={destination.name} className="destination-card p-6">
                  <img src={destination.image} alt={destination.name} loading="lazy" />
                  <div className="flex h-full flex-col justify-end">
                    <div className="text-[10px] font-bold text-[#f1d58f]">DESTINATION HUB</div>
                    <h3 className="mt-1 text-xl font-black">{destination.name}</h3>
                    <p className="mt-2 text-xs leading-6 text-slate-200">{destination.desc}</p>
                    <button className="mt-4 flex items-center gap-2 text-xs font-black text-white">باز کردن مقصد <ArrowLeft size={14} /></button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="shell py-20" id="journey">
          <div className="grid gap-5 lg:grid-cols-[1.12fr_.88fr]">
            <div className="soft-card dot-grid rounded-[32px] p-7 md:p-9">
              <div className="eyebrow">Smart Request</div>
              <h2 className="mt-4 text-3xl font-black tracking-[-.03em]">فرم ثابت نه؛ مسیر هوشمند درخواست</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">سؤال‌ها بر اساس کشور و خدمت تغییر می‌کنند. درخواست ویزا، عمره، دعوتنامه تجاری یا رزرو هتل هر کدام مسیر مناسب خود را دارند.</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  ['۱', 'انتخاب خدمت', 'کشور، نوع خدمت و گزینه مناسب'],
                  ['۲', 'اطلاعات مسافر', 'تماس، تابعیت و شرایط پایه'],
                  ['۳', 'جزئیات اختصاصی', 'سؤال‌های مخصوص همان خدمت'],
                  ['۴', 'ثبت و پیگیری', 'Case ID و ادامه در حساب مشتری'],
                ].map(([num, title, desc]) => (
                  <div key={num} className="rounded-2xl border border-slate-200 bg-white/85 p-4">
                    <div className="flex items-center gap-3">
                      <span className="font-latin flex h-8 w-8 items-center justify-center rounded-xl bg-[#09111f] text-[11px] font-black text-white">{num}</span>
                      <div><div className="text-sm font-black">{title}</div><div className="mt-1 text-[10px] leading-5 text-slate-500">{desc}</div></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div id="deals" className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#d9bd77] via-[#ecd89d] to-[#f7ecd0] p-7 md:p-9">
              <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full border border-white/40" />
              <WalletCards size={28} className="relative text-[#6f511d]" />
              <div className="font-latin relative mt-5 text-[9px] font-black uppercase tracking-[.16em] text-[#7c5b20]">Bundles & Offers</div>
              <h2 className="relative mt-2 text-3xl font-black leading-[1.25]">بسته سفر خود را بسازید</h2>
              <p className="relative mt-3 text-sm leading-7 text-slate-700">ویزا + دعوتنامه + هتل + تکت + بیمه + ترانسفر. خدمات مکمل فقط وقتی پیشنهاد می‌شوند که برای سفر مربوط باشند.</p>
              <div className="relative mt-6 space-y-2">
                {['Visa Only', 'Business Bundle', 'Complete Travel'].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-2xl bg-white/55 px-4 py-3 backdrop-blur"><span className="font-latin text-xs font-extrabold">{item}</span><ArrowLeft size={14} /></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="track" className="bg-white py-20">
          <div className="shell grid gap-5 lg:grid-cols-2">
            <article className="shine overflow-hidden rounded-[32px] bg-[#09111f] p-8 text-white md:p-10">
              <Headphones size={28} className="text-[#f0cf7f]" />
              <div className="font-latin mt-6 text-[9px] font-black uppercase tracking-[.16em] text-[#d9bc75]">My Fajr Parsa</div>
              <h2 className="mt-2 text-3xl font-black">حساب مشتری و پیگیری واقعی پرونده</h2>
              <p className="mt-4 max-w-xl text-sm leading-8 text-slate-300">Case ID، مرحله فعلی، مدارک کمبود، رسیدها، قراردادها، پیام‌ها و ادامه درخواست از یک حساب واحد.</p>
              <button className="mt-7 flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-xs font-black text-[#09111f]">پیگیری پرونده <ArrowLeft size={15} /></button>
            </article>

            <article className="soft-card relative overflow-hidden rounded-[32px] p-8 md:p-10">
              <div className="absolute left-0 top-0 h-44 w-44 -translate-x-12 -translate-y-16 rounded-full bg-[#e8d6aa]/30 blur-2xl" />
              <Sparkles size={28} className="relative text-[#9a6f20]" />
              <div className="font-latin relative mt-6 text-[9px] font-black uppercase tracking-[.16em] text-[#9a6f20]">Gemini Powered</div>
              <h2 className="relative mt-2 text-3xl font-black">Fajr Parsa AI Assistant</h2>
              <p className="relative mt-4 max-w-xl text-sm leading-8 text-slate-600">دستیار گوشه سایت برای جستجوی خدمت، مدارک، مقایسه گزینه‌ها، شروع درخواست و تحویل به پشتیبانی انسانی — بر اساس اطلاعات تأییدشده فجر پارسا.</p>
              <button className="relative mt-7 flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-xs font-black shadow-sm"><MessageCircle size={15} /> گفت‌وگو با دستیار</button>
            </article>
          </div>
        </section>

        <section className="shell py-20">
          <div className="overflow-hidden rounded-[36px] bg-gradient-to-l from-[#caa85a] via-[#e7d095] to-[#f3e7c8] p-8 md:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div className="max-w-3xl">
                <div className="font-latin text-[9px] font-black uppercase tracking-[.18em] text-[#75551f]">FAJR PARSA CUSTOMER JOURNEY</div>
                <h2 className="mt-3 text-3xl font-black tracking-[-.03em] md:text-4xl">کشف → انتخاب → درخواست → پیگیری</h2>
                <p className="mt-4 text-sm leading-8 text-slate-700">هر بازدید باید به یک اقدام روشن برسد: بررسی خدمت، درخواست قیمت، ثبت درخواست، واتساپ یا پیگیری پرونده.</p>
              </div>
              <button className="shine flex items-center justify-center gap-2 rounded-2xl bg-[#09111f] px-6 py-4 text-sm font-black text-white shadow-xl">شروع درخواست <ArrowLeft size={16} /></button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#070d17] py-14 text-slate-300">
        <div className="shell grid gap-9 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src="https://raw.githubusercontent.com/khwajaprn/fajer-parsa/main/logo.png" alt="" className="h-10 w-10 rounded-xl bg-white p-1 object-contain" />
              <div><div className="font-black text-white">فجر پارسا</div><div className="font-latin text-[8px] tracking-[.14em] text-slate-500">TRAVEL COMMERCE</div></div>
            </div>
            <p className="mt-4 text-xs leading-6 text-slate-400">سفر، ویزا، زیارت و تجارت در یک تجربه منظم و قابل پیگیری.</p>
          </div>
          <div><div className="text-xs font-black text-white">خدمات</div><p className="mt-4 text-xs leading-7 text-slate-400">ویزا • اقامت • دعوتنامه • پرواز • هتل • زیارت • اسناد • بیمه</p></div>
          <div><div className="text-xs font-black text-white">ارتباط و جامعه</div><p className="mt-4 text-xs leading-7 text-slate-400">WhatsApp • WhatsApp Channel • Telegram • Facebook • Instagram • Email</p></div>
          <div><div className="text-xs font-black text-white">پشتیبانی</div><p className="mt-4 text-xs leading-7 text-slate-400">پیگیری درخواست • FAQ • تماس • دفتر • حساب مشتری</p></div>
        </div>
        <div className="shell mt-10 border-t border-white/10 pt-5 text-[10px] text-slate-500">Fajr Parsa Travel & Visa Services — Public web experience in active development.</div>
      </footer>

      <button className="floating-ai fixed bottom-5 left-5 z-40 flex h-15 w-15 items-center justify-center rounded-2xl border border-white/10 bg-[#09111f] text-white" aria-label="Fajr Parsa AI"><Sparkles size={22} className="text-[#f0cf7f]" /></button>

      <div className="fixed inset-x-3 bottom-3 z-30 flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/94 p-2 shadow-2xl backdrop-blur md:hidden">
        <button className="flex-1 rounded-xl bg-[#09111f] px-3 py-3 text-xs font-black text-white">شروع درخواست</button>
        <button className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 px-4 py-3 text-xs font-black"><MessageCircle size={15} /> واتساپ</button>
      </div>
    </div>
  )
}

export default App
