<script type='text/javascript'>
//<![CDATA[
// ============================================================
// 1. SITE CONFIGURATION (എഡിറ്റ് ചെയ്യാനുള്ള ഭാഗം)
// ============================================================
const SiteConfig = {
  site: {
    name: "Vazhcha Yugam",
    tagline: "Your Window to the World",
    topBarRight: "Vazhcha Yugam & News On The Go",
    author: "Sudheer Kabeer",
    logoUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyWimc82oqJztatEY0-Y7JNjxpCBPXX7CRH4C_jGty_C53gvW1-PGeIHS6P-QnuS1xXJYZh_6Pj_hxZBOgzIQSZNcR4PORynWGxk6QfrawLeLqvBDhpvRVgb1hkTX5hUbeZq0JGYRGegLvb98Kj9e2d-K_GTGjO9y7XUbqTAAL86UsbkD_UufTlZrgx4o/s1600/Logo-Vazhchayugam.com.png",
    adminPhoto: "https://blogger.googleusercontent.com/img/a/AVvXsEj2MqmUXTWDs1WrvCP3jA9ZPL5hBEqOQ34WklhVH6dJywr8R2MTUbKF58rV0ucb21OrxAhrY0Uedyr_J3oTCwTHhl79TqBKEETc5UvTiojRzBFki54pqVrTGJL6WjTSZ5V-DI-8AT7ai9V3Ws3br-eB4B3ZKbDuQ2W7TBOniWQDZcZ1pJVvAHoLi8sBa2g",
    blogId: "1583601171616902226",
  },
  colors: {
    bg: "#0b0f1a", headerBg: "#161e2d", cardBg: "#1e293b", text: "#ffffff",
    textDim: "#cbd5e1", accent: "#edca01", border: "#334155", red: "#ef4444",
    green: "#25d366", blue: "#0088cc", gold: "#edca01",
    lightBg: "#f1f5f9", lightHeaderBg: "#ffffff", lightCardBg: "#ffffff",
    lightText: "#1e293b", lightTextDim: "#475569", lightAccent: "#b45309", lightBorder: "#cbd5e1"
  },
  social: {
    whatsappGroup: "https://chat.whatsapp.com/K3uIXvieVCB4WoyDDBEq1X",
    whatsappContact: "https://wa.me/+919020645214?text=I need to know the ads rate on vazhchayugam",
    telegram: "https://t.me/vazhchayugam",
    instagram: "https://instagram.com/vazhcha_yugam",
    facebook: "https://facebook.com/vazhchayugam",
    youtube: "https://youtube.com/@vazhchayugam",
    skHome: "https://sudheer.xyz",
  },
  ticker: { label: "FLASH NEWS", maxPosts: 15, speedSeconds: 60 },
  trending: { maxPosts: 8 },
  districts: [
    { name: "Thiruvananthapuram", label: "Thiruvananthapuram" }, { name: "Kollam", label: "Kollam" },
    { name: "Pathanamthitta", label: "Pathanamthitta" }, { name: "Alappuzha", label: "Alappuzha" },
    { name: "Kottayam", label: "Kottayam" }, { name: "Idukki", label: "Idukki" },
    { name: "Ernakulam", label: "Ernakulam" }, { name: "Thrissur", label: "Thrissur" },
    { name: "Palakkad", label: "Palakkad" }, { name: "Malappuram", label: "Malappuram" },
    { name: "Kozhikode", label: "Kozhikode" }, { name: "Wayanad", label: "Wayanad" },
    { name: "Kannur", label: "Kannur" }, { name: "Kasaragod", label: "Kasaragod" }
  ],
  categories: [
    { label: "Accidents", name: "Accident" }, { label: "Politics", name: "Politics" },
    { label: "Global News", name: "international" }, { label: "Health", name: "Health" },
    { label: "Technology", name: "Tech%20News" }
  ],
  policies: [
    { label: "About Us", url: "/p/about-us.html" }, { label: "Privacy Policy", url: "/p/privacy-policy.html" },
    { label: "Terms & Conditions", url: "/p/terms-and-conditions.html" }, { label: "Disclaimer", url: "/p/disclaimer.html" }
  ],
  footerMenu: [
    { label: "Home", url: "/" }, { label: "About Us", url: "/p/about-us.html" },
    { label: "Contact", url: "/p/contact.html" }, { label: "Privacy Policy", url: "/p/privacy-policy.html" },
    { label: "Disclaimer", url: "/p/disclaimer.html" }
  ],
  ads: {
    ad1: { active: true, img: "https://blogger.googleusercontent.com/img/a/AVvXsEiCSW9TjJ1prgcVVY6HFv5pvZlOTHVcd1Qshbwok5nMuecyHB2dfAM9zlBGZat3x6YrkSZEnbGySIsmK-PIcARRNZoryLugAfxRnln0BlwxP-r7cv4e2G8q7C7znFooFlxkwCOAdwCHlmcChC-lmpMirxLFB_COzLy1sVmjfHPliko-MP2jVStrOOzhDUyq=s16000", link: "https://chat.whatsapp.com/K3uIXvieVCB4WoyDDBEq1X" },
    ad2: { active: false, img: "https://via.placeholder.com/728x90", link: "#" },
    readAlso: { active: true },
    ad3: { active: false, img: "https://via.placeholder.com/728x90", link: "#" },
    ad4: { active: true, img: "https://sudheer.xyz/img/logo-sk.webp", link: "https://sudheer.xyz" },
    ad5: { active: true, img: "https://blogger.googleusercontent.com/img/a/AVvXsEhXSPhB1eth9rPp7UhPVhYqpMEgKN33dtPm0g-wGlmFJb5HiXqdbcqmFgNoqurIpdA1EpoHlhKPJZwYzQC5m5HRM0H74aH6yhyoRXnBCD6l1sCxlgFXo5SvMnpCq-DTsFGfN4kOd9Pq9V0usBCkxGAhqyddsV2zn5bo4ajkuqRkJYvFj6O08bEtphKuhNs", link: "https://artofmentalism.in" },
    ad6: { active: false, img: "https://via.placeholder.com/728x90", link: "#" },
  },
  injections: [
    { key: 'ad1', type: 'ad', pIndex: 0 }, { key: 'ad2', type: 'ad', pIndex: 1 },
    { key: 'readAlso', type: 'related', pIndex: 2 }, { key: 'ad3', type: 'ad', pIndex: 3 },
    { key: 'ad4', type: 'ad', pIndex: 4 }, { key: 'ad5', type: 'ad', pIndex: 5 }, { key: 'ad6', type: 'ad', pIndex: 6 },
  ],
  series: { 'mind-is-a-magician': 20, 'the-project-house': 2, 'novel-horror': 5 },
};
//]]>
</script>
