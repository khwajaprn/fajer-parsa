-- Structure-only seed. These rows do NOT claim service availability.
insert into public.web_countries (code, name_fa, name_en, slug, is_featured, sort_order) values
('AE','امارات متحده عربی','United Arab Emirates','uae',true,10),
('IR','ایران','Iran','iran',true,20),
('TR','ترکیه','Turkey','turkey',true,30),
('CN','چین','China','china',true,40),
('SA','عربستان سعودی','Saudi Arabia','saudi-arabia',true,50),
('IQ','عراق','Iraq','iraq',true,60),
('PK','پاکستان','Pakistan','pakistan',false,70),
('UZ','ازبکستان','Uzbekistan','uzbekistan',false,80),
('KZ','قزاقستان','Kazakhstan','kazakhstan',false,90)
on conflict (code) do nothing;

insert into public.web_service_categories (key, name_fa, name_en, description_fa, icon_key, sort_order) values
('visa','ویزا و اقامت','Visa & Residency','ویزای توریستی، تجاری، تحصیلی، کاری، زیارتی، تمدید و اقامت','ticket-check',10),
('business','دعوتنامه و سفر تجاری','Business Travel','دعوتنامه، نمایشگاه، سفر کاری و خدمات شرکتی','briefcase-business',20),
('flight_hotel','پرواز و هتل','Flights & Hotels','درخواست بلیت، رزرو هتل و بسته سفر','plane',30),
('pilgrimage','زیارت و کاروان','Pilgrimage','عمره، کربلا، ایران و خدمات گروهی','building',40),
('documents','اسناد و کنسولی','Documents & Consular','ترجمه، تصدیق، فرم، وقت سفارت و آماده‌سازی اسناد','file-text',50),
('addons','بیمه و خدمات سفر','Travel Add-ons','بیمه، ترانسفر و خدمات مکمل سفر','shield-check',60)
on conflict (key) do nothing;

-- Real service rows are intentionally not seeded.
-- Add them only after Fajr Parsa verifies pricing, requirements and availability.
